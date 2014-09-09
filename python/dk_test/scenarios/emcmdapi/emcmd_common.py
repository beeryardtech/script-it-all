#-------------------------------------------------------------------------------
# Name:             emcmd_common
#-------------------------------------------------------------------------------
__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "11/14/12"
__copyright__		= "(c) SIOS Technology Corp 2012"

from scenarios.scenario_common import scenario_common

class emcmd_common(scenario_common):
	"""
		Purpose:
		Provides any overrides of the scenario common class for the EMcmd.exe
		test cases.
	"""
	def __init__(self, _config, _settings, _loadedTestCases, _scenarioName):
		super(emcmd_common, self).__init__(_config, _settings,
											_loadedTestCases, _scenarioName)

if __name__ == '__main__':
	pass
