param(
  [string]$Root = "c:\Projeler\studio\elockman-game-studio\AI-GELEN"
)

Add-Type -AssemblyName System.Drawing

function Resize-Cover {
  param(
    [string]$SrcPath,
    [string]$OutPath,
    [int]$TargetW,
    [int]$TargetH,
    [bool]$StripAlpha = $false
  )
  $src = [System.Drawing.Image]::FromFile($SrcPath)
  try {
    $pixelFormat = if ($StripAlpha) { [System.Drawing.Imaging.PixelFormat]::Format24bppRgb } else { [System.Drawing.Imaging.PixelFormat]::Format32bppArgb }
    $bmp = New-Object System.Drawing.Bitmap($TargetW, $TargetH, $pixelFormat)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    try {
      $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
      $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
      $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

      $scale = [Math]::Max($TargetW / $src.Width, $TargetH / $src.Height)
      $drawW = [int][Math]::Ceiling($src.Width * $scale)
      $drawH = [int][Math]::Ceiling($src.Height * $scale)
      $offsetX = [int](($TargetW - $drawW) / 2)
      $offsetY = [int](($TargetH - $drawH) / 2)

      $g.Clear([System.Drawing.Color]::FromArgb(8, 11, 18))
      $g.DrawImage($src, $offsetX, $offsetY, $drawW, $drawH)
    } finally {
      $g.Dispose()
    }
    $dir = Split-Path -Parent $OutPath
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "OK -> $OutPath (${TargetW}x${TargetH})"
  } finally {
    $src.Dispose()
  }
}

function Split-Grid {
  param(
    [string]$SrcPath,
    [string]$OutDir,
    [string]$Prefix,
    [int]$Cols,
    [int]$Rows,
    [int]$TargetSize = 512
  )
  $src = [System.Drawing.Image]::FromFile($SrcPath)
  try {
    if (-not (Test-Path $OutDir)) { New-Item -ItemType Directory -Force -Path $OutDir | Out-Null }
    $cellW = [int]($src.Width / $Cols)
    $cellH = [int]($src.Height / $Rows)
    $idx = 1
    for ($r = 0; $r -lt $Rows; $r++) {
      for ($c = 0; $c -lt $Cols; $c++) {
        $srcRect = New-Object System.Drawing.Rectangle(($c * $cellW), ($r * $cellH), $cellW, $cellH)
        $bmp = New-Object System.Drawing.Bitmap($TargetSize, $TargetSize, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        try {
          $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
          $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
          $destRect = New-Object System.Drawing.Rectangle(0, 0, $TargetSize, $TargetSize)
          $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
        } finally {
          $g.Dispose()
        }
        $outPath = Join-Path $OutDir ("{0}_{1:D2}.png" -f $Prefix, $idx)
        $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()
        Write-Output "GRID -> $outPath (${TargetSize}x${TargetSize})"
        $idx++
      }
    }
  } finally {
    $src.Dispose()
  }
}

$asoRoot = Join-Path $Root "aso"
$outRoot = Join-Path $Root "CIKTI"
$processed = 0

if (Test-Path $asoRoot) {
  Get-ChildItem $asoRoot -Directory | ForEach-Object {
    $slug = $_.Name
    $files = Get-ChildItem $_.FullName -File | Where-Object { $_.Extension -match '^\.(png|jpg|jpeg|webp)$' }
    foreach ($f in $files) {
      $low = $f.Name.ToLower()
      $targetDir = Join-Path $outRoot $slug
      $srcImg = [System.Drawing.Image]::FromFile($f.FullName)
      $w = $srcImg.Width
      $h = $srcImg.Height
      $srcImg.Dispose()

      if ($low -match "altılı|altili|boksör|boksor|seti") {
        Split-Grid -SrcPath $f.FullName -OutDir (Join-Path $targetDir "2d_grid") -Prefix "${slug}_item" -Cols 2 -Rows 3 -TargetSize 512
        $processed++
      } elseif ($low -match "dörtlü|dortlu|ödül|odul") {
        Split-Grid -SrcPath $f.FullName -OutDir (Join-Path $targetDir "2d_grid") -Prefix "${slug}_trophy" -Cols 2 -Rows 2 -TargetSize 512
        $processed++
      } elseif ($low -match "ortografik|turnaround|üçlü|uclu") {
        Split-Grid -SrcPath $f.FullName -OutDir (Join-Path $targetDir "turnaround") -Prefix "${slug}_view" -Cols 3 -Rows 1 -TargetSize 724
        $processed++
      } elseif ($low -match "icon|ikon|kalkan|eldiven|yıldız gemisi|yildiz gemisi|tuner coupe" -or ($w -eq $h -and $w -ge 1000)) {
        Resize-Cover -SrcPath $f.FullName -OutPath (Join-Path $targetDir "icon_512.png") -TargetW 512 -TargetH 512 -StripAlpha $true
        Resize-Cover -SrcPath $f.FullName -OutPath (Join-Path $targetDir "icon_1024_appstore.png") -TargetW 1024 -TargetH 1024 -StripAlpha $true
        $processed++
      } elseif ($low -match "feature|banner|tünel|tunel|arena|kemer" -or ($w -gt $h * 1.4)) {
        Resize-Cover -SrcPath $f.FullName -OutPath (Join-Path $targetDir "feature_1024x500.png") -TargetW 1024 -TargetH 500 -StripAlpha $true
        $processed++
      }
    }
  }
}

Write-Output "AI-GELEN processing complete. Processed source files: $processed"
