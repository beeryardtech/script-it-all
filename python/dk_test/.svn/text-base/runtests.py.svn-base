#-------------------------------------------------------------------------------
# Name:        		runtests.py
#-------------------------------------------------------------------------------
__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "11/14/12"
__copyright__		= "(c) SIOS Technology Corp 2012"

import argparse
import os
import sys

#Setup execution enviroment
os.chdir(os.path.dirname(os.path.abspath(sys.argv[0])))
sys.path.insert(0, 'libs')
cwd = os.getcwd()

from dkconfig import dkconfig
import exectests
from dkutils import normjoin, runTestsStartupScript

def main():
	"""
		Purpose:
		Entry point to dk_test automation test framework.

		Key Definitions:
		Test Suite			Collection of test suites that will be executed. The
							collection is defined within a file under the "test_suite"
							directory in a logical order (aka runs a regression suite)
							Ex: -- sanity test,
								-- create mirror (cmd line)
								-- create mirror (GUI)
		Scenario			Collection of test cases that exercise specific features.
							This collection will be the directories located under
							the "test_suite" directories. (This is defined below).
							Ex: -- Sanity\* test suite
								-- emcdapi\action\* test suite
		Test Case			The smallest unit of tests. This will run the
							specific API calls or button on the GUI. Each test
							will be one test purpose composed of test assertions
							(each with have a test strategies).
							Ex: test_suite\emcmdapi\action\EMcmd_BreakMirror.py
		Test Assertions		What are you testing and what are your expected results.
							Language should be "Spam shall do foo when passed eggs"
							Ex: EMcmd BREAKMIRROR shall output usage statement
								when given no parameters.
		Test Strategies		The psudeo code of the test case. Should be detailed
							enough that someone can reproduce the code.

		Note:
		Test assertions/strategies should be writen within the header for each
		test csae. This is the section that has no attached command.

		The testsuites are part of this scripts namespace. Do
		not create a function or oject with the same name as a testsuite file.
	"""
	#Argument parsing. argparse will build usage statement for us
	#Pass in -h, --help to see usage.
	#Default Values
	desc = 'Test harness for Steeleye Datakeeper'

	#Note the 'r' in default. This is we do not have to escape the backslashes
	default_clusterini = normjoin(os.getcwd(), r"\scenarios\cluster.ini")
	default_constantini = normjoin(os.getcwd(), r"\scenarios\constants.ini")
	default_testsuite = 'test_creates_deletes'


	parser = argparse.ArgumentParser(description = desc, prog ='dk_test',
									epilog = "See cluster.ini for config options")

	#The nargs='?' param makes the positional argument not required
	parser.add_argument("testSuiteName",
						action='store',
						#default=default_testsuite,
						#nargs='?',
						help="Which test suite to run. Do not include \
								the file extension")

	parser.add_argument('-f', '--cluster',
						dest='cluster_ini',
						action='store',
						default=default_clusterini,
						help="Path to cluster file")

	parser.add_argument('-F', '--constants',
						dest='constants_ini',
						action='store',
						default=default_constantini,
						help="Path to constatns file")

	#Default here is None so we can know if the user set it from the cmd line
	parser.add_argument('-l', '--log-level',
						dest="log_level",
						action='store',
						default=None,
						help="Levels: debug, info, warning, error, critical")

	#Used for setup of the framework. Best ran on the secondary systems.
	#Note that the action here is not in quotes.
	parser.add_argument('-s', '--setup',
						dest="setup",
						action=dkconfigsetup,
						nargs=0,
						default=None,
						help="Setup tmp files and exit. Does not run tests")

	#Used for setup of the framework. Best ran on the secondary systems.
	#Note that the action here is not in quotes.
	parser.add_argument('--install',
						dest="install",
						action=dkinstaller,
						help="Installs DataKeeper and then reboots system")

	parser.add_argument('--remove',
						dest="remove",
						action=dkremover,
						help="Remove DataKeeper and then reboots system")

	parser.add_argument('--repair',
						dest="repair",
						action=dkrepairer,
						help="Repairs DataKeeper and then reboots system")

	#Process the arguments. Checks if paths are valid
	args = parser.parse_args()
	testSuitePath, clusterini, constantsini, logLevel=getValuesFromArgs(args)

	#Config object to parse and search config files
	config = dkconfig(clusterini,
						_constantsini=constantsini,
						_logLevel=logLevel)

	config.runEnvSetup()

	#Now go do the work
	exectests.runTests(config, testSuitePath)

	#End the test run
	config.runFinalTearDown()


