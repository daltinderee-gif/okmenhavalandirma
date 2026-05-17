@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Ökmen — Admin Paneli
set "PATH=C:\Program Files\nodejs;%PATH%"
echo.
echo Admin paneli açılıyor: http://localhost:4321/admin
echo Sunucu yoksa otomatik başlatılır...
echo.

REM Eğer build dist'i yoksa önce build yap
if not exist "dist\admin\index.html" (
    echo Önce build yapılıyor (ilk açılış)...
    call "C:\Program Files\nodejs\npm.cmd" run build
)

REM Tarayıcıyı aç + preview başlat
start "" "http://localhost:4321/admin"
call "C:\Program Files\nodejs\npm.cmd" run preview
