@echo off
chcp 65001 >nul
echo ============================================================
echo ELOCKMAN GAME STUDIO - CHROME OTONOM PLAY CONSOLE BAGLANTISI
echo ============================================================
echo Chrome, AI COO uzaktan kontrol portu (9222) ile baslatiliyor...
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 "https://play.google.com/console/" "https://groups.google.com/"
echo Hazir!