def getValuesFromArgs(_args):
	"""
		Purpose:
		Verify arguments. If any are invalid, throw an exception
	"""
	_testSuitePath = normjoin(cwd, "testsuite", _args.testSuiteName)

	if os.path.exists(_testSuitePath):
		pass
	elif os.path.exists(_testSuitePath + ".txt"):
		_testSuitePath = _testSuitePath + ".txt"
	else:
		raise ValueError("Looking for test suite at {}. File not found or invalid".
							format(_testSuitePath))

	#Path to cluster config file. Needs to be a readable file
	_clusterini = normjoin(cwd, _args.cluster_ini)
	if not os.path.exists(_clusterini) or  not os.path.isfile(_clusterini):
		raise ValueError("Looking for cluster config at {}. File not found or invalid".
							format(_clusterini))

	#Path to constants file. Needs to be a readable file
	_constantsini = normjoin(cwd, _args.constants_ini)
	if not os.path.exists(_constantsini) or  not os.path.isfile(_constantsini):
		raise ValueError("Looking for constants file at {}. File not found or invalid".
							format(_constantsini))

	#Log level. Can also be set in the config file
	_logLevel = _args.log_level

	return _testSuitePath, _clusterini, _constantsini, _logLevel


class dkconfigsetup(argparse.Action):
	"""
		Purpose:
		A custom action for argparse. When called, will execute the dkconfig
		setup function and exit the script. This allows for system setup from
		the command line.
	"""
	def __call__(self, parser, namespace, values, option_strings=None):
		_clusterini = namespace.cluster_ini

		config = dkconfig(_clusterini)
		config.runFileSetup()

		print("File setup is complete")
		print("Temp Config Found at: " + config.paths.get("tmpclusterini"))
		print()

		setattr(namespace, self.dest, values)
		sys.exit(0)


####TODO ####
class __dksilentinstaller(argparse.Action):
	"""
		Purpose:
		A custom action for argparse. When called, will execute the silent
		installer functions for DataKeeper. Name of test suite is in the
		"values" parameter.
	"""
	def __call__(self, parser, namespace, values, option_strings=None):
		_clusterini = namespace.cluster_ini

		#Passed as the first argument (that is --install VAL)
		self.testSuiteName = values

		#Create config object
		self.config = dkconfig(_clusterini)
		self.config.runEnvSetup()

		result = self.dowork()

		setattr(namespace, self.dest, values)

		if result == True:
			print()

			#Restart the system. The response files should not do this.
			os.system("shutdown /r /c 'Restarted by runtests.py' /t 5")

			#Exit cleanly before shutdown completes
			sys.exit(0)
		else:
			print("DataKeeper silent install failed. See logs.")
			sys.exit(1)


	def dowork():
		"""
		   Purpose:
		   This does the silent installer function.
		"""
		#Import the function
		#from winfuncs import dkinstall

		#The function. Remember to use self.config
		#dkinstall(self.config)

		pass

class dkinstaller(__dksilentinstaller):
	"""
		Purpose:
		A custom action for argparse. When called, will execute the silent
		installer function for DataKeeper. Name of test suite is in the
		"values" parameter.
	"""
	def dowork(self):
		#Import the function
		from winfuncs import dkinstall

		scriptPath = runTestsStartupScript(self.config, self.testSuiteName)
		print("Startup script written to " + scriptPath)

		print("Starting to install DataKeeper")

		#The function. Remember to use self.config
		dkinstall(self.config)


class dkremover(__dksilentinstaller):
	"""
		Purpose:
		A custom action for argparse. When called, will execute the silent
		installer function for DataKeeper. Name of test suite is in the
		"values" parameter.
	"""
	def dowork(self):
		#Import the function
		from winfuncs import dkremove

		print("Starting to remove DataKeeper")

		#The function. Remember to use self.config
		dkremove(self.config)


class dkrepairer(__dksilentinstaller):
	"""
		Purpose:
		A custom action for argparse. When called, will execute the silent
		installer function for DataKeeper. Name of test suite is in the
		"values" parameter.
	"""
	def dowork(self):
		#Import the function
		from winfuncs import dkrepair

		print("Starting to repair DataKeeper")

		#The function. Remember to use self.config
		dkrepair(self.config)



if __name__ == '__main__':
   #The above conditional should always be included at the end of a script
   #that will be executed. Tells python which function to fire off.
   main()
