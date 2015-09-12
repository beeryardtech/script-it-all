#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Purpose: Shorthand for opening tmux for init scripts
###############################################################################

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

