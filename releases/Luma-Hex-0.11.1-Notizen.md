# Luma Hex 0.11.1 – mobile Bildschirmaufteilung

Android WebView verwendet jetzt ausdrücklich den Viewport aus dem HTML und die passende Anfangsskalierung. Die Spielfläche und Hauptansichten erhalten eine begrenzte Höhe mit vh-Fallback und dynamischen Viewport-Einheiten. Überlange Inhalte bleiben vertikal erreichbar. Der verschachtelte, umgekehrt laufende Scrollbereich im Startmenü wurde entfernt; der Pfad läuft von oben nach unten. Die unteren Navigationsleisten bleiben außerhalb des scrollenden Inhalts. Spielansicht kompakter; Spielstände und Fingerabstand unverändert.

Navigation und Drag-Regressionstests bestanden. APK gebaut und v3-Signatur geprüft. Kein physischer Gerätetest und keine visuelle Browserprüfung: Funktionsfähigkeit auf allen gängigen Android-Geräten ist damit noch nicht bestätigt.

Vor einer Veröffentlichung erforderlich: kleine und große Smartphones, Querformat, vergrößerte Systemschrift, Gesten- und Tasten-Navigation sowie mehrere Android/WebView-Versionen prüfen. Auf kleinem Bildschirm dürfen Inhalte scrollen, aber keine Bedienelemente dauerhaft abgeschnitten sein. Nutzer-S22 als erster physischer Abnahmetest.
