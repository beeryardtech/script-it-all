#!ipy

# An IronPython (ipy) script to do a little stress test on DataKeeper mirroring.
# To use this you should have IronPython installed (from codeplex) and that's about it.
# This will also allow up to profile the ExtMirrSvc during a long run and check for leaks, etc.
# The basic idea here is to create mirrors and bulk copy data to the source volume(s) as fast
# as possible and then do it some more.  The point is to keep the system moving
# data around.

from __future__ import with_statement

# This should be run from a directory containing the snap-in files (see dkcore.py).
import sys
sys.path.insert(0, 'load-scripts/lib')	# Adjust this based on where your paths are

from time import sleep
from time import ctime as now
from struct import pack
from os import remove
import dkcore as dk
log = dk.LogManager.GetLogger('TestHarness')
svc = dk.sdrsvc
roles = dk.MirrorRole
states = dk.MirrorState
types = dk.MirrorType
options = dk.MirrorCreateOptions

Servers    = [['washington', '172.17.109.21'], ['lincoln', '172.17.109.22']]
Volume     = 'D'
StateWait  = 5.0
Iterations = 0

def create_large_file(name):
	with open(name, 'w') as outfile:
		buffer = pack('65536x')     # a 64k chunk
		for i in xrange(6400):
			outfile.write(buffer)
#
# some operations that handle exceptions, log them, and retry - just wrappers
def get_vol_info(svc, server, volume):
	result = None
	while result is None:
		try:
			result = svc.getVolumeInfo(server, volume)
		except Exception, ex:
			log.Error("getVolumeInfo failed" + str(ex))
			sleep(StateWait)
	return result
#

def switchover(svc, server, volume):
	worked = False
	while not worked:
		try:
			svc.switchoverVolume(server, volume)
		except Exception, ex:
			log.Error("switchoverVolume failed" + str(ex))
			sleep(StateWait)
		else:
			worked = True
	return worked
#

log.Info('Test starting')
svc.createMirror(Servers[0][0], Servers[0][1], Servers[1][1], Volume, Volume, types.Async, options.Default)
log.Info('Initial mirror created')

# wait until it's mirroring
while len(svc.getVolumeInfo(Servers[0][0], Volume).TargetList) < 1:
	sleep(StateWait)

volInfo = svc.getVolumeInfo(Servers[0][0], Volume)
while not (volInfo.TargetList[0].MirrorState == states.Mirror):
	sleep(StateWait)
	volInfo = svc.getVolumeInfo(Servers[0][0], Volume)
log.Info('Initial mirror is resynced and in the mirroring state')

# its ok to start other scipts that might cause failures deliberately now...
while True:
	# write 10 big files and wait for resync.
	# then switchover and back
	# rinse, repeat
	for i in xrange(10):
		log.Info('creating large file %d' % (i))
		create_large_file('%s:\\i_am_a_large_file_%d.dat' % (Volume, i))
	volInfo = get_vol_info(svc, Servers[0][0], Volume)
	while not (volInfo.TargetList[0].MirrorState == states.Mirror):
		sleep(StateWait)
		volInfo = get_vol_info(svc, Servers[0][0], Volume)
	log.Info('mirror is in the mirroring state')
	sleep(StateWait)

	switchover(svc, Servers[1][0], Volume)
	volInfo = get_vol_info(svc, Servers[1][0], Volume)
	while not (volInfo.TargetList[0].MirrorState == states.Mirror):
		sleep(StateWait)
		volInfo = get_vol_info(svc, Servers[1][0], Volume)
	log.Info('reversed mirror is in the mirroring state')
	sleep(StateWait)

	switchover(svc, Servers[0][0], Volume)
	volInfo = get_vol_info(svc, Servers[0][0], Volume)
	while not (volInfo.TargetList[0].MirrorState == states.Mirror):
		sleep(StateWait)
		volInfo = get_vol_info(svc, Servers[0][0], Volume)
	log.Info('mirror is in the mirroring state')
	sleep(StateWait)

	for i in xrange(10):
		remove('%s:\\i_am_a_large_file_%d.dat' % (Volume, i))
		log.Info('removed large file %d' % (i))

#

