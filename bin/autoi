#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Purpose: Setup autossh to ingress server
###############################################################################

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

SSH_KEY=$HOME/.sshkeys/beeryard_key

add_key()
{
    ssh-add $SSH_KEY
}

list_keys()
{
    echo "New Identies are:"
    ssh-add -L
}

do_ssh()
{
    autossh tgoldie@ingress.steeleye.com
}

main()
{
    add_key
    list_keys
    do_ssh
}
main
