#!/bin/bash
###############################################################################
# Name: vimui.sh
# Author: Travis Goldie
# Date: May 2015
# Purpose: Shorthand for opening SIOS UI files in tmux
###############################################################################

. ~/.bash_funcs

session=tmuxui
path=~/ui
cmd="vim -S ~/Dropbox/shared/backup/vimbackup/ui.vim"

# Check if session exists, if not create a new one
if tmux has -t $session ; then
    echo "Attaching to session!"
    sleep 1
    tmux attach -t $session \; new-window $cmd
else
    echo "Starting new session!"
    sleep 1
    tmux new -s $session \; new-window $cmd
fi
#disable_ctrl_s $cmd
