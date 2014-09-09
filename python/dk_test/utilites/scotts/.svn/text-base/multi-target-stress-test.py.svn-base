#!ipy

# An IronPython (ipy) script to do a little stress test on the DataKeeper multi-target switchover feature.
# To use this you should have IronPython installed (from codeplex) and that's about it.
# This will also allow up to profile the ExtMirrSvc during a long run and check for leaks, etc.
# The basic idea here is to just run through multiple-target mirror switchovers, round-robining who
# the source system is, as fast as we can.
# We're expecting a job with mirrors created.  We also better have the expected volumes, etc. on the test
# systems or the shitoki mushrooms will most certainly fly.

# This should be run from a directory containing the snap-in files (see boot.py).
import sys
sys.path.insert(0, '../lib')    # Adjust this based on where your paths are

from time import sleep
from time import ctime as now
import dkcore as dk
svc = dk.sdrsvc
roles = dk.MirrorRole
states = dk.MirrorState

Servers    = ['pinky4', 'pinky5', 'pinky3']     # assuming pinky4 is the first one on which to do a switchover, pinky3 is current source
Volume     = 'E'
StateWait  = 5.0
Iterations = 0


# We're assuming a start point of pinky3:E mirroring to pinky4 and pinky5
# Let's verify a bit
vi = svc.getVolumeInfo(Servers[2], Volume)
assert (vi.MirrorRole == roles.Source), 'Should be starting with pinky3:E as a Source'
assert (len(vi.TargetList) == 2), 'Should be starting with two targets'
assert (vi.TargetList[0].MirrorState == states.Mirror), 'Target 0 must be mirroring'
assert (vi.TargetList[1].MirrorState == states.Mirror), 'Target 1 must be mirroring'

print(now(), ': stress/load test starting')
while True:
    for server in Servers:
        print('making', server, 'the source...')
        svc.switchoverVolume(server, Volume)
        # Now, wait 'till it becomes a source with two targets mirroring
        while len(svc.getVolumeInfo(server, Volume).TargetList) < 2:
            print('.')
            sleep(StateWait)
        volInfo = svc.getVolumeInfo(server, Volume)
        while not (volInfo.TargetList[0].MirrorState == states.Mirror and volInfo.TargetList[1].MirrorState == states.Mirror):
            print('.')
            sleep(StateWait)
            volInfo = svc.getVolumeInfo(server, Volume)
        print(server, 'is now the source of two mirroring targets')

        Iterations += 1
        print()
        print(now(), ': completed', Iterations, 'iterations')
        print()
        sleep(StateWait)
#

