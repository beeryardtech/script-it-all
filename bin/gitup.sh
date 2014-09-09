#!/bin/bash - 
#===============================================================================
#         USAGE: ./gitup.sh
#===============================================================================
set -o nounset                              # Treat unset variables as an error

cwd=$( pwd )
repos=( ~/Dropbox/repos/nextgen/{broker,bus,client,service,tools,ui} )

for repo in ${repos[@]} ; do
    echo
    echo "Updating repo in $( basename repo )"
    cd $repo
    git pull --rebase origin master && git pull --rebase hancock master
    git push origin master
    echo
done

echo -n "\nUpdates have completed"

cd $cwd
