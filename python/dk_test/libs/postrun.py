#-------------------------------------------------------------------------------
# Name:             postrun.py
#-------------------------------------------------------------------------------
from __future__ import with_statement
__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "01/17/2013"
__copyright__		= "(c) SIOS Technology Corp 2013"

import logging
import os
import subprocess
import sys
from time import ctime, sleep, strftime, time, localtime

from dkutils import cleanValue, cleanAsType, normjoin, md5File, sha1File
from dkconfig import dkconfig
from dklog import clearEventLogs, initAndReturnLoggers, saveEventLogs

try:
	import clr
	import System.Collections.Generic.List as List
	from System.IO import IOException
	import System
except ImportError as err:
	print("This can only be ran in IronPython")
	sys.exit(1)


class postrun(object):
	"""
	   Purpose:
	   The set of commands to be used at the end of a test case. Typical use
	   include verifying the create/delete of mirrors or if file checksums are
	   correct between systems.
	"""

	def __init__(self):
		"""
		   Purpose: Begin here. Add class constants here
		"""
		super(postrun, self).__init__()
		pass


	def runSetup(self, basedir, clusterini):
		"""
			Purpose:
			Initialize the class and the environment
		"""
		try:
			#Setup sys path and config
			sys.path.insert(0, basedir)
			sys.path.insert(0, normjoin(basedir, "libs"))

			#Allow configInfo to be either a path to the config file or a string
			#containing all the config info
			if clusterini.count("\n") > 0:
				tmpdir = normjoin(basedir,"tmp")
				if not os.path.exists(tmpdir):
					os.mkdir(tmpdir)

				#Write string to tmp file.
				tmpclusterini = normjoin(tmpdir, "cluster.ini.postrun")
				with open(tmpclusterini, 'w') as tmpfp:
					tmpfp.write(clusterini)
					tmpfp.flush()

				self.config = dkconfig(tmpclusterini)
				self.clusterini = tmpclusterini

			elif os.path.exists(clusterini):
				self.config = dkconfig(clusterini)
				self.clusterini = clusterini

			else:
				raise Exception("Config cannot be empty or None")


			#Import some constants
			self.bigfile = self.config.paths["bigfile"]
			self.listOfDLLs = self.config.settings["dklistofdlls"]
			self.servicename = self.config.settings["servicename"]
			self.statesleep = float(self.config.settings["statesleeptimer"])
			self.stateloop = int(self.config.settings["statewaitloop"])

			#Create logging facilities
			loggerList = initAndReturnLoggers(self.config.settings["postrunlogger"],
												self.clusterini)
			self.logger = loggerList.get(self.config.settings["postrunlogger"])

			self.logger.info("Initialized Postrun client")
			self.tmplogfile = normjoin(self.config.paths["tmpdir"], "tmp.log")

			#Possible return codes
			self.false = int(self.config.returncodes["false"])
			self.success = int(self.config.returncodes["success"])
			self.setupcomplete = int(self.config.returncodes["setupcomplete"])

			#Clear event logs on system
			self.logger.info("Clearing system logs now")
			clearEventLogs(self.config)

			#Adds a reference to the dlls for IronPython
			#Need to append the dir to sys.path so AddRef can pull them in
			sys.path.append(self.config.paths["snapindir"])
			for dll in self.listOfDLLs:
				clr.AddReferenceToFile(dll)

			#Import the file with all the Steeleye Imports
			import dkiron

			#Set the instances from dkiron
			self.extmirrsvc = dkiron.dksvc
			self.sdrsvc = dkiron.sdrsvc
			self.cachingsvc = dkiron.cachingsvc
			self.extractor = dkiron.extractor
			self.states = dkiron.MirrorState
			self.roles = dkiron.MirrorRole

		except System.Exception as err:
			self.logger.exception("System Exeception in " + __name__)
			raise err

		except Exception as err:
			self.logger.exception("Exeception in " + __name__)
			raise err

		#Setup is complete
		return self.setupcomplete



	def runTearDown(self):
		"""
			Purpose:
			Final cleanup
		"""
		self.logger.info("Tearing down logging. Saving event logs first.")
		saveEventLogs(self.config)

		logging.shutdown()


	#--------------------------------------------------------------------------
	# Decorators
	#--------------------------------------------------------------------------
	def logActions(pfunc):
		"""
			Purpose:
			Logs any exceptions during the remote call.
		"""
		def magic_func(self,*args, **kwargs):
			name = pfunc.__name__
			result = None
			self.logger.debug("Staring command " + name)

			try:
			#"Self" is needed here for actions, since its not passed in args
				result = pfunc(self, *args, **kwargs)
				return result

			except Exception as err:
				self.logger.exception("Error in command " + name)
				return self.false

			except System.Exception as err:
				self.logger.exception("System Error in command " + name)
				return self.false


		#Assign decorated function original functions docstring and name
		magic_func.__name__ = pfunc.__name__
		magic_func.__doc__	= pfunc.__doc__

		return magic_func

	def checkActions(pfunc):
		"""
		   Purpose:
		   Checks the result of mirror or volume actions. Retries the action
		   "self.stateloop" times and then returns if it successes or not.
		   Also, logs results to standard logging

		   Usage:
				@checkActions
				def _action(self): ...
		"""
		def magic_func(self, *args, **kwargs):
			result = self.false
			count = 0
			name = pfunc.__name__

			#While handles when result can be either None, or ""
			while not result and count < self.stateloop:
				try:
					#Execute original function
					result = pfunc(self, *args, **kwargs)
					return result
				#Needs to only catch the error we expect...
				except Exception as err:
					#Using debug here since we expect to get some errs
					self.logger.debug("Logging in checkActions: " + name)
					self.logger.debug(err)
					sleep(self.statesleep)
				finally:
					count += 1

		#Assign decorated function original functions docstring and name
		magic_func.__name__ = pfunc.__name__
		magic_func.__doc__	= pfunc.__doc__

		return magic_func

	#--------------------------------------------------------------------------
	# Valid Commands
	#--------------------------------------------------------------------------
	@logActions
	def verifymirror(self, source, target, sourceVol, targetVol):
		"""
		   Purpose:
		   Validates mirror using the CmClient API, .NET CRL, and checksum of
		   a sample file (defined in config).
		"""
		#First check, is the vol mirroring?

		if self.waitForMirroring(source, sourceVol) == self.false:
			self.logger.info("On source {}, the volume {} is not mirroring".
								format(source, sourceVol))
			return self.false

		#Second, is the checksum valid?
		if self.verifychecksum(source, target, sourceVol, targetVol) == self.false:
			self.logger.info("On source {}, the volume {} has invalid checksum".
					format(source, sourceVol))
			return self.false

		return self.success

	@logActions
	def verifychecksum(self, source, target, sourceVol, targetVol):
		"""
		   Purpose:
		   Find the checksum of a known file. Has to unlock the volume, run the
		   checksum, then relocks the volume.
		"""
		expectedChecksum = str(self.config.settings["checksumbigfile"])
		checksumResult = self.false
		targetVolPath = targetVol + r":\\"

		filepath = str(normjoin(targetVolPath,
							os.path.basename(self.config.paths["bigfile"])))

