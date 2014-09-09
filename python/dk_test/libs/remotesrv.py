#-------------------------------------------------------------------------------
# Name:             remotesrv.py
#-------------------------------------------------------------------------------
from __future__ import with_statement
"""
   Purpose:
   Create a windows service that will create a XML-RPC server at system startup.
   These will let the user to execute the "postrun" commands on a remote server
"""
__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "11/27/2012"
__copyright__		= "(c) SIOS Technology Corp 2012"

import os
import sys
import time
from postrun import postrun

try:
	from xmlrpc.server import SimpleXMLRPCServer
	from xmlrpc.client import ServerProxy
except ImportError:
	from SimpleXMLRPCServer import SimpleXMLRPCServer
	from xmlrpclib import ServerProxy

try:
	import System
except ImportError as err:
	pass

def start_server(obj):
	"""
		Purpose:
		Start the XML-RPC server and register the "obj" class.
	"""
	try:
		commandServer = SimpleXMLRPCServer(('', 9000), allow_none=True)

		commandServer.register_introspection_functions()
		commandServer.register_instance(obj)

		print("{} - Starting to server forever".format(time.asctime()))
		#Now keep the server alive till killed or system reboots
		commandServer.serve_forever()

	except KeyboardInterrupt as err:
		print("{} - Keyboard Interrupt. Exiting.".format(time.asctime()))
		return

	except Exception as err:
		print(err)
		raise err

	except System.Exception as err:
		print(err)
		raise err


if __name__ == '__main__':
	os.makedirs(r"c:\tmp", exist_ok=True)

	with open("C:\tmp\remotesrv.py", 'w') as logger:
		sys.stdout = logger

		#Initialize the server. Give it an instance of the postrun class
		print("{} - Starting remote server".format(time.asctime()))
		start_server(postrun())

	exit(0)
