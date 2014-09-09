#!/usr/bin/python

# A python script to just bounce the extmirrsvc somewhat randomly.  This would be part
# of a stress test perhaps?
import os
from random import Random
from time import sleep
from time import ctime as now

service_name = 'ExtMirrSvc'
rnd = Random()

def stop_svc():
	print now(), 'stopping', service_name, 'service'
	os.system('net stop %s' % service_name)
	print now(), service_name, 'stopped'

def start_svc():
	print now(), 'starting', service_name, 'service'
	os.system('net start %s' % service_name)
	print now(), service_name, 'started'

while True:
	sleep(rnd.randrange(30, 300)) # wait 30 secs up to 5 minutes
	stop_svc()
	sleep(rnd.randrange(5, 60))   # restart after 5 to 60 secs
	start_svc()

