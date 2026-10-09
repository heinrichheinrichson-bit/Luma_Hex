# Luma Hex

Eigenständiger Hexagon-Puzzle-Prototyp für Android und Browser.

## Version 0.3.0

- 20 unterschiedliche Konturen mit je fünf Teilevarianten: 100 spielbare Rätsel.
- Erkennbare Motive und abstrakte Spielfelder, individuelle Abschlusstexte.
- Testwerkzeuge: einzelner Lösungsschritt, ein Teil offen lassen, vollständig lösen.
- Offline-Browserfassung und Android-Test-APK; noch kein marktfertiger Play-Store-Release.

`app/` enthält den Quellcode, `design/` die Formstudie und `releases/` die zugehörigen Testdateien.

Prüfung: `node app/tests.cjs` — 100 Level erfolgreich geprüft.

## Sicherung neuer Versionen

Jede neue Version wird mit Quellcode, aktualisierten Testdateien, Änderungsnotizen und einem Git-Tag gesichert und nach GitHub übertragen. Private Signierschlüssel und lokale Zugangsdaten gehören nicht ins Repository.

Android-Buildhinweise stehen in `app/README.md` und `app/build-android.ps1`. Der lokale Test-Signierschlüssel ist bewusst nicht enthalten; für Updates einer bereits installierten APK wird derselbe Schlüssel benötigt.
