#!/bin/bash -

##
# Testing - source in assert.sh for tests!
##
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/assertsh/assert.sh"

read -r -d '' USAGE << "EOF"
Run the unit test functions in a script.

Assumes all functions are prefixed with "test_"

optional arguments:
-h    Print this help and exit
-n    Test run

EOF

# Setup arguments
OPTSTRING=hn

while getopts $OPTSTRING opt ; do
    case $opt in
        h) echo $USAGE ; exit 255 ;;
        n) dryrun=true ;;
    esac
done

PATH=$1

get_script_funcs()
{
    local path=$1
    source $path

    local funcs=$( declare -F -p | cut -d " " -f 3 )

    echo $funcs
}

get_script_test_funcs()
{
    local path=$1

    echo $( get_script_funcs $path | tr " " "\n" | grep "^test_*" )
}

run_tests()
{
    local path=$1

    for ut in tests ; do
        echo $ut
    done
}
