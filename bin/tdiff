#!/bin/bash
###############################################################################
# Name: tdiff.sh
# Author: Travis Goldie
# Date: May 2015
# Purpose: Shorthand for opening SIOS UI files in tmux
###############################################################################

config=~/.tmux.conf.tdiff
session=tdiff
PWD=~/ui
cmd="cd $PWD"

tmux -f $config new-session -d -s $session
tmux split-window -h -t "tdiff"

echo "Sending keys"
tmux send-keys -t "tdiff:0.0" "$cmd ; git status" C-m
tmux send-keys -t "tdiff:0.1" "$cmd ; git diff" C-m

echo "Attaching to session"
tmux attach-session -t $session
