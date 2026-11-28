param(
  [string]$CiktiRoot = "c:\Projeler\studio\elockman-game-studio\AI-GELEN\CIKTI",
  [string]$StudioGamesAssets = "c:\Projeler\studio\elockman-game-studio\public\assets\games"
)

Add-Type -AssemblyName System.Drawing

function Save-ResizedPng {
  param([string]$SrcPath, [string]$OutPath, [int]$W, [int]$H)
  $src = [System.Drawing.Image]::FromFile($SrcPath)
  try {
    $bmp = New-Object System.Drawing.Bitmap($W, $H, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    try {
      $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
      $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
      $g.DrawImage($src, 0, 0, $W, $H)
    } finally { $g.Dispose() }
    $dir = Split-Path -Parent $OutPath
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
  } finally { $src.Dispose() }
}

function Save-ResizedJpg {
  param([string]$SrcPath, [string]$OutPath, [int]$W, [int]$H)
  $src = [System.Drawing.Image]::FromFile($SrcPath)
  try {
    $bmp = New-Object System.Drawing.Bitmap($W, $H, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    try {
      $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
      $g.DrawImage($src, 0, 0, $W, $H)
    } finally { $g.Dispose() }
    $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
  } finally { $src.Dispose() }
}

$map = @(
  @{ slug = "garaj"; dir = "c:\Projeler\games\garaj-efsanesi"; iconExt = "jpg" },
  @{ slug = "kulup"; dir = "c:\Projeler\games\kulup-efsanesi"; iconExt = "png" },
  @{ slug = "orbit"; dir = "c:\Projeler\games\orbit-escape"; iconExt = "png" },
  @{ slug = "ring";  dir = "c:\Projeler\games\ring-tycoon";  iconExt = "png" }
)

$densities = @(
  @{ folder = "mipmap-mdpi";    icon = 48;  fg = 108 },
  @{ folder = "mipmap-hdpi";    icon = 72;  fg = 162 },
  @{ folder = "mipmap-xhdpi";   icon = 96;  fg = 216 },
  @{ folder = "mipmap-xxhdpi";  icon = 144; fg = 324 },
  @{ folder = "mipmap-xxxhdpi"; icon = 192; fg = 432 }
)

foreach ($item in $map) {
  $slug = $item.slug
  $srcDir = Join-Path $CiktiRoot $slug
  $icon512 = Join-Path $srcDir "icon_512.png"
  $icon1024 = Join-Path $srcDir "icon_1024_appstore.png"
  $feature = Join-Path $srcDir "feature_1024x500.png"
  $studioDir = Join-Path $StudioGamesAssets $slug

  if (Test-Path $icon512) {
    if ($item.iconExt -eq "jpg") {
      Save-ResizedJpg -SrcPath $icon512 -OutPath (Join-Path $studioDir "icon.jpg") -W 512 -H 512
    } else {
      Copy-Item -Force $icon512 (Join-Path $studioDir "icon.png")
    }
    Write-Output "[STUDIO ICON] $slug -> $studioDir"

    # Update Android mipmap icons
    $resDir = Join-Path $item.dir "android\app\src\main\res"
    if (Test-Path $resDir) {
      foreach ($d in $densities) {
        $mDir = Join-Path $resDir $d.folder
        if (Test-Path $mDir) {
          Save-ResizedPng -SrcPath $icon1024 -OutPath (Join-Path $mDir "ic_launcher.png") -W $d.icon -H $d.icon
          Save-ResizedPng -SrcPath $icon1024 -OutPath (Join-Path $mDir "ic_launcher_round.png") -W $d.icon -H $d.icon
          if (Test-Path (Join-Path $mDir "ic_launcher_foreground.png")) {
            Save-ResizedPng -SrcPath $icon1024 -OutPath (Join-Path $mDir "ic_launcher_foreground.png") -W $d.fg -H $d.fg
          }
        }
      }
      Write-Output "[ANDROID MIPMAP] $slug -> $resDir"
    }
  }

  if (Test-Path $feature) {
    Copy-Item -Force $feature (Join-Path $studioDir "banner.png")
    Write-Output "[STUDIO BANNER] $slug -> $studioDir\banner.png"
  }

  # Copy sliced 2D grid & turnaround packs into game's assets/ai_pack folder for ready use
  $gridSrc = Join-Path $srcDir "2d_grid"
  if (Test-Path $gridSrc) {
    $destPack = Join-Path $item.dir "assets\ai_pack"
    if (-not (Test-Path $destPack)) { New-Item -ItemType Directory -Force -Path $destPack | Out-Null }
    Copy-Item -Force "$gridSrc\*" $destPack
    Write-Output "[2D PACK] $slug -> $destPack"
  }
  $turnSrc = Join-Path $srcDir "turnaround"
  if (Test-Path $turnSrc) {
    $destTurn = Join-Path $item.dir "assets\turnaround"
    if (-not (Test-Path $destTurn)) { New-Item -ItemType Directory -Force -Path $destTurn | Out-Null }
    Copy-Item -Force "$turnSrc\*" $destTurn
    Write-Output "[TURNAROUND] $slug -> $destTurn"
  }
}

Write-Output "INTEGRATION_COMPLETE"
