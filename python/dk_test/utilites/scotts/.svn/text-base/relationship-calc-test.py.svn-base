#!ipy
#
# Copyright (c) 2009 SteelEye Technology Inc.  All rights reserved.
#
# Simple script to test the job endpoint calculator for SDRS type configuration setups.
# Initial creation: Scott Thoman, SteelEye Technology, Inc., 10-19-2009.
#
# Change   Description                                                           By    Date
# ----------------------------------------------------------------------------------------------
# 0001     bug722: refactor relationship functions into RelationshipUtils       STT  11-16-2009
# 0002     bug752: add tests for relationship removal routines                  STT  11-18-2009
# 0003     bug763: Modified for add/evict node functionality.                   STT  12-02-2009
# 0004     ?       Other changes related to relationship calculations           STT  12-15-2009
#

import sys
sys.path.insert(0, 't:\\misc\\scripts\\lib')
import dkcore
from System.Collections.Generic import List
from System.Collections.Generic import Dictionary
relutils = dkcore.RelationshipUtils

def make_volume(servername, volumepath, svc):
	"Make a fresh volume with a fresh server, etc. all wired up correctly"
	sourceServer = dkcore.DKServer(servername, servername, svc)
	sourceVolume = dkcore.DKVolume(volumepath, volumepath)
	sourceVolume.Server = sourceServer
	sourceServer.Volumes.Add(sourceVolume)
	return sourceVolume

def to_vol_list(l):
	"Convert py style list to a List<IVolume>"
	result = List[dkcore.IVolume]()
	for v in l:
		result.Add(v)
	return result

def to_str_list(l):
	"Convert py style list to a List<string>"
	result = List[str]()
	for v in l:
		result.Add(v)
	return result

# First, lets prep some volumes and servers
Volumes = [make_volume('server%d.testme.org' % (i), 'X', dkcore.dksvc) for i in range(11)]

# Now, the mirror we're pretending to create
mirrorToCreate = dkcore.ConnectionPair(Volumes[0], dkcore.NetworkConnection('192.168.1.0'), Volumes[1], dkcore.NetworkConnection('192.168.1.1'), True)
sourceBuddies = [Volumes[i] for i in range(2, 11, 2)]   # the even ones
targetBuddies = [Volumes[i] for i in range(3, 11, 2)]   # the odd ones

print('source buddies:')
for v in sourceBuddies:
	print(v.Server.Name)
print('target buddies:')
for v in targetBuddies:
	print(v.Server.Name)

# What combined list do we get?
allRelationships = relutils.getAllRequiredRelationships(mirrorToCreate, to_vol_list(sourceBuddies), to_vol_list(targetBuddies))

print('all relationships:')
for r in allRelationships:
	print("%s(%s)" % (r.FirstVolume.Server.Name, r.FirstConnection), ":", "%s(%s)" % (r.SecondVolume.Server.Name, r.SecondConnection))

# Now, let's pretend we've got addresses for all of these servers chosen by a user
serverNameMap = Dictionary[str, dkcore.NetworkConnection]();
for i in range(21):
	serverNameMap['server%d.testme.org' % i] = dkcore.NetworkConnection('192.168.1.%d' % i)

fixedRelationships = relutils.mergeEndpointAddressInformation(allRelationships, serverNameMap, True)

print('fixed relationships:')
for r in fixedRelationships:
	print("%s(%s)" % (r.FirstVolume.Server.Name, r.FirstConnection), ":", "%s(%s)" % (r.SecondVolume.Server.Name, r.SecondConnection))

count = len(fixedRelationships)
print("that's %d of 'em" % count)
assert(count == 54, "should be 54 relationships at this point")

# Now, let's add a node
newVolume = make_volume('server20.testme.org', 'X', dkcore.dksvc)
mirrorToCreate = dkcore.ConnectionPair(newVolume, dkcore.NetworkConnection('0.0.0.0'), Volumes[0], dkcore.NetworkConnection('0.0.0.0'), False, True)
#sourceBuddies = [Volumes[i] for i in range(2, 11, 2)]   # *all* the even ones are this ones buddies
newRelationships = relutils.getAllRequiredRelationships(allRelationships, mirrorToCreate, to_vol_list([Volumes[1]]), to_vol_list([]))	# no targets here since not adding a mirror just a src node
								                                                                                                              # and it builds on the last result set
