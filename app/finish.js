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
    "id": "v2-riddle-0",
    "retired": true,
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
    "id": "v2-riddle-17",
    "retired": true,
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
  },
  {
    "id": "v3-quote-0",
    "kind": "quote",
    "text": "Was uns an der sichtbaren Schönheit entzückt, ist ewig nur die unsichtbare.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-1",
    "kind": "quote",
    "text": "Die verstehen sehr wenig, die nur das verstehen, was sich erklären läßt.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-2",
    "kind": "quote",
    "text": "Ein Urtheil läßt sich widerlegen, aber niemals ein Vorurtheil.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-3",
    "kind": "quote",
    "text": "Vertrauen ist Muth, und Treue ist Kraft.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-4",
    "kind": "quote",
    "text": "Andere neidlos Erfolge erringen sehen, nach denen man selbst strebt, ist Größe.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-5",
    "kind": "quote",
    "text": "Anmuth ist ein Ausströmen der inneren Harmonie.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-6",
    "kind": "quote",
    "text": "Die einfachste und bekannteste Wahrheit erscheint uns augenblicklich neu und wunderbar, sobald wir sie zum ersten Male an uns selbst erleben.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-7",
    "kind": "quote",
    "text": "Nichts wird so oft unwiederbringlich versäumt wie eine Gelegenheit, die sich täglich bietet.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-8",
    "kind": "quote",
    "text": "Ein Dichter, der einen Menschen kennt, kann hundert schildern.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-9",
    "kind": "quote",
    "text": "Die meiste Nachsicht übt der, der die wenigste braucht.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-10",
    "kind": "quote",
    "text": "Wenn man nur die Alten liest, ist man sicher, immer neu zu bleiben.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-11",
    "kind": "quote",
    "text": "Wenn der Kunst kein Tempel mehr offen steht, dann flüchtet sie in die Werkstatt.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-12",
    "kind": "quote",
    "text": "Man muß das Gute thun, damit es in der Welt sei.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-13",
    "kind": "quote",
    "text": "In der Jugend lernt, im Alter versteht man.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-14",
    "kind": "quote",
    "text": "In einem guten Buche stehen mehr Wahrheiten, als sein Verfasser hinein zu schreiben meinte.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-15",
    "kind": "quote",
    "text": "Wenn die Neugier sich auf ernsthafte Dinge richtet, dann nennt man sie Wissensdrang.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-16",
    "kind": "quote",
    "text": "Nur was für die Gegenwart zu gut ist, ist gut genug für die Zukunft.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-17",
    "kind": "quote",
    "text": "In jedem tüchtigen Menschen steckt ein Poet, und kommt beim Schreiben zum Vorschein, beim Lesen, beim Sprechen oder beim Zuhören.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-18",
    "kind": "quote",
    "text": "Man kann viele Dinge kaufen, die unbezahlbar sind.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-19",
    "kind": "quote",
    "text": "Sich mit Wenigem begnügen ist schwer, sich mit Vielem begnügen noch schwerer.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-20",
    "kind": "quote",
    "text": "Für das Können giebt es nur einen Beweis: das Thun.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-21",
    "kind": "quote",
    "text": "Die Menschen, denen wir eine Stütze sind, die geben uns den Halt im Leben.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-22",
    "kind": "quote",
    "text": "Wer nichts weiß, muß alles glauben.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-23",
    "kind": "quote",
    "text": "Auch was wir am meisten sind, sind wir nicht immer.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-24",
    "kind": "quote",
    "text": "Wer Geduld sagt, sagt Muth, Ausdauer, Kraft.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-25",
    "kind": "quote",
    "text": "Der Geist einer Sprache offenbart sich am deutlichsten in ihren unübersetzbaren Worten.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-26",
    "kind": "quote",
    "text": "Das Verständniß reicht oft viel weiter als der Verstand.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-27",
    "kind": "quote",
    "text": "Auch in ein neues Glück muß man sich schicken lernen.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-28",
    "kind": "quote",
    "text": "Ein Gedanke kann nicht erwachen, ohne andere zu wecken.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-29",
    "kind": "quote",
    "text": "Es gehört immer etwas guter Wille dazu, selbst das Einfachste zu begreifen, selbst das Klarste zu verstehen.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-30",
    "kind": "quote",
    "text": "Fähigkeit ruhiger Erwägung —: Anfang aller Weisheit, Quell aller Güte!",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-31",
    "kind": "quote",
    "text": "Ausnahmen sind nicht immer Bestätigung der alten Regel; sie können auch die Vorboten einer neuen Regel sein.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-32",
    "kind": "quote",
    "text": "Suche immer zu nützen, suche nie Dich unentbehrlich zu machen.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-33",
    "kind": "quote",
    "text": "Ein anregendes Buch — eine Speise, die hungrig macht.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-34",
    "kind": "quote",
    "text": "Beim Wiedersehen nach einer Trennung fragen die Bekannten nach dem, was mit uns, die Freunde nach dem, was in uns vorgegangen.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-35",
    "kind": "quote",
    "text": "Wie viel Bewegung wird hervorgebracht durch das Streben nach Ruhe!",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-36",
    "kind": "quote",
    "text": "Vieles erfahren haben, heißt noch nicht Erfahrung besitzen.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-37",
    "kind": "quote",
    "text": "In jede hohe Freude mischt sich eine Empfindung der Dankbarkeit.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-38",
    "kind": "quote",
    "text": "Der Maßstab, den wir an die Dinge legen, ist das Maß unseres eigenen Geistes.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-39",
    "kind": "quote",
    "text": "Wir sind für nichts so dankbar wie für Dankbarkeit.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-40",
    "kind": "quote",
    "text": "Wenn Jeder dem Andern helfen wollte, wäre Allen geholfen.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-41",
    "kind": "quote",
    "text": "Die Gelassenheit ist eine anmuthige Form des Selbstbewußtseins.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-42",
    "kind": "quote",
    "text": "Man bleibt jung so lange man noch lernen, neue Gewohnheiten annehmen und einen Widerspruch ertragen kann.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-43",
    "kind": "quote",
    "text": "Hab' einen guten Gedanken, man borgt Dir zwanzig.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-44",
    "kind": "quote",
    "text": "Frieden kannst Du nur haben, wenn Du ihn giebst.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-45",
    "kind": "quote",
    "text": "Sich mitzuteilen ist Natur; Mitgeteiltes aufzunehmen, wie es gegeben wird, ist Bildung.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-46",
    "kind": "quote",
    "text": "Durch nichts bezeichnen die Menschen mehr ihren Charakter als durch das, was sie lächerlich finden.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-47",
    "kind": "quote",
    "text": "Wir lernen die Menschen nicht kennen, wenn sie zu uns kommen; wir müssen zu ihnen gehen, um zu erfahren, wie es mit ihnen steht.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-48",
    "kind": "quote",
    "text": "Das Betragen ist ein Spiegel, in welchem jeder sein Bild zeigt.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-49",
    "kind": "quote",
    "text": "Man weicht der Welt nicht sicherer aus als durch die Kunst, und man verknüpft sich nicht sicherer mit ihr als durch die Kunst.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-50",
    "kind": "quote",
    "text": "Die Weisheit ist nur in der Wahrheit.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-51",
    "kind": "quote",
    "text": "Man würde einander besser kennen, wenn sich nicht immer einer dem andern gleichstellen wollte.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-52",
    "kind": "quote",
    "text": "Was man nicht versteht, besitzt man nicht.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-quote-53",
    "kind": "quote",
    "text": "Aufrichtig zu sein kann ich versprechen, unparteiisch zu sein aber nicht.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    },
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise"
  },
  {
    "id": "v3-humor-0",
    "kind": "humor",
    "text": "Mein Regenschirm ist faltbar. Vor allem bei Gegenwind."
  },
  {
    "id": "v3-humor-1",
    "kind": "humor",
    "text": "Der Drucker möchte Aufmerksamkeit. Papier wäre ihm zu einfach."
  },
  {
    "id": "v3-humor-2",
    "kind": "humor",
    "text": "Ich habe Ordnung geschaffen. Jetzt findet sich nichts mehr ohne Einführung."
  },
  {
    "id": "v3-humor-3",
    "kind": "humor",
    "text": "Meine Einkaufstasche ist umweltfreundlich. Sie bleibt meistens zu Hause."
  },
  {
    "id": "v3-humor-4",
    "kind": "humor",
    "text": "Mein Passwort ist sicher. Besonders sicher vor meiner Erinnerung."
  },
  {
    "id": "v3-humor-5",
    "kind": "humor",
    "text": "Die Banane in meiner Tasche ist inzwischen ein Forschungsprojekt."
  },
  {
    "id": "v3-humor-6",
    "kind": "humor",
    "text": "Der Wasserkocher arbeitet unter Druck. Ich auch, aber langsamer."
  },
  {
    "id": "v3-humor-7",
    "kind": "humor",
    "text": "Ich habe die Anleitung gelesen. Jetzt bin ich auf höherem Niveau verwirrt."
  },
  {
    "id": "v3-humor-8",
    "kind": "humor",
    "text": "Mein Stuhl knarzt. Er beteiligt sich an der Besprechung."
  },
  {
    "id": "v3-humor-9",
    "kind": "humor",
    "text": "Der Staub auf meinem Regal ist gleichmäßig verteilt. Das ist auch eine Ordnung."
  },
  {
    "id": "v3-humor-10",
    "kind": "humor",
    "text": "Ich wollte früh schlafen gehen. Mein Kopf hatte noch ein Abendprogramm."
  },
  {
    "id": "v3-humor-11",
    "kind": "humor",
    "text": "Meine Brille liegt vermutlich dort, wo ich zuletzt scharf gesehen habe."
  },
  {
    "id": "v3-humor-12",
    "kind": "humor",
    "text": "Das Brot ist schon wieder aus. Offenbar wohnt ein Brotesser hier."
  },
  {
    "id": "v3-humor-13",
    "kind": "humor",
    "text": "Ich habe einen Vorrat an Vorratsdosen. Für den Vorrat fehlt jetzt der Platz."
  },
  {
    "id": "v3-humor-14",
    "kind": "humor",
    "text": "Mein Fuß weiß immer zuerst, wo der Tisch steht."
  },
  {
    "id": "v3-humor-15",
    "kind": "humor",
    "text": "Der Kühlschrank ist ein Museum meiner guten Vorsätze."
  },
  {
    "id": "v3-humor-16",
    "kind": "humor",
    "text": "Ich kann sehr gut nichts tun. Leider immer dann, wenn etwas zu tun wäre."
  },
  {
    "id": "v3-humor-17",
    "kind": "humor",
    "text": "Mein Balkon ist klein. Die Tomaten haben trotzdem Expansionspläne."
  },
  {
    "id": "v3-humor-18",
    "kind": "humor",
    "text": "Die Küche ist aufgeräumt. Ich sollte jetzt möglichst nichts essen."
  },
  {
    "id": "v3-humor-19",
    "kind": "humor",
    "text": "Mein Pflanzenableger hat Wurzeln geschlagen. Ich bin stolz auf seine Selbstständigkeit."
  },
  {
    "id": "v3-humor-20",
    "kind": "humor",
    "text": "Meine Tasche besitzt ein geheimes Fach. Ich weiß nur nicht welches."
  },
  {
    "id": "v3-humor-21",
    "kind": "humor",
    "text": "Ich mag spontane Ausflüge. Wenn sie ausreichend geplant sind."
  },
  {
    "id": "v3-humor-22",
    "kind": "humor",
    "text": "Der Nachbar bohrt. Vielleicht baut er ein zweites Zuhause innerhalb der Wand."
  },
  {
    "id": "v3-humor-23",
    "kind": "humor",
    "text": "Mein Einkaufswagen hat ein Rad mit eigener Meinung."
  },
  {
    "id": "v3-humor-24",
    "kind": "humor",
    "text": "Die Fernbedienung lässt sich nur finden, wenn man schon aufgestanden ist."
  },
  {
    "id": "v3-humor-25",
    "kind": "humor",
    "text": "Ich habe einen Ersatzknopf. Nun fehlt nur noch das zugehörige Kleidungsstück."
  },
  {
    "id": "v3-humor-26",
    "kind": "humor",
    "text": "Mein Kleiderschrank ist voll mit „Vielleicht passt es irgendwann“."
  },
  {
    "id": "v3-humor-27",
    "kind": "humor",
    "text": "Ich habe das Fenster geputzt. Die Sonne hat sofort nachkontrolliert."
  },
  {
    "id": "v3-humor-28",
    "kind": "humor",
    "text": "Der Teebeutel ist gerade der Entspannteste im Raum. Er darf einfach ziehen."
  },
  {
    "id": "v3-humor-29",
    "kind": "humor",
    "text": "Meine Zimmerpflanze bekommt jeden Tag Tageslicht. Ich sollte mir ein Beispiel nehmen."
  },
  {
    "id": "v3-humor-30",
    "kind": "humor",
    "text": "Ich kann mir Namen merken. Nur die zugehörigen Menschen wechseln gelegentlich."
  },
  {
    "id": "v3-humor-31",
    "kind": "humor",
    "text": "Mein Notizbuch enthält eine Liste mit dem Titel „Listen ordnen“."
  },
  {
    "id": "v3-humor-32",
    "kind": "humor",
    "text": "Der Aufzug ist langsam. Er macht aus jedem Stockwerk eine Reise."
  },
  {
    "id": "v3-humor-33",
    "kind": "humor",
    "text": "Meine Wandfarbe heißt „Sanfter Morgen“. Ich hätte gern den dazugehörigen Schlaf."
  },
  {
    "id": "v3-humor-34",
    "kind": "humor",
    "text": "Der Briefkasten enthält heute Werbung für mehr Ruhe. Auf vierzehn Seiten."
  },
  {
    "id": "v3-humor-35",
    "kind": "humor",
    "text": "Ich habe eine Lieblingskochplatte. Die anderen fühlen sich bestimmt unterfordert."
  },
  {
    "id": "v3-humor-36",
    "kind": "humor",
    "text": "Mein Wecker hat eine Schlummertaste. Ein gefährlich gutes Argument."
  },
  {
    "id": "v3-humor-37",
    "kind": "humor",
    "text": "Die letzte Praline war klein. Das rechtfertigt leider nur ihren Geschmack."
  },
  {
    "id": "v3-humor-38",
    "kind": "humor",
    "text": "Das Maßband liegt außer Reichweite. Es kennt die Ironie seiner Situation."
  },
  {
    "id": "v3-humor-39",
    "kind": "humor",
    "text": "Mein Werkzeugkasten enthält hauptsächlich Möglichkeiten."
  },
  {
    "id": "v3-humor-40",
    "kind": "humor",
    "text": "Der Kleber klebt alles. Besonders den Deckel."
  },
  {
    "id": "v3-humor-41",
    "kind": "humor",
    "text": "Ich habe einen Termin zum Nichtstun. Hoffentlich kommt nichts dazwischen."
  },
  {
    "id": "v3-humor-42",
    "kind": "humor",
    "text": "Die Schere ist immer dort, wo man eine Schere bräuchte, um die Verpackung zu öffnen."
  },
  {
    "id": "v3-humor-43",
    "kind": "humor",
    "text": "Mein Fahrradschloss ist schwerer als mein Vertrauen in die Welt."
  },
  {
    "id": "v3-humor-44",
    "kind": "humor",
    "text": "Ich mag Menschen, die ihre Bücher verleihen. Noch mehr mag ich Menschen, die sie zurückbringen."
  },
  {
    "id": "v3-humor-45",
    "kind": "humor",
    "text": "Die Keksdose ist leer. Eine gründliche Prüfung hat das mehrfach bestätigt."
  },
  {
    "id": "v3-humor-46",
    "kind": "humor",
    "text": "Mein Rucksack hat mehr Taschen als ich Verwendungszwecke."
  },
  {
    "id": "v3-humor-47",
    "kind": "humor",
    "text": "Ich habe einen sehr detaillierten Plan für die Zeit nach diesem Plan."
  },
  {
    "id": "v3-humor-48",
    "kind": "humor",
    "text": "Der Eiskratzer steckt im Auto. Das Auto ist zugefroren. Wir lernen beide dazu."
  },
  {
    "id": "v3-humor-49",
    "kind": "humor",
    "text": "Ich habe den Einkaufszettel dabei. Jetzt fehlt nur noch das Erinnern, ihn zu lesen."
  },
  {
    "id": "v3-humor-50",
    "kind": "humor",
    "text": "Mein Kaffee ist kalt geworden. Er wollte offenbar ein Trendgetränk sein."
  },
  {
    "id": "v3-humor-51",
    "kind": "humor",
    "text": "Das Rezept sagt „nach Geschmack“. Endlich eine Qualifikation, die ich besitze."
  },
  {
    "id": "v3-humor-52",
    "kind": "humor",
    "text": "Meine Kopfhörer haben Kabelsalat bestellt. Ohne mich zu fragen."
  },
  {
    "id": "v3-humor-53",
    "kind": "humor",
    "text": "Im Reisegepäck ist für alles Platz. Außer für die Dinge, die ich noch einpacken muss."
  },
  {
    "id": "v3-humor-54",
    "kind": "humor",
    "text": "Das Sofa hat mich angesprochen. Ich fand seine Argumente überzeugend."
  },
  {
    "id": "v3-humor-55",
    "kind": "humor",
    "text": "Ich räume vor dem Besuch auf. Damit er ein falsches, aber erfreuliches Bild von mir bekommt."
  },
  {
    "id": "v3-humor-56",
    "kind": "humor",
    "text": "Meine Waage steht schief. Ein technischer Verdacht mit großem emotionalem Nutzen."
  },
  {
    "id": "v3-humor-57",
    "kind": "humor",
    "text": "Der Geschirrspüler ist fertig. Leider hält er sich beim Ausräumen zurück."
  },
  {
    "id": "v3-humor-58",
    "kind": "humor",
    "text": "Meine Handschrift ist ein Verschlüsselungsverfahren ohne Wiederherstellungsschlüssel."
  },
  {
    "id": "v3-humor-59",
    "kind": "humor",
    "text": "Ich habe mir den Weg gemerkt. Er hat sich vermutlich inzwischen verändert."
  },
  {
    "id": "v3-humor-60",
    "kind": "humor",
    "text": "Der Teppich lässt Krümel verschwinden. Eine sehr begrenzte Form der Magie."
  },
  {
    "id": "v3-humor-61",
    "kind": "humor",
    "text": "Mein Kalender meldet freie Zeit. Ich traue dieser Nachricht noch nicht."
  },
  {
    "id": "v3-humor-62",
    "kind": "humor",
    "text": "Die Einkaufstüte ist gerissen. Sie wollte die Last offenbar fair verteilen."
  },
  {
    "id": "v3-humor-63",
    "kind": "humor",
    "text": "Die Suppe braucht noch etwas. Vielleicht jemanden, der kochen kann."
  },
  {
    "id": "v3-humor-64",
    "kind": "humor",
    "text": "Ich habe gute Vorsätze für meine guten Vorsätze."
  },
  {
    "id": "v3-humor-65",
    "kind": "humor",
    "text": "Meine Sockenschublade besteht aus optimistischen Einzelgängern."
  },
  {
    "id": "v3-humor-66",
    "kind": "humor",
    "text": "Der Föhn hat heute mehr Wind gemacht als mein Wochenendplan."
  },
  {
    "id": "v3-humor-67",
    "kind": "humor",
    "text": "Ich habe einen bequemen Schuh gefunden. Jetzt fehlt noch der andere."
  },
  {
    "id": "v3-humor-68",
    "kind": "humor",
    "text": "Der Kugelschreiber schreibt auf allem. Außer auf dem Zettel, den ich gerade brauche."
  },
  {
    "id": "v3-humor-69",
    "kind": "humor",
    "text": "Meine Sonnenbrille ist ein saisonales Suchspiel."
  },
  {
    "id": "v3-humor-70",
    "kind": "humor",
    "text": "Ich wollte mich nur kurz hinsetzen. Der Stuhl hat ein Anschlussprogramm angeboten."
  },
  {
    "id": "v3-humor-71",
    "kind": "humor",
    "text": "Meine Einkaufsliste unterscheidet klar zwischen Bedürfnissen und Käse."
  },
  {
    "id": "v3-humor-72",
    "kind": "humor",
    "text": "Der Wackeltisch hat den kürzesten Weg zu meiner Kaffeetasse gefunden."
  },
  {
    "id": "v3-humor-73",
    "kind": "humor",
    "text": "Ich besitze eine Schublade für Dinge, die noch keine eigene Schublade verdienen."
  },
  {
    "id": "v3-humor-74",
    "kind": "humor",
    "text": "Der Türstopper arbeitet zuverlässig. Ich sollte ihn bei der nächsten Gehaltsrunde erwähnen."
  },
  {
    "id": "v3-humor-75",
    "kind": "humor",
    "text": "Meine Bettdecke ist im Winter sehr überzeugend in Verhandlungen."
  },
  {
    "id": "v3-humor-76",
    "kind": "humor",
    "text": "Das WLAN hat Urlaub genommen. Leider ohne Vertretung."
  },
  {
    "id": "v3-humor-77",
    "kind": "humor",
    "text": "Ich habe endlich Zeit gefunden. Sie war zwischen zwei Verpflichtungen eingeklemmt."
  },
  {
    "id": "v3-humor-78",
    "kind": "humor",
    "text": "Die Minze wuchert. Im Gegensatz zu mir hat sie einen klaren Tagesplan."
  },
  {
    "id": "v3-humor-79",
    "kind": "humor",
    "text": "Mein Hefeteig geht auf. Schön, wenn wenigstens einer heute motiviert ist."
  },
  {
    "id": "v3-thought-0",
    "kind": "thought",
    "text": "Ein Kompliment muss nicht originell sein, um ehrlich zu sein."
  },
  {
    "id": "v3-thought-1",
    "kind": "thought",
    "text": "Du kannst einen Menschen vermissen und dich trotzdem über deinen heutigen Tag freuen."
  },
  {
    "id": "v3-thought-2",
    "kind": "thought",
    "text": "Eine Grenze darf freundlich klingen und trotzdem verbindlich sein."
  },
  {
    "id": "v3-thought-3",
    "kind": "thought",
    "text": "Welche Erinnerung möchtest du nicht gegen ein perfektes Foto eintauschen?"
  },
  {
    "id": "v3-thought-4",
    "kind": "thought",
    "text": "Manchmal reicht es, bei jemandem zu bleiben, ohne sofort eine Lösung zu suchen."
  },
  {
    "id": "v3-thought-5",
    "kind": "thought",
    "text": "Du darfst etwas neu lernen, auch wenn du dafür längst zu alt sein sollst."
  },
  {
    "id": "v3-thought-6",
    "kind": "thought",
    "text": "Ein guter Tag kann unspektakulär aussehen."
  },
  {
    "id": "v3-thought-7",
    "kind": "thought",
    "text": "Welche Frage hast du schon lange nicht mehr gestellt?"
  },
  {
    "id": "v3-thought-8",
    "kind": "thought",
    "text": "Vertrautheit entsteht auch durch kleine wiederkehrende Gesten."
  },
  {
    "id": "v3-thought-9",
    "kind": "thought",
    "text": "Nicht jede Einladung ist eine Verpflichtung."
  },
  {
    "id": "v3-thought-10",
    "kind": "thought",
    "text": "Du musst eine Vorliebe nicht begründen, damit sie gelten darf."
  },
  {
    "id": "v3-thought-11",
    "kind": "thought",
    "text": "Ein Nein kann Platz für ein ehrliches Ja schaffen."
  },
  {
    "id": "v3-thought-12",
    "kind": "thought",
    "text": "Welcher Ort bringt dich zum langsamer Gehen?"
  },
  {
    "id": "v3-thought-13",
    "kind": "thought",
    "text": "Eine Entschuldigung wird nicht kleiner, wenn sie ohne Erklärung auskommt."
  },
  {
    "id": "v3-thought-14",
    "kind": "thought",
    "text": "Vielleicht hat jemand eine deiner beiläufigen Freundlichkeiten nie vergessen."
  },
  {
    "id": "v3-thought-15",
    "kind": "thought",
    "text": "Manche Gespräche brauchen einen Spaziergang statt eines Tisches."
  },
  {
    "id": "v3-thought-16",
    "kind": "thought",
    "text": "Was hat dich als Kind begeistert, das du heute kaum noch beachtest?"
  },
  {
    "id": "v3-thought-17",
    "kind": "thought",
    "text": "Du kannst etwas schätzen und trotzdem verändern wollen."
  },
  {
    "id": "v3-thought-18",
    "kind": "thought",
    "text": "Ein guter Rat lässt dem anderen die Entscheidung."
  },
  {
    "id": "v3-thought-19",
    "kind": "thought",
    "text": "Nicht jedes Schweigen ist eine Lücke im Gespräch."
  },
  {
    "id": "v3-thought-20",
    "kind": "thought",
    "text": "Welche Fähigkeit eines Freundes würdest du gern einmal ausprobieren?"
  },
  {
    "id": "v3-thought-21",
    "kind": "thought",
    "text": "Es ist möglich, stolz zu sein, ohne sich mit jemandem zu vergleichen."
  },
  {
    "id": "v3-thought-22",
    "kind": "thought",
    "text": "Eine Tradition darf mit dir beginnen."
  },
  {
    "id": "v3-thought-23",
    "kind": "thought",
    "text": "Du darfst eine Frage stellen, deren Antwort alle anderen zu kennen scheinen."
  },
  {
    "id": "v3-thought-24",
    "kind": "thought",
    "text": "Manchmal verdient eine kleine Freude einen größeren Platz im Tag."
  },
  {
    "id": "v3-thought-25",
    "kind": "thought",
    "text": "Was würdest du gern wieder tun, obwohl du nicht besonders gut darin bist?"
  },
  {
    "id": "v3-thought-26",
    "kind": "thought",
    "text": "Ein ehrliches „Danke“ braucht keine große Gelegenheit."
  },
  {
    "id": "v3-thought-27",
    "kind": "thought",
    "text": "Verstehen bedeutet nicht automatisch zustimmen."
  },
  {
    "id": "v3-thought-28",
    "kind": "thought",
    "text": "Du kannst aufmerksam sein, ohne alles gleichzeitig wahrzunehmen."
  },
  {
    "id": "v3-thought-29",
    "kind": "thought",
    "text": "Ein Lieblingsweg bleibt ein Abenteuer, wenn du einmal genauer hinschaust."
  },
  {
    "id": "v3-thought-30",
    "kind": "thought",
    "text": "Wem würdest du gern eine Stunde ungeteilte Aufmerksamkeit schenken?"
  },
  {
    "id": "v3-thought-31",
    "kind": "thought",
    "text": "Du musst aus jedem Interesse kein Projekt machen."
  },
  {
    "id": "v3-thought-32",
    "kind": "thought",
    "text": "Ein offenes Ende kann Platz für eine neue Idee lassen."
  },
  {
    "id": "v3-thought-33",
    "kind": "thought",
    "text": "Welche selbstverständliche Annehmlichkeit würdest du heute vermissen?"
  },
  {
    "id": "v3-thought-34",
    "kind": "thought",
    "text": "Ein alter Gegenstand kann eine Geschichte tragen, die keinem Preisschild entspricht."
  },
  {
    "id": "v3-thought-35",
    "kind": "thought",
    "text": "Manchmal wird aus einem Missverständnis ein guter Anlass, genauer zuzuhören."
  },
  {
    "id": "v3-thought-36",
    "kind": "thought",
    "text": "Du darfst etwas zurückgeben, das nicht zu deinem Leben passt."
  },
  {
    "id": "v3-thought-37",
    "kind": "thought",
    "text": "Was würdest du gern lernen, wenn Noten keine Rolle spielten?"
  },
  {
    "id": "v3-thought-38",
    "kind": "thought",
    "text": "Ein gelungener Moment kann neben einem schwierigen stehen."
  },
  {
    "id": "v3-thought-39",
    "kind": "thought",
    "text": "Du musst dich nicht beeilen, nur weil jemand anders es eilig hat."
  },
  {
    "id": "v3-thought-40",
    "kind": "thought",
    "text": "Welche Kleinigkeit macht einen Ort für dich zu Hause?"
  },
  {
    "id": "v3-thought-41",
    "kind": "thought",
    "text": "Man kann sich wiedersehen, ohne die Zwischenzeit nachholen zu müssen."
  },
  {
    "id": "v3-thought-42",
    "kind": "thought",
    "text": "Eine Gewohnheit ist veränderbar, auch wenn sie sich selbstverständlich anfühlt."
  },
  {
    "id": "v3-thought-43",
    "kind": "thought",
    "text": "Ein guter Anfang darf leise sein."
  },
  {
    "id": "v3-thought-44",
    "kind": "thought",
    "text": "Was hast du zuletzt gelernt, das deine Sicht auf etwas verändert hat?"
  },
  {
    "id": "v3-thought-45",
    "kind": "thought",
    "text": "Du kannst freundlich zu dir sein, ohne dich für unfehlbar zu halten."
  },
  {
    "id": "v3-thought-46",
    "kind": "thought",
    "text": "Ein Spaziergang braucht kein sportliches Ergebnis."
  },
  {
    "id": "v3-thought-47",
    "kind": "thought",
    "text": "Manchmal ist eine ungestellte Frage wichtiger als die nächste Erklärung."
  },
  {
    "id": "v3-thought-48",
    "kind": "thought",
    "text": "Welche Musik würdest du jemandem vorspielen, der dich kennenlernen möchte?"
  },
  {
    "id": "v3-thought-49",
    "kind": "thought",
    "text": "Es lohnt sich, ein gelungenes Essen kurz zu bemerken, bevor man das nächste plant."
  },
  {
    "id": "v3-thought-50",
    "kind": "thought",
    "text": "Du darfst den Maßstab wechseln, wenn er dir nicht mehr hilft."
  },
  {
    "id": "v3-thought-51",
    "kind": "thought",
    "text": "Ein ehrliches Interesse erkennt man oft an der zweiten Frage."
  },
  {
    "id": "v3-thought-52",
    "kind": "thought",
    "text": "Was hast du von einem Menschen übernommen, der es wahrscheinlich gar nicht weiß?"
  },
  {
    "id": "v3-thought-53",
    "kind": "thought",
    "text": "Eine gute Erinnerung muss nicht die ganze Vergangenheit schönreden."
  },
  {
    "id": "v3-thought-54",
    "kind": "thought",
    "text": "Du kannst einen Fehler eingestehen und trotzdem zu dir stehen."
  },
  {
    "id": "v3-thought-55",
    "kind": "thought",
    "text": "Ein Tag ohne besondere Geschichte ist kein verlorener Tag."
  },
  {
    "id": "v3-thought-56",
    "kind": "thought",
    "text": "Welche Geräusche gehören für dich zu einem gemütlichen Morgen?"
  },
  {
    "id": "v3-thought-57",
    "kind": "thought",
    "text": "Manchmal wird eine Aufgabe leichter, wenn man sie mit jemandem teilt."
  },
  {
    "id": "v3-thought-58",
    "kind": "thought",
    "text": "Du darfst dich auf etwas freuen, das noch lange dauert."
  },
  {
    "id": "v3-thought-59",
    "kind": "thought",
    "text": "Eine Entscheidung muss nicht für immer gelten, um heute richtig zu sein."
  },
  {
    "id": "v3-thought-60",
    "kind": "thought",
    "text": "Welches Buch würdest du gern noch einmal zum ersten Mal lesen?"
  },
  {
    "id": "v3-thought-61",
    "kind": "thought",
    "text": "Aufmerksamkeit kann eine Form von Großzügigkeit sein."
  },
  {
    "id": "v3-thought-62",
    "kind": "thought",
    "text": "Du kannst einen Rat anhören, ohne ihn befolgen zu müssen."
  },
  {
    "id": "v3-thought-63",
    "kind": "thought",
    "text": "Ein vertrautes Gesicht kann einen fremden Ort verändern."
  },
  {
    "id": "v3-thought-64",
    "kind": "thought",
    "text": "Was möchtest du von deiner heutigen Gelassenheit ins Morgen mitnehmen?"
  },
  {
    "id": "v3-thought-65",
    "kind": "thought",
    "text": "Manche Lieblingssachen sind repariert und gerade deshalb unverwechselbar."
  },
  {
    "id": "v3-thought-66",
    "kind": "thought",
    "text": "Du musst nicht immer derjenige sein, der ein Gespräch am Laufen hält."
  },
  {
    "id": "v3-thought-67",
    "kind": "thought",
    "text": "Ein kleines Ritual kann dem Tag einen freundlichen Rahmen geben."
  },
  {
    "id": "v3-thought-68",
    "kind": "thought",
    "text": "Welche einfache Tätigkeit lässt dich die Zeit vergessen?"
  },
  {
    "id": "v3-thought-69",
    "kind": "thought",
    "text": "Du darfst eine schöne Sache unfertig lassen und später zu ihr zurückkehren."
  },
  {
    "id": "v3-thought-70",
    "kind": "thought",
    "text": "Ein guter Besuch endet manchmal mit dem Gefühl, gar nichts Besonderes gemacht zu haben."
  },
  {
    "id": "v3-thought-71",
    "kind": "thought",
    "text": "Erinnerungen brauchen keine chronologische Ordnung."
  },
  {
    "id": "v3-thought-72",
    "kind": "thought",
    "text": "Was war heute besser, als du vorher erwartet hattest?"
  },
  {
    "id": "v3-thought-73",
    "kind": "thought",
    "text": "Nicht jede Veränderung kündigt sich mit einem großen Entschluss an."
  },
  {
    "id": "v3-thought-74",
    "kind": "thought",
    "text": "Du kannst neugierig sein, ohne sofort eine Meinung zu haben."
  },
  {
    "id": "v3-thought-75",
    "kind": "thought",
    "text": "Ein Geschenk darf Zeit, Aufmerksamkeit oder ein selbstgekochtes Essen sein."
  },
  {
    "id": "v3-thought-76",
    "kind": "thought",
    "text": "Welche Ecke deiner Umgebung würdest du einem Gast zuerst zeigen?"
  },
  {
    "id": "v3-thought-77",
    "kind": "thought",
    "text": "Ein vertrauter Mensch darf dich trotzdem noch überraschen."
  },
  {
    "id": "v3-thought-78",
    "kind": "thought",
    "text": "Du musst nicht jede freie Fläche mit etwas füllen."
  },
  {
    "id": "v3-thought-79",
    "kind": "thought",
    "text": "Was möchtest du dir häufiger erlauben, obwohl es nichts kostet?"
  },
  {
    "id": "v3-riddle-0",
    "kind": "riddle",
    "text": "Buchstabensalat · Küche: L · E · K · E · L",
    "answer": "Kelle. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Küche",
    "anagram": "KELLE",
    "scramble": "LEKEL",
    "retired": true
  },
  {
    "id": "v3-riddle-1",
    "kind": "riddle",
    "text": "Buchstabensalat · Küche: P · E · N · N · F · A",
    "answer": "Pfanne. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Küche",
    "anagram": "PFANNE",
    "scramble": "PENNFA",
    "retired": true
  },
  {
    "id": "v3-riddle-2",
    "kind": "riddle",
    "text": "Buchstabensalat · Küche: A · G · E · B · L",
    "answer": "Gabel. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Küche",
    "anagram": "GABEL",
    "scramble": "AGEBL",
    "retired": true
  },
  {
    "id": "v3-riddle-3",
    "kind": "riddle",
    "text": "Buchstabensalat · Küche: E · R · E · M · S · S",
    "answer": "Messer. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Küche",
    "anagram": "MESSER",
    "scramble": "EREMSS",
    "retired": true
  },
  {
    "id": "v3-riddle-4",
    "kind": "riddle",
    "text": "Buchstabensalat · Küche: R · E · T · E · L · L",
    "answer": "Teller. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Küche",
    "anagram": "TELLER",
    "scramble": "RETELL",
    "retired": true
  },
  {
    "id": "v3-riddle-5",
    "kind": "riddle",
    "text": "Buchstabensalat · Küche: Ü · S · H · L · C · S · E · S",
    "answer": "Schüssel. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Küche",
    "anagram": "SCHÜSSEL",
    "scramble": "ÜSHLCSES",
    "retired": true
  },
  {
    "id": "v3-riddle-6",
    "kind": "riddle",
    "text": "Buchstabensalat · Küche: I · S · E · B",
    "answer": "Sieb. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Küche",
    "anagram": "SIEB",
    "scramble": "ISEB",
    "retired": true
  },
  {
    "id": "v3-riddle-7",
    "kind": "riddle",
    "text": "Buchstabensalat · Küche: R · E · B · E · C · H",
    "answer": "Becher. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Küche",
    "anagram": "BECHER",
    "scramble": "REBECH",
    "retired": true
  },
  {
    "id": "v3-riddle-8",
    "kind": "riddle",
    "text": "Buchstabensalat · Küche: I · T · T · V · E · R · S · E · E",
    "answer": "Serviette. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Küche",
    "anagram": "SERVIETTE",
    "scramble": "ITTVERSEE",
    "retired": true
  },
  {
    "id": "v3-riddle-9",
    "kind": "riddle",
    "text": "Buchstabensalat · Natur: O · E · K · W · L",
    "answer": "Wolke. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Natur",
    "anagram": "WOLKE",
    "scramble": "OEKWL",
    "retired": true
  },
  {
    "id": "v3-riddle-10",
    "kind": "riddle",
    "text": "Buchstabensalat · Natur: E · R · N · G · E",
    "answer": "Regen. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Natur",
    "anagram": "REGEN",
    "scramble": "ERNGE",
    "retired": true
  },
  {
    "id": "v3-riddle-11",
    "kind": "riddle",
    "text": "Buchstabensalat · Natur: I · S · E · W · E",
    "answer": "Wiese. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Natur",
    "anagram": "WIESE",
    "scramble": "ISEWE",
    "retired": true
  },
  {
    "id": "v3-riddle-12",
    "kind": "riddle",
    "text": "Buchstabensalat · Natur: E · T · B · L · Ü",
    "answer": "Blüte. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Natur",
    "anagram": "BLÜTE",
    "scramble": "ETBLÜ",
    "retired": true
  },
  {
    "id": "v3-riddle-13",
    "kind": "riddle",
    "text": "Buchstabensalat · Natur: B · T · T · L · A",
    "answer": "Blatt. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Natur",
    "anagram": "BLATT",
    "scramble": "BTTLA",
    "retired": true
  },
  {
    "id": "v3-riddle-14",
    "kind": "riddle",
    "text": "Buchstabensalat · Natur: P · E · T · U · L",
    "answer": "Tulpe. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Natur",
    "anagram": "TULPE",
    "scramble": "PETUL",
    "retired": true
  },
  {
    "id": "v3-riddle-15",
    "kind": "riddle",
    "text": "Buchstabensalat · Natur: H · E · E · I · C",
    "answer": "Eiche. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Natur",
    "anagram": "EICHE",
    "scramble": "HEEIC",
    "retired": true
  },
  {
    "id": "v3-riddle-16",
    "kind": "riddle",
    "text": "Buchstabensalat · Natur: O · N · A · R · H",
    "answer": "Ahorn. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Natur",
    "anagram": "AHORN",
    "scramble": "ONARH",
    "retired": true
  },
  {
    "id": "v3-riddle-17",
    "kind": "riddle",
    "text": "Buchstabensalat · Tierwelt: H · C · D · S · A",
    "answer": "Dachs. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Tierwelt",
    "anagram": "DACHS",
    "scramble": "HCDSA",
    "retired": true
  },
  {
    "id": "v3-riddle-18",
    "kind": "riddle",
    "text": "Buchstabensalat · Tierwelt: H · C · F · S · U",
    "answer": "Fuchs. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Tierwelt",
    "anagram": "FUCHS",
    "scramble": "HCFSU",
    "retired": true
  },
  {
    "id": "v3-riddle-19",
    "kind": "riddle",
    "text": "Buchstabensalat · Tierwelt: L · I · E · G",
    "answer": "Igel. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Tierwelt",
    "anagram": "IGEL",
    "scramble": "LIEG",
    "retired": true
  },
  {
    "id": "v3-riddle-20",
    "kind": "riddle",
    "text": "Buchstabensalat · Tierwelt: E · A · M · S · L",
    "answer": "Amsel. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Tierwelt",
    "anagram": "AMSEL",
    "scramble": "EAMSL",
    "retired": true
  },
  {
    "id": "v3-riddle-21",
    "kind": "riddle",
    "text": "Buchstabensalat · Tierwelt: E · D · R · L · A",
    "answer": "Adler. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Tierwelt",
    "anagram": "ADLER",
    "scramble": "EDRLA",
    "retired": true
  },
  {
    "id": "v3-riddle-22",
    "kind": "riddle",
    "text": "Buchstabensalat · Tierwelt: I · B · E · N · E",
    "answer": "Biene. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Tierwelt",
    "anagram": "BIENE",
    "scramble": "IBENE",
    "retired": true
  },
  {
    "id": "v3-riddle-23",
    "kind": "riddle",
    "text": "Buchstabensalat · Tierwelt: L · H · U · E · M · M",
    "answer": "Hummel. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Tierwelt",
    "anagram": "HUMMEL",
    "scramble": "LHUEMM",
    "retired": true
  },
  {
    "id": "v3-riddle-24",
    "kind": "riddle",
    "text": "Buchstabensalat · Tierwelt: R · T · E · T · O",
    "answer": "Otter. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Tierwelt",
    "anagram": "OTTER",
    "scramble": "RTETO",
    "retired": true
  },
  {
    "id": "v3-riddle-25",
    "kind": "riddle",
    "text": "Buchstabensalat · Zuhause: E · S · I · K · S · N",
    "answer": "Kissen. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Zuhause",
    "anagram": "KISSEN",
    "scramble": "ESIKSN",
    "retired": true
  },
  {
    "id": "v3-riddle-26",
    "kind": "riddle",
    "text": "Buchstabensalat · Zuhause: O · A · S · F",
    "answer": "Sofa. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Zuhause",
    "anagram": "SOFA",
    "scramble": "OASF",
    "retired": true
  },
  {
    "id": "v3-riddle-27",
    "kind": "riddle",
    "text": "Buchstabensalat · Zuhause: E · E · K · D · C",
    "answer": "Decke. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Zuhause",
    "anagram": "DECKE",
    "scramble": "EEKDC",
    "retired": true
  },
  {
    "id": "v3-riddle-28",
    "kind": "riddle",
    "text": "Buchstabensalat · Zuhause: H · C · P · I · E · T · P",
    "answer": "Teppich. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Zuhause",
    "anagram": "TEPPICH",
    "scramble": "HCPIETP",
    "retired": true
  },
  {
    "id": "v3-riddle-29",
    "kind": "riddle",
    "text": "Buchstabensalat · Zuhause: E · P · S · E · G · I · L",
    "answer": "Spiegel. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Zuhause",
    "anagram": "SPIEGEL",
    "scramble": "EPSEGIL",
    "retired": true
  },
  {
    "id": "v3-riddle-30",
    "kind": "riddle",
    "text": "Buchstabensalat · Zuhause: A · R · V · G · H · N · O",
    "answer": "Vorhang. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Zuhause",
    "anagram": "VORHANG",
    "scramble": "ARVGHNO",
    "retired": true
  },
  {
    "id": "v3-riddle-31",
    "kind": "riddle",
    "text": "Buchstabensalat · Zuhause: A · R · E · G · L",
    "answer": "Regal. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Zuhause",
    "anagram": "REGAL",
    "scramble": "AREGL",
    "retired": true
  },
  {
    "id": "v3-riddle-32",
    "kind": "riddle",
    "text": "Buchstabensalat · Unterwegs: O · E · K · R · F · F",
    "answer": "Koffer. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Unterwegs",
    "anagram": "KOFFER",
    "scramble": "OEKRFF",
    "retired": true
  },
  {
    "id": "v3-riddle-33",
    "kind": "riddle",
    "text": "Buchstabensalat · Unterwegs: T · E · K · A · R",
    "answer": "Karte. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Unterwegs",
    "anagram": "KARTE",
    "scramble": "TEKAR",
    "retired": true
  },
  {
    "id": "v3-riddle-34",
    "kind": "riddle",
    "text": "Buchstabensalat · Unterwegs: M · K · S · O · P · A · S",
    "answer": "Kompass. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Unterwegs",
    "anagram": "KOMPASS",
    "scramble": "MKSOPAS",
    "retired": true
  },
  {
    "id": "v3-riddle-35",
    "kind": "riddle",
    "text": "Buchstabensalat · Unterwegs: A · D · H · R · F · R · A",
    "answer": "Fahrrad. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Unterwegs",
    "anagram": "FAHRRAD",
    "scramble": "ADHRFRA",
    "retired": true
  },
  {
    "id": "v3-riddle-36",
    "kind": "riddle",
    "text": "Buchstabensalat · Unterwegs: E · R · K · B · C · Ü",
    "answer": "Brücke. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Unterwegs",
    "anagram": "BRÜCKE",
    "scramble": "ERKBCÜ",
    "retired": true
  },
  {
    "id": "v3-riddle-37",
    "kind": "riddle",
    "text": "Buchstabensalat · Unterwegs: A · H · H · N · O · F · B",
    "answer": "Bahnhof. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Unterwegs",
    "anagram": "BAHNHOF",
    "scramble": "AHHNOFB",
    "retired": true
  },
  {
    "id": "v3-riddle-38",
    "kind": "riddle",
    "text": "Buchstabensalat · Werkstatt: R · H · A · E · M · M",
    "answer": "Hammer. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Werkstatt",
    "anagram": "HAMMER",
    "scramble": "RHAEMM",
    "retired": true
  },
  {
    "id": "v3-riddle-39",
    "kind": "riddle",
    "text": "Buchstabensalat · Werkstatt: A · G · E · Z · N",
    "answer": "Zange. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Werkstatt",
    "anagram": "ZANGE",
    "scramble": "AGEZN",
    "retired": true
  },
  {
    "id": "v3-riddle-40",
    "kind": "riddle",
    "text": "Buchstabensalat · Werkstatt: S · E · Ä · G",
    "answer": "Säge. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Werkstatt",
    "anagram": "SÄGE",
    "scramble": "SEÄG",
    "retired": true
  },
  {
    "id": "v3-riddle-41",
    "kind": "riddle",
    "text": "Buchstabensalat · Werkstatt: L · E · F · E · I",
    "answer": "Feile. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Werkstatt",
    "anagram": "FEILE",
    "scramble": "LEFEI",
    "retired": true
  },
  {
    "id": "v3-riddle-42",
    "kind": "riddle",
    "text": "Buchstabensalat · Werkstatt: C · U · H · A · E · S · R · B",
    "answer": "Schraube. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Werkstatt",
    "anagram": "SCHRAUBE",
    "scramble": "CUHAESRB",
    "retired": true
  },
  {
    "id": "v3-riddle-43",
    "kind": "riddle",
    "text": "Buchstabensalat · Werkstatt: O · B · E · R · H · R",
    "answer": "Bohrer. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Werkstatt",
    "anagram": "BOHRER",
    "scramble": "OBERHR",
    "retired": true
  },
  {
    "id": "v3-riddle-44",
    "kind": "riddle",
    "text": "Buchstabensalat · Musik: E · E · G · G · I",
    "answer": "Geige. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Musik",
    "anagram": "GEIGE",
    "scramble": "EEGGI",
    "retired": true
  },
  {
    "id": "v3-riddle-45",
    "kind": "riddle",
    "text": "Buchstabensalat · Musik: E · T · F · L · Ö",
    "answer": "Flöte. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Musik",
    "anagram": "FLÖTE",
    "scramble": "ETFLÖ",
    "retired": true
  },
  {
    "id": "v3-riddle-46",
    "kind": "riddle",
    "text": "Buchstabensalat · Musik: M · R · M · E · T · O · L",
    "answer": "Trommel. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Musik",
    "anagram": "TROMMEL",
    "scramble": "MRMETOL",
    "retired": true
  },
  {
    "id": "v3-riddle-47",
    "kind": "riddle",
    "text": "Buchstabensalat · Musik: A · E · H · F · R",
    "answer": "Harfe. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Musik",
    "anagram": "HARFE",
    "scramble": "AEHFR",
    "retired": true
  },
  {
    "id": "v3-riddle-48",
    "kind": "riddle",
    "text": "Buchstabensalat · Musik: K · R · I · V · L · A · E",
    "answer": "Klavier. Alle Buchstaben werden genau einmal verwendet.",
    "topic": "Musik",
    "anagram": "KLAVIER",
    "scramble": "KRIVLAE",
    "retired": true
  },
  {
    "id": "v3-riddle-49",
    "kind": "riddle",
    "text": "Welche drei aufeinanderfolgenden ganzen Zahlen ergeben zusammen 21?",
    "answer": "6, 7 und 8."
  },
  {
    "id": "v3-riddle-50",
    "kind": "riddle",
    "text": "Du überholst bei einem Rennen die Person auf Platz zwei. Auf welchem Platz bist du dann?",
    "answer": "Auf Platz zwei. Den ersten Platz hast du damit noch nicht erreicht."
  },
  {
    "id": "v3-riddle-51",
    "kind": "riddle",
    "text": "Zwei Väter und zwei Söhne teilen drei Äpfel so, dass jeder einen ganzen bekommt. Wie geht das?",
    "answer": "Es sind drei Personen: Großvater, Vater und Sohn."
  },
  {
    "id": "v3-riddle-52",
    "kind": "riddle",
    "text": "Welcher Monat hat mindestens 28 Tage?",
    "answer": "Alle zwölf Monate."
  },
  {
    "id": "v3-riddle-53",
    "kind": "riddle",
    "text": "Was wird größer, wenn man etwas davon wegnimmt?",
    "answer": "Ein Loch."
  },
  {
    "id": "v3-riddle-54",
    "kind": "riddle",
    "text": "Was kannst du fangen, aber nicht werfen?",
    "answer": "Zum Beispiel eine Erkältung."
  },
  {
    "id": "v3-riddle-55",
    "kind": "riddle",
    "text": "Welche Zahl fehlt: 2, 4, 8, 16, …?",
    "answer": "32, wenn die Regel „immer verdoppeln“ lautet."
  },
  {
    "id": "v3-riddle-56",
    "kind": "riddle",
    "text": "Eine Uhr schlägt um drei dreimal. Zwischen dem ersten und letzten Schlag liegen zwei Sekunden. Wie lange dauern sechs Schläge bei gleichem Abstand?",
    "answer": "Fünf Sekunden: sechs Schläge haben fünf Zwischenräume."
  },
  {
    "id": "v3-riddle-57",
    "kind": "riddle",
    "text": "Drei verschiedene Bücher sollen nebeneinander stehen. Wie viele Reihenfolgen gibt es?",
    "answer": "Sechs: 3 Möglichkeiten für das erste, 2 für das zweite und 1 für das dritte Buch."
  },
  {
    "id": "v3-riddle-58",
    "kind": "riddle",
    "text": "Du hast vier Streichhölzer und legst ein Quadrat. Wie viele Ecken hat es?",
    "answer": "Vier. Die Frage versucht nicht immer, dich auszutricksen."
  },
  {
    "id": "v3-riddle-59",
    "kind": "riddle",
    "text": "Was hat einen Rücken, aber keine Wirbelsäule?",
    "answer": "Ein Buch."
  },
  {
    "id": "v3-riddle-60",
    "kind": "riddle",
    "text": "Welche Birne wächst nicht am Baum?",
    "answer": "Eine Glühbirne."
  },
  {
    "id": "v3-riddle-61",
    "kind": "riddle",
    "text": "Was hat Flügel, aber muss kein Tier sein?",
    "answer": "Zum Beispiel ein Flugzeug oder eine Windmühle."
  },
  {
    "id": "v3-riddle-62",
    "kind": "riddle",
    "text": "Welche Feder stammt nicht von einem Vogel?",
    "answer": "Zum Beispiel eine Schraubenfeder oder die Feder eines Füllers."
  },
  {
    "id": "v3-riddle-63",
    "kind": "riddle",
    "text": "Welche Leiter muss keine Sprossen haben?",
    "answer": "Ein elektrischer Leiter."
  },
  {
    "id": "v3-riddle-64",
    "kind": "riddle",
    "text": "Welches Blatt fällt nicht vom Baum?",
    "answer": "Zum Beispiel ein Blatt Papier."
  },
  {
    "id": "v3-riddle-65",
    "kind": "riddle",
    "text": "Welche Krone kannst du beim Zahnarzt bekommen?",
    "answer": "Eine Zahnkrone."
  },
  {
    "id": "v3-riddle-66",
    "kind": "riddle",
    "text": "Welcher Hahn legt keine Eier und ist trotzdem kein Vogel?",
    "answer": "Ein Wasserhahn."
  },
  {
    "id": "v3-riddle-67",
    "kind": "riddle",
    "text": "Was hat Hände nur in manchen Übersetzungen, zeigt aber überall die Zeit?",
    "answer": "Eine Uhr: Auf Englisch heißen Zeiger „hands“."
  },
  {
    "id": "v3-riddle-68",
    "kind": "riddle",
    "text": "In einer Schublade liegen rote und blaue Socken. Wie viele musst du blind herausnehmen, um sicher zwei derselben Farbe zu haben?",
    "answer": "Drei Socken. Spätestens die dritte passt farblich zu einer der ersten beiden."
  },
  {
    "id": "v3-riddle-69",
    "kind": "riddle",
    "text": "Welche Zahl zwischen 10 und 20 ist durch 2 und durch 3 teilbar und hat die Quersumme 3?",
    "answer": "12."
  },
  {
    "id": "v3-riddle-70",
    "kind": "riddle",
    "text": "Was passiert mit dem Wort „NEBEL“, wenn du es rückwärts liest?",
    "answer": "Es wird zu LEBEN."
  },
  {
    "id": "v3-riddle-71",
    "kind": "riddle",
    "text": "Welches Wort entsteht rückwärts aus „LAGER“?",
    "answer": "REGAL."
  },
  {
    "id": "v3-riddle-72",
    "kind": "riddle",
    "text": "Was ist schwerer: ein Kilogramm Federn oder ein Kilogramm Steine?",
    "answer": "Beides hat dieselbe Masse: ein Kilogramm."
  },
  {
    "id": "v3-riddle-73",
    "kind": "riddle",
    "text": "Auf einem Ast sitzen vier Vögel. Einer fliegt davon, zwei kommen dazu. Wie viele sitzen dann dort?",
    "answer": "Fünf – sofern die anderen sitzen bleiben."
  },
  {
    "id": "v3-riddle-74",
    "kind": "riddle",
    "text": "Ein rechteckiges Blatt wird einmal genau mittig gefaltet. Wie viele Lagen Papier liegen danach übereinander?",
    "answer": "Zwei."
  },
  {
    "id": "v3-riddle-75",
    "kind": "riddle",
    "text": "Welche Zahl ist als Wort kürzer: „hundert“ oder „tausend“?",
    "answer": "Beide Wörter haben sieben Buchstaben."
  },
  {
    "id": "v3-riddle-76",
    "kind": "riddle",
    "text": "Eine Zahl ist größer als 20 und kleiner als 30. Sie ist durch 7 teilbar und gerade. Welche ist es?",
    "answer": "28."
  },
  {
    "id": "v3-riddle-77",
    "kind": "riddle",
    "text": "Welcher Wurm lebt auch im Kopf und ist dort meist musikalisch?",
    "answer": "Ein Ohrwurm."
  },
  {
    "id": "v3-riddle-78",
    "kind": "riddle",
    "text": "Welche Schlange steht oft vor einer Kasse?",
    "answer": "Eine Warteschlange."
  },
  {
    "id": "v3-riddle-79",
    "kind": "riddle",
    "text": "Welcher Stern bleibt auch bei Tageslicht gut sichtbar auf manchen Formularen?",
    "answer": "Ein Sternchen als Schriftzeichen."
  },
  {
    "id": "v3-riddle-80",
    "kind": "riddle",
    "text": "Was wird beim Teilen nicht weniger, wenn beide es hinterher wissen?",
    "answer": "Wissen oder eine Information."
  },
  {
    "id": "v3-riddle-81",
    "kind": "riddle",
    "text": "Welche Decke wärmt nicht, obwohl sie über dir sein kann?",
    "answer": "Die Zimmerdecke."
  },
  {
    "id": "v3-riddle-82",
    "kind": "riddle",
    "text": "Welche Maus braucht keinen Käse und bewegt trotzdem einen Zeiger?",
    "answer": "Eine Computermaus."
  },
  {
    "id": "v3-fact-0",
    "kind": "fact",
    "text": "Bambus gehört zu den Gräsern. Seine verholzten Halme machen ihn botanisch nicht zum Baum.",
    "topic": "Pflanzen",
    "source": {
      "url": "https://www.kew.org/plants/giant-bamboo",
      "label": "Kew · Giant bamboo"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-1",
    "kind": "fact",
    "text": "Echte Vanille stammt von Orchideen. Die bekannte „Schote“ ist botanisch eine Kapselfrucht.",
    "topic": "Pflanzen",
    "source": {
      "url": "https://www.kew.org/plants/vanilla",
      "label": "Kew · Vanilla"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-2",
    "kind": "fact",
    "text": "Kakaobäume bilden ihre Blüten direkt am Stamm und an älteren Ästen.",
    "topic": "Pflanzen",
    "source": {
      "url": "https://www.kew.org/plants/cacao-tree",
      "label": "Kew · Cacao tree"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-3",
    "kind": "fact",
    "text": "Die kleinen Blüten des Kakaobaums werden in der Natur unter anderem von winzigen Mücken bestäubt.",
    "topic": "Pflanzen",
    "source": {
      "url": "https://www.kew.org/read-and-watch/caring-for-kews-chocolate",
      "label": "Kew · Chocolate trees"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-4",
    "kind": "fact",
    "text": "Korallen sind Tiere. Was wie eine einzige Koralle aussieht, kann aus vielen einzelnen Polypen bestehen.",
    "topic": "Tierwelt",
    "source": {
      "url": "https://oceanexplorer.noaa.gov/ocean-fact/coral-animal/",
      "label": "NOAA · Coral animals"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-5",
    "kind": "fact",
    "text": "Die Unterwasserwälder aus Kelp bestehen aus großen Braunalgen.",
    "topic": "Meer",
    "source": {
      "url": "https://oceanservice.noaa.gov/facts/kelp.html",
      "label": "NOAA · Kelp forests"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-6",
    "kind": "fact",
    "text": "Flamingos bekommen ihre rosa Färbung durch Farbstoffe aus ihrer Nahrung.",
    "topic": "Tierwelt",
    "source": {
      "url": "https://www.smithsonianmag.com/blogs/national-zoo-conservation-biology-institute/2026/07/17/practical-tips-for-anyone-currently-raising-nine-flamingo-chicks-at-the-same-time/",
      "label": "Smithsonian National Zoo · Flamingos"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-7",
    "kind": "fact",
    "text": "Fledermäuse sind Säugetiere. Ihr wissenschaftlicher Ordnungsname Chiroptera bedeutet sinngemäß „Handflügler“.",
    "topic": "Tierwelt",
    "source": {
      "url": "https://www.nhm.ac.uk/discover/how-to-see-uk-bats-and-give-them-a-helping-hand.html",
      "label": "Natural History Museum · Bats"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-8",
    "kind": "fact",
    "text": "Vom Meeresboden bis zum Gipfel misst Mauna Kea mehr als zehn Kilometer. Der größte Teil des Berges liegt unter Wasser.",
    "topic": "Geografie",
    "source": {
      "url": "https://oceanservice.noaa.gov/facts/highestpoint.html",
      "label": "NOAA · Highest point"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-9",
    "kind": "fact",
    "text": "Vom Erdmittelpunkt aus gemessen liegt der Gipfel des Chimborazo weiter außen als der des Mount Everest. Die Erde ist am Äquator ausgebaucht.",
    "topic": "Geografie",
    "source": {
      "url": "https://oceanservice.noaa.gov/facts/highestpoint.html",
      "label": "NOAA · Highest point"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-10",
    "kind": "fact",
    "text": "Etwa 96,5 Prozent des Wassers auf der Erde befinden sich in den Ozeanen.",
    "topic": "Erde",
    "source": {
      "url": "https://www.usgs.gov/water-science-school/science/oceans-and-seas-and-water-cycle",
      "label": "USGS · Oceans and water cycle"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-11",
    "kind": "fact",
    "text": "Der tiefste bekannte Meeresbereich heißt Challenger Deep und liegt im Marianengraben im westlichen Pazifik.",
    "topic": "Geografie",
    "source": {
      "url": "https://oceanservice.noaa.gov/facts/oceandepth.html",
      "label": "NOAA · Ocean depth"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-12",
    "kind": "fact",
    "text": "Ein Blitz kann die Luft in seiner Umgebung kurzzeitig auf etwa 30.000 Grad Celsius erhitzen.",
    "topic": "Wetter",
    "source": {
      "url": "https://www.nesdis.noaa.gov/about/k-12-education/severe-weather/what-causes-lightning-and-thunder",
      "label": "NOAA · Lightning and thunder"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-13",
    "kind": "fact",
    "text": "Donner entsteht, wenn sich die vom Blitz stark erhitzte Luft sehr schnell ausdehnt.",
    "topic": "Wetter",
    "source": {
      "url": "https://www.nesdis.noaa.gov/about/k-12-education/severe-weather/what-causes-lightning-and-thunder",
      "label": "NOAA · Lightning and thunder"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-14",
    "kind": "fact",
    "text": "Schall braucht ein Medium wie Luft, Wasser oder einen Festkörper. Durch ein vollkommenes Vakuum kann er sich nicht ausbreiten.",
    "topic": "Physik",
    "source": {
      "url": "https://cosmicopia.gsfc.nasa.gov/qa_sp_en.html",
      "label": "NASA · Energy traveling through space"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-15",
    "kind": "fact",
    "text": "Nicht nur der Mond beeinflusst die Gezeiten. Auch die Anziehungskraft der Sonne trägt dazu bei.",
    "topic": "Erde",
    "source": {
      "url": "https://www.noaa.gov/education/resource-collections/ocean-coasts/tides",
      "label": "NOAA · Tides"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-16",
    "kind": "fact",
    "text": "Springtiden treten rund um Neu- und Vollmond auf. Der Name hat nichts mit der Jahreszeit Frühling zu tun.",
    "topic": "Meer",
    "source": {
      "url": "https://tidesandcurrents.noaa.gov/education.html",
      "label": "NOAA · Tides education"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-17",
    "kind": "fact",
    "text": "Rotes Licht wird im Meer schneller absorbiert als blaues. Rote Tiere können in großer Tiefe deshalb sehr dunkel wirken.",
    "topic": "Meer",
    "source": {
      "url": "https://oceanexplorer.noaa.gov/ocean-fact/red-color/",
      "label": "NOAA · Deep-sea colors"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-18",
    "kind": "fact",
    "text": "Bartenwale filtern kleine Beutetiere mit Barten aus dem Wasser. Zahnwale besitzen stattdessen Zähne.",
    "topic": "Tierwelt",
    "source": {
      "url": "https://www.fisheries.noaa.gov/whales?page=1",
      "label": "NOAA Fisheries · Whales"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-fact-19",
    "kind": "fact",
    "text": "Oktopusse haben acht Arme. Die langen Fangtentakel, die man von vielen Kalmaren kennt, fehlen ihnen.",
    "topic": "Tierwelt",
    "source": {
      "url": "https://sanctuaries.noaa.gov/news/oct23/odd-ocean-critters.html",
      "label": "NOAA · Ocean critters"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v3-thought-80",
    "kind": "thought",
    "text": "Welche kleine Freundlichkeit möchtest du heute weitergeben, weil du sie selbst einmal erfahren hast?"
  },
  {
    "id": "v4-quote-4",
    "kind": "quote",
    "text": "Die glücklichen Pessimisten! Welche Freude empfinden sie, so oft sie bewiesen haben, daß es keine Freude giebt.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-5",
    "kind": "quote",
    "text": "Es hat noch Niemand etwas Ordentliches geleistet, der nicht etwas Außerordentliches leisten wollte.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-6",
    "kind": "quote",
    "text": "Der Zufall ist die in Schleier gehüllte Nothwendigkeit.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-9",
    "kind": "quote",
    "text": "Wie weise muß man sein, um immer gut zu sein!",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-11",
    "kind": "quote",
    "text": "Künstler, was Du nicht schaffen mußt, das darfst Du nicht schaffen wollen.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-12",
    "kind": "quote",
    "text": "Eiserne Ausdauer und klaglose Entsagung sind die zwei äußersten Pole der menschlichen Kraft.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-15",
    "kind": "quote",
    "text": "Wenn es einen Glauben giebt, der Berge versetzen kann, so ist es der Glaube an die eigene Kraft.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-19",
    "kind": "quote",
    "text": "Einer der seltensten Glücksfälle, die uns werden können, ist die Gelegenheit zu einer gut angewendeten Wohlthat.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-20",
    "kind": "quote",
    "text": "Die meisten Nachahmer lockt das Unnachahmliche.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-27",
    "kind": "quote",
    "text": "Selbst der bescheidenste Mensch hält mehr von sich, als sein bester Freund von ihm hält.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-33",
    "kind": "quote",
    "text": "Was Du zu müssen glaubst, ist das, was Du willst.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-34",
    "kind": "quote",
    "text": "Das Alter verklärt oder versteinert.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-35",
    "kind": "quote",
    "text": "Die Güte, die nicht grenzenlos ist, verdient den Namen nicht.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-38",
    "kind": "quote",
    "text": "Unbegründeter Tadel ist manchmal eine feine Form der Schmeichelei.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-39",
    "kind": "quote",
    "text": "Sei Deines Willens Herr und Deines Gewissens Knecht.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-40",
    "kind": "quote",
    "text": "Natur ist Wahrheit; Kunst ist die höchste Wahrheit.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-43",
    "kind": "quote",
    "text": "Die Liebe hat nicht nur Rechte, sie hat auch immer recht.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-47",
    "kind": "quote",
    "text": "Der Geist ist ein intermittirender, die Güte ein permanenter Quell.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-49",
    "kind": "quote",
    "text": "Wenn zwei brave Menschen über Grundsätze streiten, haben immer beide recht.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-52",
    "kind": "quote",
    "text": "Macht ist Pflicht — Freiheit ist Verantwortlichkeit.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-53",
    "kind": "quote",
    "text": "Seit dem bekannten Siege der Schildkröte über den Hasen hält sie sich für eine Schnellläuferin.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-58",
    "kind": "quote",
    "text": "Wenn Du einen vielbetretenen Weg lange gehst, so gehst Du ihn endlich allein.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-60",
    "kind": "quote",
    "text": "An das Gute glauben nur die Wenigen, die es üben.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-63",
    "kind": "quote",
    "text": "Es giebt eine schöne Form der Verstellung: die Selbstüberwindung, — und eine schöne Form des Egoismus: die Liebe.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-64",
    "kind": "quote",
    "text": "Wenn man das Dasein als eine Aufgabe betrachtet, dann vermag man es immer zu ertragen.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-67",
    "kind": "quote",
    "text": "Man kann nicht allen helfen! sagt der Engherzige und — hilft Keinem.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-70",
    "kind": "quote",
    "text": "Verständniß des Schönen und Begeisterung für das Schöne sind Eins.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-76",
    "kind": "quote",
    "text": "Was ein Mensch glaubt und woran er zweifelt, ist gleich bezeichnend für die Stärke seines Geistes.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-77",
    "kind": "quote",
    "text": "Der herbste Tadel läßt sich ertragen, wenn man fühlt, daß Derjenige, der tadelt, lieber loben würde.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-78",
    "kind": "quote",
    "text": "Aus dem Verlangen nach dem Ueberflüssigen ist die Kunst entstanden.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-87",
    "kind": "quote",
    "text": "Zu jeder Zeit liegen einige große Wahrheiten in der Luft; sie bilden die geistige Atmosphäre des Jahrhunderts.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-91",
    "kind": "quote",
    "text": "Wenn die Großmuth vollkommen sein soll, muß sie eine kleine Dosis Leichtsinn enthalten.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-94",
    "kind": "quote",
    "text": "Jung sein ist schön; alt sein ist bequem.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-98",
    "kind": "quote",
    "text": "Der Charakter des Künstlers ernährt oder verzehrt sein Talent.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-101",
    "kind": "quote",
    "text": "Manche Leute wären frei, wenn sie zu dem Bewußtsein ihrer Freiheit kommen könnten.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-103",
    "kind": "quote",
    "text": "Der Philosoph zieht seine Schlüsse, der Poet muß die seinen entstehen lassen.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-105",
    "kind": "quote",
    "text": "Die Großen schaffen das Große, die Guten das Dauernde.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-107",
    "kind": "quote",
    "text": "Manuscripte vermodern im Schranke oder reifen darin.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-109",
    "kind": "quote",
    "text": "Mehr noch als nach dem Glück unserer Jugend sehnen wir uns im Alter nach den Wünschen unserer Jugend zurück.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-111",
    "kind": "quote",
    "text": "Was Du wirklich besitzest, das wurde Dir geschenkt.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-112",
    "kind": "quote",
    "text": "An groß angelegte Menschen denkt sich's gut, mit fein angelegten Menschen lebt sich's gut.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-113",
    "kind": "quote",
    "text": "Für die Anspruchsvollen plagt man sich, aber die Anspruchslosen liebt man.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-114",
    "kind": "quote",
    "text": "Respect vor dem Gemeinplatz! Er ist seit Jahrhunderten aufgespeicherte Weisheit.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-115",
    "kind": "quote",
    "text": "Wenn man nicht aufhören will, die Menschen zu lieben, muß man nicht aufhören, ihnen Gutes zu thun.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-117",
    "kind": "quote",
    "text": "Kein Mensch steht so hoch, daß er anderen gegenüber nur gerecht sein dürfte.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-120",
    "kind": "quote",
    "text": "Ein stolzer Mensch verlangt von sich das Außerordentliche, ein hochmüthiger schreibt es sich zu.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-127",
    "kind": "quote",
    "text": "Welch' ein Unterschied liegt darin, wie man's macht und wie sich's macht!",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-128",
    "kind": "quote",
    "text": "Den Strich, den das Genie in Einem Zuge hinwirft, kann das Talent in glücklichen Stunden aus Punkten zusammensetzen.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-132",
    "kind": "quote",
    "text": "Die Menschen, bei denen Verstand und Gemüth sich die Wage halten, gelangen spät zur Reife.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-133",
    "kind": "quote",
    "text": "Der niemals Ehrfurcht empfunden hat, wird sie auch niemals erwecken.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-134",
    "kind": "quote",
    "text": "Nicht, was wir erleben, sondern wie wir empfinden, was wir erleben, macht unser Schicksal aus.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-139",
    "kind": "quote",
    "text": "Ein ganzes Buch — ein ganzes Leben.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-140",
    "kind": "quote",
    "text": "Was Menschen und Dinge werth sind, kann man erst beurtheilen, wenn sie alt geworden.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-141",
    "kind": "quote",
    "text": "Wir hätten wenig Mühe, wenn wir niemals unnöthige Mühe hätten.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-142",
    "kind": "quote",
    "text": "Wenn wir an Freuden denken, die wir erlebt haben, oder noch zu erleben hoffen, denken wir sie uns immer ungetrübt.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-146",
    "kind": "quote",
    "text": "Der Genius weist den Weg, das Talent geht ihn.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-148",
    "kind": "quote",
    "text": "Ueberlege ein Mal, bevor Du giebst, zwei Mal, bevor Du annimmst, und tausendmal, bevor Du verlangst.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-150",
    "kind": "quote",
    "text": "Der Künstler hat nicht dafür zu sorgen, daß sein Werk Anerkennung finde, sondern dafür, daß es sie verdiene.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-151",
    "kind": "quote",
    "text": "Die Natur hat leicht verschwenden; auch das scheinbar ganz nutzlos Verstreute fällt zuletzt doch in ihren Schoß.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-152",
    "kind": "quote",
    "text": "Was noch zu leisten ist, das bedenke; was Du schon geleistet hast, das vergiß.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-155",
    "kind": "quote",
    "text": "Was liegt am Ruhm, da man den Nachruhm nicht erleben kann?",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-158",
    "kind": "quote",
    "text": "Je kleiner das Sandkörnlein ist, desto sicherer hält es sich für die Axe der Welt.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-161",
    "kind": "quote",
    "text": "Das Vernünftige ist durchaus nicht immer das Gute, das Vernünftigste jedoch muß auch das Beste sein.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-162",
    "kind": "quote",
    "text": "Späte Freuden sind die schönsten; sie stehen zwischen entschwundener Sehnsucht und kommendem Frieden.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-163",
    "kind": "quote",
    "text": "Künstler haben gewöhnlich die Meinung von uns, die wir von ihren Werken haben.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-164",
    "kind": "quote",
    "text": "Je kürzer der Fleiß, je länger der Tag.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-167",
    "kind": "quote",
    "text": "Rücksichtslosigkeiten, die edle Menschen erfahren haben, verwandeln sich in Rücksichten, die sie erweisen.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-169",
    "kind": "quote",
    "text": "Der ans Ziel getragen wurde, darf nicht glauben, es erreicht zu haben.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-170",
    "kind": "quote",
    "text": "Wenn wir nur noch das sehen, was wir zu sehen wünschen, sind wir bei der geistigen Blindheit angelangt.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-171",
    "kind": "quote",
    "text": "Die wahre Ehrfurcht geht niemals aus der Furcht hervor.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-172",
    "kind": "quote",
    "text": "Die größte Gleichmacherin ist die Höflichkeit, durch sie werden alle Standesunterschiede aufgehoben.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-176",
    "kind": "quote",
    "text": "In der großen Welt gefällt nichts so sehr wie die Gleichgültigkeit darüber, ob man ihr gefällt.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-178",
    "kind": "quote",
    "text": "Die Palme beugt sich, aber nicht der Pfahl.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-179",
    "kind": "quote",
    "text": "Die meisten Menschen ertragen es leichter, daß man ihnen zuwider handelt, als daß man ihnen zuwider spricht.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-181",
    "kind": "quote",
    "text": "Begreifen — geistiges Berühren. Erfassen — geistiges Sichaneignen.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-183",
    "kind": "quote",
    "text": "Der Weltmann kennt gewöhnlich die Menschen, aber nicht den Menschen. Beim Dichter ist's umgekehrt.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-184",
    "kind": "quote",
    "text": "Das Erfundene kann vervollkommnet, das Geschaffene nur nachgeahmt werden.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-189",
    "kind": "quote",
    "text": "Erinnere Dich der Vergessenen — eine Welt geht Dir auf.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-193",
    "kind": "quote",
    "text": "Genug weiß Niemand, zu viel so Mancher.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-196",
    "kind": "quote",
    "text": "Bis zu einem gewissen Grade selbstlos sollte man schon aus Selbstsucht sein.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-198",
    "kind": "quote",
    "text": "Das Feuer läutert, verdeckte Gluth frißt an.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-202",
    "kind": "quote",
    "text": "Die Menschen der alten Zeit sind auch die der neuen, aber die Menschen von gestern sind nicht die von heute.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-204",
    "kind": "quote",
    "text": "Grobheit — geistige Unbeholfenheit.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-205",
    "kind": "quote",
    "text": "Wir können uns nie genug darüber wundern, wie so wichtig den Andern ihre eigenen Angelegenheiten sind.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-209",
    "kind": "quote",
    "text": "Wenn die Nachtigallen aufhören zu schlagen, fangen die Grillen an zu zirpen.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-211",
    "kind": "quote",
    "text": "An die Stützen, die wir wanken fühlen, klammern wir uns doppelt fest.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-212",
    "kind": "quote",
    "text": "Das Meiste haben wir gewöhnlich in der Zeit gethan, in der wir meinten, zu wenig zu thun.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-213",
    "kind": "quote",
    "text": "Die allerstillste Liebe ist die Liebe zum Guten.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-216",
    "kind": "quote",
    "text": "Die Aufgabe vieler Dichter-Generationen ist keine andere, als das Werkzeug blank zu erhalten.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-217",
    "kind": "quote",
    "text": "Kein Mensch weiß, was in ihm schlummert und zu Tage kommt, wenn sein Schicksal anfängt, ihm über den Kopf zu wachsen.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-218",
    "kind": "quote",
    "text": "Genire Dich vor Dir selbst, das ist der Anfang aller Vorzüglichkeit.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-226",
    "kind": "quote",
    "text": "Die Katzen halten keinen für eloquent, der nicht miauen kann.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-227",
    "kind": "quote",
    "text": "Ob das Werkzeug früher versagt oder die Hand, ist ein großer Unterschied, kommt aber auf eins heraus.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-231",
    "kind": "quote",
    "text": "Einen Menschen kennen, heißt ihn lieben oder ihn bedauern.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-235",
    "kind": "quote",
    "text": "Klarheit ist Wahrhaftigkeit in der Kunst und in der Wissenschaft.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-236",
    "kind": "quote",
    "text": "So weit Deine Selbstbeherrschung geht, so weit geht Deine Freiheit.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-240",
    "kind": "quote",
    "text": "Nur der Denkende erlebt sein Leben, am Gedankenlosen zieht es vorbei.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-242",
    "kind": "quote",
    "text": "Es giebt keine schüchternen Lehrlinge mehr; es giebt nur noch schüchterne Meister.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-243",
    "kind": "quote",
    "text": "Was geschehen ist, so lange die Welt steht, braucht deshalb nicht zu geschehen, so lange sie noch stehen wird.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-247",
    "kind": "quote",
    "text": "Der völlig vorurtheilslos ist, muß es auch gegen das Vorurtheil sein.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-248",
    "kind": "quote",
    "text": "Wer hat nicht schon das, was er sich zutraut, für das gehalten, was er vermag?",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-250",
    "kind": "quote",
    "text": "Wir unterschätzen das, was wir haben, und überschätzen das, was wir sind.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-251",
    "kind": "quote",
    "text": "Es giebt eine nähere Verwandtschaft als die zwischen Mutter und Kind: die zwischen dem Künstler und seinem Werke.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-252",
    "kind": "quote",
    "text": "Die Summe unserer Erkenntnisse besteht aus dem, was wir gelernt, und aus dem, was wir vergessen haben.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-253",
    "kind": "quote",
    "text": "Begeisterung spricht nicht immer für Den, der sie erweckt, und immer für Den, der sie empfindet.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-255",
    "kind": "quote",
    "text": "Während ein Feuerwerk abgebrannt wird, sieht Niemand nach dem gestirnten Himmel.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-256",
    "kind": "quote",
    "text": "Was wir unserem besten Freunde nicht anvertrauen würden, rufen wir ins Publikum.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-258",
    "kind": "quote",
    "text": "Der Hans, der etwas erlernte, was Hänschen nicht gelernt, der weiß es gut.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-260",
    "kind": "quote",
    "text": "Jeder Mensch hat ein Brett vor dem Kopf — es kommt nur auf die Entfernung an.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-262",
    "kind": "quote",
    "text": "Der kleinste Hügel vermag uns die Aussicht auf einen Chimborazo zu verdecken.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-264",
    "kind": "quote",
    "text": "Nichts schwerer als Den gelten lassen, der uns nicht gelten läßt.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-265",
    "kind": "quote",
    "text": "Was Dein Wort zu bedeuten hat, erfährst Du durch den Widerhall, den es erweckt.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-266",
    "kind": "quote",
    "text": "Nenne Dich nicht arm, weil Deine Träume nicht in Erfüllung gegangen sind; wirklich arm ist nur, der nie geträumt hat.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-268",
    "kind": "quote",
    "text": "Wie theuer Du eine schöne Illusion auch bezahltest, Du hast doch einen guten Handel gemacht.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-269",
    "kind": "quote",
    "text": "Wohl finden wir unsere Worte auf den Lippen der Freunde wieder, aber nicht mehr als unser, sondern als ihr Eigenthum.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-270",
    "kind": "quote",
    "text": "Am Ziele Deiner Wünsche wirst Du jedenfalls Eines vermissen: Dein Wandern zum Ziel.",
    "author": "Marie von Ebner-Eschenbach",
    "work": "Aphorismen · Ausgabe 1893",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.gutenberg.org/cache/epub/77889/pg77889-images.html",
      "label": "Marie von Ebner-Eschenbach · Aphorismen · Ausgabe 1893"
    }
  },
  {
    "id": "v4-quote-272",
    "kind": "quote",
    "text": "Man verändert fremde Reden beim Wiederholen wohl nur darum so sehr, weil man sie nicht verstanden hat.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-273",
    "kind": "quote",
    "text": "Die angenehmsten Gesellschaften sind die, in welchen eine heitere Ehrerbietung der Glieder gegeneinander obwaltet.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-276",
    "kind": "quote",
    "text": "Der Verständige findet fast alles lächerlich, der Vernünftige fast nichts.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-283",
    "kind": "quote",
    "text": "Freiwillige Abhängigkeit ist der schönste Zustand, und wie wäre der möglich ohne Liebe!",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-284",
    "kind": "quote",
    "text": "Gegen große Vorzüge eines andern gibt es kein Rettungsmittel als die Liebe.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-285",
    "kind": "quote",
    "text": "Man hält die Menschen gewöhnlich für gefährlicher, als sie sind.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-289",
    "kind": "quote",
    "text": "Wenn der Mensch alles leisten soll, was man von ihm fordert, so muß er sich für mehr halten, als er ist.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-292",
    "kind": "quote",
    "text": "Sie peitschen den Quark, ob nicht etwa Creme daraus werden wolle.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-295",
    "kind": "quote",
    "text": "Die Freigebigkeit erwirbt einem jeden Gunst, vorzüglich wenn sie von Demut begleitet wird.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-299",
    "kind": "quote",
    "text": "Nicht überall, wo Wasser ist, sind Frösche; aber wo man Frösche hört, ist Wasser.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-301",
    "kind": "quote",
    "text": "Dem tätigen Menschen kommt es darauf an, daß er das Rechte tue; ob das Rechte geschehe, soll ihn nicht kümmern.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-302",
    "kind": "quote",
    "text": "Mancher klopft mit dem Hammer an der Wand herum und glaubt, er treffe jedesmal den Nagel auf den Kopf.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-304",
    "kind": "quote",
    "text": "Nicht jeder, dem man Prägnantes überliefert, wird produktiv; es fällt ihm wohl etwas ganz Bekanntes dabei ein.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-311",
    "kind": "quote",
    "text": "Wer sich vor der Idee scheut, hat auch zuletzt den Begriff nicht mehr.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-313",
    "kind": "quote",
    "text": "Alles Lyrische muß im Ganzen sehr vernünftig, im Einzelnen ein bißchen unvernünftig sein.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-316",
    "kind": "quote",
    "text": "Der Müller denkt, es wachse kein Weizen, als damit seine Mühle gehe.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-317",
    "kind": "quote",
    "text": "Der ist der glücklichste Mensch, der das Ende seines Lebens mit dem Anfang in Verbindung setzen kann.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-319",
    "kind": "quote",
    "text": "Die Vorsicht ist einfach, die Hinterdreinsicht vielfach.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-324",
    "kind": "quote",
    "text": "Wer sich nicht zuviel dünkt, ist viel mehr, als er glaubt.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-325",
    "kind": "quote",
    "text": "Einen Regenbogen, der eine Viertelstunde steht, sieht man nicht mehr an.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-332",
    "kind": "quote",
    "text": "Wenn man von den Leuten Pflichten fordert und ihnen keine Rechte zugestehen will, muß man sie gut bezahlen.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-336",
    "kind": "quote",
    "text": "Wo der Anteil sich verliert, verliert sich auch das Gedächtnis.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-341",
    "kind": "quote",
    "text": "Wenn man alle Gesetze studieren sollte, so hätte man gar keine Zeit, sie zu übertreten.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-342",
    "kind": "quote",
    "text": "Man kann nicht für jedermann leben, besonders für die nicht, mit denen man nicht leben möchte.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-343",
    "kind": "quote",
    "text": "Geheimnisse sind noch keine Wunder.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-350",
    "kind": "quote",
    "text": "Das Fürtreffliche ist unergründlich, man mag damit anfangen, was man will.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-352",
    "kind": "quote",
    "text": "Auch Bücher haben ihr Erlebtes, das ihnen nicht entzogen werden kann.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-354",
    "kind": "quote",
    "text": "Ein jeder, weil er spricht, glaubt, auch über die Sprache sprechen zu können.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-356",
    "kind": "quote",
    "text": "Es gibt Personen, denen ich wohlwill und wünschte, ihnen besser wollen zu können.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-357",
    "kind": "quote",
    "text": "Der Rhythmus hat etwas Zauberisches, sogar macht er uns glauben, das Erhabene gehöre uns an.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-359",
    "kind": "quote",
    "text": "Die Schönheit kann nie über sich selbst deutlich werden.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-365",
    "kind": "quote",
    "text": "Die Menschen halten sich mit ihren Neigungen ans Lebendige. Die Jugend bildet sich wieder an der Jugend.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-366",
    "kind": "quote",
    "text": "Wir mögen die Welt kennenlernen, wie wir wollen, sie wird immer eine Tag- und eine Nachtseite behalten.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-369",
    "kind": "quote",
    "text": "Eine Chronik schreibt nur derjenige, dem die Gegenwart wichtig ist.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-370",
    "kind": "quote",
    "text": "Die Gedanken kommen wieder, die Überzeugungen pflanzen sich fort; die Zustände gehen unwiederbringlich vorüber.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-375",
    "kind": "quote",
    "text": "Es ist eben, als ob man es selbst vermöchte, wenn man sich guten Rats erholen kann.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-377",
    "kind": "quote",
    "text": "Es gibt eine enthusiastische Reflexion, die von dem größten Wert ist, wenn man sich von ihr nur nicht hinreißen läßt.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-378",
    "kind": "quote",
    "text": "Nur in der Schule selbst ist die eigentliche Vorschule.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-382",
    "kind": "quote",
    "text": "Es ist soviel gleichzeitig Tüchtiges und Treffliches auf der Welt, aber es berührt sich nicht.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-384",
    "kind": "quote",
    "text": "Von der besten Gesellschaft sagte man: ihr Gespräch ist unterrichtend, ihr Schweigen bildend.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-387",
    "kind": "quote",
    "text": "Das Erste und Letzte, was vom Genie gefordert wird, ist Wahrheitsliebe.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-388",
    "kind": "quote",
    "text": "Wer gegen sich selbst und andere wahr ist und bleibt, besitzt die schönste Eigenschaft der größten Talente.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-391",
    "kind": "quote",
    "text": "Gar selten tun wir uns selbst genug; desto tröstender ist es, andern genuggetan zu haben.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-395",
    "kind": "quote",
    "text": "Auch in Wissenschaften kann man eigentlich nichts wissen, es will immer getan sein.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-397",
    "kind": "quote",
    "text": "Zuerst belehre man sich selbst, dann wird man Belehrung von andern empfangen.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-399",
    "kind": "quote",
    "text": "Alles Gescheite ist schon gedacht worden, man muß nur versuchen, es noch einmal zu denken.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-400",
    "kind": "quote",
    "text": "Was aber ist deine Pflicht? Die Forderung des Tages.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-403",
    "kind": "quote",
    "text": "In den Werken des Menschen wie in denen der Natur sind eigentlich die Absichten vorzüglich der Aufmerksamkeit wert.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-406",
    "kind": "quote",
    "text": "Wahrheitsliebe zeigt sich darin, daß man überall das Gute zu finden und zu schätzen weiß.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-407",
    "kind": "quote",
    "text": "Das Beste, was wir von der Geschichte haben, ist der Enthusiasmus, den sie erregt.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-408",
    "kind": "quote",
    "text": "Eigentümlichkeit ruft Eigentümlichkeit hervor.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-414",
    "kind": "quote",
    "text": "Man ist nur eigentlich lebendig, wenn man sich des Wohlwollens andrer freut.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-419",
    "kind": "quote",
    "text": "Altes Fundament ehrt man, darf aber das Recht nicht aufgeben, irgendwo wieder einmal von vorn zu gründen.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-420",
    "kind": "quote",
    "text": "Der Mensch muß bei dem Glauben verharren, daß das Unbegreifliche begreiflich sei; er würde sonst nicht forschen.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-423",
    "kind": "quote",
    "text": "Um zu begreifen, daß der Himmel überall blau ist, braucht man nicht um die Welt zu reisen.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-435",
    "kind": "quote",
    "text": "Der echte Schüler lernt aus dem Bekannten das Unbekannte entwickeln und nähert sich dem Meister.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-436",
    "kind": "quote",
    "text": "Was einem angehört, wird man nicht los, und wenn man es wegwürfe.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-441",
    "kind": "quote",
    "text": "Es ist nicht genug zu wissen, man muß auch anwenden; es ist nicht genug zu wollen, man muß auch tun.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-451",
    "kind": "quote",
    "text": "Die größten Schwierigkeiten liegen da, wo wir sie nicht suchen.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-462",
    "kind": "quote",
    "text": "Man kann die Nützlichkeit einer Idee anerkennen und doch nicht recht verstehen, sie vollkommen zu nutzen.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-471",
    "kind": "quote",
    "text": "Nicht allein das Angeborene, sondern auch das Erworbene ist der Mensch.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-472",
    "kind": "quote",
    "text": "Unsre Eigenschaften müssen wir kultivieren, nicht unsre Eigenheiten.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-477",
    "kind": "quote",
    "text": "Sage nicht, daß du geben willst, sondern gib! Die Hoffnung befriedigst du nie.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-478",
    "kind": "quote",
    "text": "Zum Tun gehört Talent, zum Wohltun Vermögen.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-480",
    "kind": "quote",
    "text": "Es gibt keine Lage, die man nicht veredlen könnte durch Leisten oder Dulden.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-489",
    "kind": "quote",
    "text": "Die wahre Liberalität ist Anerkennung.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-493",
    "kind": "quote",
    "text": "Vernünftiges und Unvernünftiges haben gleichen Widerspruch zu erleiden.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-494",
    "kind": "quote",
    "text": "Es ist ganz einerlei, ob man das Wahre oder das Falsche sagt: beidem wird widersprochen.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-495",
    "kind": "quote",
    "text": "Gegner glauben uns zu widerlegen, wenn sie ihre Meinung wiederholen und auf die unsrige nicht achten.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-497",
    "kind": "quote",
    "text": "Es hört doch jeder nur, was er versteht.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-499",
    "kind": "quote",
    "text": "Man frage nicht, ob man durchaus übereinstimmt, sondern ob man in einem Sinne verfährt.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-500",
    "kind": "quote",
    "text": "Wie viele Jahre muß man nicht tun, um nur einigermaßen zu wissen, was und wie es zu tun sei!",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-502",
    "kind": "quote",
    "text": "Wer das erste Knopfloch verfehlt, kommt mit dem Zuknöpfen nicht zu Rande.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-503",
    "kind": "quote",
    "text": "Man geht nie weiter, als wenn man nicht mehr weiß, wohin man geht.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-506",
    "kind": "quote",
    "text": "Versuche, die eigne Autorität zu fundieren: sie ist überall begründet, wo Meisterschaft ist.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-512",
    "kind": "quote",
    "text": "Wer hätte mit mir Geduld haben sollen, wenn ich's nicht gehabt hätte?",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-516",
    "kind": "quote",
    "text": "Weiß denn der Sperling, wie dem Storch zumute sei?",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-517",
    "kind": "quote",
    "text": "Daß man gerade nur denkt, wenn man das, worüber man denkt, nicht ausdenken kann!",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-534",
    "kind": "quote",
    "text": "Aber man muß wissen, wo man steht und wohin die andern wollen.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-538",
    "kind": "quote",
    "text": "Ein ausgesprochnes Wort fordert sich selbst wieder.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-541",
    "kind": "quote",
    "text": "Große Talente sind das schönste Versöhnungsmittel.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-546",
    "kind": "quote",
    "text": "Innerhalb einer Epoche gibt es keinen Standpunkt, eine Epoche zu betrachten.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-552",
    "kind": "quote",
    "text": "Märchen: das uns unmögliche Begebenheiten unter möglichen oder unmöglichen Bedingungen als möglich darstellt.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-553",
    "kind": "quote",
    "text": "Roman: der uns mögliche Begebenheiten unter unmöglichen oder beinahe unmöglichen Bedingungen als wirklich darstellt.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-555",
    "kind": "quote",
    "text": "Eine Romanze ist kein Prozeß, wo ein Definitivurteil sein muß.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-556",
    "kind": "quote",
    "text": "Es ist ein großer Unterschied, ob ich lese zu Genuß und Belebung oder zu Erkenntnis und Belehrung.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-557",
    "kind": "quote",
    "text": "Ich denke immer, wenn ich einen Druckfehler sehe, es sei etwas Neues erfunden.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-559",
    "kind": "quote",
    "text": "Wer streiten will, muß sich hüten, bei dieser Gelegenheit Sachen zu sagen, die ihm niemand streitig macht.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-568",
    "kind": "quote",
    "text": "Es ist so schwer, etwas von Mustern zu lernen, als von der Natur.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-575",
    "kind": "quote",
    "text": "Kunst: eine andere Natur, auch geheimnisvoll, aber verständlicher; denn sie entspringt aus dem Verstande.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-578",
    "kind": "quote",
    "text": "Vollkommenheit kann mit Disproportion bestehen, Schönheit allein mit Proportion.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-583",
    "kind": "quote",
    "text": "Aus vielen Skizzen endlich ein Ganzes hervorzubringen, gelingt selbst den Besten nicht immer.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-588",
    "kind": "quote",
    "text": "Sich den Objekten in der Breite gleichstellen heißt lernen; die Objekte in ihrer Tiefe auffassen heißt erfinden.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-589",
    "kind": "quote",
    "text": "Was man erfindet, tut man mit Liebe, was man gelernt hat, mit Sicherheit.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-590",
    "kind": "quote",
    "text": "Was ist denn das Erfinden? Es ist der Abschluß des Gesuchten.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-591",
    "kind": "quote",
    "text": "Es ist viel mehr schon entdeckt, als man glaubt.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-592",
    "kind": "quote",
    "text": "Denken ist interessanter als Wissen, aber nicht als Anschauen.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-594",
    "kind": "quote",
    "text": "Wir würden unser Wissen nicht für Stückwerk erklären, wenn wir nicht einen Begriff von einem Ganzen hätten.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-599",
    "kind": "quote",
    "text": "Das Jahrhundert ist vorgerückt; jeder Einzelne aber fängt doch von vorne an.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-600",
    "kind": "quote",
    "text": "Jeden Tag hat man Ursache, die Erfahrung aufzuklären und den Geist zu reinigen.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-604",
    "kind": "quote",
    "text": "Nicht alles Wünschenswerte ist erreichbar, nicht alles Erkennenswerte erkennbar.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-608",
    "kind": "quote",
    "text": "Die Sinne trügen nicht, das Urteil trügt.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-612",
    "kind": "quote",
    "text": "Der lebendige begabte Geist, sich in praktischer Absicht ans Allernächste haltend, ist das Vorzüglichste auf Erden.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-615",
    "kind": "quote",
    "text": "Alles ist einfacher, als man denken kann, zugleich verschränkter, als zu begreifen ist.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-618",
    "kind": "quote",
    "text": "Man nehme das nicht übel. Eben dasjenige, was niemand zugibt, niemand hören will, muß desto öfter wiederholt werden.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-636",
    "kind": "quote",
    "text": "Man muß nicht fürchten, überstimmt zu werden, wenn uns widersprochen wird.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-638",
    "kind": "quote",
    "text": "In weltlichen Dingen sind nur zu betrachten die Mittel und der Gebrauch.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-646",
    "kind": "quote",
    "text": "Zum Schönen wird erfordert ein Gesetz, das in die Erscheinung tritt.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-655",
    "kind": "quote",
    "text": "Organische Natur: ins Kleinste lebendig; Kunst: ins Kleinste empfunden.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-657",
    "kind": "quote",
    "text": "Die Funktion ist das Dasein, in Tätigkeit gedacht.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-668",
    "kind": "quote",
    "text": "Alle Kristallisationen sind ein realisiertes Kaleidoskop.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-quote-672",
    "kind": "quote",
    "text": "Setze den Stein nach der Richtschnur, nicht die Richtschnur nach dem Stein.",
    "author": "Johann Wolfgang von Goethe",
    "work": "Maximen und Reflexionen",
    "topic": "Literatur",
    "editorial": "Historische Originalschreibweise",
    "source": {
      "url": "https://www.textgridrep.de/browse/11d2x.0?lang=de",
      "label": "Johann Wolfgang von Goethe · Maximen und Reflexionen"
    }
  },
  {
    "id": "v4-humor-124",
    "kind": "humor",
    "text": "„Ich bin gleich fertig“ ist bei mir eine Zeitzone."
  },
  {
    "id": "v4-humor-125",
    "kind": "humor",
    "text": "Heute bin ich besonders entscheidungsfreudig. Vielleicht."
  },
  {
    "id": "v4-humor-126",
    "kind": "humor",
    "text": "Ich wollte meine Gedanken sortieren. Es gab leider keinen passenden Karton."
  },
  {
    "id": "v4-humor-127",
    "kind": "humor",
    "text": "Die Zwiebel hat gewonnen. Ich habe beim Schneiden zuerst geweint."
  },
  {
    "id": "v4-humor-128",
    "kind": "humor",
    "text": "Für meine nächste Wanderung trainiere ich schon das Einkehren."
  },
  {
    "id": "v4-humor-129",
    "kind": "humor",
    "text": "Wer hat eigentlich beschlossen, dass die Bettdecke morgens weniger zählt als der Kalender?"
  },
  {
    "id": "v4-humor-130",
    "kind": "humor",
    "text": "Das Gurkenglas hat einen Sicherheitsdienst engagiert. Sein Name ist Unterdruck."
  },
  {
    "id": "v4-humor-131",
    "kind": "humor",
    "text": "Meine Garderobe besteht zu einem erstaunlichen Teil aus Stuhllehnen."
  },
  {
    "id": "v4-humor-132",
    "kind": "humor",
    "text": "„Einfach umrühren“ klingt leichter, wenn der Löffel nicht senkrecht stehen bleibt."
  },
  {
    "id": "v4-humor-133",
    "kind": "humor",
    "text": "Ich bin für jedes Wetter gerüstet. Meine Jacke ist nur gerade woanders."
  },
  {
    "id": "v4-humor-134",
    "kind": "humor",
    "text": "Die Tasche ist gepackt. Nun beginne ich, Dinge wieder herauszunehmen, die ich doch brauche."
  },
  {
    "id": "v4-humor-135",
    "kind": "humor",
    "text": "Im Supermarkt bin ich ein sehr überzeugender zukünftiger Gemüseesser."
  },
  {
    "id": "v4-humor-136",
    "kind": "humor",
    "text": "Es ist kein Chaos. Es sind mehrere begonnene Ordnungen."
  },
  {
    "id": "v4-humor-137",
    "kind": "humor",
    "text": "Die Gebrauchsanweisung liegt sicher in der Verpackung. Die Verpackung liegt sicher im Altpapier."
  },
  {
    "id": "v4-humor-138",
    "kind": "humor",
    "text": "Meine Fähigkeiten im Verlegen von Gegenständen werden stark unterschätzt."
  },
  {
    "id": "v4-humor-139",
    "kind": "humor",
    "text": "Zwischen „Ich habe noch Brot“ und „Das war wohl ein Experiment“ liegt manchmal nur ein Blick."
  },
  {
    "id": "v4-humor-140",
    "kind": "humor",
    "text": "Die Klingel funktioniert. Das hat der Paketbote bisher nicht persönlich überprüft."
  },
  {
    "id": "v4-humor-141",
    "kind": "humor",
    "text": "Ein leerer Akku erinnert mich zuverlässig daran, wie viele Kabel ich nicht dabei habe."
  },
  {
    "id": "v4-humor-142",
    "kind": "humor",
    "text": "Meine Pflanze lässt die Blätter hängen. Dramatische Kunst ist offenbar nicht auf Menschen beschränkt."
  },
  {
    "id": "v4-humor-143",
    "kind": "humor",
    "text": "Ich habe gelernt, unter Druck zu arbeiten. Vor allem, wenn die Nudeln überkochen."
  },
  {
    "id": "v4-humor-144",
    "kind": "humor",
    "text": "Der Dosenöffner und ich suchen noch eine gemeinsame Sprache."
  },
  {
    "id": "v4-humor-145",
    "kind": "humor",
    "text": "Wenn das Regal wackelt, liegt es bestimmt an der spannenden Literatur."
  },
  {
    "id": "v4-humor-146",
    "kind": "humor",
    "text": "Mein Morgen beginnt mit einem Dialog: Ich sage „Nein“, der Wecker sagt „Doch“."
  },
  {
    "id": "v4-humor-147",
    "kind": "humor",
    "text": "Eine Tastatur voller Krümel ist ein unbeabsichtigtes Ernährungsprotokoll."
  },
  {
    "id": "v4-humor-148",
    "kind": "humor",
    "text": "Der neue Besen kehrt gut. Ich müsste ihn nur einbeziehen."
  },
  {
    "id": "v4-humor-149",
    "kind": "humor",
    "text": "Beim Aufräumen finde ich regelmäßig Dinge, die ich lieber als das Aufräumen mag."
  },
  {
    "id": "v4-humor-150",
    "kind": "humor",
    "text": "Der Tisch ist gedeckt. Das Essen befindet sich noch in der Konzeptphase."
  },
  {
    "id": "v4-humor-151",
    "kind": "humor",
    "text": "Ich plane meine Spontaneität am liebsten am Vorabend."
  },
  {
    "id": "v4-humor-152",
    "kind": "humor",
    "text": "Das Telefon fragt nach einem Update. Ich hätte auch gern eins."
  },
  {
    "id": "v4-humor-153",
    "kind": "humor",
    "text": "Mein Kühlschrank weiß, wie oft ich ohne konkreten Plan vorbeikomme."
  },
  {
    "id": "v4-humor-154",
    "kind": "humor",
    "text": "Die Topfpflanze wächst dem Licht entgegen. Ich dem Wochenende."
  },
  {
    "id": "v4-humor-155",
    "kind": "humor",
    "text": "Ich habe mich heute sehr bewegt. Zwischen verschiedenen Sitzgelegenheiten."
  },
  {
    "id": "v4-humor-156",
    "kind": "humor",
    "text": "Das Paket soll zwischen acht und achtzehn Uhr kommen. Ein ganzer Tag voller Vorfreude."
  },
  {
    "id": "v4-humor-157",
    "kind": "humor",
    "text": "Mein Fahrrad hat einen Platten. Wir schieben das Problem jetzt gemeinsam vor uns her."
  },
  {
    "id": "v4-humor-158",
    "kind": "humor",
    "text": "Eine saubere Fensterscheibe ist eine Einladung an den nächsten Regen."
  },
  {
    "id": "v4-humor-159",
    "kind": "humor",
    "text": "Ich habe einen Ordner namens „Wichtig“. Darin lebt das Gegenteil von Übersicht."
  },
  {
    "id": "v4-humor-160",
    "kind": "humor",
    "text": "Der Kochlöffel fällt grundsätzlich auf die gerade gewischte Seite des Lebens."
  },
  {
    "id": "v4-humor-161",
    "kind": "humor",
    "text": "„Nur das Nötigste“ hat bei mir erstaunlich viele Ladekabel."
  },
  {
    "id": "v4-humor-162",
    "kind": "humor",
    "text": "Die Socken sind frisch gewaschen und weiterhin verschiedener Meinung."
  },
  {
    "id": "v4-humor-163",
    "kind": "humor",
    "text": "Der Wasserhahn tropft. Wenigstens jemand hier hält den Takt."
  },
  {
    "id": "v4-humor-164",
    "kind": "humor",
    "text": "Im Kleiderschrank herrscht großer Zusammenhalt. Man bekommt kaum etwas einzeln heraus."
  },
  {
    "id": "v4-humor-165",
    "kind": "humor",
    "text": "Die Tomatensauce hat mein weißes Hemd persönlich begrüßt."
  },
  {
    "id": "v4-humor-166",
    "kind": "humor",
    "text": "Mein Reisewecker ist klein, aber mein Widerwillen gegen ihn passt nicht ins Handgepäck."
  },
  {
    "id": "v4-humor-167",
    "kind": "humor",
    "text": "Ich kann eine Tüte Chips sehr gut für später aufheben. Bis ungefähr später am Abend."
  },
  {
    "id": "v4-humor-168",
    "kind": "humor",
    "text": "Der Einkaufszettel nennt drei Dinge. Der Kassenbon hat eine andere Erinnerung."
  },
  {
    "id": "v4-humor-169",
    "kind": "humor",
    "text": "Die Tischdecke liegt gerade. Wir sollten jetzt nicht unvorsichtig leben."
  },
  {
    "id": "v4-humor-170",
    "kind": "humor",
    "text": "Ein angebrannter Toast ist ein Frühstück mit sehr deutlicher Handschrift."
  },
  {
    "id": "v4-humor-171",
    "kind": "humor",
    "text": "Mein neues Hobby ist, Material für neue Hobbys zu sammeln."
  },
  {
    "id": "v4-humor-172",
    "kind": "humor",
    "text": "Die große Schüssel passt in den Schrank. Nur die Tür möchte noch darüber sprechen."
  },
  {
    "id": "v4-humor-173",
    "kind": "humor",
    "text": "Ich habe das Kabel entwirrt. Kurz darauf hat es sich wieder künstlerisch betätigt."
  },
  {
    "id": "v4-humor-174",
    "kind": "humor",
    "text": "Der Kaffeeautomat hat „Bitte warten“ gesagt. Immerhin ist jemand höflich."
  },
  {
    "id": "v4-humor-175",
    "kind": "humor",
    "text": "Ich wollte einen Knopf annähen. Jetzt hat die Nähschachtel den gesamten Tisch übernommen."
  },
  {
    "id": "v4-humor-176",
    "kind": "humor",
    "text": "Meine Schuhe kennen Wege, von denen meine Fitness-App nichts weiß. Meistens zur Bäckerei."
  },
  {
    "id": "v4-humor-177",
    "kind": "humor",
    "text": "„Wir treffen uns ganz entspannt“ war eine sehr angespannte Terminfindung."
  },
  {
    "id": "v4-humor-178",
    "kind": "humor",
    "text": "Der Brief ist fertig geschrieben. Die Briefmarke hat noch keine Kenntnis davon."
  },
  {
    "id": "v4-humor-179",
    "kind": "humor",
    "text": "Ich habe ein Bücherregal gekauft. Die Bücher werten das als Aufforderung."
  },
  {
    "id": "v4-humor-180",
    "kind": "humor",
    "text": "Für eine wirklich gute Ausrede brauche ich manchmal länger als für die Aufgabe."
  },
  {
    "id": "v4-humor-181",
    "kind": "humor",
    "text": "Mein Schlüsselbund hat inzwischen mehr Metall als mein praktisches Wissen darüber."
  },
  {
    "id": "v4-humor-182",
    "kind": "humor",
    "text": "Die neue Seife riecht nach Wald. Das Bad bleibt trotzdem ohne Aussicht."
  },
  {
    "id": "v4-humor-183",
    "kind": "humor",
    "text": "Ich habe den richtigen Deckel gefunden. Die Dose dazu hat sich beruflich neu orientiert."
  },
  {
    "id": "v4-humor-184",
    "kind": "humor",
    "text": "Die Anleitung verspricht „mit wenigen Handgriffen“. Sie kennt meine Hände nicht."
  },
  {
    "id": "v4-humor-185",
    "kind": "humor",
    "text": "Ich glaube an zweite Chancen. Besonders beim Weiterschlafen."
  },
  {
    "id": "v4-humor-186",
    "kind": "humor",
    "text": "Mein Schirm ist offen. Die Wolken nehmen die Herausforderung an."
  },
  {
    "id": "v4-humor-187",
    "kind": "humor",
    "text": "Ich habe einen Stift gesucht und vier alte Kalender gefunden. Recherche ist ein Umweg."
  },
  {
    "id": "v4-humor-188",
    "kind": "humor",
    "text": "Das Glas ist halb voll. Der Rest steht vermutlich noch in der Küche."
  },
  {
    "id": "v4-humor-189",
    "kind": "humor",
    "text": "Meine Notizen sind so knapp, dass selbst ich sie interpretieren muss."
  },
  {
    "id": "v4-humor-190",
    "kind": "humor",
    "text": "Der Reis ist angebrannt. Er wollte wohl einen festen Standpunkt."
  },
  {
    "id": "v4-humor-191",
    "kind": "humor",
    "text": "Es gibt einen Zeitpunkt, an dem Aufwärmen zu erneutem Kochen wird. Ich erforsche ihn."
  },
  {
    "id": "v4-humor-192",
    "kind": "humor",
    "text": "Mein Klebeband findet seinen Anfang geheimhaltungswürdig."
  },
  {
    "id": "v4-humor-193",
    "kind": "humor",
    "text": "Die Spülbürste sieht aus, als hätte sie mehr erlebt als ich."
  },
  {
    "id": "v4-humor-194",
    "kind": "humor",
    "text": "Heute wollte ich etwas ganz anderes machen. Das hat hervorragend geklappt."
  },
  {
    "id": "v4-humor-195",
    "kind": "humor",
    "text": "Ich habe meine Ruhe gefunden. Sie lag unter dem ausgeschalteten Telefon."
  },
  {
    "id": "v4-humor-196",
    "kind": "humor",
    "text": "Die Teekanne tropft sehr gezielt neben die Tasse. Talent ist eben vielseitig."
  },
  {
    "id": "v4-humor-197",
    "kind": "humor",
    "text": "Ein Einkauf ohne Tasche ist ein kostenloser Kurs in Jonglieren."
  },
  {
    "id": "v4-humor-198",
    "kind": "humor",
    "text": "Das Brot liegt ganz hinten im Gefrierfach. Es schützt sich vor spontanen Entscheidungen."
  },
  {
    "id": "v4-humor-199",
    "kind": "humor",
    "text": "Ich habe eine gute Idee notiert. Auf welchem Zettel, war nicht Teil der Idee."
  },
  {
    "id": "v4-humor-200",
    "kind": "humor",
    "text": "Mein Pflanzenuntersetzer hat Grenzen. Die Gießkanne akzeptiert sie nicht."
  },
  {
    "id": "v4-humor-201",
    "kind": "humor",
    "text": "Die Fernbedienung ist wieder aufgetaucht. Ihre Reiseberichte bleiben aus."
  },
  {
    "id": "v4-humor-202",
    "kind": "humor",
    "text": "Bei „ein bisschen Zimt“ wird mein Handgelenk regelmäßig großzügig."
  },
  {
    "id": "v4-humor-203",
    "kind": "humor",
    "text": "Ich besitze jetzt eine schöne Aufbewahrungsbox für meine übrigen Aufbewahrungsboxen."
  },
  {
    "id": "v4-humor-204",
    "kind": "humor",
    "text": "Der neue Teppich passt perfekt zu den Dingen, die ich bald darauf verschütten werde."
  },
  {
    "id": "v4-humor-205",
    "kind": "humor",
    "text": "Meine Taschenlampe braucht Batterien. Meine Motivation offenbar auch."
  },
  {
    "id": "v4-humor-206",
    "kind": "humor",
    "text": "Ich habe die Schublade beschriftet. Sie fühlt sich jetzt amtlicher ungeordnet an."
  },
  {
    "id": "v4-humor-207",
    "kind": "humor",
    "text": "Der Kühlschrank brummt. Vielleicht liest er meinen Einkaufszettel."
  },
  {
    "id": "v4-humor-208",
    "kind": "humor",
    "text": "Beim Kofferpacken bin ich sehr zuversichtlich, wie viele verschiedene Menschen ich im Urlaub sein werde."
  },
  {
    "id": "v4-humor-209",
    "kind": "humor",
    "text": "Ich wollte die Pflanzen umtopfen. Nun brauchen wir alle eine Dusche."
  },
  {
    "id": "v4-humor-210",
    "kind": "humor",
    "text": "Das Radiergummi radiert gut. Wo es hinradiert ist, bleibt offen."
  },
  {
    "id": "v4-humor-211",
    "kind": "humor",
    "text": "Der Toaster kennt nur „blass“ und „archäologischer Fund“."
  },
  {
    "id": "v4-humor-212",
    "kind": "humor",
    "text": "Meine Lieblingsabkürzung hat heute unerwartet zusätzliche Landschaft geliefert."
  },
  {
    "id": "v4-humor-213",
    "kind": "humor",
    "text": "Ich habe den Zettel nicht verloren. Ich habe seine Auffindbarkeit reduziert."
  },
  {
    "id": "v4-humor-214",
    "kind": "humor",
    "text": "Eine schön sortierte Besteckschublade hält genau bis zum nächsten energischen Einräumen."
  },
  {
    "id": "v4-humor-215",
    "kind": "humor",
    "text": "Der Kuchenteig schmeckt gut. Das spätere Backen ist jetzt ein optionales Forschungsfeld."
  },
  {
    "id": "v4-humor-216",
    "kind": "humor",
    "text": "„Ich komme sofort“ heißt bei mir: Ich suche gerade beide Schuhe."
  },
  {
    "id": "v4-humor-217",
    "kind": "humor",
    "text": "Mein Fahrradkorb ist ein fahrbarer Beweis, dass ich zu viel eingekauft habe."
  },
  {
    "id": "v4-humor-218",
    "kind": "humor",
    "text": "Die Schranktür geht nicht zu. Sie vertritt eine konsequente Haltung zu meinem Besitz."
  },
  {
    "id": "v4-humor-219",
    "kind": "humor",
    "text": "Ich habe auf dem Balkon gefrühstückt. Der Wind war mit der Zeitung beschäftigt."
  },
  {
    "id": "v4-humor-220",
    "kind": "humor",
    "text": "Die neue Tasse ist riesig. Endlich stimmt das Verhältnis zwischen Frühstück und Hoffnung."
  },
  {
    "id": "v4-humor-221",
    "kind": "humor",
    "text": "Mein Handy weiß, wo ich bin. Ich wäre schon froh, zu wissen, wo mein Handy ist."
  },
  {
    "id": "v4-humor-222",
    "kind": "humor",
    "text": "Der Faden ist gerissen. Das Nadelöhr hat sein Mitgefühl nicht geäußert."
  },
  {
    "id": "v4-humor-223",
    "kind": "humor",
    "text": "Ich habe den Staub gewischt. Er plant bestimmt schon seine Rückkehr."
  },
  {
    "id": "v4-humor-224",
    "kind": "humor",
    "text": "Mein Wecker hat einen neuen Klingelton. Der Streit bleibt derselbe."
  },
  {
    "id": "v4-humor-225",
    "kind": "humor",
    "text": "Ich bin heute ohne Plan losgegangen. Der Umweg war entsprechend selbstbewusst."
  },
  {
    "id": "v4-humor-226",
    "kind": "humor",
    "text": "Die Lichterkette funktioniert. Bis auf genau die Stelle, die ich gerade anschaue."
  },
  {
    "id": "v4-humor-227",
    "kind": "humor",
    "text": "Mein Briefbeschwerer macht seinen Beruf hervorragend. Die Briefe bleiben unerledigt liegen."
  },
  {
    "id": "v4-humor-228",
    "kind": "humor",
    "text": "Ich habe eine Pause eingelegt. Sie hat sich überraschend gut eingelebt."
  },
  {
    "id": "v4-humor-229",
    "kind": "humor",
    "text": "Die Schublade mit Geschenkpapier ist gegenwärtig ein Origami-Archiv."
  },
  {
    "id": "v4-humor-230",
    "kind": "humor",
    "text": "Der Tisch hat einen Wasserfleck. Ich nenne ihn Küstenlinie."
  },
  {
    "id": "v4-humor-231",
    "kind": "humor",
    "text": "Die Rechnung liegt sichtbar. Offenbar ist das noch nicht dasselbe wie bezahlt."
  },
  {
    "id": "v4-humor-232",
    "kind": "humor",
    "text": "Ich habe mein Ladegerät eingepackt. Das Gerät dazu fühlt sich jetzt zu Hause allein."
  },
  {
    "id": "v4-humor-233",
    "kind": "humor",
    "text": "Mein Brotbackversuch eignet sich für sehr stabile Sandwiches."
  },
  {
    "id": "v4-humor-234",
    "kind": "humor",
    "text": "Die Jacke hat eine Innentasche. Das habe ich nach drei Jahren zufällig erfahren."
  },
  {
    "id": "v4-humor-235",
    "kind": "humor",
    "text": "Eine volle Waschmaschine ist leichter zu verstehen als ihre Programme."
  },
  {
    "id": "v4-humor-236",
    "kind": "humor",
    "text": "Ich habe den Ofen vorgeheizt. Mein Abendessen muss sich jetzt nur noch materialisieren."
  },
  {
    "id": "v4-humor-237",
    "kind": "humor",
    "text": "Der Schreibtisch steht am Fenster. Meine Aufmerksamkeit inzwischen auch."
  },
  {
    "id": "v4-humor-238",
    "kind": "humor",
    "text": "Heute gab es ein unerwartetes Erfolgserlebnis: Der Stecker passte beim ersten Versuch."
  },
  {
    "id": "v4-humor-239",
    "kind": "humor",
    "text": "Ich wollte pünktlich sein. Die Haustür hat den Schlüsseltest eingeführt."
  },
  {
    "id": "v4-humor-240",
    "kind": "humor",
    "text": "Mein Rasenmäher und ich bevorzugen lange Gespräche vor der eigentlichen Arbeit."
  },
  {
    "id": "v4-humor-241",
    "kind": "humor",
    "text": "Der Salat ist frisch. Das Dressing arbeitet noch an seiner Persönlichkeit."
  },
  {
    "id": "v4-humor-242",
    "kind": "humor",
    "text": "Ich habe mir den Namen notiert. Die Notiz heißt „Name später zuordnen“."
  },
  {
    "id": "v4-humor-243",
    "kind": "humor",
    "text": "Mein Notfallkeks ist seit dem Nachmittag ein historischer Begriff."
  },
  {
    "id": "v4-humor-244",
    "kind": "humor",
    "text": "Der Ventilator verteilt die Wärme sehr demokratisch."
  },
  {
    "id": "v4-humor-245",
    "kind": "humor",
    "text": "Ich wollte nur eine Pflanze kaufen. Die Fensterbank wird jetzt neu verhandelt."
  },
  {
    "id": "v4-humor-246",
    "kind": "humor",
    "text": "Das Bügelbrett ist aufgeklappt. Ein großer Tag für die theoretische Hausarbeit."
  },
  {
    "id": "v4-humor-247",
    "kind": "humor",
    "text": "Die Fußmatte heißt alle willkommen. Ich wäre manchmal gern selektiver."
  },
  {
    "id": "v4-humor-248",
    "kind": "humor",
    "text": "Meine Einkaufstasche enthält eine zweite Einkaufstasche. Vorbereitung wird oft unterschätzt."
  },
  {
    "id": "v4-humor-249",
    "kind": "humor",
    "text": "Der Blumentopf ist hübsch. Die Pflanze wünscht sich zusätzlich Wasser."
  },
  {
    "id": "v4-humor-250",
    "kind": "humor",
    "text": "Ich habe die Treppe genommen. Der Aufzug soll meine Unabhängigkeit bemerken."
  },
  {
    "id": "v4-humor-251",
    "kind": "humor",
    "text": "Die neue Duftkerze heißt „Meeresbrise“. Sie verlangt dafür erstaunlich wenig Seewetter."
  },
  {
    "id": "v4-humor-252",
    "kind": "humor",
    "text": "Mein Werkzeug ist komplett. Jetzt fehlen noch Geduld und ein gerades Brett."
  },
  {
    "id": "v4-humor-253",
    "kind": "humor",
    "text": "Es ist erstaunlich, wie viele Dinge unter „kurz noch“ passen."
  },
  {
    "id": "v4-humor-254",
    "kind": "humor",
    "text": "Ich habe meinem Kalender eine freie Stelle gelassen. Er hat sie sofort weitervermietet."
  },
  {
    "id": "v4-humor-255",
    "kind": "humor",
    "text": "Das Kissen ist frisch bezogen. Das Sofa wirkt jetzt sehr von sich überzeugt."
  },
  {
    "id": "v4-humor-256",
    "kind": "humor",
    "text": "Der Teig muss ruhen. Endlich ein Rezeptschritt, dem ich mich anschließen kann."
  },
  {
    "id": "v4-humor-257",
    "kind": "humor",
    "text": "Ich habe einen Parkplatz gefunden. Mein Auto ist leider gerade nicht dabei."
  },
  {
    "id": "v4-humor-258",
    "kind": "humor",
    "text": "Mein Koffer hat Rollen. Treppen halten das für einen interessanten Vorschlag."
  },
  {
    "id": "v4-humor-259",
    "kind": "humor",
    "text": "Die frisch gewischte Küche sieht aus wie ein Raum, in dem niemand kochen sollte."
  },
  {
    "id": "v4-humor-260",
    "kind": "humor",
    "text": "Ich war heute sehr konzentriert. Auf das Geräusch der Kaffeemaschine."
  },
  {
    "id": "v4-humor-261",
    "kind": "humor",
    "text": "Die neue Mappe für lose Zettel enthält inzwischen lose Mappen."
  },
  {
    "id": "v4-humor-262",
    "kind": "humor",
    "text": "Mein Dachfenster hat einen Regenbericht in Echtzeit."
  },
  {
    "id": "v4-humor-263",
    "kind": "humor",
    "text": "Ich habe die Blumen angeschnitten. Sie sehen jetzt aus, als hätten sie einen Termin gehabt."
  },
  {
    "id": "v4-humor-264",
    "kind": "humor",
    "text": "Der Schneebesen wird seinem Namen im Januar nicht gerecht."
  },
  {
    "id": "v4-humor-265",
    "kind": "humor",
    "text": "Die Handcreme ist fast leer. Der letzte Rest verteilt sich auf mehrere Wochen."
  },
  {
    "id": "v4-humor-266",
    "kind": "humor",
    "text": "Ich habe den Stapel sortiert. Seine Höhe hat sich davon nicht beeindrucken lassen."
  },
  {
    "id": "v4-humor-267",
    "kind": "humor",
    "text": "Die Küche duftet wunderbar. Das Timing muss noch üben."
  },
  {
    "id": "v4-humor-268",
    "kind": "humor",
    "text": "Mein Reiseplan enthält jetzt auch Zeit, den Reiseplan zu suchen."
  },
  {
    "id": "v4-humor-269",
    "kind": "humor",
    "text": "Der Kaktus ist anspruchslos. Wir würden uns ohne Gießkanne vermutlich ausgezeichnet verstehen."
  },
  {
    "id": "v4-humor-270",
    "kind": "humor",
    "text": "Ich habe eine bequeme Hose für wichtige Entscheidungen. Zum Beispiel für die zwischen Sofa und Sessel."
  },
  {
    "id": "v4-humor-271",
    "kind": "humor",
    "text": "Die neue Leselampe beleuchtet überzeugend, dass ich schon wieder eingeschlafen bin."
  },
  {
    "id": "v4-humor-272",
    "kind": "humor",
    "text": "Das Telefon fragt „Bist du noch da?“. Körperlich: ja."
  },
  {
    "id": "v4-humor-273",
    "kind": "humor",
    "text": "Heute ist mir eine wirklich gute Idee gekommen. Sie hat nur leider nicht angehalten."
  },
  {
    "id": "v4-thought-125",
    "kind": "thought",
    "text": "Welchen Gegenstand würdest du behalten, wenn nur seine Geschichte zählen würde?"
  },
  {
    "id": "v4-thought-126",
    "kind": "thought",
    "text": "Ein vertrautes Rezept kann eine Form von Erinnerung sein."
  },
  {
    "id": "v4-thought-127",
    "kind": "thought",
    "text": "Welche Straße in deiner Nähe kennst du nur vom Vorbeifahren?"
  },
  {
    "id": "v4-thought-128",
    "kind": "thought",
    "text": "Gute Gesellschaft braucht nicht immer ein gemeinsames Vorhaben."
  },
  {
    "id": "v4-thought-129",
    "kind": "thought",
    "text": "Welches Wort aus deiner Kindheit benutzt du heute noch?"
  },
  {
    "id": "v4-thought-130",
    "kind": "thought",
    "text": "Eine alte Postkarte erzählt manchmal mehr über den Absender als über den Ort."
  },
  {
    "id": "v4-thought-131",
    "kind": "thought",
    "text": "Was würdest du einem Gast an deiner Heimat erklären, das in keinem Reiseführer steht?"
  },
  {
    "id": "v4-thought-132",
    "kind": "thought",
    "text": "Auch eine geliehene Sache verdient sorgfältige Behandlung."
  },
  {
    "id": "v4-thought-133",
    "kind": "thought",
    "text": "Welche Person hat dir einmal etwas zugetraut, bevor du es selbst getan hast?"
  },
  {
    "id": "v4-thought-134",
    "kind": "thought",
    "text": "Man kann einen Menschen gernhaben und seine Lieblingsmusik trotzdem nicht verstehen."
  },
  {
    "id": "v4-thought-135",
    "kind": "thought",
    "text": "Welche Tür hast du lange nicht geöffnet, obwohl du es gern tun würdest?"
  },
  {
    "id": "v4-thought-136",
    "kind": "thought",
    "text": "Eine kleine Versöhnung darf ohne große Rede beginnen."
  },
  {
    "id": "v4-thought-137",
    "kind": "thought",
    "text": "Wann warst du zuletzt überrascht, wie schnell ein vertrautes Kind gewachsen ist?"
  },
  {
    "id": "v4-thought-138",
    "kind": "thought",
    "text": "Eine Fähigkeit, die leicht aussieht, kann viel unsichtbare Übung enthalten."
  },
  {
    "id": "v4-thought-139",
    "kind": "thought",
    "text": "Welcher Duft gehört für dich zu einem bestimmten Menschen?"
  },
  {
    "id": "v4-thought-140",
    "kind": "thought",
    "text": "Manches möchte nicht verbessert, sondern erst einmal verstanden werden."
  },
  {
    "id": "v4-thought-141",
    "kind": "thought",
    "text": "Welche Geschichte hinter einem Familienfoto würdest du gern erfahren?"
  },
  {
    "id": "v4-thought-142",
    "kind": "thought",
    "text": "Ein Platz am Tisch ist manchmal mehr als eine Sitzgelegenheit."
  },
  {
    "id": "v4-thought-143",
    "kind": "thought",
    "text": "Was hat sich an deinem Begriff von Erfolg verändert?"
  },
  {
    "id": "v4-thought-144",
    "kind": "thought",
    "text": "Es ist freundlich, den Namen eines Menschen richtig auszusprechen."
  },
  {
    "id": "v4-thought-145",
    "kind": "thought",
    "text": "Welchen Blick aus einem Fenster hast du besonders in Erinnerung?"
  },
  {
    "id": "v4-thought-146",
    "kind": "thought",
    "text": "Eine Bitte wird klarer, wenn der andere auch Nein sagen darf."
  },
  {
    "id": "v4-thought-147",
    "kind": "thought",
    "text": "Welche Dinge benutzt du gern, obwohl sie technisch längst veraltet sind?"
  },
  {
    "id": "v4-thought-148",
    "kind": "thought",
    "text": "Man kann sich an einen schönen Ort erinnern, ohne ihn zurückhaben zu müssen."
  },
  {
    "id": "v4-thought-149",
    "kind": "thought",
    "text": "Welche alltägliche Arbeit bemerkst du meist erst, wenn sie nicht erledigt wurde?"
  },
  {
    "id": "v4-thought-150",
    "kind": "thought",
    "text": "Ein ehrliches Lob benennt etwas, das man wirklich wahrgenommen hat."
  },
  {
    "id": "v4-thought-151",
    "kind": "thought",
    "text": "Welche selbst gemachte Sache hat dir einmal besonders viel bedeutet?"
  },
  {
    "id": "v4-thought-152",
    "kind": "thought",
    "text": "Auch der Gastgeber darf einen entspannten Abend haben."
  },
  {
    "id": "v4-thought-153",
    "kind": "thought",
    "text": "Welchen Gegenstand würdest du gern reparieren lernen?"
  },
  {
    "id": "v4-thought-154",
    "kind": "thought",
    "text": "Eine offene Frage muss nicht sofort geschlossen werden."
  },
  {
    "id": "v4-thought-155",
    "kind": "thought",
    "text": "Welche Geste erkennst du bei einem Menschen schon von weitem?"
  },
  {
    "id": "v4-thought-156",
    "kind": "thought",
    "text": "Freundschaft kann auch heißen, einander Pausen zuzugestehen."
  },
  {
    "id": "v4-thought-157",
    "kind": "thought",
    "text": "Was würdest du in einem Brief erzählen, den niemand schnell beantworten muss?"
  },
  {
    "id": "v4-thought-158",
    "kind": "thought",
    "text": "Ein altes Hobby kann warten, ohne beleidigt zu sein."
  },
  {
    "id": "v4-thought-159",
    "kind": "thought",
    "text": "Welche Entscheidung hat sich im Rückblick kleiner angefühlt als vorher?"
  },
  {
    "id": "v4-thought-160",
    "kind": "thought",
    "text": "Es lohnt sich, den Menschen zu danken, die zuverlässig im Hintergrund helfen."
  },
  {
    "id": "v4-thought-161",
    "kind": "thought",
    "text": "Welche Jahreszeit erkennst du am liebsten an ihrem Geruch?"
  },
  {
    "id": "v4-thought-162",
    "kind": "thought",
    "text": "Manchmal darf ein Umzug auch ein Auszug aus alten Gewohnheiten sein."
  },
  {
    "id": "v4-thought-163",
    "kind": "thought",
    "text": "Welche Dinge möchtest du lieber gemeinsam erleben als geschenkt bekommen?"
  },
  {
    "id": "v4-thought-164",
    "kind": "thought",
    "text": "Ein freundlicher Widerspruch kann ein Gespräch bereichern."
  },
  {
    "id": "v4-thought-165",
    "kind": "thought",
    "text": "Welches Foto würdest du gern noch machen, ohne dafür weit zu reisen?"
  },
  {
    "id": "v4-thought-166",
    "kind": "thought",
    "text": "Die Geschichte eines Menschen ist länger als der Ausschnitt, den man gerade sieht."
  },
  {
    "id": "v4-thought-167",
    "kind": "thought",
    "text": "Welche Kleinigkeit hast du von deinen Großeltern gelernt?"
  },
  {
    "id": "v4-thought-168",
    "kind": "thought",
    "text": "Man kann ein Versprechen ernst nehmen und trotzdem über seine Grenzen sprechen."
  },
  {
    "id": "v4-thought-169",
    "kind": "thought",
    "text": "Was war einmal schwierig und ist heute selbstverständlich für dich?"
  },
  {
    "id": "v4-thought-170",
    "kind": "thought",
    "text": "Eine Einladung zum Spaziergang kann leichter sein als die Frage nach einem großen Gespräch."
  },
  {
    "id": "v4-thought-171",
    "kind": "thought",
    "text": "Welche Sprache würdest du gern so weit lernen, dass du jemanden begrüßen kannst?"
  },
  {
    "id": "v4-thought-172",
    "kind": "thought",
    "text": "Manchmal ist ein langsamer Abschied der richtige."
  },
  {
    "id": "v4-thought-173",
    "kind": "thought",
    "text": "Welche Geräusche erinnern dich an einen Urlaub?"
  },
  {
    "id": "v4-thought-174",
    "kind": "thought",
    "text": "Ein aufmerksamer Blick ist nicht dasselbe wie ein prüfender."
  },
  {
    "id": "v4-thought-175",
    "kind": "thought",
    "text": "Welche Aufgabe machst du lieber mit den Händen als am Bildschirm?"
  },
  {
    "id": "v4-thought-176",
    "kind": "thought",
    "text": "Du kannst etwas genießen, ohne es für später zu bewerten."
  },
  {
    "id": "v4-thought-177",
    "kind": "thought",
    "text": "Welche Geschichte erzählt ein Gebrauchsspuren tragender Gegenstand bei dir?"
  },
  {
    "id": "v4-thought-178",
    "kind": "thought",
    "text": "Ein ruhiger Sonntag muss nicht wie der Sonntag anderer Menschen aussehen."
  },
  {
    "id": "v4-thought-179",
    "kind": "thought",
    "text": "Welche Art von Wetter lässt deine Umgebung besonders schön wirken?"
  },
  {
    "id": "v4-thought-180",
    "kind": "thought",
    "text": "Ein gutes Gespräch darf an einem anderen Tag weitergehen."
  },
  {
    "id": "v4-thought-181",
    "kind": "thought",
    "text": "Welche Frage würdest du einem Menschen stellen, den du lange nur flüchtig kanntest?"
  },
  {
    "id": "v4-thought-182",
    "kind": "thought",
    "text": "Es ist ein eigener kleiner Luxus, Zeit für einen neugierigen Umweg zu haben."
  },
  {
    "id": "v4-thought-183",
    "kind": "thought",
    "text": "Welche Mahlzeit würdest du gern noch einmal mit einem bestimmten Menschen teilen?"
  },
  {
    "id": "v4-thought-184",
    "kind": "thought",
    "text": "Ein eigener Rhythmus muss nicht für alle passen."
  },
  {
    "id": "v4-thought-185",
    "kind": "thought",
    "text": "Welcher unscheinbare Ort war einmal der Anfang einer wichtigen Geschichte?"
  },
  {
    "id": "v4-thought-186",
    "kind": "thought",
    "text": "Manchmal ist Rücksicht etwas, das niemand bemerkt, gerade weil es funktioniert."
  },
  {
    "id": "v4-thought-187",
    "kind": "thought",
    "text": "Welche Bewegung hast du einmal neu lernen müssen?"
  },
  {
    "id": "v4-thought-188",
    "kind": "thought",
    "text": "Man kann bei einer Sache Anfänger sein und anderswo viel Erfahrung haben."
  },
  {
    "id": "v4-thought-189",
    "kind": "thought",
    "text": "Welche kleine Verbesserung an deinem Alltag hat sich wirklich bewährt?"
  },
  {
    "id": "v4-thought-190",
    "kind": "thought",
    "text": "Ein Umweg kann auch bloß ein Umweg sein. Du musst ihm keine Lehre abringen."
  },
  {
    "id": "v4-thought-191",
    "kind": "thought",
    "text": "Welchen Baum in deiner Umgebung würdest du auch im Winter wiedererkennen?"
  },
  {
    "id": "v4-thought-192",
    "kind": "thought",
    "text": "Eine Erinnerung darf sich verändern, während ihre Bedeutung bleibt."
  },
  {
    "id": "v4-thought-193",
    "kind": "thought",
    "text": "Welche Ausgabe eines Buches verbindest du mit einer bestimmten Zeit?"
  },
  {
    "id": "v4-thought-194",
    "kind": "thought",
    "text": "Manche Menschen zeigen Zuneigung, indem sie etwas Praktisches erledigen."
  },
  {
    "id": "v4-thought-195",
    "kind": "thought",
    "text": "Was möchtest du einem jüngeren Menschen zeigen, ohne es ihm vorzuschreiben?"
  },
  {
    "id": "v4-thought-196",
    "kind": "thought",
    "text": "Eine neue Gewohnheit darf zunächst noch ungeschickt aussehen."
  },
  {
    "id": "v4-thought-197",
    "kind": "thought",
    "text": "Welche Form von Gastfreundschaft hast du einmal unerwartet erfahren?"
  },
  {
    "id": "v4-thought-198",
    "kind": "thought",
    "text": "Du kannst die Mühe eines Geschenks würdigen, ohne jeden Gegenstand für immer aufzubewahren."
  },
  {
    "id": "v4-thought-199",
    "kind": "thought",
    "text": "Welche Farbe hat für dich eine bestimmte Jahreszeit?"
  },
  {
    "id": "v4-thought-200",
    "kind": "thought",
    "text": "Ein Zuhause darf erkennen lassen, dass darin gelebt wird."
  },
  {
    "id": "v4-thought-201",
    "kind": "thought",
    "text": "Was würdest du gern von einem Menschen erfahren, mit dem du oft nur über Termine sprichst?"
  },
  {
    "id": "v4-thought-202",
    "kind": "thought",
    "text": "Nicht jede schwierige Frage braucht eine endgültige Antwort."
  },
  {
    "id": "v4-thought-203",
    "kind": "thought",
    "text": "Welche Landschaft würdest du gern einmal zu Fuß durchqueren?"
  },
  {
    "id": "v4-thought-204",
    "kind": "thought",
    "text": "Manchmal bringt ein ehrliches „Das war schön“ einen Abend erst richtig zum Abschluss."
  },
  {
    "id": "v4-thought-205",
    "kind": "thought",
    "text": "Welches Geräusch kündigt bei dir den Feierabend an?"
  },
  {
    "id": "v4-thought-206",
    "kind": "thought",
    "text": "Ein Wiedersehen darf auch dann schön sein, wenn beide sich verändert haben."
  },
  {
    "id": "v4-thought-207",
    "kind": "thought",
    "text": "Welche Tätigkeit würdest du gern einmal ohne Zeitmessung machen?"
  },
  {
    "id": "v4-thought-208",
    "kind": "thought",
    "text": "Es ist möglich, etwas zurückzulassen, ohne die gemeinsame Zeit abzuwerten."
  },
  {
    "id": "v4-thought-209",
    "kind": "thought",
    "text": "Welcher kleine Fund auf einem Spaziergang hat dich einmal überrascht?"
  },
  {
    "id": "v4-thought-210",
    "kind": "thought",
    "text": "Eine gute Erklärung nimmt die Frage ernst, statt den Fragenden klein zu machen."
  },
  {
    "id": "v4-thought-211",
    "kind": "thought",
    "text": "Was würdest du gern über den Alltag deiner Vorfahren wissen?"
  },
  {
    "id": "v4-thought-212",
    "kind": "thought",
    "text": "Man kann neue Menschen kennenlernen und alte Bindungen trotzdem pflegen."
  },
  {
    "id": "v4-thought-213",
    "kind": "thought",
    "text": "Welche Räume fühlen sich für dich freundlich an, noch bevor jemand spricht?"
  },
  {
    "id": "v4-thought-214",
    "kind": "thought",
    "text": "Einander ausreden zu lassen ist eine kleine Form von Respekt."
  },
  {
    "id": "v4-thought-215",
    "kind": "thought",
    "text": "Welchen Geschmack verbindest du mit einem Fest?"
  },
  {
    "id": "v4-thought-216",
    "kind": "thought",
    "text": "Manche Gespräche werden leichter, wenn beide nebeneinander gehen."
  },
  {
    "id": "v4-thought-217",
    "kind": "thought",
    "text": "Welche Erinnerung macht dich auch ohne großes Ereignis froh?"
  },
  {
    "id": "v4-thought-218",
    "kind": "thought",
    "text": "Du musst die Begeisterung eines anderen nicht teilen, um dich mit ihm zu freuen."
  },
  {
    "id": "v4-thought-219",
    "kind": "thought",
    "text": "Welche handwerkliche Arbeit würdest du gern einmal aus der Nähe beobachten?"
  },
  {
    "id": "v4-thought-220",
    "kind": "thought",
    "text": "Ein begrenzter Zeitraum kann einem schönen Vorhaben helfen, tatsächlich stattzufinden."
  },
  {
    "id": "v4-thought-221",
    "kind": "thought",
    "text": "Welcher Gegenstand wandert seit Jahren mit dir durch verschiedene Wohnungen?"
  },
  {
    "id": "v4-thought-222",
    "kind": "thought",
    "text": "Manchmal ist ein kleiner verlässlicher Beitrag hilfreicher als ein großes Versprechen."
  },
  {
    "id": "v4-thought-223",
    "kind": "thought",
    "text": "Was würdest du einem Besuch zeigen, der deine Stadt schon zu kennen glaubt?"
  },
  {
    "id": "v4-thought-224",
    "kind": "thought",
    "text": "Ein verständliches Nein erspart oft mehrere unklare Vielleicht."
  },
  {
    "id": "v4-thought-225",
    "kind": "thought",
    "text": "Welche Überraschung war so klein, dass du fast darüber hinweggegangen wärst?"
  },
  {
    "id": "v4-thought-226",
    "kind": "thought",
    "text": "Eine Entscheidung kann sorgfältig sein, obwohl sie sich nicht sicher anfühlt."
  },
  {
    "id": "v4-thought-227",
    "kind": "thought",
    "text": "Welches Lied würdest du gern wieder mit anderen gemeinsam singen?"
  },
  {
    "id": "v4-thought-228",
    "kind": "thought",
    "text": "Manches gehört zum Alltag und verdient trotzdem einen bewussten Dank."
  },
  {
    "id": "v4-thought-229",
    "kind": "thought",
    "text": "Welche freundliche Eigenheit möchtest du bei einem Menschen niemals wegverbessern?"
  },
  {
    "id": "v4-thought-230",
    "kind": "thought",
    "text": "Ein guter Plan darf Platz für das enthalten, was man vorher nicht wusste."
  },
  {
    "id": "v4-thought-231",
    "kind": "thought",
    "text": "Welche Jahreszeit würdest du gern einmal an einem ganz anderen Ort erleben?"
  },
  {
    "id": "v4-thought-232",
    "kind": "thought",
    "text": "Du darfst eine Sache mögen, ohne die ganze Szene darum zu mögen."
  },
  {
    "id": "v4-thought-233",
    "kind": "thought",
    "text": "Was möchtest du bei deinem nächsten Besuch ausdrücklich nicht nebenbei erledigen?"
  },
  {
    "id": "v4-thought-234",
    "kind": "thought",
    "text": "Eine Erklärung darf einfach sein, ohne die Sache kleinzureden."
  },
  {
    "id": "v4-thought-235",
    "kind": "thought",
    "text": "Welche Gegenstände in deiner Nähe wären vor hundert Jahren erstaunlich gewesen?"
  },
  {
    "id": "v4-thought-236",
    "kind": "thought",
    "text": "Man kann einen Menschen unterstützen, ohne seinen Weg für ihn festzulegen."
  },
  {
    "id": "v4-thought-237",
    "kind": "thought",
    "text": "Welche kleine Verantwortung hat dir einmal Vertrauen gezeigt?"
  },
  {
    "id": "v4-thought-238",
    "kind": "thought",
    "text": "Ein Versprechen an dich selbst darf so konkret sein, dass du es erkennen kannst."
  },
  {
    "id": "v4-thought-239",
    "kind": "thought",
    "text": "Welches Stück Natur bemerkst du mitten in einer belebten Umgebung?"
  },
  {
    "id": "v4-thought-240",
    "kind": "thought",
    "text": "Es gibt Erinnerungen, die gerade durch ihre Alltäglichkeit kostbar werden."
  },
  {
    "id": "v4-thought-241",
    "kind": "thought",
    "text": "Was würdest du gern einmal erklären, weil es dich begeistert?"
  },
  {
    "id": "v4-thought-242",
    "kind": "thought",
    "text": "Eine Bitte um Hilfe ist auch eine Gelegenheit, jemandem zu vertrauen."
  },
  {
    "id": "v4-thought-243",
    "kind": "thought",
    "text": "Welche Kindheitsfrage würdest du heute anders beantworten?"
  },
  {
    "id": "v4-thought-244",
    "kind": "thought",
    "text": "Man kann sich etwas wünschen und gleichzeitig schätzen, was schon da ist."
  },
  {
    "id": "v4-thought-245",
    "kind": "thought",
    "text": "Welche Menschen bringen dich dazu, genauer hinzusehen?"
  },
  {
    "id": "v4-thought-246",
    "kind": "thought",
    "text": "Eine geteilte Erinnerung kann zwei verschiedene Fassungen haben."
  },
  {
    "id": "v4-thought-247",
    "kind": "thought",
    "text": "Welcher einfache Satz hat dir einmal in einem schwierigen Moment geholfen?"
  },
  {
    "id": "v4-thought-248",
    "kind": "thought",
    "text": "Ein gelungener gemeinsamer Tag muss nicht von allen gleich beschrieben werden."
  },
  {
    "id": "v4-thought-249",
    "kind": "thought",
    "text": "Welche Abkürzung im Alltag kostet dich manchmal die schönere Aussicht?"
  },
  {
    "id": "v4-thought-250",
    "kind": "thought",
    "text": "Manche Dinge werden erst wertvoll, weil man sich selbst um sie gekümmert hat."
  },
  {
    "id": "v4-thought-251",
    "kind": "thought",
    "text": "Was würdest du gern wieder auswendig wissen?"
  },
  {
    "id": "v4-thought-252",
    "kind": "thought",
    "text": "Ein neuer Anfang muss den alten nicht für wertlos erklären."
  },
  {
    "id": "v4-thought-253",
    "kind": "thought",
    "text": "Welche Gelegenheit möchtest du künftig seltener als selbstverständlich behandeln?"
  },
  {
    "id": "v4-thought-254",
    "kind": "thought",
    "text": "Du kannst über dich lachen, ohne schlecht über dich zu sprechen."
  },
  {
    "id": "v4-thought-255",
    "kind": "thought",
    "text": "Welches Geräusch würdest du für eine Minute gern wieder hören?"
  },
  {
    "id": "v4-thought-256",
    "kind": "thought",
    "text": "Ein gutes Vorbild zeigt auch, wie man mit einem Irrtum umgeht."
  },
  {
    "id": "v4-thought-257",
    "kind": "thought",
    "text": "Welche selbst gewählte Aufgabe hat dich unerwartet mit jemandem verbunden?"
  },
  {
    "id": "v4-thought-258",
    "kind": "thought",
    "text": "Es ist angenehm, einmal etwas nur für den Gebrauch und nicht für den Eindruck zu machen."
  },
  {
    "id": "v4-thought-259",
    "kind": "thought",
    "text": "Welches kleine Handwerk steckt in einer Sache, die du täglich benutzt?"
  },
  {
    "id": "v4-thought-260",
    "kind": "thought",
    "text": "Manchmal zeigt sich Vertrauen darin, dass ein Schweigen nicht erklärt werden muss."
  },
  {
    "id": "v4-thought-261",
    "kind": "thought",
    "text": "Was möchtest du jemandem beibringen, der dir dafür etwas anderes zeigen könnte?"
  },
  {
    "id": "v4-thought-262",
    "kind": "thought",
    "text": "Eine Einladung darf schlicht sein: Zeit, zwei Tassen, ein freier Stuhl."
  },
  {
    "id": "v4-thought-263",
    "kind": "thought",
    "text": "Welche Geschichte steckt hinter einem Spitznamen in deinem Umfeld?"
  },
  {
    "id": "v4-thought-264",
    "kind": "thought",
    "text": "Du kannst jemanden bewundern, ohne so werden zu müssen wie er."
  },
  {
    "id": "v4-thought-265",
    "kind": "thought",
    "text": "Was hat dir einmal gefallen, obwohl du es zuerst nicht ausprobieren wolltest?"
  },
  {
    "id": "v4-thought-266",
    "kind": "thought",
    "text": "Eine gemeinsame Aufgabe kann auch ohne Wettbewerb Freude machen."
  },
  {
    "id": "v4-thought-267",
    "kind": "thought",
    "text": "Welche Farbe würdest du einem besonders ruhigen Tag geben?"
  },
  {
    "id": "v4-thought-268",
    "kind": "thought",
    "text": "Manche Grenzen werden erst sichtbar, wenn man sie freundlich ausspricht."
  },
  {
    "id": "v4-thought-269",
    "kind": "thought",
    "text": "Welchen gewöhnlichen Weg würdest du gern einmal mit einem neugierigen Kind gehen?"
  },
  {
    "id": "v4-thought-270",
    "kind": "thought",
    "text": "Eine gute Idee darf von mehreren Menschen gemeinsam stammen."
  },
  {
    "id": "v4-thought-271",
    "kind": "thought",
    "text": "Was würdest du gern langsam lernen, ohne einen Abschluss dafür zu brauchen?"
  },
  {
    "id": "v4-thought-272",
    "kind": "thought",
    "text": "Ein Brief kann auch dann wichtig sein, wenn er nicht lang ist."
  },
  {
    "id": "v4-thought-273",
    "kind": "thought",
    "text": "Welche scheinbar kleine Zusage möchtest du besonders zuverlässig einhalten?"
  },
  {
    "id": "v4-thought-274",
    "kind": "thought",
    "text": "Ein Moment der Nähe kann mitten in einer ganz gewöhnlichen Tätigkeit entstehen."
  },
  {
    "id": "v4-riddle-105",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: R · B · I · E · B",
    "answer": "Eine passende Lösung: Biber.",
    "topic": "Tierwelt",
    "anagram": "BIBER",
    "scramble": "RBIEB",
    "retired": true
  },
  {
    "id": "v4-riddle-106",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: L · D · A · W",
    "answer": "Eine passende Lösung: Wald.",
    "topic": "Natur",
    "anagram": "WALD",
    "scramble": "LDAW",
    "retired": true
  },
  {
    "id": "v4-riddle-107",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: S · E · R · O",
    "answer": "Eine passende Lösung: Rose.",
    "topic": "Garten",
    "anagram": "ROSE",
    "scramble": "SERO",
    "retired": true
  },
  {
    "id": "v4-riddle-108",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: H · B · C · S · E · E · N · E · S · E · N",
    "answer": "Eine passende Lösung: Schneebesen.",
    "topic": "Küche",
    "anagram": "SCHNEEBESEN",
    "scramble": "HBCSEENESEN",
    "retired": true
  },
  {
    "id": "v4-riddle-109",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: T · F · S · E · R · N · E",
    "answer": "Eine passende Lösung: Fenster.",
    "topic": "Zuhause",
    "anagram": "FENSTER",
    "scramble": "TFSERNE",
    "retired": true
  },
  {
    "id": "v4-riddle-110",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: E · S · P · R · A · S · I · E · S",
    "answer": "Eine passende Lösung: Reisepass.",
    "topic": "Reise",
    "anagram": "REISEPASS",
    "scramble": "ESPRASIES",
    "retired": true
  },
  {
    "id": "v4-riddle-111",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: T · B · R · S · U · S · O · K · C · C · A · H",
    "answer": "Eine passende Lösung: Schraubstock.",
    "topic": "Werkstatt",
    "anagram": "SCHRAUBSTOCK",
    "scramble": "TBRSUSOKCCAH",
    "retired": true
  },
  {
    "id": "v4-riddle-112",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: T · R · G · E · A · I · R",
    "answer": "Eine passende Lösung: Gitarre.",
    "topic": "Musik",
    "anagram": "GITARRE",
    "scramble": "TRGEAIR",
    "retired": true
  },
  {
    "id": "v4-riddle-113",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: D · H · E · M",
    "answer": "Eine passende Lösung: Hemd.",
    "topic": "Kleidung",
    "anagram": "HEMD",
    "scramble": "DHEM",
    "retired": true
  },
  {
    "id": "v4-riddle-114",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: T · T · R · T · A · S · A · U",
    "answer": "Eine passende Lösung: Tastatur.",
    "topic": "Technik",
    "anagram": "TASTATUR",
    "scramble": "TTRTASAU",
    "retired": true
  },
  {
    "id": "v4-riddle-115",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: T · E · N · I · S · R · L · Ä · E · G · H · C · N · S",
    "answer": "Eine passende Lösung: Tennisschläger.",
    "topic": "Sport",
    "anagram": "TENNISSCHLÄGER",
    "scramble": "TENISRLÄEGHCNS",
    "retired": true
  },
  {
    "id": "v4-riddle-116",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: A · E · F · L · P",
    "answer": "Eine passende Lösung: Apfel.",
    "topic": "Essen",
    "anagram": "APFEL",
    "scramble": "AEFLP",
    "retired": true
  },
  {
    "id": "v4-riddle-117",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: U · H · C · L · S",
    "answer": "Eine passende Lösung: Luchs.",
    "topic": "Tierwelt",
    "anagram": "LUCHS",
    "scramble": "UHCLS",
    "retired": true
  },
  {
    "id": "v4-riddle-118",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: H · B · A · C",
    "answer": "Eine passende Lösung: Bach.",
    "topic": "Natur",
    "anagram": "BACH",
    "scramble": "HBAC",
    "retired": true
  },
  {
    "id": "v4-riddle-119",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: E · K · N · E · L",
    "answer": "Eine passende Lösung: Nelke.",
    "topic": "Garten",
    "anagram": "NELKE",
    "scramble": "EKNEL",
    "retired": true
  },
  {
    "id": "v4-riddle-120",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: E · I · B · E · R",
    "answer": "Eine passende Lösung: Reibe.",
    "topic": "Küche",
    "anagram": "REIBE",
    "scramble": "EIBER",
    "retired": true
  },
  {
    "id": "v4-riddle-121",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: R · E · T · I · N · K · L · K · Ü",
    "answer": "Eine passende Lösung: Türklinke.",
    "topic": "Zuhause",
    "anagram": "TÜRKLINKE",
    "scramble": "RETINKLKÜ",
    "retired": true
  },
  {
    "id": "v4-riddle-122",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: F · E · H · R · T · R · A · A · K",
    "answer": "Eine passende Lösung: Fahrkarte.",
    "topic": "Reise",
    "anagram": "FAHRKARTE",
    "scramble": "FEHRTRAAK",
    "retired": true
  },
  {
    "id": "v4-riddle-123",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: R · E · W · K · B · A · N · K",
    "answer": "Eine passende Lösung: Werkbank.",
    "topic": "Werkstatt",
    "anagram": "WERKBANK",
    "scramble": "REWKBANK",
    "retired": true
  },
  {
    "id": "v4-riddle-124",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: E · L · L · U · K · U · E",
    "answer": "Eine passende Lösung: Ukulele.",
    "topic": "Musik",
    "anagram": "UKULELE",
    "scramble": "ELLUKUE",
    "retired": true
  },
  {
    "id": "v4-riddle-125",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: E · U · S · B · L",
    "answer": "Eine passende Lösung: Bluse.",
    "topic": "Kleidung",
    "anagram": "BLUSE",
    "scramble": "EUSBL",
    "retired": true
  },
  {
    "id": "v4-riddle-126",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: B · S · L · M · D · H · R · I · C · I",
    "answer": "Eine passende Lösung: Bildschirm.",
    "topic": "Technik",
    "anagram": "BILDSCHIRM",
    "scramble": "BSLMDHRICI",
    "retired": true
  },
  {
    "id": "v4-riddle-127",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: U · F · S · A · L · B · S · L",
    "answer": "Eine passende Lösung: Fussball.",
    "topic": "Sport",
    "anagram": "FUSSBALL",
    "scramble": "UFSALBSL",
    "retired": true
  },
  {
    "id": "v4-riddle-128",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: B · N · E · I · R",
    "answer": "Eine passende Lösung: Birne.",
    "topic": "Essen",
    "anagram": "BIRNE",
    "scramble": "BNEIR",
    "retired": true
  },
  {
    "id": "v4-riddle-129",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: R · E · M · D · R · A",
    "answer": "Eine passende Lösung: Marder.",
    "topic": "Tierwelt",
    "anagram": "MARDER",
    "scramble": "REMDRA",
    "retired": true
  },
  {
    "id": "v4-riddle-130",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: L · S · F · U · S",
    "answer": "Eine passende Lösung: Fluss.",
    "topic": "Natur",
    "anagram": "FLUSS",
    "scramble": "LSFUS",
    "retired": true
  },
  {
    "id": "v4-riddle-131",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: I · H · E · V · L · N · E · C",
    "answer": "Eine passende Lösung: Veilchen.",
    "topic": "Garten",
    "anagram": "VEILCHEN",
    "scramble": "IHEVLNEC",
    "retired": true
  },
  {
    "id": "v4-riddle-132",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: S · E · T · D · E · R · B · C · E · N · H · I · T",
    "answer": "Eine passende Lösung: Schneidebrett.",
    "topic": "Küche",
    "anagram": "SCHNEIDEBRETT",
    "scramble": "SETDERBCENHIT",
    "retired": true
  },
  {
    "id": "v4-riddle-133",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: F · S · S · M · T · U · E · A · T",
    "answer": "Eine passende Lösung: Fussmatte.",
    "topic": "Zuhause",
    "anagram": "FUSSMATTE",
    "scramble": "FSSMTUEAT",
    "retired": true
  },
  {
    "id": "v4-riddle-134",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: K · R · R · E · B · A · O · D · T",
    "answer": "Eine passende Lösung: Bordkarte.",
    "topic": "Reise",
    "anagram": "BORDKARTE",
    "scramble": "KRREBAODT",
    "retired": true
  },
  {
    "id": "v4-riddle-135",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: A · E · E · A · W · R · W · G · S · S · A",
    "answer": "Eine passende Lösung: Wasserwaage.",
    "topic": "Werkstatt",
    "anagram": "WASSERWAAGE",
    "scramble": "AEEAWRWGSSA",
    "retired": true
  },
  {
    "id": "v4-riddle-136",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: I · I · E · L · V · N · O",
    "answer": "Eine passende Lösung: Violine.",
    "topic": "Musik",
    "anagram": "VIOLINE",
    "scramble": "IIELVNO",
    "retired": true
  },
  {
    "id": "v4-riddle-137",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: P · O · V · R · L · E · U · L",
    "answer": "Eine passende Lösung: Pullover.",
    "topic": "Kleidung",
    "anagram": "PULLOVER",
    "scramble": "POVRLEUL",
    "retired": true
  },
  {
    "id": "v4-riddle-138",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: H · T · U · P · E · E · R · L · A · R · S · C",
    "answer": "Eine passende Lösung: Lautsprecher.",
    "topic": "Technik",
    "anagram": "LAUTSPRECHER",
    "scramble": "HTUPEERLARSC",
    "retired": true
  },
  {
    "id": "v4-riddle-139",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: A · A · L · B · L · N · D · H",
    "answer": "Eine passende Lösung: Handball.",
    "topic": "Sport",
    "anagram": "HANDBALL",
    "scramble": "AALBLNDH",
    "retired": true
  },
  {
    "id": "v4-riddle-140",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: P · U · E · F · A · M · L",
    "answer": "Eine passende Lösung: Pflaume.",
    "topic": "Essen",
    "anagram": "PFLAUME",
    "scramble": "PUEFAML",
    "retired": true
  },
  {
    "id": "v4-riddle-141",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: E · E · W · L · S · I",
    "answer": "Eine passende Lösung: Wiesel.",
    "topic": "Tierwelt",
    "anagram": "WIESEL",
    "scramble": "EEWLSI",
    "retired": true
  },
  {
    "id": "v4-riddle-142",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: U · Q · L · E · L · E",
    "answer": "Eine passende Lösung: Quelle.",
    "topic": "Natur",
    "anagram": "QUELLE",
    "scramble": "UQLELE",
    "retired": true
  },
  {
    "id": "v4-riddle-143",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: I · I · L · E · L",
    "answer": "Eine passende Lösung: Lilie.",
    "topic": "Garten",
    "anagram": "LILIE",
    "scramble": "IILEL",
    "retired": true
  },
  {
    "id": "v4-riddle-144",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: P · L · E · N · O · P · P · F · T · A",
    "answer": "Eine passende Lösung: Topflappen.",
    "topic": "Küche",
    "anagram": "TOPFLAPPEN",
    "scramble": "PLENOPPFTA",
    "retired": true
  },
  {
    "id": "v4-riddle-145",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: N · A · F · T · I · K · R · S · E · E · B",
    "answer": "Eine passende Lösung: Briefkasten.",
    "topic": "Zuhause",
    "anagram": "BRIEFKASTEN",
    "scramble": "NAFTIKRSEEB",
    "retired": true
  },
  {
    "id": "v4-riddle-146",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: L · R · A · N · A · P · H · F",
    "answer": "Eine passende Lösung: Fahrplan.",
    "topic": "Reise",
    "anagram": "FAHRPLAN",
    "scramble": "LRANAPHF",
    "retired": true
  },
  {
    "id": "v4-riddle-147",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: O · L · K · T · S · O · C · L · Z",
    "answer": "Eine passende Lösung: Zollstock.",
    "topic": "Werkstatt",
    "anagram": "ZOLLSTOCK",
    "scramble": "OLKTSOCLZ",
    "retired": true
  },
  {
    "id": "v4-riddle-148",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: R · C · T · E · A · S · H · B",
    "answer": "Eine passende Lösung: Bratsche.",
    "topic": "Musik",
    "anagram": "BRATSCHE",
    "scramble": "RCTEASHB",
    "retired": true
  },
  {
    "id": "v4-riddle-149",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: J · I · C · A · C · K · R · E · S · T · K",
    "answer": "Eine passende Lösung: Strickjacke.",
    "topic": "Kleidung",
    "anagram": "STRICKJACKE",
    "scramble": "JICACKRESTK",
    "retired": true
  },
  {
    "id": "v4-riddle-150",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: E · K · F · R · H · P · O · R · Ö",
    "answer": "Eine passende Lösung: Kopfhörer.",
    "topic": "Technik",
    "anagram": "KOPFHÖRER",
    "scramble": "EKFRHPORÖ",
    "retired": true
  },
  {
    "id": "v4-riddle-151",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: E · V · A · Y · L · L · O · B · L · L",
    "answer": "Eine passende Lösung: Volleyball.",
    "topic": "Sport",
    "anagram": "VOLLEYBALL",
    "scramble": "EVAYLLOBLL",
    "retired": true
  },
  {
    "id": "v4-riddle-152",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: H · S · I · K · R · C · E",
    "answer": "Eine passende Lösung: Kirsche.",
    "topic": "Essen",
    "anagram": "KIRSCHE",
    "scramble": "HSIKRCE",
    "retired": true
  },
  {
    "id": "v4-riddle-153",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: H · S · M · T · A · E · R",
    "answer": "Eine passende Lösung: Hamster.",
    "topic": "Tierwelt",
    "anagram": "HAMSTER",
    "scramble": "HSMTAER",
    "retired": true
  },
  {
    "id": "v4-riddle-154",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: F · R · E · U",
    "answer": "Eine passende Lösung: Ufer.",
    "topic": "Natur",
    "anagram": "UFER",
    "scramble": "FREU",
    "retired": true
  },
  {
    "id": "v4-riddle-155",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: N · R · I · S · A · Z · S · E",
    "answer": "Eine passende Lösung: Narzisse.",
    "topic": "Garten",
    "anagram": "NARZISSE",
    "scramble": "NRISAZSE",
    "retired": true
  },
  {
    "id": "v4-riddle-156",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: C · Ö · L · L · E · E · S · H · P · K · F",
    "answer": "Eine passende Lösung: Schöpfkelle.",
    "topic": "Küche",
    "anagram": "SCHÖPFKELLE",
    "scramble": "CÖLLEESHPKF",
    "retired": true
  },
  {
    "id": "v4-riddle-157",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: I · E · L · N · G · L · K",
    "answer": "Eine passende Lösung: Klingel.",
    "topic": "Zuhause",
    "anagram": "KLINGEL",
    "scramble": "IELNGLK",
    "retired": true
  },
  {
    "id": "v4-riddle-158",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: G · L · S · I · E",
    "answer": "Eine passende Lösung: Gleis.",
    "topic": "Reise",
    "anagram": "GLEIS",
    "scramble": "GLSIE",
    "retired": true
  },
  {
    "id": "v4-riddle-159",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: B · A · M · D · S · S · N · A",
    "answer": "Eine passende Lösung: Massband.",
    "topic": "Werkstatt",
    "anagram": "MASSBAND",
    "scramble": "BAMDSSNA",
    "retired": true
  },
  {
    "id": "v4-riddle-160",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: O · L · E · C · L",
    "answer": "Eine passende Lösung: Cello.",
    "topic": "Musik",
    "anagram": "CELLO",
    "scramble": "OLECL",
    "retired": true
  },
  {
    "id": "v4-riddle-161",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: E · E · S · T · W",
    "answer": "Eine passende Lösung: Weste.",
    "topic": "Kleidung",
    "anagram": "WESTE",
    "scramble": "EESTW",
    "retired": true
  },
  {
    "id": "v4-riddle-162",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: M · O · O · N · K · R · F · I",
    "answer": "Eine passende Lösung: Mikrofon.",
    "topic": "Technik",
    "anagram": "MIKROFON",
    "scramble": "MOONKRFI",
    "retired": true
  },
  {
    "id": "v4-riddle-163",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: L · T · B · B · K · A · E · A · S · L",
    "answer": "Eine passende Lösung: Basketball.",
    "topic": "Sport",
    "anagram": "BASKETBALL",
    "scramble": "LTBBKAEASL",
    "retired": true
  },
  {
    "id": "v4-riddle-164",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: R · S · C · I · P · H · F · I",
    "answer": "Eine passende Lösung: Pfirsich.",
    "topic": "Essen",
    "anagram": "PFIRSICH",
    "scramble": "RSCIPHFI",
    "retired": true
  },
  {
    "id": "v4-riddle-165",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: E · H · R · C · Ö · H · C · E · N · I · N · H",
    "answer": "Eine passende Lösung: Eichhörnchen.",
    "topic": "Tierwelt",
    "anagram": "EICHHÖRNCHEN",
    "scramble": "EHRCÖHCENINH",
    "retired": true
  },
  {
    "id": "v4-riddle-166",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: S · L · N · I · E",
    "answer": "Eine passende Lösung: Insel.",
    "topic": "Natur",
    "anagram": "INSEL",
    "scramble": "SLNIE",
    "retired": true
  },
  {
    "id": "v4-riddle-167",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: U · O · R · S · K · K",
    "answer": "Eine passende Lösung: Krokus.",
    "topic": "Garten",
    "anagram": "KROKUS",
    "scramble": "UORSKK",
    "retired": true
  },
  {
    "id": "v4-riddle-168",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: L · E · D · Z · O · L · U · N · H",
    "answer": "Eine passende Lösung: Nudelholz.",
    "topic": "Küche",
    "anagram": "NUDELHOLZ",
    "scramble": "LEDZOLUNH",
    "retired": true
  },
  {
    "id": "v4-riddle-169",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: U · L · F · R",
    "answer": "Eine passende Lösung: Flur.",
    "topic": "Zuhause",
    "anagram": "FLUR",
    "scramble": "ULFR",
    "retired": true
  },
  {
    "id": "v4-riddle-170",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: E · N · S · T · B · I · G · H · A",
    "answer": "Eine passende Lösung: Bahnsteig.",
    "topic": "Reise",
    "anagram": "BAHNSTEIG",
    "scramble": "ENSTBIGHA",
    "retired": true
  },
  {
    "id": "v4-riddle-171",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: B · I · S · F · T · I · T · L · E",
    "answer": "Eine passende Lösung: Bleistift.",
    "topic": "Werkstatt",
    "anagram": "BLEISTIFT",
    "scramble": "BISFTITLE",
    "retired": true
  },
  {
    "id": "v4-riddle-172",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: O · T · N · B · K · S · A · R · A · S",
    "answer": "Eine passende Lösung: Kontrabass.",
    "topic": "Musik",
    "anagram": "KONTRABASS",
    "scramble": "OTNBKSARAS",
    "retired": true
  },
  {
    "id": "v4-riddle-173",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: E · T · M · A · N · L",
    "answer": "Eine passende Lösung: Mantel.",
    "topic": "Kleidung",
    "anagram": "MANTEL",
    "scramble": "ETMANL",
    "retired": true
  },
  {
    "id": "v4-riddle-174",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: D · E · K · R · U · R · C",
    "answer": "Eine passende Lösung: Drucker.",
    "topic": "Technik",
    "anagram": "DRUCKER",
    "scramble": "DEKRURC",
    "retired": true
  },
  {
    "id": "v4-riddle-175",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: L · O · L · B · A · F · G · L",
    "answer": "Eine passende Lösung: Golfball.",
    "topic": "Sport",
    "anagram": "GOLFBALL",
    "scramble": "LOLBAFGL",
    "retired": true
  },
  {
    "id": "v4-riddle-176",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: I · K · P · E · O · S · A · R",
    "answer": "Eine passende Lösung: Aprikose.",
    "topic": "Essen",
    "anagram": "APRIKOSE",
    "scramble": "IKPEOSAR",
    "retired": true
  },
  {
    "id": "v4-riddle-177",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: N · I · A · N · C · H · E · N · K",
    "answer": "Eine passende Lösung: Kaninchen.",
    "topic": "Tierwelt",
    "anagram": "KANINCHEN",
    "scramble": "NIANCHENK",
    "retired": true
  },
  {
    "id": "v4-riddle-178",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: Ü · E · T · S · K",
    "answer": "Eine passende Lösung: Küste.",
    "topic": "Natur",
    "anagram": "KÜSTE",
    "scramble": "ÜETSK",
    "retired": true
  },
  {
    "id": "v4-riddle-179",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: I · E · R · T · E · A · M · G · R",
    "answer": "Eine passende Lösung: Margerite.",
    "topic": "Garten",
    "anagram": "MARGERITE",
    "scramble": "IERTEAMGR",
    "retired": true
  },
  {
    "id": "v4-riddle-180",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: B · K · L · C · H · E · B · C · A",
    "answer": "Eine passende Lösung: Backblech.",
    "topic": "Küche",
    "anagram": "BACKBLECH",
    "scramble": "BKLCHEBCA",
    "retired": true
  },
  {
    "id": "v4-riddle-181",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: R · T · P · E · P · E",
    "answer": "Eine passende Lösung: Treppe.",
    "topic": "Zuhause",
    "anagram": "TREPPE",
    "scramble": "RTPEPE",
    "retired": true
  },
  {
    "id": "v4-riddle-182",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: T · S · L · H · E · E · A · E · T · L · L",
    "answer": "Eine passende Lösung: Haltestelle.",
    "topic": "Reise",
    "anagram": "HALTESTELLE",
    "scramble": "TSLHEEAETLL",
    "retired": true
  },
  {
    "id": "v4-riddle-183",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: R · E · P · S · T · Z · I",
    "answer": "Eine passende Lösung: Spitzer.",
    "topic": "Werkstatt",
    "anagram": "SPITZER",
    "scramble": "REPSTZI",
    "retired": true
  },
  {
    "id": "v4-riddle-184",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: F · T · G · T · O · A",
    "answer": "Eine passende Lösung: Fagott.",
    "topic": "Musik",
    "anagram": "FAGOTT",
    "scramble": "FTGTOA",
    "retired": true
  },
  {
    "id": "v4-riddle-185",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: K · P · A · R · A",
    "answer": "Eine passende Lösung: Parka.",
    "topic": "Kleidung",
    "anagram": "PARKA",
    "scramble": "KPARA",
    "retired": true
  },
  {
    "id": "v4-riddle-186",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: S · E · A · R · N · N · C",
    "answer": "Eine passende Lösung: Scanner.",
    "topic": "Technik",
    "anagram": "SCANNER",
    "scramble": "SEARNNC",
    "retired": true
  },
  {
    "id": "v4-riddle-187",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: C · I · I · T · N · S · T · B · L · L · N · E · A · H · S",
    "answer": "Eine passende Lösung: Tischtennisball.",
    "topic": "Sport",
    "anagram": "TISCHTENNISBALL",
    "scramble": "CIITNSTBLLNEAHS",
    "retired": true
  },
  {
    "id": "v4-riddle-188",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: E · E · T · R · I · N · N · A · K",
    "answer": "Eine passende Lösung: Nektarine.",
    "topic": "Essen",
    "anagram": "NEKTARINE",
    "scramble": "EETRINNAK",
    "retired": true
  },
  {
    "id": "v4-riddle-189",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: N · N · W · E · H · R · H · E · S · C · M · I · E · C · E",
    "answer": "Eine passende Lösung: Meerschweinchen.",
    "topic": "Tierwelt",
    "anagram": "MEERSCHWEINCHEN",
    "scramble": "NNWEHRHESCMIECE",
    "retired": true
  },
  {
    "id": "v4-riddle-190",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: A · D · T · N · R · S",
    "answer": "Eine passende Lösung: Strand.",
    "topic": "Natur",
    "anagram": "STRAND",
    "scramble": "ADTNRS",
    "retired": true
  },
  {
    "id": "v4-riddle-191",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: E · N · B · N · U · N · O · L · E · M · S",
    "answer": "Eine passende Lösung: Sonnenblume.",
    "topic": "Garten",
    "anagram": "SONNENBLUME",
    "scramble": "ENBNUNOLEMS",
    "retired": true
  },
  {
    "id": "v4-riddle-192",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: S · M · R · G · F · O · N · I · R · P",
    "answer": "Eine passende Lösung: Springform.",
    "topic": "Küche",
    "anagram": "SPRINGFORM",
    "scramble": "SMRGFONIRP",
    "retired": true
  },
  {
    "id": "v4-riddle-193",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: G · D · N · Ä · L · E · E · R",
    "answer": "Eine passende Lösung: Geländer.",
    "topic": "Zuhause",
    "anagram": "GELÄNDER",
    "scramble": "GDNÄLEER",
    "retired": true
  },
  {
    "id": "v4-riddle-194",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: N · E · K · J · O",
    "answer": "Eine passende Lösung: Kojen.",
    "topic": "Reise",
    "anagram": "KOJEN",
    "scramble": "NEKJO",
    "retired": true
  },
  {
    "id": "v4-riddle-195",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: S · U · H · A · E · I · B · E · N · Z · H · R · C · E · R",
    "answer": "Eine passende Lösung: Schraubenzieher.",
    "topic": "Werkstatt",
    "anagram": "SCHRAUBENZIEHER",
    "scramble": "SUHAEIBENZHRCER",
    "retired": true
  },
  {
    "id": "v4-riddle-196",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: O · O · B · E",
    "answer": "Eine passende Lösung: Oboe.",
    "topic": "Musik",
    "anagram": "OBOE",
    "scramble": "OOBE",
    "retired": true
  },
  {
    "id": "v4-riddle-197",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: R · N · K · E · C · E · A · J · G · E",
    "answer": "Eine passende Lösung: Regenjacke.",
    "topic": "Kleidung",
    "anagram": "REGENJACKE",
    "scramble": "RNKECEAJGE",
    "retired": true
  },
  {
    "id": "v4-riddle-198",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: E · L · T · T · E · A · P · T · S · F",
    "answer": "Eine passende Lösung: Festplatte.",
    "topic": "Technik",
    "anagram": "FESTPLATTE",
    "scramble": "ELTTEAPTSF",
    "retired": true
  },
  {
    "id": "v4-riddle-199",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: L · E · E · B · D · A · F · L · R",
    "answer": "Eine passende Lösung: Federball.",
    "topic": "Sport",
    "anagram": "FEDERBALL",
    "scramble": "LEEBDAFLR",
    "retired": true
  },
  {
    "id": "v4-riddle-200",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: M · N · A · G · O",
    "answer": "Eine passende Lösung: Mango.",
    "topic": "Essen",
    "anagram": "MANGO",
    "scramble": "MNAGO",
    "retired": true
  },
  {
    "id": "v4-riddle-201",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: F · R · P · E · D",
    "answer": "Eine passende Lösung: Pferd.",
    "topic": "Tierwelt",
    "anagram": "PFERD",
    "scramble": "FRPED",
    "retired": true
  },
  {
    "id": "v4-riddle-202",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: N · Ü · D · E",
    "answer": "Eine passende Lösung: Düne.",
    "topic": "Natur",
    "anagram": "DÜNE",
    "scramble": "NÜDE",
    "retired": true
  },
  {
    "id": "v4-riddle-203",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: E · V · N · L · A · D · L · E",
    "answer": "Eine passende Lösung: Lavendel.",
    "topic": "Garten",
    "anagram": "LAVENDEL",
    "scramble": "EVNLADLE",
    "retired": true
  },
  {
    "id": "v4-riddle-204",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: E · B · G · A · C · H · T · E · I · R · S",
    "answer": "Eine passende Lösung: Teigschaber.",
    "topic": "Küche",
    "anagram": "TEIGSCHABER",
    "scramble": "EBGACHTEIRS",
    "retired": true
  },
  {
    "id": "v4-riddle-205",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: H · N · A · L · U · D · A · F",
    "answer": "Eine passende Lösung: Handlauf.",
    "topic": "Zuhause",
    "anagram": "HANDLAUF",
    "scramble": "HNALUDAF",
    "retired": true
  },
  {
    "id": "v4-riddle-206",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: L · E · Z · T",
    "answer": "Eine passende Lösung: Zelt.",
    "topic": "Reise",
    "anagram": "ZELT",
    "scramble": "LEZT",
    "retired": true
  },
  {
    "id": "v4-riddle-207",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: E · I · S · S · Ü · H · N · S · L · S · C · B · U · L",
    "answer": "Eine passende Lösung: Inbusschlüssel.",
    "topic": "Werkstatt",
    "anagram": "INBUSSCHLÜSSEL",
    "scramble": "EISSÜHNSLSCBUL",
    "retired": true
  },
  {
    "id": "v4-riddle-208",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: A · R · K · T · T · N · E · E · I · L",
    "answer": "Eine passende Lösung: Klarinette.",
    "topic": "Musik",
    "anagram": "KLARINETTE",
    "scramble": "ARKTTNEEIL",
    "retired": true
  },
  {
    "id": "v4-riddle-209",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: H · S · O · E",
    "answer": "Eine passende Lösung: Hose.",
    "topic": "Kleidung",
    "anagram": "HOSE",
    "scramble": "HSOE",
    "retired": true
  },
  {
    "id": "v4-riddle-210",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: S · P · R · K · E · E · A · R · E · I · C · T · H",
    "answer": "Eine passende Lösung: Speicherkarte.",
    "topic": "Technik",
    "anagram": "SPEICHERKARTE",
    "scramble": "SPRKEEAREICTH",
    "retired": true
  },
  {
    "id": "v4-riddle-211",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: A · E · H · L · T · N",
    "answer": "Eine passende Lösung: Hantel.",
    "topic": "Sport",
    "anagram": "HANTEL",
    "scramble": "AEHLTN",
    "retired": true
  },
  {
    "id": "v4-riddle-212",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: A · A · A · P · P · Y",
    "answer": "Eine passende Lösung: Papaya.",
    "topic": "Essen",
    "anagram": "PAPAYA",
    "scramble": "AAAPPY",
    "retired": true
  },
  {
    "id": "v4-riddle-213",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: S · E · L · E",
    "answer": "Eine passende Lösung: Esel.",
    "topic": "Tierwelt",
    "anagram": "ESEL",
    "scramble": "SELE",
    "retired": true
  },
  {
    "id": "v4-riddle-214",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: I · P · K · L · P · E",
    "answer": "Eine passende Lösung: Klippe.",
    "topic": "Natur",
    "anagram": "KLIPPE",
    "scramble": "IPKLPE",
    "retired": true
  },
  {
    "id": "v4-riddle-215",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: E · N · Z · M · I",
    "answer": "Eine passende Lösung: Minze.",
    "topic": "Garten",
    "anagram": "MINZE",
    "scramble": "ENZMI",
    "retired": true
  },
  {
    "id": "v4-riddle-216",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: D · S · E · N · N · F · E · O · R · Ö · F",
    "answer": "Eine passende Lösung: Dosenöffner.",
    "topic": "Küche",
    "anagram": "DOSENÖFFNER",
    "scramble": "DSENNFEORÖF",
    "retired": true
  },
  {
    "id": "v4-riddle-217",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: E · S · K · E · N · N · T · F · B · A · R",
    "answer": "Eine passende Lösung: Fensterbank.",
    "topic": "Zuhause",
    "anagram": "FENSTERBANK",
    "scramble": "ESKENNTFBAR",
    "retired": true
  },
  {
    "id": "v4-riddle-218",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: S · H · S · A · C · C · F · K · A · L",
    "answer": "Eine passende Lösung: Schlafsack.",
    "topic": "Reise",
    "anagram": "SCHLAFSACK",
    "scramble": "SHSACCFKAL",
    "retired": true
  },
  {
    "id": "v4-riddle-219",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: I · L · R · C · G · E · S · H · S · Ü · L · N · S",
    "answer": "Eine passende Lösung: Ringschlüssel.",
    "topic": "Werkstatt",
    "anagram": "RINGSCHLÜSSEL",
    "scramble": "ILRCGESHSÜLNS",
    "retired": true
  },
  {
    "id": "v4-riddle-220",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: F · A · N · O · S · O · X",
    "answer": "Eine passende Lösung: Saxofon.",
    "topic": "Musik",
    "anagram": "SAXOFON",
    "scramble": "FANOSOX",
    "retired": true
  },
  {
    "id": "v4-riddle-221",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: C · O · R · K",
    "answer": "Eine passende Lösung: Rock.",
    "topic": "Kleidung",
    "anagram": "ROCK",
    "scramble": "CORK",
    "retired": true
  },
  {
    "id": "v4-riddle-222",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: L · R · A · G · E · E · D · Ä · T",
    "answer": "Eine passende Lösung: Ladegerät.",
    "topic": "Technik",
    "anagram": "LADEGERÄT",
    "scramble": "LRAGEEDÄT",
    "retired": true
  },
  {
    "id": "v4-riddle-223",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: I · L · S · N · G · E · I · R · P · S",
    "answer": "Eine passende Lösung: Springseil.",
    "topic": "Sport",
    "anagram": "SPRINGSEIL",
    "scramble": "ILSNGEIRPS",
    "retired": true
  },
  {
    "id": "v4-riddle-224",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: N · A · A · S · N · A",
    "answer": "Eine passende Lösung: Ananas.",
    "topic": "Essen",
    "anagram": "ANANAS",
    "scramble": "NAASNA",
    "retired": true
  },
  {
    "id": "v4-riddle-225",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: Z · A · B · E · R",
    "answer": "Eine passende Lösung: Zebra.",
    "topic": "Tierwelt",
    "anagram": "ZEBRA",
    "scramble": "ZABER",
    "retired": true
  },
  {
    "id": "v4-riddle-226",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: H · L · E · H · Ö",
    "answer": "Eine passende Lösung: Höhle.",
    "topic": "Natur",
    "anagram": "HÖHLE",
    "scramble": "HLEHÖ",
    "retired": true
  },
  {
    "id": "v4-riddle-227",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: A · E · I · L · B · S",
    "answer": "Eine passende Lösung: Salbei.",
    "topic": "Garten",
    "anagram": "SALBEI",
    "scramble": "AEILBS",
    "retired": true
  },
  {
    "id": "v4-riddle-228",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: F · N · C · L · E · Ö · A · N · S · F · F · H · E · R",
    "answer": "Eine passende Lösung: Flaschenöffner.",
    "topic": "Küche",
    "anagram": "FLASCHENÖFFNER",
    "scramble": "FNCLEÖANSFFHER",
    "retired": true
  },
  {
    "id": "v4-riddle-229",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: Z · Ö · P · I · K · H · E · E · R · R",
    "answer": "Eine passende Lösung: Heizkörper.",
    "topic": "Zuhause",
    "anagram": "HEIZKÖRPER",
    "scramble": "ZÖPIKHEERR",
    "retired": true
  },
  {
    "id": "v4-riddle-230",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: M · A · T · E · T · I · S · O",
    "answer": "Eine passende Lösung: Isomatte.",
    "topic": "Reise",
    "anagram": "ISOMATTE",
    "scramble": "MATETISO",
    "retired": true
  },
  {
    "id": "v4-riddle-231",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: S · L · U · S · M · L · S · C · H · L · E · A · Ü",
    "answer": "Eine passende Lösung: Maulschlüssel.",
    "topic": "Werkstatt",
    "anagram": "MAULSCHLÜSSEL",
    "scramble": "SLUSMLSCHLEAÜ",
    "retired": true
  },
  {
    "id": "v4-riddle-232",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: R · E · M · T · P · T · E · O",
    "answer": "Eine passende Lösung: Trompete.",
    "topic": "Musik",
    "anagram": "TROMPETE",
    "scramble": "REMTPTEO",
    "retired": true
  },
  {
    "id": "v4-riddle-233",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: I · K · L · D · E",
    "answer": "Eine passende Lösung: Kleid.",
    "topic": "Kleidung",
    "anagram": "KLEID",
    "scramble": "IKLDE",
    "retired": true
  },
  {
    "id": "v4-riddle-234",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: E · E · T · D · S · K · C · S · O",
    "answer": "Eine passende Lösung: Steckdose.",
    "topic": "Technik",
    "anagram": "STECKDOSE",
    "scramble": "EETDSKCSO",
    "retired": true
  },
  {
    "id": "v4-riddle-235",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: T · T · T · U · M · N · R · E · A",
    "answer": "Eine passende Lösung: Turnmatte.",
    "topic": "Sport",
    "anagram": "TURNMATTE",
    "scramble": "TTTUMNREA",
    "retired": true
  },
  {
    "id": "v4-riddle-236",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: L · E · E · M · O · N",
    "answer": "Eine passende Lösung: Melone.",
    "topic": "Essen",
    "anagram": "MELONE",
    "scramble": "LEEMON",
    "retired": true
  },
  {
    "id": "v4-riddle-237",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: G · F · E · A · R · I · F",
    "answer": "Eine passende Lösung: Giraffe.",
    "topic": "Tierwelt",
    "anagram": "GIRAFFE",
    "scramble": "GFEARIF",
    "retired": true
  },
  {
    "id": "v4-riddle-238",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: L · G · S · C · T · E · E · H · R",
    "answer": "Eine passende Lösung: Gletscher.",
    "topic": "Natur",
    "anagram": "GLETSCHER",
    "scramble": "LGSCTEEHR",
    "retired": true
  },
  {
    "id": "v4-riddle-239",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: Y · M · T · A · I · N · H",
    "answer": "Eine passende Lösung: Thymian.",
    "topic": "Garten",
    "anagram": "THYMIAN",
    "scramble": "YMTAINH",
    "retired": true
  },
  {
    "id": "v4-riddle-240",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: K · O · Z · H · R · N · E · E · I · K · E · R",
    "answer": "Eine passende Lösung: Korkenzieher.",
    "topic": "Küche",
    "anagram": "KORKENZIEHER",
    "scramble": "KOZHRNEEIKER",
    "retired": true
  },
  {
    "id": "v4-riddle-241",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: H · L · M · A · S · P · E · E · T",
    "answer": "Eine passende Lösung: Stehlampe.",
    "topic": "Zuhause",
    "anagram": "STEHLAMPE",
    "scramble": "HLMASPEET",
    "retired": true
  },
  {
    "id": "v4-riddle-242",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: K · W · D · R · T · E · N · S · C · O · A",
    "answer": "Eine passende Lösung: Wanderstock.",
    "topic": "Reise",
    "anagram": "WANDERSTOCK",
    "scramble": "KWDRTENSCOA",
    "retired": true
  },
  {
    "id": "v4-riddle-243",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: I · E · B · G · S · E · Z · N · A · S",
    "answer": "Eine passende Lösung: Beisszange.",
    "topic": "Werkstatt",
    "anagram": "BEISSZANGE",
    "scramble": "IEBGSEZNAS",
    "retired": true
  },
  {
    "id": "v4-riddle-244",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: O · U · A · S · N · P · E",
    "answer": "Eine passende Lösung: Posaune.",
    "topic": "Musik",
    "anagram": "POSAUNE",
    "scramble": "OUASNPE",
    "retired": true
  },
  {
    "id": "v4-riddle-245",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: E · G · G · L · G · S · N · I",
    "answer": "Eine passende Lösung: Leggings.",
    "topic": "Kleidung",
    "anagram": "LEGGINGS",
    "scramble": "EGGLGSNI",
    "retired": true
  },
  {
    "id": "v4-riddle-246",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: V · S · U · G · Ä · K · N · L · R · N · B · E · R · A · L · G · E · E",
    "answer": "Eine passende Lösung: Verlängerungskabel.",
    "topic": "Technik",
    "anagram": "VERLÄNGERUNGSKABEL",
    "scramble": "VSUGÄKNLRNBERALGEE",
    "retired": true
  },
  {
    "id": "v4-riddle-247",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: C · K · R · E",
    "answer": "Eine passende Lösung: Reck.",
    "topic": "Sport",
    "anagram": "RECK",
    "scramble": "CKRE",
    "retired": true
  },
  {
    "id": "v4-riddle-248",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: R · Z · O · N · I · T · E",
    "answer": "Eine passende Lösung: Zitrone.",
    "topic": "Essen",
    "anagram": "ZITRONE",
    "scramble": "RZONITE",
    "retired": true
  },
  {
    "id": "v4-riddle-249",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: L · T · A · E · N · E · F",
    "answer": "Eine passende Lösung: Elefant.",
    "topic": "Tierwelt",
    "anagram": "ELEFANT",
    "scramble": "LTAENEF",
    "retired": true
  },
  {
    "id": "v4-riddle-250",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: L · T · A",
    "answer": "Eine passende Lösung: Tal.",
    "topic": "Natur",
    "anagram": "TAL",
    "scramble": "LTA",
    "retired": true
  },
  {
    "id": "v4-riddle-251",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: A · I · S · N · R · O · M · R",
    "answer": "Eine passende Lösung: Rosmarin.",
    "topic": "Garten",
    "anagram": "ROSMARIN",
    "scramble": "AISNROMR",
    "retired": true
  },
  {
    "id": "v4-riddle-252",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: U · K · N · O · R · D · E · E · Z · C · S",
    "answer": "Eine passende Lösung: Zuckerdosen.",
    "topic": "Küche",
    "anagram": "ZUCKERDOSEN",
    "scramble": "UKNORDEEZCS",
    "retired": true
  },
  {
    "id": "v4-riddle-253",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: E · N · L · D · U · T · A · C · H · E · W",
    "answer": "Eine passende Lösung: Wandleuchte.",
    "topic": "Zuhause",
    "anagram": "WANDLEUCHTE",
    "scramble": "ENLDUTACHEW",
    "retired": true
  },
  {
    "id": "v4-riddle-254",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: E · C · R · H · A · S · N · I · K · T · F · L",
    "answer": "Eine passende Lösung: Trinkflasche.",
    "topic": "Reise",
    "anagram": "TRINKFLASCHE",
    "scramble": "ECRHASNIKTFL",
    "retired": true
  },
  {
    "id": "v4-riddle-255",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: K · B · I · O · M · A · G · Z · E · N",
    "answer": "Eine passende Lösung: Kombizange.",
    "topic": "Werkstatt",
    "anagram": "KOMBIZANGE",
    "scramble": "KBIOMAGZEN",
    "retired": true
  },
  {
    "id": "v4-riddle-256",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: U · T · A · B",
    "answer": "Eine passende Lösung: Tuba.",
    "topic": "Musik",
    "anagram": "TUBA",
    "scramble": "UTAB",
    "retired": true
  },
  {
    "id": "v4-riddle-257",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: T · U · P · M · F · R · S",
    "answer": "Eine passende Lösung: Strumpf.",
    "topic": "Kleidung",
    "anagram": "STRUMPF",
    "scramble": "TUPMFRS",
    "retired": true
  },
  {
    "id": "v4-riddle-258",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: C · S · A · L · T · R · E · H",
    "answer": "Eine passende Lösung: Schalter.",
    "topic": "Technik",
    "anagram": "SCHALTER",
    "scramble": "CSALTREH",
    "retired": true
  },
  {
    "id": "v4-riddle-259",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: E · R · A · N · R · B",
    "answer": "Eine passende Lösung: Barren.",
    "topic": "Sport",
    "anagram": "BARREN",
    "scramble": "ERANRB",
    "retired": true
  },
  {
    "id": "v4-riddle-260",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: L · T · M · E · T · E · I",
    "answer": "Eine passende Lösung: Limette.",
    "topic": "Essen",
    "anagram": "LIMETTE",
    "scramble": "LTMETEI",
    "retired": true
  },
  {
    "id": "v4-riddle-261",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: S · N · A · R · O · N · H",
    "answer": "Eine passende Lösung: Nashorn.",
    "topic": "Tierwelt",
    "anagram": "NASHORN",
    "scramble": "SNARONH",
    "retired": true
  },
  {
    "id": "v4-riddle-262",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: P · I · G · E · L · F",
    "answer": "Eine passende Lösung: Gipfel.",
    "topic": "Natur",
    "anagram": "GIPFEL",
    "scramble": "PIGELF",
    "retired": true
  },
  {
    "id": "v4-riddle-263",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: K · I · A · L · M · S · I · B · U",
    "answer": "Eine passende Lösung: Basilikum.",
    "topic": "Garten",
    "anagram": "BASILIKUM",
    "scramble": "KIALMSIBU",
    "retired": true
  },
  {
    "id": "v4-riddle-264",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: S · A · R · T · S · Z · L · E · U · E · R",
    "answer": "Eine passende Lösung: Salzstreuer.",
    "topic": "Küche",
    "anagram": "SALZSTREUER",
    "scramble": "SARTSZLEUER",
    "retired": true
  },
  {
    "id": "v4-riddle-265",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: N · T · C · I · H · S · A · C · T · H",
    "answer": "Eine passende Lösung: Nachttisch.",
    "topic": "Zuhause",
    "anagram": "NACHTTISCH",
    "scramble": "NTCIHSACTH",
    "retired": true
  },
  {
    "id": "v4-riddle-266",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: C · A · R · K · S · U · C · K",
    "answer": "Eine passende Lösung: Rucksack.",
    "topic": "Reise",
    "anagram": "RUCKSACK",
    "scramble": "CARKSUCK",
    "retired": true
  },
  {
    "id": "v4-riddle-267",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: N · E · P · Z · T · I · T · E",
    "answer": "Eine passende Lösung: Pinzette.",
    "topic": "Werkstatt",
    "anagram": "PINZETTE",
    "scramble": "NEPZTITE",
    "retired": true
  },
  {
    "id": "v4-riddle-268",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: L · H · R · D · O · A · W · N",
    "answer": "Eine passende Lösung: Waldhorn.",
    "topic": "Musik",
    "anagram": "WALDHORN",
    "scramble": "LHRDOAWN",
    "retired": true
  },
  {
    "id": "v4-riddle-269",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: O · S · K · E · C",
    "answer": "Eine passende Lösung: Socke.",
    "topic": "Kleidung",
    "anagram": "SOCKE",
    "scramble": "OSKEC",
    "retired": true
  },
  {
    "id": "v4-riddle-270",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: E · U · G · R · C · N · H · I · S",
    "answer": "Eine passende Lösung: Sicherung.",
    "topic": "Technik",
    "anagram": "SICHERUNG",
    "scramble": "EUGRCNHIS",
    "retired": true
  },
  {
    "id": "v4-riddle-271",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: I · G · N · R · E",
    "answer": "Eine passende Lösung: Ringe.",
    "topic": "Sport",
    "anagram": "RINGE",
    "scramble": "IGNRE",
    "retired": true
  },
  {
    "id": "v4-riddle-272",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: R · A · N · O · E · G",
    "answer": "Eine passende Lösung: Orange.",
    "topic": "Essen",
    "anagram": "ORANGE",
    "scramble": "RANOEG",
    "retired": true
  },
  {
    "id": "v4-riddle-273",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: L · F · U · P · S · F · R · D · E · S",
    "answer": "Eine passende Lösung: Flusspferd.",
    "topic": "Tierwelt",
    "anagram": "FLUSSPFERD",
    "scramble": "LFUPSFRDES",
    "retired": true
  },
  {
    "id": "v4-riddle-274",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: G · L · H · Ü · E",
    "answer": "Eine passende Lösung: Hügel.",
    "topic": "Natur",
    "anagram": "HÜGEL",
    "scramble": "GLHÜE",
    "retired": true
  },
  {
    "id": "v4-riddle-275",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: I · E · E · S · R · T · E · I · L · P",
    "answer": "Eine passende Lösung: Petersilie.",
    "topic": "Garten",
    "anagram": "PETERSILIE",
    "scramble": "IEESRTEILP",
    "retired": true
  },
  {
    "id": "v4-riddle-276",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: F · Ü · F · E · R · M · P · E · F · E · H · L",
    "answer": "Eine passende Lösung: Pfeffermühle.",
    "topic": "Küche",
    "anagram": "PFEFFERMÜHLE",
    "scramble": "FÜFERMPEFEHL",
    "retired": true
  },
  {
    "id": "v4-riddle-277",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: W · E · R · E · C · K",
    "answer": "Eine passende Lösung: Wecker.",
    "topic": "Zuhause",
    "anagram": "WECKER",
    "scramble": "WERECK",
    "retired": true
  },
  {
    "id": "v4-riddle-278",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: W · A · N · H · E · U · R · H · C · D · S",
    "answer": "Eine passende Lösung: Wanderschuh.",
    "topic": "Reise",
    "anagram": "WANDERSCHUH",
    "scramble": "WANHEURHCDS",
    "retired": true
  },
  {
    "id": "v4-riddle-279",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: I · A · C · P · E · F · P · E · L · H · I · R · S",
    "answer": "Eine passende Lösung: Schleifpapier.",
    "topic": "Werkstatt",
    "anagram": "SCHLEIFPAPIER",
    "scramble": "IACPEFPELHIRS",
    "retired": true
  },
  {
    "id": "v4-riddle-280",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: A · R · K · D · E · O · N · O · K",
    "answer": "Eine passende Lösung: Akkordeon.",
    "topic": "Musik",
    "anagram": "AKKORDEON",
    "scramble": "ARKDEONOK",
    "retired": true
  },
  {
    "id": "v4-riddle-281",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: H · S · H · C · D · U · H · A · N",
    "answer": "Eine passende Lösung: Handschuh.",
    "topic": "Kleidung",
    "anagram": "HANDSCHUH",
    "scramble": "HSHCDUHAN",
    "retired": true
  },
  {
    "id": "v4-riddle-282",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: L · P · G · L · Ü · H · E · A · M",
    "answer": "Eine passende Lösung: Glühlampe.",
    "topic": "Technik",
    "anagram": "GLÜHLAMPE",
    "scramble": "LPGLÜHEAM",
    "retired": true
  },
  {
    "id": "v4-riddle-283",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: A · N · T · P · L · I · O · R · M",
    "answer": "Eine passende Lösung: Trampolin.",
    "topic": "Sport",
    "anagram": "TRAMPOLIN",
    "scramble": "ANTPLIORM",
    "retired": true
  },
  {
    "id": "v4-riddle-284",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: A · M · E · R · A · N · D · I · N",
    "answer": "Eine passende Lösung: Mandarine.",
    "topic": "Essen",
    "anagram": "MANDARINE",
    "scramble": "AMERANDIN",
    "retired": true
  },
  {
    "id": "v4-riddle-285",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: N · E · P · O · A · E · L · T",
    "answer": "Eine passende Lösung: Antelope.",
    "topic": "Tierwelt",
    "anagram": "ANTELOPE",
    "scramble": "NEPOAELT",
    "retired": true
  },
  {
    "id": "v4-riddle-286",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: T · W · Ü · E · S",
    "answer": "Eine passende Lösung: Wüste.",
    "topic": "Natur",
    "anagram": "WÜSTE",
    "scramble": "TWÜES",
    "retired": true
  },
  {
    "id": "v4-riddle-287",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: D · L · L · I",
    "answer": "Eine passende Lösung: Dill.",
    "topic": "Garten",
    "anagram": "DILL",
    "scramble": "DLLI",
    "retired": true
  },
  {
    "id": "v4-riddle-288",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: T · R · N · E · S · N · A · T · S · R · Z · E · E · U · T · E · S",
    "answer": "Eine passende Lösung: Tassenuntersetzer.",
    "topic": "Küche",
    "anagram": "TASSENUNTERSETZER",
    "scramble": "TRNESNATSRZEEUTES",
    "retired": true
  },
  {
    "id": "v4-riddle-289",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: A · T · T · Z · R · E · M · A",
    "answer": "Eine passende Lösung: Matratze.",
    "topic": "Zuhause",
    "anagram": "MATRATZE",
    "scramble": "ATTZREMA",
    "retired": true
  },
  {
    "id": "v4-riddle-290",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: R · T · K · P · E · E · P · A · M · A · N",
    "answer": "Eine passende Lösung: Kartenmappe.",
    "topic": "Reise",
    "anagram": "KARTENMAPPE",
    "scramble": "RTKPEEPAMAN",
    "retired": true
  },
  {
    "id": "v4-riddle-291",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: H · B · E · O · L",
    "answer": "Eine passende Lösung: Hobel.",
    "topic": "Werkstatt",
    "anagram": "HOBEL",
    "scramble": "HBEOL",
    "retired": true
  },
  {
    "id": "v4-riddle-292",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: N · R · M · N · U · I · A · O · D · A · K · M · H",
    "answer": "Eine passende Lösung: Mundharmonika.",
    "topic": "Musik",
    "anagram": "MUNDHARMONIKA",
    "scramble": "NRMNUIAODAKMH",
    "retired": true
  },
  {
    "id": "v4-riddle-293",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: T · I · U · N · F · L · Ä · G · S",
    "answer": "Eine passende Lösung: Fäustling.",
    "topic": "Kleidung",
    "anagram": "FÄUSTLING",
    "scramble": "TIUNFLÄGS",
    "retired": true
  },
  {
    "id": "v4-riddle-294",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: L · H · U · E · D · D · O · T · C · E · I",
    "answer": "Eine passende Lösung: Leuchtdiode.",
    "topic": "Technik",
    "anagram": "LEUCHTDIODE",
    "scramble": "LHUEDDOTCEI",
    "retired": true
  },
  {
    "id": "v4-riddle-295",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: K · L · E · T · T · I · E · S · R · E · L",
    "answer": "Eine passende Lösung: Kletterseil.",
    "topic": "Sport",
    "anagram": "KLETTERSEIL",
    "scramble": "KLETTIESREL",
    "retired": true
  },
  {
    "id": "v4-riddle-296",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: O · E · M · P · O · L",
    "answer": "Eine passende Lösung: Pomelo.",
    "topic": "Essen",
    "anagram": "POMELO",
    "scramble": "OEMPOL",
    "retired": true
  },
  {
    "id": "v4-riddle-297",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: L · Z · A · E · G · E · L",
    "answer": "Eine passende Lösung: Gazelle.",
    "topic": "Tierwelt",
    "anagram": "GAZELLE",
    "scramble": "LZAEGEL",
    "retired": true
  },
  {
    "id": "v4-riddle-298",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: S · E · E · P · T · P",
    "answer": "Eine passende Lösung: Steppe.",
    "topic": "Natur",
    "anagram": "STEPPE",
    "scramble": "SEEPTP",
    "retired": true
  },
  {
    "id": "v4-riddle-299",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: C · A · U · T · N · L · C · H · H · I · T · S",
    "answer": "Eine passende Lösung: Schnittlauch.",
    "topic": "Garten",
    "anagram": "SCHNITTLAUCH",
    "scramble": "CAUTNLCHHITS",
    "retired": true
  },
  {
    "id": "v4-riddle-300",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: K · A · W · G · H · A · C · N · E · E · Ü",
    "answer": "Eine passende Lösung: Küchenwaage.",
    "topic": "Küche",
    "anagram": "KÜCHENWAAGE",
    "scramble": "KAWGHACNEEÜ",
    "retired": true
  },
  {
    "id": "v4-riddle-301",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: B · K · T · L · E · A · T · N · E",
    "answer": "Eine passende Lösung: Bettlaken.",
    "topic": "Zuhause",
    "anagram": "BETTLAKEN",
    "scramble": "BKTLEATNE",
    "retired": true
  },
  {
    "id": "v4-riddle-302",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: F · E · S · Ü · E · E · R · R · H · R · I",
    "answer": "Eine passende Lösung: Reiseführer.",
    "topic": "Reise",
    "anagram": "REISEFÜHRER",
    "scramble": "FESÜEERRHRI",
    "retired": true
  },
  {
    "id": "v4-riddle-303",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: R · A · S · E · L · P",
    "answer": "Eine passende Lösung: Raspel.",
    "topic": "Werkstatt",
    "anagram": "RASPEL",
    "scramble": "RASELP",
    "retired": true
  },
  {
    "id": "v4-riddle-304",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: R · A · T · G · N · L · I · E",
    "answer": "Eine passende Lösung: Triangel.",
    "topic": "Musik",
    "anagram": "TRIANGEL",
    "scramble": "RATGNLIE",
    "retired": true
  },
  {
    "id": "v4-riddle-305",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: A · L · C · H · S",
    "answer": "Eine passende Lösung: Schal.",
    "topic": "Kleidung",
    "anagram": "SCHAL",
    "scramble": "ALCHS",
    "retired": true
  },
  {
    "id": "v4-riddle-306",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: A · I · T · E · B · T · R · E",
    "answer": "Eine passende Lösung: Batterie.",
    "topic": "Technik",
    "anagram": "BATTERIE",
    "scramble": "AITEBTRE",
    "retired": true
  },
  {
    "id": "v4-riddle-307",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: N · A · I · K · E · R · A · B · R",
    "answer": "Eine passende Lösung: Karabiner.",
    "topic": "Sport",
    "anagram": "KARABINER",
    "scramble": "NAIKERABR",
    "retired": true
  },
  {
    "id": "v4-riddle-308",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: W · I · I · K",
    "answer": "Eine passende Lösung: Kiwi.",
    "topic": "Essen",
    "anagram": "KIWI",
    "scramble": "WIIK",
    "retired": true
  },
  {
    "id": "v4-riddle-309",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: K · M · A · L · E",
    "answer": "Eine passende Lösung: Kamel.",
    "topic": "Tierwelt",
    "anagram": "KAMEL",
    "scramble": "KMALE",
    "retired": true
  },
  {
    "id": "v4-riddle-310",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: O · O · R · M",
    "answer": "Eine passende Lösung: Moor.",
    "topic": "Natur",
    "anagram": "MOOR",
    "scramble": "OORM",
    "retired": true
  },
  {
    "id": "v4-riddle-311",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: E · N · C · L · E · H · F",
    "answer": "Eine passende Lösung: Fenchel.",
    "topic": "Garten",
    "anagram": "FENCHEL",
    "scramble": "ENCLEHF",
    "retired": true
  },
  {
    "id": "v4-riddle-312",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: S · S · E · O · C · K · H · E · W · A · R · R",
    "answer": "Eine passende Lösung: Wasserkocher.",
    "topic": "Küche",
    "anagram": "WASSERKOCHER",
    "scramble": "SSEOCKHEWARR",
    "retired": true
  },
  {
    "id": "v4-riddle-313",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: P · N · S · O · K · S · E · I · K · F",
    "answer": "Eine passende Lösung: Kopfkissen.",
    "topic": "Zuhause",
    "anagram": "KOPFKISSEN",
    "scramble": "PNSOKSEIKF",
    "retired": true
  },
  {
    "id": "v4-riddle-314",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: L · A · D · P · T · A · T · S · N",
    "answer": "Eine passende Lösung: Stadtplan.",
    "topic": "Reise",
    "anagram": "STADTPLAN",
    "scramble": "LADPTATSN",
    "retired": true
  },
  {
    "id": "v4-riddle-315",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: M · E · M · N · T · S · S · I · E · E",
    "answer": "Eine passende Lösung: Stemmeisen.",
    "topic": "Werkstatt",
    "anagram": "STEMMEISEN",
    "scramble": "MEMNTSSIEE",
    "retired": true
  },
  {
    "id": "v4-riddle-316",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: P · U · A · K · E",
    "answer": "Eine passende Lösung: Pauke.",
    "topic": "Musik",
    "anagram": "PAUKE",
    "scramble": "PUAKE",
    "retired": true
  },
  {
    "id": "v4-riddle-317",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: A · S · H · L · T · H · U · C",
    "answer": "Eine passende Lösung: Halstuch.",
    "topic": "Kleidung",
    "anagram": "HALSTUCH",
    "scramble": "ASHLTHUC",
    "retired": true
  },
  {
    "id": "v4-riddle-318",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: K · K · U · A",
    "answer": "Eine passende Lösung: Akku.",
    "topic": "Technik",
    "anagram": "AKKU",
    "scramble": "KKUA",
    "retired": true
  },
  {
    "id": "v4-riddle-319",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: R · T · T · G · T · E · E · R · U · K · L",
    "answer": "Eine passende Lösung: Klettergurt.",
    "topic": "Sport",
    "anagram": "KLETTERGURT",
    "scramble": "RTTGTEERUKL",
    "retired": true
  },
  {
    "id": "v4-riddle-320",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: F · G · E · E · I",
    "answer": "Eine passende Lösung: Feige.",
    "topic": "Essen",
    "anagram": "FEIGE",
    "scramble": "FGEEI",
    "retired": true
  },
  {
    "id": "v4-riddle-321",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: L · A · A · K · A · P",
    "answer": "Eine passende Lösung: Alpaka.",
    "topic": "Tierwelt",
    "anagram": "ALPAKA",
    "scramble": "LAAKAP",
    "retired": true
  },
  {
    "id": "v4-riddle-322",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: M · P · F · S · U",
    "answer": "Eine passende Lösung: Sumpf.",
    "topic": "Natur",
    "anagram": "SUMPF",
    "scramble": "MPFSU",
    "retired": true
  },
  {
    "id": "v4-riddle-323",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: H · L · E · R · D · U · N · O",
    "answer": "Eine passende Lösung: Holunder.",
    "topic": "Garten",
    "anagram": "HOLUNDER",
    "scramble": "HLERDUNO",
    "retired": true
  },
  {
    "id": "v4-riddle-324",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: A · T · R · S · O · E · T",
    "answer": "Eine passende Lösung: Toaster.",
    "topic": "Küche",
    "anagram": "TOASTER",
    "scramble": "ATRSOET",
    "retired": true
  },
  {
    "id": "v4-riddle-325",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: I · C · S · D · K · H · A · N · E · K · L · R · R · E",
    "answer": "Eine passende Lösung: Kleiderschrank.",
    "topic": "Zuhause",
    "anagram": "KLEIDERSCHRANK",
    "scramble": "ICSDKHANEKLRRE",
    "retired": true
  },
  {
    "id": "v4-riddle-326",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: R · F · Ä · E · H",
    "answer": "Eine passende Lösung: Fähre.",
    "topic": "Reise",
    "anagram": "FÄHRE",
    "scramble": "RFÄEH",
    "retired": true
  },
  {
    "id": "v4-riddle-327",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: M · S · I · E · S · L · E",
    "answer": "Eine passende Lösung: Meissel.",
    "topic": "Werkstatt",
    "anagram": "MEISSEL",
    "scramble": "MSIESLE",
    "retired": true
  },
  {
    "id": "v4-riddle-328",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: N · K · B · C · E · E",
    "answer": "Eine passende Lösung: Becken.",
    "topic": "Musik",
    "anagram": "BECKEN",
    "scramble": "NKBCEE",
    "retired": true
  },
  {
    "id": "v4-riddle-329",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: E · Ü · M · Z · T",
    "answer": "Eine passende Lösung: Mütze.",
    "topic": "Kleidung",
    "anagram": "MÜTZE",
    "scramble": "EÜMZT",
    "retired": true
  },
  {
    "id": "v4-riddle-330",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: E · N · N · N · E · A · T",
    "answer": "Eine passende Lösung: Antenne.",
    "topic": "Technik",
    "anagram": "ANTENNE",
    "scramble": "ENNNEAT",
    "retired": true
  },
  {
    "id": "v4-riddle-331",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: L · R · U · B · E · C · R · L · I · E · H · A · T",
    "answer": "Eine passende Lösung: Taucherbrille.",
    "topic": "Sport",
    "anagram": "TAUCHERBRILLE",
    "scramble": "LRUBECRLIEHAT",
    "retired": true
  },
  {
    "id": "v4-riddle-332",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: L · T · E · D · A · T",
    "answer": "Eine passende Lösung: Dattel.",
    "topic": "Essen",
    "anagram": "DATTEL",
    "scramble": "LTEDAT",
    "retired": true
  },
  {
    "id": "v4-riddle-333",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: A · M · A · L",
    "answer": "Eine passende Lösung: Lama.",
    "topic": "Tierwelt",
    "anagram": "LAMA",
    "scramble": "AMAL",
    "retired": true
  },
  {
    "id": "v4-riddle-334",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: E · D · I · E · H",
    "answer": "Eine passende Lösung: Heide.",
    "topic": "Natur",
    "anagram": "HEIDE",
    "scramble": "EDIEH",
    "retired": true
  },
  {
    "id": "v4-riddle-335",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: H · S · N · S · S · A · L · E · U",
    "answer": "Eine passende Lösung: Haselnuss.",
    "topic": "Garten",
    "anagram": "HASELNUSS",
    "scramble": "HSNSSALEU",
    "retired": true
  },
  {
    "id": "v4-riddle-336",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: R · L · C · H · K · K · Ü · H · A · S · N",
    "answer": "Eine passende Lösung: Kühlschrank.",
    "topic": "Küche",
    "anagram": "KÜHLSCHRANK",
    "scramble": "RLCHKKÜHASN",
    "retired": true
  },
  {
    "id": "v4-riddle-337",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: K · M · D · O · E · M · O",
    "answer": "Eine passende Lösung: Kommode.",
    "topic": "Zuhause",
    "anagram": "KOMMODE",
    "scramble": "KMDOEMO",
    "retired": true
  },
  {
    "id": "v4-riddle-338",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: G · L · S · O · E · O · T · B · E",
    "answer": "Eine passende Lösung: Segelboot.",
    "topic": "Reise",
    "anagram": "SEGELBOOT",
    "scramble": "GLSOEOTBE",
    "retired": true
  },
  {
    "id": "v4-riddle-339",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: Ö · K · N · L · E · L · B · O · T",
    "answer": "Eine passende Lösung: Lötkolben.",
    "topic": "Werkstatt",
    "anagram": "LÖTKOLBEN",
    "scramble": "ÖKNLELBOT",
    "retired": true
  },
  {
    "id": "v4-riddle-340",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: S · C · E · G · E · P · L · L · I · O · N · K",
    "answer": "Eine passende Lösung: Glockenspiel.",
    "topic": "Musik",
    "anagram": "GLOCKENSPIEL",
    "scramble": "SCEGEPLLIONK",
    "retired": true
  },
  {
    "id": "v4-riddle-341",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: U · T · H",
    "answer": "Eine passende Lösung: Hut.",
    "topic": "Kleidung",
    "anagram": "HUT",
    "scramble": "UTH",
    "retired": true
  },
  {
    "id": "v4-riddle-342",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: R · N · B · D · F · U · N · E · I · N · E · E · G",
    "answer": "Eine passende Lösung: Fernbedienung.",
    "topic": "Technik",
    "anagram": "FERNBEDIENUNG",
    "scramble": "RNBDFUNEINEEG",
    "retired": true
  },
  {
    "id": "v4-riddle-343",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Sport: H · I · S · E · L · S · W · O · M · S · C · M · F",
    "answer": "Eine passende Lösung: Schwimmflosse.",
    "topic": "Sport",
    "anagram": "SCHWIMMFLOSSE",
    "scramble": "HISELSWOMSCMF",
    "retired": true
  },
  {
    "id": "v4-riddle-344",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Essen: R · T · N · A · P · G · A · E · L · F · A",
    "answer": "Eine passende Lösung: Granatapfel.",
    "topic": "Essen",
    "anagram": "GRANATAPFEL",
    "scramble": "RTNAPGAELFA",
    "retired": true
  },
  {
    "id": "v4-riddle-345",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Tierwelt: U · I · P · G · N · I · N",
    "answer": "Eine passende Lösung: Pinguin.",
    "topic": "Tierwelt",
    "anagram": "PINGUIN",
    "scramble": "UIPGNIN",
    "retired": true
  },
  {
    "id": "v4-riddle-346",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Natur: A · U · T",
    "answer": "Eine passende Lösung: Tau.",
    "topic": "Natur",
    "anagram": "TAU",
    "scramble": "AUT",
    "retired": true
  },
  {
    "id": "v4-riddle-347",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Garten: A · S · N · S · U · W · L",
    "answer": "Eine passende Lösung: Walnuss.",
    "topic": "Garten",
    "anagram": "WALNUSS",
    "scramble": "ASNSUWL",
    "retired": true
  },
  {
    "id": "v4-riddle-348",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Küche: E · R · E · S · I · K · R · A · G · R · H · N · F · C",
    "answer": "Eine passende Lösung: Gefrierschrank.",
    "topic": "Küche",
    "anagram": "GEFRIERSCHRANK",
    "scramble": "ERESIKRAGRHNFC",
    "retired": true
  },
  {
    "id": "v4-riddle-349",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Zuhause: G · A · R · E · Ü · E · B · C · H · L · R",
    "answer": "Eine passende Lösung: Bücherregal.",
    "topic": "Zuhause",
    "anagram": "BÜCHERREGAL",
    "scramble": "GAREÜEBCHLR",
    "retired": true
  },
  {
    "id": "v4-riddle-350",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Reise: K · J · A · K · A",
    "answer": "Eine passende Lösung: Kajak.",
    "topic": "Reise",
    "anagram": "KAJAK",
    "scramble": "KJAKA",
    "retired": true
  },
  {
    "id": "v4-riddle-351",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Werkstatt: E · B · K · P · E · L · T · E · S · L · I · O",
    "answer": "Eine passende Lösung: Klebepistole.",
    "topic": "Werkstatt",
    "anagram": "KLEBEPISTOLE",
    "scramble": "EBKPELTESLIO",
    "retired": true
  },
  {
    "id": "v4-riddle-352",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Musik: N · O · O · F · L · X · Y",
    "answer": "Eine passende Lösung: Xylofon.",
    "topic": "Musik",
    "anagram": "XYLOFON",
    "scramble": "NOOFLXY",
    "retired": true
  },
  {
    "id": "v4-riddle-353",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Kleidung: P · K · E · P · A",
    "answer": "Eine passende Lösung: Kappe.",
    "topic": "Kleidung",
    "anagram": "KAPPE",
    "scramble": "PKEPA",
    "retired": true
  },
  {
    "id": "v4-riddle-354",
    "kind": "riddle",
    "text": "Buchstabenwirbel · Technik: K · R · M · E · A · A",
    "answer": "Eine passende Lösung: Kamera.",
    "topic": "Technik",
    "anagram": "KAMERA",
    "scramble": "KRMEAA",
    "retired": true
  },
  {
    "id": "v4-riddle-355",
    "kind": "riddle",
    "text": "Wortbrücke: Sonnen___ und ___topf. Welches Wort füllt beide Lücken?",
    "answer": "BLUME: Sonnenblume und Blumentopf.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-356",
    "kind": "riddle",
    "text": "Wortbrücke: Haus___ und ___schloss. Welches Wort füllt beide Lücken?",
    "answer": "TÜR: Haustür und Türschloss.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-357",
    "kind": "riddle",
    "text": "Wortbrücke: Bücher___ und ___brett. Welches Wort füllt beide Lücken?",
    "answer": "REGAL: Bücherregal und Regalbrett.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-358",
    "kind": "riddle",
    "text": "Wortbrücke: Regen___ und ___ständer. Welches Wort füllt beide Lücken?",
    "answer": "SCHIRM: Regenschirm und Schirmständer.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-359",
    "kind": "riddle",
    "text": "Wortbrücke: Fahr___ und ___weg. Welches Wort füllt beide Lücken?",
    "answer": "RAD: Fahrrad und Radweg.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-360",
    "kind": "riddle",
    "text": "Wortbrücke: Hand___ und ___spiel. Welches Wort füllt beide Lücken?",
    "answer": "BALL: Handball und Ballspiel.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-361",
    "kind": "riddle",
    "text": "Wortbrücke: Wohn___ und ___pflanze. Welches Wort füllt beide Lücken?",
    "answer": "ZIMMER: Wohnzimmer und Zimmerpflanze.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-362",
    "kind": "riddle",
    "text": "Wortbrücke: Schul___ und ___laden. Welches Wort füllt beide Lücken?",
    "answer": "BUCH: Schulbuch und Buchladen.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-363",
    "kind": "riddle",
    "text": "Wortbrücke: Bilder___ und ___rand. Welches Wort füllt beide Lücken?",
    "answer": "RAHMEN: Bilderrahmen und Rahmenrand.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-364",
    "kind": "riddle",
    "text": "Wortbrücke: Eis___ und ___werk. Welches Wort füllt beide Lücken?",
    "answer": "BERG: Eisberg und Bergwerk.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-365",
    "kind": "riddle",
    "text": "Wortbrücke: Baum___ und ___haus. Welches Wort füllt beide Lücken?",
    "answer": "STAMM: Baumstamm und Stammhaus.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-366",
    "kind": "riddle",
    "text": "Wortbrücke: Wald___ und ___rand. Welches Wort füllt beide Lücken?",
    "answer": "WEG: Waldweg und Wegrand.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-367",
    "kind": "riddle",
    "text": "Wortbrücke: Sommer___ und ___mantel. Welches Wort füllt beide Lücken?",
    "answer": "REGEN: Sommerregen und Regenmantel.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-368",
    "kind": "riddle",
    "text": "Wortbrücke: Wasser___ und ___leitung. Welches Wort füllt beide Lücken?",
    "answer": "ROHR: Wasserrohr und Rohrleitung.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-369",
    "kind": "riddle",
    "text": "Wortbrücke: Stadt___ und ___haus. Welches Wort füllt beide Lücken?",
    "answer": "RAT: Stadtrat und Rathaus.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-370",
    "kind": "riddle",
    "text": "Wortbrücke: Kauf___ und ___tür. Welches Wort füllt beide Lücken?",
    "answer": "HAUS: Kaufhaus und Haustür.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-371",
    "kind": "riddle",
    "text": "Wortbrücke: Klapp___ und ___bein. Welches Wort füllt beide Lücken?",
    "answer": "STUHL: Klappstuhl und Stuhlbein.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-372",
    "kind": "riddle",
    "text": "Wortbrücke: Glas___ und ___bein. Welches Wort füllt beide Lücken?",
    "answer": "TISCH: Glastisch und Tischbein.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-373",
    "kind": "riddle",
    "text": "Wortbrücke: Schrank___ und ___schloss. Welches Wort füllt beide Lücken?",
    "answer": "TÜR: Schranktür und Türschloss.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-374",
    "kind": "riddle",
    "text": "Wortbrücke: Brief___ und ___boden. Welches Wort füllt beide Lücken?",
    "answer": "KASTEN: Briefkasten und Kastenboden.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-375",
    "kind": "riddle",
    "text": "Wortbrücke: Schnee___ und ___haus. Welches Wort füllt beide Lücken?",
    "answer": "BALL: Schneeball und Ballhaus.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v4-riddle-376",
    "kind": "riddle",
    "text": "Wortbrücke: Arbeits___ und ___lampe. Welches Wort füllt beide Lücken?",
    "answer": "TISCH: Arbeitstisch und Tischlampe.",
    "topic": "Wortbrücken"
  },
  {
    "id": "v5-fact-0",
    "kind": "fact",
    "text": "Bluetooth wurde nach dem mittelalterlichen König Harald Blauzahn benannt. Der Name sollte zunächst nur ein vorläufiger Projektname sein.",
    "topic": "Technikgeschichte",
    "source": {
      "url": "https://www.bluetooth.com/about-us/bluetooth-origin/",
      "label": "Bluetooth SIG"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v5-fact-1",
    "kind": "fact",
    "text": "Im Bluetooth-Logo stecken zwei Runen: Sie stehen für H und B, die Initialen von Harald Blauzahn.",
    "topic": "Zeichen",
    "source": {
      "url": "https://www.bluetooth.com/about-us/bluetooth-origin/",
      "label": "Bluetooth SIG"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v5-fact-2",
    "kind": "fact",
    "text": "QR steht für „Quick Response“, also schnelle Antwort. Der Code wurde 1994 von DENSO WAVE vorgestellt.",
    "topic": "Technikgeschichte",
    "source": {
      "url": "https://www.qrcode.com/en/history/",
      "label": "DENSO WAVE"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v5-fact-3",
    "kind": "fact",
    "text": "Die auffälligen Quadrate im QR-Code helfen dem Lesegerät, die Lage des Codes zu erkennen – auch wenn du ihn schräg hältst.",
    "topic": "Technik",
    "source": {
      "url": "https://www.qrcode.com/en/history/",
      "label": "DENSO WAVE"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v5-fact-4",
    "kind": "fact",
    "text": "Hinter dem ersten QR-Code stand ein Entwicklungsteam aus nur zwei Personen. Masahiro Hara leitete das Projekt.",
    "topic": "Erfindungen",
    "source": {
      "url": "https://www.qrcode.com/en/history/",
      "label": "DENSO WAVE"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v5-fact-5",
    "kind": "fact",
    "text": "Gallium ist ein Metall, das schon bei knapp 30 Grad Celsius schmilzt. Ein warmer Sommertag reicht für diese Temperatur aus.",
    "topic": "Chemie",
    "source": {
      "url": "https://periodic-table.rsc.org/element/31/Gallium",
      "label": "Royal Society of Chemistry"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v5-fact-6",
    "kind": "fact",
    "text": "Mendelejew sagte die Existenz und einige Eigenschaften von Gallium voraus, bevor das Element 1875 entdeckt wurde. Eine Lücke im Periodensystem gab den Hinweis.",
    "topic": "Wissenschaftsgeschichte",
    "source": {
      "url": "https://periodic-table.rsc.org/element/31/Gallium",
      "label": "Royal Society of Chemistry"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v5-fact-7",
    "kind": "fact",
    "text": "Ein übliches modernes Klavier hat 88 Tasten. Es gibt aber auch Instrumente mit 97 Tasten und zusätzlichen tiefen Tönen.",
    "topic": "Musik",
    "source": {
      "url": "https://www.yamaha.com/en/musical_instrument_guide/piano/trivia/trivia007.html",
      "label": "Yamaha · Musical Instrument Guide"
    },
    "checked": "2026-10-10"
  },
  {
    "id": "v6-thought-0",
    "kind": "thought",
    "text": "Du darfst stolz sein, auch wenn es niemand sonst bemerkt."
  },
  {
    "id": "v6-thought-1",
    "kind": "thought",
    "text": "Ein kleiner Schritt bleibt ein Schritt."
  },
  {
    "id": "v6-thought-2",
    "kind": "thought",
    "text": "Nicht jeder Tag muss dein bester sein."
  },
  {
    "id": "v6-thought-3",
    "kind": "thought",
    "text": "Du musst nicht alles heute schaffen."
  },
  {
    "id": "v6-thought-4",
    "kind": "thought",
    "text": "Eine Pause ist kein verlorener Fortschritt."
  },
  {
    "id": "v6-thought-5",
    "kind": "thought",
    "text": "Manchmal braucht eine gute Idee erst ein wenig Ruhe."
  },
  {
    "id": "v6-thought-6",
    "kind": "thought",
    "text": "Was dir heute schwerfällt, kann morgen vertraut sein."
  },
  {
    "id": "v6-thought-7",
    "kind": "thought",
    "text": "Du darfst etwas nur deshalb tun, weil es dir Freude macht."
  },
  {
    "id": "v6-thought-8",
    "kind": "thought",
    "text": "Auch ein Umweg kann dir zeigen, was du gesucht hast."
  },
  {
    "id": "v6-thought-9",
    "kind": "thought",
    "text": "Du brauchst keinen perfekten Tag für einen schönen Moment."
  },
  {
    "id": "v6-thought-10",
    "kind": "thought",
    "text": "Lass dir von einem schlechten Moment nicht den ganzen Tag erzählen."
  },
  {
    "id": "v6-thought-11",
    "kind": "thought",
    "text": "Geduld heißt auch, freundlich mit dir selbst zu bleiben."
  },
  {
    "id": "v6-thought-12",
    "kind": "thought",
    "text": "Du darfst deine Meinung ändern, wenn du etwas Neues lernst."
  },
  {
    "id": "v6-thought-13",
    "kind": "thought",
    "text": "Für einen Neuanfang muss nicht Montag sein."
  },
  {
    "id": "v6-thought-14",
    "kind": "thought",
    "text": "Ein bisschen Neugier kann mehr bewegen als ein großer Plan."
  },
  {
    "id": "v6-thought-15",
    "kind": "thought",
    "text": "Es gibt Tage zum Wachsen und Tage zum Durchatmen."
  },
  {
    "id": "v6-thought-16",
    "kind": "thought",
    "text": "Du musst deine Freude nicht erst verdienen."
  },
  {
    "id": "v6-thought-17",
    "kind": "thought",
    "text": "Dein Tempo darf zu deinem Leben passen."
  },
  {
    "id": "v6-thought-18",
    "kind": "thought",
    "text": "Etwas zum ersten Mal zu versuchen ist schon mutig."
  },
  {
    "id": "v6-thought-19",
    "kind": "thought",
    "text": "Nicht alles, was wichtig ist, lässt sich zählen."
  },
  {
    "id": "v6-thought-20",
    "kind": "thought",
    "text": "Heute darf auch etwas leicht sein."
  },
  {
    "id": "v6-thought-21",
    "kind": "thought",
    "text": "Du kannst etwas ernst nehmen und trotzdem darüber lachen."
  },
  {
    "id": "v6-thought-22",
    "kind": "thought",
    "text": "Eine freundliche Nachricht braucht keinen besonderen Anlass."
  },
  {
    "id": "v6-thought-23",
    "kind": "thought",
    "text": "Du darfst zufrieden sein, bevor alles fertig ist."
  },
  {
    "id": "v6-thought-24",
    "kind": "thought",
    "text": "Ein guter Gedanke darf klein anfangen."
  },
  {
    "id": "v6-thought-25",
    "kind": "thought",
    "text": "Du bist mehr als das, was du an einem Tag erledigst."
  },
  {
    "id": "v6-thought-26",
    "kind": "thought",
    "text": "Manchmal ist Weitermachen mutig. Manchmal ist Aufhören klug."
  },
  {
    "id": "v6-thought-27",
    "kind": "thought",
    "text": "Ein ruhiger Moment muss nichts leisten."
  },
  {
    "id": "v6-thought-28",
    "kind": "thought",
    "text": "Vielleicht verdient heute etwas Kleines deine ganze Aufmerksamkeit."
  },
  {
    "id": "v6-thought-29",
    "kind": "thought",
    "text": "Du darfst einen schönen Moment genießen, ohne ihn festzuhalten."
  },
  {
    "id": "v6-extra-0",
    "kind": "thought",
    "text": "Ein Gespräch muss nicht mit einer Lösung enden, um gutzutun."
  },
  {
    "id": "v6-extra-1",
    "kind": "thought",
    "text": "Was würdest du ausprobieren, wenn niemand es bewerten würde?"
  },
  {
    "id": "v6-extra-2",
    "kind": "thought",
    "text": "Vielleicht ist die richtige Frage wichtiger als die schnelle Antwort."
  },
  {
    "id": "v6-extra-3",
    "kind": "thought",
    "text": "Du kannst zuhören, ohne die ganze Last für jemanden zu tragen."
  },
  {
    "id": "v6-extra-4",
    "kind": "thought",
    "text": "Ein Lieblingsort darf ganz unspektakulär sein."
  },
  {
    "id": "v6-extra-5",
    "kind": "thought",
    "text": "Es ist schön, wenn jemand deinen Namen mit Freude sagt."
  },
  {
    "id": "v6-extra-6",
    "kind": "thought",
    "text": "Manche Erinnerungen passen in einen einzigen Geruch."
  },
  {
    "id": "v6-extra-7",
    "kind": "thought",
    "text": "Welches Lied würdest du jemandem zeigen, der dich kennenlernen möchte?"
  },
  {
    "id": "v6-extra-8",
    "kind": "thought",
    "text": "Du musst nicht jede Einladung annehmen, um dazuzugehören."
  },
  {
    "id": "v6-extra-9",
    "kind": "thought",
    "text": "Bei manchen Menschen muss Schweigen nicht gefüllt werden."
  },
  {
    "id": "v6-extra-10",
    "kind": "thought",
    "text": "Was hat dich überrascht, obwohl du es schon oft gesehen hast?"
  },
  {
    "id": "v6-extra-11",
    "kind": "thought",
    "text": "Etwas Altes zu reparieren kann sich besser anfühlen, als etwas Neues zu kaufen."
  },
  {
    "id": "v6-extra-12",
    "kind": "thought",
    "text": "Ein handgeschriebener Zettel hat seine eigene Stimme."
  },
  {
    "id": "v6-extra-13",
    "kind": "thought",
    "text": "Vielleicht wartet eine schöne Erinnerung noch darauf, dass du sie machst."
  },
  {
    "id": "v6-extra-14",
    "kind": "thought",
    "text": "Was wäre ein guter Name für deinen heutigen Tag?"
  },
  {
    "id": "v6-extra-15",
    "kind": "thought",
    "text": "Auch Erwachsene dürfen Anfänger sein."
  },
  {
    "id": "v6-extra-16",
    "kind": "thought",
    "text": "Ein Fenster hat denselben Rahmen und jeden Tag ein anderes Bild."
  },
  {
    "id": "v6-extra-17",
    "kind": "thought",
    "text": "Vielleicht brauchst du gerade weniger Antworten und mehr frische Luft."
  },
  {
    "id": "v6-extra-18",
    "kind": "thought",
    "text": "Nicht jede freie Minute muss gefüllt werden."
  },
  {
    "id": "v6-extra-19",
    "kind": "thought",
    "text": "Ein Danke verliert seinen Wert nicht durch Gebrauch."
  },
  {
    "id": "v6-extra-20",
    "kind": "thought",
    "text": "Ein ehrliches „Wie geht es dir?“ kann einen Abend verändern."
  },
  {
    "id": "v6-extra-21",
    "kind": "thought",
    "text": "Welche Kleinigkeit würde deinem morgigen Ich Freude machen?"
  },
  {
    "id": "v6-extra-22",
    "kind": "thought",
    "text": "Ein guter Zuhörer lässt auch unfertige Gedanken gelten."
  },
  {
    "id": "v6-extra-23",
    "kind": "thought",
    "text": "Du kannst etwas vermissen und trotzdem froh sein, wo du jetzt bist."
  },
  {
    "id": "v6-extra-24",
    "kind": "thought",
    "text": "Nicht jede schöne Sache muss ein Hobby werden."
  },
  {
    "id": "v6-extra-25",
    "kind": "thought",
    "text": "Es darf Bücher geben, die du nie zu Ende liest."
  },
  {
    "id": "v6-extra-26",
    "kind": "thought",
    "text": "Ein Spaziergang braucht kein Ziel."
  },
  {
    "id": "v6-extra-27",
    "kind": "thought",
    "text": "Welche Farbe hätte dein Lieblingsgeräusch?"
  },
  {
    "id": "v6-extra-28",
    "kind": "thought",
    "text": "Manche Freundschaften gehen nach langer Pause mitten im Satz weiter."
  },
  {
    "id": "v6-extra-29",
    "kind": "thought",
    "text": "Manchmal ist ein leerer Kalender eine gute Nachricht."
  },
  {
    "id": "v6-extra-30",
    "kind": "thought",
    "text": "Was du liebst, muss nicht allen gefallen."
  },
  {
    "id": "v6-extra-31",
    "kind": "thought",
    "text": "Eine ehrliche Entschuldigung braucht kein „aber“."
  },
  {
    "id": "v6-extra-32",
    "kind": "thought",
    "text": "Du musst nicht aus jedem Erlebnis eine Lektion machen."
  },
  {
    "id": "v6-extra-33",
    "kind": "thought",
    "text": "Manches versteht man erst, wenn man jemandem davon erzählt."
  },
  {
    "id": "v6-extra-34",
    "kind": "thought",
    "text": "Welche Gewohnheit würdest du behalten, wenn niemand sie bemerkt?"
  },
  {
    "id": "v6-extra-35",
    "kind": "thought",
    "text": "Zuhause kann die Art sein, wie dich jemand begrüßt."
  },
  {
    "id": "v6-extra-36",
    "kind": "thought",
    "text": "Ein vertrauter Weg sieht im Regen plötzlich anders aus."
  },
  {
    "id": "v6-extra-37",
    "kind": "thought",
    "text": "Du darfst eine Grenze setzen, ohne einen Vortrag darüber zu halten."
  },
  {
    "id": "v6-extra-38",
    "kind": "thought",
    "text": "Dankbarkeit und der Wunsch nach Veränderung dürfen nebeneinander existieren."
  },
  {
    "id": "v6-extra-39",
    "kind": "thought",
    "text": "Was würdest du gern mit eigenen Händen herstellen?"
  },
  {
    "id": "v6-extra-40",
    "kind": "thought",
    "text": "Ein guter Rat lässt dir die Entscheidung."
  },
  {
    "id": "v6-extra-41",
    "kind": "thought",
    "text": "Manchmal braucht jemand Gesellschaft statt Verbesserungsvorschläge."
  },
  {
    "id": "v6-extra-42",
    "kind": "thought",
    "text": "Manche Abende werden besser, sobald das große Licht aus ist."
  },
  {
    "id": "v6-extra-43",
    "kind": "thought",
    "text": "Ein Lieblingsbecher ist selten nur ein Becher."
  },
  {
    "id": "v6-extra-44",
    "kind": "thought",
    "text": "Du darfst etwas schön finden, ohne erklären zu können, warum."
  },
  {
    "id": "v6-extra-45",
    "kind": "thought",
    "text": "Welche Erinnerung würdest du gern für eine Minute besuchen?"
  },
  {
    "id": "v6-extra-46",
    "kind": "thought",
    "text": "Ein gutes Gespräch kann auf einer Parkbank beginnen."
  },
  {
    "id": "v6-extra-47",
    "kind": "thought",
    "text": "Was leicht aussieht, hat manchmal lange Übung hinter sich."
  },
  {
    "id": "v6-extra-48",
    "kind": "thought",
    "text": "Du kannst eine Meinung haben und trotzdem neugierig bleiben."
  },
  {
    "id": "v6-extra-49",
    "kind": "thought",
    "text": "Es lohnt sich, Menschen gelegentlich neu kennenzulernen."
  },
  {
    "id": "v6-extra-50",
    "kind": "thought",
    "text": "Ein Kompliment darf konkret sein: „Das hast du aufmerksam gemacht.“"
  },
  {
    "id": "v6-extra-51",
    "kind": "thought",
    "text": "Welche kleine Tradition möchtest du erfinden?"
  },
  {
    "id": "v6-extra-52",
    "kind": "thought",
    "text": "Ein Tisch voller Krümel kann von einem schönen Nachmittag erzählen."
  },
  {
    "id": "v6-extra-53",
    "kind": "thought",
    "text": "Manchmal ist das Beste an einem Ausflug der gemeinsame Heimweg."
  },
  {
    "id": "v6-extra-54",
    "kind": "thought",
    "text": "Du musst nicht überall erreichbar sein, um für jemanden da zu sein."
  },
  {
    "id": "v6-extra-55",
    "kind": "thought",
    "text": "Etwas zu verschenken kann ihm eine neue Geschichte geben."
  },
  {
    "id": "v6-extra-56",
    "kind": "thought",
    "text": "Welche Frage würdest du einem Menschen aus deiner Kindheit gern stellen?"
  },
  {
    "id": "v6-extra-57",
    "kind": "thought",
    "text": "Ein Morgen darf gut sein, auch wenn der Plan nicht aufgeht."
  },
  {
    "id": "v6-extra-58",
    "kind": "thought",
    "text": "Vielleicht ist dein Lieblingsplatz näher, als du denkst."
  },
  {
    "id": "v6-extra-59",
    "kind": "thought",
    "text": "Ein Gedanke kann sich verändern, während du ihn aufschreibst."
  },
  {
    "id": "v6-extra-60",
    "kind": "thought",
    "text": "Du darfst etwas behalten, weil es dich an jemanden erinnert."
  },
  {
    "id": "v6-extra-61",
    "kind": "thought",
    "text": "Wem würdest du gern sagen, dass du noch an ihn denkst?"
  },
  {
    "id": "v6-extra-62",
    "kind": "thought",
    "text": "Ein Fehler ist leichter zu besprechen, wenn niemand daraus deine ganze Person macht."
  },
  {
    "id": "v6-extra-63",
    "kind": "thought",
    "text": "Manchmal zeigt sich Mut darin, eine Frage zu stellen."
  },
  {
    "id": "v6-extra-64",
    "kind": "thought",
    "text": "Du kannst ein Nein freundlich sagen und es trotzdem ernst meinen."
  },
  {
    "id": "v6-extra-65",
    "kind": "thought",
    "text": "Welche Aussicht würdest du gern mit jemandem teilen?"
  },
  {
    "id": "v6-extra-66",
    "kind": "thought",
    "text": "Eine Küche kann nach Zuhause riechen, bevor jemand ein Wort sagt."
  },
  {
    "id": "v6-extra-67",
    "kind": "thought",
    "text": "Es ist schön, wenn jemand weiß, wie du deinen Tee magst."
  },
  {
    "id": "v6-extra-68",
    "kind": "thought",
    "text": "„Das weiß ich nicht“ kann ein interessantes Gespräch eröffnen."
  },
  {
    "id": "v6-extra-69",
    "kind": "thought",
    "text": "Nicht jede Abweichung vom Plan ist ein Problem."
  },
  {
    "id": "v6-extra-70",
    "kind": "thought",
    "text": "Du darfst ein Foto machen. Du darfst den Moment auch einfach ansehen."
  },
  {
    "id": "v6-extra-71",
    "kind": "thought",
    "text": "Was würdest du einem Besucher an deinem Wohnort zuerst zeigen?"
  },
  {
    "id": "v6-extra-72",
    "kind": "thought",
    "text": "Manches ist gerade deshalb kostbar, weil es alltäglich ist."
  },
  {
    "id": "v6-extra-73",
    "kind": "thought",
    "text": "Ein freundlicher Blick ist eine kleine Form von Gastfreundschaft."
  },
  {
    "id": "v6-extra-74",
    "kind": "thought",
    "text": "Du musst nicht jeden Streit gewinnen, um dir treu zu bleiben."
  },
  {
    "id": "v6-extra-75",
    "kind": "thought",
    "text": "Welche Tätigkeit kannst du heute bewusst langsamer machen?"
  },
  {
    "id": "v6-extra-76",
    "kind": "thought",
    "text": "Manche Geschenke bekommen erst Jahre später ihre Bedeutung."
  },
  {
    "id": "v6-extra-77",
    "kind": "thought",
    "text": "Ein neuer Blickwinkel kostet manchmal nur einen anderen Sitzplatz."
  },
  {
    "id": "v6-extra-78",
    "kind": "thought",
    "text": "Du darfst Freude an Dingen haben, in denen du nicht besonders gut bist."
  },
  {
    "id": "v6-extra-79",
    "kind": "thought",
    "text": "Was hast du als Kind gesammelt, und warum gerade das?"
  },
  {
    "id": "v6-extra-80",
    "kind": "thought",
    "text": "Ein gutes Ende muss nicht laut sein."
  },
  {
    "id": "v6-extra-81",
    "kind": "thought",
    "text": "Manchmal ist das schönste Wort in einer Nachricht „wir“."
  },
  {
    "id": "v6-extra-82",
    "kind": "thought",
    "text": "Du kannst jemanden bewundern, ohne sein Leben führen zu wollen."
  },
  {
    "id": "v6-extra-83",
    "kind": "thought",
    "text": "Welche alltägliche Sache würdest du vermissen, wenn sie morgen fehlte?"
  },
  {
    "id": "v6-extra-84",
    "kind": "thought",
    "text": "Ein reparierter Gegenstand darf seine Geschichte zeigen."
  },
  {
    "id": "v6-extra-85",
    "kind": "thought",
    "text": "Es gibt Lieder, die einen Ort mitbringen, sobald sie anfangen."
  },
  {
    "id": "v6-extra-86",
    "kind": "thought",
    "text": "Du darfst etwas ausprobieren und feststellen, dass es nichts für dich ist."
  },
  {
    "id": "v6-extra-87",
    "kind": "thought",
    "text": "Was würde deinen Heimweg ein wenig schöner machen?"
  },
  {
    "id": "v6-extra-88",
    "kind": "thought",
    "text": "Die beste Gesellschaft lässt dich sein, wie du bist."
  },
  {
    "id": "v6-extra-89",
    "kind": "thought",
    "text": "Eine geschlossene Tür darf auch eine nötige Ruhepause bedeuten."
  },
  {
    "id": "v6-extra-90",
    "kind": "thought",
    "text": "Du musst nicht sofort wissen, was du von etwas hältst."
  },
  {
    "id": "v6-extra-91",
    "kind": "thought",
    "text": "Welche Fähigkeit bewunderst du, die selten Applaus bekommt?"
  },
  {
    "id": "v6-extra-92",
    "kind": "thought",
    "text": "Ein gemütlicher Abend ist ein vollwertiger Plan."
  },
  {
    "id": "v6-extra-93",
    "kind": "thought",
    "text": "Etwas wiederzufinden kann sich anfühlen, als bekäme man es zweimal geschenkt."
  },
  {
    "id": "v6-extra-94",
    "kind": "thought",
    "text": "Manche Menschen schenken einem das Gefühl, nicht zu spät zu sein."
  },
  {
    "id": "v6-extra-95",
    "kind": "thought",
    "text": "Du darfst um Hilfe bitten, bevor alles zu viel wird."
  },
  {
    "id": "v6-extra-96",
    "kind": "thought",
    "text": "Welcher Satz hat dir einmal unerwartet gutgetan?"
  },
  {
    "id": "v6-extra-97",
    "kind": "thought",
    "text": "Ein Garten muss nicht ordentlich sein, um lebendig zu wirken."
  },
  {
    "id": "v6-extra-98",
    "kind": "thought",
    "text": "Gemeinsames Aufräumen kann auch einfach gemeinsame Zeit sein."
  },
  {
    "id": "v6-extra-99",
    "kind": "thought",
    "text": "Du kannst eine Erinnerung ehren, ohne jedes Detail festzuhalten."
  },
  {
    "id": "v6-extra-100",
    "kind": "thought",
    "text": "Welche Geräusche machen für dich einen Sonntag aus?"
  },
  {
    "id": "v6-extra-101",
    "kind": "thought",
    "text": "Ein alter Witz kann schön sein, weil alle ihn schon kennen."
  },
  {
    "id": "v6-extra-102",
    "kind": "thought",
    "text": "Du darfst bei einem schönen Satz kurz stehenbleiben."
  },
  {
    "id": "v6-extra-103",
    "kind": "thought",
    "text": "Vielleicht hat jemand etwas von dir gelernt, ohne dass du es weißt."
  },
  {
    "id": "v6-extra-104",
    "kind": "thought",
    "text": "Was möchtest du einmal sehen, ohne es durch eine Kamera zu betrachten?"
  },
  {
    "id": "v6-extra-105",
    "kind": "thought",
    "text": "Ein gemeinsames Essen beginnt manchmal beim Gemüseschneiden."
  },
  {
    "id": "v6-extra-106",
    "kind": "thought",
    "text": "Du darfst einen Erfolg feiern, bevor das nächste Ziel feststeht."
  },
  {
    "id": "v6-extra-107",
    "kind": "thought",
    "text": "Manchmal ist ein Umzug innerhalb der eigenen Gedanken möglich."
  },
  {
    "id": "v6-extra-108",
    "kind": "thought",
    "text": "Welche freundliche Eigenheit magst du an jemandem besonders?"
  },
  {
    "id": "v6-extra-109",
    "kind": "thought",
    "text": "Ein Zuhause braucht Platz für echte Menschen, nicht nur für schöne Fotos."
  },
  {
    "id": "v6-extra-110",
    "kind": "thought",
    "text": "Du kannst einen Weg verlassen, auch wenn du lange darauf gegangen bist."
  },
  {
    "id": "v6-extra-111",
    "kind": "thought",
    "text": "Ein ungeplanter Nachmittag kann eine sehr gute Erinnerung werden."
  },
  {
    "id": "v6-extra-112",
    "kind": "thought",
    "text": "Was würdest du gern wieder tun, obwohl du längst erwachsen bist?"
  },
  {
    "id": "v6-extra-113",
    "kind": "thought",
    "text": "Manche Antworten werden erst nach einer Nacht Schlaf freundlich genug."
  },
  {
    "id": "v6-extra-114",
    "kind": "thought",
    "text": "Du darfst sagen: „Ich muss darüber nachdenken.“"
  },
  {
    "id": "v6-extra-115",
    "kind": "thought",
    "text": "Ein Lieblingsrezept enthält manchmal mehr Erinnerung als Zutaten."
  },
  {
    "id": "v6-extra-116",
    "kind": "thought",
    "text": "Wessen Lachen würdest du sofort erkennen?"
  },
  {
    "id": "v6-extra-117",
    "kind": "thought",
    "text": "Ein kleiner Besuch kann mehr bedeuten als eine perfekt formulierte Nachricht."
  },
  {
    "id": "v6-extra-118",
    "kind": "thought",
    "text": "Du kannst eine schöne Idee aufheben, ohne sie heute umzusetzen."
  },
  {
    "id": "v6-extra-119",
    "kind": "thought",
    "text": "Ein guter Gastgeber lässt dich auch früher gehen."
  },
  {
    "id": "v6-extra-120",
    "kind": "thought",
    "text": "Welche Jahreszeit passt zu deiner Lieblingsmusik?"
  },
  {
    "id": "v6-extra-121",
    "kind": "thought",
    "text": "Vorfreude ist eine der Sachen, die beim Teilen größer werden können."
  },
  {
    "id": "v6-extra-122",
    "kind": "thought",
    "text": "Du darfst etwas albern finden und trotzdem mitmachen."
  },
  {
    "id": "v6-extra-123",
    "kind": "thought",
    "text": "Ein vertrautes Gesicht kann einen fremden Ort verändern.",
    "retired": true
  },
  {
    "id": "v6-extra-124",
    "kind": "thought",
    "text": "Was würdest du gern können, auch wenn es völlig unpraktisch wäre?"
  },
  {
    "id": "v6-extra-125",
    "kind": "thought",
    "text": "Ein leerer Stuhl kann eine Erinnerung sein oder eine Einladung."
  },
  {
    "id": "v6-extra-126",
    "kind": "thought",
    "text": "Du darfst eine Tradition ändern, damit sie wieder zu dir passt."
  },
  {
    "id": "v6-extra-127",
    "kind": "thought",
    "text": "Ein guter Freund merkt, wenn dein „Passt schon“ noch eine Frage braucht."
  },
  {
    "id": "v6-extra-128",
    "kind": "thought",
    "text": "Welche Kleinigkeit würdest du in eine Zeitkapsel legen?"
  },
  {
    "id": "v6-extra-129",
    "kind": "thought",
    "text": "Gemeinsames Warten kann sich weniger nach Warten anfühlen."
  },
  {
    "id": "v6-extra-130",
    "kind": "thought",
    "text": "Du musst nicht alles empfehlen, was du magst."
  },
  {
    "id": "v6-extra-131",
    "kind": "thought",
    "text": "Ein Lob hinter dem Rücken kann auch etwas Gutes sein."
  },
  {
    "id": "v6-extra-132",
    "kind": "thought",
    "text": "Welche Straße würdest du gern ohne Eile entlanggehen?"
  },
  {
    "id": "v6-extra-133",
    "kind": "thought",
    "text": "Es ist schön, etwas zu haben, das man niemandem beweisen muss."
  },
  {
    "id": "v6-extra-134",
    "kind": "thought",
    "text": "Manchmal rettet man einen Tag, indem man aufhört, ihn retten zu wollen."
  },
  {
    "id": "v6-extra-135",
    "kind": "thought",
    "text": "Ein Balkon kann groß genug für einen kleinen Urlaub sein."
  },
  {
    "id": "v6-extra-136",
    "kind": "thought",
    "text": "Welche Blume würdest du zeichnen, wenn Ähnlichkeit keine Rolle spielte?"
  },
  {
    "id": "v6-extra-137",
    "kind": "thought",
    "text": "„Komm, wir gehen“ kann der schönste Vorschlag sein."
  },
  {
    "id": "v6-extra-138",
    "kind": "thought",
    "text": "Du darfst das gleiche Lied noch einmal hören. Und noch einmal."
  },
  {
    "id": "v6-extra-139",
    "kind": "thought",
    "text": "Ein Insiderwitz ist eine kleine Sprache für zwei."
  },
  {
    "id": "v6-extra-140",
    "kind": "thought",
    "text": "Was hat dir zuletzt jemand beigebracht, der jünger ist als du?"
  },
  {
    "id": "v6-extra-141",
    "kind": "thought",
    "text": "Manchmal findet man ein gutes Buch, weil es im falschen Regal steht."
  },
  {
    "id": "v6-extra-142",
    "kind": "thought",
    "text": "Du kannst großzügig sein, ohne dich selbst zu vergessen."
  },
  {
    "id": "v6-extra-143",
    "kind": "thought",
    "text": "Ein Ausflug darf nach einer halben Stunde vorbei sein und trotzdem zählen."
  },
  {
    "id": "v6-extra-144",
    "kind": "thought",
    "text": "Welche Kindheitsregel würdest du heute gern freundlich abschaffen?"
  },
  {
    "id": "v6-extra-145",
    "kind": "thought",
    "text": "In „Ich hab dir etwas mitgebracht“ steckt oft „Ich dachte an dich“."
  },
  {
    "id": "v6-extra-146",
    "kind": "thought",
    "text": "Du darfst nachfragen, wenn du etwas nicht verstanden hast. Auch ein zweites Mal."
  },
  {
    "id": "v6-extra-147",
    "kind": "thought",
    "text": "Ein unperfektes Geschenk kann genau zu jemandem passen."
  },
  {
    "id": "v6-extra-148",
    "kind": "thought",
    "text": "Was würdest du jemandem zeigen, der noch nie Schnee gesehen hat?"
  },
  {
    "id": "v6-extra-149",
    "kind": "thought",
    "text": "Manchmal ist das freundlichste Urteil über einen Tag: „Er war.“"
  },
  {
    "id": "v6-extra-150",
    "kind": "thought",
    "text": "Du musst deine Lieblingsdinge nicht nach Wichtigkeit sortieren."
  },
  {
    "id": "v6-extra-151",
    "kind": "thought",
    "text": "Ein heller Fleck auf dem Boden kann einen ganzen Raum gemütlich machen."
  },
  {
    "id": "v6-extra-152",
    "kind": "thought",
    "text": "Welche einfache Tätigkeit bringt deine Gedanken zur Ruhe?"
  },
  {
    "id": "v6-extra-153",
    "kind": "thought",
    "text": "Nähe kann heißen, jemanden seinen Satz selbst beenden zu lassen."
  },
  {
    "id": "v6-extra-154",
    "kind": "thought",
    "text": "Du darfst dir Zeit nehmen, jemanden richtig zu verabschieden."
  },
  {
    "id": "v6-extra-155",
    "kind": "thought",
    "text": "Ein alter Mantel kann sich nach Sicherheit anfühlen."
  },
  {
    "id": "v6-extra-156",
    "kind": "thought",
    "text": "Was möchtest du beim nächsten Spaziergang genauer ansehen?"
  },
  {
    "id": "v6-extra-157",
    "kind": "thought",
    "text": "Ein Treffen ist gelungen, wenn niemand merkt, wie spät es geworden ist."
  },
  {
    "id": "v6-extra-158",
    "kind": "thought",
    "text": "Du darfst etwas anders machen, weil es sich für dich besser anfühlt."
  },
  {
    "id": "v6-extra-159",
    "kind": "thought",
    "text": "Ein freundlicher Abschied kann schon Lust aufs Wiedersehen machen."
  },
  {
    "id": "v6-extra-160",
    "kind": "thought",
    "text": "Welche Erinnerung würdest du gern in einem Glas aufbewahren?"
  },
  {
    "id": "v6-extra-161",
    "kind": "thought",
    "text": "Manchmal braucht jemand keine Aufmunterung, sondern jemanden, der bleibt."
  },
  {
    "id": "v6-extra-162",
    "kind": "thought",
    "text": "Du kannst jemandem etwas zutrauen, ohne etwas von ihm zu erwarten."
  },
  {
    "id": "v6-extra-163",
    "kind": "thought",
    "text": "Ein neues Wort kann einer alten Empfindung einen Namen geben."
  },
  {
    "id": "v6-extra-164",
    "kind": "thought",
    "text": "Was möchtest du beim nächsten Essen wirklich schmecken, statt es nebenbei zu essen?"
  },
  {
    "id": "v6-extra-165",
    "kind": "thought",
    "text": "„Das war schön“ kann eine vollständige Beschreibung sein."
  },
  {
    "id": "v6-extra-166",
    "kind": "thought",
    "text": "Du darfst jemanden gernhaben und trotzdem Ruhe vor ihm brauchen."
  },
  {
    "id": "v6-extra-167",
    "kind": "thought",
    "text": "Ein selbst gewählter Umweg kann der eigentliche Ausflug sein."
  },
  {
    "id": "v6-extra-168",
    "kind": "thought",
    "text": "Wer hat dir einmal das Gefühl gegeben, wirklich willkommen zu sein?"
  },
  {
    "id": "v6-extra-169",
    "kind": "thought",
    "text": "Das Beste am Lernen kann sein, wieder neugierig zu werden."
  },
  {
    "id": "v6-extra-170",
    "kind": "thought",
    "text": "Du darfst Dinge langsam mögen lernen."
  },
  {
    "id": "v6-extra-171",
    "kind": "thought",
    "text": "Ein Abend ohne Geschichte kann trotzdem ein guter Abend sein."
  },
  {
    "id": "v6-extra-172",
    "kind": "thought",
    "text": "Was würdest du heute gern zum ersten Mal bemerken?"
  },
  {
    "id": "v6-extra-173",
    "kind": "humor",
    "text": "Mein Einkaufszettel hat mehr Reiseerfahrung als meine Wanderschuhe."
  },
  {
    "id": "v6-extra-174",
    "kind": "humor",
    "text": "Ich gieße meine Pflanzen nach Gefühl. Die Pflanzen hätten lieber einen Kalender."
  },
  {
    "id": "v6-extra-175",
    "kind": "humor",
    "text": "Mein Kleiderschrank enthält drei Größen: passt, passte und optimistisch."
  },
  {
    "id": "v6-extra-176",
    "kind": "humor",
    "text": "Der Staubsauger und ich stoßen beide ständig irgendwo an."
  },
  {
    "id": "v6-extra-177",
    "kind": "humor",
    "text": "Ich habe heute sehr konsequent inkonsequent gehandelt."
  },
  {
    "id": "v6-extra-178",
    "kind": "humor",
    "text": "Mein Tee hat genau die richtige Temperatur. Leider seit zehn Minuten nicht mehr."
  },
  {
    "id": "v6-extra-179",
    "kind": "humor",
    "text": "Ich kann Geheimnisse bewahren. Vor allem meine Passwörter vor mir selbst."
  },
  {
    "id": "v6-extra-180",
    "kind": "humor",
    "text": "Die letzte Scheibe Brot ist dünner als meine Hoffnung auf Frühstück."
  },
  {
    "id": "v6-extra-181",
    "kind": "humor",
    "text": "Meine Tasche hat ein Hauptfach und ein Paralleluniversum."
  },
  {
    "id": "v6-extra-182",
    "kind": "humor",
    "text": "Ich habe die Fernbedienung gefunden. Das Sofa bestreitet jede Beteiligung."
  },
  {
    "id": "v6-extra-183",
    "kind": "humor",
    "text": "Mein Wecker ist der einzige, der morgens wirklich etwas von mir erwartet."
  },
  {
    "id": "v6-extra-184",
    "kind": "humor",
    "text": "Ich habe Sport gemacht: den Gedanken daran mehrfach bewegt."
  },
  {
    "id": "v6-extra-185",
    "kind": "humor",
    "text": "Die Bedienungsanleitung und ich begegnen uns meistens erst nach dem Problem."
  },
  {
    "id": "v6-extra-186",
    "kind": "humor",
    "text": "Mein Kühlschrank ist ein Museum für gute Absichten."
  },
  {
    "id": "v6-extra-187",
    "kind": "humor",
    "text": "Ich falte Spannbettlaken nach einem geheimen Verfahren. Es heißt Aufgeben."
  },
  {
    "id": "v6-extra-188",
    "kind": "humor",
    "text": "Der Regenschirm wartet zuverlässig dort, wo es gerade nicht regnet."
  },
  {
    "id": "v6-extra-189",
    "kind": "humor",
    "text": "Ich bin pünktlich. Meine Schuhe mussten nur noch einmal verschwinden."
  },
  {
    "id": "v6-extra-190",
    "kind": "humor",
    "text": "Mein Notizbuch sagt „Ideen“. Die erste Seite sagt „Milch“."
  },
  {
    "id": "v6-extra-191",
    "kind": "humor",
    "text": "Die Schublade heißt Krimskrams, damit niemand nach einem System fragt."
  },
  {
    "id": "v6-extra-192",
    "kind": "humor",
    "text": "Ich habe ein gutes Gedächtnis für Dinge, die ich nicht wissen wollte."
  },
  {
    "id": "v6-extra-193",
    "kind": "humor",
    "text": "Meine Zimmerpflanze lehnt Kritik ab. Sie lässt einfach ein Blatt fallen."
  },
  {
    "id": "v6-extra-194",
    "kind": "humor",
    "text": "Ich wollte ordentlich kochen. Jetzt ist alles gleichmäßig mit Mehl bedeckt."
  },
  {
    "id": "v6-extra-195",
    "kind": "humor",
    "text": "Der freie Platz auf dem Tisch war ein sehr kurzer historischer Moment."
  },
  {
    "id": "v6-extra-196",
    "kind": "humor",
    "text": "Meine Einkaufstasche kann alles tragen. Wenn ich sie dabei habe."
  },
  {
    "id": "v6-extra-197",
    "kind": "humor",
    "text": "Ich suche etwas Bestimmtes. Mein Gehirn bietet einen alten Werbejingle an."
  },
  {
    "id": "v6-extra-198",
    "kind": "humor",
    "text": "Die Kekse waren für Besuch gedacht. Ich war kurz zu Besuch in der Küche."
  },
  {
    "id": "v6-extra-199",
    "kind": "humor",
    "text": "Mein Schreibtisch hat eine klare Struktur: unten Tisch, oben alles."
  },
  {
    "id": "v6-extra-200",
    "kind": "humor",
    "text": "Ich wollte nur lüften. Jetzt haben alle Zettel neue Wohnorte."
  },
  {
    "id": "v6-extra-201",
    "kind": "humor",
    "text": "Die Nudeln brauchen noch eine Minute. Seit vier Minuten."
  },
  {
    "id": "v6-extra-202",
    "kind": "humor",
    "text": "Mein Lieblingswerkzeug ist jemand, der weiß, wo das richtige Werkzeug liegt."
  },
  {
    "id": "v6-extra-203",
    "kind": "humor",
    "text": "Ich habe den Tag gut geplant. Der Tag hat nicht zugesagt."
  },
  {
    "id": "v6-extra-204",
    "kind": "humor",
    "text": "Die Socke hinter der Waschmaschine lebt offenbar sehr zurückgezogen."
  },
  {
    "id": "v6-extra-205",
    "kind": "humor",
    "text": "Meine Lesebrille hilft beim Lesen. Beim Finden hilft sie weniger."
  },
  {
    "id": "v6-extra-206",
    "kind": "humor",
    "text": "Die Einkaufsliste liegt zu Hause und bewacht den leeren Kühlschrank."
  },
  {
    "id": "v6-extra-207",
    "kind": "humor",
    "text": "Mein Fahrrad quietscht nicht. Es kommentiert."
  },
  {
    "id": "v6-extra-208",
    "kind": "humor",
    "text": "Ich habe aus den Resten gekocht. Jetzt haben wir neue Reste."
  },
  {
    "id": "v6-extra-209",
    "kind": "humor",
    "text": "Mein Kalender ist voll. Ich hätte gerne die Kurzfassung."
  },
  {
    "id": "v6-extra-210",
    "kind": "humor",
    "text": "Ich habe eine Schublade aufgeräumt. Der Rest der Wohnung reagiert abwartend."
  },
  {
    "id": "v6-extra-211",
    "kind": "humor",
    "text": "Die Banane war noch grün. Ich habe kurz weggesehen. Jetzt ist sie Backzutat."
  },
  {
    "id": "v6-extra-212",
    "kind": "humor",
    "text": "Ich kann sehr gut improvisieren, sobald der ursprüngliche Plan gescheitert ist."
  },
  {
    "id": "v6-extra-213",
    "kind": "humor",
    "text": "Mein Ofen kennt zwei Zustände: dauert noch und zu spät."
  },
  {
    "id": "v6-extra-214",
    "kind": "humor",
    "text": "Die Seife riecht nach Wald. Der Wald zum Glück nicht nach Badezimmer."
  },
  {
    "id": "v6-extra-215",
    "kind": "humor",
    "text": "Beim Aufräumen finde ich Dinge, die ich nicht suche. Das motiviert mehr als Ordnung."
  },
  {
    "id": "v6-extra-216",
    "kind": "humor",
    "text": "Meine Handschuhe sind ein Paar mit Fernbeziehung."
  },
  {
    "id": "v6-extra-217",
    "kind": "humor",
    "text": "Ich habe mir eine Eselsbrücke gebaut. Jetzt suche ich den Fluss."
  },
  {
    "id": "v6-extra-218",
    "kind": "humor",
    "text": "Der Brotkorb ist leer. Die Krümel präsentieren noch eine kleine Ausstellung."
  },
  {
    "id": "v6-extra-219",
    "kind": "humor",
    "text": "Ich bin nicht schlecht im Einpacken. Das Geschenk sieht nur aus, als hätte es eine Geschichte."
  },
  {
    "id": "v6-extra-220",
    "kind": "humor",
    "text": "Mein Pflanzenratgeber sagt „pflegeleicht“. Die Pflanze sagt nichts mehr."
  },
  {
    "id": "v6-extra-221",
    "kind": "humor",
    "text": "Die Kaffeemaschine hat heute mehr Einsatz gezeigt als ich."
  },
  {
    "id": "v6-extra-222",
    "kind": "humor",
    "text": "Ich habe mein Ladekabel ordentlich aufgewickelt. Es hat sich nachts anders entschieden."
  },
  {
    "id": "v6-extra-223",
    "kind": "humor",
    "text": "Der Paketbote kommt, wenn ich gerade kurz kein Mensch für Türen bin."
  },
  {
    "id": "v6-extra-224",
    "kind": "humor",
    "text": "Meine Küche ist klein. Trotzdem muss ich jeden Löffel suchen."
  },
  {
    "id": "v6-extra-225",
    "kind": "humor",
    "text": "Ich habe das Rezept halbiert. Das Chaos blieb in Originalgröße."
  },
  {
    "id": "v6-extra-226",
    "kind": "humor",
    "text": "Der Klebestreifen hat seinen Anfang verloren. Ich langsam meine Geduld."
  },
  {
    "id": "v6-extra-227",
    "kind": "humor",
    "text": "Meine Zimmeruhr geht vor. Wenigstens einer von uns."
  },
  {
    "id": "v6-extra-228",
    "kind": "humor",
    "text": "Ich habe den Karton behalten. Für den wichtigen Tag, an dem ich einen Karton brauche."
  },
  {
    "id": "v6-extra-229",
    "kind": "humor",
    "text": "Der Abwasch erledigt sich nicht selbst. Ich habe es lange beobachtet."
  },
  {
    "id": "v6-extra-230",
    "kind": "humor",
    "text": "Ich bin beim Einkaufen sehr vernünftig. Bis zur Käsetheke."
  },
  {
    "id": "v6-extra-231",
    "kind": "humor",
    "text": "Meine Jackentasche enthält einen Bon, einen Knopf und ein Rätsel über den Knopf."
  },
  {
    "id": "v6-extra-232",
    "kind": "humor",
    "text": "Ich wollte früher schlafen gehen. Leider wurde es vorher später."
  },
  {
    "id": "v6-extra-233",
    "kind": "humor",
    "text": "Der Teebeutel ist gerissen. Jetzt gibt es Tee mit Landschaft."
  },
  {
    "id": "v6-extra-234",
    "kind": "humor",
    "text": "Meine To-do-Liste hat Nachwuchs bekommen."
  },
  {
    "id": "v6-extra-235",
    "kind": "humor",
    "text": "Ich habe den Teppich ausgeschüttelt. Der Balkon hat jetzt einen Teppich."
  },
  {
    "id": "v6-extra-236",
    "kind": "humor",
    "text": "Das Fenster ist frisch geputzt. Ein Vogel prüft bereits die Qualität."
  },
  {
    "id": "v6-extra-237",
    "kind": "humor",
    "text": "Ich habe spontan nichts vor. Das war lange geplant."
  },
  {
    "id": "v6-extra-238",
    "kind": "humor",
    "text": "Mein Koffer schließt. Wenn niemand mehr atmet."
  },
  {
    "id": "v6-extra-239",
    "kind": "humor",
    "text": "Der Löffel ist in die Suppe gerutscht. Er nimmt das Eintauchen ernst."
  },
  {
    "id": "v6-extra-240",
    "kind": "humor",
    "text": "Ich habe die Schuhe imprägniert. Die Pfütze wirkte unbeeindruckt."
  },
  {
    "id": "v6-extra-241",
    "kind": "humor",
    "text": "Mein Handy kennt den Weg. Ich kenne immerhin den Akkuverlust."
  },
  {
    "id": "v6-extra-242",
    "kind": "humor",
    "text": "Der Stift schreibt wieder. Genau auf dem Finger, der ihn repariert hat."
  },
  {
    "id": "v6-extra-243",
    "kind": "humor",
    "text": "Ich habe die Kissen aufgeschüttelt. Das Sofa sieht beschäftigter aus als ich."
  },
  {
    "id": "v6-extra-244",
    "kind": "humor",
    "text": "Meine Lieblingssportart ist, knapp noch die grüne Ampel zu schaffen."
  },
  {
    "id": "v6-extra-245",
    "kind": "humor",
    "text": "Der Kühlschrank brummt. Er denkt wohl über das Abendessen nach."
  },
  {
    "id": "v6-extra-246",
    "kind": "humor",
    "text": "Ich habe Ordnung in meine Kabel gebracht. Sie organisieren bereits Widerstand."
  },
  {
    "id": "v6-extra-247",
    "kind": "humor",
    "text": "Das Handtuch fällt immer vom gleichen Haken. Sehr konsequentes Textil."
  },
  {
    "id": "v6-extra-248",
    "kind": "humor",
    "text": "Meine Pflanze wächst schief. Sie hat eine klare Meinung zum Licht."
  },
  {
    "id": "v6-extra-249",
    "kind": "humor",
    "text": "Ich habe die falsche Abzweigung genommen. Jetzt kenne ich eine schöne Tankstelle."
  },
  {
    "id": "v6-extra-250",
    "kind": "humor",
    "text": "Der erste Pfannkuchen ist ein Entwurf."
  },
  {
    "id": "v6-extra-251",
    "kind": "humor",
    "text": "Ich habe den Schrank ausgemistet. Die Nostalgie hängt auf einem eigenen Bügel."
  },
  {
    "id": "v6-extra-252",
    "kind": "humor",
    "text": "Mein Reis ist angebrannt. Die Küche hat ein sehr eindeutiges Thema."
  },
  {
    "id": "v6-extra-253",
    "kind": "humor",
    "text": "Der Einkaufswagen zieht nach links. Politisch möchte ich das nicht bewerten."
  },
  {
    "id": "v6-extra-254",
    "kind": "humor",
    "text": "Ich habe das Geschenk versteckt. Es ist auch vor mir sicher."
  },
  {
    "id": "v6-extra-255",
    "kind": "humor",
    "text": "Mein Buch hat ein Lesezeichen. Ich habe trotzdem vergessen, wer alle sind."
  },
  {
    "id": "v6-extra-256",
    "kind": "humor",
    "text": "Die Tischdecke ist knitterfrei. Zwischen den Falten."
  },
  {
    "id": "v6-extra-257",
    "kind": "humor",
    "text": "Ich habe das Fenster zugemacht. Die Fliege möchte die Geschäftsleitung sprechen."
  },
  {
    "id": "v6-extra-258",
    "kind": "humor",
    "text": "Mein Rucksack ist leicht. Bis ich einpacke, was ich vielleicht nicht brauche."
  },
  {
    "id": "v6-extra-259",
    "kind": "humor",
    "text": "Der Drucker braucht Papier. Auf dem Boden liegt genug, aber er besteht auf Service."
  },
  {
    "id": "v6-extra-260",
    "kind": "humor",
    "text": "Ich habe die Schokolade geteilt. Zwischen jetzt und gleich."
  },
  {
    "id": "v6-extra-261",
    "kind": "humor",
    "text": "Mein Spaziergang hatte kein Ziel. Die Bäckerei hat sich angeboten."
  },
  {
    "id": "v6-extra-262",
    "kind": "humor",
    "text": "Der Wollpullover kratzt. Er möchte, dass ich seine Anwesenheit würdige."
  },
  {
    "id": "v6-extra-263",
    "kind": "humor",
    "text": "Ich habe das Essen abgeschmeckt. Dann noch einmal. Jetzt fehlt eine Portion."
  },
  {
    "id": "v6-extra-264",
    "kind": "humor",
    "text": "Mein Haustürschlüssel versteckt sich nicht. Er bietet Suchspiele an."
  },
  {
    "id": "v6-extra-265",
    "kind": "humor",
    "text": "Die Tapete hält seit Jahren. Das Poster seit zwölf Minuten."
  },
  {
    "id": "v6-extra-266",
    "kind": "humor",
    "text": "Ich habe den Wecker leiser gestellt. Er war anderer Meinung."
  },
  {
    "id": "v6-extra-267",
    "kind": "humor",
    "text": "Der Wasserkocher ist fertig. Ich war noch mitten im Vergessen."
  },
  {
    "id": "v6-extra-268",
    "kind": "humor",
    "text": "Ich fand eine Münze unter dem Sofa. Die Reinigungsprämie fällt bescheiden aus."
  },
  {
    "id": "v6-extra-269",
    "kind": "humor",
    "text": "Mein Pizzateig geht auf. Wenigstens jemand hat heute einen Aufstieg."
  },
  {
    "id": "v6-extra-270",
    "kind": "humor",
    "text": "Die Tasse ist spülmaschinenfest. Meine Begeisterung fürs Ausräumen nicht."
  },
  {
    "id": "v6-extra-271",
    "kind": "humor",
    "text": "Ich habe das Passwort geändert. Auf etwas, das ich frisch vergessen kann."
  },
  {
    "id": "v6-extra-272",
    "kind": "humor",
    "text": "Mein Blumentopf hat ein Loch. Der Untersetzer hat es persönlich genommen."
  },
  {
    "id": "v6-extra-273",
    "kind": "humor",
    "text": "Der letzte Parkplatz ist für jemanden reserviert, der offenbar nie kommt."
  },
  {
    "id": "v6-extra-274",
    "kind": "humor",
    "text": "Ich habe das Marmeladenglas aufbekommen. Mein Handgelenk erwartet einen Orden."
  },
  {
    "id": "v6-extra-275",
    "kind": "humor",
    "text": "Mein Schirm öffnet automatisch. Das Schließen ist ein persönliches Projekt."
  },
  {
    "id": "v6-extra-276",
    "kind": "humor",
    "text": "Die Wäsche ist sortiert. Ein roter Socken führt Gespräche mit den weißen Hemden."
  },
  {
    "id": "v6-extra-277",
    "kind": "humor",
    "text": "Ich habe das Essen schön angerichtet. Der Hunger hat die Ausstellung beendet."
  },
  {
    "id": "v6-extra-278",
    "kind": "humor",
    "text": "Mein Stuhl knarrt beim Aufstehen. Er kommentiert meine Abgänge."
  },
  {
    "id": "v6-extra-279",
    "kind": "humor",
    "text": "Der Faden passt durchs Nadelöhr. Ich arbeite noch am praktischen Beweis."
  },
  {
    "id": "v6-extra-280",
    "kind": "humor",
    "text": "Ich habe eine Liste meiner Listen angefangen. Das fühlt sich gefährlich an."
  },
  {
    "id": "v6-extra-281",
    "kind": "humor",
    "text": "Mein Kräutertopf liefert Basilikum für einen sehr kleinen Italienurlaub."
  },
  {
    "id": "v6-extra-282",
    "kind": "humor",
    "text": "Der Paketkarton ist leer. Die Katze hat ihn bereits möbliert."
  },
  {
    "id": "v6-extra-283",
    "kind": "humor",
    "text": "Ich habe Staub gewischt. Er ist kurz woanders hingezogen."
  },
  {
    "id": "v6-extra-284",
    "kind": "humor",
    "text": "Mein Gemüsefach ist der Ort, an dem Gurken philosophisch werden."
  },
  {
    "id": "v6-extra-285",
    "kind": "humor",
    "text": "Der Aufzug ist langsam. Dafür ist die Fahrt sehr überschaubar."
  },
  {
    "id": "v6-extra-286",
    "kind": "humor",
    "text": "Ich habe den falschen Deckel auf den Topf gelegt. Jetzt trägt er einen Hut."
  },
  {
    "id": "v6-extra-287",
    "kind": "humor",
    "text": "Mein Schal ist lang genug, um meine Entscheidungen einzuwickeln."
  },
  {
    "id": "v6-extra-288",
    "kind": "humor",
    "text": "Die Butter ist streichzart. Leider nur in der Werbung."
  },
  {
    "id": "v6-extra-289",
    "kind": "humor",
    "text": "Ich habe die Tischlampe verstellt. Jetzt sehe ich genau, wo der Staub ist."
  },
  {
    "id": "v6-extra-290",
    "kind": "humor",
    "text": "Mein Einkaufszettel endet mit „und irgendwas Gutes“. Endlich eine klare Vorgabe."
  },
  {
    "id": "v6-extra-291",
    "kind": "humor",
    "text": "Der neue Besen kehrt gut. Der alte hatte mehr Verständnis für Pausen."
  },
  {
    "id": "v6-extra-292",
    "kind": "humor",
    "text": "Ich habe den Kuchen angeschnitten. Aus Gründen der Qualitätskontrolle."
  },
  {
    "id": "v6-extra-293",
    "kind": "humor",
    "text": "Mein Laptop wird warm. Er denkt offenbar mit vollem Körpereinsatz."
  },
  {
    "id": "v6-extra-294",
    "kind": "humor",
    "text": "Der Reißverschluss klemmt. Er hält an seiner Position fest."
  },
  {
    "id": "v6-extra-295",
    "kind": "humor",
    "text": "Ich habe den Tisch gedeckt. Die Katze bewertet das Arrangement aus nächster Nähe."
  },
  {
    "id": "v6-extra-296",
    "kind": "humor",
    "text": "Mein Mülleimer ist voll. Die nächste Verpackung glaubt trotzdem an sich."
  },
  {
    "id": "v6-extra-297",
    "kind": "humor",
    "text": "Der Kugelschreiber fehlt. Der Fleck auf meinem Ärmel ist ein erster Hinweis."
  },
  {
    "id": "v6-extra-298",
    "kind": "humor",
    "text": "Ich habe mir etwas gemerkt. Nur nicht, was daran wichtig war."
  },
  {
    "id": "v6-extra-299",
    "kind": "humor",
    "text": "Mein Trockengestell ist ein Hindernisparcours mit Hemden."
  },
  {
    "id": "v6-extra-300",
    "kind": "humor",
    "text": "Der Honig tropft. Langsam, entschlossen, genau daneben."
  },
  {
    "id": "v6-extra-301",
    "kind": "humor",
    "text": "Ich habe meine Schuhe geputzt. Die Straße wartet mit neuen Ideen."
  },
  {
    "id": "v6-extra-302",
    "kind": "humor",
    "text": "Mein Kissen hat zwei Seiten: kühl und eben noch kühl."
  },
  {
    "id": "v6-extra-303",
    "kind": "humor",
    "text": "Der Backofen piept. Endlich jemand, der an mein Essen denkt."
  },
  {
    "id": "v6-extra-304",
    "kind": "humor",
    "text": "Ich habe das Fenster geöffnet. Ein Vorhang hat sofort mitgemacht."
  },
  {
    "id": "v6-extra-305",
    "kind": "humor",
    "text": "Mein Werkzeugkasten enthält alles. Ich brauche bloß etwas anderes."
  },
  {
    "id": "v6-extra-306",
    "kind": "humor",
    "text": "Der letzte Keks lag ganz allein da. Das konnte ich nicht verantworten."
  },
  {
    "id": "v6-extra-307",
    "kind": "humor",
    "text": "Ich habe eine Abkürzung genommen. Sie war landschaftlich sehr ausführlich."
  },
  {
    "id": "v6-extra-308",
    "kind": "humor",
    "text": "Mein Schlafanzug folgt einer klaren Stilentscheidung: weich."
  },
  {
    "id": "v6-extra-309",
    "kind": "humor",
    "text": "Der Topflappen liegt genau dort, wo ich ihn mit der heißen Pfanne nicht brauche."
  },
  {
    "id": "v6-extra-310",
    "kind": "humor",
    "text": "Ich öffnete den Kühlschrank und vergaß den Auftrag. Klassischer Ortstermin."
  },
  {
    "id": "v6-extra-311",
    "kind": "humor",
    "text": "Mein Teppich hat ein Muster. Seit dem Kaffee ein sehr individuelles."
  },
  {
    "id": "v6-extra-312",
    "kind": "humor",
    "text": "Der Kalender sagt Frühling. Meine Füße beantragen Wintersocken."
  },
  {
    "id": "v6-extra-313",
    "kind": "humor",
    "text": "Ich habe den Brief abgeschickt. Jetzt fällt mir ein schönerer erster Satz ein."
  },
  {
    "id": "v6-extra-314",
    "kind": "humor",
    "text": "Mein Bücherstapel ist keine Unordnung. Er ist eine Warteschlange."
  },
  {
    "id": "v6-extra-315",
    "kind": "humor",
    "text": "Der Pinsel verliert Haare. Mein Bild bekommt Fell."
  },
  {
    "id": "v6-extra-316",
    "kind": "humor",
    "text": "Ich habe das Licht ausgemacht und etwas Wichtiges gesehen: nichts."
  },
  {
    "id": "v6-extra-317",
    "kind": "humor",
    "text": "Mein Wäschekorb führt eine langfristige Beziehung mit Überstunden."
  },
  {
    "id": "v6-extra-318",
    "kind": "humor",
    "text": "Der Schraubdeckel sitzt fest. Offenbar war er beim Krafttraining."
  },
  {
    "id": "v6-extra-319",
    "kind": "humor",
    "text": "Ich habe meine Notizen geordnet. Jetzt muss ich die Handschrift entschlüsseln."
  },
  {
    "id": "v6-extra-320",
    "kind": "humor",
    "text": "Mein Brot ist getoastet. Eine Ecke ist schon ein historischer Fund."
  },
  {
    "id": "v6-extra-321",
    "kind": "humor",
    "text": "Der Einkaufswagen rollt von allein. In eine andere Zukunft."
  },
  {
    "id": "v6-extra-322",
    "kind": "humor",
    "text": "Ich habe das Bett gemacht. Es wirkt unbenutzt und etwas beleidigt."
  },
  {
    "id": "v6-extra-323",
    "kind": "humor",
    "text": "Mein Zitronenbaum hat drei Blätter und große Ambitionen."
  },
  {
    "id": "v6-extra-324",
    "kind": "humor",
    "text": "Der Löffel passt nicht ins Glas. Der Nachtisch fordert Werkzeugkunde."
  },
  {
    "id": "v6-extra-325",
    "kind": "humor",
    "text": "Ich habe die Einkaufstaschen verteilt. Die Kartoffeln übernahmen die Führungsrolle."
  },
  {
    "id": "v6-extra-326",
    "kind": "humor",
    "text": "Mein Radio rauscht. Es spielt die lange Version vom Meer."
  },
  {
    "id": "v6-extra-327",
    "kind": "humor",
    "text": "Der Gartenschlauch hat einen Knick. Er übt wohl Yoga."
  },
  {
    "id": "v6-extra-328",
    "kind": "humor",
    "text": "Ich habe das Handtuch ordentlich aufgehängt. Es ist dekorativ schief."
  },
  {
    "id": "v6-extra-329",
    "kind": "humor",
    "text": "Mein Einkauf passt in eine Tasche. Die Lauchstange hat andere Vorstellungen."
  },
  {
    "id": "v6-extra-330",
    "kind": "humor",
    "text": "Der Karton sagt „Vorsicht Glas“. Drin sind Socken. Die Warnung ist überqualifiziert."
  },
  {
    "id": "v6-extra-331",
    "kind": "humor",
    "text": "Ich habe den Berg bestiegen. Gemeint ist die Bügelwäsche."
  },
  {
    "id": "v6-extra-332",
    "kind": "humor",
    "text": "Mein Pullover ist eingelaufen. Er strebt eine Karriere als Geschenk an."
  },
  {
    "id": "v6-extra-333",
    "kind": "humor",
    "text": "Der Blumentopf steht gerade. Die Pflanze findet das zu einfach."
  },
  {
    "id": "v6-extra-334",
    "kind": "humor",
    "text": "Ich habe das Maßband verlegt. Die Entfernung zum Fundort ist unbekannt."
  },
  {
    "id": "v6-extra-335",
    "kind": "humor",
    "text": "Mein Suppenteller ist tief. Meine Vorsicht war es nicht."
  },
  {
    "id": "v6-extra-336",
    "kind": "humor",
    "text": "Der Timer klingelt. Ich erinnere mich ans Stellen, nicht an den Anlass."
  },
  {
    "id": "v6-extra-337",
    "kind": "humor",
    "text": "Ich habe die Decke zusammengelegt. Das Sofa vermisst ihren natürlichen Zustand."
  },
  {
    "id": "v6-extra-338",
    "kind": "humor",
    "text": "Mein Briefkasten bekommt mehr Werbung als Besuch. Er ist sehr beliebt."
  },
  {
    "id": "v6-extra-339",
    "kind": "humor",
    "text": "Der Blumenstrauß braucht eine Vase. Meine Gießkanne sieht plötzlich elegant aus."
  },
  {
    "id": "v6-extra-340",
    "kind": "humor",
    "text": "Ich habe alles für den Ausflug eingepackt. Jetzt suche ich Platz für den Ausflug."
  },
  {
    "id": "v6-extra-341",
    "kind": "humor",
    "text": "Mein Flur hat eine Schuhsammlung. Kuratiert wird sie durch Stolpern."
  },
  {
    "id": "v6-extra-342",
    "kind": "humor",
    "text": "Der Vorhang hängt endlich. Ich auch, ein bisschen."
  },
  {
    "id": "v6-extra-343",
    "kind": "humor",
    "text": "Ich habe den Kuchen dekoriert. Man erkennt, dass ein Mensch beteiligt war."
  },
  {
    "id": "v6-extra-344",
    "kind": "humor",
    "text": "Mein Kugelschreiber schreibt nur, wenn ich ihm gut zurede."
  },
  {
    "id": "v6-extra-345",
    "kind": "humor",
    "text": "Der Sand vom Urlaub bleibt länger als die Erholung."
  },
  {
    "id": "v6-extra-346",
    "kind": "humor",
    "text": "Ich habe den Schlüsselbund vereinfacht. Jetzt fehlen nur die richtigen Schlüssel."
  },
  {
    "id": "v6-extra-347",
    "kind": "humor",
    "text": "Mein Brotmesser ist scharf. Meine Einschätzung der Scheibendicke nicht."
  },
  {
    "id": "v6-extra-348",
    "kind": "humor",
    "text": "Der Duft heißt „Meeresbrise“. Mein Bad liegt trotzdem neben der Küche."
  },
  {
    "id": "v6-extra-349",
    "kind": "humor",
    "text": "Ich habe aufgeräumt, bevor Besuch kommt. Jetzt darf niemand mehr leben."
  },
  {
    "id": "v6-extra-350",
    "kind": "humor",
    "text": "Mein Schlüsselanhänger ist größer als der Schlüssel. Die Verpackung hat gewonnen."
  },
  {
    "id": "v6-extra-351",
    "kind": "humor",
    "text": "Der Hund sieht mich an, als hätte ich das Wetter bestellt."
  },
  {
    "id": "v6-extra-352",
    "kind": "humor",
    "text": "Ich habe die Brille hochgeschoben. Dort war schon die andere Brille."
  },
  {
    "id": "v6-extra-353",
    "kind": "humor",
    "text": "Mein Teelöffel trifft seine Kollegen im Spülbecken zur Krisensitzung."
  },
  {
    "id": "v6-extra-354",
    "kind": "humor",
    "text": "Der Mülleimerdeckel schließt noch. Das ist unser einziges Qualitätsmerkmal."
  },
  {
    "id": "v6-extra-355",
    "kind": "humor",
    "text": "Ich habe die Wäsche abgenommen. Der einzelne Socken gibt eine Vermisstenanzeige auf."
  },
  {
    "id": "v6-extra-356",
    "kind": "humor",
    "text": "Mein Einkaufszettel ist lesbar. Das garantiert noch nicht seine Bedeutung."
  },
  {
    "id": "v6-extra-357",
    "kind": "humor",
    "text": "Der Topf kocht über. Er möchte am ganzen Herd teilnehmen."
  },
  {
    "id": "v6-extra-358",
    "kind": "humor",
    "text": "Ich habe die Gewürze sortiert. „Irgendwas Rotes“ steht weiterhin unter I."
  },
  {
    "id": "v6-extra-359",
    "kind": "humor",
    "text": "Mein Bett ist frisch bezogen. Der Kampf mit dem Bezug war im Preis enthalten."
  },
  {
    "id": "v6-extra-360",
    "kind": "humor",
    "text": "Der Gartenstuhl klappt zusammen. Die Sitzung war noch nicht beendet."
  },
  {
    "id": "v6-extra-361",
    "kind": "humor",
    "text": "Ich habe den Faden wiedergefunden. Er gehört zu einem anderen Gespräch."
  },
  {
    "id": "v6-extra-362",
    "kind": "humor",
    "text": "Mein Wasserbecher steht neben dem Pinselglas. Kein guter Ort für Optimismus."
  },
  {
    "id": "v6-extra-363",
    "kind": "humor",
    "text": "Der Käse ist zum Überbacken. Ein Teil wurde vorab mündlich geprüft."
  },
  {
    "id": "v6-extra-364",
    "kind": "humor",
    "text": "Ich habe die Einkaufstüte repariert. Sie ist jetzt ein sehr vorsichtiger Beutel."
  },
  {
    "id": "v6-extra-365",
    "kind": "humor",
    "text": "Mein Küchenradio hat guten Empfang. Besonders für Fettspritzer."
  },
  {
    "id": "v6-extra-366",
    "kind": "humor",
    "text": "Der Stuhl ist höhenverstellbar. Meine Beine bleiben bei ihrer Meinung."
  },
  {
    "id": "v6-extra-367",
    "kind": "humor",
    "text": "Ich habe das Fenster streifenfrei geputzt. Man muss im richtigen Winkel stehen."
  },
  {
    "id": "v6-extra-368",
    "kind": "humor",
    "text": "Mein Rasenmäher ist laut. Das Gras hat schriftlich Beschwerde eingereicht."
  },
  {
    "id": "v6-extra-369",
    "kind": "humor",
    "text": "Der Untersetzer ist dekorativ. Die Tasse steht grundsätzlich daneben."
  },
  {
    "id": "v6-extra-370",
    "kind": "humor",
    "text": "Ich habe die Schere gesucht. Sie lag beim Geschenkpapier und fühlte sich im Recht."
  },
  {
    "id": "v6-extra-371",
    "kind": "humor",
    "text": "Mein Strickprojekt wird ein Schal. Das ist die diplomatische Bezeichnung für seine Form."
  },
  {
    "id": "v6-extra-372",
    "kind": "humor",
    "text": "Der Staubsaugerbeutel ist voll. Er hat seine Sammelleidenschaft übertrieben."
  },
  {
    "id": "v6-extra-373",
    "kind": "humor",
    "text": "Ich habe Brot eingefroren. Meine Frühstücksplanung blieb flüssig."
  },
  {
    "id": "v6-extra-374",
    "kind": "humor",
    "text": "Mein Fahrradkorb ist praktisch. Besonders für den Regen, den er sammelt."
  },
  {
    "id": "v6-extra-375",
    "kind": "humor",
    "text": "Der Bilderrahmen hängt schief. Das Bild kann damit leben."
  },
  {
    "id": "v6-extra-376",
    "kind": "humor",
    "text": "Ich habe die letzte Portion aufgehoben. Jemand mit meinem Gesicht hat sie gegessen."
  },
  {
    "id": "v6-extra-377",
    "kind": "humor",
    "text": "Mein Reißverschluss steckt im Stoff. Er wollte wohl näheren Kontakt."
  },
  {
    "id": "v6-extra-378",
    "kind": "humor",
    "text": "Der Kleiderschrank ist voll. Die Kleiderbügel fordern Mindestabstand."
  },
  {
    "id": "v6-extra-379",
    "kind": "humor",
    "text": "Ich habe den Vogel beobachtet. Er mich auch. Keiner hat etwas gekauft."
  },
  {
    "id": "v6-extra-380",
    "kind": "humor",
    "text": "Mein Kaffee ist entkoffeiniert. Meine Erwartungen wurden nicht informiert."
  },
  {
    "id": "v6-extra-381",
    "kind": "humor",
    "text": "Der Handstaubsauger hat Krümel gefressen. Jetzt liegt er satt an der Ladestation."
  },
  {
    "id": "v6-extra-382",
    "kind": "humor",
    "text": "Ich habe die Gardinen gewaschen. Der Raum wirkt zwei Wochen jünger."
  },
  {
    "id": "v6-extra-383",
    "kind": "humor",
    "text": "Mein Basilikum hängt traurig. Er hat wohl das Pesto-Rezept gesehen."
  },
  {
    "id": "v6-extra-384",
    "kind": "humor",
    "text": "Der Kaktus steht im Weg. Seine Beschwerde ist sehr direkt."
  },
  {
    "id": "v6-extra-385",
    "kind": "humor",
    "text": "Ich habe den Staub auf dem Regal bemerkt. Damit endet vorerst die Untersuchung."
  }
];const active=lines.filter(v=>!v.retired),byId=new Map(lines.map(v=>[v.id,v]));

function localized(line,language=root.HexI18n?.language||'de'){if(!line||language!=='en')return line;const en=(typeof module!=='undefined'?require('./finish-en.js'):root.HexFinishEnglish)?.[line.id];if(!en)throw Error('Missing English reading: '+line.id);const tr=root.HexI18n?.t||((v)=>v),work=tr(line.work||'');return {...line,...en,work,translation:line.kind==='quote'&&!line.original?'Hex & Joy translation':undefined,source:line.source?{...line.source,label:line.kind==='quote'?line.author+' · '+work:line.source.label.split(' · ')[0]}:undefined};}
function normalize(raw={}){if(!raw||typeof raw!=='object'||Array.isArray(raw))raw={};const recent=Array.isArray(raw.recent)?raw.recent.filter(id=>byId.has(id)).slice(-72):[],byPuzzle=Object.fromEntries(Object.entries(raw.byPuzzle&&typeof raw.byPuzzle==='object'?raw.byPuzzle:{}).filter(([n,id])=>/^\d+$/.test(n)&&byId.has(id))),history={};for(const [n,ids] of Object.entries(raw.history||{}))if(Array.isArray(ids))history[n]=[...new Set(ids.filter(id=>byId.has(id)))];for(const [n,id] of Object.entries(byPuzzle))if(byId.has(id)){history[n]=history[n]||[];if(!history[n].includes(id))history[n].push(id);}const seen=[...new Set([...(Array.isArray(raw.seen)?raw.seen:[]),...Object.values(history).flat(),...recent].filter(id=>byId.has(id)))];return {recent,byPuzzle,history,seen};}
function choose(motif,memory={},puzzle='',random=Math.random){const m=normalize(memory),seen=new Set(m.seen);let pool=active.filter(v=>!seen.has(v.id));if(!pool.length){const oldest=m.seen.filter(id=>byId.get(id)&&!byId.get(id).retired&&!m.recent.includes(id));pool=oldest.slice(0,Math.max(1,Math.ceil(oldest.length/4))).map(id=>byId.get(id));if(!pool.length)pool=active.filter(v=>v.id!==m.recent.at(-1));}const last=m.recent.slice(-2).map(id=>byId.get(id)).filter(Boolean);const varied=pool.filter(v=>v.kind!==last.at(-1)?.kind&&(!v.topic||v.topic!==last.at(-1)?.topic)&&(!v.author||!last.some(l=>l.author===v.author)));if(varied.length)pool=varied;let kinds=[...new Set(pool.map(v=>v.kind))];const recentKinds=m.recent.slice(-10).map(id=>byId.get(id)?.kind),counts=kinds.map(k=>recentKinds.filter(v=>v===k).length),least=Math.min(...counts);kinds=kinds.filter((k,i)=>counts[i]===least);const kind=kinds[Math.min(kinds.length-1,Math.floor(random()*kinds.length))],choices=pool.filter(v=>v.kind===kind);return localized(choices[Math.min(choices.length-1,Math.floor(random()*choices.length))]);}
function award(memory,puzzle,random=Math.random){const m=normalize(memory),line=choose(null,m,puzzle,random);m.byPuzzle[puzzle]=line.id;m.history[puzzle]=m.history[puzzle]||[];if(!m.history[puzzle].includes(line.id))m.history[puzzle].push(line.id);m.seen=m.seen.filter(id=>id!==line.id);m.seen.push(line.id);m.recent=[...m.recent.filter(id=>id!==line.id),line.id].slice(-72);Object.assign(memory,m);return line;}
const api={lines,active,normalize,choose,award,localized,get:id=>localized(byId.get(id))};if(typeof module!=='undefined')module.exports=api;else root.HexFinish=api;})(typeof window!=='undefined'?window:globalThis);
