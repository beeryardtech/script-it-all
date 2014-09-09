'DECLARE VARIABLES
NODE1="LEX2"
CRASHCMD="C:\CRASH_2008x64\osrbang2008x64.exe -s"

Dim COUNTER
Set objShell = CreateObject("Wscript.Shell")

'***CRASH NODE1***
objShell.popup "Crashing " & NODE1 & "", 5, "Crashing Node", 64
Set objWMIService = GetObject("winmgmts:" & "{impersonationLevel=impersonate}!\\" & NODE1 & "\root\cimv2")
Set objProcess = objWMIService.Get("Win32_Process")
errReturn = objProcess.Create(CRASHCMD, null, null, intProcessID)
If errReturn <> 0 then 
	objShell.popup "FAILED...", 0, "...Crashing " & NODE1, 64
	wscript.quit 
End if


'***LOOP COMPLETED, END SCRIPT
wscript.quit

