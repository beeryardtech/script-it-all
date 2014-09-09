#!/bin/bash - 
#===============================================================================
#         USAGE: source ./buildvim.sh
#===============================================================================
set -o nounset                              # Treat unset variables as an error

source $DROPBOX/repos/beeryardtech/init/init.funcs.sh

repos="/home/tgoldie/repos"
buildVim
