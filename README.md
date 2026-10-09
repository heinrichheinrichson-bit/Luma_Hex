# Luma Hex

Eigenständiger Hexagon-Puzzle-Prototyp für Android und Browser.

## Version 0.6.0

50 unterschiedliche Spielfelder in fünf Kapiteln, davon 20 neu. Figuren und freie Formen wechseln sich ab. Die ersten 30 Rätsel bleiben unverändert und sind mit 0.5 kompatibel. Spielstandsicherung als JSON-Datei oder Code, mit Validierung und Vorschau vor dem Laden. Android verwendet die System-Dateiauswahl. Testansichten, Lösungen mit Hinweis und Lösungen ohne Hinweise werden getrennt erfasst. Die Neon-/Ringstudien bleiben separat.

Prüfungen: 50 Konturen, Teile und Lösungen, Einzigartigkeit unter Spiegelung/Drehung, Hinweise und Testwerkzeuge. Zusätzlich UI-Abläufe im simulierten DOM, Sicherungsdateien, Migration und Paketinhalt geprüft. APK signaturgeprüft. Kein physischer S22-Test; native Dateiauswahl, Layout und Schwierigkeit müssen praktisch getestet werden. Details in releases/Luma-Hex-0.6-Notizen.md.

## Vorherige Version 0.5.0

Rätselreise mit drei Kapiteln und Sprung zum nächsten ungelösten Rätsel. Neue, deterministisch ausgewählte Teileaufteilungen für alle 30 Spielfelder. Einstieg mit maximal sechs Teilen; spätere Aufteilungen mit unterschiedlichen Teileanzahlen. Keine neuen Konturen in dieser Version. Bisherige Optik unverändert; Neonstudien bleiben separat.

Gesammelte Motive und Einstellungen aus 0.4 bleiben erhalten, angefangene Platzierungen starten wegen neuer Teileaufteilungen neu. Automatische Engine-Prüfungen und Bedienabläufe im simulierten DOM bestanden. APK gebaut und Signatur geprüft; physischer S22-Test steht aus.

## Vorherige Version 0.4.0

30 unterschiedliche Spielfelder, darunter zehn neue. Jedes Spielfeld erscheint einmal in der Hauptreihe. Drei Kapitel; Sammlung und Texte auf einzelne Rätsel angepasst. Frühere Wiederholungen entfallen. Fortschritt aus 0.3 wird für bekannte Konturen übernommen.

Geprüft: 30 Lösungen, Testwerkzeuge und Einzigartigkeit der Konturen auch unter Drehung und Spiegelung. Visuelle Prüfung der Konturenübersicht; noch kein physischer S22-Spieltest und keine abschließende Abstimmung der Schwierigkeit.

Gestaltungsreferenzen: [Polygrams](https://play.google.com/store/apps/details?id=com.mindmill.tangram.block.puzzle) für Formenvielfalt, [Tangram Master](https://play.google.com/store/apps/details?id=com.littlebeargames.tangram) für eine Sammlung unterschiedlicher Herausforderungen. Eigene Konturen und Gestaltung; daraus folgt keine Garantie vergleichbaren Markterfolgs.

## Vorherige Version 0.3.0

- 20 unterschiedliche Konturen mit je fünf Teilevarianten: 100 spielbare Rätsel.
- Erkennbare Motive und abstrakte Spielfelder, individuelle Abschlusstexte.
- Testwerkzeuge: einzelner Lösungsschritt, ein Teil offen lassen, vollständig lösen.
- Offline-Browserfassung und Android-Test-APK; noch kein marktfertiger Play-Store-Release.

`app/` enthält den Quellcode, `design/` die Formstudie und `releases/` die zugehörigen Testdateien.

Prüfung: `node app/tests.cjs` — 100 Level erfolgreich geprüft.

## Sicherung neuer Versionen

Jede neue Version wird mit Quellcode, aktualisierten Testdateien, Änderungsnotizen und einem Git-Tag gesichert und nach GitHub übertragen. Private Signierschlüssel und lokale Zugangsdaten gehören nicht ins Repository.

Android-Buildhinweise stehen in `app/README.md` und `app/build-android.ps1`. Der lokale Test-Signierschlüssel ist bewusst nicht enthalten; für Updates einer bereits installierten APK wird derselbe Schlüssel benötigt.
