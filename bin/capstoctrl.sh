#!/bin/bash -
#===============================================================================
#         USAGE: .caps_to_ctrl.sh
#       CREATED: 09/25/2014
#===============================================================================
##
# @description
# Turns the CAPS lock to CTRL key
##
echo $( date ) " - Setting ctrl to nocaps"
setxkbmap -layout us -option ctrl:nocaps
