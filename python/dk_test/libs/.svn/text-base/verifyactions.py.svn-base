#-------------------------------------------------------------------------------
# Name:             verifyactions.py
#-------------------------------------------------------------------------------
from __future__ import with_statement

__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "03/22/2013"
__copyright__		= "(c) SIOS Technology Corp 2013"

import os
import subprocess

from dkutils import cleanValue, cleanAsType, doOnNodes, normjoin, netHelp
from dkconfig import dkconfig

def with_verification(config, paramList, verifier):
	"""
		Purpose:
		Runs the given verifier function but handles
		all the verification stuff.

		Args for verifier:
		Config, postrunClient, *paramList
	"""
	false = config.returncodes["false"]
	funcName = verifier.__name__


	#Requires 4 args.
	if len(paramList) < 3:
		config.logger.error("Need at least 3 Args for {}. Command Failed".
								format(funcName))
		return false

	elif len(paramList) > 4:
		config.logger.error("Too many Args for {}. Command Failed".
								format(funcName))
		return false

	target = paramList[1]

	#Get the remote client
	client = config.getPostrunClient(target)

	if client is None:
		config.logger.error("Failed to get a remote client {} for cmd {}".
								format(target, funcName))
		return false

	return verifier(config, client, paramList)


def mirrorverifier(config, client, args):
	"""
		Purpose:
		Run verifymirror on "target". Args is a list.

		Args:
		0 - source
		1 - target
		2 - sourceVol
		3 - targetVol
	"""
	return client.verifymirror(*args)


def checksumverifier(config, client, args):
	"""
		Purpose:
		Run verifymirror on "target". Args is a list.

		Args:
		0 - source
		1 - target
		2 - sourceVol
		3 - targetVol
	"""
	return client.verifychecksum(*args)


def deleteverifier(config, client, args):
	"""
		Purpose:
		Run verifymirror on "target". Args is a list.

		Args:
		0 - source
		1 - target
		2 - sourceVol
		3 - targetVol
	"""
	return client.verifydelete(*args)


def lockverifier(config, client, args):
	"""
		Purpose:
		Run verifylock on "target". Args is a list.

		Args:
		0 - target
		1 - targetVol
	"""
	return client.verifylock(*args)


def unlockverifier(config, client, args):
	"""
		Purpose:
		Run verifylock on "target". Args is a list.

		Args:
		0 - target
		1 - targetVol
	"""
	return client.verifyunlock(*args)


# some handle-wrappers since the consumers of these
# already expect it this way
#-------------------------------------------------------------------------------
# Functions that will be called from scenarios.
#-------------------------------------------------------------------------------
def verifymirror(config, paramList):
    """
    Verify the results of mirror creation.
    """
    return with_verification(config,
								paramList,
								mirrorverifier)


def verifychecksum(config, paramList):
    """
    Verify the results of mirror replication.
    """
    return with_verification(config,
								paramList,
								checksumverifier)


def verifydelete(config, paramList):
    """
    Verify the results of mirror deletion.
    """
    return with_verification(config,
								paramList,
								deleteverifier)


def verifylock(config, paramList):
	"""
	Verify the results of locking volume.
	"""
	return with_verification(config,
								paramList,
								lockverifier)


def verifyunlock(config, paramList):
    """
    Verify the results of unlocking volume.
    """
    return with_verification(config,
								paramList,
								unlockverifier)


def writefile(config, paramList):
	"""
		Purpose:
		Uses WriteFile.exe to write to volume.

		Args:
		0 - target
		1 - targetVol
		2 - filesize (Size of each file generated
		3 - count (Optional; number of files to generate)
		4 - background (Optional)
			0 - Wait until process completes (default)
			1 - Start all processes and then return
	"""
	#NOTE: Unlike verify* functions there is no need for a "filewriter" function
	#Nor does this function need to call with_verification. All that work
	#is done within this function
	false = config.returncodes["false"]
	funcName = __name__

	#writefile requires at least 3 parameters. All others optional.
	if len(paramList) < 3:
		config.logger.error("Need at least 3 Args for {}. Command Failed".
				    format(funcName))
		return false

	elif len(paramList) > 5:
		config.logger.error("Too many Args for {}. Command Failed".
				    format(funcName))
		return false

	target = paramList[0]

	#Get the remote client
	client = config.getPostrunClient(target)

	if client is None:
		config.logger.error("Failed to get a remote client {} for cmd {}".
								format(target, funcName))
		return false


	return client.writefile(*paramList)



def panic(config, paramList):
	"""
		Purpose:
		Panics (crashes) the target node.

		Args:
		0 - target
		1 - delay (the delay in seconds to wait before panic)
	"""
	#NOTE: Unlike verify* functions there is no need for a "dopanic" function
	#Nor does this function need to call with_verification. All that work
	#is done within this function
	false = config.returncodes["false"]
	funcName = __name__

	#Writefile requires 2 args.
	if len(paramList) < 2:
		config.logger.error("Need at least 3 Args for {}. Command Failed".
								format(funcName))
		return false

	elif len(paramList) > 2:
		config.logger.error("Too many Args for {}. Command Failed".
								format(funcName))
		return false

	target = paramList[0]

	#Get the remote client
	client = config.getPostrunClient(target)

	if client is None:
		config.logger.error("Failed to get a remote client {} for cmd {}".
								format(target, funcName))
		return false


	return client.panic(*paramList)



def verifyexternal(config, cmdName, expectedRetCode, expectedOutput, paramList):
	"""
	Runs the external command (cmd and args described by 'args')
	and verifies it's output/exit code.
	"""
	false = config.returncodes["false"]
	success = config.returncodes["success"]

	resultFlag = True
	netHelpMsg = ""
	maxLen = config.settings["maxoutputlen"]

	#config.logger.debug("Testname {}, Paramlist {}".format(testName, paramList))

	try:
		output = subprocess.check_output(paramList, stderr=subprocess.STDOUT)
		retCode = success
	except subprocess.CalledProcessError as err:
		#This is the error from subprocess. If any test has a non-zero
		#return code it will be caught here and then can be used in the
		#comparisions below.
		output  = err.output
		retCode = err.returncode
		netHelpMsg = netHelp(retCode)
	except WindowsError as err:
		config.logger.exception("Failed to find file {}".format(paramList[0]))
		raise err

    #Need to decode output so it can be compared to expectedOutput
	if isinstance(output, bytes):
		output = output.decode("utf-8")

	if expectedRetCode and retCode != expectedRetCode:
			config.logger.error("FAILED cmd {} Got error code \"{}\", "
									"expected \"{}\"".
									format(cmdName,
											retCode,
											expectedRetCode))
			config.logger.debug("Net help: {}".format(netHelpMsg))
			resultFlag = False

	if expectedOutput and output != expectedOutput:
			config.logger.error("FAILED cmd {} with output \"{}\", "
									"expected \"{}\"".
									format(cmdName,
											output[:maxLen],
											expectedOutput[:maxLen]))
			#config.logger.debug("Full output: {}".format(output))
			resultFlag = False

	return resultFlag



if __name__ == '__main__':
    pass
