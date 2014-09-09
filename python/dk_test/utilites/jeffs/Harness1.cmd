@echo off
REM Set days to run each test
SET DAYStoRUN=1

REM Set email parameters, multiple emails comma separated with same domain (@us.sios.com)
SET eMailFROM=siostechshare@steeleye.com
SET eMailTO=jeff.yates@us.sios.com
SET subj1=-s "DK Automation Results - Switchovers"
SET subj2=-s "DK Automation Results - Write\Checksum"
SET subj3=-s "DK Automation Results - Write\Crash\Checksum"
SET subj4=-s "DK Automation Results - ERROR"
SET subj5=-s "DK Automation Results - COMPLETED"
SET subj6=-s "DK Automation Started"
SET subj7=-s "DK Automation Results - IOMeter"
SET server=-server maileast.sc.steeleye.com
SET SwitchoverLog=C:\FCIV\Log_switchover.txt
SET WriteChecksumLog=C:\FCIV\Log_write.txt
SET CrashChecksumLog=C:\FCIV\Log_crash.txt
SET SUCCESS="All tests completed. See previous emails for checksum verifications. Press any key in the command window on LEX1 to initiate the DataKeeper uninstall and automation server reset process."
SET FAIL="Uh-oh, it appears there is an error - check automation servers. ***WHEN FINISHED, YOU MUST DELETE THE FLAG 'INPROGRESS.XYZ' IN C:\DK_BUILDS, DELETE DK JOB, UNINSTALL DK ON LEX1 AND LEX2 AND REBOOT WHEN FINISHED***."
SET INITIATE="The DK Automated test has started."
SET IOMeterLog=C:\FCIV\Log_iometer.txt


REM Set test flags
REM For each test you add, add a SET <VARIABLE>=0 entry. 
SET SWITCHOVERTEST=0
SET WRITETEST=0
SET CRASHTEST=0
SET IOMETERTEST=0

REM Set Nodes
set NODE1=LEX1
set NODE2=LEX2

echo Clearing Application and System logs on all nodes...
wevtutil.exe cl Application /r:%NODE1%
wevtutil.exe cl System /r:%NODE1%
wevtutil.exe cl Application /r:%NODE2%
wevtutil.exe cl System /r:%NODE2%

REM Set volumes
set VOL1=E
set VOL2=F

REM Set counters
set /a SWITCHCOUNT=0
set /a WRITELOOP=0
set /a CRASHLOOP=0
set /a TOTALATTEMPTS=60
set /a ATTEMPT=1
set /a ATTEMPT1=1
set /a TERMINATE=0

REM Set delays
set DELAY2=10
set DELAY3=20
set DELAY4=30
set DELAY5=330

REM Set miscellaneous
set MIRRORSTATE1="E: 1 LEX2 172.17.103.134 1"
set SOURCEPAUSE1="E: 1 LEX2 172.17.103.134 4"
set MIRRORSTATE2="F: 1 LEX2 172.17.103.134 1"
set SOURCEPAUSE2="F: 1 LEX2 172.17.103.134 4"
set CRASHSCRIPT="Crash2008x64_once.vbs"


REM Email that the script has started
C:\BLAT\blat -body %INITIATE% -to %eMailTO% -f %eMailFROM% %subj6% %server%


REM Delete all pre-existing checksum files
DEL /Q /F C:\FCIV\ChecksumFiles\*.txt


:TestDateSet
REM This code block gets the date (today) and extracts the Date(DD) within mm\DD\yyyy
REM It also sets the month to be used in the 'EndofMonth' code block.
SET Today=%Date: =%
SET Month=%Today:~-10,2%
SET DayDate=%Today:~-7,2%
echo The start date of this test is: %DayDate%

:AdjustDate
REM If the date(DD) has a leading "0", we strip the leading "0" from the string
REM so we don't have calculation errors.
If %DayDate:~0,1%==0 set DayDate=%DayDate:~-1%

