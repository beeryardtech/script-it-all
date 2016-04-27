#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Purpose: Mount encrypted fs
###############################################################################
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

# XXX Do not quote EOF, so that variable substitution happens
read -r -d '' USAGE << EOF
Mount encfs file system directories.

Optional Arguments:
-h         Print this help and exit
-m [dir]   Mount either all drives or a single [dir]
-n         Test run
-u [dir]   Unmount either all drives or a single [dir]

EOF

# Variables
ACTION="mount"
FUSERMOUNT=/bin/fusermount
ENCFS=/usr/bin/encfs
MOUNTPOINT=/bin/mountpoint
declare -A MOUNTS=(
    ["${DROPBOX}/.Private"]="${HOME}/Private"
    ["${DROPBOX}/.sshkeys"]="${HOME}/.sshkeys"
    ["${DROPBOX}/Janie/.SharedPrivate"]="${HOME}/SharedPrivate"
)

# Setup arguments
dryrun=
optstring=hm:nu
while getopts $optstring opt ; do
    case $opt in
        h) echo "$USAGE" ; exit 255 ;;
        m) ACTION="mount" ; MOUNTPT=$OPTARG ;;
        n) dryrun=true ;;
        u) ACTION="unmount" ; MOUNTPT=$OPTARG ;;
    esac
done

#Mount each point one by one. This allows for unique options for mount points
mnt()
{
    # Mounts is a assoc array of mount points.
    # Key - encrypted dir, value - mount point
    singlept=$1

    local val=
    for key in ${!MOUNTS[@]} ; do
        val=${MOUNTS[$key]}

        # If specified, only mount the single mount point
        if [[ -n "$singlept" ]] ; then
            if ! icontains $key $singlept ; then
                # Skip any that do not match the single point
                continue

            elif $MOUNTPOINT -q $val ; then
                echo "Mount point $val is already mounted"
                return

            else
                echo "Do single mounting of $key to $val"
                $ENCFS $key $val
                return

            fi
        else
            if ! $MOUNTPOINT -q $val ; then
                echo "Mounting $key to $val"
                $ENCFS $key $val
            fi
        fi
    done
}

unmnt()
{
    local mounts=( $( mount -t fuse.encfs | grep "user=${2}" | awk '{print $3}' ) )
    local singlept=$1

    echo "Unmounting all encfs mount points..."

    for mountpt in  $( mount -t fuse.encfs | grep "user=${2}" | awk '{print $3}' ) ; do
        echo $mountpt
        $FUSERMOUNT -u $mountpt
    done

}

main()
{
    if [[ $ACTION == "mount" ]]; then
        mnt $MOUNTPT

    elif [[ $ACTION == "unmount" ]]; then
        unmnt $MOUNTPT

    fi
}
main
