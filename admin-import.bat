@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Ökmen Havalandırma — Görsel İmport

echo.
echo ====================================================
echo   ÖKMEN HAVALANDIRMA — GÖRSEL İMPORT
echo ====================================================
echo.

REM Node.js PATH ayarla
set "PATH=C:\Program Files\nodejs;%PATH%"

REM 1. Klasördeki görselleri tara, dönüştür, yerleştir
echo [1/3] Görseller işleniyor...
echo.
node scripts\batch-import-images.mjs
if errorlevel 1 (
    echo.
    echo HATA: Görsel import başarısız.
    pause
    exit /b 1
)

echo.
echo [2/3] Site yeniden derleniyor...
echo.
call "C:\Program Files\nodejs\npm.cmd" run build
if errorlevel 1 (
    echo.
    echo HATA: Build başarısız.
    pause
    exit /b 1
)

echo.
echo ====================================================
echo   TAMAMLANDI ✓
echo ====================================================
echo.
echo [3/3] Önizleme başlatılıyor: http://localhost:4321
echo.
echo Tarayıcıda kontrol et:
echo   http://localhost:4321/admin     (yönetim paneli)
echo   http://localhost:4321/urunler   (ürünler)
echo.
echo Sunucuyu kapatmak için: Ctrl+C
echo.

call "C:\Program Files\nodejs\npm.cmd" run preview
