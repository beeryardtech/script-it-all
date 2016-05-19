#!/bin/bash -
###############################################################################
# Author: Travis Goldie
# Purpose: Shorthand for creating home tmux session
###############################################################################

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

## Options
CONFIG=~/.tmux.conf.tmuxhome

## Paths
DIFF_PATH=~/Dropbox/shared/backup/vim/dbdiff.vim
DIFF_PWD=~/Dropbox/repos/beeryardtech/dbdiff.py/
SITE_PATH=~/Dropbox/shared/backup/vim/site.vim
SITE_PWD=~/Dropbox/repos/beeryardtech/beeryardtech.github.io/
VIM_SESSION=~/Dropbox/shared/backup/vim/session.vim
CD="cd $DIFF_PWD"

window0()
{
    local win=0
    local name="DB-DIFF"
    local win=0
    local virtCmd="$CD ; source virt.sh"
    local vimCmd="$virtCmd ; disable_ctrl_s vim -S $DIFF_PATH"

    echo "Creating window $win"
    tmux rename-window -t "${TMUX_SESSION}:${win}" "$name"
    tmux split-window -v -t "${TMUX_SESSION}:${win}.0"
    tmux split-window -h -t "${TMUX_SESSION}:${win}.1"

    # Resize pane to make it smaller
    tmux resize-pane -t "${TMUX_SESSION}:${win}.1" -y 8

    echo "Sending keys to window ${win}"
    tmux send-keys -t "${TMUX_SESSION}:${win}.0" "$vimCmd" C-m
    tmux send-keys -t "${TMUX_SESSION}:${win}.1" "$virtCmd" C-m
    tmux send-keys -t "${TMUX_SESSION}:${win}.2" "$virtCmd" C-m
}

window1()
{
    local win=1
    local name="GIT"

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

window2()
{
    local win=2
    local name="TASKS-FINCH"

    local tasks="vim -c TW"
    local finchCmd="finch"

    echo "Creating window 1"
    tmux new-window -n "$name"
    tmux split-window -h -t "${TMUX_SESSION}:${win}.0"
    tmux split-window -v -t "${TMUX_SESSION}:${win}.1"

    echo "Sending keys to window $win"
    tmux send-keys -t "${TMUX_SESSION}:${win}.0" "$tasks" C-m
    tmux send-keys -t "${TMUX_SESSION}:${win}.1" "$CD" C-m
    tmux send-keys -t "${TMUX_SESSION}:${win}.2" "$finchCmd" C-m
}

window3()
{
    local win=3
    local name="HTOP"
    local htopCmd="htop"

    echo "Creating window $win"
    tmux new-window -n "$name"

    echo "Sending keys to window $win"
    tmux send-keys -t "${TMUX_SESSION}:${win}.0" "$htopCmd" C-m
}

window4()
{
    local win=4
    local name="SITE"

    local vimCmd="disable_ctrl_s vim -S $SITE_PATH"
    local rvmCmd="rvm use ruby-head"

    echo "Creating window $win"
    tmux new-window -n "$name"
    tmux split-window -v -t "${TMUX_SESSION}:${win}.0"
    tmux split-window -h -t "${TMUX_SESSION}:${win}.1"

    # Resize pane to make it smaller
    tmux resize-pane -t "${TMUX_SESSION}:${win}.1" -y 8

    echo "Sending keys to window ${win}"
    tmux send-keys -t "${TMUX_SESSION}:${win}.0" "$vimCmd" C-m
    tmux send-keys -t "${TMUX_SESSION}:${win}.1" "$rvmCmd" C-m
    tmux send-keys -t "${TMUX_SESSION}:${win}.2" "$rvmCmd" C-m
}

select_window()
{

    echo "Selecting first window"
    tmux select-window -t "${TMUX_SESSION}:0"
}

main()
{
    export TMUX_SESSION="tmuxhome"

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
