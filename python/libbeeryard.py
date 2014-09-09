#!/usr/bin/python
################################################################################
# Name: libbeeryard
# Author: Travis Goldie
# Date: September 2012
# Purpose: Backup solutions by duplicating file structure
#
# License: see Licence.txt
################################################################################

#Import libraries
#General Modules
import glob, os, subprocess, re, sys
from filecmp import cmp
from shutil import copy
#Check imports
try:
	import apt
	apt_available = True
except ImportError:
	   apt_available = False
vfmt=""
sharedir=""
cwd=""

def sysbackup(tag, revisions=3, sdir=sharedir):
	""" Make backup copies of files based on existing structure in sharedir
		tag- Subdirectory of shareddir. Used to create backups for different systems
		revisions- Max number of past versions
		sharedir- Path to share file
	"""
	tagdir = _normjoin(sdir, tag)
	if not os.path.exists(tagdir):
	   return

	#If startdir is actually a file, return
	if os.path.isfile(tagdir):
		return

	for root,dirs,files in os.walk(tagdir):
		for f in files:
			#Only add non-backups files to list
			if not re.match('[\w._-]*_\d', f):
			#[0] - path in file system, #[1] - name of file to be processed
				bckpathth, syspath = _getBckSysPaths(tag,root,f)
				#If file "f" is not on system, then ignore
				#TODO add error message to log
				if not os.path.exists(syspath):
					continue
				#Compare file to copy on system, if different make backup
				if not cmp(syspath, bckpath):
					rotate(bckpath, revisions)
					#Make copy from system
					copy(syspath, bckpath)

def sysdiff(tag, func, sdir=sharedir):
	pass

#End sysdiff(tag, func, sdir
def sysrestore(tag, revision=0, sdir=sharedir):
	""" Restores system files from backups in sharedir.
		tag- Subdirectory of shareddir. Used to create backups for different systems
		ver- Which backup version to use (0 is the most recent version)
		sdir- Path to share file
	"""
	tagdir = _normjoin(sdir, tag)
	if not os.path.exists(tagdir):
	   return

	#If startdir is actually a file, return
	if os.path.isfile(tagdir):
		return

	#Get regex mask
	if ver == 0:
		regex = r"[\w.-]*[^_][^\d]"
	elif ver > 0:
		regex = r"[\w.-]*_{}".format(ver)
	else:
		 print("Error: ver needs to be an positive integer")

	for root,dirs,files in os.walk(tagdir):
		for f in files: #Only add non-backups files to list. Then get paths
			if re.match(regex, f):
				bckpath, syspath = _getBckSysPaths(tag,root,f)
				if not cmp(bckpath, syspath):
					copy(bckpath, syspath)
#End sysrestore(tag, ver, sdir)

def syslinkify(tag, startdir="/", maxdepth=0, sdir=sharedir):
	""" Creates sym links from shared to system
		tag- Subdirectory of shareddir. Used to create backups for different systems
		startdir- Start dir under "sdir" for linkify'ing. Recursively links files of subdirs.
		maxdepth- Recursively enters dirs upto value. Default of 0 means unlimited.
		sdir-
	"""
	startdir = _normjoin(sdir, tag, startdir)
	#check if startdir exists
	#TODO raise exception
	if not os.path.exists(startdir):
		return
	#If startdir is actually a file, link it and return
	if os.path.isfile(startdir):
		syspath = startdir.split(tag)[1]
		if os.path.exists(syspath):
				os.remove(syspath)
		os.symlink(startdir, syspath)
		return
	#TODO set up for maxdepth
	#Since we have a directory...
	for root,dirs,files in os.walk(startdir):
		for f in files:
			bckpath, syspath = _getBckSysPaths(tag,root,f)
			if os.path.exists(syspath):
				os.remove(syspath)
			os.symlink(bckpath, syspath)

def aptbackup(tag, sdir=sharedir):
	""" Creates a backup of your installed packages
		tag- Subdirectory of shareddir. Used to create backups for different systems
		sdir- Path to shared directories
	"""
	#Check if module loaded
	if not apt_available:
		return

	#Create cache object
	cache = apt.Cache()
	#Same as running apt-get update. Open needed to use cache
	cache.update()
	cache.open()



	pass

