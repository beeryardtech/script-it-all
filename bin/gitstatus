#!/bin/bash
###############################################################################
# Author: Travis Goldie
# Purpose: Runs git status and diff in vimui tmux session
###############################################################################

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$CURRENT_DIR/helpers.sh"
trap cleanup SIGINT SIGTERM

SESSION="vimui"
PWD=~/ui
CD="cd $PWD"

main()
{
    local gitAdd="git add"
    local gitDiff="$CD ; git diff"
    local gitStatus="$CD ; git status"

    # Respawn panes (-k kills current commands)
    tmux respawn-pane -k -t "$SESSION:2.0"
    tmux respawn-pane -k -t "$SESSION:2.1"
    tmux respawn-pane -k -t "$SESSION:2.2"

    # Send keys
    tmux send-keys -t "$SESSION:2.0" "$gitStatus" C-m
    tmux send-keys -t "$SESSION:2.1" "$gitDiff" C-m
    tmux send-keys -t "$SESSION:2.2" "$CD" C-m
}
main
