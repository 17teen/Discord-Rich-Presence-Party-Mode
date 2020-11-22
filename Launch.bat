@echo off
title Launching Modules v.2.1.0
:top
cls
node launch.js
pause
    call npm init 
    call npm install discord-rpc
    call npm install chalk
pause
cls
node done.js
pause
exit
goto :top
