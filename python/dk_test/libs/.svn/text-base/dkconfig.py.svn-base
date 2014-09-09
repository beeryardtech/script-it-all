#-------------------------------------------------------------------------------
# Name:					dkconfig.py
#-------------------------------------------------------------------------------
from __future__ import with_statement

__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "11/14/12"
__copyright__		= "(c) SIOS Technology Corp 2012"

import logging
import logging.config
import os
import re
import subprocess
import sys
from collections import OrderedDict

import dklog
from dkutils import buildTempConfigFromFile, cleanValue, cleanAsType, normjoin
from dkutils import sha1File
from nodes import dknode

#The try statements are needed when using different versions of Python.
#For Example using both Cpython 3.2 and IronPython 2.7
try:
	from configparser import ConfigParser, ExtendedInterpolation
	from xmlrpc.server import SimpleXMLRPCServer
	from xmlrpc.client import ServerProxy
	import winreg
except ImportError:
	from ConfigParser import SafeConfigParser as ConfigParser
	from SimpleXMLRPCServer import SimpleXMLRPCServer
	from xmlrpclib import ServerProxy
	import _winreg as winreg


class dkconfig(ConfigParser, object):
	def __init__(self, _clusterini, _constantsini=None, _logLevel=None):
		"""
			Purpose:
			Configuration parser for the dk_test harness. clusterini is path to
			the cluster conf file, "cluster.ini". The porperty dictionaries
			(such as settings or paths) have lower case keys.

			Constants.ini stores the framework global constants.

			For readability use camelCase key names and use .lower().
			Ex:
				settings["defaultSectionName".lower()]
		"""
		#Inherent the config parser's properties
		try:
			super(dkconfig, self).__init__(allow_no_value = True,
										interpolation=ExtendedInterpolation())
		except NameError:
			#Older versions (a la Jython) do not have any useful kwargs
			super(dkconfig, self).__init__()

		if _constantsini is None:
			_constantsini = normjoin(os.path.dirname(_clusterini),
										"constants.ini")
		self.read(_constantsini)

		#Now read in the configuration file. This file will override values
		#In the constants file. It is not kept in source control.
		self.read(_clusterini)

		#General test framework settings
		self.settings				= dict((key, cleanAsType(val)) for
										(key, val) in self.items("settings") )

		#These strings will be turned into Lists of strings
		self.settings["eventlogs"]	= self.splitAndLower(
													self.settings["eventlogs"])
		self.settings["loggers"] 	= self.splitAndLower(
													self.settings["loggers"])
		self.settings["detailskeys"]= self.splitAndLower(
													self.settings["detailskeys"])
		self.settings["validpostruncmds"] = self.splitAndLower(
													self.settings["validpostruncmds"])
		self.settings["dklistofdlls"] = self.splitAndLower(
													self.settings["dklistofdlls"])

		#The following are required sections. They will be stored in a
		#dictionary with the same key names as in the source of the config

		#This is a list of predifined apps and scripts that can be used
		self.apps = dict((key, normjoin(val)) for (key, val)
						in self.items("apps") )

		#All the settings related to setup of the internal logging
		self.validLogLevels = ["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"]
		if _logLevel is None:
			self.defaultLogLevel = self.settings.get("defaultloglevel",
														"DEBUG").upper()
		else:
			self.defaultLogLevel = _logLevel.upper()

		if self.defaultLogLevel not in self.validLogLevels:
			self.defaultLogLevel = "DEBUG"

		#All possible states the mirror can be in
		self.mirrorstates			= dict((key, int(cleanValue(val))) for (key, val)
										in self.items("mirrorStates") )

		#Important paths to be used in the framework.
		self.paths					= dict((key, normjoin(os.getcwd(), val)) for
										(key, val) in self.items("paths") )
		self.paths["clusterini"]	= _clusterini
		self.paths["constantsini"]	= _constantsini

		#The replace() does the same things as "{}".format(x). Work around for
		#older implementations of Python (like jython). Change the replace() with
		#the format() function in the future.
		self.settings["logfilecount"] = self.getLogFileCount()
		self.paths["logfilepathfull"] = self.paths["logfilepathbase"].replace(
											"{}", self.settings["logfilecount"])
		self.paths["resultsfilepathfull"] = (self.paths["resultsfilepathbase"].
												replace("{}",
												self.settings["logfilecount"]))
		self.paths["postrunpathfull"] = (self.paths["postrunlogpathbase"].
											replace("{}",
												self.settings["logfilecount"]))

		#Stores the response files for installing, repairing, or removing DK
		self.silentinstall = dict((key, cleanValue(val)) for (key, val)
										in self.items("silentinstall"))

		#The return codes (stored as ints) for the test cases
		#TODO use cleanAsType
		self.returncodes 			= dict((key, int(cleanValue(val))) for
										(key, val) in self.items("returnCodes"))

		#These are important keys within the registry
		self.winreg					= dict((key, cleanValue(val)) for (key, val)
										in self.items("winreg") )

		#There will be set during runEnvSetup()
		self.allVolsFromNodes		= {}
		self.guiClients				= {}
		self.postRunClients			= {}
		self.nodes					= []

		#These are the logging handles that can be used throughout the framework
		self.outputs				= self._getOutputNamesFromDir()
		self.configname				= __name__.split('.')[0]
		self.configfile				= normjoin(__file__)

		#Iterate through each node object
		#TODO: Use list compherension here to make self.nodes
		for sec in self.sections():
			#Only get the sections that start with "node*"
			if sec.startswith("node"):
				#Pass into the node object the section name, the section dict,
				#and then the log handle name.
				self.nodes.append( dknode(self, sec, self.items(sec)) )

		#Create dict of vols where key is hostname and val is the list of all
		#available nodes listed in the node.
		for node in self.nodes:
			hostname = node.props.get("hostname")
			self.allVolsFromNodes[hostname] = node.allVols

		self.allHostnamesFromNodes = [ node.props["hostname"] for node
											in self.nodes ]

		self.definedcmds = self._loadDefinedCmds()


	def getLogFileCount(self):
		"""
		   Purpose:
		   Get the log file count that is used
		"""
		logsDir = self.paths["logsdir"]
		startCount = "001"

		#Default value if dir does not exist or nothing in dir
		if not os.path.exists(logsDir) or len(os.listdir(logsDir)) == 0:
			return startCount

		lastLog = [ fileName for fileName in os.listdir(logsDir)
					if fileName.endswith(".log") ] [-1]

		if not lastLog:
			return startCount

		#Set Log Path value.
		count = int(lastLog.split("_")[1].split(".log")[0])

		#The zfill function pads with 0's
		count = str(count + 1).zfill(3)

		return count

	def _loadDefinedCmds(self):
		"""
			Purpose:
			Create the orderedDictionary that will store all the commands available to
			a test case.
		"""
		definedCmds = OrderedDict()
		commandsPath = self.paths.get("allcommands")

		#If defined, commands will be ordered based on the "commands" config file
		if commandsPath is None:
			#self.logger.debug("No all commands file")
			return definedCmds

		if not os.path.exists(commandsPath):
			self.logger.error("Command file does not exist {}".
									format(commandsPath))
			return definedCmds

		cmdParser = ConfigParser()
		cmdParser.read(commandsPath)

		#Get the full list of commands. Each section can represent more than one
		#command. Each command can be delimited by the defined list in config
		for sec in cmdParser.sections():
			#Each section can be a delimited list of cmds. All the params
			#in the same section have the same parameters.
			for cmd in self.splitAndLower(sec):
				definedCmds[cmd] = OrderedDict()

				#Now we can use the keys as index numbers and iterate in order
				#based on the keys.
				tmp = { index : val.lower() for index, val in
							cmdParser[sec].items() }

				#Each cmd has an ordered dict with the commands and a None val.
				#range(start, stop, step)
				for key in range(0, len(tmp), 1):
					#Sanitize the inputs!!
					cmd, param = cmd.lower(), cleanValue(tmp[str(key)])
					definedCmds[cmd][param] = None

		return definedCmds



	def getPostrunClient(self, target):
		"""
			Purpose:
			Return an instance of the ServerProxy based on the target. This
			function will either create a new one or return an existing instance
			if it has already been created for the given target.
		"""
		uri = self.settings["postrunserveruri"].format(target)
		return self._getServerClients(uri, self.postRunClients)


	def getGuiClient(self, target):
		"""
			Purpose:
			Return an instance of the ServerProxy based on the target. This
			function will either create a new one or return an existing instance
			if it has already been created for the given target.
		"""
		uri = self.settings["guiserveruri"].format(target)
		return self._getServerClients(uri, self.guiClients)


	def _getServerClients(self, uri, clientsDict):
		"""
			Purpose:
			Returns an instance of a client. Appends the client to the dict
			of know clients ("clientsDict"). Client points to "uri".
		"""
		self.logger.debug("Getting client to URI {}".format(uri))

		if uri in clientsDict.keys():
			return clientsDict[uri]

		else:
			clientsDict[uri] = ServerProxy(uri,
											verbose=True,
											allow_none=True)

		with open(self.paths["tmpclusterini"], 'r') as fp:
			tmpFileStr = fp.read()

		setupStatus = clientsDict[uri].runSetup(self.paths["basedir"],
													tmpFileStr)


