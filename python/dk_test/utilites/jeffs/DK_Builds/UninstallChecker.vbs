'This VB script monitors a folder for any file change. 
'Once a change is detected we execute a file.
'THIS FILE MAY BE SET UP TO RUN WHEN THE COMPUTER STARTS
'HKLM\SOFTWARE\MICROSOFT\WINDOWS\CURRENTVERSION\RUN UninstallChecker Key


strComputer = "."
 
Set objWMIService = GetObject("winmgmts:" _
    & "{impersonationLevel=impersonate}!\\" & strComputer & "\root\cimv2")
 
Set colProcess = objWMIService.ExecQuery _
("Select * from Win32_Process where name = 'wscript.exe' or name = 'cscript.exe'")
 
For Each objProcess In colProcess
   i = i + 1
Next
 
If i > 2 Then
    '  --- a wscript or cscript process is already running
    wscript.quit
 
 
End If
 
 
strComputer = "."
Set objWMIService = GetObject("winmgmts:" _
    & "{impersonationLevel=impersonate}!\\" & _
        strComputer & "\root\cimv2")
Set colMonitoredEvents = objWMIService.ExecNotificationQuery _
    ("SELECT * FROM __InstanceCreationEvent WITHIN 3 WHERE " _
        & "Targetinstance ISA 'CIM_DirectoryContainsFile' and " _
            & "TargetInstance.GroupComponent= " _
                & "'Win32_Directory.Name=""C:\\\\DK_Builds\\\\UninstallFlag""'")
 
    
i = 1
DO
    If i = 1 Then
	Set objLatestEvent = colMonitoredEvents.NextEvent
    	Set WSHShell = WScript.CreateObject("WScript.Shell")
        WshShell.Run "C:\DK_Builds\DKuninstall.cmd"
        wscript.quit
    End If
    i = i + 1
Loop