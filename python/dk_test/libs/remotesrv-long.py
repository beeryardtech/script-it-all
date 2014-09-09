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
import os, re, subprocess, sys
import servicemanager, win32api, win32event, win32service, win32serviceutil

##try:
##	from libs.dkutils import buildTempConfig, cleanValue, cleanAsType, normjoin
##	import libs.dklog as dklog #use an alias here.
##	from libs.nodes import dknode
##except ImportError:
##	#Happens when importing from outside package
##	#From a Sikuli script, for example
##	from dkutils import buildTempConfig, cleanValue, normjoin
##	import dklog as dklog #use an alias here.
##	from nodes import dknode

#The try statements are needed when using different versions of Python.
#For Example using both Cpython 3.2 and IronPython 2.7
try:
	from configparser import ConfigParser, ExtendedInterpolation
	from xmlrpc.server import SimpleXMLRPCServer
	from xmlrpc.client import ServerProxy
except ImportError:
	from ConfigParser import SafeConfigParser as ConfigParser
	from SimpleXMLRPCServer import SimpleXMLRPCServer
	from xmlrpclib import ServerProxy

class postrun(object):
	def __init__():
		self.header = "Blah"
		pass

	def writeToFile(self, stuff):
		with open(r"c:\test.txt", 'w') as fb:
			fb.write(self.header + " it worked!")

class dkservice(win32serviceutil.ServiceFramework):
	"""
		Purpose:
		Provides a way to launch communication channel at system start. To
		install the service, use:

		python remotesrv.py install

	"""
	#Class Globals
	_svc_name_ = "dkservice"
	_svc_display_name_ = "DK_Test Service"
	_svc_description_ = "Starts the XML-RPC server for DK_Test Automation"
	_svc_description_ += "Testing"
	_exe_name_ = r"c:\Programs\Python32\python.exe"


	def __init__(self, *args):
		#super(dkservice, self).__init__(self, *args)
		win32serviceutil.ServiceFramework.__init__(self,args)

		#Event to occur when service is stopped
		self.stop_event = win32event.CreateEvent(None, 0, 0, None)

		#Delay in the running of service
		self.delay = 10000

	def SvcDoRun(self):
		"""
			**Required for Service**
			Purpose:
			The work done by the service at run time.
		"""
		#Log that the service has started
		servicemanager.LogMsg(servicemanager.EVENTLOG_INFORMATION_TYPE,
							  servicemanager.PYS_SERVICE_STARTED,
							  (self._svc_name_,''))

		retCodeForWait = win32event.WaitForSingleObject(self.stop_event,
							win32event.INFINITE)

		self.start_server()

	def SvcStop(self):
		"""
			**Required for Service**
			Purpose:
			Called when service stops
		"""
		self.ReportServiceStatus(win32service.SERVICE_STOP_PENDING)
		win32event.SetEvent(self.stop_event)

	def start_server(self):
		"""
			Purpose:
			Start the XML-RPC server and register the "postrun" class.

		"""
		servicemanager.LogInfoMsg("Running in 'start_server'")

		postrunObj = postrun()
		commandServer = SimpleXMLRPCServer(("localhost", 9000), allow_none=True)

		commandServer.register_introspection_functions()
		commandServer.register_instance(postrunObj)

		#Now keep the server alive till the end of the run
		guiServer.serve_forever()

def ctrlHandler(ctrlType):
   return True

if __name__ == '__main__':
	win32api.SetConsoleCtrlHandler(ctrlHandler, True)

	#Allows the service to be installed. Use the CLI for that.
	win32serviceutil.HandleCommandLine(dkservice)
	pass
