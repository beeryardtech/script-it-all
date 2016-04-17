#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Purpose: Creates the development environment for UI project
###############################################################################

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

# Options
CONFIG=~/.tmux.conf.vimui
SESSION=vimui
PWD=~/ui
CD="cd $PWD"
UIPATH=~/Dropbox/shared/backup/vim/ui.vim
PROXY="minion4.sc.steeleye.com"

##
# Startup Commands
##
window0()
{
    local session=$1
    local name="vim"
    local win=0
    local vimCmd="$CD ; disable_ctrl_s vim -S $UIPATH"
    local replCmd="crrepl"
    local karmaCmd="$CD ; grunt karma:debug"

    echo "Renaming window 0 and splitting it"
    tmux rename-window -t "$session:${win}" "$name"
    tmux split-window -v -t "$session:${win}.0"
    tmux split-window -h -t "$session:${win}.1"

    # Resize pane to make it smaller
    tmux resize-pane -t "$session:${win}.1" -y 6

    echo "Sending keys to window 0"
    tmux send-keys -t "$session:${win}.0" "$vimCmd" C-m
    tmux send-keys -t "$session:${win}.1" "$CD" C-m
    tmux send-keys -t "$session:${win}.2" "$karmaCmd" C-m
}

window1()
{
    local session=$1
    local win=1
    local name="grunt-finch"
    local finch="finch"
    local grunt="$CD ; grunt --stack --proxy=${PROXY} server:proxy"
    local tasks="vim -c TW"

    echo "Creating window $win"
    tmux new-window -n "$name"

    tmux split-window -v -t "$session:${win}.0"
    tmux split-window -h -t "$session:${win}.1"
    tmux split-window -v -t "$session:${win}.1"

    echo "Sending keys to window $win"
    tmux send-keys -t "$session:${win}.0" "$grunt" C-m
    tmux send-keys -t "$session:${win}.1" "$tasks" C-m
    tmux send-keys -t "$session:${win}.2" "$finch" C-m
}

window2()
{
    local session=$1
    local name="git"
    local win=2

    echo "Creating window $win"
    tmux new-window -n "$name"
    tmux split-window -h -t "$session:${win}.0"
    tmux split-window -v -t "$session:${win}.0"
    tmux split-window -v -t "$session:${win}.2"

    echo "Sending keys to window 1"
    tmux send-keys -t "$session:${win}.0" "$CD" C-m
    tmux send-keys -t "$session:${win}.1" "$CD" C-m
    tmux send-keys -t "$session:${win}.2" "$CD" C-m
    tmux send-keys -t "$session:${win}.3" "$CD" C-m
}

window3()
{
    local session=$1
    local name="htop"
    local htop="htop"

    echo "Creating window 3"
    tmux new-window -n "$name"

    echo "Sending keys to window 3"
    tmux send-keys -t "$session:3.0" "$htop" C-m
}

window4()
{
    local session=$1
    local name="extras"

    echo "Creating window 4"
    tmux new-window -n "$name"
}

select_window()
{
    local session=$1

    echo "Selecting first window"
    tmux select-window -t "$session:0"
}

main()
{
    tmux_new_or_attach $SESSION $CONFIG
    window0 $SESSION
    window1 $SESSION
    window2 $SESSION
    window3 $SESSION
    window4 $SESSION
    select_window $SESSION
    tmux_run_attach $SESSION
}
main
