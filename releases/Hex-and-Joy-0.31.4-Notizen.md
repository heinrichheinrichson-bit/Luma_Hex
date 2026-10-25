# Hex & Joy 0.31.4 – Werbepausen über den Weiter-Button

Versionscode 69, com.thinkheim.hexandjoy.

Ursache: Der Weiter-Button hielt die beim Start gebundene Funktion aus der werbefreien Basisvariante fest, während der native Anbieter später requestNext ersetzte. Die Buttonbindung löst die aktuelle Funktion jetzt erst beim Klick auf.

Regression vor Korrektur reproduziert: realer next.onclick-Aufruf startet trotz erfüllter Grenzen keine Interstitial-Anfrage. Nach Korrektur fordert derselbe Button die Anzeige an; Schließen setzt genau einmal fort, Ladefehler setzt ohne Rücksetzen der Grenzen fort. Vorige Tests hatten requestNext direkt aufgerufen und diesen Integrationsfehler übersehen.

Native-Werbe-, Varianten-, UI-, Werbegrenzen- und Sprachtests bestanden. Interne AAB/APK und separate Entwickler-APK gebaut und signaturgeprüft. Einstellungen aus 0.31.3 bleiben erhalten. Kein physischer S22-Test.
