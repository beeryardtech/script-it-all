#!/bin/bash
###############################################################################
# Author: Travis Goldie
###############################################################################
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT

# XXX Do not quote EOF, so that variable substitution happens
read -r -d '' USAGE << EOF
Email UI team using mutt

Optional Arguments:
-h   Print this help and exit
-s   Add a subject line

EOF

subj=
optstring=hs:
while getopts $optstring opt ; do
    case "$opt" in
        h) echo "$USAGE" ; exit 255 ;;
        s) subj="$OPTARG" ;;
    esac
done

msg="${@:$OPTIND:1}"

echo "$msg" | mutt -s "$subj" -c "cassius.rhue@us.sios.com" -c "todd.frye@us.sios.com" "tom.beckenhauer@us.sios.com" "jesse.nichols@us.sios.com"
#echo "$msg" | mutt -s "${subj}" travis.goldie@us.sios.com
echo $msg
echo $subj
