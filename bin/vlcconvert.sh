#!/bin/bash

vcodec="h264"
acodec="mp4a"
bitrate="1024"
arate="192"
ext="mpg"
mux="ts"

vlc="/usr/bin/vlc"
fmt="VOB"
dst="/home/user/"

for a in *; do
	$vlc -I dummy -vvv "./" --sout "#transcode{vcodec=,vb=,acodec=,ab=,channels=6}:standard{mux=,dst=\".\",access=file}" vlc://quit
done
