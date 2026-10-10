$ErrorActionPreference = 'Stop'
$sdk = Join-Path $env:LOCALAPPDATA 'Android/Sdk'
$jdk = 'C:/Program Files/Android/Android Studio/jbr'
$tools = Join-Path $sdk 'build-tools/35.0.0'
$platform = Join-Path $sdk 'platforms/android-35/android.jar'
$env:JAVA_HOME = $jdk
$root = $PSScriptRoot
$build = Join-Path $root '../../work/android-build'
New-Item -ItemType Directory -Force -Path $build, "$build/classes", "$build/dex", "$build/assets" | Out-Null
foreach ($name in @('index.html','style.css','motifs.js','engine.js','curriculum.js','finish.js','save.js','game.js','icon.svg','manifest.webmanifest')) { Copy-Item -LiteralPath (Join-Path $root $name) -Destination "$build/assets/$name" }
function Checked { param([string]$Exe,[string[]]$Arguments) & $Exe @Arguments; if ($LASTEXITCODE -ne 0) { throw "Build failed: $Exe" } }
Checked "$tools/aapt.exe" @('package','-f','-M',"$root/android/AndroidManifest.xml",'-S',"$root/android/res",'-A',"$build/assets",'-I',$platform,'-F',"$build/unsigned.apk")
Checked "$jdk/bin/javac.exe" @('-source','8','-target','8','-classpath',$platform,'-d',"$build/classes","$root/android/MainActivity.java")
$classFiles = @(Get-ChildItem -LiteralPath "$build/classes" -Recurse -Filter '*.class' | ForEach-Object {$_.FullName})
Checked "$tools/d8.bat" (@('--lib',$platform,'--min-api','26','--output',"$build/dex") + $classFiles)
Copy-Item -LiteralPath "$build/dex/classes.dex" -Destination "$build/classes.dex"
Push-Location $build
try { Checked "$tools/aapt.exe" @('add','unsigned.apk','classes.dex') } finally { Pop-Location }
Checked "$tools/zipalign.exe" @('-f','4',"$build/unsigned.apk","$build/aligned.apk")
$keystore = "$build/prototype.keystore"
if (-not (Test-Path -LiteralPath $keystore)) { Checked "$jdk/bin/keytool.exe" @('-genkeypair','-keystore',$keystore,'-storepass','lumahex-prototype','-keypass','lumahex-prototype','-alias','prototype','-keyalg','RSA','-keysize','2048','-validity','3650','-dname','CN=Luma Hex Prototype') }
Checked "$tools/apksigner.bat" @('sign','--ks',$keystore,'--ks-pass','pass:lumahex-prototype','--key-pass','pass:lumahex-prototype','--out',"$root/../Luma-Hex-Test.apk","$build/aligned.apk")
Checked "$tools/apksigner.bat" @('verify','--verbose',"$root/../Luma-Hex-Test.apk")
Write-Output "Built $root/../Luma-Hex-Test.apk"
