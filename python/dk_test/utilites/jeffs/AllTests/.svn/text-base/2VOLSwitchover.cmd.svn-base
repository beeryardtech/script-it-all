REM Both volumes must have the same source and target
REM You must start this script on the target volume and set the SOURCENODE variable

set VOL1=E
set VOL2=F
set SOURCENODE=LEX2
set DELAY=30

@echo off
cls

REM Check to see if we are the target volume in order to start the switchover test
:check1
echo Checking if Volume %VOL1% is Target...
"%ExtMirrBase%\emcmd" . getvolumeinfo %VOL1% 1 | findstr TARGET
If %ERRORLEVEL%==0 goto check2
echo Switching over Volume %VOL1%
"%ExtMirrBase%\emcmd" %SOURCENODE% switchovervolume %VOL1%

:check2
echo Checking if Volume %VOL2% is Target...
"%ExtMirrBase%\emcmd" . getvolumeinfo %VOL2% 1 | findstr TARGET
If %ERRORLEVEL%==0 goto start
echo Switching over Volume %VOL2%
"%ExtMirrBase%\emcmd" %SOURCENODE% switchovervolume %VOL2%

timeout /t %DELAY% /nobreak
if not %ErrorLevel%==0 goto break

goto check1


:start

echo Switching over volume %VOL1% and %VOL2%
"%ExtMirrBase%\emcmd" . switchovervolume %VOL1%
if not %ErrorLevel%==0 goto switcherror
"%ExtMirrBase%\emcmd" . switchovervolume %VOL2%
if not %ErrorLevel%==0 goto switcherror

timeout /t %DELAY% /nobreak
if not %ErrorLevel%==0 goto break

echo:

echo Checking Application and System logs for "full resync"...
wevtutil qe Application /r:%NODE1% /rd:TRUE /f:TEXT | findstr /I /C:"full resync"
If %errorlevel%==0 goto resync
wevtutil qe System /r:%NODE1% /rd:TRUE /f:TEXT | findstr /I /C:"full resync"
If %errorlevel%==0 goto resync
wevtutil qe Application /r:%NODE2% /rd:TRUE /f:TEXT | findstr /I /C:"full resync"
If %errorlevel%==0 goto resync
wevtutil qe System /r:%NODE2% /rd:TRUE /f:TEXT | findstr /I /C:"full resync"
If %errorlevel%==0 goto resync

echo:

set /a SWITCHCOUNT=%SWITCHCOUNT%+1

echo:

echo Switching over volume %VOL1% and %VOL2%
"%ExtMirrBase%\emcmd" %SOURCENODE% switchovervolume %VOL1%
if not %ErrorLevel%==0 goto switcherror
"%ExtMirrBase%\emcmd" %SOURCENODE% switchovervolume %VOL2%
if not %ErrorLevel%==0 goto switcherror

timeout /t %DELAY% /nobreak
if not %ErrorLevel%==0 goto break

echo:

echo Checking Application and System logs for "full resync"...
wevtutil qe Application /r:%NODE1% /rd:TRUE /f:TEXT | findstr /I /C:"full resync"
If %errorlevel%==0 goto resync
wevtutil qe System /r:%NODE1% /rd:TRUE /f:TEXT | findstr /I /C:"full resync"
If %errorlevel%==0 goto resync
wevtutil qe Application /r:%NODE2% /rd:TRUE /f:TEXT | findstr /I /C:"full resync"
If %errorlevel%==0 goto resync
wevtutil qe System /r:%NODE2% /rd:TRUE /f:TEXT | findstr /I /C:"full resync"
If %errorlevel%==0 goto resync

echo:

Set /a SWITCHCOUNT=%SWITCHCOUNT%+1

goto break

:switcherror
echo ***************************************** >> C:\FCIV\Log_switchover.txt
echo ***************************************** >> C:\FCIV\Log_switchover.txt
echo THERE WAS AN ERROR DURING SWITCHOVER - ALL TESTS HAVE STOPPED, CHECK LOGS. >> C:\FCIV\Log_switchover.txt
date /t >> C:\FCIV\Log_switchover.txt | time /t >> C:\FCIV\Log_switchover.txt
echo The switchover test recorded %SWITCHCOUNT% switchovers. >> C:\FCIV\Log_switchover.txt
echo ***************************************** >> C:\FCIV\Log_switchover.txt
echo ***************************************** >> C:\FCIV\Log_switchover.txt

set /a TERMINATE=%TERMINATE%+1
goto break

:resync
echo ***************************************** >> C:\FCIV\Log_switchover.txt
echo ***************************************** >> C:\FCIV\Log_switchover.txt
echo ERROR: "full resync" detected in event log. >> C:\FCIV\Log_switchover.txt
date /t >> C:\FCIV\Log_switchover.txt | time /t >> C:\FCIV\Log_switchover.txt
echo The switchover test recorded %SWITCHCOUNT% switchovers. >> C:\FCIV\Log_switchover.txt
echo ***************************************** >> C:\FCIV\Log_switchover.txt
echo ***************************************** >> C:\FCIV\Log_switchover.txt

set /a TERMINATE=%TERMINATE%+1
goto break


:break

