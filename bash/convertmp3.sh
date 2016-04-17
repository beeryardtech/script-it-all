#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Purpose: Convert files to mp3 using VLC. Uses same base name.
###############################################################################
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

## Variables
USAGE="$0 inDir outDir"
indir="$1/*"

## SETTINGS
acodec="acodec=mp4a"
arate="ab=192"
bitrate="vb=1024"
channels="channels=6"
mux="mux=ts"
outFmt="mp3"
vcodec="vcodec=h264"
vlc="/usr/bin/vlc"

for path in $indir ; do
    dst="dst=\"${2}$( basename ${path%.*} ).${outFmt}\""
    transcode="#transcode{$vcodec,$bitrate,$acodec,$arate,$channels}:standard{$mux,$dst,access=file}"
    $vlc -I dummy -vv "$path" --sout "$transcode" vlc://quit
done
