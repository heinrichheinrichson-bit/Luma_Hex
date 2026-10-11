# Luma Hex 0.23.0 – optionale Stoppuhr und persönliche Bestzeiten

Einstellungen → Stoppuhr → Spielzeit anzeigen. Standardmäßig ausgeschaltet. Die kleine Anzeige teilt sich die vorhandene Statuszeile mit der Spielfeldinformation; keine zusätzliche Zeile über dem Spielfeld. Abschluss mit benötigter Zeit und persönlicher Bestzeit; Bestzeit auch in der Motiv-Detailansicht sichtbar, wenn die Stoppuhr eingeschaltet ist.

Gezählt wird nur aktives Spielen. Menüs, Hintergrund, Fokusverlust und Android-Pause unterbrechen die Zeit. Angefangene Versuche speichern ihre Spielzeit; Wiederholen oder Zurücksetzen beginnt einen neuen Versuch. Bestzeiten zählen nur bei vollständiger Messung ohne Hinweise/Testwerkzeuge. Zurücknehmen eines Hinweises oder Testschritts macht einen Versuch nicht wieder rekordfähig. Alte angefangene Rätsel ohne vollständige Zeitmessung bekommen keine Bestzeit; Einschalten mitten im Versuch weist auf einen Neustart für Bestzeitwertung hin. Einführung getrennt. Kein Zeitlimit, keine zeitbezogenen Erfolge.

Spielzeiten, Bestzeiten und Schalter sind Teil der Spielstandsicherung. Alte Sicherungen bleiben kompatibel. Bestehende Sammlung, Steinsets, Lichtpunkte und gemeinsame Gestaltung bleiben erhalten.

Prüfungen: Timer mit kontrollierter Zeitquelle, Menü-/Sichtbarkeits-/Lebenszykluspfade im UI-Test, Einfrieren beim Abschluss, Rekordverbesserung, Ausschluss unterstützter Versuche, Fortsetzen, Einführung, Sicherungs-Roundtrip/ungültige Zeitwerte, bisherige UI-/Drag-/Erfolgs-/Abschlusstexttests. Android gebaut und Signatur geprüft. Darstellung und echter Android-Lebenszyklus auf dem S22 noch nicht physisch geprüft.
