#!/bin/bash
###############################################################################
# Author: Travis Goldie
###############################################################################
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT

# XXX Do not quote EOF, so that variable substitution happens
read -r -d '' USAGE << EOF
Push the current brach to origin and then use "hub" to create
a pull request.

Optional Arguments:
-c   Call "commit -a"
-f   Force the push to origin. Careful!
-h   Print this help and exit
-n   Disable the push verify

EOF

commit=
force=
verify=
optstring=cfhn
while getopts $optstring opt ; do
    case $opt in
        c) commit="git commit -a" ;;
        f) force="-f" ;;
        h) echo "$USAGE" ; exit 255 ;;
        n) verify="--no-verify" ;;
    esac
done

main()
{
    local branch=$( git symbolic-ref --short -q HEAD )
    $commit
    git push $force $verify origin $branch
    hub pull-request
}
main
