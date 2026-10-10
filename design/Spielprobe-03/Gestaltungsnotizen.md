# Luma Hex — Spielprobe 03

Bedienbarer Vektorprototyp mit Pfadmenü und Spielansicht. Ausgangspunkt sind die positiv aufgenommenen glasierten Steine aus Richtung 3. Die Darstellung ist bewusst auf die Spielaufgabe ausgerichtet: ein hervorgehobener nächster Schritt, ruhige kommende Stationen, große farbige Teile, klar abgesetzte Ablage und zurückhaltende Spielaktionen. Hintergrundfarben, Glanz und Pfad sind Bestandteil derselben Zeichnung; keine Landschaft oder Gold-/Keramikrahmen.

## Orientierung an veröffentlichten Spielen
- Two Dots, offizielle Spielseite: https://www.twodots-game.com/game
- I Love Hue, offizielle Spielseite: https://i-love-hue.com/
- Block! Hexa Puzzle, offizieller Storeeintrag: https://play.google.com/store/apps/details?id=com.bitmango.go.blockhexapuzzle

Die Quellen zeigen unterschiedliche Puzzle-Präsentationen: Reise und Entdecken bei Two Dots, Farbe und visuelle Ruhe bei I Love Hue, farbige Hexagonmodule und freie Versuche bei Block! Hexa. Klare Priorität für Spielsteine und nächsten Schritt ist meine daraus abgeleitete Designentscheidung. Daraus folgt kein Nachweis, welche Optik unsere zukünftigen Nutzer bevorzugen. Keine fremden Assets wurden übernommen.

## Bedienung
Die aktuelle Station öffnet die Spielansicht. Ein Teil auswählen, danach sein Ansatzfeld antippen. Der weiße Punkt markiert den Ansatz. Platzierung wird gegen das tatsächliche 18-Felder-Spielfeld und belegte Felder geprüft; keine bloße Bildumschaltung. Gesetzte Teile antippen zum Zurücklegen. Zurück, Hinweis, Neu und die äußeren Testschaltflächen funktionieren. Nach dem Abschluss öffnet sich die nächste Station. Sammlung und Optionen haben kleine funktionale Erläuterungsansichten.

Die Studie verwendet ein einziges Rätsel und Beispiel-Fortschritt. Auch bei anderer Stationsnummer wird dasselbe Testbrett verwendet. Kein Zugriff auf bestehende App-Spielstände. Keine Drag-Steuerung in dieser Antipp-Probe; die vollständige App bleibt unverändert.

## Prüfung
Vergleich.png, Pfad.png und Spiel.png sind aus denselben Zeichenfunktionen gerendert wie die bedienbare Ansicht. Bildvergleich visuell geprüft. Platzierung, Kollision, Rücknahme, Undo, Hinweise, Abschluss, Freischaltung, Sammlung und Testaktionen im simulierten DOM geprüft. Kein physischer Gerätetest und kein bestätigter Browser-Layouttest.
