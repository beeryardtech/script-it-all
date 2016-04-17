#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Purpose: Updates tmux environment values
###############################################################################

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

SHOW_ENV="tmux show-environment"

do_update()
{
    local val=$1

    if [[ $val == -* ]]; then
        unset ${val/#-/}
    else
        # Add quotes around the argument
        v=${val/=/=\"}
        v=${val/%/\"}
        eval export $val
    fi
}

main()
{
    local val

    while read val; do
        do_update $val
    done < <($SHOW_ENV)

}
main
