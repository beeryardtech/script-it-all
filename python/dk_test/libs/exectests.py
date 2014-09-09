#-------------------------------------------------------------------------------
# Name:             exectests.py
#-------------------------------------------------------------------------------
from __future__ import with_statement
"""
	Purpose:
	Creates and executes test scenarios as defined in the test suite. Start here
	to unit test each test scenario. Use the "if main" construct to define
	which test suite or test scenario to run.
"""
__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "11/14/12"
__copyright__		= "(c) SIOS Technology Corp 2012"

import inspect
import imp
import re
import os
import subprocess
from collections import OrderedDict
from copy import deepcopy
from time import sleep


from dkutils import cleanValue, cleanAsType, isModule, normjoin, netHelp
from winfuncs import deletealljobsfromnode, deleteallmirrorsfromnode

try:
	from configparser import ConfigParser, ExtendedInterpolation
	from configparser import InterpolationMissingOptionError
	from xmlrpc.client import ServerProxy, Binary, Fault, ProtocolError
except ImportError:
	from ConfigParser import ConfigParser
	from xmlrpclib import ServerProxy, Binary, Fault, ProtocolError

def runTests(config, testSuitePath):
	"""
		Gets a list of test scenarios from the test suite. Then runs each of
		those test scenario in order.
	"""
	testsPassed = 0
	testsFailed = 0

	#This is the clean up file that is ran before each test case.
	#This is specified in the config file or by command line. Can either
	#be a python module or ini file. If the cleanup fails, then the
	#module should either handle that or raise on execption.
	cleanupPath = config.paths.get("cleanuppath")

	if cleanupPath is None or not os.path.exists(cleanupPath):
		config.logger.warning("No cleanup script defined. Not cleaning"
								"up. Continueing with tests.")
		runCleanup = False
	else:
		runCleanup = True

		if isModule(cleanupPath):
			cleanupModule = imp.load_source("cleanup", cleanupPath)
			cleanupFunc = getattr(cleanupModule, "cleanup")
		else:
			cleanupFunc = None

	with open(testSuitePath, 'r') as testsFP:
		testPaths = testsFP.readlines()
		for path in testPaths:
			#Run (or don't run) the cleanup script
			if runCleanup == True:
				#Based on type of file, run cleanup from function or from
				#an INI file similar to test cases
				if cleanupFunc is not None:
					result = cleanupFunc(config)
				else:
					params, settings = loadTestsFromFile(config,
															"cleanup",
															cleanupPath)
					result = runLoadedTest(config, "cleanup", params, settings)

				if result == False:
					config.logger.error("Failed to cleanup before \"{}\"."
											"Stopping test run".format(path))
					break

			#Get the path to test cases. Allow either absolute or relative paths
			path = normjoin(path)
			if not os.path.isabs(path):
				path = normjoin(config.paths["basedir"],"scenarios", path)

			if not os.path.exists(path):
				config.logger.error("The path {} does not exist. Test is has "
										"failed to run".format(path))
				testsFailed += 1
				continue

			#The test name is the basename of the file.
			testName = os.path.basename(os.path.splitext(path)[0])

			#Now that cleanup is complete, and we have the right path. Run
			#the test scenario.
			params, settings = loadTestsFromFile(config, testName, path)

			if runLoadedTest(config, testName, params, settings) == True:
				config.results("PASSED {}".format(testName))
				testsPassed += 1
			else:
				config.results("FAILED {}".format(testName))
				testsFailed += 1

	config.logger.info("All test cases have ran.")
	config.results("Results: PASSED {}, FAILED {}"
					.format(testsPassed, testsFailed))

	return



