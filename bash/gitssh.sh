#!/bin/sh
ssh -i $HOME/.sshkeys/beeryard_key -F /dev/null -p 22 $*
