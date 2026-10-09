# Version 0.8.1 — 300 unterschiedliche Rätsel

240 neue abstrakte Spielfelder in zwölf abwechselnden Bauweisen ergänzen die bisherigen 60. 300 Rätsel, 30 Kapitel, 77 Felder mit blockierten Ankern. Die neuen Felder beginnen bei Nummer 61. Keine Farb-, Dreh- oder Spiegelvarianten als zusätzliche Level. Die Auswahl aus 1.244 Kandidaten ist deterministisch; exakte und nahe geometrische Wiederholungen werden gefiltert. Alle neuen Spielfelder haben 22–46 belegbare Zellen und höchstens zwölf Teile.

Rätselreise mit Kapitelauswahl, Blättertasten und direktem Sprung zu einer Nummer. Jeweils zehn Rätselvorschauen bzw. 20 Sammlungsbilder werden gleichzeitig aufgebaut. Die bisherigen 60 Level und alle Fingerabstand-Einstellungen bleiben unverändert und mit 0.7 kompatibel.

Prüfungen: `node tests.cjs`, `node library-tests.cjs`, `node ui-tests.cjs`, `node save-tests.cjs`, `node drag-tests.cjs`. Alle bestanden. Die 240 neuen Spielfeldgrafiken wurden in sechs Atlasseiten visuell geprüft. APK gebaut und signaturgeprüft. Bedienabläufe sind im simulierten DOM geprüft, noch nicht auf einem physischen S22. Schwierigkeit und Ausbalancierung brauchen Spieltests. Details in den Versionsnotizen.

## Vorherige Entwicklungsstände

# Version 0.7.0 — Ziehen mit freier Sicht und Anker-Rätsel

Das ganze Puzzleteil schwebt oberhalb des Fingers oder Stifts. Der Abstand wird aus seiner tatsächlichen Größe berechnet und ist zwischen 24 und 100 CSS-Pixeln einstellbar. Direkter Wechsel bereits gesetzter Teile, Rückgabe in die Ablage, ungültige Ablagen ohne Verlust der vorherigen Position und Rückgängig. Maus, Antippen und Tastatur bleiben nutzbar.

Überarbeitete Spielfeldgröße, offene Teileablage, plastischere Steine und tiefere Blautöne. Noch keine Festlegung auf die separat gespeicherten Neon-/Ringdesigns.

60 unterschiedliche Rätsel, darunter zehn neue Spielfelder mit blockierten Ankerzellen im sechsten Kapitel. Die ersten 50 Teileaufteilungen bleiben unverändert. Alle vier Testsuiten (tests.cjs, ui-tests.cjs, save-tests.cjs, drag-tests.cjs) bestehen. Bedienabläufe werden im simulierten DOM geprüft, nicht auf einem echten Gerät. Grafikvorschau aus tatsächlichen Spielfeld- und Teile-SVGs gerendert und visuell geprüft. APK gebaut und Signatur geprüft.

Der S22-Test von Fingergefühl, Abstand und responsivem Layout steht aus. Die Gestaltung ist weiter in Entwicklung; kein fertiger Play-Store-Release.

Langfristiges Ziel: mehrere hundert bis möglichst etwa tausend abwechslungsreiche Rätsel, sobald Bedienung und Gestaltung überzeugen. Außenformen, Aussparungen, Ankerfelder und passende Teilkombinationen bilden den Werkzeugkasten. Automatische Lösbarkeits- und Duplikatprüfungen ergänzen visuelle Auswahl und Spieltests. Keine künstliche Vergrößerung der Hauptreihe durch wiederholte Motive mit neuen Teilevarianten.

## Vorherige Entwicklungsstände

# Version 0.6.0 — 50 Lichtstücke und Spielstandsicherung

