# Layoutkorrektur 0.21.3

Ursache: Die selbst geschriebene CSS-Bereinigung trennte Selektoren an Kommas, ohne vorher Kommentare zu entfernen. Kommentare mit Kommas oder Bezügen auf entfernte Selektoren wurden beschädigt. Nachfolgende CSS-Regeln wurden dadurch vom Browser als Kommentar behandelt, darunter Sammlungsraster, Bildgrößen und Seitennavigation.

Korrektur: Stylesheet aus dem intakten Ausgangsstand neu aufgebaut, Kommentare vor der Selektorbereinigung entfernt, die getrennten Start-/Reiseregeln übernommen. Keine neue gestalterische Richtung. Prüfung auf geschlossene Kommentare/Blöcke und aktive Schlüsselregeln ergänzt. UI-Tests bestanden, Android-Signatur geprüft. Visuelle Prüfung auf S22 weiterhin offen.
