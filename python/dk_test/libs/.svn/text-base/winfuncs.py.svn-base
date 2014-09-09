#-------------------------------------------------------------------------------
# Name:             winfuncs.py
#-------------------------------------------------------------------------------
from __future__ import with_statement

__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "03/22/2013"
__copyright__		= "(c) SIOS Technology Corp 2013"

import functools
import os
import subprocess

try:
	import winreg
	from configparser import ConfigParser
except ImportError:
	import _winreg as winreg
	from ConfigParser import ConfigParser


from dkutils import cleanValue, cleanAsType, doOnNodes, normjoin
from dkutils import buildTempConfigFromStr
from dkconfig import dkconfig


#-------------------------------------------------------------------------------
# Actions
#-------------------------------------------------------------------------------
def deletealljobs(config, hostnames=None):
	"""
		Purpose:
		Tries to cleanup volumes using EMcmd commands.

        Params
		config - The config object
		Hostnames - A delimited string of hostnames. If None given then use all
					nodes defined in config.
	"""

	expectedRetCode = True
	funcObj = functools.partial(deletealljobsfromnode, config)
	funcObj.__name__ = deletealljobsfromnode.__name__
	message = "At least one command failed. That could be okay."

	return doOnNodes(config, funcObj, expectedRetCode, message, hostnames)


def deleteallmirrors(config, hostnames=None):
	"""
		Purpose:
		Tries to cleanup system using by removing registry entries.

		Params
		config - The config object
		Hostnames - A delimited string of hostnames. If None given then use all
					nodes defined in config.
	"""
	expectedRetCode = True
	funcObj = functools.partial(deleteallmirrorsfromnode, config)
	funcObj.__name__ = deleteallmirrorsfromnode.__name__
	message = "At least one command failed. That could be okay."


	return doOnNodes(config, funcObj, expectedRetCode, message, hostnames)



def deletealljobsfromnode(config, hostname):
	"""
	   Purpose:
	   Removes all job reg entries from given host. If hostname is None, then
	   executed on local system.
	"""
	returnCode = None

	jobsKeyPath = config.winreg["jobs"]
	subKeyIndex = 0
	computer = r"\\{}".format(hostname)

	try:
		with winreg.ConnectRegistry(computer,
									winreg.HKEY_LOCAL_MACHINE) as remoteHandle:

				with winreg.OpenKey(remoteHandle,
									jobsKeyPath,
									0,
									winreg.KEY_ALL_ACCESS) as jobsKey:

					#Iterate over all subkeys and delete each one by one.
					try:
						while True:
							subkey = winreg.EnumKey(jobsKey,
														subKeyIndex)
							winreg.DeleteKey(jobsKey,
												subkey)
							subKeyIndex += 1

					#WinErr thrown at end of subkey index
					except WindowsError as err:
						config.logger.debug("Deleted all jobs for system {}".
												format(hostname))
						returnCode = True

					#Some error happened. We will handle it here.
					except Exception as err:
						config.logger.exception("Error deleting jobs. Continueing")
						returnCode = False

	except WindowsError as err:
		config.logger.exception("Failed to connect to registry at {}. Continuing"
									.format(hostname))
		returnCode = False

	return returnCode


def deleteallmirrorsfromnode(config, hostname):
	"""
		Purpose:
		Uses emcmd commands to delete all mirrors on a given system. If hostname
		is None, then executed on local system. Return True if there are no
		errors while deleting mirrors.
	"""
	returnCode = None

	emcmd = config.apps["emcmd"]
	maxLen = config.settings["maxoutputlen"]
	cmdList = ["DELETEMIRROR",
				"DELETELOCALMIRRORONLY",
				"CLEARSWITCHOVER"]

	volListForNode = config.allVolsFromNodes[hostname]

	hostname = hostname if hostname is not None else "."

	for vol in volListForNode:
		for cmd in cmdList:
			try:
				output = subprocess.check_output([emcmd,
													hostname,
													cmd,
													vol])
				returnCode = True

			except subprocess.CalledProcessError as err:
				#TODO: Log status of each mirror
				#If here then note the errors return code.
				#Set the returnCode to "false"
				output	= err.output
				errRetCode = err.returncode

				config.logger.debug("Host {}, Cmd {}, vol {}, errRet {}, out {}".
					format(hostname,
							cmd,
							vol,
							errRetCode,
							output[:maxLen]))

	return returnCode


