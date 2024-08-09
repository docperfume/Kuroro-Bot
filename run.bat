@echo off
title Tool Kuroro
setlocal

:: Mở terminal tại thư mục hiện tại
cd /d %~dp0

:: In ra câu chào
echo Tool Kuroro
:: Kiểm tra phiên bản Node.js
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js chua duoc cai dat. Vui long cai dat Node.js truoc.
    exit /b 1
)

:: Chạy lệnh npm install
if not exist node_modules (
    echo Thu muc node_modules khong ton tai. Dang chay npm install...
    npm install
) else (
    echo Da cai dat thanh cong
)
:: Run the Kuroro script
node 2.js

pause