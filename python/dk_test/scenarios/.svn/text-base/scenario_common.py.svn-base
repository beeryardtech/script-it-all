
__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "11/14/12"
__copyright__		= "(c) SIOS Technology Corp 2012"

#For unittesting
import os
import sys
from time import sleep
sys.path.insert(0, r"C:\Program Files\dk_test\libs")


from dkconfig import dkconfig
from exectests import checkAppGUICmd, runTests
from winfuncs import deletealljobs, deleteallmirrors
from dklog import markTestScenEvent


class scenario_common(object):
	"""
		Purpose:
		The top level scenario class that will set the basic (or most common)
		functionality for each scenario.

		Child classes can override the class methods and class properties to
		customize for each test scenario

		Class Methods:
		runTest
		executeTest
		setUp
		tearDown
	"""
	@classmethod
	def __init__(self, _config, _settings,  _loadedTestCases, _scenarioName):
		#Setup
		self.config				= _config
		self.logger				= self.config.logger
		self.results			= self.config.results
		self.settings			= _settings
		self.repeatcount		= int(self.settings["repeat"])
		self.sleep				= float(self.settings.get("sleep",
											self.config.settings["defaultsleep"]))
		self.testCases			= _loadedTestCases
		self.scenarioName		= _scenarioName


	@classmethod
	@markTestScenEvent
	def runTest(self):
		"""
			Purpose:
			Use the generated test cases to execute test cases as defined by
			the parameter list. All these functions can be overriden in each
			scenario module that inherent from this file.
		"""
		numOfTestCases = len(self.testCases)
		numTestsPassed = 0
		runCounter = 0
		successfulTestCount = 0

		#Run setup and prepare environment for test cases
		self.setUp()

		#Iterate ove the possible test cases. A test case should end in a state
		#that will let the next test to run.
		for testName, cmdParams in self.testCases.items():
			successfulTestCount = 0 #Used to check pass/fail of each scenario

			self.logger.info("START {}".format(testName))
			self.results("START {}".format(testName))

			#TODO Need to do this differently...
			if self.repeatcount == -1:
				numberOfRuns = 0
				try:
					while True:
						if self.executeTest(testName, cmdParams):
							self.results("PASSED {}".format(testName))
							successfulTestCount += 1
						else:
							self.results("FAILED {}".format(testName))
						numberOfRuns += 1
						sleep(1.0)
				except KeyboardInterrupt as err:
					self.logger.info("Keyboard Interrupt recieved. Test ended.")


				runCounter = numberOfRuns

			elif self.repeatcount > 0:
				#Repeat each test case based on the repeat count setting
				for index in range(self.repeatcount):
					successfulTestCount += self.executeTest(testName, cmdParams)

				runCounter = self.repeatcount

			#Did the test pass or fail?
			if successfulTestCount == runCounter:
				self.results("PASSED {}".format(testName))
				numTestsPassed += 1
			else:
				self.results("FAILED {}".format(testName))

		self.results("Scenario {}:  PASSED {}, FAILED {}".
						format(self.scenarioName,
								numTestsPassed,
								(numOfTestCases - numTestsPassed) ))

		#After all the tests have run, teardown the environment and clean up.
		self.tearDown()

	@classmethod
	def executeTest(self, testName, cmdParams):
		"""
			Purpose:
			Execute the test commands. This can be overriden in the test case.
		"""
		successfulTestFlag			= True

		#Run all the commands and count how many returned correctly
		for cmd, params in cmdParams.items():
			if not checkAppGUICmd(self.config, testName, cmd, params):
				successfulTestFlag = False
			sleep(self.sleep)

		return successfulTestFlag

	@classmethod
	def setUp(self):
		"""
			Purpose:
			Prepares the environment for the test case. This can be overriden
			in the test case.
		"""
		deleteallmirrors(self.config)

	@classmethod
	def tearDown(self):
		"""
			Purpose:
			Cleans up after the completion of a test case. This can be overriden
			in the test case.
		"""
		deleteallmirrors(self.config)


if __name__ == '__main__':
	config = dkconfig(r"C:\Program Files\dk_test\scenarios\cluster.ini")
	config.runEnvSetup()

	runTests(config, r"C:\Program Files\dk_test\testsuite\test_smoke.ini")