def loadTestsFromFile(config, testName, path):
	"""
		Purpose:
		Given a path, the framework will execute the test cases defined in the
		ini file.
	"""
	testCases = ConfigParser(allow_no_value=True,
								interpolation=ExtendedInterpolation())


	#Get the testCase object. Read in the tmp cluster.ini file for interpolation
	#and then read in the test cases.
	testCases.read(config.paths["tmpclusterini"])
	testCases.read(path)

    #This stores the struct of the params. Its a dict so that it can be
	#copied into the "defaults" dict
	#definedCmds = _loadDefinedCmds(config)


	#A dictionary that will hold all the parameters has they are read in
	params = OrderedDict()

	#settings section
	testSettingName = config.settings["testsettingsname"]
	settings = {}

	if testSettingName in testCases.sections():
		settings = { key : val for (key, val)
						in testCases.items(testSettingName) }

	else:
		#... or instead use some default values
		settings = { "repeat" : 1, "sleep" : 20 }

    #Iterate through all the sections
	for sec in testCases.sections():
		#sec = sec.lower()

		#Ignore all sections until reach the test case section marker.
		#These other sections are those found in the cluster config file.
		#Also, ignore the settings section. Not used here.
		secList = [ configSec.lower() for configSec in config.sections() ]

		#TODO move seclist as part of config object

		if sec.lower() in secList or sec.lower() == testSettingName:
			continue

		try:
			#If command ends in a number than use the
			#first part as the definedCmd. Splits on the string part and number
			#part. For example "createmirror1" will be "createmirror"
			cmdName = cleanValue(sec)
			defCmdName = re.split(r"(\d+)", cmdName)[0]

			#params[testName][cmdName] = deepcopy(definedCmds.get(defCmdName))
			params[cmdName] = deepcopy(config.definedcmds.get(defCmdName))

			#Now iterate through and handle each parameter for each command
			for key, val in testCases.items(sec):
				#User has set key to None in the test. So remove it from params
				if not val or val == "":
					val = None

				#Now set val into the parameter list. Val
				params[cmdName][key] = val

		except KeyError as err:
			config.logger.exception("Testcase {} Testname {} Cmdname {}"
										.format(sec,
												testName,
												cmdName))
			raise err

		except InterpolationMissingOptionError as err:
			config.logger.exception("")
			raise err

	#Now we have all the stuff to execute a test.
	return params, settings


def runLoadedTest(config, testName, params, settings):
	"""
	   Purpose:
	"""
	numOfCmds = len(params)
	numCmdsSuccessful = 0
	numCmdsFailed = 0
	numOfRuns = 0
	sleepCount = cleanAsType(settings["sleep"])
	repeatCount = cleanAsType(settings["repeat"])

	try:
		while(True):
			config.logger.info("START {}".format(testName))
			config.results("START {}".format(testName))

			for cmd, params in params.items():
				if checkAppGUICmd(config, testName, cmd, params):
					numCmdsSuccessful += 1
				else:
					numCmdsFailed +=1
				sleep(sleepCount)

			numOfRuns += 1
			if repeatCount == -1:
				#Run unitl user sends CTRL+C (KeyboardInterrupt)
				continue
			elif numOfRuns == repeatCount:
				break

	except KeyboardInterrupt as err:
		config.logger.info("Keyboard interrupt recieved. Ending Tests.")

	config.info("Commands succussful {}, Commands failed {}"
					.format(numCmdsSuccessful, numCmdsFailed))

	result = numCmdsFailed != 0

	return result


#-------------------------------------------------------------------------------
# Running the Commands
#-------------------------------------------------------------------------------
def checkAppGUICmd(config, testName, cmdName, params):
	"""
		Purpose:
		Execute command given by "app" and checks outputs. This is executed from
		the "companion module".

		Parameters:
		config			Config object for the test case class
		testName		Name of the test being executed. For logging purposes
		cmdName			Name of the command given as defined in [section]
		params			Dict of parameters to pass to emcmd. Key is the ame of
						parameter and Val is the value to be used in call
	"""
	returnResult		= None

	#Details Keys are names of the keys used to define path to app, expected
	#results, or commands to run afterwards.
	detailskeys			= config.settings["detailskeys"]

	#Get default values from param dict.
	app					= normjoin(params.get("app"))

	#Only use keys from params that are not in the detailsKeys list.
	#This is the param list to be used by subprocess
	paramList = [ paramVal for paramKey, paramVal in params.items() if paramVal
							and not paramKey.lower() in detailskeys ]

	try:
		if isModule(app):
			appModule = imp.load_source(cmdName, app)

			function = params.get(config.settings.get("functionkey"))

			returnResult = getattr(appModule, function)(config, paramList)

		elif app is not None:
			function = "verifyexternal"
			expectedOutput = config.getExpectedOutput(params)
			expectedRetCode = cleanAsType(params.get("expectedretcode"))
			paramList.insert(0, app)

			appModule = imp.load_source(function,
											config.apps["verifyactions"])

			#Returns True or False
			returnResult = getattr(appModule, function)(config,
														cmdName,
														expectedRetCode,
														expectedOutput,
														paramList)

		else:
			config.logger.error("No App defined for test {}".format(testName))
			assert("No App defined for test {}".format(testName))
			returnResult = False

		config.logger.debug("Testname {} cmd {} paramList {} result {}".
								format(testName,
										cmdName,
										paramList,
										returnResult))
		return returnResult

	#Catch every other error, log it, and raise it.
	except Exception as err:
		config.logger.exception("Unhandled exception in test {} with cmd {}".
									format(testName, cmdName))
		raise err


