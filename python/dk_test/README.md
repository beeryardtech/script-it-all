## Required Installs
-- All bin files are avalable in \utilities\bin\
-- To reduce work, checkout the install paths in the cluster.ini
* python-3.2.3.amd64.msi
* pywin32-217.win-amd64-py3.2.exe
* jre-6u35-windows-i586.exe
* Sikuli-X-1.0rc3_r905-win32.exe
* sikuli-r930-win32.zip (extract into the SikuliX dir)
* dotNetFx40_Full_setup.exe
* IronPython-2.7.3.msi
* Datakeeper-7.*.exe

## Optional Installs
* putty-0.62-installer.exe (To prevent password verification with hancock)
* PyScripter-v2.5.3-x64-Setup.exe (Python editor)
* iometer-2006.07.27.win32.i386-setup.exe (not used yet)
* Visual Studio 2012 (For editing/debugging IronPython)

## Checkout/Export 
-- By default checkout/export to C:\Programs\dk_test. 
-- If you want it in a different dir, you will have to make changes to the cluster.ini

## Update cluter.ini
-- File found in \dk_test\scenarios\cluster.ini
* Update node info (hostname, IPs, available vols, etc.)
* Update "paths" section, if you did not use the paths in there

## Setup
* Create the following directories under dk_test:
	-- logs
	-- tmp
* Install the Schedule tasks on all the nodes
	-- Open in an editor \dk_test\utilities\scripts\{GuiSrv_Task.xml,RemoteSrv_Task.xml}
	-- Update the <UserId> element to the name of your current node. Save it.
	-- Open Task sceduler -> import task -> \dk_test\utilities\scripts\GuiSrv_Task.xml
	-- Repeat for the other .xml file.
	-- Run (start)  the task	
* Execute the following the master (node0) computer
	$ \path\to\python.exe C:\Programs\dk_test\runtests.py -s
* Copy the resulting \tmp\cluster.ini.tmp file to each of the other nodes (in the tmp dir)
* If using PyScripter, import the dk_test.pyproj project file
* For Visual Studios, import the dk_test.psproj project file

## TODO:
* Make the code more PEP8 complient
* Add standard change headers
* Update outputs to be more generic. 
	-- Handle lines of output we don't care about or do not know before hand (timestamps and job GUID)
	-- Add a {None} formating element that will ignore that line
* md5Sum of all files in Resources dir
* rm * all files on Vols at setup.
* Put the resource files on the vols
* Test Cases for demo:
	-- Create mirror (with verifymirror)
	-- create job (with verifyjob)
	-- guicreatejob
	-- guiconnectserver
* Logging for .NET components
* update/add everything to all_commands.ini
* Choose options for cluster.ini
	-- seperate cluter.ini into 2 files. One for nodes and one for framework constances/settings
	-- Rename "settings" section to "constants"