50 unterschiedliche Spielfelder in fünf Kapiteln. 20 neue Konturen, abwechselnd Figuren und abstrakte Formen: Eistüte, Apfel, Kaktus, Schildkröte, Ballon, Glocke, Burg, Kerze, Musiknote und Vogel sowie zehn neue freie Formen. Alle haben eigene Abschlusstexte. Keine Spiegelungen, Drehungen oder Teilevarianten als zusätzliche Level. Die ersten 30 Rätsel behalten ihre Teile und Indizes; Spielstände aus 0.5 bleiben kompatibel.

## Spielfluss und Bedienung

Die Rätselreise unterscheidet Lösungen ohne Hinweise, mit Hinweis und Testansichten. Automatische Testabschlüsse schalten die Sammlung weiter frei, werden aber nicht als eigene Leistung gezählt. Bessere Ergebnisse können Testansichten ersetzen. Ältere Abschlüsse ohne Aufzeichnung bleiben als gesammelt markiert. Größere Mindestflächen für wichtige Schaltflächen und Unterstützung der Systemeinstellung für reduzierte Bewegung.

## Sicherung

In den Einstellungen unter Spielstand sichern & laden: JSON-Datei speichern oder laden; alternativ Sicherungscode kopieren und einfügen. Android verwendet die System-Dateiauswahl, die Browserfassung einen Download und Dateiupload. Jede importierte Sicherung wird vor dem Übernehmen geprüft und als Vorschau angezeigt. Geprüft werden Format, Katalog, Indizes, Teilepositionen und Überlappungen. Dateigröße maximal 1 MB. Sammlung, Einstellungen, angefangene Rätsel und Ergebnisarten sind enthalten. Kein Konto und keine Cloud nötig.

## Prüfungen und Grenzen

`node tests.cjs`, `node ui-tests.cjs`, `node save-tests.cjs`. 50 lösbare, zusammenhängende und unter Drehung/Spiegelung unterschiedliche Konturen; Hinweise, Testwerkzeuge, Kollisionen und Einstiegslimits geprüft. Bedienabläufe, Migration, Sicherungsvorschau und Übernahme im simulierten DOM geprüft. Neue Konturenübersicht visuell geprüft. Die ersten 30 Level wurden mit 0.5 verglichen und sind unverändert. APK wird gebaut und signaturgeprüft.

Noch kein physischer Samsung-S22-Test. Die native Dateiauswahl und das visuelle Layout auf dem Gerät müssen praktisch geprüft werden. Die Schwierigkeit ist konstruktiv abgestimmt, noch nicht durch Spielertests validiert. Keine Werbung oder Bezahlfunktionen eingebaut; kein fertiger Play-Store-Release. Die Neon-/Ringentwürfe bleiben separat.

## Gestaltungsreferenzen

