# Capture website screenshots using Edge headless mode
# Run: powershell -ExecutionPolicy Bypass -File scripts\capture-screenshots.ps1

$edge   = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$outDir = Resolve-Path (Join-Path $PSScriptRoot "..\public\uploads")

$projects = @(
  @{ slug="alfa-transport";  url="https://www.alfatransport.sa" },
  @{ slug="yamin-estate";    url="https://www.yamin.estate" },
  @{ slug="saudi-hayat";     url="https://www.saudihayat.com" },
  @{ slug="fanous-clinic";   url="https://www.fanousclinic.com" },
  @{ slug="initio";          url="https://www.initio.sa" },
  @{ slug="redbone-gym";     url="https://www.redbonegym.com" },
  @{ slug="crewhub-studio";  url="https://crewhubstudio.com" },
  @{ slug="captain-maged";   url="https://captainmagedcm.com" },
  @{ slug="coach-batool";    url="https://www.coachbatool.com" },
  @{ slug="coach-shiko";     url="https://www.coachmohamedroshdy.com" },
  @{ slug="bedouin-trails";  url="https://bedouintrails.com" },
  @{ slug="window-adv";      url="https://windowadv.com" }
)

foreach ($p in $projects) {
  $out     = Join-Path $outDir ($p.slug + "-screen.png")
  $tmpDir  = Join-Path $env:TEMP ("edge-cap-" + $p.slug)
  New-Item -ItemType Directory -Force -Path $tmpDir | Out-Null

  Write-Host ("Capturing " + $p.slug + " -> " + $p.url)

  $args = @(
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1440,900",
    ("--screenshot=" + $out),
    ("--user-data-dir=" + $tmpDir),
    $p.url
  )

  & $edge @args | Out-Null
  Start-Sleep -Milliseconds 800
  Remove-Item -Recurse -Force -Path $tmpDir -ErrorAction SilentlyContinue

  if (Test-Path $out) {
    $sz = (Get-Item $out).Length
    Write-Host ("  saved " + $sz + " bytes")
  } else {
    Write-Host "  FAILED"
  }
}

Write-Host "All done."