#-------------------------------------------------------------------------------
# Internal Functions
#-------------------------------------------------------------------------------
def _execCmds(config, cmdName, cmdString, params):
	"""
		Purpose:
		General function to execute remote commands. Returns True if results
		successful, False otherwise.
	"""
	client = None
	logger = config.logger
	app = normjoin(params.get("app"))


	#Convert params to a dictionary so it can be marsheled by client
	#Order here does not matter (no need for OrderedDict)
	tmpParams = { key : val for key, val in params.items() }


	if tmpParams.get("postrunTarget"):
		target = tmpParams.get("postrunTarget")
	elif tmpParams.get("guiTarget"):
		target = tmpParams.get("guiTarget")
	elif tmpParams.get("target"):
		target = tmpParams.get("target")
	else:
		logger.debug("No target given for command {}. Returning".
						format(cmdName))
		return None

	if app == config.settings["guitestapp"]:
		client = config.getGuiClient(target)
	else:
		client = config.getGuiClient(target)

	if client is None:
		logger.error("Failed to get a remote client for command"
						"{}. Ending execCmd.".format(cmdName))
		return None

	logger.debug("CmdName {} cmdString {} target {}".
					format(cmdName, cmdString, target))
	execCmdsDict = client.runCmds(cmdString, tmpParams)

	logger.debug("Cmdsdict {}".format(execCmdsDict))

	#If any of the commands return False (what is being tested is
	#found not to be not valid) set execCmdsResult to False
	if any(execCmdsDict[key] == False for key in execCmdsDict.keys()):
		return False
	else:
		return True


def _execGuiCmds(config, cmdName, params):
	"""
	   Purpose:
	   Execute the command to the server that tests the GUI.
	"""
	guiCmd = params.get("cmd")
	return _execCmds(config, cmdName, guiCmd, params)


def _execPostrunCmds(config, cmdName, params):
	"""
		Purpose:
		Execute the post run commands at the end of each test case. Typically
		these commands are used to verify the state of a mirror or volume.

		Returns True if all cmds passed, False otherwise.
	"""
	postrunCmds = params.get("postrun")
	return _execCmds(config, cmdName, postrunCmds, params)