newFixedRelationships = relutils.mergeEndpointAddressInformation(newRelationships, serverNameMap, True)

print('new fixed relationships:')
for r in newFixedRelationships:
	print("%s(%s)" % (r.FirstVolume.Server.Name, r.FirstConnection), ":", "%s(%s)" % (r.SecondVolume.Server.Name, r.SecondConnection))

count = len(newFixedRelationships)
print("that's %d of 'em" % count)
assert(count == 65, "should be 65 relationships at this point")

# what about the removal routines?
jobVols = List[dkcore.JobVolume]()
endpoints = List[dkcore.EndpointPair]()
endpoint = dkcore.EndpointPair()
endpoint.LeftServerName = 'A.server.org'
endpoint.LeftVolumePath = 'X'
endpoint.LeftAddress = '192.168.1.1'
endpoint.RightServerName = 'B.server.org'
endpoint.RightVolumePath = 'X'
endpoint.RightAddress = '192.168.1.2'
endpoint.SyncType = 'A'
endpoints.Add(endpoint)
jobVols.Add(dkcore.JobVolume(0, endpoints))

srcVol = make_volume('A.server.org', 'X', dkcore.dksvc)
tarVol = make_volume('B.server.org', 'X', dkcore.dksvc)
mirrorToRemove = dkcore.DKMirror(dkcore.dksvc, None, srcVol, dkcore.NetworkConnection('192.168.1.1'), tarVol, dkcore.NetworkConnection('192.168.1.2'))

relsToRemove = relutils.GetAllRelationshipsToRemove(jobVols, mirrorToRemove)
count = relsToRemove.Count
print("should remove %d relationship(s)" % count)
assert(count == 1, 'should only be one relationship to remove for a single mirror configuration')

# now more relationships (multi-target)
endpoints = List[dkcore.EndpointPair]()
endpoint = dkcore.EndpointPair()
endpoint.LeftServerName = 'A.server.org'
endpoint.LeftVolumePath = 'X'
endpoint.LeftAddress = '192.168.1.1'
endpoint.RightServerName = 'C.server.org'
endpoint.RightVolumePath = 'X'
endpoint.RightAddress = '192.168.1.3'
endpoint.SyncType = 'A'
endpoints.Add(endpoint)
jobVols.Add(dkcore.JobVolume(0, endpoints))

endpoints = List[dkcore.EndpointPair]()
endpoint = dkcore.EndpointPair()
endpoint.LeftServerName = 'B.server.org'
endpoint.LeftVolumePath = 'X'
endpoint.LeftAddress = '192.168.1.2'
endpoint.RightServerName = 'C.server.org'
endpoint.RightVolumePath = 'X'
endpoint.RightAddress = '192.168.1.3'
endpoint.SyncType = 'A'
endpoints.Add(endpoint)
jobVols.Add(dkcore.JobVolume(0, endpoints))

relsToRemove = relutils.GetAllRelationshipsToRemove(jobVols, mirrorToRemove)
count = relsToRemove.Count
print("should remove %d relationship(s)" % count)
assert(count == 2, 'should be two relationships to remove for a two-target mirror configuration')

# Now the shared-shared case where we're removing a relationship

jobVols = List[dkcore.JobVolume]()
endpoints = List[dkcore.EndpointPair]()
endpoint = dkcore.EndpointPair()
endpoint.LeftServerName = 'A.server.org'
endpoint.LeftVolumePath = 'X'
endpoint.LeftAddress = '0.0.0.0'
endpoint.RightServerName = 'B.server.org'
endpoint.RightVolumePath = 'X'
endpoint.RightAddress = '0.0.0.0'
endpoint.SyncType = 'D'
endpoints.Add(endpoint)
jobVols.Add(dkcore.JobVolume(0, endpoints))

endpoints = List[dkcore.EndpointPair]()
endpoint = dkcore.EndpointPair()
endpoint.LeftServerName = 'C.server.org'
endpoint.LeftVolumePath = 'X'
endpoint.LeftAddress = '0.0.0.0'
endpoint.RightServerName = 'D.server.org'
endpoint.RightVolumePath = 'X'
endpoint.RightAddress = '0.0.0.0'
endpoint.SyncType = 'D'
endpoints.Add(endpoint)
jobVols.Add(dkcore.JobVolume(0, endpoints))

