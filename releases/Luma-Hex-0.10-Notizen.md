# Luma Hex — Aufbau der Rätselreise (0.10)

## Spielerführung
Erste Schritte: sechs eigenständige, wiederholbare Übungen. Danach führt die Reise durch Ankommen (60 Rätsel / Kapitel 1–6), Entdecken (90 / Kapitel 7–15), Knobeln (90 / Kapitel 16–24) und Meistern (60 / Kapitel 25–30). Je zehn Formen bilden ein Kapitel; Weiterspielen folgt dem nächsten offenen Eintrag. Vorhandene Lösungen und angefangene Rätsel bleiben über ihre stabilen IDs erhalten, auch wenn ihre sichtbare Nummer nun anders ist.

## Einführungsübungen
1. Ein Teil ziehen, Vorschau und angehobene Position kennenlernen.
2. Zwei Teile zu einer Form zusammensetzen; keine Drehung nötig.
3. Ein bereits gesetztes Teil verschieben und umdenken.
4. Ein Teil außerhalb loslassen und zurück in die Ablage legen.
5. Einen Zug zurücknehmen; Antippen als Alternative ausprobieren.
6. Ein festes Ankerfeld freilassen und einen Hinweis ausprobieren.

Die Übungen haben drei bis sechs Felder und ein bis drei Teile. Kleine Hinweise stehen direkt am Spielfeld. Übungsfortschritt wird separat gespeichert und gesichert; Übungen vergeben keine Sammlungseinträge. Bestehende Spieler müssen nicht noch einmal die Einführung durchlaufen. Wiederholen ist über Reise und Hilfe möglich, Überspringen während einer Übung ebenfalls.

## Einstufung statt bloßer Teilezahl
Jede Form hat einen Formtyp (Tier/Natur, Gegenstand/Symbol oder geometrisch/frei), einen Aufbau (kompakt, langgezogen, verzweigt), Besonderheiten sowie Feld- und Teilezahl. Der Design-Score berücksichtigt zusätzlich mögliche Einzelteil-Platzierungen, ähnliche Teile, Anker und schmale Bereiche. Die vier Stufen sind vorläufige Design-Einstufungen; weder gemessene Lösungszeiten noch eine garantierte menschliche Schwierigkeit. Innerhalb kleiner Gruppen werden Formtypen gemischt. Die bisherigen 24 Motivformen bleiben enthalten.

Die vollständige Zuordnung steht in Luma-Hex-Raetselkatalog-0.10.csv. App-Code: curriculum.js, mit inspectLevel() für neue Kandidaten und classify() für die vorläufige Stufe. Prüfung und Auswahl müssen weiterhin Lösbarkeit, optische Eigenständigkeit und Handy-Tauglichkeit berücksichtigen. Die normalen Rätselgeometrien und Puzzleteile sind unverändert; die Lernübungen sind zusätzliche Inhalte.

## Nächster gestalterischer Schwerpunkt
Der aktuelle Aufbau ist funktional, die Gesamtgestaltung bleibt ein eigener nächster Arbeitsschritt. Gewünscht: eine freundliche, unverwechselbare Spielwelt statt generischer Karten-/Dashboard-Optik; spielerische Übergänge, charaktervolle Formen, passende Animation und Sound. Neon- und Ringstudien bleiben Optionen, keine bereits getroffene Stilentscheidung. Eine Stilprobe sollte vor der nächsten kompletten optischen Überarbeitung gemeinsam bewertet werden.

## Prüfung
Alle 300 vorhandenen Rätsel, sechs Lernübungen, ID-Zuordnung, 30 Kapitel, Navigation, Sicherungen, Ziehen und Rückgabe werden automatisch geprüft. Navigationstests laufen im simulierten DOM. Ein visueller oder physischer S22-Test ist damit nicht ersetzt.