def _loadTestCases(config, testCases):
	"""
		Purpose:
		Use ConfigParser to create a dictionary of test cases. Key will be the
		name of the test and the value will be a dictionary of test parameters.

		TODO:
		- Currently assumes default sections are at the top. Need to add
		check for out of order sections.
	"""
	markerFlag			= False

	#A dictionary that will hold all the parameters has they are read in
	params				= OrderedDict()

	#settings section
	settings            = testCases[config.settings["testsettingsname"]]

	#Each test case will override the values defined in "defaults" section
	defaults			= OrderedDict()

	#This stores the struct of the params. Its a dict so that it can be
	#copied into the "defaults" dict
	definedCmds         = _loadDefinedCmds(config, settings)

	#Iterate through all the sections
	for sec in testCases.sections():
		sec = sec.lower()

		#Ignore all sections until reach the test case section marker.
		#These other sections are those found in the cluster config file
		if sec == config.settings["testCaseSectionMarker".lower()]:
			markerFlag = True
			continue

		#Ignore the settings section, not used here.
		if not markerFlag or sec == config.settings["testsettingsname"]:
			continue

		secSplit = config.splitAndLower(sec)
		testName = secSplit[0]

		#Range check on secSplit. If there is no command set to None
		cmdName  = secSplit[1] if len(secSplit) == 2 else None

		#The default section will be used to establish the ordered dict of params
		if testName == config.settings["defaultSectionName".lower()]:
			if cmdName is None:
				config.logger.error("Command name for the default section "
										"should not	be None. Section shall "
										"be ignored.")
				continue

			#Find the default section. If command ends in a number than use the
			#first part as the definedCmd. Splits on the string part and number
			#part. For example "createmirror1" will be "createmirror"
			defCmdName = re.split(r"(\d+)", cmdName)[0]


			defaults[cmdName] = _loadTestCasesDefault(testCases[sec],
														definedCmds.get(defCmdName))
			continue

		#Where to store the collected parameters. The test assertions are
		#defined within the sections with no cmd name. Use deepcopy here to
		#prevent steeping on other test's copy of the defaults
		if not cmdName:
##			params[testName][cmdName] = deepcopy(defaults[cmdName])
			continue
##		if not cmdName:
##			params[testName] = deepcopy(defaults)
##			continue

		if params.get(testName) is None:
			params[testName] = OrderedDict()

		params[testName][cmdName] = deepcopy(defaults[cmdName])

		paramsToChange = testCases[sec]

		#This forms the list of params the user wants to change.
		paramsToChangeKeys = list(paramsToChange.keys())

		try:
			#Short circuit the next for-loop if there is nothing to change
			if len(paramsToChangeKeys) == 0:
				continue

			#Now iterate through the test and handle each parameter for each command
			for key, val in params[testName][cmdName].items():
##				config.logger.debug("Key {}, Val {}".format(key, val))

				#User has set key to None in the test. So remove it from params
				if not val or (key in paramsToChangeKeys and not paramsToChange[key]):
					#del params[testName][cmdName][key]
					#continue
					val = None

				if key in paramsToChangeKeys:
					val = cleanValue(paramsToChange[key])

				#Now set val into the parameter list. Val
				params[testName][cmdName][key] = val

		except KeyError as err:
			config.logger.exception("Testcase {} Testname {} Cmdname {}"
										"key {} val {}".
										format(sec,
												testname,
												cmdName,
												key,
												val))
		except InterpolationMissingOptionError as err:
			config.logger.exception("")
			raise err




	#The parameter list is complete so return it to the calling test scenario
	#Return the settings as well as the param list
	return settings, params

def _loadTestCasesDefault(defaultSection, definedCmd):
	"""
		Purpose:
		Creates a copy of the OrderedDictionary "definedCmd", where the key is
		the name of the parameter and the val is the value of the parameter
		passed to subprocess.
	"""
	#If there is no predefined command. Just return defaultSection as a dict.
	if not definedCmd:
		return { key.lower() : cleanValue(val) for key, val
								in defaultSection.items() }


	defaultParams = deepcopy(definedCmd)
	definedCmdKeys = [ key.lower() for key in definedCmd.keys() ]
##	definedCmdKeys = list(definedCmd.keys())

	for key, val in defaultSection.items():
		defaultParams[key.lower()] = cleanValue(val)

		if key not in definedCmdKeys:
			#Push any key not in definedCmd to the front, thus last=False
			defaultParams.move_to_end(key, last=False)

	return defaultParams


if __name__ == '__main__':
	from dkconfig import dkconfig
##	config = dkconfig(r"c:\Programs\dk_test\scenarios\cluster.ini")
	config = dkconfig(r"c:\tmp\cluster.ini.tmp")
	config.runEnvSetup()
	runTests(config, r"c:\programs\dk_test\testsuite\test.txt")
##	runTests(config, r"c:\programs\dk_test\testsuite\test_verify.ini")
	#runTests(config, r"c:\Programs\dk_test\testsuite\test_creates_deletes.ini")
	pass
