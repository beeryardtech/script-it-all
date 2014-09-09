#-------------------------------------------------------------------------------
# Name:				dkutils.py
#-------------------------------------------------------------------------------
from __future__ import with_statement

__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "11/14/12"
__copyright__		= "(c) SIOS Technology Corp 2012"

import collections
import hashlib
import imp
import inspect
import itertools
import logging
import os
import re
import subprocess
import sys
from copy import deepcopy

#The try statement is needed when using different versions of Python.
#For Example using both Cpython 3.2 and IronPython 2.7
try:
	from configparser import ConfigParser, ExtendedInterpolation
	import ast
except ImportError:
	from ConfigParser import ConfigParser
	import _ast as ast


#-------------------------------------------------------------------------------
# Internal Utils
#-------------------------------------------------------------------------------
def cleanValue(val):
	"""
		Purpose:
		Cleans input. Removes single/double quotes and extra whitespace. Val can
		be more than one parameter.
	"""
	if not val:
		return val
	val	= val.strip().strip('"').strip("'")
	return val


def cleanAsType(val):
	"""
	   Purpose:
	   Cleans input with cleanValue and runs ast.literal_eval(). This returns
	   val as its deduced data type (int, float) or as a string. If val is an
	   int or float, it will be returned as is.
	"""
	try:
		val = cleanValue(val)
		return ast.literal_eval(val) #Return as its deduced type.
	except (ValueError, SyntaxError):
		return val #Return as a string
	except AttributeError:
		#This occurs when trying to use cleanValue on a non-str object
		return val


def doOnNodes(config, funcObj, expectedRetCode, message, hostnames):
	"""
		Purpose:
		Generic wrapper for functions that run on some or all nodes.
		Expects for funcObj to be a partial function (see functools.partial()),
		with the last argument being the node to run on
	"""
	resultDict = {}

	#Create a list of hostnames from the string
	if hostnames is not None:
		#hostnames can be either a list or a delimited string
		if isinstance(hostnames, str):
			hostnameList = config.splitAndLower(hostnames)
		else:
			hostnameList = config.splitAndLower(hostnames[0])
	else:
		hostnameList = config.allHostnamesFromNodes

	#Execute the "do" function on each of the given nodes.
	for hostname in hostnameList:
		#If a Node has no hostname, just pass over it.
		if hostname.startswith("node"):
			continue
		resultDict[hostname] = funcObj(hostname)

	config.logger.debug("Function {}, ResultDict {}".
							format(funcObj.__name__, resultDict))

	if any(resultDict[key] != expectedRetCode for key in resultDict.keys()):
		config.logger.warning(message)
		return False
	else:
		return expectedRetCode


def isModule(path):
	"""
	   Purpose:
	   Check to see if the file can be imported as a python module
	"""
	if not os.path.exists(path):
		return False

	try:
		moduleName = os.path.basename(path)
		imp.load_source(moduleName, path)
		return True
	except ImportError:
		return False
	except SyntaxError:
		return False


def md5sum(obj):
	"""
		Purpose:
		Used to test hashs of object. Returns the hash string of "obj"
	"""
	return hashlib.md5(obj).hexdigest()


def md5File(pathToFile, blocksize=2**16):
	"""
	   Purpose:
	   Finds the md5 hash of a file. If file does not exist, will return None
	"""
	return _hashFile(hashlib.md5(), pathToFile, blocksize)


def sha1File(pathToFile, blocksize=2**16):
	"""
	   Purpose:
	   Finds the sha1 hash of a file. If file does not exist, will return None
	"""
	return _hashFile(hashlib.sha1(), pathToFile, blocksize)


def _hashFile(hashFunc, pathToFile, blocksize=2**16):
	"""
	   Purpose:
	   Finds the hash of a file. If file does not exist, will return None
	"""
	if not os.path.exists(pathToFile):
		return None

	with open(pathToFile, 'rb') as file:
		while True:
			data = file.read(blocksize)
			if not data:
				break
			hashFunc.update(data)

	#Reading is complete
	return hashFunc.hexdigest()