##		#We have to wait until resync is done before checking
##		if self.waitForMirroring(source, sourceVol) == self.false:
##			self.logger.error("Volume {} is not mirroring, cannont get checksum".
##								format(sourceVol))
##			return self.false

		self.logger.debug("Sleeping in verifychecksum before unlock")
		sleep(20.0)

		#Unlock the volume. Cannot continue if you cannot unlock the volume
		if self.unlockVolume(source, target, sourceVol, targetVol) == self.false:
			self.logger.error("Failed to unlocked volume " + targetVol)
			return self.false

		checksum = str(sha1File(filepath))
		self.logger.debug("Filepath {} has checksum {}, expecting {}".
							format(filepath, checksum, expectedChecksum))

		self.logger.debug("Sleeping in verifychecksum before lock")
		sleep(20.0)

		#Relock the mirror and continue it.
		if self.lockVolume(source, target, sourceVol, targetVol) == self.false:
			self.logger.error("Failed to lock volume " + targetVol)
			return self.false


		#If the checksum is None, then the file doesn't existed
		if checksum is None:
			self.logger.error("Could not run checksum. File does not exist")
			return self.false

		if checksum == expectedChecksum:
			return self.success
		else:
			return self.false


	@logActions
	def verifydelete(self, source, target, sourceVol, targetVol):
		"""
		   Purpose:
		   Validate the delete of a mirror.
		"""
		if not self.isStateNone(source, sourceVol):
			self.logger.error("In {}, current state is not the expected None".
								format("verifydelete"))
			return self.false

		targetListCount = self._countTargetList(source, sourceVol)
		if targetListCount != 0:
			self.logger.error("In {}, target count is {}, expected 0".
								format(__name__, targetListCount))
			return self.false

		return self.success


	@logActions
	def verifylock(self, target, targetVol, timeout=0, delay=1.0):
		"""
			Purpose:
			Validate that the volume is locked.
		"""
		delayCount = 0.0

		try:
			#Make sure delay is a float
			delay = float(delay)
		except System.Exception as err:
			self.logger.exception("In {}, delay {} is not an float. "
									"Cannot continue".
									format(__name__, delay))
			return self.false

		try:
			#Make sure delay is a float
			timeout = int(timeout)
		except System.Exception as err:
			self.logger.exception("In {}, timeout {} is not an int. "
									"Cannot continue".
									format(__name__, timeout))
			return self.false

		#Should not be able to write to vol.
		while True:
			if self.canTouchFile(targetVol) == self.false:
				return self.success

			sleep(delay)
			delayCount += delay

			#Exit the loop here.
			if timeout < delayCount:
				break

		self.logger.error("Volume {} on target {} is not locked".
								format(targetVol, target))
		return self.false


	@logActions
	def verifyunlock(self, target, targetVol, timeout=0, delay=1.0):
		"""
			Purpose:
			Validate that the volume is locked.
		"""
		delayCount = 0.0

		try:
			#Make sure delay is a float
			delay = float(delay)
		except System.Exception as err:
			self.logger.exception("Delay {} is not an float. Cannot continue".
									format(delay))
			return self.false

		try:
			#Make sure delay is a float
			timeout = int(timeout)
		except System.Exception as err:
			self.logger.exception("In {}, timeout {} is not an int. "
									"Cannot continue".
									format(__name__, timeout))
			return self.false

		#Should not be able to write to vol.
		while True:
			if self.canTouchFile(targetVol) == self.success:
				return self.success

			sleep(delay)
			delayCount += delay

			#Exit the loop here.
			if timeout < delayCount:
				break

		#The volume was not unlocked by timeout. So return false
		self.logger.error("Volume {} on target {} is still locked".
									format(targetVol, target))
		return self.false


	def panic(self, target, delay=0):
		"""
			Purpose:
			Panic the current system. Will delay "delay" number of seconds.
			Will return first before panicing, that is run the panic is the
			background.
		"""
		#Check first before starting...
		bangscript = str(self.config.apps["bangscript"])
		bangexe = str(self.config.apps["bang"])

		if  not os.path.exists(bangscript):
			self.logger.error("In {}, cannot panic, script does not exist".
								format(__name__))
			return self.false

		if  not os.path.exists(bangexe):
			self.logger.error("In {}, cannot panic, executable does not exist".
								format(__name__))
			return self.false

		if not isinstance(delay, int):
			self.logger.error("In {}, delay {} is not an int."
									"Cannot continue".
									format(__name__, delay))
			return self.false

		self.logger.info("Panicing system. Delay is {}".format(delay))
		cmd = [sys.executable,
				bangscript,
				bangexe,
				str(delay),
				'yes' ]
		#cmd = shlex.split("powershell.exe " + bangscript + " " + bangexe +
		#					" " + str(delay),
		#					posix=False)

		panicProc = subprocess.Popen(cmd)

		return self.success


	def writefile(self, target, targetVol, filesize, count=1, background=0):
		"""
			Purpose:
			Use writefile.exe to create "count" number of files of filesize
			"filesize" in the root of "targetVol". If background is "1" fork
			new processes and return success. Otherwise wait for all instances to
			finish.
		"""
		#Check if args are correct
		writeFile = self.config.apps["writefile"]
		if not os.path.exists(writeFile):
			self.logger.error("In {}, cannot writeFile, executable does not exist".
								format(__name__))
			return self.false

		try:
			fileCount = int(count)
		except System.Exception as err:
			self.logger.exception("In {}, cannot continue on {}, count {} "
								"is not an int.".
								format(__name__, target, count))
			return self.false

		if background == 0:
			runInBackground = False
		elif background == 1:
			runInBackground = True
		else:
			self.logger.error("In {}, cannot continue on {}, background is "
								"not a valid value".
								format(__name__, target, background))

		pathMask = targetVol + r":\tmpfile_{}.txt"

		for fileNumber in range(0, fileCount):
			filePath = pathMask.format(fileNumber)
			cmd = [writeFile, "-r", "-q", filePath, filesize]

			if runInBackground:
				subprocess.Popen(cmd, shell=True)
			else:
				try:
					subprocess.check_call(cmd)
				except subprocess.CalledProcessError as err:
					self.logger.exception("In {}, failed with return code {}".
											format(__name__, err.retcode))
					return self.false

		return self.success

	#-------------------------------------------------------------------------------
	# Action Functions
	#-------------------------------------------------------------------------------
	def canTouchFile(self, volume):
		"""
			Purpose:
			Check to see if a file can be written to the vol.
		"""
		#The write should raise an exception if the volume is locked
		#Otherwise the volume is not locked
		tmpPath = volume + r":\touched_file.txt"

		try:
			with open(tmpPath, 'w') as fp:
				fp.write("Test text")
				fp.flush()
			os.remove(tmpPath)
		except IOException as err:
			return self.false

		return self.success


	def unlockVolume(self, source, target, sourceVol, targetVol):
		"""
		   Purpose:
			Pause the mirror on the source (with given target) and then unlock
			the volume on the target.
		"""
		#The None in pauseMirror will pause all targets' mirrors
		pauseResult =  int(self.sdrsvc.pauseMirror(source,
													sourceVol,
													None))

		self.logger.info("Unlocking {} on {}".format(target, targetVol))

