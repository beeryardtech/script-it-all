####
# Name: Performance Test for SQL
# Date: March 20, 2013
# Author: Travis Goldie
# Copyright: 2013 SIOS Technology
####

## Globals
$testname = "IterativeTest"
$iterCount=10

$scriptPath = "c:\sql\script"
$perfMonConfig = "C:\sql\perfmon.config"
$perfResultPath = "C:\sql\$testname.{0}.bin"
$ioSimOutPath = "C:\sql\$testname.{0}.txt"


## SQLIOSim Settings
$ioSimcfg = "c:\sql\iosim.01.cfg"
$ioSimErrLog = "c:\sql\iosim.{0}.xml"
$dbDir="e:\iosimDB"
$durInSec=120
$initSize="50"

$ioSim = "c:\sql\sqliosim.exe -cfg {0} -log {1} -dir {2} -d {3} -size {4}"


## TODO Define USAGE here

## Do Work
for ($count=0; $count -lt $iterMax; $i++)
{
	Start-Perfmon($i)
	Run-SQLIOSim($i)
	Stop-Perfmon()
}


## Functions
function Start-Perfmon([int]$iteration)
{
	write-Host "Starting Perfmon"
	
	resultPath = "$perfResultPath" -f $iteration
	logman create counter perflog -f bin -s1 2 -o "$perfMonOutPath" -cf "$perfMonConfig"
	logman start perflog
}

function Run-SQLIOSim([int]$iteration)
{
	Write-Host "Starting SQLIOSim... {0}" -f Get-Date

	$ioSimErrLog = "$iosimErrLog" -f "$iteration"
	$ioSim = "$iosim" -f $ioSimCfg $ioSimErrLog $dbDir $durInSec $initSize
	$outputPath = $ioSimOutPath -f "$iteration"

	start-process powershell -argument "$ioSim" -RedirectStandardOutput "$outputPath" -Wait

	Write-Host "Done with SQLIOSim... {0}" -f Get-Date
}

function Stop-Perfmon()
{
	Write-Host "Work done, stopping logging..."
	logman stop perflog
	logman delete perflog
}