:EndofMonth
REM This creates the end date for a test and how many days to run the test. 
REM Here we check for the maximum days in the month and calculate a new test
REM end day date(DD), adjust for monthly rollover, and make it a 2 digit string.
SET /a endDay=%DayDate% + %DAYStoRUN%
If %Month%==01 set /a MaxDays=31
If %Month%==02 set /a MaxDays=28
If %Month%==03 set /a MaxDays=31
If %Month%==04 set /a MaxDays=30
If %Month%==05 set /a MaxDays=31
If %Month%==06 set /a MaxDays=30
If %Month%==07 set /a MaxDays=31
If %Month%==08 set /a MaxDays=31
If %Month%==09 set /a MaxDays=30
If %Month%==10 set /a MaxDays=31
If %Month%==11 set /a MaxDays=30
If %Month%==12 set /a MaxDays=31
If %endDay% GTR %MaxDays% set /a endDay=%endDay% - %MaxDays%
If %endDay%==1 set endDay=01
If %endDay%==2 set endDay=02
If %endDay%==3 set endDay=03
If %endDay%==4 set endDay=04
If %endDay%==5 set endDay=05
If %endDay%==6 set endDay=06
If %endDay%==7 set endDay=07
If %endDay%==8 set endDay=08
If %endDay%==9 set endDay=09
echo The end date of this test is: %endDay%

REM In the code blocks for the tests, we set a flag so when we loop back 
REM through the code, we don't duplicate test block. Flags are cleared
REM in the testing code blocks.
If %SWITCHOVERTEST%==1 goto WRITEBLOCK
If %WRITETEST%==1 goto CRASHBLOCK
If %CRASHTEST%==1 goto IOMETERBLOCK
if %IOMETERTEST%==1 goto end



:SWITCHOVERBLOCK
echo Switchover test running...
Call C:\AllTests\2VolSwitchover.cmd

REM Check to see if the test script incremented 'terminate', if so exit.
If %TERMINATE%==1 goto Fail

REM This is the check to see if we loop or continue to next test.
SET Today=%Date: =%
SET DayDate=%Today:~-7,2%
If not %dayDate%==%endDay% goto SWITCHOVERBLOCK

echo ***************************************** >> C:\FCIV\Log_switchover.txt
echo ***************************************** >> C:\FCIV\Log_switchover.txt
date /t >> C:\FCIV\Log_switchover.txt
time /t >> C:\FCIV\Log_switchover.txt
echo The switchover test recorded %SWITCHCOUNT% switchovers. >> C:\FCIV\Log_switchover.txt
echo ***************************************** >> C:\FCIV\Log_switchover.txt
echo ***************************************** >> C:\FCIV\Log_switchover.txt

REM Email results and clear log
C:\BLAT\blat %SwitchoverLog% -to %eMailTO% -f %eMailFROM% %subj1% %server%
TYPE NUL > C:\FCIV\Log_switchover.txt


REM The test duration has reached its limit so we set this numerical flag to 
REM prevent this code block from running again.
set /a SWITCHOVERTEST=%SWITCHOVERTEST% + 1
goto TESTDATESET



:WRITEBLOCK
REM We need to clear the previous test flag so that code block doesn't run again.
set /a SWITCHOVERTEST=0
echo Write test running...
Call C:\AllTests\WritePauseChecksum.cmd

REM This is the check to see if we loop or continue to next test.
SET Today=%Date: =%
SET DayDate=%Today:~-7,2%
If not %dayDate%==%endDay% goto WRITEBLOCK

REM We need to clear file specific data before comparison.
cscript C:\FCIV\replace.vbs "C:\FCIV\ChecksumFiles\LEX1-Vol_E.txt" "\\lex1" ""
cscript C:\FCIV\replace.vbs "C:\FCIV\ChecksumFiles\LEX1-Vol_F.txt" "\\lex1" ""
cscript C:\FCIV\replace.vbs "C:\FCIV\ChecksumFiles\LEX2-Vol_E.txt" "\\lex2" ""
cscript C:\FCIV\replace.vbs "C:\FCIV\ChecksumFiles\LEX2-Vol_F.txt" "\\lex2" ""

