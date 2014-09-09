#-------------------------------------------------------------------------------
# Name:             dksikuli
#-------------------------------------------------------------------------------
from __future__ import with_statement

__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "11/14/12"
__copyright__		= "(c) SIOS Technology Corp 2012"

import os
import subprocess
import sys
from time import sleep


#The try statements are needed when using different versions of Python.
#For Example using both Cpython 3.2 and IronPython 2.7
try:
	from configparser import ConfigParser
	from xmlrpc.server import SimpleXMLRPCServer
except ImportError:
	from ConfigParser import ConfigParser
	from SimpleXMLRPCServer import SimpleXMLRPCServer


def start_server(obj):
	"""
		Purpose:
		Create the XML-RPC Server to allow CPython (and other tools) to interact with
		the dksikuli instance and its Sikuli functions.

		Similar to remotesrv.py's "start_server" function.
	"""
	guiServer = SimpleXMLRPCServer(('', 8080), allow_none=True)

	guiServer.register_introspection_functions()
	guiServer.register_instance(obj)

	#Now keep the server alive till the end of the run
	guiServer.serve_forever()


def test_dksikuli():
	"""
		Purpose:
		Unit test dksikuli.
	"""
	params	= {'expectedretcode' : 0,
			'guiTarget' : '172.17.105.149',
			'app' : 'sikuli',
			'cmd' : 'connectservers',
			'servers' : 'cae-qa-v82,cae-qa-v83' }
	cmds = "connectservers"

	dks = dksikuli()
	dks.runSetup(r"C:\Programs\dk_test",
					r"C:\Programs\dk_test\tmp\cluster.ini.tmp")
	dks.runCmds(cmds, params)


class dksikuli(object):
	def __init__(self):
		"""
			Purpose:
			Uses predefined functions to interact DataKeeper GUI using the
			Sikuli libs.
		"""
		#Generic sleep timers
		self.sleep_short		= 5.0
		self.sleep_long			= 10.0
		self.sleep_xl			= 20.0
		self.sleep_xxl			= 45.0


	def runSetup(self, basedir, clusterini):
		"""
			Purpose:
			Setup the class based on config from client process
		"""
		#Set the sys path
		sys.path.insert(0, basedir)
		sys.path.insert(0, os.path.join(basedir, "libs"))

		#Get the config info
		from dkconfig import dkconfig

		self.clusterini			= clusterini
		self.config				= dkconfig(clusterini)

		self.imagesdir			= self.config.paths["guiimagesdir"]
		self.guipath			= self.config.paths["dkgui"]
		self.mmcpath			= self.config.paths["mmc"]

		#Open the gui. Need to use quotes to handle spaces.
		self.dkgui = App.open("\"" + self.mmcpath + "\" \"" +
								self.guipath + "\"")


	def runCmds(self, cmdsString, params):
		"""
			Purpose:
			Execute command. (Build to handle several commands, but only expect
			one at a time for now).
		"""
		from dkutils import cleanValue, normjoin
		cmdsResult = {}

		self.params				= params
		self.cmds				= self.config.splitAndLower(cmdsString)


		#self.logger.info("Starting gui commands {}".format(self.cmds))
		for cmd in self.cmds:
			cmdsResults[cmd] = eval(cleanValue("self._" + cmd.lower() + "()"))


		#self.logger.info("Ending gui commands")

		return cmdsResults


	def runTearDown(self):
		"""
			Purpose:
			Final cleanup
		"""
		pass


	def _connectservers(self):
		"""
			Purpose:
			Connect to a server using the supplied list of server names/addresses.
			Either opens the dialog box on the action pane or from the new mirror
			dialog box.
		"""
		self.dkgui.focus()

		#Get parameters
		serverList = self.config.splitAndLower(self.params.get("servers"))

		for server in serverList:
			#Depending on where you are: Either as part of creating a
			#new mirror or from the main GUI screen
			sleep(self.sleep_short)
			if exists("newMirror_choose_source.png"):
				click("newMirror_ConnectToServer.png")
			else:
				click("connectToServer_button_action_pane.png")
				#wait("connectToServer_Input_old.png")
				wait("connectToServer_Input.png")

			#Input the value of the server
			type("connectToServer_server_field.png", server)
			click("connectToServer_connect_button.png")
			sleep(self.sleep_short)
			wait("connectToServer_wait_complete.png")

			#Connection is complete, now hit "OK"
			wait("general_button_ok.png", self.sleep_long)
			click("general_button_ok.png")

		return True


	def _createmirror(self):
		"""
			Purpose:
			Create a mirror using the volumes
		"""
		self.dkgui.focus()

		#Get parameters
		volume = self.params.get("volume")

		return True


	def _createjob(self, title, description):
		"""
			Purpose:
			Open Job window and insert title and description.
		"""
		self.dkgui.focus()

		#Get parameters
		title = self.params.get("title")
		description = self.params.get("description")

		#Open the create job panel
		wait("actions_pane.png", self.sleep_long )
		click("createjob_actions_button.png")
		wait("createjob_dialog.png", self.sleep_long)

		#Input the information
		type("jobname_field.png", title)
		type("job_description_field.png", description)

		#Click "Create Job"
		click("createjob_button.png")

		return True


	def _deletemirror(self):
		"""
			Purpose:
			Delete one mirror
		"""
		self.dkgui.focus()

		#Get parameters
		volume = self.params.get("volume")

		return True


	def _disconnectservers(self):
		"""
			Purpose:
			Disconnects from all servers.
		"""
		self.dkgui.focus()

		#Open the disconnect dialog
		wait("actions_pane.png", self.sleep_long )
		click("disconnectServer_action_pane.png")
		wait("disconnectServer_dialog.png", self.sleep_short)

		#Click all check boxes in dialog box
		for server in findAll("disconnectServer_checkbox.png"):
			click("disconnectServer_checkbox.png")

		#Click confirm and end
		sleep(self.sleep_short)
		wait("disconnectServer_disconnect_button.png", self.sleep_long)
		click("disconnectServer_disconnect_button.png")

		return True


	def _switchovermirror():
		"""
			Purpose:
			Switchover a mirror using the gui
		"""
		self.dkgui.focus()

		#Get parameters

		return True


#-------------------------------------------------------------------------------
# Used to initialize the server
#-------------------------------------------------------------------------------
dks = dksikuli()
start_server(dks)

#-------------------------------------------------------------------------------
# Use this function for unit testing -- Comment out RPC server first
#-------------------------------------------------------------------------------
#test_dksikuli()


#This code will only be run when using CPython
if __name__ == '__main__':
##	dks = dksikuli()
##	dks.runSetup("dkconfig", r"C:\Programs\dk_test\libs\dkconfig.py",
##					r"C:\Programs\dk_test\scenarios\cluster.ini", "default")
	pass