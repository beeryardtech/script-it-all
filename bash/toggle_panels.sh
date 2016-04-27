#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Reference: http://superuser.com/a/866058
###############################################################################
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

read -r -d '' USAGE << EOF
Toggle the (cinnamon) panel display state.

Optional Arguments:
-h    Print this help and exit
-i    Use "Intellegent hiding"

EOF

intel=
optstring=hi
while getopts $optstring opt ; do
    case $opt in
        h) echo "$USAGE" ; exit 255 ;;
        i) intel=true ;;
    esac
done

# Make sure DBUS address is correct
"$CURRENT_DIR/getdbus.sh" -E

state=$(gsettings get org.cinnamon panels-autohide)
ON="['1:true', '2:true']"
OFF="['1:false', '2:false']"
INTEL="['1:intel', '2:intel']"
if [[ "$state" == "$INTEL" || "$state" == "$ON" ]]; then
    gsettings set org.cinnamon panels-autohide "$OFF"
elif [[ $intel ]] ; then
    gsettings set org.cinnamon panels-autohide "$INTEL"
else
    gsettings set org.cinnamon panels-autohide "$ON"
fi
