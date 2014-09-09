#-------------------------------------------------------------------------------
# Name:             dklog
#-------------------------------------------------------------------------------
from __future__ import with_statement
__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "11/14/12"
__copyright__		= "(c) SIOS Technology Corp 2012"

import logging
import logging.config
import os
import subprocess

try:
	from configparser import ConfigParser, ExtendedInterpolation
except:
	from ConfigParser import ConfigParser

#-------------------------------------------------------------------------------
# Initalize Log Handles
#-------------------------------------------------------------------------------
def initAndReturnLoggers(loggersList, pathToConfigFile):
	"""
	   Purpose:
	   Initialize all the log handlers from a config file. Returns a tuple of
	   the log handlers created during the file config process.

	   Note:
	   	If loggersList is not a list (i.e., only a string, it will be
	   converted into a list
	"""
	logging.config.fileConfig(pathToConfigFile, disable_existing_loggers=False)

	if not isinstance(loggersList, list):
		loggersList = [ loggersList ]

	loggers = dict( (loggerName, logging.getLogger(loggerName) ) for loggerName
					in loggersList)

	return loggers

#-------------------------------------------------------------------------------
# Event Log Utils
#-------------------------------------------------------------------------------
def markTestScenEvent(func):
	"""
		Purpose:
		Adds an entry to each event log at start and end of test case. Used as a
		decorator of each test case.

		Usage:
			@markTestScenEvent
			def runTest(self): ...

	"""
	def magic_func(self, *args, **kwarg):
		#Get name of the test from the calling module
		scenarioName = self.scenarioName
		moduleName = self.__module__.split(".")[-1]

		eventlogs = self.config.settings["eventlogs"]

		#Mark start of test case
		markTestScenEventBegin(self.config,
								moduleName,
								scenarioName,
								self.settings["repeat"])
		#Execute original function
		func(self, *args, **kwarg)
		#Mark end of test case
		markTestScenEventEnd(self.config,
								scenarioName)

	#Assign decorated function original functions docstring and name
	magic_func.__name__ = func.__name__
	magic_func.__doc__	= func.__doc__

	return magic_func

def markTestScenEventBegin(config, moduleName, scenarioName, repeatCount):
	"""
		Purpose:
		Mark the start of the current test scenario in the log and event logs
	"""
	message = "BEGIN test scenario {}, module {}. Repeat count {}". \
				format(scenarioName, moduleName, repeatCount)

	logger = config.logger
	results = config.results

	for logName in config.settings["eventlogs"]:
		try:
			output = subprocess.check_output(["eventcreate","/T", "INFORMATION",
									"/ID", "100", "/L", logName, "/D", message])
		except subprocess.CalledProcessError:
			logger.exception("Failed to mark BEGIN in log {} during scenario {}".
								format(logName, scenarioName))
			raise
	logger.info(message)
	results(message)


def markTestScenEventEnd(config, scenarioName):
	"""
		Purpose:
		Mark the start of tests in the log and event logs
	"""
	message = "END of test {}".format(scenarioName)

	logger = config.logger
	results = config.results

	for logName in config.settings["eventlogs"]:
		try:
			output = subprocess.check_call(["eventcreate","/T", "INFORMATION",
								"/ID", "200", "/L", logName, "/D", message])
		except:
			logger.exception("Failed to mark END in log {} during scenario {}".
								format(logName, scenarioName))
			logger.debug(err.out)
			raise
	logger.info(message)
	results(message)


def clearEventLogs(config):
	"""
		Purpose:
		Clears system the logs specified in cluster.ini. User must have
		premission to clear the log.
	"""
	for logname in config.settings["eventlogs"]:
		try:
			subprocess.check_output(["wevtutil", "cl", logname])
		except subprocess.CalledProcessError:
			config.logger.exception("Failed to clear the log: {}".format(logname))
			raise

def saveEventLogs(config):
	"""
		Purpose:
		Exports event logs to logs directory.

		Filename:
	  	path\To\Log\{logPrefix}_{count}-{eventLogName}.evtx
	"""
	#Should look like something like:
	#C:\pathToLogs\dklog_{}-{}.evtx
	eventLogPath = config.paths["eventlogpathbase"]
	count = config.settings["logfilecount"]

	#Iterate over the logs and save off the logs.
	for logname in config.settings["eventlogs"]:
		try:
			subprocess.check_call(["wevtutil", "epl", logname,
							eventLogPath.format(count, logname)])
		except:
			config.logger.exception("Failed to get log: %s", logname)
			raise


if __name__ == '__main__':
	pass
