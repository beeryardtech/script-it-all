#!/bin/sh
sudo enter-chroot -n trusty cp /home/tgoldie/Dropbox/APG/keepass.kdbx /home/tgoldie/Downloads/keepass.kdbx
sudo enter-chroot -n xt xiwi keepass2
sudo enter-chroot -n trusty cp /home/tgoldie/Downloads/keepass.kdbx /home/tgoldie/Dropbox/APG/keepass.kdbx