def dkinstall(config, installPath=None, dkexepath=None):
	"""
		Purpose:
		Runs a silent install on Datakeeper. If installPath is None, then use
		extmirrbase path defined in config, otherwise use given value.
		If dkexepath, use path from config, otherwise use given value.
	"""
	tmpInstallResponsePath  = config.paths["dktmpinstall"]
	dkInstallStr = config.silentinstall["dkinstall"]
	dkInstallerID = config.silentinstall["dkinstallerid"]

	#This are the sections used in the overrides.
	installPathSection = "{}-SdAskDestPath-0".format(dkInstallerID)
	registerUserSection = "{}-SdRegisterUserEx-0".format(dkInstallerID)


	#Either use the default values or use the one passed in.
	if installPath is None:
		installPath = config.paths["extmirrbase"]
	else:
		installPath = normjoin(installPath)

	if dkexepath is None:
		dkexepath = config.paths["dkexepath"]
	else:
		dkexepath = normjoin(dkexepath)


	overridesDict = {installPathSection :
						{"szDir" :
							installPath
						},
					registerUserSection :
						{"szName" :
							config.settings["nodedomain"] + "\\" +
							config.settings["nodeusername"],
						"szCompany" :
							config.settings["nodepassword"],
						"szSerial" :
							config.settings["nodepassword"]
						}

					}

	#Save off to a tmp file to be used by the installer.
	buildTempConfigFromStr(tmpInstallResponsePath,
							dkInstallStr,
							overrides=overridesDict)

	return silentinstaller(config, dkexepath, tmpInstallResponsePath)


def dkrepair(config, dkexepath=None):
	"""
		Purpose:
		Runs a silent repair on Datakeeper. If dkexepath, use path from
		config, otherwise use defined value.
	"""
	tmpRepairResponsePath  = config.paths["dktmprepair"]
	dkRepairStr = config.silentinstall["dkrepair"]

	#Either use the default values or use the one passed in.
	if dkexepath is None:
		dkexepath = config.paths["dkexepath"]
	else:
		dkexepath = normjoin(dkexepath)

	#Save off to a tmp file to be used by the installer.
	buildTempConfigFromStr(tmpRepairResponsePath,
							dkRepairStr)

	return silentinstaller(config, dkexepath, tmpRepairResponsePath)


def dkremove(config, dkexepath=None):
	"""
		Purpose:
		Runs a silent install on Datakeeper. If installPath is None, then use
		path defined in config, otherwise use value. If dkexepath, use path from
		config, otherwise use defined value.
	"""
	tmpRemoveResponsePath  = config.paths["dktmpremove"]
	dkRemoveStr = config.silentinstall["dkremove"]

	#Either use the default values or use the one passed in.
	if dkexepath is None:
		dkexepath = config.paths["dkexepath"]
	else:
		dkexepath = normjoin(dkexepath)

	#Save off to a tmp file to be used by the installer.
	buildTempConfigFromStr(tmpRemoveResponsePath,
							dkRemoveStr)

	return silentinstaller(config, dkexepath, tmpRemoveResponsePath)



def silentinstaller(config, exePath, responseFilePath):
	"""
		Purpose:
		Runs the silent installer functionality on a exe. This is used by the
		paticular wrapper functions.
	"""
	config.logger.debug("Path to exe " + exePath)
	config.logger.debug("Path to reponsefile " + responseFilePath)

	#Only a tmp file. Will be copied into the log
	logFilePath = normjoin(r"C:\tmp",
								os.path.basename(responseFilePath) + ".log")

	installCmd = [exePath,
					"/s",
					"/f1" + responseFilePath,
					"/f2" + logFilePath ]

	try:
		output = subprocess.check_output(installCmd, stderr=subprocess.STDOUT)
	except subprocess.CalledProcessError as err:
		config.logger.exception("DK install failed")
		return False

	with open(logFilePath, 'r') as logFP:
		logFileOutput = logFP.read()

	#Log file is a ini file. Parse it and find the result code.
	logParser = ConfigParser().read(logFilePath)
	result = logParser.get("ResponseResult", "ResultCode")

	#Logs the results
	config.logger.info("Silent installer output: " + output)
	config.logger.info("Silent installer log output: " + logFileOutput)

	if result == 0:
		config.logger.info("Silent installer successful.")
		return True
	else:
		config.logger.error("Silent installer failed.")
		return False


def sleep(config, seconds):
	"""

	"""
	import time

	if isinstance(seconds, list):
		val = seconds[0]
	else:
		val = seconds

	config.logger.info("Sleeping for {} seconds".format(seconds))
	time.sleep(float(val))

	return True


if __name__ == '__main__':
	from dkconfig import dkconfig
	config = dkconfig(r"c:\Programs\dk_test\scenarios\cluster.ini",
						r"c:\Programs\dk_test\scenarios\constants.ini")
	config.runEnvSetup()
	dkinstall(config)
	pass



















