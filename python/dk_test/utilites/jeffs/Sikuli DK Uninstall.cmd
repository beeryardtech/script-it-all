@echo off
echo Tests completed.
echo Pressing any key will start the DataKeeper uninstall process, as required.
pause
copy /y NUL \\LEX2\C$\DK_Builds\UninstallFlag\UninstallFlag.xyz
copy /y NUL C:\DK_Builds\UninstallFlag\UninstallFlag.xyz