REM Compare the files and output to log
echo ***************************************** >> C:\FCIV\Log_write.txt
echo ***************************************** >> C:\FCIV\Log_write.txt
date /t >> C:\FCIV\Log_write.txt
time /t >> C:\FCIV\Log_write.txt
echo The write test recorded %WRITELOOP% file writes and checksums.>> C:\FCIV\Log_write.txt
echo ----------------------------------------- >> C:\FCIV\Log_write.txt
FC /C /L /N C:\FCIV\ChecksumFiles\LEX1-Vol_E.txt C:\FCIV\ChecksumFiles\LEX2-Vol_E.txt >> C:\FCIV\Log_write.txt
FC /C /L /N C:\FCIV\ChecksumFiles\LEX1-Vol_F.txt C:\FCIV\ChecksumFiles\LEX2-Vol_F.txt >> C:\FCIV\Log_write.txt
echo ***************************************** >> C:\FCIV\Log_write.txt
echo ***************************************** >> C:\FCIV\Log_write.txt

REM Email results and clear log
C:\BLAT\blat %WriteChecksumLog% -to %eMailTO% -f %eMailFROM% %subj2% %server%
TYPE NUL > C:\FCIV\Log_write.txt

REM The test duration has reached its limit so we set this numerical flag to 
REM prevent this code block from running again.
set /a WRITETEST=%WRITETEST% + 1
goto TESTDATESET



:CRASHBLOCK
REM We need to clear the previous test flag so that code block doesn't run again.
set /a WRITETEST=0
set /a ATTEMPT=1
echo Crash test running...
REM *****CODE STARTS HERE*****


REM We have to switchover the mirror so the source is on correct node to write data
:switch1
echo Checking if Volume %VOL1% is Target...
"%ExtMirrBase%\emcmd" . getvolumeinfo %VOL1% 1 | findstr TARGET
If %ERRORLEVEL%==0 goto switch2
echo Switching over Volume %VOL1%
"%ExtMirrBase%\emcmd" %NODE2% switchovervolume %VOL1%

:switch2
echo Checking if Volume %VOL2% is Target...
"%ExtMirrBase%\emcmd" . getvolumeinfo %VOL2% 1 | findstr TARGET
If %ERRORLEVEL%==0 goto startnow
echo Switching over Volume %VOL2%
"%ExtMirrBase%\emcmd" %NODE2% switchovervolume %VOL2%

timeout /t %DELAY4% /nobreak
goto switch1

:startnow

REM When crashing the source, sometimes you can get into a split state
REM where the source may be paused and the target is mirroring.
REM Here we check the state and if paused, we continue the mirror before
REM crashing the source node.
echo:

:Checkstate1
REM Check if we're in the mirroring state on VOL1
echo Checking Mirror State VOLUME %VOL1%...Attempt #%ATTEMPT%
"%ExtMirrBase%\emcmd" %NODE2% getmirrorvolinfo E |FindStr /C:%MIRRORSTATE1%
If %ERRORLEVEL%==0 goto Checkstate2

REM Check if we're in a paused (or split state)
REM Sometimes after a crash the source is paused while target is mirroring.
echo Checking Pause State VOLUME %VOL1%...Attempt #%ATTEMPT%
"%ExtMirrBase%\emcmd" %NODE2% getmirrorvolinfo E |FindStr /C:%SOURCEPAUSE1%
If %ERRORLEVEL%==0 goto ContinueAgain1

timeout /t %DELAY3% /nobreak
if not %ErrorLevel%==0 goto end

set /a ATTEMPT=%ATTEMPT%+1
If %ATTEMPT%==30 goto checkstatefail
echo **********************

