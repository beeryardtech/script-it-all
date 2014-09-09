#!/bin/bash - 
set -o nounset                              # Treat unset variables as an error

# Setup git repos with different origins and remotes
USAGE="Sets up bare NextGen repos on ci server.\n Clone those to current dir.\n Sets hancock as remote"

[[ $1 == "-h" ]] && echo -n $USAGE && exit 0

cwd=$( basename B )