endpoints = List[dkcore.EndpointPair]()
endpoint = dkcore.EndpointPair()
endpoint.LeftServerName = 'A.server.org'
endpoint.LeftVolumePath = 'X'
endpoint.LeftAddress = '192.168.1.1'
endpoint.RightServerName = 'C.server.org'
endpoint.RightVolumePath = 'X'
endpoint.RightAddress = '192.168.1.3'
endpoint.SyncType = 'A'
endpoints.Add(endpoint)
jobVols.Add(dkcore.JobVolume(0, endpoints))

endpoints = List[dkcore.EndpointPair]()
endpoint = dkcore.EndpointPair()
endpoint.LeftServerName = 'A.server.org'
endpoint.LeftVolumePath = 'X'
endpoint.LeftAddress = '192.168.1.1'
endpoint.RightServerName = 'D.server.org'
endpoint.RightVolumePath = 'X'
endpoint.RightAddress = '192.168.1.4'
endpoint.SyncType = 'A'
endpoints.Add(endpoint)
jobVols.Add(dkcore.JobVolume(0, endpoints))

endpoints = List[dkcore.EndpointPair]()
endpoint = dkcore.EndpointPair()
endpoint.LeftServerName = 'B.server.org'
endpoint.LeftVolumePath = 'X'
endpoint.LeftAddress = '192.168.1.2'
endpoint.RightServerName = 'C.server.org'
endpoint.RightVolumePath = 'X'
endpoint.RightAddress = '192.168.1.3'
endpoint.SyncType = 'A'
endpoints.Add(endpoint)
jobVols.Add(dkcore.JobVolume(0, endpoints))

endpoints = List[dkcore.EndpointPair]()
endpoint = dkcore.EndpointPair()
endpoint.LeftServerName = 'B.server.org'
endpoint.LeftVolumePath = 'X'
endpoint.LeftAddress = '192.168.1.2'
endpoint.RightServerName = 'D.server.org'
endpoint.RightVolumePath = 'X'
endpoint.RightAddress = '192.168.1.4'
endpoint.SyncType = 'A'
endpoints.Add(endpoint)
jobVols.Add(dkcore.JobVolume(0, endpoints))

srcVol = make_volume('A.server.org', 'X', dkcore.dksvc)
tarVol = make_volume('C.server.org', 'X', dkcore.dksvc)
mirrorToRemove = dkcore.DKMirror(dkcore.dksvc, None, srcVol, dkcore.NetworkConnection('192.168.1.1'), tarVol, dkcore.NetworkConnection('192.168.1.3'))

relsToRemove = relutils.GetAllRelationshipsToRemove(jobVols, mirrorToRemove)
count = relsToRemove.Count
print("should remove %d relationship(s)" % count)
#for rel in relsToRemove: print "rel to remove:", str(rel)
assert(count == 6, 'should be five relationships to remove for a single-target, 2x2 shared-shared mirror configuration (all the mirrorable rels plus the shared targets rel) and the final shared relationship too')


# Now the 2shared-2shared-1 case where we're adding the final mirror target
# first, lets prep some volumes and servers
Volumes = [make_volume('server%d.testme.org' % (i), 'X', dkcore.dksvc) for i in range(6)]   # we won't use the zeroth entry but the
                                                                                            # code below is easier if 1-indexed
# then, the existing job relationships
existingRels = List[dkcore.ConnectionPair]()
existingRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('0.0.0.0'), Volumes[2], dkcore.NetworkConnection('0.0.0.0'), False, True))
existingRels.Add(dkcore.ConnectionPair(Volumes[3], dkcore.NetworkConnection('0.0.0.0'), Volumes[4], dkcore.NetworkConnection('0.0.0.0'), False, True))
existingRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('192.168.1.1'), Volumes[3], dkcore.NetworkConnection('192.168.1.3'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('192.168.1.1'), Volumes[4], dkcore.NetworkConnection('192.168.1.4'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[2], dkcore.NetworkConnection('192.168.1.2'), Volumes[3], dkcore.NetworkConnection('192.168.1.3'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[2], dkcore.NetworkConnection('192.168.1.2'), Volumes[4], dkcore.NetworkConnection('192.168.1.4'), True, False))

# Now, the mirror we're pretending to create
mirrorToCreate = dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('192.168.1.1'), Volumes[5], dkcore.NetworkConnection('192.168.1.5'), True)

