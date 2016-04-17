#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Purpose: Send notification
###############################################################################

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

read -r -d '' USAGE << "EOF"
Sends a GNOME notification if a given command fails (error code > 0)

Positional Arguments
cmd   The Command to run
args  Args passed to `cmd`

Optional Arguments:
-h    Print this help and exit
-n    Test run

EOF

dryrun=
optstring=hn
MSG=
while getopts $optstring opt ; do
    case $opt in
        h) echo "$USAGE" ; exit 255 ;;
        n) dryrun=true ;;
    esac
done

if [[ $# -eq 0 ]] ; then
    echo "$USAGE"
    exit 255
fi

get_msg()
{
    local retCode=$1

	if [[ $retCode == 0 ]]; then
		MSG="Command completed successfully."
	else
		MSG="Command failed with return code of $retCode"
	fi

    echo "$MSG"
}

main()
{
    local cmd=${@}
    eval ${cmd}
    local returnCode=$?

    get_msg $returnCode

	notify-send --hint=int:transient:100 -u normal -t 800  "${cmd[@]}" "${MSG}"
}
main ${@}
