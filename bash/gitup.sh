#!/bin/bash
# get the current git branch first
currentBranch=$( git name-rev --name-only @ )
rebase=""
[[ $1 == '-r' ]] && rebase="--rebase"

git checkout master
[[ $? > 0 ]] && echo "Fail to checkout master" && exit 1

git pull github master
[[ $? > 0 ]] && echo "Fail to pull gitup master" && exit 1

git pull github
# [[ $? > 0 ]] && echo "Fail to pull gitup" && exit 1

git push origin master
[[ $? > 0 ]] && echo "Fail to push to origin" && exit 1

git checkout $currentBranch
[[ $? > 0 ]] && echo "Fail to checkout branch: $currentBranch" && exit 1

git pull $rebase
[[ $? > 0 ]] && echo "Fail to pull" && exit 1

# If Gruntfile is available, run generated tasks
[[ -f Gruntfile.js ]] && grunt generator
