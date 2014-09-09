#!/bin/bash
###############################################################################
#
# Author: Travis Goldie
# Purpose: Makes symlinks from scripts/dots/* to ~
#
###############################################################################
set -o nounset                              # Treat unset variables as an error


# Change to working dir
root="$HOME"
scripts=~/Dropbox/repos/beeryardtech/scripts
dots=$scripts/dots
bin=$scripts/bin
tmpdir=~/tmp/moved

# Only if ~/bin is a symlink then delete it. 
# Then make the link to the bin dir
if [ -h $root/bin ]; then
    echo "Removed old bin dir"
    rm $root/bin
fi
#ln -s $bin $root/bin

# Make dir that existing file will be placed as backups
mkdir -p $tmpdir

forLoop()
{
    list=$@
    for dotFile in ${list[@]}; do
        base=$( basename $dotFile )

        # Skip current dir and _config
        if [[ $base == 'dots' || $base == '_config' ]] ; then
            continue
        fi

        # The name of the file that will put in home dir
        dotFileStripd=$( echo "$base" | sed 's/.txt$//')
        # Only prefix the dot if led by an underscore
        if [[ ${dotFileStripd:0:1} == '_'  ]] ; then
            dotFileStripd=$(echo $dotFileStripd | sed 's/_/./1' )
        fi

        # Now make it a full path
        dotFileStripd=$root/$dotFileStripd

        # If symlink of the same name already exists then rm it first
        if [ -h ${dotFileStripd} ] ; then
            echo -n "Deleting $dotFileStripd - "
            rm $dotFileStripd
        fi

        # If file or dir exists move 
        if [[ -f ${dotFileStripd} || -a ${dotFileStripd} ]] ; then
            echo -n "Moving $dotFileStripd to $tmpdir - "
            mv $dotFileStripd $tmpdir
        fi

        echo "Creating link from $dotFile to $dotFileStripd"
        ln -s $dotFile ${dotFileStripd}
    done
}

# Go do work
forLoop $( find $dots -maxdepth 1)

root=$root/.config
forLoop $( find $dots/_config -maxdepth 1  )

