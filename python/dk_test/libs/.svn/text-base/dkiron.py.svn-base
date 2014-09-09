#!ipy
#
# Copyright (c) 2009 SteelEye Technology Inc.  All rights reserved.
#
# IronPython (ipy) "boot" module to load SDR assmeblies and import stuff that we'll use a lot.
# This should be used/imported while sitting in the directory that contains the dlls mentioned
# below (the snap-in bin directory usually).
#
# Change   Description                                                           By    Date
# ----------------------------------------------------------------------------------------------
# 0001     bug722: refactor relationship functions into RelationshipUtils       STT  11-16-2009
# 0002     ?       Other changes related to relationship calculations           STT  12-15-2009
# 0004     bug781: Modifications for state update performance                   STT  12-15-2009
#

from System.IO import File
import System.Collections.Generic.List as List
import System.Exception as Exception

# These are imported and aliased one at a time to make it clear
# which types are being imported from the assemblies under test

#Imports from SDRClient
import SDRClient.EmService as EmService
import SDRClient.ClientLibEmService as ClientLibEmService

#Imports from Model.DR
import SteelEye.Model.DataReplication.Job as Job
import SteelEye.Model.DataReplication.JobVolume as JobVolume
import SteelEye.Model.DataReplication.EndpointPair as EndpointPair
import SteelEye.Model.DataReplication.ServiceInfo as ServiceInfo
import SteelEye.Model.DataReplication.VolumeInfo as VolumeInfo
import SteelEye.Model.DataReplication.TargetInfo as TargetInfo
import SteelEye.Model.DataReplication.ResyncStatus as ResyncStatus
import SteelEye.Model.DataReplication.RewindConfig as RewindConfig
import SteelEye.Model.DataReplication.RewindStatus as RewindStatus
import SteelEye.Model.DataReplication.MirrorType as MirrorType
import SteelEye.Model.DataReplication.MirrorState as MirrorState
import SteelEye.Model.DataReplication.MirrorRole as MirrorRole
import SteelEye.Model.DataReplication.TimeRange as TimeRange
import SteelEye.Model.DataReplication.TimeBookmark as TimeBookmark

#Imports from DAO
import SteelEye.DAO.DataReplication.EmServiceFactory as EmServiceFactory
import SteelEye.DAO.Impl.DataReplication.ClientLibEmServiceSingletonFactory as ClientLibEmServiceSingletonFactory
import SteelEye.DAO.Impl.DataReplication.ClientLibEmServicePrototypeFactory as ClientLibEmServicePrototypeFactory
import SteelEye.DAO.DataReplication.MirrorCreateOptions as MirrorCreateOptions
import SteelEye.DAO.DataReplication.SDRService as SDRService
import SteelEye.DAO.Impl.DataReplication.ClientLibrarySDRService as ClientLibrarySDRService
import SteelEye.DAO.Impl.DataReplication.CachingSDRService as CachingSDRService
import SteelEye.DAO.Impl.DataReplication.JobExtractor as JobExtractor
import SteelEye.DAO.DataReplication.Exception.InvalidRewindTimestampException as InvalidRewindTimestampException
import SteelEye.DAO.DataReplication.Exception.RewindFlushPointMatchException as RewindFlushPointMatchException
import SteelEye.DAO.DataReplication.Exception.RewindNotCompletelyEnabledException as RewindNotCompletelyEnabledException
import SteelEye.DAO.DataReplication.Exception.RewindVolumeDirtyException as RewindVolumeDirtyException
import SteelEye.DAO.DataReplication.Exception.ServiceNoLongerAvailableException as ServiceNoLongerAvailableException
import SteelEye.DAO.DataReplication.Exception.ServiceNotFoundException as ServiceNotFoundException
import SteelEye.DAO.DataReplication.Exception.ServiceTooBusyException as ServiceTooBusyException
import SteelEye.DAO.DataReplication.Exception.UnknownRewindFailureException as UnknownRewindFailureException

#Imports from SDR
import SteelEye.DataKeeper.SDR.SDRDataKeeperService as SDRDataKeeperService
import SteelEye.DataKeeper.SDR.Job as DKJob
import SteelEye.DataKeeper.SDR.Mirror as DKMirror
import SteelEye.DataKeeper.SDR.Server as DKServer
import SteelEye.DataKeeper.SDR.Volume as DKVolume

#Imports from various DataKeeper Interfaces and services
import SteelEye.DataKeeper.DataKeeperService as DataKeeperService
import SteelEye.DataKeeper.RelationshipUtils as RelationshipUtils
import SteelEye.DataKeeper.ConnectionPair as ConnectionPair
import SteelEye.DataKeeper.IJob as IJob
import SteelEye.DataKeeper.IMirror as IMirror
import SteelEye.DataKeeper.IServer as IServer
import SteelEye.DataKeeper.IVolume as IVolume
import SteelEye.DataKeeper.MirrorContainerStatus as MirrorContainerStatus
import SteelEye.DataKeeper.NetworkConnection as NetworkConnection
import SteelEye.DataKeeper.ServiceInformation as MirrorContainerStatus

#Imports from various tools and utils
import SteelEye.Util.IPUtils as IPUtils
from log4net import LogManager
from log4net.Config import XmlConfigurator


# Now make a service instance
sdrsvc      = ClientLibrarySDRService(ClientLibEmServiceSingletonFactory())
cachingsvc  = CachingSDRService(sdrsvc, CachingSDRService.NormalCacher);
extractor   = JobExtractor(cachingsvc)
dksvc       = DataKeeperService.Instance

