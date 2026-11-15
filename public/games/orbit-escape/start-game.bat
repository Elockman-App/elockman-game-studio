@echo off
cd /d "%~dp0"
node --version >nul 2>&1
if errorlevel 1 (
  echo Node.js bulunamadi. Oyunu dogrudan index.html dosyasindan acabilir veya Node.js kurabilirsin.
  pause
  exit /b 1
)
start "Orbit Escape" /b node "%~dp0serve.mjs"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4176/"