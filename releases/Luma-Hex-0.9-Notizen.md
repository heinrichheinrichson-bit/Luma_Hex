# Luma Hex 0.9.0

## Das neue UI
- Startseite mit „Weiterpuzzeln“, aktueller Form, Sammlung und Kapitelfortschritt.
- Vier Hauptbereiche mit fester Navigation: Start, Rätsel, Sammlung, Einstellungen.
- Größere Rätselkarten, Filter Alle / Offen / Gelöst, Kapitelwahl und eingeklappter Nummernsprung.
- Neu gestaltete Sammlung, Motivdetails, Abschluss, Einführung, Hilfe und Sicherung.
- Gruppierte Einstellungen, verständliche Schalter und gut erreichbarer Fingerabstand.
- Testwerkzeuge: Einstellungen → Entwicklung & Tests. Aktionen öffnen das Spielfeld.
- Zurücksetzen mit Bestätigung; Android-Zurück folgt der Ansichtshierarchie.
- Gemeinsames Designsystem mit tiefen Blautönen, Mint-Akzenten, klarer Typografie und größeren Bedienelementen. Die Kristalldesign-Auswahl bleibt offen.

## Ziehen
Außerhalb des Spielfelds losgelassene Teile landen automatisch wieder unten. Maßgeblich ist die schwebende Position des Teils samt Fingerabstand; Ablegen über der Ablage bleibt ebenfalls möglich. Ein unpassender Zug innerhalb der Form lässt ein gesetztes Teil an seinem bisherigen Platz. Zurücknehmen und Abbruch bleiben möglich.

## Bestand & Prüfungen
Alle 300 Rätsel, Sammlung, Sicherungen und persönlicher Fingerabstand bleiben erhalten. Gelöste Rätsel werden beim normalen Weiterspielen weiter übersprungen.

Bestanden: tests.cjs, library-tests.cjs, ui-tests.cjs, drag-tests.cjs, save-tests.cjs. Neue Regressionen prüfen Hauptnavigation, Wiederaufnahme, Filter/Leerzustände, Zurück-Verhalten, Bestätigung vor Zurücksetzen, sichtbare Testergebnisse und Ablage außerhalb des Spielfelds. Android-APK gebaut und signaturgeprüft. Kein physischer S22-Test; Navigation im simulierten DOM, kein bestätigter visueller Browser-/Gerätetest.
