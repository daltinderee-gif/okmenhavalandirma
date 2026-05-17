@echo off
chcp 65001 >nul
title Ökmen — Görsel Klasörü
set "FOLDER=C:\Users\Administrator\Downloads\okmen-gorseller"
if not exist "%FOLDER%" mkdir "%FOLDER%"
start "" explorer "%FOLDER%"
