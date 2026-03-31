@echo off
title Muthupettagam Memorial Website

echo Checking for Node.js...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo =======================================================
    echo ERROR: Node.js is not installed on this computer!
    echo To run this application, you must install Node.js first.
    echo Please download and install it from: https://nodejs.org/
    echo =======================================================
    echo.
    pause
    exit /b
)

echo Node.js is installed!

if not exist "node_modules\" (
    echo.
    echo =======================================================
    echo First time setup: Installing necessary files...
    echo This may take a few minutes depending on your internet.
    echo =======================================================
    echo.
    call npm install
)

echo.
echo =======================================================
echo Starting the application...
echo. 
echo 1. The website will automatically open in your default browser.
echo 2. Do not close this black window as long as you are using the site!
echo    You can only view the website while this window remains open.
echo =======================================================
echo.

call npm run dev -- --open
