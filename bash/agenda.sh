#!/bin/bash
###############################################################################
# Author: Travis Goldie
###############################################################################
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT

# XXX Do not quote EOF, so that variable substitution happens
read -r -d '' USAGE << EOF
Output the weekly agenda using "gcalcli" app.

Calendars:

- Steeleye
- Travis Goldie
- Weather

Optional Arguments:
-h   Print this help and exit

EOF

do_wait=
optstring=h
while getopts $optstring opt ; do
    case $opt in
        h) echo "$USAGE" ; exit 255 ;;
        w) echo "Setting looping" ; do_wait=true ;;
    esac
done


CONFIG_DIR="--configFolder=$HOME/.gcalcli.steeleye"
GCALCLI=/usr/local/bin/gcalcli
CALENDARS=( "Weather" "travis.goldie@steeleye.com" "Travis Goldie" )
KILL_LESS="/bin/kill \$(ps aux | grep '/tmp/agenda' | head -n1 | awk '{print \$2}')"
LESS="/usr/bin/less -r /tmp/agenda"
RANGE="today +5days"

echo_cal_args ()
{
    local calendars=" "

    for cal in "${CALENDARS[@]}" ; do
        calendars="${calendars} --calendar=\"$cal\""
    done

    echo "$calendars"
}

echo_agenda_cmd()
{
    local calargs=$(echo_cal_args)
    cmd="$GCALCLI $CONFIG_DIR $calargs agenda $RANGE"
    echo $cmd
}


do_while()
{
    while true ; do
        cmd=$( echo_agenda_cmd )
        eval $cmd >/tmp/agenda 2>/dev/null
        ( sleep 3 && eval $KILL_LESS ) &
        eval $LESS 2>/dev/null
        sleep 3
    done
}

main()
{
    if [[ $wait ]] ; then
        do_while
    else
        cmd=$( echo_agenda_cmd )
        eval $cmd >/tmp/agenda 2>/dev/null
        eval $LESS 2>/dev/null
    fi
}
main
