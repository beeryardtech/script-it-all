#!/bin/sh
RSYNC=rsync -a --delete
# Copy from backup to target
sudo enter-chroot -n trusty $RSYNC /home/tgoldie/Dropbox/janie/brewtarget /home/tgoldie/Downloads/
sudo enter-chroot -n xt $RSYNC /home/tgoldie/Downloads/brewtarget /home/tgoldie/.config/

# Run it
sudo enter-chroot -n xt xiwi brewtarget

# Copy from target back to backup
sudo enter-chroot -n xt $RSYNC /home/tgoldie/.config/brewtarget /home/tgoldie/Downloads/
sudo enter-chroot -n trusty $RSYNC /home/tgoldie/Downloads/brewtarget /home/tgoldie/Dropbox/janie/
