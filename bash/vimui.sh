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
PWD=~/ui
CD="cd $PWD"
UIPATH=~/Dropbox/shared/backup/vim/ui.vim
PROXY="minion4.sc.steeleye.com"

##
# Startup Commands
##
window0()
{
    local name="vim"
    local win=0
    local vimCmd="$CD ; disable_ctrl_s vim -S $UIPATH"
    local replCmd="crrepl"
    local karmaCmd="$CD ; grunt karma:debug"

    echo "Renaming window 0 and splitting it"
    tmux rename-window -t "${TMUX_SESSION}:${win}" "$name"
    tmux split-window -v -t "${TMUX_SESSION}:${win}.0"
    tmux split-window -h -t "${TMUX_SESSION}:${win}.1"

    # Resize pane to make it smaller
    tmux resize-pane -t "${TMUX_SESSION}:${win}.1" -y 6

    echo "Sending keys to window 0"
    tmux send-keys -t "${TMUX_SESSION}:${win}.0" "$vimCmd" C-m
    tmux send-keys -t "${TMUX_SESSION}:${win}.1" "$CD" C-m
    tmux send-keys -t "${TMUX_SESSION}:${win}.2" "$karmaCmd" C-m
}

window2()
{
    local win=2
    local name="GRUNT-FINCH"
    local finch="finch"
    local devToolsTerm="devtools-terminal --port=9090 --host=localhost"
    local grunt="$CD ; grunt --stack --proxy=${PROXY} server:proxy"
    local tasks="vim -c TW"
    local agenda="agenda"

    echo "Creating window $win"
    tmux new-window -n "$name"

    # Top half
    tmux split-window -v -t "${TMUX_SESSION}:${win}.0"
    tmux split-window -h -t "${TMUX_SESSION}:${win}.0"

    # tasks and empty pane
    tmux split-window -h -t "${TMUX_SESSION}:${win}.1"
    tmux split-window -v -t "${TMUX_SESSION}:${win}.1"

    # Agenda, finch, empty
    tmux split-window -h -t "${TMUX_SESSION}:${win}.3"
    tmux split-window -v -t "${TMUX_SESSION}:${win}.3"

    echo "Sending keys to window $win"
    tmux send-keys -t "${TMUX_SESSION}:${win}.0" "$grunt" C-m
    tmux send-keys -t "${TMUX_SESSION}:${win}.1" "$tasks" C-m
    tmux send-keys -t "${TMUX_SESSION}:${win}.2" "$devToolsTerm" C-m
    tmux send-keys -t "${TMUX_SESSION}:${win}.3" "$finch" C-m
    # ${win}.4 inactive
    tmux send-keys -t "${TMUX_SESSION}:${win}.5" "$agenda" C-m
    # ${win}.6 inactive
}

window1()
{
    local name="GIT"
    local win=1

    echo "Creating window $win"
    tmux new-window -n "$name"
    tmux split-window -h -t "${TMUX_SESSION}:${win}.0"
    tmux split-window -v -t "${TMUX_SESSION}:${win}.0"
    tmux split-window -v -t "${TMUX_SESSION}:${win}.2"

    echo "Sending keys to window 1"
    tmux send-keys -t "${TMUX_SESSION}:${win}.0" "$CD" C-m
    tmux send-keys -t "${TMUX_SESSION}:${win}.1" "$CD" C-m
    tmux send-keys -t "${TMUX_SESSION}:${win}.2" "$CD" C-m
    tmux send-keys -t "${TMUX_SESSION}:${win}.3" "$CD" C-m
}

window3()
{
    local name="HTOP"
    local win=3
    local htopCmd="htop"

    echo "Creating window $win"
    tmux new-window -n "$name"

    echo "Sending keys to window $win"
    tmux send-keys -t "${TMUX_SESSION}:${win}.0" "$htopCmd" C-m
}

window4()
{
    local name="EXTRAS"

    echo "Creating window 4"
    tmux new-window -n "$name"
}

select_window()
{
    echo "Selecting first window"
    tmux select-window -t "${TMUX_SESSION}:0"
}

main()
{
    export TMUX_SESSION="vimui"

    tmux_new_or_attach $TMUX_SESSION $CONFIG
    window0
    window1
    window2
    window3
    window4
    select_window
    tmux_run_attach $TMUX_SESSION
}
main