def netHelp(retCode):
	"""
		Purpose:
		Runs "net helpmsg" and returns the help message. Useful for debug msgs.
	"""
	params = ["net", "helpmsg", "{}".format(retCode)]
	try:
		output = subprocess.check_output(params, stderr=subprocess.STDOUT)
		return output
	except subprocess.CalledProcessError:
		return "Net help failed"


def normjoin(*paths):
	"""
		Purpose:
		Uses os.path functions to normalize and join paths. Returns the
		normalized and joined string. Returns None if paths is None.

		Parameter
		*paths			all the paths you want to join
	"""
	if any(not cleanValue(path) for path in paths):
		return None

	pathsToJoin = []
	for path in paths:
	#Clean the values. No leading slashes for each element
		path = cleanValue(path)
		if len(pathsToJoin) >= 1 and path[0] in ["/", "\\"]:
			path = path[1:]

		pathsToJoin.append(os.path.normpath(
							os.path.expandvars(
							os.path.expanduser(path))))

	#Note that the * will send the list as arguments to the join function
	#Can also use the apply() function
	return os.path.join(*pathsToJoin)


def buildTempConfigFromStr(pathToTmpFile, configString, overrides={}):
	"""
	"""
	tmpConfig 				= ConfigParser(allow_no_value = True,
								interpolation=ExtendedInterpolation())

	tmpConfig.read_string(configString)

	buildTempConfig(pathToTmpFile, tmpConfig, overrides)


def buildTempConfigFromFile(pathToTmpFile, configPaths, overrides={}):
	"""
		Purpose:
		Output the results of ExtendedInterpolation to a file. If multiple
		configparsers are passed in they will be written to the same file.
	"""
	tmpConfig 				= ConfigParser(allow_no_value = True,
								interpolation=ExtendedInterpolation())
	for path in configPaths:
		tmpConfig.read(path)

	buildTempConfig(pathToTmpFile, tmpConfig, overrides)


def buildTempConfig(pathToTmpFile, tmpConfig, overrides):
	"""
		Purpose:
		Output the results of ExtendedInterpolation to a file. If multiple
		configparsers are passed in they will be written to the same file.
		Useful for anything that uses older versions of Python.

		Overrides are a dictionary used to replace values before Interpolation.
		Needs to be in the same form as "read_dict()":
				{' Section' : { 'Option' : 'Value' } }

	"""
	tmpConfigDict = {}


	if len(overrides) > 0:
		tmpConfig.read_dict(overrides)

	#Iterate over options and use "get()" to execute the Interpolation
	for sec in tmpConfig.sections():
		tmpConfigDict[sec] = {}
		for opt, _ in tmpConfig[sec].items():
			tmpConfigDict[sec][opt] = cleanValue(tmpConfig.get(sec, opt))

	#Finished getting values. Write the dict to the configparser
	tmpConfig.read_dict(tmpConfigDict)

	#Check if directory of "pathToTmpFile" exists. If not create it.
	tmpFileBasepath = os.path.dirname(pathToTmpFile)
	if not os.path.exists(tmpFileBasepath):
		os.mkdir(tmpFileBasepath)

	#Open the file handle and close it when done
	with open(pathToTmpFile, 'w') as fp:
		tmpConfig.write(fp, space_around_delimiters=False)

	del tmpConfig


def runTestsStartupScript(config, testSuiteName):
	"""
	   Purpose:
	   Create startup bat
	"""
	scriptName = "runtests-" + testSuiteName + ".ps1"
	startupDir = normjoin("~", r"AppData\Roaming\Microsoft\Windows"
									"\Start Menu\Programs\Startup")

	scriptPath = normjoin(startupDir, scriptName)

	runTestPath = normjoin(config.paths["basedir"],	"runtests.py")

	#This script will, start the test, spawn a new powershell session that will
	#delete itself, and then exit. The replace()'s make the paths safe for
	#windows. That is escape the spaces.
	scriptContent = """
echo "Starting test suite {name} after reboot."
start-process {pypath} -ArgumentList "{runtest} {name}" -PassThru
start-process powershell.exe -ArgumentList "sleep 3 ; rm {flagfile}" -PassThru
""".format(name=testSuiteName,
				pypath=sys.executable.replace(" ", "` "),
				flagfile=scriptPath.replace(" ", "` "),
				runtest=runTestPath.replace(" ","` "))

	if not os.path.exists(startupDir):
		os.mkdir(startupDir)

	with open(scriptPath, 'w') as scriptFP:
		scriptFP.write(scriptContent)

	return scriptPath