# What combined list do we get?
neededRelationships = relutils.GetPotentialMirrorPairs(existingRels, mirrorToCreate, List[dkcore.ConnectionPair](), False)
count = neededRelationships.Count;
print("should need %d relationship(s)" % count)
assert(count == 3, 'should be three relationships left that we will need to completely add the third leg of a 2x2x1 configuration')


# And now the 3shared-3shared-1 case where we're adding the final mirror target
# first, lets prep some volumes and servers
Volumes = [make_volume('server%d.testme.org' % (i), 'X', dkcore.dksvc) for i in range(8)]   # we won't use the zeroth entry but the
                                                                                            # code below is easier if 1-indexed
# then, the existing job relationships
existingRels = List[dkcore.ConnectionPair]()
existingRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('0.0.0.0'), Volumes[2], dkcore.NetworkConnection('0.0.0.0'), False, True))
existingRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('0.0.0.0'), Volumes[3], dkcore.NetworkConnection('0.0.0.0'), False, True))
existingRels.Add(dkcore.ConnectionPair(Volumes[2], dkcore.NetworkConnection('0.0.0.0'), Volumes[3], dkcore.NetworkConnection('0.0.0.0'), False, True))
existingRels.Add(dkcore.ConnectionPair(Volumes[4], dkcore.NetworkConnection('0.0.0.0'), Volumes[5], dkcore.NetworkConnection('0.0.0.0'), False, True))
existingRels.Add(dkcore.ConnectionPair(Volumes[4], dkcore.NetworkConnection('0.0.0.0'), Volumes[6], dkcore.NetworkConnection('0.0.0.0'), False, True))
existingRels.Add(dkcore.ConnectionPair(Volumes[5], dkcore.NetworkConnection('0.0.0.0'), Volumes[6], dkcore.NetworkConnection('0.0.0.0'), False, True))
existingRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('192.168.1.1'), Volumes[4], dkcore.NetworkConnection('192.168.1.4'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('192.168.1.1'), Volumes[5], dkcore.NetworkConnection('192.168.1.5'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('192.168.1.1'), Volumes[6], dkcore.NetworkConnection('192.168.1.6'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[2], dkcore.NetworkConnection('192.168.1.2'), Volumes[4], dkcore.NetworkConnection('192.168.1.4'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[2], dkcore.NetworkConnection('192.168.1.2'), Volumes[5], dkcore.NetworkConnection('192.168.1.5'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[2], dkcore.NetworkConnection('192.168.1.2'), Volumes[6], dkcore.NetworkConnection('192.168.1.6'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[3], dkcore.NetworkConnection('192.168.1.3'), Volumes[4], dkcore.NetworkConnection('192.168.1.4'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[3], dkcore.NetworkConnection('192.168.1.3'), Volumes[5], dkcore.NetworkConnection('192.168.1.5'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[3], dkcore.NetworkConnection('192.168.1.3'), Volumes[6], dkcore.NetworkConnection('192.168.1.6'), True, False))

# Now, the mirror we're pretending to create
mirrorToCreate = dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('192.168.1.1'), Volumes[7], dkcore.NetworkConnection('192.168.1.7'), True)

# What combined list do we get?
neededRelationships = relutils.GetPotentialMirrorPairs(existingRels, mirrorToCreate, List[dkcore.ConnectionPair](), False)
count = neededRelationships.Count;
print("should need %d relationship(s)" % count)

for rel in neededRelationships:
	print("will need info for", rel)
	print

assert(count == 5, 'should be five relationships left that we will need to completely add the third leg of a 3x3x1 configuration')


# And now the 3shared-3shared-2 case where we're adding the final mirror target and its shared buddie
# first, lets prep some volumes and servers
Volumes = [make_volume('server%d.testme.org' % (i), 'X', dkcore.dksvc) for i in range(9)]   # we won't use the zeroth entry but the
                                                                                            # code below is easier if 1-indexed
# then, the existing job relationships
existingRels = List[dkcore.ConnectionPair]()
existingRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('0.0.0.0'), Volumes[2], dkcore.NetworkConnection('0.0.0.0'), False, True))
existingRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('0.0.0.0'), Volumes[3], dkcore.NetworkConnection('0.0.0.0'), False, True))
existingRels.Add(dkcore.ConnectionPair(Volumes[2], dkcore.NetworkConnection('0.0.0.0'), Volumes[3], dkcore.NetworkConnection('0.0.0.0'), False, True))
existingRels.Add(dkcore.ConnectionPair(Volumes[4], dkcore.NetworkConnection('0.0.0.0'), Volumes[5], dkcore.NetworkConnection('0.0.0.0'), False, True))
existingRels.Add(dkcore.ConnectionPair(Volumes[4], dkcore.NetworkConnection('0.0.0.0'), Volumes[6], dkcore.NetworkConnection('0.0.0.0'), False, True))
existingRels.Add(dkcore.ConnectionPair(Volumes[5], dkcore.NetworkConnection('0.0.0.0'), Volumes[6], dkcore.NetworkConnection('0.0.0.0'), False, True))
existingRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('192.168.1.1'), Volumes[4], dkcore.NetworkConnection('192.168.1.4'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('192.168.1.1'), Volumes[5], dkcore.NetworkConnection('192.168.1.5'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('192.168.1.1'), Volumes[6], dkcore.NetworkConnection('192.168.1.6'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[2], dkcore.NetworkConnection('192.168.1.2'), Volumes[4], dkcore.NetworkConnection('192.168.1.4'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[2], dkcore.NetworkConnection('192.168.1.2'), Volumes[5], dkcore.NetworkConnection('192.168.1.5'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[2], dkcore.NetworkConnection('192.168.1.2'), Volumes[6], dkcore.NetworkConnection('192.168.1.6'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[3], dkcore.NetworkConnection('192.168.1.3'), Volumes[4], dkcore.NetworkConnection('192.168.1.4'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[3], dkcore.NetworkConnection('192.168.1.3'), Volumes[5], dkcore.NetworkConnection('192.168.1.5'), True, False))
existingRels.Add(dkcore.ConnectionPair(Volumes[3], dkcore.NetworkConnection('192.168.1.3'), Volumes[6], dkcore.NetworkConnection('192.168.1.6'), True, False))

# Now, the mirror we're pretending to create
mirrorToCreate = dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('192.168.1.1'), Volumes[7], dkcore.NetworkConnection('192.168.1.7'), True)

# The pre-populated list of relationships already determined by the UI and the GetAllRequiredRelationships(...) call.
currentRels = List[dkcore.ConnectionPair]()
currentRels.Add(dkcore.ConnectionPair(Volumes[7], dkcore.NetworkConnection('0.0.0.0'), Volumes[8], dkcore.NetworkConnection('0.0.0.0'), False, True))
#currentRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('192.168.1.1'), Volumes[7], dkcore.NetworkConnection('192.168.1.7'), True, False))
currentRels.Add(dkcore.ConnectionPair(Volumes[1], dkcore.NetworkConnection('192.168.1.1'), Volumes[8], dkcore.NetworkConnection('192.168.1.8'), True, False))
currentRels.Add(dkcore.ConnectionPair(Volumes[2], dkcore.NetworkConnection('192.168.1.2'), Volumes[7], dkcore.NetworkConnection('192.168.1.7'), True, False))
currentRels.Add(dkcore.ConnectionPair(Volumes[2], dkcore.NetworkConnection('192.168.1.2'), Volumes[8], dkcore.NetworkConnection('192.168.1.8'), True, False))
currentRels.Add(dkcore.ConnectionPair(Volumes[3], dkcore.NetworkConnection('192.168.1.3'), Volumes[7], dkcore.NetworkConnection('192.168.1.7'), True, False))
currentRels.Add(dkcore.ConnectionPair(Volumes[3], dkcore.NetworkConnection('192.168.1.3'), Volumes[8], dkcore.NetworkConnection('192.168.1.8'), True, False))

# What combined list do we get?
neededRelationships = relutils.GetPotentialMirrorPairs(existingRels, mirrorToCreate, currentRels, False)
count = neededRelationships.Count;
print("should need %d relationship(s)" % count)

assert(count == 3, 'should be three relationships left that we will need to completely add the third leg of a 3x3x2 configuration with pre-populated rels - with flag == false')

neededRelationships = relutils.GetPotentialMirrorPairs(existingRels, mirrorToCreate, currentRels, True)
count = neededRelationships.Count;
print("should need %d relationship(s)" % count)

for rel in neededRelationships:
	print("will need info for", rel)
	print

assert(count == 6, 'should be six relationships left that we will need to completely add the third leg of a 3x3x2 configuration with pre-populated rels - with flag == true')


print('done.')

