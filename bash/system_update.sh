#!/bin/bash
###############################################################################
#
# Name: .bashrc
# Author: Travis Goldie
# Date: January 2012
# Abstract: Used in crontab to keep system up to date. Typically executed
#				Every hour on the hour.
#
###############################################################################

#-------------------------------------------------------------
# Define Environment 
#-------------------------------------------------------------
#Allows the .bashrc to be source in. Normally $PS1 is Null
oldPS1=$PS1
PS1=z1 
source /home/tgoldie/.bashrc
PS1=$oldPS1

#-------------------------------------------------------------
# Define actions 
#-------------------------------------------------------------
unset arg cmd prefix opts USAGE

oldIFS=$IFS
IFS=''
read -r -d '' USAGE << 'EOF'
Usage: system_update [options] [actions]
	Actions:
	-h, --help		Show this usage and exit
	-c, --crontab	Backup users crontab
	-r, --repoup	Run "svnup" updating all svn repos
	-S, --rem-settings Copy settings from hancock to local backup

	Options:
	-n Notify on success and on failure	
	-N Notify on non-zero exit of command
EOF

IFS=$oldIFS

if [[ $# == 0 ]]; then
	echo $USAGE && exit 1
fi

for arg in $@; do
	case $arg in
		#Prefix Options
		"-n" | "--notify" )
			prefix="${prefix}notify "
			continue ;;
		"-N" | "--notifyerror" )
			prefix="${prefix}notifyerror "
			continue ;;
		#Options for commands

		#Action Commands
		"-h" | "--help" ) 
			cmd=echo "$USAGE" 
			exit 0 ;;
		"-c" | "--crontab" )
			cmd="crontab -l" 
			continue ;;
		"-r" | "--repoup" )	
			cmd="repoup"
		  	continue ;; 
		"-S" | "--rem-settings" )	
			cmd="cp -r /mnt/nfs/tgoldie/settings $DROPBOX/shared/backup/SIOS/"
		  	continue ;; 
	esac
done

execCmd="$prefix $cmd $opts" 
#echo "ExecCmd: $execCmd"
#dbg eval $execCmd
$execCmd
