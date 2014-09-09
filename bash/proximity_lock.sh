#!/bin/bash

# Add log message for time script called
USAGE="USAGE: $(basename $0 ) [ -l | -u ] - logs message and locks screen"
epochTime=$( date +%s )
humanTime=$( date )
timeStamp="$epochTime - $humanTime -"
proximity_log="/tmp/proximity.log"

if [[ "$1" == "-l" ]] ; then 
    echo "$timeStamp LOCK: Screen should be locked."  | tee -a $proximity_log
    gnome-screensaver-command -l

elif [[ "$1" == "-u" ]] ; then
    echo "$timeStamp UNLOCK: Proximity is close. " | tee -a $proximity_log
    #gnome-screensaver-command -u

else
    echo "$USAGE" >&2
fi

