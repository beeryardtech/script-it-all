#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Purpose: Open a session to windows using rdesktop
###############################################################################

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

read -r -d '' USAGE << "EOF"
Runs rdesktop with some given parameters.

Positional Arguments
host  The hostname of the system to connect to

optional arguments:
-d    Use the STEELEYE domain
-f    Use fullscreen mode
-k    Do not override key bindings
-h    Print this help and exit
-n    Test run

EOF

## Default Params
DOMAIN=".sc.steeleye.com"
DISABLE_KEY_OVERRIDE=""
GEO="-g 1440x820"
LOGIN_DOMAIN=""
PRINTER="-r printer:Canon-iR-ADV-C2225"
RESOURCES="-r clipboard:CLIPBOARD"
USER="-u tgoldie"

dryrun=
optstring=dfkhn
while getopts $optstring opt ; do
    case $opt in
    d) echo "Using domain: STEELEYE" ; LOGIN_DOMAIN="-d STEELEYE" ;;
    f) echo "Full screen mode" ; GEO="-f" ;;
    k) echo "Not overriding key bindings" ; DISABLE_KEY_OVERRIDE="-K" ;;
    h) echo "$USAGE" ; exit 255 ;;
    n) dryrun=true ;;
    esac
done

if [[ $# -eq 0 ]] ; then
    echo "$USAGE"
    exit 255
fi

HOST=${@:$OPTIND:1}${DOMAIN}

make_cmd()
{
    local title="$HOST $DISABLE_KEY_OVERRIDE"
    local cmd="rdesktop $RESOURCES -T '$title' $LOGIN_DOMAIN $K $GEO $USER $HOST"

    echo $cmd
}

main()
{
    local cmd=$(make_cmd)

    echo "Command: $cmd"

    if [[ $dryrun ]] ; then
        echo "In dryrun mode"
        exit 0;
    fi

    eval $cmd
}
main