##		if not self.canTouchFile(sourceVol):
##			self.logger.debug("Cannot touch file before unlock")

		unlockResult = int(self.sdrsvc.unlockVolume(target, targetVol))

		if self.canTouchFile(sourceVol) == self.success:
			self.logger.debug("Can touch file after unlock")

		self.logger.info("Pause: " + str(pauseResult) + " unlock: " + str(unlockResult))

		#Test to see if volume is really unlocked
		if (pauseResult + unlockResult == 0 and
						self.canTouchFile(targetVol) == self.success):
			return self.success
		else:
			return self.false


	def lockVolume(self, source, target, sourceVol, targetVol):
		"""
			Purpose:
			Lock the volume on the target and resume (continue) the mirror on
			the source The None in resumeMirror will resume all targets' mirrors
		"""
		lockResult = int(self.sdrsvc.lockVolume(target,
													targetVol))

		self.logger.info("Locked {} on {}".format(target, targetVol))

		resumeResult = int(self.sdrsvc.resumeMirror(source,
														sourceVol,
														None))

		#If the returned error codes sum to 0, then return self.success
		#Then check if the volume is actually locked
		if (lockResult + resumeResult == 0 and
					self.canTouchFile(targetVol) == self.false):
			return self.success
		else:
			return self.false


	def waitForMirroring(self, source, sourceVol):
		"""
			Purpose:
			Keep checking until mirror goes into mirroring state.
		"""
		for count in range(0, self.stateloop):
			if (self.isStateResync(source, sourceVol) or
					not self.isStateMirroring(source, sourceVol)):
				self.logger.debug("On {}, Mirror {} is out of resync".
									format(source, sourceVol))
				sleep(self.statesleep)
				continue
			else:
				self.logger.debug("On {}, Mirror {} mirroring".
									format(source, sourceVol))
				return self.success

		self.logger.error("On {}, Mirror {} never got out of resync".
							format(source, sourceVol))
		return self.false


	def isStateBroken(self, source, sourceVol):
		"""
		   Purpose:
		   Check if mirror is in the broken state after a change of state.
		   Will continue to check until the "statewait" timer is reached.
		"""
		return self._stateChecker(self.states.Broken, source, sourceVol)

	def isStateMirroring(self, source, sourceVol):
		"""
		   Purpose:
		   Check if mirror is in the mirroring state after a change of state.
		   Will continue to check until the "statewait" timer is reached.
		"""
		return self._stateChecker(self.states.Mirror, source, sourceVol)


	def isStateResync(self, source, sourceVol):
		"""
		   Purpose:
		   Check if mirror is in the mirroring state after a change of state.
		   Will continue to check until the "statewait" timer is reached.
		"""
		return self._stateChecker(self.states.Resync, source, sourceVol)


	def isStateNone(self, source, sourceVol):
		"""
		   Purpose:
		   Check if mirror is in the mirroring state after a change of state.
		   Will continue to check until the "statewait" timer is reached.
		"""
		#Cant use "states.None" cuz thinks that is a syntax error, but that is ok.
		none = self.states.Mirror
		try:
			self._stateChecker(none, source, sourceVol)
		except (ValueError, AttributeError) as err:
			#Error raised when try to get TargetList. Thus there is no mirror.
			#self.logger.exception("In isStateNone")
			self.logger.debug("In {}, returning sucess {} for {}".
								format("isStateNone", source, sourceVol))
			return True

		return False


	def _countTargetList(self, source, sourceVol):
		"""
			Purpose:
			Count number of elements in TargetList
		"""
		for count in range(0, self.stateloop):
			volInfo = self._getVolInfo(source, sourceVol)

			#Get current Target Count. Compare to length of TargetList. If
			#if different loop and try again. If they never equal, raise exception
			#When they are equal return that value.
			if volInfo.TargetCount != len(volInfo.TargetList):
				self.logger.debug("TargetCount != TargetList for source {} vol {}".
									format(source, sourceVol))
				continue
			else:
				return int(volInfo.TargetCount)


	def _getVolInfo(self, source, sourceVol):
		"""
		   Purpose:
		   Gets the mirrors volume info. This can be used to tell current state and
		   other information.
		"""
		return self.sdrsvc.getVolumeInfo(source, sourceVol)


	def _stateChecker(self, state, source, sourceVol):
		"""
			Purpose:
			Check if "sourceVol" is in the given "state". This check
			"self.stateloop" number of times.
		"""
		volInfo = self._getVolInfo(source, sourceVol)
		return (volInfo.TargetList[0].MirrorState == state)