:Checkstate2
REM Check if we're in the mirroring state on VOL2
echo Checking Mirror State VOLUME %VOL2%...Attempt #%ATTEMPT1%
"%ExtMirrBase%\emcmd" %NODE2% getmirrorvolinfo F |FindStr /C:%MIRRORSTATE2%
If %ERRORLEVEL%==0 goto BeginCrash

REM Check if we're in a paused (or split state)
REM Sometimes after a crash the source is paused while target is mirroring.
echo Checking Pause State VOLUME %VOL2%...Attempt #%ATTEMPT1%
"%ExtMirrBase%\emcmd" %NODE2% getmirrorvolinfo F |FindStr /C:%SOURCEPAUSE2%
If %ERRORLEVEL%==0 goto ContinueAgain2

timeout /t %DELAY3% /nobreak
if not %ErrorLevel%==0 goto end

set /a ATTEMPT1=%ATTEMPT1%+1
If %ATTEMPT%==30 goto checkstatefail
echo **********************
goto Checkstate1

:ContinueAgain1
REM on the 1st mirror state check in the code, if source says paused
REM try to continue mirror and return mirror check
echo ******************************
echo Source showed mirror state as paused,
echo attemting to continue mirror...
"%ExtMirrBase%\emcmd" . LOCKVOLUME %VOL1%
"%ExtMirrBase%\emcmd" %NODE2% CONTINUEMIRROR %VOL1%
echo ******************************
goto startnow

:ContinueAgain2
REM on the 1st mirror state check in the code, if source says paused
REM try to continue mirror and return mirror check
echo ******************************
echo Source showed mirror state as paused,
echo attemting to continue mirror...
"%ExtMirrBase%\emcmd" . LOCKVOLUME %VOL2%
"%ExtMirrBase%\emcmd" %NODE2% CONTINUEMIRROR %VOL2%
echo ******************************
goto startnow


:BeginCrash

set /a ATTEMPT=0
Call C:\CrashWriteChecksum\Start.cmd

set /a CRASHLOOP=%CRASHLOOP%+1
 
REM *****CODE FINISHES HERE*****

REM This is the check to see if we loop or continue to next test.
SET Today=%Date: =%
SET DayDate=%Today:~-7,2%
If not %dayDate%==%endDay% goto CRASHBLOCK

REM We need to clear file specific data before comparison.
cscript C:\FCIV\replace.vbs "C:\FCIV\ChecksumFiles\LEX1-WriteCrash_E.txt" "\\lex1" ""
cscript C:\FCIV\replace.vbs "C:\FCIV\ChecksumFiles\LEX1-WriteCrash_F.txt" "\\lex1" ""
cscript C:\FCIV\replace.vbs "C:\FCIV\ChecksumFiles\LEX2-WriteCrash_E.txt" "\\lex2" ""
cscript C:\FCIV\replace.vbs "C:\FCIV\ChecksumFiles\LEX2-WriteCrash_F.txt" "\\lex2" ""

REM echo ***************************************** >> C:\FCIV\Log_crash.txt
REM echo ***************************************** >> C:\FCIV\Log_crash.txt
date /t >> C:\FCIV\Log_crash.txt
time /t >> C:\FCIV\Log_crash.txt
echo This test recorded %CRASHLOOP% crashes with file writes and checksums.>> C:\FCIV\Log_crash.txt
echo ----------------------------------------- >> C:\FCIV\Log_crash.txt
FC /C /L /N C:\FCIV\ChecksumFiles\LEX1-WriteCrash_E.txt C:\FCIV\ChecksumFiles\LEX2-WriteCrash_E.txt >> C:\FCIV\Log_crash.txt
FC /C /L /N C:\FCIV\ChecksumFiles\LEX1-WriteCrash_F.txt C:\FCIV\ChecksumFiles\LEX2-WriteCrash_F.txt >> C:\FCIV\Log_crash.txt
REM echo ***************************************** >> C:\FCIV\Log_crash.txt
REM echo ***************************************** >> C:\FCIV\Log_crash.txt


