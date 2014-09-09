#-------------------------------------------------------------------------------
# Name:             nodes
#-------------------------------------------------------------------------------
from __future__ import with_statement
__author__			= "Travis Goldie"
__email__			= "test_automation@us.sios.com"
__date__			= "11/14/12"
__copyright__		= "(c) SIOS Technology Corp 2012"

import sys
from dkutils import normjoin, cleanValue


class dknode():
	def __init__(self, _config, _nodeName, _properties):
		"""
			Purpose:
			Stores all the properties of a node.

			Note:
			--	Each node must have either a private IP or a public IP (or both)
			--	Must include the corresponding submask for each IP
			--	Vols/shareds can be either in a single delimited list:
					volume="F,G,H"
				or per line:
					volume0="F"
					volume1="G"
		"""
		self.properties				= _properties
		self.nodeName				= _nodeName
		self.config					= _config
		self.props					= dict((propName.lower(), cleanValue(prop)) for
										propName, prop in self.properties )

		#If any of these props are in self.properties,
		#create key and set to a default value (or to blank)
		self.props["hostname"] = self.props.get("hostname", self.nodeName)

		#List of possible names or IDs to id the node
		self.system                 = [self.props.get("hostname"),
										self.props.get("publicip"),
										self.props.get("privateip")]
		self.volsformirror          = self._loadVolsForMirror()
		#self.sharedformirror        = self._loadSharedForMirror()
		self.allVols                = self.volsformirror
		pass

	#---------------------------------------------------------------------------
	# Local get functions
	#---------------------------------------------------------------------------
	def _loadVolsForMirror(self):
		"""
			Purpose:
			Get the list of volumes (non-shared) from the properties dict
		"""
		return self._loadList("volume")


	def _loadSharedForMirror(self):
		"""
			Purpose:
			Get the list of shared volumes from the properties dict
		"""
		return self._loadList("sharedForMirror")


	def _loadList(self, keyName):
		"""
			Purpose:
			Gets list of volume letters. Must have at least one vol or shared vol.

			Returns:
			List of drive letters (strings)
		"""
		listResult	 			= []
		keyName 				= keyName.lower()

		for key, val in self.props.items():
			#If given in a delimited list, split on the the known delimiters
			if key == keyName and val:
				return config.splitAndLower(result)

			#Build list for each line with the same name and ends in a digit
			#See example in docstring of __init__
			if key.startswith(keyName) and key[-1].isdigit() and val:
				listResult.append(cleanValue(val))

		if len(listResult) == 0:
			return ''
		else:
			return [ result.lower() for result in listResult ]


if __name__ == "__main__":
	config = dkconfig(r"c:\Programs\dk_test\tmp\cluster.ini.tmp")
	config.runEnvSetup()
	config.runFinalTearDown()
