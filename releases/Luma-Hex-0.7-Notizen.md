# Luma Hex 0.7.0 — freie Sicht beim Ziehen

## Bedienung

- Beim Ziehen mit Finger oder Stift bleibt das gesamte Teil oberhalb des Berührungspunkts. Der Abstand berücksichtigt die tatsächliche Höhe des Teils statt nur einen festen Versatz des Ansatzpunkts.
- Einstellbarer Abstand von 24 bis 100 CSS-Pixeln; Standard 48. Vorschau und Loslassen verwenden denselben Ansatzpunkt.
- Bereits gesetzte Teile lassen sich direkt auf dem Spielfeld weiterziehen. Eine gültige neue Position muss nicht der gespeicherten Musterlösung entsprechen.
- Zurückziehen in die Teileablage nimmt ein Teil heraus. Eine ungültige Ablage oder ein abgebrochener Zug belässt es an seinem bisherigen Platz. Rückgängig bleibt möglich.
- Antippen und Tastaturbedienung bleiben als Alternative erhalten.

## Gestaltung und Rätsel

Größeres Spielfeld, eine deutlicher getrennte offene Teileablage, überarbeitete plastische Facetten und tiefere Blautöne im Hintergrund. Die noch nicht entschiedenen Neon-/Ringentwürfe bleiben separat.

Zehn neue abstrakte Rätsel mit sichtbaren blockierten Ankerfeldern, erreichbar im sechsten Kapitel ab Rätsel 51. Insgesamt 60 geometrisch verschiedene Spielfelder. Die vorherigen 50 behalten ihre Teileaufteilungen und sind mit bestehenden Spielständen kompatibel.

## Prüfungen

Engine, Hindernisse, Hinweise, Sicherungsdateien und Bedienabläufe im simulierten DOM geprüft. Zusätzliche Ziehprüfungen für Abstand, Vorschau/Ablage, freies Umsetzen, Rückgabe in die Ablage, ungültige Ablagen, Rückgängig und Abbruch. Grafikvorschau aus den tatsächlichen Spielfeld- und Teile-SVGs gerendert und visuell geprüft; sie ist kein Gerätescreenshot. APK gebaut und Signatur geprüft.

Der praktische Test auf dem Samsung S22 steht aus. Insbesondere Abstand, Fingergefühl und responsives Layout müssen am Gerät bewertet werden. Die Gestaltung bleibt in Entwicklung; diese Version ist kein fertiger Play-Store-Release.

## Ausbauziel

Mehrere hundert, später möglichst etwa tausend abwechslungsreiche Rätsel. Voraussetzung sind überzeugende Optik und stabile Bedienung. Der Levelbau soll Außenformen, Aussparungen, blockierte Felder und Teilekombinationen verbinden. Automatische Prüfungen sichern Lösbarkeit und erkennen exakte geometrische Wiederholungen auch unter Drehung und Spiegelung. Auswahl, Erkennbarkeit und Schwierigkeitskurve brauchen zusätzlich visuelle Prüfung und Spieltests. Wiederholte Motive mit anderen Teilen sollen die Hauptreihe nicht künstlich vergrößern.
