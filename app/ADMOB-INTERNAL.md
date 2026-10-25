# Interner Android-Test 0.31.0

Dieser Build enthält das echte Google Mobile Ads SDK 25.5.0 mit ausschließlich
Googles Demo-App-ID und Demo-Anzeigenblöcken. Er erzielt keine Werbeeinnahmen.
Die im AdMob-Konto angelegten produktiven Kennungen sind nicht aktiviert.

## Varianten

- `build-internal.ps1`: signierte AAB und APK, Paket
  `com.heinrichheinrichson.hexandjoy`, ohne Entwicklerwerkzeuge und ohne simulierten
  Anzeigenbildschirm. Rewarded und Interstitial werden nativ angezeigt.
- `build-android.ps1 -Variant developer`: separate App `Hex & Joy Test`, Paket
  `com.lumahex.prototype`, bestehende Testwerkzeuge/Simulation und bisheriger Testschlüssel.
- `build-android.ps1 -Variant closed`: bisherige Spielvariante mit Simulation.
  Diese ist kein AdMob-Build. Für Play den ausdrücklich als internen Test benannten
  AAB-Build verwenden.

Die geplante Bereinigung der Einstellungen wurde nicht vorweggenommen.

## Werbeablauf

- Hinweisvorrat leer: Video aktiv anfordern; nach Google-Belohnungsereignis genau
  einen Hinweis sofort speichern. Nach Schließen direkt zurück zum Spiel, kein
  automatisches Setzen und keine erneute Aufforderung zum Verbrauchen.
- Vorzeitiges Schließen gibt keinen Hinweis. Ladefehler lassen einen neuen Versuch
  zu; Warten auf eine Anzeige wird nach spätestens 20 Sekunden beendet.
- Wird Laden abgebrochen, dürfen verspätete SDK-Callbacks keine Anzeige mehr zeigen.
- Interstitial nur beim Weitergehen nach Abschluss, entsprechend vorhandener
  Regel: erste fünf neuen Rätsel geschützt; danach mindestens vier neue Abschlüsse
  UND sechs Minuten aktive Spielzeit, kein Kapitelübergang. Keine Banner/Startanzeigen.
- Fehlgeschlagene Zwischenanzeige hält den Spieler nicht auf. Abstände werden
  erst beim tatsächlichen Anzeigen zurückgesetzt.
- Kein SDK-Start allein beim App-Start. Initialisierung folgt erst einer Anzeigenanforderung.
- Uhr und Zähler für aktive Werbezeit pausieren während der Anfrage/Anzeige.

## Build und Schlüssel

Gradle 8.14.3, Android Gradle Plugin 8.13.2, Java 17+, compileSdk 36,
targetSdk 35, minSdk 30; Versionscode 65. Gradle Wrapper liegt bei.
Der Windows-Build verwendet die vorhandene Android-Studio-Java-Installation.
Auf diesem PC wird Nortons bereits im Windows-Zertifikatsspeicher vertrautes
TLS-Rootzertifikat in eine lokale Kopie der Java-CA-Liste übernommen.
TLS-/Hostnamen-Prüfung wird nicht deaktiviert. Diese lokale Kopie wird nicht versioniert.

Privater Upload-Schlüssel und Konfiguration liegen unter
`work/hexjoy-upload-signing/`. Niemals in Git oder als Play-Release-Datei hochladen.
Ein lokales Backup wird getrennt von Quellcode und Releases bereitgestellt.
Die AAB verwendet einen neuen Upload-Schlüssel. Das ist nicht die Signatur der
bisher direkt installierten Spiel-APK. Vor einem Wechsel Spielstand exportieren.
Play App Signing hat später ebenfalls eine eigene Installationssignatur.

## Prüfstand und nächster Schritt

Native Demo-Callbacks sind in `native-ads-tests.cjs` getestet: doppeltes Anfordern,
alte Rückmeldungen, Abbruch/Zurück, Belohnung einmal, Speichern ohne Verbrauch,
Ladefehler, Fortsetzung und Werbeabstände. Android-Kompilierung, Release-Lint,
AAB-Strukturprüfung mit bundletool und Signaturprüfungen wurden ausgeführt.
Lint hat keine Fehler, aber bestehende Hinweise z.B. zum Portraitmodus und zur
benötigten JavaScript-WebView. Kein angeschlossenes Android-Gerät: tatsächliche
Demo-Anzeige und Layout müssen auf dem S22 getestet werden.

Für diesen Demo-Build ist keine abgeschlossene AdMob-Zahlungseinrichtung nötig.
Vor produktiver Werbung fehlen weiterhin: veröffentlichte Datenschutzinformationen,
korrekte Play-Angaben zu Werbung/Advertising ID/Datensicherheit entsprechend dem SDK,
Einwilligungsverwaltung mit UMP und AdMob-Mitteilung, produktive Kennungen,
Konto-/App-Freigabe und ggf. app-ads.txt. Der Demo-Build ist keine Produktionsfreigabe.
Keine produktiven Kennungen allein durch Textaustausch aktivieren.

## Offizielle Grundlagen

- https://developers.google.com/admob/android/quick-start
- https://developers.google.com/admob/android/test-ads
- https://developers.google.com/admob/android/rewarded
- https://developers.google.com/admob/android/interstitial
- https://developers.google.com/admob/android/privacy
