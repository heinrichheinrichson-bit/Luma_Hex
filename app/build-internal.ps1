$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$workspace = [IO.Path]::GetFullPath((Join-Path $root '../..'))
$build = Join-Path $workspace 'work/hexjoy-gradle'
$keys = Join-Path $workspace 'work/hexjoy-upload-signing'
$sdk = Join-Path $env:LOCALAPPDATA 'Android/Sdk'
$jdk = 'C:/Program Files/Android/Android Studio/jbr'
$env:JAVA_HOME = $jdk
$gradle = Get-ChildItem -LiteralPath (Join-Path $env:USERPROFILE '.gradle/wrapper/dists/gradle-8.14.3-all') -Recurse -Filter gradle.bat | Select-Object -First 1 -ExpandProperty FullName
if (-not $gradle) { $gradle = Join-Path $root 'android-gradle/gradlew.bat' }
function Checked { param([string]$Exe,[string[]]$Arguments) & $Exe @Arguments; if ($LASTEXITCODE -ne 0) { throw "Build failed: $Exe" } }
New-Item -ItemType Directory -Force -Path $build,$keys,"$build/app/src/main/assets","$build/app/src/main/java/com/heinrichheinrichson/hexandjoy" | Out-Null
Copy-Item -Path "$root/android-gradle/*" -Destination $build -Recurse -Force
# On this PC Norton inspects TLS. Reuse its already OS-trusted root in a local
# copy of Java's CA store; certificate/hostname validation stays enabled.
$scannerRoot = Get-ChildItem Cert:/CurrentUser/Root,Cert:/LocalMachine/Root | Where-Object Subject -Like 'CN=Norton Web/Mail Shield Root,*' | Select-Object -First 1
if ($scannerRoot) {
    $trust = Join-Path $build 'java-cacerts'
    Copy-Item -LiteralPath "$jdk/lib/security/cacerts" -Destination $trust -Force
    $rootCert = Join-Path $build 'trusted-scanner-root.cer'
    Export-Certificate -Cert $scannerRoot -FilePath $rootCert | Out-Null
    Checked "$jdk/bin/keytool.exe" @('-importcert','-noprompt','-alias','os-trusted-norton','-file',$rootCert,'-keystore',$trust,'-storepass','changeit')
    Add-Content -LiteralPath "$build/gradle.properties" -Value ('org.gradle.jvmargs=-Xmx3072m -Dfile.encoding=UTF-8 -Djavax.net.ssl.trustStore='+$trust.Replace('\','/')) -Encoding ascii
}
$main = "$build/app/src/main"
$assetNames = @('i18n-en.js','finish-en.js','i18n.js','index.html','style.css','ui-theme.css','motifs.js','engine.js','curriculum.js','journey.js','finish.js','save.js','achievements.js','game.js','timer.js','hints.js','ads.js','activity.js','icon.svg','manifest.webmanifest')
foreach($name in $assetNames) { Copy-Item -LiteralPath (Join-Path $root $name) -Destination "$main/assets/$name" -Force }
Copy-Item -LiteralPath "$root/assets" -Destination "$main/assets" -Recurse -Force
Checked 'node' @("$root/build-variant.cjs",$root,"$main/assets",'internal')
$manifest = (Get-Content -LiteralPath "$root/android/AndroidManifest.xml" -Raw).Replace(' package="com.lumahex.prototype"','')
$manifest = $manifest.Replace('<uses-permission android:name="android.permission.VIBRATE"/>','<uses-permission android:name="android.permission.VIBRATE"/><uses-permission android:name="android.permission.INTERNET"/><uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>')
$manifest = $manifest -replace '<uses-sdk[^>]*/>',''
$manifest = $manifest.Replace('<activity android:name=".MainActivity"','<meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="ca-app-pub-3940256099942544~3347511713"/><activity android:name=".MainActivity"')
Set-Content -LiteralPath "$main/AndroidManifest.xml" -Value $manifest -Encoding utf8
$java = (Get-Content -LiteralPath "$root/android/MainActivity.java" -Raw).Replace('package com.lumahex.prototype;','package com.heinrichheinrichson.hexandjoy;')
Set-Content -LiteralPath "$main/java/com/heinrichheinrichson/hexandjoy/MainActivity.java" -Value $java -Encoding utf8
Copy-Item -LiteralPath "$root/android/DemoAdsController.java" -Destination "$main/java/com/heinrichheinrichson/hexandjoy/DemoAdsController.java" -Force
Copy-Item -LiteralPath "$root/android/res" -Destination $main -Recurse -Force
Set-Content -LiteralPath "$build/local.properties" -Value ('sdk.dir='+$sdk.Replace('\','/').Replace(':','\:')) -Encoding ascii
$properties = Join-Path $keys 'signing.properties'
if (-not (Test-Path -LiteralPath $properties)) {
    $passwordBytes = [byte[]]::new(32)
    $random = [Security.Cryptography.RandomNumberGenerator]::Create()
    $random.GetBytes($passwordBytes)
    $random.Dispose()
    $password = [Convert]::ToBase64String($passwordBytes)
    $keystore = Join-Path $keys 'hexjoy-upload.jks'
    if (Test-Path -LiteralPath $keystore) { throw 'Keystore exists without configuration; refusing to replace.' }
    $env:HEXJOY_KEY_PASSWORD = $password
    Checked "$jdk/bin/keytool.exe" @('-genkeypair','-keystore',$keystore,'-storetype','JKS','-storepass:env','HEXJOY_KEY_PASSWORD','-keypass:env','HEXJOY_KEY_PASSWORD','-alias','hexjoy-upload','-keyalg','RSA','-keysize','3072','-validity','10000','-dname','CN=Hex and Joy Upload')
    [IO.File]::WriteAllLines($properties, [string[]]@(('storeFile='+$keystore.Replace('\','/')),('storePassword='+$password),'keyAlias=hexjoy-upload',('keyPassword='+$password)), [Text.Encoding]::ASCII)
    Remove-Item Env:HEXJOY_KEY_PASSWORD
}
$env:HEXJOY_SIGNING_PROPERTIES = $properties
Checked $gradle @('--project-dir',$build,'--console=plain','bundleRelease','assembleRelease','lintRelease')
$out = [IO.Path]::GetFullPath((Join-Path $root '..'))
Copy-Item -LiteralPath "$build/app/build/outputs/bundle/release/app-release.aab" -Destination "$out/Hex-and-Joy-0.31.1-Interner-Test.aab" -Force
Copy-Item -LiteralPath "$build/app/build/outputs/apk/release/app-release.apk" -Destination "$out/Hex-and-Joy-0.31.1-AdMob-Demo.apk" -Force
Checked "$jdk/bin/jarsigner.exe" @('-verify',"$out/Hex-and-Joy-0.31.1-Interner-Test.aab")
Checked "$sdk/build-tools/35.0.0/apksigner.bat" @('verify',"$out/Hex-and-Joy-0.31.1-AdMob-Demo.apk")
Write-Output "Internal demo AAB/APK built. Signing files remain private in $keys"
