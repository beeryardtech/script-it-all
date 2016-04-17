#!/bin/bash -

echo > /tmp/qikea.log
sudo iked >>/tmp/qikea.log 2>&1 &
qikea >>/tmp/qikea.log 2>&1 &
