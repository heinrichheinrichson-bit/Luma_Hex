(function(root){'use strict';const lines=[
  {
    "id": "humor-0",
    "kind": "humor",
    "text": "Du hast gerade sehr erfolgreich auf ein Display gestarrt.",
    "retired": true
  },
  {
    "id": "humor-1",
    "kind": "humor",
    "text": "Nicht jede Lücke braucht sofort eine Antwort. Diese hier schon.",
    "retired": true
  },
  {
    "id": "humor-2",
    "kind": "humor",
    "text": "Das letzte Teil wusste natürlich die ganze Zeit, wo es hingehört.",
    "retired": true
  },
  {
    "id": "humor-3",
    "kind": "humor",
    "text": "Ein guter Plan. Mit gelegentlichen kreativen Unterbrechungen.",
    "retired": true
  },
  {
    "id": "humor-4",
    "kind": "humor",
    "text": "Dein Finger hat geliefert. Der Kopf behauptet, er sei beteiligt gewesen.",
    "retired": true
  },
  {
    "id": "humor-5",
    "kind": "humor",
    "text": "Das sah zwischendurch bestimmt nach Absicht aus.",
    "retired": true
  },
  {
    "id": "humor-6",
    "kind": "humor",
    "text": "Offizieller Zwischenstand: Du eins, Chaos null.",
    "retired": true
  },
  {
    "id": "humor-7",
    "kind": "humor",
    "text": "Für heute hast du mindestens eine Sache ordentlich aufgeräumt.",
    "retired": true
  },
  {
    "id": "humor-8",
    "kind": "humor",
    "text": "Niemand hat gesehen, wie oft du das Teil verschoben hast.",
    "retired": true
  },
  {
    "id": "humor-9",
    "kind": "humor",
    "text": "Eine runde Sache. Trotz der vielen Ecken.",
    "retired": true
  },
  {
    "id": "humor-10",
    "kind": "humor",
    "text": "Du darfst jetzt wissend nicken.",
    "retired": true
  },
  {
    "id": "humor-11",
    "kind": "humor",
    "text": "Das Rätsel ist fertig. Der Kaffee leider nicht automatisch.",
    "retired": true
  },
  {
    "id": "humor-12",
    "kind": "humor",
    "text": "Die Teile haben ihre Meinungsverschiedenheiten beigelegt.",
    "retired": true
  },
  {
    "id": "humor-13",
    "kind": "humor",
    "text": "Hier könnte eine dramatische Siegesrede stehen. Wir lassen dich lieber spielen.",
    "retired": true
  },
  {
    "id": "humor-14",
    "kind": "humor",
    "text": "Der letzte freie Platz war kein Parkplatz für Zweifel.",
    "retired": true
  },
  {
    "id": "humor-15",
    "kind": "humor",
    "text": "Einmal kurz innerlich applaudieren reicht völlig.",
    "retired": true
  },
  {
    "id": "humor-16",
    "kind": "humor",
    "text": "Dein nächster Geistesblitz muss nicht beim Duschen warten.",
    "retired": true
  },
  {
    "id": "humor-17",
    "kind": "humor",
    "text": "Sehr gut. Jetzt kannst du wieder behaupten, nur kurz aufs Handy geschaut zu haben.",
    "retired": true
  },
  {
    "id": "humor-18",
    "kind": "humor",
    "text": "Die Lösung war die ganze Zeit im Bildschirm. Frech eigentlich.",
    "retired": true
  },
  {
    "id": "humor-19",
    "kind": "humor",
    "text": "Auch ein Umweg zählt als Denksport.",
    "retired": true
  },
  {
    "id": "humor-20",
    "kind": "humor",
    "text": "Heute wurden hier Ecken versorgt.",
    "retired": true
  },
  {
    "id": "humor-21",
    "kind": "humor",
    "text": "Ein Rätsel weniger. Die Sache mit den verschwundenen Socken bleibt offen.",
    "retired": true
  },
  {
    "id": "humor-22",
    "kind": "humor",
    "text": "Ganz ohne Hammer passend gemacht.",
    "retired": true
  },
  {
    "id": "humor-23",
    "kind": "humor",
    "text": "Das war kein Herumschieben. Das war angewandtes Nachdenken.",
    "retired": true
  },
  {
    "id": "thought-0",
    "kind": "thought",
    "text": "Eine Pause muss sich nicht erst verdient machen.",
    "retired": true
  },
  {
    "id": "thought-1",
    "kind": "thought",
    "text": "Manche Ideen brauchen einen zweiten Anlauf, keinen größeren Druck.",
    "retired": true
  },
  {
    "id": "thought-2",
    "kind": "thought",
    "text": "Nicht jeder Umweg ist verlorene Zeit.",
    "retired": true
  },
  {
    "id": "thought-3",
    "kind": "thought",
    "text": "Du musst nicht den ganzen Weg kennen, um den nächsten Schritt zu machen.",
    "retired": true
  },
  {
    "id": "thought-4",
    "kind": "thought",
    "text": "Manchmal verändert eine andere Frage mehr als eine schnelle Antwort.",
    "retired": true
  },
  {
    "id": "thought-5",
    "kind": "thought",
    "text": "Geduld kann auch bedeuten, kurz etwas anderes zu versuchen.",
    "retired": true
  },
  {
    "id": "thought-6",
    "kind": "thought",
    "text": "Ein freier Kopf darf gelegentlich unfertige Gedanken haben.",
    "retired": true
  },
  {
    "id": "thought-7",
    "kind": "thought",
    "text": "Du darfst eine Idee verwerfen, ohne den Versuch zu bereuen.",
    "retired": true
  },
  {
    "id": "thought-8",
    "kind": "thought",
    "text": "Aufmerksam sein ist manchmal genug.",
    "retired": true
  },
  {
    "id": "thought-9",
    "kind": "thought",
    "text": "Nicht alles, was langsam geht, steht still.",
    "retired": true
  },
  {
    "id": "thought-10",
    "kind": "thought",
    "text": "Ein guter Moment muss nicht besonders groß sein.",
    "retired": true
  },
  {
    "id": "thought-11",
    "kind": "thought",
    "text": "Du darfst etwas nur deshalb tun, weil es dir Freude macht.",
    "retired": true
  },
  {
    "id": "thought-12",
    "kind": "thought",
    "text": "Ordnung ist hilfreich. Neugier bringt dich auch weiter.",
    "retired": true
  },
  {
    "id": "thought-13",
    "kind": "thought",
    "text": "Wer umdenkt, bleibt nicht am selben Gedanken hängen.",
    "retired": true
  },
  {
    "id": "thought-14",
    "kind": "thought",
    "text": "Ein anderer Blickwinkel ist noch kein anderer Mensch.",
    "retired": true
  },
  {
    "id": "thought-15",
    "kind": "thought",
    "text": "Du kannst eine Pause machen, bevor du eine brauchst.",
    "retired": true
  },
  {
    "id": "thought-16",
    "kind": "thought",
    "text": "Die nächste Aufgabe muss nicht sofort anfangen.",
    "retired": true
  },
  {
    "id": "thought-17",
    "kind": "thought",
    "text": "Nicht jede freie Minute muss produktiv sein.",
    "retired": true
  },
  {
    "id": "thought-18",
    "kind": "thought",
    "text": "Ein Versuch darf einfach ein Versuch sein.",
    "retired": true
  },
  {
    "id": "thought-19",
    "kind": "thought",
    "text": "Manche Antworten kommen, wenn man ihnen Platz lässt.",
    "retired": true
  },
  {
    "id": "thought-20",
    "kind": "thought",
    "text": "Du musst heute nicht alles zusammensetzen.",
    "retired": true
  },
  {
    "id": "thought-21",
    "kind": "thought",
    "text": "Eine kleine Sache bewusst zu tun, kann angenehm sein.",
    "retired": true
  },
  {
    "id": "thought-22",
    "kind": "thought",
    "text": "Es ist erlaubt, sich über Kleinigkeiten zu freuen.",
    "retired": true
  },
  {
    "id": "thought-23",
    "kind": "thought",
    "text": "Du darfst zufrieden sein, ohne schon den nächsten Plan zu haben.",
    "retired": true
  },
  {
    "id": "motivation-0",
    "kind": "motivation",
    "text": "Das Rätsel ist fertig. Dieser Moment gehört dir.",
    "retired": true
  },
  {
    "id": "motivation-1",
    "kind": "motivation",
    "text": "Die letzte freie Stelle ist jetzt besetzt.",
    "retired": true
  },
  {
    "id": "motivation-2",
    "kind": "motivation",
    "text": "Du kannst kurz stehen bleiben und das Ergebnis ansehen.",
    "retired": true
  },
  {
    "id": "motivation-3",
    "kind": "motivation",
    "text": "Ein weiterer Abschnitt deiner Reise ist geschafft.",
    "retired": true
  },
  {
    "id": "motivation-4",
    "kind": "motivation",
    "text": "Heute hast du eine knifflige Frage weniger vor dir.",
    "retired": true
  },
  {
    "id": "motivation-5",
    "kind": "motivation",
    "text": "Eine vollständige Form. Ein guter Moment zum Durchatmen.",
    "retired": true
  },
  {
    "id": "motivation-6",
    "kind": "motivation",
    "text": "Dein Tempo darf dein eigenes bleiben.",
    "retired": true
  },
  {
    "id": "motivation-7",
    "kind": "motivation",
    "text": "Hier wartet keine Stoppuhr auf dich.",
    "retired": true
  },
  {
    "id": "motivation-8",
    "kind": "motivation",
    "text": "Das hier ist ein guter Punkt zum Zufriedensein.",
    "retired": true
  },
  {
    "id": "motivation-9",
    "kind": "motivation",
    "text": "Der nächste Versuch beginnt wieder mit einer leeren Form.",
    "retired": true
  },
  {
    "id": "motivation-10",
    "kind": "motivation",
    "text": "Ein neues Ergebnis für deine Sammlung.",
    "retired": true
  },
  {
    "id": "motivation-11",
    "kind": "motivation",
    "text": "Du musst den nächsten Schritt noch nicht kennen.",
    "retired": true
  },
  {
    "id": "motivation-12",
    "kind": "motivation",
    "text": "Du darfst ruhig ein bisschen stolz auf dich sein.",
    "retired": true
  },
  {
    "id": "motivation-13",
    "kind": "motivation",
    "text": "Ein kleiner Erfolg muss nicht groß angekündigt werden.",
    "retired": true
  },
  {
    "id": "motivation-14",
    "kind": "motivation",
    "text": "Auch ein Neustart gehört zum Spielen dazu.",
    "retired": true
  },
  {
    "id": "motivation-15",
    "kind": "motivation",
    "text": "Für heute darf das schon genug sein.",
    "retired": true
  },
  {
    "id": "motivation-16",
    "kind": "motivation",
    "text": "Die letzte Ecke ist jetzt auch ausgefüllt.",
    "retired": true
  },
  {
    "id": "motivation-17",
    "kind": "motivation",
    "text": "Ein kleines Ergebnis, das du dir ruhig ansehen darfst.",
    "retired": true
  },
  {
    "id": "motivation-18",
    "kind": "motivation",
    "text": "Diese Form hast du hinter dir.",
    "retired": true
  },
  {
    "id": "motivation-19",
    "kind": "motivation",
    "text": "Du kannst beim nächsten Rätsel wieder ganz neu anfangen.",
    "retired": true
  },
  {
    "id": "motivation-20",
    "kind": "motivation",
    "text": "Eine neue Aufgabe wartet. Sie läuft dir nicht davon.",
    "retired": true
  },
  {
    "id": "motivation-21",
    "kind": "motivation",
    "text": "Mit diesem Rätsel bist du fertig.",
    "retired": true
  },
  {
    "id": "motivation-22",
    "kind": "motivation",
    "text": "Du bestimmst, wann es weitergeht.",
    "retired": true
  },
  {
    "id": "motivation-23",
    "kind": "motivation",
    "text": "Fertig. Jetzt entscheidest du, ob du weiterspielst oder Pause machst.",
    "retired": true
  },
  {
    "id": "butterfly-0",
    "kind": "motif",
    "motif": "butterfly",
    "text": "Die Flügel sind fertig. Jetzt dürfen die Gedanken ein bisschen flattern.",
    "retired": true
  },
  {
    "id": "butterfly-1",
    "kind": "motif",
    "motif": "butterfly",
    "text": "Dieser Schmetterling bleibt ausnahmsweise sitzen.",
    "retired": true
  },
  {
    "id": "rocket-0",
    "kind": "motif",
    "motif": "rocket",
    "text": "Startklar. Den Countdown darfst du überspringen.",
    "retired": true
  },
  {
    "id": "rocket-1",
    "kind": "motif",
    "motif": "rocket",
    "text": "Houston, hier passt alles.",
    "retired": true
  },
  {
    "id": "heart-0",
    "kind": "motif",
    "motif": "heart",
    "text": "Ein Herz, ganz ohne gebrochene Stellen.",
    "retired": true
  },
  {
    "id": "heart-1",
    "kind": "motif",
    "motif": "heart",
    "text": "Für dieses Herz musste nur ein bisschen geschoben werden.",
    "retired": true
  },
  {
    "id": "flower-0",
    "kind": "motif",
    "motif": "flower",
    "text": "Diese Blume braucht weder Wasser noch einen grünen Daumen.",
    "retired": true
  },
  {
    "id": "flower-1",
    "kind": "motif",
    "motif": "flower",
    "text": "Ein kleiner Blütenmoment für deinen Tag.",
    "retired": true
  },
  {
    "id": "boat-0",
    "kind": "motif",
    "motif": "boat",
    "text": "Die Segel stehen. Du bestimmst das Tempo.",
    "retired": true
  },
  {
    "id": "boat-1",
    "kind": "motif",
    "motif": "boat",
    "text": "Dieses Boot bleibt auch ohne Schwimmweste entspannt.",
    "retired": true
  },
  {
    "id": "cat-0",
    "kind": "motif",
    "motif": "cat",
    "text": "Die Katze ist zufrieden. Sie tut nur so, als wäre ihr alles egal.",
    "retired": true
  },
  {
    "id": "cat-1",
    "kind": "motif",
    "motif": "cat",
    "text": "Alle Teile an ihrem Platz. Die Katze würde sie gleich wieder herunterschubsen.",
    "retired": true
  },
  {
    "id": "fish-0",
    "kind": "motif",
    "motif": "fish",
    "text": "Dieser Fisch ist dir nicht durch die Finger gegangen.",
    "retired": true
  },
  {
    "id": "fish-1",
    "kind": "motif",
    "motif": "fish",
    "text": "Ein guter Fang. Ganz ohne nasse Füße.",
    "retired": true
  },
  {
    "id": "mushroom-0",
    "kind": "motif",
    "motif": "mushroom",
    "text": "Dieser Pilz ist zum Anschauen. Die Pfanne bleibt heute kalt.",
    "retired": true
  },
  {
    "id": "mushroom-1",
    "kind": "motif",
    "motif": "mushroom",
    "text": "Ein kleiner Fund am Rand deiner Rätselreise.",
    "retired": true
  },
  {
    "id": "house-0",
    "kind": "motif",
    "motif": "house",
    "text": "Ein Dach über allen Teilen.",
    "retired": true
  },
  {
    "id": "house-1",
    "kind": "motif",
    "motif": "house",
    "text": "Ein Häuschen ohne Baustelle. Das hat man auch nicht jeden Tag.",
    "retired": true
  },
  {
    "id": "tree-0",
    "kind": "motif",
    "motif": "tree",
    "text": "Dieser Baum nadelt garantiert nicht.",
    "retired": true
  },
  {
    "id": "tree-1",
    "kind": "motif",
    "motif": "tree",
    "text": "Ein bisschen Wald auf deinem Bildschirm.",
    "retired": true
  },
  {
    "id": "cup-0",
    "kind": "motif",
    "motif": "cup",
    "text": "Die Tasse ist fertig. Das Getränk musst du selbst organisieren.",
    "retired": true
  },
  {
    "id": "cup-1",
    "kind": "motif",
    "motif": "cup",
    "text": "Eine kleine Pause passt bestimmt noch in diese Tasse.",
    "retired": true
  },
  {
    "id": "crown-0",
    "kind": "motif",
    "motif": "crown",
    "text": "Die Krone sitzt. Eine Verbeugung ist freiwillig.",
    "retired": true
  },
  {
    "id": "crown-1",
    "kind": "motif",
    "motif": "crown",
    "text": "Heute darfst du dir die Krone selbst aufsetzen.",
    "retired": true
  },
  {
    "id": "umbrella-0",
    "kind": "motif",
    "motif": "umbrella",
    "text": "Für den nächsten Gedankenschauer bist du vorbereitet.",
    "retired": true
  },
  {
    "id": "umbrella-1",
    "kind": "motif",
    "motif": "umbrella",
    "text": "Dieser Schirm geht auch ohne Regen auf.",
    "retired": true
  },
  {
    "id": "key-0",
    "kind": "motif",
    "motif": "key",
    "text": "Der Schlüssel ist gefunden. Jetzt fehlt nur noch das passende Schloss.",
    "retired": true
  },
  {
    "id": "key-1",
    "kind": "motif",
    "motif": "key",
    "text": "Ein Schlüssel weniger, den du morgens suchen musst.",
    "retired": true
  },
  {
    "id": "icecream-0",
    "kind": "motif",
    "motif": "icecream",
    "text": "Dieses Eis darfst du ganz langsam genießen.",
    "retired": true
  },
  {
    "id": "icecream-1",
    "kind": "motif",
    "motif": "icecream",
    "text": "Keine klebrigen Finger. Das ist der Vorteil von Puzzle-Eis.",
    "retired": true
  },
  {
    "id": "apple-0",
    "kind": "motif",
    "motif": "apple",
    "text": "Ein Apfel ohne Druckstellen.",
    "retired": true
  },
  {
    "id": "apple-1",
    "kind": "motif",
    "motif": "apple",
    "text": "Dieses Obst ist ungewöhnlich eckig geworden.",
    "retired": true
  },
  {
    "id": "cactus-0",
    "kind": "motif",
    "motif": "cactus",
    "text": "Dieser Kaktus lässt sich gefahrlos antippen.",
    "retired": true
  },
  {
    "id": "cactus-1",
    "kind": "motif",
    "motif": "cactus",
    "text": "Ein stacheliges Motiv mit einem entspannten Ende.",
    "retired": true
  },
  {
    "id": "turtle-0",
    "kind": "motif",
    "motif": "turtle",
    "text": "Diese Schildkröte hat es nicht eilig. Du musst es auch nicht haben.",
    "retired": true
  },
  {
    "id": "turtle-1",
    "kind": "motif",
    "motif": "turtle",
    "text": "Langsam ist eine völlig brauchbare Reisegeschwindigkeit.",
    "retired": true
  },
  {
    "id": "balloon-0",
    "kind": "motif",
    "motif": "balloon",
    "text": "Dieser Ballon bleibt auch ohne Schnur bei dir.",
    "retired": true
  },
  {
    "id": "balloon-1",
    "kind": "motif",
    "motif": "balloon",
    "text": "Ein kleiner Auftrieb für deinen Tag.",
    "retired": true
  },
  {
    "id": "bell-0",
    "kind": "motif",
    "motif": "bell",
    "text": "Ein leiser Tusch für deine fertige Glocke.",
    "retired": true
  },
  {
    "id": "bell-1",
    "kind": "motif",
    "motif": "bell",
    "text": "Die Glocke ist fertig. Du musst niemanden damit wecken.",
    "retired": true
  },
  {
    "id": "castle-0",
    "kind": "motif",
    "motif": "castle",
    "text": "Die Burg steht. Die Zugbrücke hat heute frei.",
    "retired": true
  },
  {
    "id": "castle-1",
    "kind": "motif",
    "motif": "castle",
    "text": "Eine ganze Burg, ohne einen einzigen Sack Zement.",
    "retired": true
  },
  {
    "id": "candle-0",
    "kind": "motif",
    "motif": "candle",
    "text": "Diese Kerze brennt dir nicht herunter.",
    "retired": true
  },
  {
    "id": "candle-1",
    "kind": "motif",
    "motif": "candle",
    "text": "Ein Kerzenmoment ohne Wachsflecken.",
    "retired": true
  },
  {
    "id": "note-0",
    "kind": "motif",
    "motif": "note",
    "text": "Eine fertige Note. Die Melodie darfst du dir selbst ausdenken.",
    "retired": true
  },
  {
    "id": "note-1",
    "kind": "motif",
    "motif": "note",
    "text": "Hier stimmt der Ton auch ohne Lautsprecher.",
    "retired": true
  },
  {
    "id": "bird-0",
    "kind": "motif",
    "motif": "bird",
    "text": "Der Vogel ist fertig. Die Aussicht gehört ihm.",
    "retired": true
  },
  {
    "id": "bird-1",
    "kind": "motif",
    "motif": "bird",
    "text": "Ein kleiner Vogel, der dir nichts vom Frühstück klaut.",
    "retired": true
  },
  {
    "id": "v2-fact-0",
    "kind": "fact",
    "text": "Ein Oktopus hat drei Herzen: Zwei versorgen die Kiemen, eines den übrigen Körper.",
    "topic": "Tierwelt",
    "source": {
      "url": "https://ocean.si.edu/ocean-life/invertebrates/octopuses-squids-and-relatives",
      "label": "Smithsonian Ocean"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-1",
    "kind": "fact",
    "text": "Oktopusblut ist blau. Für den Sauerstofftransport sorgt ein kupferhaltiger Stoff namens Hämocyanin.",
    "topic": "Tierwelt",
    "source": {
      "url": "https://ocean.si.edu/ocean-life/invertebrates/octopuses-squids-and-relatives",
      "label": "Smithsonian Ocean"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-2",
    "kind": "fact",
    "text": "Die Venus braucht für eine volle Drehung rund 243 Erdtage, für einen Umlauf um die Sonne nur etwa 225.",
    "topic": "Weltall",
    "source": {
      "url": "https://science.nasa.gov/venus/venus-facts/",
      "label": "NASA · Venus"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-3",
    "kind": "fact",
    "text": "Sonnenlicht braucht gut acht Minuten bis zur Erde. Wir sehen die Sonne also immer ein kleines Stück in der Vergangenheit.",
    "topic": "Weltall",
    "source": {
      "url": "https://soho.nascom.nasa.gov/explore/faq.html",
      "label": "NASA · SOHO"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-4",
    "kind": "fact",
    "text": "Der Mond entfernt sich derzeit im Mittel um etwa 3,8 Zentimeter pro Jahr von der Erde.",
    "topic": "Weltall",
    "source": {
      "url": "https://www.nasa.gov/missions/lro/laser-beams-reflected-between-earth-and-moon-boost-science/",
      "label": "NASA · Mondmessungen"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-5",
    "kind": "fact",
    "text": "Mehr als 99,8 Prozent der Masse unseres Sonnensystems stecken in der Sonne.",
    "topic": "Weltall",
    "source": {
      "url": "https://pwg.gsfc.nasa.gov/istp/outreach/workshop/thompson/facts.html",
      "label": "NASA · Sun Facts"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-6",
    "kind": "fact",
    "text": "Merkur und Venus sind die einzigen Planeten unseres Sonnensystems ohne eigene Monde.",
    "topic": "Weltall",
    "source": {
      "url": "https://science.nasa.gov/solar-system/solar-system-facts/",
      "label": "NASA · Sonnensystem"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-7",
    "kind": "fact",
    "text": "Pluto ist kleiner als unser Mond und hat trotzdem fünf eigene Monde.",
    "topic": "Weltall",
    "source": {
      "url": "https://science.nasa.gov/solar-system/solar-system-facts/",
      "label": "NASA · Sonnensystem"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-8",
    "kind": "fact",
    "text": "Unser Sonnensystem entstand vor ungefähr 4,6 Milliarden Jahren aus einer Wolke aus Gas und Staub.",
    "topic": "Weltall",
    "source": {
      "url": "https://science.nasa.gov/solar-system/solar-system-facts/",
      "label": "NASA · Sonnensystem"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-9",
    "kind": "fact",
    "text": "Etwa die Hälfte der Sauerstoffproduktion auf der Erde findet im Ozean statt – vor allem durch winzige photosynthetische Organismen.",
    "topic": "Natur",
    "source": {
      "url": "https://oceanservice.noaa.gov/facts/ocean-oxygen.html",
      "label": "NOAA · Sauerstoff im Ozean"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-10",
    "kind": "fact",
    "text": "Bei der Erdbeere sind die kleinen Körnchen außen die eigentlichen Früchte. Der rote, saftige Teil ist ein verdickter Blütenboden.",
    "topic": "Pflanzen",
    "source": {
      "url": "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:30074127-2/general-information",
      "label": "Kew · Fragaria vesca"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-11",
    "kind": "fact",
    "text": "Der botanische Name der Gartenerdbeere enthält „ananassa“ – eine Anspielung auf die Ananas.",
    "topic": "Pflanzen",
    "source": {
      "url": "https://www.kew.org/plants/garden-strawberry",
      "label": "Kew · Gartenerdbeere"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-12",
    "kind": "fact",
    "text": "Wasser dehnt sich beim Gefrieren unter normalem Luftdruck aus. Die feste Form braucht also mehr Platz als die flüssige.",
    "topic": "Physik",
    "source": {
      "url": "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=853910",
      "label": "NIST · Eigenschaften von Wasser"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-13",
    "kind": "fact",
    "text": "Ein Meter ist über Licht definiert: die Strecke, die Licht im Vakuum in 1/299.792.458 Sekunde zurücklegt.",
    "topic": "Physik",
    "source": {
      "url": "https://www.bipm.org/en/si-base-units/metre",
      "label": "BIPM · Meterdefinition"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-14",
    "kind": "fact",
    "text": "Das World Wide Web entstand 1989 am CERN. Tim Berners-Lee wollte damit den Austausch von Informationen erleichtern.",
    "topic": "Technikgeschichte",
    "source": {
      "url": "https://home.cern/science/computing/the-birth-of-the-web/",
      "label": "CERN · Die Geburt des Web"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-fact-15",
    "kind": "fact",
    "text": "Die Gutenberg-Bibel wurde Mitte der 1450er-Jahre mit beweglichen Lettern gedruckt. Ein berühmtes Buch – und ein Meilenstein der Druckgeschichte.",
    "topic": "Geschichte",
    "source": {
      "url": "https://www.loc.gov/item/2021666734/",
      "label": "Library of Congress · Gutenberg Bible"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v2-quote-0",
    "kind": "quote",
    "text": "Es irrt der Mensch so lang er strebt.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Faust I · Prolog im Himmel",
    "source": {
      "url": "https://www.gutenberg.org/files/21000/21000-h/21000-h.htm",
      "label": "Johann Wolfgang von Goethe · Faust I · Prolog im Himmel"
    }
  },
  {
    "id": "v2-quote-1",
    "kind": "quote",
    "text": "Ernst ist das Leben, heiter ist die Kunst.",
    "author": "Friedrich Schiller",
    "work": "Wallenstein · Prolog",
    "source": {
      "url": "https://projekt-gutenberg.org/authors/friedrich-schiller/books/wallenstein/",
      "label": "Friedrich Schiller · Wallenstein · Prolog"
    }
  },
  {
    "id": "v2-quote-2",
    "kind": "quote",
    "text": "Habe Mut, dich deines eigenen Verstandes zu bedienen!",
    "author": "Immanuel Kant",
    "work": "Beantwortung der Frage: Was ist Aufklärung?",
    "source": {
      "url": "https://dev.gutenberg.org/cache/epub/30821/pg30821-images.html",
      "label": "Immanuel Kant · Beantwortung der Frage: Was ist Aufklärung?"
    }
  },
  {
    "id": "v2-quote-3",
    "kind": "quote",
    "text": "Ich bin so knallvergnügt erwacht.",
    "author": "Joachim Ringelnatz",
    "work": "Morgenwonne",
    "source": {
      "url": "https://projekt-gutenberg.org/authors/joachim-ringelnatz/books/joachim-ringelnatz-gedichte/chapter/30/",
      "label": "Joachim Ringelnatz · Morgenwonne"
    }
  },
  {
    "id": "v2-quote-4",
    "kind": "quote",
    "text": "Dir selbst sei treu.",
    "author": "William Shakespeare",
    "work": "Hamlet · Akt I, Szene 3",
    "source": {
      "url": "https://www.gutenberg.org/files/1524/1524-h/1524-h.htm",
      "label": "William Shakespeare · Hamlet · Akt I, Szene 3"
    },
    "translation": "Eigene Übersetzung",
    "original": "to thine own self be true"
  },
  {
    "id": "v2-quote-5",
    "kind": "quote",
    "text": "Kürze ist die Seele des Witzes.",
    "author": "William Shakespeare",
    "work": "Hamlet · Akt II, Szene 2",
    "source": {
      "url": "https://www.gutenberg.org/files/1524/1524-h/1524-h.htm",
      "label": "William Shakespeare · Hamlet · Akt II, Szene 2"
    },
    "translation": "Eigene Übersetzung",
    "original": "brevity is the soul of wit"
  },
  {
    "id": "v2-humor-0",
    "kind": "humor",
    "text": "Mein Einkaufszettel ist sehr optimistisch, was meine Kochkünste betrifft."
  },
  {
    "id": "v2-humor-1",
    "kind": "humor",
    "text": "Ich habe heute schon Sport gemacht: einen Gedanken hin und her gewälzt."
  },
  {
    "id": "v2-humor-2",
    "kind": "humor",
    "text": "Die Schublade mit den Kabeln hat inzwischen eine eigene Regierung."
  },
  {
    "id": "v2-humor-3",
    "kind": "humor",
    "text": "Mein Wecker und ich führen eine Fernbeziehung. Ich halte ihn auf Abstand."
  },
  {
    "id": "v2-humor-4",
    "kind": "humor",
    "text": "Der Wäschekorb glaubt fest an meine langfristige Planung."
  },
  {
    "id": "v2-humor-5",
    "kind": "humor",
    "text": "Ich gieße meine Pflanzen. Sie beurteilen meine Zuverlässigkeit trotzdem kritisch."
  },
  {
    "id": "v2-humor-6",
    "kind": "humor",
    "text": "Mein Kühlschrank hat eine Innenbeleuchtung. Mein Kleiderschrank muss sich mehr anstrengen."
  },
  {
    "id": "v2-humor-7",
    "kind": "humor",
    "text": "Ich wollte nur kurz aufräumen. Jetzt lese ich eine Bedienungsanleitung von 2008."
  },
  {
    "id": "v2-humor-8",
    "kind": "humor",
    "text": "Die Socke ist nicht verschwunden. Sie lebt jetzt unabhängig."
  },
  {
    "id": "v2-humor-9",
    "kind": "humor",
    "text": "Mein Kalender hat Termine. Ich hätte lieber Überraschungskuchen."
  },
  {
    "id": "v2-humor-10",
    "kind": "humor",
    "text": "Ich habe eine To-do-Liste geschrieben. Das fühlt sich schon verdächtig nach Erledigen an."
  },
  {
    "id": "v2-humor-11",
    "kind": "humor",
    "text": "Das Ladekabel ist genau so lang, dass Hoffnung entsteht."
  },
  {
    "id": "v2-humor-12",
    "kind": "humor",
    "text": "Ich bin pünktlich. Nur manchmal zu einem anderen Zeitpunkt."
  },
  {
    "id": "v2-humor-13",
    "kind": "humor",
    "text": "Meine Zimmerpflanze wächst langsam. Wir haben ähnliche Karrierepläne."
  },
  {
    "id": "v2-humor-14",
    "kind": "humor",
    "text": "Ich habe den Schlüssel an einen sicheren Ort gelegt. Auch vor mir selbst."
  },
  {
    "id": "v2-humor-15",
    "kind": "humor",
    "text": "Der Staubsaugerroboter hat sich unter dem Sofa versteckt. Ich verstehe ihn."
  },
  {
    "id": "v2-humor-16",
    "kind": "humor",
    "text": "Ich koche nach Gefühl. Das Gefühl hat offenbar nicht immer Hunger."
  },
  {
    "id": "v2-humor-17",
    "kind": "humor",
    "text": "Im Kopf klingt meine Singstimme deutlich teurer."
  },
  {
    "id": "v2-humor-18",
    "kind": "humor",
    "text": "Mein Sofa unterstützt mich bei jeder Entscheidung, sitzen zu bleiben."
  },
  {
    "id": "v2-humor-19",
    "kind": "humor",
    "text": "Ich habe ein Lesezeichen. Das Buch dazu befindet sich in einem anderen Organisationssystem."
  },
  {
    "id": "v2-thought-0",
    "kind": "thought",
    "text": "Eine freie Minute darf auch einfach frei bleiben."
  },
  {
    "id": "v2-thought-1",
    "kind": "thought",
    "text": "Vielleicht ist heute jemand froh, dass es dich gibt, ohne es dir gesagt zu haben."
  },
  {
    "id": "v2-thought-2",
    "kind": "thought",
    "text": "Eine gute Frage kann ein schöneres Geschenk sein als ein schneller Rat."
  },
  {
    "id": "v2-thought-3",
    "kind": "thought",
    "text": "Du darfst deine Meinung ändern, wenn du etwas Neues erfährst."
  },
  {
    "id": "v2-thought-4",
    "kind": "thought",
    "text": "Manchmal bedeutet Zuhören, die eigene Antwort noch einen Moment zurückzuhalten."
  },
  {
    "id": "v2-thought-5",
    "kind": "thought",
    "text": "Ein freundlicher Satz kostet wenig und kann lange bleiben."
  },
  {
    "id": "v2-thought-6",
    "kind": "thought",
    "text": "Welche Kleinigkeit hat deinen Tag heute angenehmer gemacht?"
  },
  {
    "id": "v2-thought-7",
    "kind": "thought",
    "text": "Nicht alles, was dir wichtig ist, muss sich messen lassen."
  },
  {
    "id": "v2-thought-8",
    "kind": "thought",
    "text": "Eine Pause braucht keine Rechtfertigung durch spätere Produktivität."
  },
  {
    "id": "v2-thought-9",
    "kind": "thought",
    "text": "Vielleicht kannst du heute jemandem sagen, was du an ihm schätzt."
  },
  {
    "id": "v2-thought-10",
    "kind": "thought",
    "text": "Es gibt Dinge, die werden schöner, wenn man sie nicht fotografiert, sondern betrachtet."
  },
  {
    "id": "v2-thought-11",
    "kind": "thought",
    "text": "Wann hast du zuletzt etwas zum ersten Mal gemacht?"
  },
  {
    "id": "v2-thought-12",
    "kind": "thought",
    "text": "Du musst einen schönen Moment nicht festhalten, damit er stattgefunden hat."
  },
  {
    "id": "v2-thought-13",
    "kind": "thought",
    "text": "Was würdest du heute tun, wenn niemand deine Leistung bewerten würde?"
  },
  {
    "id": "v2-thought-14",
    "kind": "thought",
    "text": "Manchmal ist „Ich weiß es noch nicht“ die ehrlichste und hilfreichste Antwort."
  },
  {
    "id": "v2-thought-15",
    "kind": "thought",
    "text": "Ein Gespräch muss nicht zu einem Ergebnis führen, um gut gewesen zu sein."
  },
  {
    "id": "v2-thought-16",
    "kind": "thought",
    "text": "Welche kleine Gewohnheit möchtest du behalten, auch wenn sich vieles verändert?"
  },
  {
    "id": "v2-thought-17",
    "kind": "thought",
    "text": "Du darfst dich über etwas freuen, das andere unscheinbar finden."
  },
  {
    "id": "v2-thought-18",
    "kind": "thought",
    "text": "Neugier beginnt oft mit dem Mut, eine vermeintlich dumme Frage zu stellen."
  },
  {
    "id": "v2-thought-19",
    "kind": "thought",
    "text": "Was möchtest du einem Menschen sagen, solange du noch die Gelegenheit dazu hast?"
  },
  {
    "id": "v2-riddle-0", "retired": true,
    "kind": "riddle",
    "text": "Welche beiden Wörter stecken in „EISBERG“, wenn du es in zwei sinnvolle Teile zerlegst?",
    "answer": "Eis + Berg."
  },
  {
    "id": "v2-riddle-1",
    "kind": "riddle",
    "text": "Aus „AMPEL“ wird eine Zimmerpflanze. Wie heißt sie?",
    "answer": "PALME – dieselben fünf Buchstaben, anders angeordnet."
  },
  {
    "id": "v2-riddle-2",
    "kind": "riddle",
    "text": "Ordne die Buchstaben von „REGAL“ zu einem Platz zum Übernachten.",
    "answer": "LAGER."
  },
  {
    "id": "v2-riddle-3",
    "kind": "riddle",
    "text": "Was wird aus „MEHL“, wenn die Buchstaben einen Kopfschutz bilden?",
    "answer": "HELM."
  },
  {
    "id": "v2-riddle-4",
    "kind": "riddle",
    "text": "Aus „NEBEL“ wird mit denselben Buchstaben etwas, das wir alle haben.",
    "answer": "LEBEN."
  },
  {
    "id": "v2-riddle-5",
    "kind": "riddle",
    "text": "Welche Leuchte lässt sich aus den Buchstaben von „PALME“ bilden?",
    "answer": "LAMPE."
  },
  {
    "id": "v2-riddle-6",
    "kind": "riddle",
    "text": "„TOR“ bekommt dieselben Buchstaben in anderer Reihenfolge und wird zu einer Farbe. Welche?",
    "answer": "ROT."
  },
  {
    "id": "v2-riddle-7",
    "kind": "riddle",
    "text": "Welches Wort liest sich rückwärts wie vorwärts: REGAL, RENTNER oder WOLKE?",
    "answer": "RENTNER."
  },
  {
    "id": "v2-riddle-8",
    "kind": "riddle",
    "text": "Ich habe Zähne, aber kann nichts essen. Was könnte ich sein?",
    "answer": "Ein Kamm. Auch andere Antworten mit passenden Eigenschaften sind möglich."
  },
  {
    "id": "v2-riddle-9",
    "kind": "riddle",
    "text": "Ich werde nass, während ich etwas trocken mache. Was bin ich?",
    "answer": "Ein Handtuch."
  },
  {
    "id": "v2-riddle-10",
    "kind": "riddle",
    "text": "Was gehört dir, wird aber meist von anderen ausgesprochen?",
    "answer": "Dein Name."
  },
  {
    "id": "v2-riddle-11",
    "kind": "riddle",
    "text": "Was hat einen Hals, aber keinen Kopf?",
    "answer": "Eine Flasche."
  },
  {
    "id": "v2-riddle-12",
    "kind": "riddle",
    "text": "Welche Bank hat keine Geldscheine?",
    "answer": "Eine Sitzbank – zum Beispiel eine Parkbank."
  },
  {
    "id": "v2-riddle-13",
    "kind": "riddle",
    "text": "Welches Schloss braucht keinen Schlüssel und steht trotzdem in einer Landschaft?",
    "answer": "Ein Schloss als Gebäude."
  },
  {
    "id": "v2-riddle-14",
    "kind": "riddle",
    "text": "Was kannst du brechen, ohne es anzufassen?",
    "answer": "Ein Versprechen."
  },
  {
    "id": "v2-riddle-15",
    "kind": "riddle",
    "text": "Was hat ein Auge und kann nicht sehen?",
    "answer": "Eine Nadel."
  },
  {
    "id": "v2-riddle-16",
    "kind": "riddle",
    "text": "Was läuft, obwohl es keine Beine hat?",
    "answer": "Zum Beispiel die Zeit oder Wasser."
  },
  {
    "id": "v2-riddle-17", "retired": true,
    "kind": "riddle",
    "text": "Welches Tier steckt am Anfang von „KATZENJAMMER“?",
    "answer": "Eine Katze."
  },
  {
    "id": "v2-riddle-18",
    "kind": "riddle",
    "text": "Ersetze den ersten Buchstaben von „ROSE“, damit ein Kleidungsstück entsteht.",
    "answer": "Ein H: HOSE. Dafür wird das R ersetzt."
  },
  {
    "id": "v2-riddle-19",
    "kind": "riddle",
    "text": "Welche Zahl wird größer, wenn du sie auf den Kopf stellst: 6, 8 oder 0?",
    "answer": "Die 6 wird zur 9."
  },
  {
    "id": "v2-riddle-20",
    "kind": "riddle",
    "text": "Was liegt zwischen gestern und morgen?",
    "answer": "Heute."
  },
  {
    "id": "v2-riddle-21",
    "kind": "riddle",
    "text": "Welche „Mutter“ findest du auch in einer Werkzeugkiste?",
    "answer": "Eine Schraubenmutter."
  }
];const active=lines.filter(v=>!v.retired),byId=new Map(lines.map(v=>[v.id,v])),cycle=['fact','humor','riddle','thought','quote','humor','fact','thought','riddle'];function choose(motif,memory={recent:[],byPuzzle:{}},puzzle=''){const existing=byId.get(memory.byPuzzle?.[puzzle]);if(existing&&!existing.retired)return existing;const recent=Array.isArray(memory.recent)?memory.recent:[],used=new Set(Object.values(memory.byPuzzle||{}));let available=active.filter(v=>!used.has(v.id)&&!recent.includes(v.id));if(!available.length)available=active.filter(v=>!recent.includes(v.id));if(!available.length)available=active.filter(v=>!recent.slice(-24).includes(v.id));const preferred=cycle[Object.values(memory.byPuzzle||{}).filter(id=>byId.get(id)&&!byId.get(id).retired).length%cycle.length];return available.find(v=>v.kind===preferred)||available[0];}const api={lines,active,choose,get:id=>byId.get(id)};if(typeof module!=='undefined')module.exports=api;else root.HexFinish=api;})(typeof window!=='undefined'?window:globalThis);