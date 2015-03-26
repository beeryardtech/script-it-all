#!/bin/bash -
##
# @name keepass-node.sh
# @param {boolean} --setup Run npm install first and create symlink to database
# @param {string} -s|--stop Stop existing instance
# @description
# Initalizes keepass-node server (on NodeJs) and opens chrome in incognito mode.
#
# Also, if `-s` given, setup the server.
##
# Only should be ran as root
# if [[ $EUID -ne 0 ]]; then
    # echo "Run this script as root" 1>&2
    # exit 1
# fi
cleanup()
{
    echo "#### Trapped in keepass-node. Exiting."
    exit 255
}
trap cleanup SIGINT SIGTERM

keepassNodeDir=~/Dropbox/repos/keepass-node
dbdest=${keepassNodeDir}/local
keepass=~/Dropbox/APG/keepass.kdbx
integrityprops=~/Dropbox/APG/integrityprops.kdbx

pidfile=/tmp/keepass-node.pid

# Change dir
pushd $keepassNodeDir

setupsrv()
{
    # Remove old links
    if [[ -h ${dbdest}/$( basename $keepass ) ]] ; then
        rm ${dbdest}/$( basename $keepass )
    fi
    if [[ -h ${dbdest}/$( basename $integrityprops ) ]] ; then
        rm ${dbdest}/$( basename $integrityprops )
    fi
    ln -s $keepass $dbdest
    ln -s $integrityprops $dbdest
    npm install
}

startsrv()
{
    (npm start & >/tmp/keepass-node.log 2>&1)
    PID=$!
    echo $PID > $pidfile
    google-chrome --incognito http://localhost:8443
}

stopsrv()
{
    echo "Getting pid from file $pidfile: $( cat $pidfile)"
    PID=$( cat $pidfile)
    kill -9 $PID
    exit 0
}

__ScriptVersion="1.0"

usage ()
{
cat <<- EOT

  Usage :  $0 [options] [--]

  Options:
  -h|help       Display this message
  -S|setup      Run npm install first and create symlink to database
  -v|version    Display script version

EOT
}

#-----------------------------------------------------------------------
#  Handle command line arguments
#-----------------------------------------------------------------------

optstring=:hsv
while getopts $optstring opt; do
  case $opt in

    h|help     ) usage; exit 0 ;;

    s|stop     ) stopsrv ;;

    S|setup    ) setupsrv ;;

    v|version  ) echo "$0 -- Version $__ScriptVersion"; exit 0 ;;

    \? )  echo -e "\n  Option does not exist : $OPTARG\n"
          usage; exit 1 ;;

  esac
done
shift $(($OPTIND-1))

# Arg testing done, start the server
startsrv

popd
