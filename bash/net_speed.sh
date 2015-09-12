#!/bin/bash -

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source ~/init/helpers/helpers.sh
trap cleanup SIGINT SIGTERM

read -r -d '' USAGE << "EOF"
Gives output of bandwidth velocity. Upload and download
speed.

- See http://linuxclues.blogspot.com/2009/11/shell-script-show-network-speed.html?m=1

positional parameter
interface     The interface (typically eth0, wlan0)

optional arguments:
-h    Print this help and exit
-n    Test run, sets apt-get to simulation mode

EOF

dryrun=
optstring=hin
while getopts $optstring opt ; do
    case $opt in
    h) echo "$USAGE" ; exit 255 ;;
    n) dryrun=true ;;
    esac
done

##
# Global variables
##
received_bytes=""
old_received_bytes=""
transmitted_bytes=""
old_transmitted_bytes=""

# This function parses /proc/net/dev file searching for a line containing $interface data.
# Within that line, the first and ninth numbers after ':' are respectively the received and transmited bytes.
get_bytes()
{
    local interface=$1

    line=$(cat /proc/net/dev | grep $interface | cut -d ':' -f 2 | awk '{print "received_bytes="$1, "transmitted_bytes="$9}')
    eval $line
}

sum_bytes()
{
    local column=$1

    local eth0_line=$(cat /proc/net/dev | grep "eth0" | cut -d':' -f 2)
    local eth0=$(echo -n $eth0_line | cut -d' ' -f $column)

    local wlan0_line=$(cat /proc/net/dev | grep "wlan0" | cut -d':' -f 2)
    local wlan0=$(echo -n $wlan0_line | cut -d' ' -f $column)

    echo $(( eth0 + wlan0 ))
}


sum_bytes_recieved()
{
    sum_bytes 1
}

sum_bytes_trasmitted()
{
    sum_bytes 9
}


# Function which calculates the speed using actual and old byte number.
# Speed is shown in KByte per second when greater or equal than 1 KByte per second.
# This function should be called each second.
get_velocity()
{
    value=$1
    old_value=$2

    THOUSAND=1000
    MILLION=100000

    local vel=$(( value - old_value ))
    local velKB=$(( vel / MILLION ))
    local velMB=$(( vel / THOUSAND ))

    if [ $velMB != 0 ] ; then
        echo -n "$velMB MB/s"
    elif [ $velKB != 0 ] ; then
        echo -n "$velKB KB/s";
    else
        echo -n "$vel B/s";
    fi
}

start_up()
{
    # Gets initial values.
    old_received_bytes=$(sum_bytes_recieved)
    old_transmitted_bytes=$(sum_bytes_trasmitted)

    # Shows a message and waits for one second.
    sleep 1;
}

loop()
{
    local interface="all"

    # Main loop. It will repeat forever.
    while true; do
        # Get new transmitted and received byte number values.
        received_bytes=$(sum_bytes_recieved)
        transmitted_bytes=$(sum_bytes_trasmitted)

        # Calculates speeds.
        vel_recv=$(get_velocity $received_bytes $old_received_bytes)
        vel_trans=$(get_velocity $transmitted_bytes $old_transmitted_bytes)

        #clear current line (\033[2K), move cursor back to start (\r)
        echo -en "\033[2K\r"

        # Shows results in the console.
        #echo -en "$interface DOWN:$vel_recv\tUP:$vel_trans\r"
        #printf "%6s DOWN:%10s\tUP:%10s\r" "$interface" "$vel_recv" "$vel_trans"
        printf "DOWN:%10s\tUP:%10s\r" "$vel_recv" "$vel_trans"

        # Update old values to perform new calculations.
        old_received_bytes=$received_bytes
        old_transmitted_bytes=$transmitted_bytes

        # Waits one second.
        sleep 1;
    done
}

main()
{
    echo "here"
    start_up
    loop
}
main $@
