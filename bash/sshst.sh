#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Purpose: Shorthand for opening SIOS UI files in tmux
###############################################################################

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

DOM=".sc.steeleye.com"
HOST=
USER=

read -r -d '' USAGE << "EOF"
SSH into various steeleye machines

Positional Arguments
host  The hostname of the system to connect to

Optional arguments:
-h    Print this help and exit
-n    Test run

EOF

dryrun=
optstring=hn
while getopts $optstring opt ; do
    case $opt in
        h) echo "$USAGE" ; exit 255 ;;
        n) dryrun=true ;;
    esac
done

# Variables
SIOSLIN=( "hancock" "fenric" )
HOST_ARG=${@:$OPTIND:1}

build_hostname()
{
    local host=$1

    if [[ "$host" =~ ^[0-9]+$ ]] ; then
        # These are for the QA machines
        HOST="cae-qa-v${host}${DOM}"

    elif [[ "$host" =~ ^ng-v[0-9]+$ ]] ; then
        # These are for next gen machines
        USER="root"

    elif [[ "$host" =~ ^v[0-9]+$ ]] ; then
        # These are for next gen machines
        USER="root"
        HOST="ng-${host}${DOM}"

    elif [[ ${SIOSLIN[@]} =~ $host ]] ; then
        # These are for the internal (build) boxes
        USER="tgoldie"
        HOST="${host}${DOM}"

    else
        USER="root"
        HOST=${host}${DOM}
    fi
}

check_args()
{
    # Check if HOST_ARG is set. If not, exit
    if [[ -z $HOST_ARG ]] ; then
        echo "Not enough arguments"
        echo "$USAGE"
        exit 255

    elif [[ $# > 1 ]] ; then
        echo "Executing the following commands: $@"
        CMD=$@
    fi
}

run_cmd()
{
    echo "Connecting ${HOST} as user ${USER}" >&2

    if [[ ! $dryrun ]] ; then
        ssh -X ${USER}@${HOST} ${CMD[@]}
    fi
}

main()
{

    build_hostname $HOST_ARG
    check_args
    run_cmd
}
main
