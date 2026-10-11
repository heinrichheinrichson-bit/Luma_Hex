# Build-Varianten

`./build-android.ps1 -Variant developer` baut Hex & Joy Test. Standardwert developer. Bestehende Paketkennung bleibt zum Aktualisieren alter Testinstallationen erhalten. Entwicklerwerkzeuge verfügbar; Test-Icon.

`./build-android.ps1 -Variant closed` baut Hex & Joy ohne Entwicklerwerkzeuge mit eigener Paketkennung und eigenem Datenspeicher. build-variant.cjs entfernt Werkzeuge beim Bauen, statt sie lediglich zu verstecken. Es prüft übriggebliebene Referenzen und bricht bei unvollständiger Entfernung ab. variant-tests.cjs prüft die normale Oberfläche und Regeln, auch bei vorab gesetzten Testerflags.

Beide APKs werden aktuell mit dem vorhandenen lokalen Testschlüssel signiert. Dieser Workflow ist keine Play-Store-Veröffentlichung und erzeugt noch kein AAB. Werbung ist noch nicht angebunden. In der normalen Variante gibt es keine Werbesimulation und kein funktionsloses Videoangebot.