##		setupStatus = clientsDict[uri].runSetup(self.paths["basedir"],
##													self.paths["tmpclusterini"])

		if setupStatus == self.returncodes["setupcomplete"]:
			self.logger.debug("Successful setup of client to URI {}".
								format(uri))
		else:
			self.logger.debug("Failed to setup client to URI {}".
								format(uri))

		return clientsDict[uri]


	def runFileSetup(self):
		"""
			Purpose:
			Setup the temp files. Typical use is for setup of remote systems.
		"""
		#Create the logs and tmp directories
		if not os.path.exists(self.paths["tmpdir"]):
			os.mkdir(self.paths["tmpdir"])

		if not os.path.exists(self.paths["logsdir"]):
			os.mkdir(self.paths["logsdir"])

		#Create checksum for the big file
		self.settings["checksumbigfile"] = sha1File(self.paths["bigfile"])

		#Clear the event logs
		dklog.clearEventLogs(self)

		#Write out the temp config file. This lets the ExtendedInterpolation
		#to run and fillout the details. The overridesDict are options that will
		#be overridden during the interpolation and writting to the file.
		overridesDict =	{"paths" :
							{"logFilePathFull" :
									self.paths["logfilepathfull"],
								"postrunLogPathFull" :
									self.paths["postrunpathfull"],
								"resultsFilePathFull" :
									self.paths["resultsfilepathfull"]
							},
						"settings" :
							{"checksumBigFile" :
									self.settings["checksumbigfile"],
								"defaultLogLevel" :
									self.defaultLogLevel,
								"logFileCount" :
									self.settings["logfilecount"]
							}
						}

		configPaths = [ self.paths["clusterini"],
						self.paths["constantsini"],
						self.paths["logConfigPath".lower()] ]

		buildTempConfigFromFile(self.paths["tmpClusterIni".lower()],
									configPaths,
									overrides=overridesDict )


	def runEnvSetup(self):
		"""
			Purpose:
			Used for full setup of the environment.
		"""
		self.runFileSetup()

		#Use the logging config file to setup the loggers
		loggerList = dklog.initAndReturnLoggers(self.settings["loggers"],
													self.paths["tmpclusterini"])

		#Set handlers to class memembers
		self.logger = loggerList.get(self.settings.get("filelogger"))

		#'Results' logger always uses the 'info' logging level
		self.results = loggerList.get(self.settings.get("resultslogger")).info
		self.event = loggerList.get(self.settings.get("eventlogger"))
		self.stdout = loggerList.get(self.settings.get("stdoutlogger"))

		#Welcome the user to the testsuite (tests to see if logging is working)
		self.logger.info("Start of Test Run")
		self.results("Start of Test Run")


	def _runRegSetup(self):
		"""
			Purpose:
			Setups stuff in registry. Usually called as part of "dkconfigsetup"
		"""
		#TODO Add registry changes to make auto login possible.


		pass


	#---------------------------------------------------------------------------
	# These functions will have the logging facility available
	#---------------------------------------------------------------------------
	def getExpectedOutput(self, params):
		"""
			Purpose:
			Returns the text output found the the text file. Uses string
			formatter on the params to fill in missing values.
		"""
		expectedOutput				= ""
		outputPath					= params.get("expectedoutput")

		if not outputPath:
			return None

		outputPath = normjoin(self.paths["outputsdir"], outputPath )

		if not outputPath.endswith(".txt"):
			outputPath += ".txt"

		if not os.path.exists(outputPath):
			return None

		#Read in file as a byte stream (to perserve line chars). Then use
		#the string formatter to replace all {name} entries with their
		#respective values.
		with open(outputPath, 'rb') as outputFile:
			expectedOutput = outputFile.read().decode("utf-8")
			expectedOutput = expectedOutput.format(**params)

		return expectedOutput


	def runFinalTearDown(self):
		"""
			Purpose:
			Complete all final tasks for the test run.
		"""
		#Log final message
		self.logger.info("Test run has completed. Getting event logs now. " +
							"Have a good day.")

		#Get final event logs
		dklog.saveEventLogs(self)

		allClients = dict(self.postRunClients, **self.guiClients)

		#Run tearDown to all remote clients. Union the client dicts
		for hostname, client in allClients.items():
			self.logger.debug("Tearing down client {}".format(hostname))
			client.runTearDown()

		#Finally, close all log handles
		logging.shutdown()


	#---------------------------------------------------------------------------
	# Helper functions
	#---------------------------------------------------------------------------
	def splitAndLower(self, inputStr):
		"""
		   Purpose:
		   Split strings using the list of delimite from config and lower all
		   values. Returns as a list
		"""
		mask = "[" + self.settings["delimiters"] +  "]+"
		return [ value.lower() for value in re.split(mask, inputStr) ]


	def _getOutputNamesFromDir(self):
		"""
			Returns:
			Dictionary of the file names listed in the OutputDir. The keys can be
			either the full basename or the basename with no extension.
		"""
		outputs 				= {}

		outputdir = self.paths.get("outputsdir")
		for filename in os.listdir(outputdir):
			path = normjoin(outputdir, filename)
			outputs[ filename ] = path
			outputs[ os.path.splitext(filename)[0] ] = path

		return outputs


if __name__ == "__main__":
	#The code here can be used for unit testing functions
	clusterini = r"c:\Programs\dk_test\scenarios\cluster.ini"
	constantsini = r"c:\Programs\dk_test\scenarios\constants.ini"
	#clusterini = r"c:\Programs\dk_test\scenarios\cluster.ini"

	config = dkconfig(clusterini,
##						_constantsini=constantsini,
						_logLevel="debug")
	#config.runEnvSetup()
	#config.runFinalTearDown()
	pass