#-------------------------------------------------------------------------------
# Unused Utils - kept for reference
#-------------------------------------------------------------------------------
def getTargetSystem(node):
	"""
		Purpose:
		Tries to figure what to use as the "target". Tries each of the following,
		which ever works first is returned: Hostname, Pulbic IP, Private IP
	"""
	#Try to find one that is not None
	if not node.props["hostname"]:
		return node.props["hostname"]
	if not node.props["publicip"]:
		return node.props["publicip"]
	if not node.props["privateip"]:
		return node.props["privateip"]

	#Default now to "." since we do not have a given target
	return "."

def getExternalHostIP():
	"""
	   Purpose:
	   Get the host's IP. Uses a connection to UDP connection to a socket
	   to get the socket's name.
	"""
	import socket
	localSocket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
	hostname = socket.gethostname()

	try:
		#Uses port 9,the RFC863 UDP discard port
		localSocket.connect((hostname, 9))
		hostip = localSocket.getsockname()[0]
	except socket.error:
		pass
	finally:
		del localSocket

	return hostip


def getStaticHostIP():
	"""
	   Purpose:
	   Get the IP address of the first interface. This should be the 172.17.*
	   address.
	"""
	import socket

	ipAddrs = socket.gethostbyname_ex(socket.gethostname())[2]

	return ipAddrs[0]


def buildPackage(_file, _excludeList):
	"""
		Gets the list of modules for __all__ for the __init__.py files

		Parameters:
		_file			Name of module (typically the __name__ list)
		_excludeList	Dirs or modules you do not want to import

		Returns:
		list of all modules in directory
	"""
	packageList = []
	#Appends additional values to the default exclude list
	_excludeList.extend(['__init__.py', '__pycache__'])
	#splits _file to get the last part which is the current dir
	_cwd = os.path.dirname(_file)
	try:
		for mod in os.listdir(_cwd):
			if os.path.basename(mod) in _excludeList:
				continue
			if os.path.isdir(mod) or os.path.splitext(mod)[1] == ".py":
				mod = os.path.basename(mod)
				packageList.append(os.path.splitext(mod)[0])
	except:
		return
	return packageList

if __name__ == '__main__':
	from dkconfig import dkconfig
	config = dkconfig(r"c:\Programs\dk_test\scenarios\cluster.ini",
						r"c:\Programs\dk_test\scenarios\constants.ini")
####	runTestFromIni(config, "createmirror",
####			r"c:\Programs\dk_test\scenarios\emcmdapi\create\emcmd_createmirror.ini")
##	config.runEnvSetup()
##	import winfuncs
##	import functools
##	delJobsFromNode = functools.partial(winfuncs.deletealljobsfromnode, config)
##	delJobsFromNode.__name__ = "del"
##	doOnNodes(config, delJobsFromNode, 0, "dfd", "cae-qa-v83")
##	cmd = ['C:\\Program Files (x86)\\Steeleye\\DataKeeper\\emcmd.exe',
##			'172.17.105.148',
##			'CREATEJOB',
##			'switchover-job',
##			'test',
##			'cae-qa-v82.qagroup.com',
##			'E',
##			'0.0.0.0',
##			'cae-qa-v83.qagroup.com',
##			'E',
##			'0.0.0.0',
##			'D',
##			'cae-qa-v82.qagroup.com',
##			'E',
##			'172.17.105.148',
##			'cae-qa-v84.qagroup.com',
##			'E',
##			'172.17.105.150',
##			's',
##			'cae-qa-v83.qagroup.com',
##			'E',
##			'172.17.105.149',
##			'cae-qa-v84.qagroup.com', 'E', '172.17.105.150', 's']
##	subprocess.check_call(cmd)
	runTestsStartupScript(config, "blah")

	pass


