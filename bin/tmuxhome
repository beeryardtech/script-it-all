#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Purpose: Shorthand for creating home tmux session
###############################################################################

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

# Options
CONFIG=~/.tmux.conf.tmuxhome
SESSION=tmuxhome

window0()
{
    local session=$1
    local name="vim"
    local vimCmd="disable_ctrl_s vim"

    echo "Sending keys to window 0"

    tmux rename-window -t "$session:0" "$name"
    tmux send-keys -t "$session:0.0" "$vimCmd" C-m
}

window1()
{

    local session=$1
    local name="GMAIL"
    local muttCmd="mutt -F ~/.muttrc.tgoldie"

    echo "Creating window 1"
    tmux new-window -n "$name"

    echo "Sending keys to window 1"
    tmux send-keys -t "$session:1.0" "$muttCmd" C-m
}

window2()
{

    local session=$1
    local name="STEELEYE"
    local muttCmd="mutt -F ~/.muttrc.steeleye"

    echo "Creating window 2"
    tmux new-window -n "$name"

    echo "Sending keys to window 2"
    tmux send-keys -t "$session:2.0" "$muttCmd" C-m
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
    select_window $SESSION
    tmux_run_attach $SESSION
}
main
