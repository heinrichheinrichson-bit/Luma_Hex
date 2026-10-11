param([ValidateSet('developer','closed')][string]$Variant='developer')
$ErrorActionPreference = 'Stop'
$sdk = Join-Path $env:LOCALAPPDATA 'Android/Sdk'
$jdk = 'C:/Program Files/Android/Android Studio/jbr'
$tools = Join-Path $sdk 'build-tools/35.0.0'
$platform = Join-Path $sdk 'platforms/android-35/android.jar'
$env:JAVA_HOME = $jdk
$root = $PSScriptRoot
$build = Join-Path $root ('../../work/android-build-' + $Variant)
$apkName = if ($Variant -eq 'closed') { 'Hex-and-Joy-Closed-Test.apk' } else { 'Hex-and-Joy-Developer.apk' }
$apkPath = Join-Path $root ('../' + $apkName)
New-Item -ItemType Directory -Force -Path $build, "$build/classes", "$build/dex", "$build/assets" | Out-Null
foreach ($name in @('i18n-en.js','finish-en.js','i18n.js','index.html','style.css','ui-theme.css','motifs.js','engine.js','curriculum.js','journey.js','finish.js','save.js','achievements.js','game.js','timer.js','hints.js','ads.js','activity.js','icon.svg','manifest.webmanifest')) { Copy-Item -LiteralPath (Join-Path $root $name) -Destination "$build/assets/$name" }
Copy-Item -LiteralPath "$root/assets" -Destination "$build/assets" -Recurse -Force
& node "$root/build-variant.cjs" $root "$build/assets" $Variant
if ($LASTEXITCODE -ne 0) { throw 'Variant generation failed' }
$manifestText = Get-Content -LiteralPath "$root/android/AndroidManifest.xml" -Raw
$javaText = Get-Content -LiteralPath "$root/android/MainActivity.java" -Raw
if ($Variant -eq 'closed') {
 $manifestText = $manifestText.Replace('com.lumahex.prototype','com.heinrichheinrichson.hexandjoy')
 $javaText = $javaText.Replace('package com.lumahex.prototype;','package com.heinrichheinrichson.hexandjoy;')
} else {
 $manifestText = $manifestText.Replace('android:label="Hex &amp; Joy"','android:label="Hex &amp; Joy Test"').Replace('@mipmap/ic_launcher','@mipmap/ic_launcher_test')
}
Set-Content -LiteralPath "$build/AndroidManifest.xml" -Value $manifestText -Encoding utf8
Set-Content -LiteralPath "$build/MainActivity.java" -Value $javaText -Encoding utf8
function Checked { param([string]$Exe,[string[]]$Arguments) & $Exe @Arguments; if ($LASTEXITCODE -ne 0) { throw "Build failed: $Exe" } }
Checked "$tools/aapt.exe" @('package','-f','-M',"$build/AndroidManifest.xml",'-S',"$root/android/res",'-A',"$build/assets",'-I',$platform,'-F',"$build/unsigned.apk")
Checked "$jdk/bin/javac.exe" @('-source','8','-target','8','-classpath',$platform,'-d',"$build/classes","$build/MainActivity.java")
$classFiles = @(Get-ChildItem -LiteralPath "$build/classes" -Recurse -Filter '*.class' | ForEach-Object {$_.FullName})
Checked "$tools/d8.bat" (@('--lib',$platform,'--min-api','26','--output',"$build/dex") + $classFiles)
Copy-Item -LiteralPath "$build/dex/classes.dex" -Destination "$build/classes.dex"
Push-Location $build
try { Checked "$tools/aapt.exe" @('add','unsigned.apk','classes.dex') } finally { Pop-Location }
Checked "$tools/zipalign.exe" @('-f','4',"$build/unsigned.apk","$build/aligned.apk")
$keystore = Join-Path $root "../../work/android-build/prototype.keystore"
if (-not (Test-Path -LiteralPath $keystore)) { Checked "$jdk/bin/keytool.exe" @('-genkeypair','-keystore',$keystore,'-storepass','lumahex-prototype','-keypass','lumahex-prototype','-alias','prototype','-keyalg','RSA','-keysize','2048','-validity','3650','-dname','CN=Luma Hex Prototype') }
Checked "$tools/apksigner.bat" @('sign','--ks',$keystore,'--ks-pass','pass:lumahex-prototype','--key-pass','pass:lumahex-prototype','--out',$apkPath,"$build/aligned.apk")
Checked "$tools/apksigner.bat" @('verify','--verbose',$apkPath)
$badging = (& "$tools/aapt.exe" dump badging $apkPath) -join "
"
$expectedPackage = if ($Variant -eq 'closed') { 'com.heinrichheinrichson.hexandjoy' } else { 'com.lumahex.prototype' }
$expectedLabel = if ($Variant -eq 'closed') { 'Hex & Joy' } else { 'Hex & Joy Test' }
if (-not $badging.Contains("name='$expectedPackage'")) { throw 'Wrong application ID in APK' }
if (-not $badging.Contains("application-label:'$expectedLabel'")) { throw 'Wrong application label in APK' }
if ($Variant -eq 'developer') { Copy-Item -LiteralPath $apkPath -Destination "$root/../Luma-Hex-Test.apk" -Force }
Write-Output "Built $apkPath ($Variant)"

