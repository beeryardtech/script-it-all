#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Reference: http://askubuntu.com/a/457023
###############################################################################
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

# XXX Do not quote EOF, so that variable substitution happens
read -r -d '' USAGE << EOF
Find and echo the correct "DBUS_SESSION_BUS_ADDRESS"

Optional Arguments:
-h   Print this help and exit
-e   Export the value (rather than just echo'ing it)
-E   Only export, do not echo the value

EOF

doecho=true
doexport=
optstring=heE
while getopts $optstring opt ; do
    case $opt in
        h) echo "$USAGE" ; exit 255 ;;
        e) doexport=true ;;
        E) doexport=true ; doecho=false ;;
    esac
done

# Search these processes for the session variable
# (they are run as the current user and have the DBUS session variable set)
compatiblePrograms=( nautilus kdeinit kded4 pulseaudio trackerd )

# Attempt to get a program pid
for index in ${compatiblePrograms[@]}; do
    PID=$(pidof -s ${index})
    if [[ "${PID}" != "" ]]; then
        break
    fi
done
if [[ "${PID}" == "" ]]; then
    echo "Could not detect active login session"
    return 1
fi

QUERY_ENVIRON="$(tr '\0' '\n' < /proc/${PID}/environ | grep "DBUS_SESSION_BUS_ADDRESS" | cut -d "=" -f 2-)"
if [[ "${QUERY_ENVIRON}" != "" ]]; then
    $doecho && echo "${QUERY_ENVIRON}"
    $doexport && export DBUS_SESSION_BUS_ADDRESS="${QUERY_ENVIRON}"
else
    #echo "Could not find dbus session ID in user environment."
    exit 1
fi
