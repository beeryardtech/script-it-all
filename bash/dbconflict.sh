#!/bin/bash
###############################################################################
# Author: Travis Goldie
###############################################################################
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT

# XXX Do not quote EOF, so that variable substitution happens
read -r -d '' USAGE << EOF
Collects and moves all the conflicted files out of
Dropbox and moves to a tmp dir.

Optional Arguments:
-h   Print this help and exit
-n   Dry run

EOF

dryrun=
optstring=hn
while getopts $optstring opt ; do
    case $opt in
        h) echo "$USAGE" ; exit 255 ;;
        n) echo "Dry Run!" ; dryrun=true ;;
    esac
done

DROPBOX=~/Dropbox
DUMP="$HOME/tmp/dbdump"
LOG=$( mktemp )

setupLog()
{
    mkdir -p "$DUMP"
    echo "Find log in $LOG"
    echo
}

move()
{
    local fileName=$1;
    local newName=$(echo $fileName | sed  's/\//-/g')
    local dest=$DUMP/$newName
    echo "Moving $fileName to $dest"

    mv "$fileName" "$dest"
}

runFind()
{
    find $DROPBOX -iname "*\ \(* conflicted\ *" -o -iname "*\(Case Conflict*" -o -iname "*\(Selective Sync Conflict\)*" | while IFS= read -r -d '' theFile; do
        move "$theFile" | tee "$LOG"
    done
    #for val in $results ; do
        #move "$val" | tee "$LOG"
    #done
}

main()
{
    export -f move
    setupLog
    runFind
}
main $@
