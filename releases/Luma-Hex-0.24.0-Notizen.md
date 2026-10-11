# Luma Hex 0.24.0 – gemeinsamer Hinweisvorrat

Drei Hinweise zum Start für die ganze App. Ein erfolgreich eingesetzter Hinweis verbraucht einen Punkt nach Bestätigung. Einführung kostenlos; Abbrechen, Rätselwechsel oder Undo erstatten bzw. verbrauchen nichts zusätzlich. Ein Hinweis kehrt alle zwei Stunden zurück, maximal drei durch kostenlose Regeneration. Offline-Zeit wird berücksichtigt; weiterer Verbrauch setzt die laufende Wartezeit nicht zurück.

Das Hinweissymbol zeigt den Vorrat. Das Hinweisfenster zeigt den nächsten kostenlosen Hinweis. Werbebelohnungen können über drei hinaus angesammelt werden; bei drei oder mehr pausiert die Regeneration. Spielstand und Sicherung enthalten Vorrat und Regenerationszeit.

Echte Werbevideos sind noch nicht angebunden. Bei leerem Vorrat ist der Videozugang deshalb als nicht verfügbar markiert; er erzeugt keine falsche Belohnung. Unter Einstellungen → Entwicklung & Tests → Hinweisvorrat testen lassen sich Vorrat, Werbebelohnung und zwei Stunden Wartezeit simulieren.

Geprüft: gemeinsamer Verbrauch, Bestätigung/Abbruch, Doppeltipp, kostenlose Einführung, Undo/Rätselwechsel, exakte Regeneration, Offline-Zeit, Regenerationsgrenze, Werbeüberschuss, doppelte Belohnungskennung, rückwärts geänderte Uhrzeit und Sicherung. UI-/Save-/Drag-/Timer-/Erfolgstests bestanden, APK gebaut und Signatur geprüft. Physische Darstellung auf S22 noch nicht geprüft.
