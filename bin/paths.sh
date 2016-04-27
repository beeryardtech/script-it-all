#!/bin/bash

B=~/Dropbox/repos/beeryardtech/scripts/bash

list=(
autoi.sh
getdbus.sh
gitssh.sh
gitstatus.sh
gitup.sh
kpcli.sh
helpers.sh
mountenc.sh
net_speed.sh
notifysend.sh
rdpst.sh
shrew.sh
sshst.sh
tasknotify.sh
toggle_panels.sh
tmux_completion.sh
tmuxhome.sh
vimscp.sh
vimui.sh
)

for x in ${list[@]} ; do
    echo -e "#!/bin/bash\n$B/$x" > ${x/.sh/ }
    chmod u+x ${x/.sh/ }
done
