@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Ökmen — Prompt Listesi
start "" "PROMPTS.txt"
echo PROMPTS.txt açıldı. Notepad veya tercih ettiğin editörde göründü mü?
timeout /t 3 >nul