[Polygrams](https://play.google.com/store/apps/details?id=com.mindmill.tangram.block.puzzle): unterschiedliche Puzzleformen und Levelpakete. [Tangram Master](https://play.google.com/store/apps/details?id=com.littlebeargames.tangram): Sammlung verschiedener Herausforderungen. Eigene Geometrien, Texte und Assets. Einzelne öffentliche Rezensionen sind Hinweise, keine repräsentative Marktstudie.

## Vorherige Entwicklungsstände

# Version 0.5.0 — Rätselreise und neue Teileaufteilungen

30 unterschiedliche Spielfelder, keine neuen Konturen in diesem Release. Die ersten drei Rätsel haben fünf bis sechs Teile. Jede Aufteilung wird deterministisch aus 24 Kandidaten ausgewählt, mit einer Bewertung für Kleinteile, wiederholte Teilformen und Zielanzahl. Spätere Level wechseln zwischen kompakten und umfangreicheren Kombinationen; die tatsächliche Schwierigkeit ist noch nicht durch Spieltests validiert.

Die Rätselreise zeigt drei Kapitel, gelöste und angefangene Rätsel und führt zum ersten ungelösten Rätsel. Antippen des Logos oder der Schaltfläche in den Einstellungen öffnet die Reise. Kapitelabschluss wird beim Lösen angezeigt. Die bisherige Steinoptik bleibt bestehen; Neon- und Ringvarianten bleiben eine separate Designstudie.

Speicherung: Gesammelte Konturen und Einstellungen aus 0.4 bleiben erhalten. Angefangene Platzierungen werden wegen geänderter Teileaufteilungen neu begonnen. Automatische Testabschlüsse zählen weiterhin zur Sammlung.

Prüfungen: `node tests.cjs` und `node ui-tests.cjs`. Letzterer prüft Start, Migration, Navigation und Testaktionen in einem simulierten DOM; er ersetzt keinen echten Browser- oder S22-Test. APK gebaut und Signatur geprüft.

## Vorherige Entwicklungsstände

# Version 0.4.0 — unterschiedliche Spielfelder

30 eigenständige Konturen, jedes Spielfeld einmal in der Hauptreihe. 10 neue Spielfelder; keine zusätzlichen Level durch Drehung, Spiegelung oder neue Teilevarianten. 14 Figuren und 16 abstrakte Formen, drei Kapitel. Testwerkzeuge bleiben erhalten. Fortschritt der bisherigen Konturen wird aus Version 0.3 übernommen; Platzierungen werden nur für deren erste Fassung übernommen.

Automatisch geprüft: Lösungen, zusammenhängende Spielfelder und Teile, Kollisionen, Hinweise, Testwerkzeuge sowie Einzigartigkeit unter Drehung und Spiegelung. Konturenübersicht visuell geprüft. Noch kein Test auf einem physischen Samsung S22; Schwierigkeit noch nicht durch Spieltests abgestimmt.

## Vorheriger Entwicklungsstand

# Luma Hex — Motiv-Edition 0.2

## Sammlung 0.3 (aktueller Entwicklungsstand)

20 neu gestaltete Grundformen: zwölf Figuren und acht abstrakte Formen, in gemischter Reihenfolge. Die drei freigegebenen Konturen aus der Formstudie sind integriert. Der aktuelle Umfang beträgt 100 Rätsel durch fünf unterschiedliche Teilaufteilungen pro Grundform. Das sind ausdrücklich 20 Konturen und nicht 100 verschiedene Silhouetten. Jeder Abschluss hat einen eigenen Text. Beim vollständigen Füllen erscheinen die Motivfarben; die Aufteilung in Puzzleteile bleibt davon unabhängig. Sammlung, Levelauswahl und Testwerkzeuge berücksichtigen alle 100 Rätsel.

Die Sammlung verwendet einen neuen Speicherbereich, da Konturen und Levelreihenfolge geändert wurden. Alte Speicherstände bleiben unangetastet; die Klang-/Vibrationspräferenzen der Motiv-Edition werden übernommen. Die neue Reihe beginnt bei Level 1.

Geprüft: Lösbarkeit, Grenzen, zusammenhängende Konturen und Teile, Hinweise und drei Testaktionen für alle 100 Rätsel. Sämtliche Formen als Übersicht gerendert und visuell geprüft. Noch keine automatisierte Browserprüfung dieser Version und kein Test auf dem S22. Die bisherigen Prüfberichte unten beziehen sich auf ältere Versionen. Die weitere Entscheidung zwischen wiederkehrenden Motiven und ausschließlich verschiedenen Spielfeldern ist noch offen.

## Testwerkzeuge (Version 0.2.1)

Unter den Spielaktionen „Testwerkzeuge“ aufklappen. „Ein Schritt“ setzt das nächste Teil an seinen hinterlegten Lösungsplatz. „1 Teil offen“ stellt die Lösung bis auf das letzte ganze Puzzleteil her. „Alles lösen“ löst das Motiv vollständig und startet den normalen Abschluss mit Animation, Text und Sammlungseintrag. Bereits gesetzte Teile werden dabei bei Bedarf neu angeordnet. Die Aktionen lassen sich über „Zurück“ rückgängig machen. Voriges/nächstes Motiv erlaubt schnelles Durchsehen. Automatische Abschlüsse werden als Testlauf bezeichnet und bleiben als Fortschritt gespeichert.

Eigenständig gestaltetes Hexagon-Puzzle mit zehn Silhouetten: Schmetterling, Rakete, Herz, Blume, Ring, Stern, Schildkröte, Krone, Segelboot und Katze. Jedes Motiv hat drei reproduzierbare Rätselvarianten und drei eigene Abschlusstexte: insgesamt 30 Rätsel und 30 kleine Momente. Die drei Ateliers verwenden unterschiedliche Teilgrößen; die Schwierigkeitskurve ist noch nicht redaktionell abgestimmt.

Gelöste Motive und ihre freigeschalteten Texte bleiben in der Sammlung. Angefangene Rätsel werden einzeln gespeichert. Die neue Motiv-Edition verwendet einen eigenen Speicherstand; Daten des ersten Prototyps bleiben unangetastet. Klang- und Vibrationspräferenzen werden übernommen.

## Auf dem Samsung S22

Die Datei `Luma-Hex-Test.apk` aus dem übergeordneten Ordner auf das Handy übertragen und dort öffnen. Android kann eine Freigabe zur Installation für die verwendete Datei-App anfordern. Die APK ist eine lokal signierte Testversion. Kein Entwicklerkonto und keine Anmeldung erforderlich. Android 11 oder neuer.

Ein Teil ziehen oder antippen und danach ein Zielfeld antippen. Der weiße Lichtpunkt des Teils entspricht dem Zielfeld. Ein gesetztes Teil antippen, um es zurückzunehmen. Hinweise setzen ein Teil der hinterlegten Lösung und geben bei Bedarf überlappende Teile zurück. Rückgängig nimmt auch einen Hinweis zurück. Das Menü enthält die Levelauswahl und die Klang-/Vibrationsschalter.

## Am Computer

`node server.cjs` in diesem Ordner ausführen und `http://localhost:4173` öffnen. Die Webversion funktioniert nach dem ersten Laden auf localhost offline. Die Android-Version enthält sämtliche Spieldateien und braucht zu keinem Zeitpunkt Internetzugriff. Fortschritt bleibt lokal gespeichert.

## Entwicklung

- `node tests.cjs`: prüft alle 30 Rätsel auf deterministische Erzeugung, zusammenhängende Teile, vollständige Lösbarkeit, Feldgrenzen und Kollisionen.
- `powershell -NoProfile -ExecutionPolicy Bypass -File build-android.ps1`: erstellt die APK mit lokal installiertem Android-SDK 35 und Android Studio JBR. Der Testschlüssel liegt ausschließlich im Workspace unter `work/android-build` und ist kein Veröffentlichungsschlüssel.
- Keine externen Grafik-, Schrift- oder Audio-Abhängigkeiten. Kristalle und Icon sind Vektorgrafiken; Klänge werden lokal synthetisiert.

## Geprüft und offen

Geprüft: alle 30 Motivrätsel auf zusammenhängende Felder und Teile, vollständige Lösbarkeit, Bildschirmgrenzen, Kollisionen, vorhandene Texte und gültige, zum Ziel führende Hinweise. Im Browser: Einstieg, Antippen, Entfernen und erneutes Einsetzen, Levelabschluss, individuelle Texte, Sammlung, gesperrte Motive, Motivdetails, Levelwechsel und Speicherung einzelner angefangener Rätsel nach Wechsel und Neuladen. Darstellung mit 360 × 780 und 360 × 700 Browser-Viewport geprüft. APK kompiliert und Signatur geprüft. Noch kein Test auf einem echten Android-Gerät; Touch-Dragging, Haptik und Klang benötigen den S22-Test.

Dies ist eine spielbare Produktstudie, keine Play-Store-Veröffentlichung. Für die Produktversion folgen insbesondere eine bessere Leveldramaturgie, weitere Animationen, Onboarding, Gerätetests, Release-Build mit AAB und eigenem Veröffentlichungsschlüssel, Store-Material, Datenschutz sowie gegebenenfalls Werbung und Käufe. Der Arbeitstitel ist noch nicht auf Verfügbarkeit geprüft.
