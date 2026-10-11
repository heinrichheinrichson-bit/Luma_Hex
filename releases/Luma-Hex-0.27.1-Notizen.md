# Luma Hex 0.27.1 – Hinweise als Tester

Einstellungen → Entwicklung & Tests → Hinweisvorrat testen enthält zwei getrennte, dauerhaft lokal gespeicherte Schalter:
- Unbegrenzte Hinweise: Vorrat wird nicht verbraucht, auch bei null Hinweisen nutzbar. Anwendung markiert den Rätsellauf als Test, keine Bestzeiten/Tages- oder Erfolgsbelohnungen für diesen Lauf.
- Hinweis-Werbung simulieren: Unbegrenzt ausschalten, Vorrat auf drei setzen oder leeren. Bei leerem Vorrat erscheint im Hinweisdialog ein aktiver Testvideo-Knopf. Öffnet ausdrücklich unechte Anzeige; Abschluss gibt einmal +1, öffnet Hinweisdialog erneut und setzt Werbeabstand zurück. Kein echter Anbieter eingebaut.

Beide Optionen unabhängig von Steinset-Freischaltung und Werbepausen-Test. Standard aus. Regulärer Vorrat und Nachfüllung bleiben erhalten. Zusätzliche automatische UI-Tests: unbegrenzt bei null, Testkennzeichnung, gespeicherte Schalter, Simulation im Spiel, keine Doppelbelohnung und Rückkehr zum regulären Limit. Bestehende Hinweis-/Werbe-/UI-Prüfungen bestanden. APK gebaut und signaturgeprüft.
