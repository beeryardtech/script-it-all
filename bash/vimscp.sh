#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Purpose: Use VIM's scp feature
###############################################################################
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

## Options
$DEFAULT_USER="root"

echo_cmd()
{
    if ! contains $srv '@' ; then
        srv="root@${srv}"
    fi
    cmd="vim -p scp://${srv}/${path}"
    echo $cmd
}
main()
{
    local srv=shift
    local path=shift

    local cmd=$( echo_cmd $1 $2 )
    disable_ctrl_s $cmd $@
}
main $@
