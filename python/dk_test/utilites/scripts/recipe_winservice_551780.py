# winservice.py

from os.path import splitext, abspath
from sys import modules

import win32serviceutil
import win32service
import win32event
import win32api

class Service(win32serviceutil.ServiceFramework):
	_svc_name_ = '_unNamed'
	_svc_display_name_ = '_Service Template'

	def __init__(self, *args):
		win32serviceutil.ServiceFramework.__init__(self, *args)
		self.log('init')
		self.stop_event = win32event.CreateEvent(None, 0, 0, None)

	def log(self, msg):
		import servicemanager
		servicemanager.LogInfoMsg(str(msg))
		def sleep(self, sec):
			win32api.Sleep(sec*1000, True)

	def SvcDoRun(self):
		self.ReportServiceStatus(win32service.SERVICE_START_PENDING)
		try:
			self.ReportServiceStatus(win32service.SERVICE_RUNNING)
			self.log('start')
			self.start()
			self.log('wait')
			win32event.WaitForSingleObject(self.stop_event, win32event.INFINITE)
			self.log('done')

		except Exception as x:
			self.log('Exception : %s' % x)
			self.SvcStop()

	def SvcStop(self):
		self.ReportServiceStatus(win32service.SERVICE_STOP_PENDING)
		self.log('stopping')
		self.stop()
		self.log('stopped')
		win32event.SetEvent(self.stop_event)
		self.ReportServiceStatus(win32service.SERVICE_STOPPED)

	# to be overridden
	def start(self):
		pass

	# to be overridden
	def stop(self):
		pass

def instart(cls, name, display_name=None, stay_alive=True):
	''' Install and  Start (auto) a Service

		cls : the class (derived from Service) that implement the Service
		name : Service name
		display_name : the name displayed in the service manager
		stay_alive : Service will stop on logout if False
	'''
	cls._svc_name_ = name
	cls._svc_display_name_ = display_name or name
	try:
		module_path=modules[cls.__module__].__file__
	except AttributeError:
		# maybe py2exe went by
		from sys import executable
		module_path=executable
	module_file = splitext(abspath(module_path))[0]
	cls._svc_reg_class_ = '%s.%s' % (module_file, cls.__name__)

	if stay_alive:
		win32api.SetConsoleCtrlHandler(lambda x: True, True)

	try:
		win32serviceutil.InstallService(
			cls._svc_reg_class_,
			cls._svc_name_,
			cls._svc_display_name_,
			startType = win32service.SERVICE_AUTO_START
		)
		print 'Install ok'
		win32serviceutil.StartService(
			cls._svc_name_
		)
		print 'Start ok'
	except Exception as x:
		print str(x)

#
#
#
#
##### TEST MODULE
#
#
#
#

# winservice_test.py

from winservice import Service, instart

class Test(Service):
	def start(self):
		self.runflag=True
		while self.runflag:
			self.sleep(10)
			self.log("I'm alive ...")
	def stop(self):
		self.runflag=False
		self.log("I'm done")

instart(Test, 'aTest', 'Python Service Test')

################################################################################
# http://stackoverflow.com/questions/32404/
################################################################################


import pythoncom
import win32serviceutil
import win32service
import win32event
import servicemanager
import socket


class AppServerSvc (win32serviceutil.ServiceFramework):
	_svc_name_ = "TestService"
	_svc_display_name_ = "Test Service"

	def __init__(self,args):
		win32serviceutil.ServiceFramework.__init__(self,args)
		self.hWaitStop = win32event.CreateEvent(None,0,0,None)
		socket.setdefaulttimeout(60)

	def SvcStop(self):
		self.ReportServiceStatus(win32service.SERVICE_STOP_PENDING)
		win32event.SetEvent(self.hWaitStop)

	def SvcDoRun(self):
		servicemanager.LogMsg(servicemanager.EVENTLOG_INFORMATION_TYPE,
							  servicemanager.PYS_SERVICE_STARTED,
							  (self._svc_name_,''))
		self.main()

	def main(self):
		pass

if __name__ == '__main__':
	win32serviceutil.HandleCommandLine(AppServerSvc)




################################################################################
# http://ryrobes.com/python/running-python-scripts-as-a-windows-service/
################################################################################

class aservice(win32serviceutil.ServiceFramework):

	_svc_name_ = "MyServiceShortName"
	_svc_display_name_ = "My Serivce Long Fancy Name!"
	_svc_description_ = "THis is what my crazy little service does - aka a DESCRIPTION! WHoa!"

	def __init__(self, args):
		   win32serviceutil.ServiceFramework.__init__(self, args)
		   self.hWaitStop = win32event.CreateEvent(None, 0, 0, None)

	def SvcStop(self):
		self.ReportServiceStatus(win32service.SERVICE_STOP_PENDING)
		win32event.SetEvent(self.hWaitStop)

	def SvcDoRun(self):
	  import servicemanager
	  servicemanager.LogMsg(servicemanager.EVENTLOG_INFORMATION_TYPE,
							servicemanager.PYS_SERVICE_STARTED,
							  (self._svc_name_, ''))

	#self.timeout = 640000    #640 seconds / 10 minutes (value is in milliseconds)
	self.timeout = 120000     #120 seconds / 2 minutes
	# This is how long the service will wait to run / refresh
	#itself (see script below)

	while 1:
		# Wait for service stop signal, if I timeout, loop again
		rc = win32event.WaitForSingleObject(self.hWaitStop, self.timeout)
		# Check to see if self.hWaitStop happened
		if rc == win32event.WAIT_OBJECT_0:
			# Stop signal encountered
			servicemanager.LogInfoMsg("SomeShortNameVersion - STOPPED!")  #For Event Log
			break
		else:

				 #Ok, here's the real money shot right here.
				 #[actual service code between rests]
				try:
					file_path = "C:\whereever\my_REAL_py_work_to_be_done.py"
					execfile(file_path)             #Execute the script

					inc_file_path2 = "C:\whereever\MORE_REAL_py_work_to_be_done.py"
					execfile(inc_file_path2)        #Execute the script
				except:
					pass
				#[actual service code between rests]


def ctrlHandler(ctrlType):
   return True

if __name__ == '__main__':
   win32api.SetConsoleCtrlHandler(ctrlHandler, True)
   win32serviceutil.HandleCommandLine(aservice)