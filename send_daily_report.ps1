# ==============================================================================
# ELOCKMAN GAME STUDIO - Gun Sonu E-Posta Rapor Gonderici (Low-Token Dispatcher)
# Hedef: erdemlokman@gmail.com
# ==============================================================================

param(
    [string]$Recipient = "erdemlokman@gmail.com",
    [string]$ReportPath = ""
)

$ErrorActionPreference = "Continue"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " [ELOCKMAN COO] Gun Sonu Rapor Dagitim Servisi Baslatildi " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. En guncel raporu bul
if (-not $ReportPath -or -not (Test-Path $ReportPath)) {
    $latestReport = Get-ChildItem -Path "c:\Projeler\elockman-game-studio\RAPORLAR" -Filter "*.md" | 
                    Sort-Object LastWriteTime -Descending | 
                    Select-Object -First 1
    if ($latestReport) {
        $ReportPath = $latestReport.FullName
    }
}

if (-not $ReportPath -or -not (Test-Path $ReportPath)) {
    Write-Warning "Gonderilecek rapor dosyasi bulunamadi!"
    exit 1
}

$reportTitle = (Get-Item $ReportPath).BaseName
$reportContent = Get-Content -Path $ReportPath -Raw -Encoding UTF8
$dateStr = (Get-Date).ToString("yyyy-MM-dd HH:mm")

Write-Host "Rapor Dosyasi: $ReportPath" -ForegroundColor Green
Write-Host "Hedef Alici  : $Recipient" -ForegroundColor Green
Write-Host "Tarih/Saat   : $dateStr" -ForegroundColor Green

# 2. E-posta Yapilandirma Kontrolu
$configPath = "c:\Projeler\elockman-game-studio\email_config.json"
$emailSent = $false

if (Test-Path $configPath) {
    try {
        $config = Get-Content $configPath -Raw | ConvertFrom-Json
        if ($config.smtp_server -and $config.username -and $config.password) {
            Write-Host "SMTP yapilandirmasi bulundu ($($config.smtp_server)). Gonderiliyor..." -ForegroundColor Yellow
            $secPassword = ConvertTo-SecureString $config.password -AsPlainText -Force
            $cred = New-Object System.Management.Automation.PSCredential($config.username, $secPassword)
            
            $mailParams = @{
                From       = $config.from_address
                To         = $Recipient
                Subject    = "[$dateStr] Elockman Game Studio - Gun Sonu Yonetici Raporu"
                Body       = $reportContent
                SmtpServer = $config.smtp_server
                Port       = [int]$config.port
                UseSsl     = [bool]$config.use_ssl
                Credential = $cred
                Encoding   = [System.Text.Encoding]::UTF8
            }
            Send-MailMessage @mailParams
            Write-Host "E-posta basariyla $Recipient adresine gonderildi." -ForegroundColor Green
            $emailSent = $true
        }
    }
    catch {
        Write-Warning "SMTP uzerinden dogrudan gonderim yapilamadi: $_"
    }
}

if (-not $emailSent) {
    Write-Host "SMTP yapilandirmasi henuz girilmedigi icin yerel Outbox kuyruguna yaziliyor..." -ForegroundColor Yellow
    $outboxDir = "c:\Projeler\elockman-game-studio\RAPORLAR\OUTBOX"
    if (-not (Test-Path $outboxDir)) { 
        New-Item -ItemType Directory -Path $outboxDir -Force | Out-Null 
    }
    
    $outboxTimestamp = (Get-Date).ToString('yyyyMMdd_HHmmss')
    $outboxFile = Join-Path $outboxDir "${outboxTimestamp}_to_report.txt"
    
    $mailHeader = "TO: " + $Recipient + "`r`nFROM: coo@elockman-studio.internal`r`nSUBJECT: [" + $dateStr + "] Elockman Game Studio - Gun Sonu Yonetici Raporu`r`nDATE: " + $dateStr + "`r`n`r`n"
    $mailPayload = $mailHeader + $reportContent
    
    [System.IO.File]::WriteAllText($outboxFile, $mailPayload, [System.Text.Encoding]::UTF8)
    Write-Host "Rapor OUTBOX kuyruguna kaydedildi: $outboxFile" -ForegroundColor Green
    Write-Host "Dogrudan Gmail uzerinden gondermek icin email_config.json dosyasina SMTP bilgilerini ekleyebilirsiniz." -ForegroundColor Cyan
}

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " [ELOCKMAN COO] Dagitim Islemi Tamamlandi                 " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
