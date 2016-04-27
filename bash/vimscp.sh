#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Purpose: Use VIM's scp feature
###############################################################################
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

vimscp()
{
    srv=$1 ; path=$2
    if ! contains $srv '@' ; then
        srv="root@${srv}"
    fi
    cmd="vim -p scp://${srv}/${path}"
    echo $cmd
    disable_ctrl_s $cmd
}

