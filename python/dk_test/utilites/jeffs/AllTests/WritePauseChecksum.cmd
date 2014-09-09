@echo off

REM ADJUST THE 'TOTALLOOPS' VARIABLE FOR HOW MANY TIMES YOU WANT TO LOOP THE 50M WRITES

set NODE1=LEX1
set NODE2=LEX2
set VOLUME1=E
set VOLUME2=F
set DELAY=20
set DELAYPAUSE=25
set DELAYCONTINUE=45


REM We have to switchover the mirror so the source is on correct node to write data
:check1
echo Checking if Volume %VOLUME1% is Target...
"%ExtMirrBase%\emcmd" . getvolumeinfo %VOLUME1% 1 | findstr SOURCE
If %ERRORLEVEL%==0 goto check2
echo Switching over Volume %VOLUME1%
"%ExtMirrBase%\emcmd" . switchovervolume %VOLUME1%

:check2
echo Checking if Volume %VOLUME2% is Target...
"%ExtMirrBase%\emcmd" . getvolumeinfo %VOLUME2% 1 | findstr SOURCE
If %ERRORLEVEL%==0 goto writefile
echo Switching over Volume %VOLUME2%
"%ExtMirrBase%\emcmd" . switchovervolume %VOLUME2%

timeout /t %DELAY% /nobreak
if not %ErrorLevel%==0 goto break

goto check1

:writefile

REM Write data to volume 1
C:\FCIV\writefile -u 4 -q -r %VOLUME1%:\TestFile%WRITELOOP%.txt 50000K
echo -----------------------------
echo -----------------------------

REM Write data to volume 2
C:\FCIV\writefile -u 4 -q -r %VOLUME2%:\TestFile%WRITELOOP%.txt 50000K
echo -----------------------------
echo -----------------------------

echo:
echo Letting the writes finish before pausing mirror...
timeout /t %DELAY% /nobreak
if not %ErrorLevel%==0 goto end

:filecheck
echo PAUSING MIRROR on Volume %VOLUME1%
"%ExtMirrBase%\emcmd" . PAUSEMIRROR %VOLUME1%
if not %ErrorLevel%==0 goto errorP

echo PAUSING MIRROR on Volume %VOLUME2%
"%ExtMirrBase%\emcmd" . PAUSEMIRROR %VOLUME2%
if not %ErrorLevel%==0 goto errorP

echo UNLOCKING VOLUME %VOLUME1% on NODE %NODE2%
"%ExtMirrBase%\emcmd" %NODE2% UNLOCKVOLUME %VOLUME1%
if not %ErrorLevel%==0 goto errorU

echo UNLOCKING VOLUME %VOLUME2% on NODE %NODE2%
"%ExtMirrBase%\emcmd" %NODE2% UNLOCKVOLUME %VOLUME2%
if not %ErrorLevel%==0 goto errorU

timeout /t %DELAYPAUSE% /nobreak
if not %ErrorLevel%==0 goto end
echo -------------------------

echo Scanning files on %NODE1% and sending to text file in c:\fciv\Checksumfiles\...
C:\FCIV\fciv -add \\%NODE1%\%VOLUME1%$ -type *.txt >> C:\FCIV\ChecksumFiles\%NODE1%-Vol_%VOLUME1%.txt
C:\FCIV\fciv -add \\%NODE1%\%VOLUME2%$ -type *.txt >> C:\FCIV\ChecksumFiles\%NODE1%-Vol_%VOLUME2%.txt

echo -------------------------
echo -------------------------

echo Scanning files on %NODE2% and sending to text file in c:\fciv\Checksumfiles\...
C:\FCIV\fciv -add \\%NODE2%\%VOLUME1%$ -type *.txt >> C:\FCIV\ChecksumFiles\%NODE2%-Vol_%VOLUME1%.txt
C:\FCIV\fciv -add \\%NODE2%\%VOLUME2%$ -type *.txt >> C:\FCIV\ChecksumFiles\%NODE2%-Vol_%VOLUME2%.txt

echo -------------------------

echo LOCKING VOLUME %VOLUME1% on NODE %NODE2%
"%ExtMirrBase%\emcmd" %NODE2% LOCKVOLUME %VOLUME1%
if not %ErrorLevel%==0 goto errorL

echo LOCKING VOLUME %VOLUME2% on NODE %NODE2%
"%ExtMirrBase%\emcmd" %NODE2% LOCKVOLUME %VOLUME2%
if not %ErrorLevel%==0 goto errorL

echo CONTINUING MIRROR on Volume %VOLUME1%
"%ExtMirrBase%\emcmd" . CONTINUEMIRROR %VOLUME1%
if not %ErrorLevel%==0 goto errorC

echo CONTINUING MIRROR on Volume %VOLUME2%
"%ExtMirrBase%\emcmd" . CONTINUEMIRROR %VOLUME2%
if not %ErrorLevel%==0 goto errorC

REM Increment loop count by 1
set /a WRITELOOP=%WRITELOOP%+1

timeout /t %DELAYCONTINUE% /nobreak
if not %ErrorLevel%==0 goto end
echo -------------------------

REM Delete the files so we don't fill up the volume
echo Deleting the files...
Del /Q %VOLUME1%:\*.txt
Del /Q %VOLUME2%:\*.txt

echo ******************************
echo ** %WRITELOOP% loop cycles finished. **
echo ******************************


:end


 