def aptinitilize(tag, aptlist="/backup/aptlist", sdir=sharedir):
	""" Installs initial packages and all of their dependencies. Also fetches
		packages and installs them.
		tag-
		sdir-
	"""
    #Check if module loaded

	aptlist = _normjoin(aptlist, sdir)
	if not os.path.exists(aptlist):
	   return

	#Load in lists from file
	aptListFile = open(aptlist, "r")

	#Verify that the newest source.list is available. Update cache
	sysSourceList = _normjoin("/etc/apt/source.lst")
	bckSourceList = _normjoin(sdir, tag, sysSourceList)
	if os.path.exists(bckSourceList):
	   cmp(sysSourceList, bckSourceList + ".orig")
	   cmp(bckSourceList, sysSourceList)

	if not subprocess.check_call(["sudo","apt-get","update"]):
		return

#Run "apt-get install" on list of packages
	subprocess.call(["sudo","apt-get"])

#Run wget to download files and then install using "dpkg -i"
#TODO run apt-get download and wget in parallel threads
#TODO handle dep issues with "apt-get -f"


#End aptinitilize(tag,sdir)

def aptrestore(tag, sdir=sharedir):
	"""
	"""
	#Check if module loaded
	if not apt_available: sys.exit(100)
	pass
#End aptrestore(tag,sdir)

def sshsetup(sdir="~/.ssh"):
	""" Setup keys and add keys.
		 sdir- directory of shared keys
	"""
	#Check if module loaded
	if not ssh_available: sys.exit(100)
	pass
#End sshsetup(sdir)

#-------------------------------------------------------------------------------
# Helper Functions
#-------------------------------------------------------------------------------
def aptget(pkgs):
	pass
#End aptget(pkgs)

def _getBckSysPaths(tag,root,f):
	""" Returns the path to backup file and corresponding system file
		returns: (bckpath, syspath)
	"""
	bckpath = _normjoin(root,f)
	syspath = _normjoin(os.path.splitdrive(root)[0],root.split(tag)[1], f)
	return bckpath, syspath
#End _getBckSysPaths(tag,root,f)

def _normjoin(*p):
	""" Uses os.path functions to normalize and join paths
		*p - all the paths you want to join
		return: normalized and joined string
	"""
	b_results = []
	for b in p:
		#Clean the values. No leading slashes for each element
		b = b.strip()
		if len(b_results) > 1:
		   if b[0] in ["/", "\\"]:
		   	  b = b[1:]
		b_results.append(os.path.normpath(os.path.expandvars(os.path.expanduser(b))) )
	#Note that the * will send the list as arguments to the join function
	return os.path.join(*b_results)
#End normjoin(*p)

def _rotate(f, num):
	""" Rotate backed up copies. using format mask.
		returns: None
	"""
	#Change name of file to make globbing and incrementing easier
	base= os.path.basename(f)
	os.rename(f, f + "_0")
	vlist = glob.glob(f + "_*")
	#Remove any extra backups above num (number of backups)
	#TODO add flag to check if should keep or remove extra backup copies
	for count in range(num, len(vlist)):
		os.remove(vlist.pop())
	#Increments filenames. Range decrements from "num" down to 0
	for i in range(1, len(vlist)+1, 1):
		x=int(vlist[-i][-1]) + 1
		os.rename(vlist[-i], vfmt.format(f,x))
#End rotate(f, num)

if __name__ == "__main__":
	#sharedir = HOME + "/Dropbox/SpideroakShared"
##	global cwd
##	global sharedir
##	global vfmt
	sharedir = _normjoin("~", "Dropbox/SpideroakShared")
	apt_dir = "etc"
	#sharedir = os.path.normpath("c:\Programs")
	cwd = os.getcwd()
	vfmt= "{0}_{1}" # mask for versioning files

	#sysbackup('test', 3, sharedir)
	#sysrestore('test', 0, sharedir)
	#aptbackup()
	#sysbackup('test', '/home/tgoldie')
	syslinkify('byrd', '/home/tgoldie', 0, sharedir)
#End main
