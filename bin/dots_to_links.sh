#!/bin/bash
###############################################################################
#
# Author: Travis Goldie
# Purpose: Makes symlinks from scripts/dots/* to ~
#
###############################################################################
set -o nounset                              # Treat unset variables as an error


# Change to working dir
scripts=~/Dropbox/repos/beeryardtech/scripts
dots=$scripts/dots
bin=$scripts/bin

# Only if ~/bin is a symlink then delete it. 
# Then make the link to the bin dir
if [ -h ~/bin ]; then
    echo "Removed old bin dir"
    rm ~/bin
fi
ln -s $bin ~/bin

for dotFile in $(find $dots -maxdepth 1 ); do
    # Skip current dir
    [[ $(basename $dotFile ) == 'dots' ]] && continue

    dotFileStripd=$( basename $dotFile | sed 's/.txt$//')

    # Only prefix the dot if led by an underscore
    if [[ ${dotFileStripd:0:1} == '_'  ]] ; then
        dotFileStripd=$(echo $dotFileStripd | sed 's/_/./1' )
    fi
    if [ -h ~/${dotFileStripd} ] ; then
        echo "Deleting ~/$dotFileStripd"
        rm ~/$dotFileStripd
    fi

    ln -s $dotFile ~/${dotFileStripd}
done
