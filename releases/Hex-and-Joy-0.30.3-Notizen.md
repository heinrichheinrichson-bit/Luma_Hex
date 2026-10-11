# Hex & Joy 0.30.3
Fehler behoben: Die sekündliche Timer-Aktualisierung setzte die Hinweis-Werbesimulation zurück. Der Simulationsstatus bleibt nun erhalten. Nach drei Sekunden wird die Belohnungsschaltfläche aktiviert; Abschließen gibt genau einen Hinweis. Wiederholbar bei leerem Vorrat.
Regressionstest umfasst wiederholte refreshHints-Aufrufe während der Simulation, vorzeitigen Abschluss, Freigabe nach Ablauf und einmalige Belohnung. Varianten-, UI- und Übersetzungstests bestanden. Beide Android-Varianten gebaut und signaturgeprüft. Kein physischer Gerätetest.
