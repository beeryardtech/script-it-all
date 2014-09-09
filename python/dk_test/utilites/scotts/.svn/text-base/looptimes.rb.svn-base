#!/usr/bin/env ruby
# Copyright (c) 2009-2010 SteelEye Technology Inc.  All rights reserved.
#
# Simple script to look through a datakeeper UI log (where the state dump is on),
# find the [MirrorUpdater] thread entries, and print the time differences.  This
# effectively shows how long the loop were taking.
#
# Change   Description                                                           By    Date
# ----------------------------------------------------------------------------------------------
# 0000     bug781: created to measure StateUpdater loop times                   STT    12-15-2009
# 0001     Changed to match the new state updater thread name                   STT    02-26-2010

require 'time'

def doit
    prevdate = nil
    while line = gets
        if line =~ /\[StateUpdater\]/
            date = Time.parse(line.split(/ \[/)[0])
            puts(date - prevdate) if prevdate
            prevdate = date
        end
    end
end

doit