REM Email results and clear log
C:\BLAT\blat %CrashChecksumLog% -to %eMailTO% -f %eMailFROM% %subj3% %server%
TYPE NUL > C:\FCIV\Log_crash.txt

REM The test duration has reached its limit so we set this numerical flag to 
REM prevent this code block from running again.
set /a CRASHTEST=%CRASHTEST% + 1
goto TESTDATESET




:IOMETERBLOCK
REM We need to clear the previous test flag so that code block doesn't run again.
set /a CRASHTEST=0

REM We have to switchover the mirror so the source is on correct node to run IOMeter
:switch3
echo Checking if Volume %VOL1% is Target...
"%ExtMirrBase%\emcmd" . getvolumeinfo %VOL1% 1 | findstr SOURCE
If %ERRORLEVEL%==0 goto switch4
echo Switching over Volume %VOL1%
"%ExtMirrBase%\emcmd" . switchovervolume %VOL1%

:switch4
echo Checking if Volume %VOL2% is Target...
"%ExtMirrBase%\emcmd" . getvolumeinfo %VOL2% 1 | findstr SOURCE
If %ERRORLEVEL%==0 goto startnow1
echo Switching over Volume %VOL2%
"%ExtMirrBase%\emcmd" . switchovervolume %VOL2%

timeout /t %DELAY4% /nobreak
goto switch3

:startnow1
echo IOMeter test running...

Call C:\AllTests\IOMeterTest.cmd


echo ***************************************** >> C:\FCIV\Log_iometer.txt
echo ***************************************** >> C:\FCIV\Log_iometer.txt
date /t >> C:\FCIV\Log_iometer.txt
time /t >> C:\FCIV\Log_iometer.txt
"%ExtMirrBase%\emcmd" . GETVOLUMEINFO %VOL2% 2 >> C:\FCIV\Log_iometer.txt
echo ----------------------------------------- >> C:\FCIV\Log_iometer.txt
TYPE C:\FCIV\IOMeterResults.csv >> C:\FCIV\Log_iometer.txt
echo ----------------------------------------- >> C:\FCIV\Log_iometer.txt
echo ***************************************** >> C:\FCIV\Log_iometer.txt
echo ***************************************** >> C:\FCIV\Log_iometer.txt


REM This is the check to see if we loop or continue to next test.
SET Today=%Date: =%
SET DayDate=%Today:~-7,2%
If not %dayDate%==%endDay% goto IOMETERBLOCK

REM Email results and clear log
C:\BLAT\blat %IOMeterLog% -to %eMailTO% -f %eMailFROM% %subj7% %server%
TYPE NUL > C:\FCIV\IOMeterResults.csv
TYPE NUL > C:\FCIV\Log_iometer.txt

REM The test duration has reached its limit so we set this numerical flag to 
REM prevent this code block from running again.
set /a IOMETERTEST=%IOMETERTEST% + 1
goto TESTDATESET







:end
REM Email results
C:\BLAT\blat -body %SUCCESS% -to %eMailTO% -f %eMailFROM% %subj5% %server%

echo Tests completed.
echo Pressing any key will start the DataKeeper uninstall process, as required.
pause
copy /y NUL \\LEX2\C$\DK_Builds\UninstallFlag\UninstallFlag.xyz
copy /y NUL C:\DK_Builds\UninstallFlag\UninstallFlag.xyz

goto Done

:checkstatefail
echo Error: Cannot validate mirroring state or paused state.
goto fail


:Fail
REM Email results
C:\BLAT\blat -body %FAIL% -to %eMailTO% -f %eMailFROM% %subj4% %server%

echo Test failed, check logs and systems.
echo ***YOU MUST DELETE THE FLAG 'INPROGRESS.XYZ' IN C:\DK_BUILDS,
ECHO DELETE DK JOB, UNINSTALL DK ON LEX1 AND LEX2 AND REBOOT WHEN FINISHED***
pause

:Done