def testpostrun():

	emcmd = r"c:\Program Files (x86)\SteelEye\DataKeeper\emcmd.exe"
	source = "172.17.105.149"
	target = "172.17.105.148"
	sourceVol = "E"
	targetVol = "E"

	intTimeout = 10
	intDelay = 2
	writeCount = 4
	filesize = "200M"

	with open(r"C:\programs\dk_test\tmp\cluster.ini.tmp", 'r') as fp:
		lines = fp.read()

	subprocess.call([emcmd, source, "createmirror", sourceVol, target, "s"])
	sleep(3.0)
	#sleep(10.0)
	subprocess.call([emcmd, source, "getmirrorvolinfo", sourceVol])
	postRunObj = postrun()
	#sleep(5.0) # wait a little while first
	#postRunObj.runSetup(r"C:\progams\dk_test",
	#						r"C:\Programs\dk_test\tmp\cluster.ini.tmp")
	postRunObj.runSetup(r"C:\programs\dk_test", lines)

	result = postRunObj.verifymirror(source, target, sourceVol, targetVol)

	subprocess.call([emcmd, source, "deletemirror", sourceVol])
	result = postRunObj.verifydelete(source, target, sourceVol, targetVol)

	#Test lock
	#subprocess.call([emcmd, target, "lockvolume", targetVol])
	#result = postRunObj.verifylock(target, targetVol)
	#result = postRunObj.verifylock(target, targetVol, timeout=intTimeout)
	#result = postRunObj.verifylock(target, targetVol, delay=intTimeout)
	#result = postRunObj.verifylock(target, targetVol, timeout=intTimeout, delay=intDelay)
	#result = postRunObj.verifylock(target, targetVol, timeout="gg", delay="ff")
	#result = postRunObj.verifylock(target, targetVol, timeout="gg", delay=intDelay)

	#subprocess.call([emcmd, target, "unlockvolume", targetVol])
	#result = postRunObj.verifylock(target, targetVol)
	#result = postRunObj.verifylock(target, targetVol, timeout=intTimeout)
	#result = postRunObj.verifylock(target, targetVol, delay=intTimeout)
	#result = postRunObj.verifylock(target, targetVol, timeout=intTimeout, delay=intDelay)
	#result = postRunObj.verifylock(target, targetVol, timeout=intTimeout, delay="ff")

	#Test verify unlock
	#subprocess.call([emcmd, target, "lockvolume", targetVol])
	#result = postRunObj.verifyunlock(target, targetVol)
	#result = postRunObj.verifyunlock(target, targetVol, timeout=intTimeout)
	#result = postRunObj.verifyunlock(target, targetVol, delay=intDelay)
	#result = postRunObj.verifyunlock(target, targetVol, timeout=intTimeout, delay=intDelay)
	#result = postRunObj.verifyunlock(target, targetVol, timeout=intTimeout, delay="adsf")
	#result = postRunObj.verifyunlock(target, targetVol, timeout="adfdf", delay="adsf")
	#result = postRunObj.verifyunlock(target, targetVol, timeout="adfdf", delay=intDelay)

	#subprocess.call([emcmd, target, "unlockvolume", targetVol])
	#result = postRunObj.verifyunlock(target, targetVol)
	#result = postRunObj.verifyunlock(target, targetVol, timeout=intTimeout)
	#result = postRunObj.verifyunlock(target, targetVol, delay=intDelay)
	#result = postRunObj.verifyunlock(target, targetVol, timeout=intTimeout, delay=intDelay)

	#Test panic
	#result = postRunObj.panic(target)
	#result = postRunObj.panic(target, delay=intDelay)

	#Test writefile
	#subprocess.call([emcmd, source, "deletemirror", sourceVol])
	#result = postRunObj.writefile(target, targetVol, filesize)
	#result = postRunObj.writefile(target, targetVol, filesize, count=writeCount)
	#result = postRunObj.writefile(target, targetVol, filesize, count=writeCount, background=1)

	pass


if __name__ == '__main__':
	testpostrun()
	pass
