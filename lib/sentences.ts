import { VerbConjugation } from "./verbs";

export interface SentenceExample {
  verbId: number;
  hungarian: string;
  german: string;
  tense: "infinitive" | "present" | "past" | "perfect";
}

// Example sentences for each verb
export const sentences: SentenceExample[] = [
  // backen (sütni) - id: 1
  {
    verbId: 1,
    hungarian: "Szeretek sütni.",
    german: "Ich backe gerne.",
    tense: "present",
  },
  {
    verbId: 1,
    hungarian: "Tegnap sütöttem egy tortát.",
    german: "Gestern habe ich einen Kuchen gebacken.",
    tense: "perfect",
  },
  {
    verbId: 1,
    hungarian: "Tegnapelőtt sütöttem kenyeret.",
    german: "Vorgestern backte ich Brot.",
    tense: "past",
  },

  // befehlen (parancsolni) - id: 2
  {
    verbId: 2,
    hungarian: "A kapitány parancsol.",
    german: "Der Kapitän befiehlt.",
    tense: "present",
  },
  {
    verbId: 2,
    hungarian: "A kapitány megparancsolta a visszavonulást.",
    german: "Der Kapitän hat den Rückzug befohlen.",
    tense: "perfect",
  },

  // beginnen (kezdeni) - id: 3
  {
    verbId: 3,
    hungarian: "Most kezdem a munkát.",
    german: "Ich beginne jetzt die Arbeit.",
    tense: "present",
  },
  {
    verbId: 3,
    hungarian: "Már elkezdtem a könyvet.",
    german: "Ich habe das Buch schon begonnen.",
    tense: "perfect",
  },
  {
    verbId: 3,
    hungarian: "A film nyolckor kezdődött.",
    german: "Der Film begann um acht Uhr.",
    tense: "past",
  },

  // heißen (hívni; nevezni) - id: 4
  {
    verbId: 4,
    hungarian: "Péternek hívnak.",
    german: "Ich heiße Peter.",
    tense: "present",
  },
  {
    verbId: 4,
    hungarian: "Korábban Jánosnak hívtak.",
    german: "Früher hieß ich Johann.",
    tense: "past",
  },

  // biegen (hajlítani; kanyarítani) - id: 5
  {
    verbId: 5,
    hungarian: "A drótot hajlítom.",
    german: "Ich biege den Draht.",
    tense: "present",
  },
  {
    verbId: 5,
    hungarian: "Meghajlítottam a drótot.",
    german: "Ich habe den Draht gebogen.",
    tense: "perfect",
  },

  // bieten (kínálni) - id: 6
  {
    verbId: 6,
    hungarian: "Kávét kínálok.",
    german: "Ich biete Kaffee an.",
    tense: "present",
  },
  {
    verbId: 6,
    hungarian: "Kávét kínáltam neki.",
    german: "Ich habe ihm Kaffee geboten.",
    tense: "perfect",
  },

  // bleiben (maradni) - id: 7
  {
    verbId: 7,
    hungarian: "Itthon maradok.",
    german: "Ich bleibe zu Hause.",
    tense: "present",
  },
  {
    verbId: 7,
    hungarian: "Itthon maradtam.",
    german: "Ich bin zu Hause geblieben.",
    tense: "perfect",
  },
  {
    verbId: 7,
    hungarian: "Tegnap otthon maradtam.",
    german: "Gestern blieb ich zu Hause.",
    tense: "past",
  },

  // brechen (törni) - id: 8
  {
    verbId: 8,
    hungarian: "A faág törik.",
    german: "Der Ast bricht.",
    tense: "present",
  },
  {
    verbId: 8,
    hungarian: "Eltörtem a karomat.",
    german: "Ich habe meinen Arm gebrochen.",
    tense: "perfect",
  },

  // empfangen (fogadni) - id: 9
  {
    verbId: 9,
    hungarian: "Vendégeket fogadok.",
    german: "Ich empfange Gäste.",
    tense: "present",
  },
  {
    verbId: 9,
    hungarian: "Vendégeket fogadtam.",
    german: "Ich habe Gäste empfangen.",
    tense: "perfect",
  },

  // empfehlen (ajánlani) - id: 10
  {
    verbId: 10,
    hungarian: "Ezt a könyvet ajánlom.",
    german: "Ich empfehle dieses Buch.",
    tense: "present",
  },
  {
    verbId: 10,
    hungarian: "Ajánlottam neki egy jó éttermet.",
    german: "Ich habe ihm ein gutes Restaurant empfohlen.",
    tense: "perfect",
  },

  // empfinden (érezni) - id: 11
  {
    verbId: 11,
    hungarian: "Örömet érzek.",
    german: "Ich empfinde Freude.",
    tense: "present",
  },
  {
    verbId: 11,
    hungarian: "Nagy örömet éreztem.",
    german: "Ich habe große Freude empfunden.",
    tense: "perfect",
  },

  // essen (enni) - id: 12
  {
    verbId: 12,
    hungarian: "Almát eszem.",
    german: "Ich esse einen Apfel.",
    tense: "present",
  },
  {
    verbId: 12,
    hungarian: "Már ettem.",
    german: "Ich habe schon gegessen.",
    tense: "perfect",
  },
  {
    verbId: 12,
    hungarian: "Tegnap pizzát ettem.",
    german: "Gestern aß ich Pizza.",
    tense: "past",
  },

  // fahren (utazni; vezetni) - id: 13
  {
    verbId: 13,
    hungarian: "Berlinbe utazom.",
    german: "Ich fahre nach Berlin.",
    tense: "present",
  },
  {
    verbId: 13,
    hungarian: "Autót vezetek.",
    german: "Ich fahre Auto.",
    tense: "present",
  },
  {
    verbId: 13,
    hungarian: "Berlinbe utaztam.",
    german: "Ich bin nach Berlin gefahren.",
    tense: "perfect",
  },

  // fangen (fogni) - id: 14
  {
    verbId: 14,
    hungarian: "Elkapom a labdát.",
    german: "Ich fange den Ball.",
    tense: "present",
  },
  {
    verbId: 14,
    hungarian: "Elfogtam a labdát.",
    german: "Ich habe den Ball gefangen.",
    tense: "perfect",
  },
  {
    verbId: 14,
    hungarian: "A gyerek elkapta a játékot.",
    german: "Das Kind fing das Spielzeug.",
    tense: "past",
  },

  // finden (találni) - id: 15
  {
    verbId: 15,
    hungarian: "Megtalálom a kulcsot.",
    german: "Ich finde den Schlüssel.",
    tense: "present",
  },
  {
    verbId: 15,
    hungarian: "Megtaláltam a pénztárcámat.",
    german: "Ich habe meine Geldbörse gefunden.",
    tense: "perfect",
  },
  {
    verbId: 15,
    hungarian: "Tegnap megtaláltam a könyvet.",
    german: "Gestern fand ich das Buch.",
    tense: "past",
  },

  // fliegen (repülni) - id: 16
  {
    verbId: 16,
    hungarian: "Párizsba repülök.",
    german: "Ich fliege nach Paris.",
    tense: "present",
  },
  {
    verbId: 16,
    hungarian: "Már repültem repülővel.",
    german: "Ich bin schon geflogen.",
    tense: "perfect",
  },
  {
    verbId: 16,
    hungarian: "A madár elrepült.",
    german: "Der Vogel flog weg.",
    tense: "past",
  },

  // fliehen (menekülni) - id: 17
  {
    verbId: 17,
    hungarian: "A város elől menekülök.",
    german: "Ich fliehe aus der Stadt.",
    tense: "present",
  },
  {
    verbId: 17,
    hungarian: "Elmenekültem a veszélyből.",
    german: "Ich bin aus der Gefahr geflohen.",
    tense: "perfect",
  },
  {
    verbId: 17,
    hungarian: "Az emberek elmenekültek.",
    german: "Die Menschen flohen.",
    tense: "past",
  },

  // fließen (folyni) - id: 18
  {
    verbId: 18,
    hungarian: "A folyó folyik.",
    german: "Der Fluss fließt.",
    tense: "present",
  },
  {
    verbId: 18,
    hungarian: "A víz a völgybe folyt.",
    german: "Das Wasser ist ins Tal geflossen.",
    tense: "perfect",
  },
  {
    verbId: 18,
    hungarian: "A patak gyorsan folyt.",
    german: "Der Bach floss schnell.",
    tense: "past",
  },

  // fressen (zabálni) - id: 19
  {
    verbId: 19,
    hungarian: "A kutya eszik.",
    german: "Der Hund frisst.",
    tense: "present",
  },
  {
    verbId: 19,
    hungarian: "A macska megette az ételt.",
    german: "Die Katze hat das Essen gefressen.",
    tense: "perfect",
  },
  {
    verbId: 19,
    hungarian: "A medve halat evett.",
    german: "Der Bär fraß Fisch.",
    tense: "past",
  },

  // frieren (fázni; megfagyni) - id: 20
  {
    verbId: 20,
    hungarian: "Fázom a hidegben.",
    german: "Ich friere in der Kälte.",
    tense: "present",
  },
  {
    verbId: 20,
    hungarian: "Nagyon fáztam tegnap.",
    german: "Ich habe gestern sehr gefroren.",
    tense: "perfect",
  },
  {
    verbId: 20,
    hungarian: "A víz megfagyott.",
    german: "Das Wasser ist gefroren.",
    tense: "perfect",
  },

  // geben (adni) - id: 21
  {
    verbId: 21,
    hungarian: "Pénzt adok neki.",
    german: "Ich gebe ihm Geld.",
    tense: "present",
  },
  {
    verbId: 21,
    hungarian: "Adtam neki egy könyvet.",
    german: "Ich habe ihr ein Buch gegeben.",
    tense: "perfect",
  },
  {
    verbId: 21,
    hungarian: "Tegnap adtam neki a kulcsot.",
    german: "Gestern gab ich ihm den Schlüssel.",
    tense: "past",
  },

  // gehen (menni) - id: 22
  {
    verbId: 22,
    hungarian: "Iskolába megyek.",
    german: "Ich gehe zur Schule.",
    tense: "present",
  },
  {
    verbId: 22,
    hungarian: "Már elmentem.",
    german: "Ich bin schon gegangen.",
    tense: "perfect",
  },
  {
    verbId: 22,
    hungarian: "Tegnap a parkba mentem.",
    german: "Gestern ging ich in den Park.",
    tense: "past",
  },

  // gelingen (sikerülni) - id: 23
  {
    verbId: 23,
    hungarian: "Sikerül nekem a feladat.",
    german: "Die Aufgabe gelingt mir.",
    tense: "present",
  },
  {
    verbId: 23,
    hungarian: "Sikerült a vizsga.",
    german: "Die Prüfung ist gelungen.",
    tense: "perfect",
  },
  {
    verbId: 23,
    hungarian: "A terv sikerült.",
    german: "Der Plan gelang.",
    tense: "past",
  },

  // gelten (érvényesnek lenni) - id: 24
  {
    verbId: 24,
    hungarian: "A szabály mindenkire érvényes.",
    german: "Die Regel gilt für alle.",
    tense: "present",
  },
  {
    verbId: 24,
    hungarian: "Ez a jegy érvényes volt.",
    german: "Dieses Ticket hat gegolten.",
    tense: "perfect",
  },
  {
    verbId: 24,
    hungarian: "A törvény érvényes volt.",
    german: "Das Gesetz galt.",
    tense: "past",
  },

  // genießen (élvezni) - id: 25
  {
    verbId: 25,
    hungarian: "Élvezem a nyaralást.",
    german: "Ich genieße den Urlaub.",
    tense: "present",
  },
  {
    verbId: 25,
    hungarian: "Élveztem az estét.",
    german: "Ich habe den Abend genossen.",
    tense: "perfect",
  },
  {
    verbId: 25,
    hungarian: "Élvezte a koncertet.",
    german: "Sie genoss das Konzert.",
    tense: "past",
  },

  // geraten (jutni; kerülni) - id: 26
  {
    verbId: 26,
    hungarian: "Bajba kerülök.",
    german: "Ich gerate in Schwierigkeiten.",
    tense: "present",
  },
  {
    verbId: 26,
    hungarian: "Bajba kerültem.",
    german: "Ich bin in Schwierigkeiten geraten.",
    tense: "perfect",
  },
  {
    verbId: 26,
    hungarian: "Veszélybe került.",
    german: "Er geriet in Gefahr.",
    tense: "past",
  },

  // geschehen (történni) - id: 27
  {
    verbId: 27,
    hungarian: "Valami történik.",
    german: "Etwas geschieht.",
    tense: "present",
  },
  {
    verbId: 27,
    hungarian: "Baleset történt.",
    german: "Ein Unfall ist geschehen.",
    tense: "perfect",
  },
  {
    verbId: 27,
    hungarian: "Tegnap történt.",
    german: "Es geschah gestern.",
    tense: "past",
  },

  // gewinnen (nyerni) - id: 28
  {
    verbId: 28,
    hungarian: "Meg akarom nyerni a versenyt.",
    german: "Ich will den Wettbewerb gewinnen.",
    tense: "infinitive",
  },
  {
    verbId: 28,
    hungarian: "Megnyertem a játékot.",
    german: "Ich habe das Spiel gewonnen.",
    tense: "perfect",
  },
  {
    verbId: 28,
    hungarian: "A csapat megnyerte a meccset.",
    german: "Die Mannschaft gewann das Spiel.",
    tense: "past",
  },

  // gießen (öntözni; önteni) - id: 29
  {
    verbId: 29,
    hungarian: "Öntözöm a virágokat.",
    german: "Ich gieße die Blumen.",
    tense: "present",
  },
  {
    verbId: 29,
    hungarian: "Megöntöztem a kertet.",
    german: "Ich habe den Garten gegossen.",
    tense: "perfect",
  },
  {
    verbId: 29,
    hungarian: "Vizet öntött a pohárba.",
    german: "Sie goss Wasser ins Glas.",
    tense: "past",
  },

  // gleichen (hasonlítani) - id: 30
  {
    verbId: 30,
    hungarian: "A fiú hasonlít az apjára.",
    german: "Der Junge gleicht seinem Vater.",
    tense: "present",
  },
  {
    verbId: 30,
    hungarian: "Mindig hasonlított rá.",
    german: "Er hat ihm immer geglichen.",
    tense: "perfect",
  },
  {
    verbId: 30,
    hungarian: "A lány hasonlított az anyjára.",
    german: "Das Mädchen glich ihrer Mutter.",
    tense: "past",
  },

  // gleiten (csúszni) - id: 31
  {
    verbId: 31,
    hungarian: "A korcsolyázó csúszik.",
    german: "Der Schlittschuhläufer gleitet.",
    tense: "present",
  },
  {
    verbId: 31,
    hungarian: "Csúsztam a jégen.",
    german: "Ich bin auf dem Eis geglitten.",
    tense: "perfect",
  },
  {
    verbId: 31,
    hungarian: "A csónak csúszott a vízen.",
    german: "Das Boot glitt auf dem Wasser.",
    tense: "past",
  },

  // graben (ásni) - id: 32
  {
    verbId: 32,
    hungarian: "Lyukat ások.",
    german: "Ich grabe ein Loch.",
    tense: "present",
  },
  {
    verbId: 32,
    hungarian: "Árkot ástam.",
    german: "Ich habe einen Graben gegraben.",
    tense: "perfect",
  },
  {
    verbId: 32,
    hungarian: "A munkások árkot ástak.",
    german: "Die Arbeiter gruben einen Graben.",
    tense: "past",
  },

  // greifen (megfogni) - id: 33
  {
    verbId: 33,
    hungarian: "Megragadom a kezét.",
    german: "Ich greife ihre Hand.",
    tense: "present",
  },
  {
    verbId: 33,
    hungarian: "Megfogtam a poharat.",
    german: "Ich habe das Glas gegriffen.",
    tense: "perfect",
  },
  {
    verbId: 33,
    hungarian: "Gyorsan megragadta a lehetőséget.",
    german: "Er griff schnell die Gelegenheit.",
    tense: "past",
  },

  // halten (tartani) - id: 34
  {
    verbId: 34,
    hungarian: "A kezét tartom.",
    german: "Ich halte ihre Hand.",
    tense: "present",
  },
  {
    verbId: 34,
    hungarian: "Tartottam az ajándékot.",
    german: "Ich habe das Geschenk gehalten.",
    tense: "perfect",
  },
  {
    verbId: 34,
    hungarian: "Az autó megállt.",
    german: "Das Auto hielt an.",
    tense: "past",
  },

  // hängen (lógni; függni) - id: 35
  {
    verbId: 35,
    hungarian: "A kép a falon függ.",
    german: "Das Bild hängt an der Wand.",
    tense: "present",
  },
  {
    verbId: 35,
    hungarian: "A kabát a fogas felől lógott.",
    german: "Der Mantel hat an der Garderobe gehangen.",
    tense: "perfect",
  },
  {
    verbId: 35,
    hungarian: "A lámpa a mennyezeten függött.",
    german: "Die Lampe hing an der Decke.",
    tense: "past",
  },

  // heben (emelni) - id: 36
  {
    verbId: 36,
    hungarian: "Felemelem a kezem.",
    german: "Ich hebe meine Hand.",
    tense: "present",
  },
  {
    verbId: 36,
    hungarian: "Felemelte a dobozt.",
    german: "Er hat die Kiste gehoben.",
    tense: "perfect",
  },
  {
    verbId: 36,
    hungarian: "Felemelte a súlyt.",
    german: "Sie hob das Gewicht.",
    tense: "past",
  },

  // helfen (segíteni) - id: 37
  {
    verbId: 37,
    hungarian: "Segítek neki.",
    german: "Ich helfe ihm.",
    tense: "present",
  },
  {
    verbId: 37,
    hungarian: "Segítettem a barátomnak.",
    german: "Ich habe meinem Freund geholfen.",
    tense: "perfect",
  },
  {
    verbId: 37,
    hungarian: "Segített nekem a költözésnél.",
    german: "Er half mir beim Umzug.",
    tense: "past",
  },

  // klingen (hangzani) - id: 38
  {
    verbId: 38,
    hungarian: "A zene szépen hangzik.",
    german: "Die Musik klingt schön.",
    tense: "present",
  },
  {
    verbId: 38,
    hungarian: "A dal jól hangzott.",
    german: "Das Lied hat gut geklungen.",
    tense: "perfect",
  },
  {
    verbId: 38,
    hungarian: "A harang hangzott.",
    german: "Die Glocke klang.",
    tense: "past",
  },

  // kommen (jönni) - id: 39
  {
    verbId: 39,
    hungarian: "Holnap jövök.",
    german: "Ich komme morgen.",
    tense: "present",
  },
  {
    verbId: 39,
    hungarian: "Már megjöttem.",
    german: "Ich bin schon gekommen.",
    tense: "perfect",
  },
  {
    verbId: 39,
    hungarian: "Tegnap jöttem haza.",
    german: "Gestern kam ich nach Hause.",
    tense: "past",
  },

  // laden (rakni; betölteni) - id: 40
  {
    verbId: 40,
    hungarian: "Bepakolom a csomagokat.",
    german: "Ich lade die Pakete ein.",
    tense: "present",
  },
  {
    verbId: 40,
    hungarian: "Betöltöttem a programot.",
    german: "Ich habe das Programm geladen.",
    tense: "perfect",
  },
  {
    verbId: 40,
    hungarian: "Berakta az árut a kocsiba.",
    german: "Er lud die Ware ins Auto.",
    tense: "past",
  },

  // lassen (hagyni) - id: 41
  {
    verbId: 41,
    hungarian: "Otthagyom a kulcsot.",
    german: "Ich lasse den Schlüssel da.",
    tense: "present",
  },
  {
    verbId: 41,
    hungarian: "Otthagytam a telefont.",
    german: "Ich habe das Telefon gelassen.",
    tense: "perfect",
  },
  {
    verbId: 41,
    hungarian: "Békén hagyta.",
    german: "Er ließ sie in Ruhe.",
    tense: "past",
  },

  // laufen (futni) - id: 42
  {
    verbId: 42,
    hungarian: "Reggel futok.",
    german: "Ich laufe morgens.",
    tense: "present",
  },
  {
    verbId: 42,
    hungarian: "Ma már futottam.",
    german: "Ich bin heute schon gelaufen.",
    tense: "perfect",
  },
  {
    verbId: 42,
    hungarian: "Gyorsan futott.",
    german: "Er lief schnell.",
    tense: "past",
  },

  // leiden (szenvedni) - id: 43
  {
    verbId: 43,
    hungarian: "Fájdalmat szenvedek.",
    german: "Ich leide Schmerzen.",
    tense: "present",
  },
  {
    verbId: 43,
    hungarian: "Sokat szenvedett.",
    german: "Er hat viel gelitten.",
    tense: "perfect",
  },
  {
    verbId: 43,
    hungarian: "A beteg szenvedett.",
    german: "Der Kranke litt.",
    tense: "past",
  },

  // leihen (kölcsönadni) - id: 44
  {
    verbId: 44,
    hungarian: "Kölcsönadok neki pénzt.",
    german: "Ich leihe ihm Geld.",
    tense: "present",
  },
  {
    verbId: 44,
    hungarian: "Kölcsönadtam neki a könyvet.",
    german: "Ich habe ihm das Buch geliehen.",
    tense: "perfect",
  },
  {
    verbId: 44,
    hungarian: "Kölcsönadta az autót.",
    german: "Sie lieh das Auto.",
    tense: "past",
  },

  // lesen (olvasni) - id: 45
  {
    verbId: 45,
    hungarian: "Könyvet olvasok.",
    german: "Ich lese ein Buch.",
    tense: "present",
  },
  {
    verbId: 45,
    hungarian: "Már olvastam ezt a könyvet.",
    german: "Ich habe dieses Buch schon gelesen.",
    tense: "perfect",
  },
  {
    verbId: 45,
    hungarian: "Tegnap újságot olvastam.",
    german: "Gestern las ich eine Zeitung.",
    tense: "past",
  },

  // liegen (feküdni) - id: 46
  {
    verbId: 46,
    hungarian: "Az ágyon fekszem.",
    german: "Ich liege auf dem Bett.",
    tense: "present",
  },
  {
    verbId: 46,
    hungarian: "Egész nap feküdtem.",
    german: "Ich habe den ganzen Tag gelegen.",
    tense: "perfect",
  },
  {
    verbId: 46,
    hungarian: "A könyv az asztalon feküdt.",
    german: "Das Buch lag auf dem Tisch.",
    tense: "past",
  },

  // lügen (hazudni) - id: 47
  {
    verbId: 47,
    hungarian: "Ne hazudj!",
    german: "Lüg nicht!",
    tense: "present",
  },
  {
    verbId: 47,
    hungarian: "Hazudott nekem.",
    german: "Er hat mir gelogen.",
    tense: "perfect",
  },
  {
    verbId: 47,
    hungarian: "Mindig hazudott.",
    german: "Er log immer.",
    tense: "past",
  },

  // meiden (kerülni) - id: 48
  {
    verbId: 48,
    hungarian: "Kerülöm a konfliktusokat.",
    german: "Ich meide Konflikte.",
    tense: "present",
  },
  {
    verbId: 48,
    hungarian: "Kerültem a tömeget.",
    german: "Ich habe die Menge gemieden.",
    tense: "perfect",
  },
  {
    verbId: 48,
    hungarian: "Kerülte a veszélyt.",
    german: "Sie mied die Gefahr.",
    tense: "past",
  },

  // messen (mérni) - id: 49
  {
    verbId: 49,
    hungarian: "Mérem a hőmérsékletet.",
    german: "Ich messe die Temperatur.",
    tense: "present",
  },
  {
    verbId: 49,
    hungarian: "Megmértem a távolságot.",
    german: "Ich habe die Entfernung gemessen.",
    tense: "perfect",
  },
  {
    verbId: 49,
    hungarian: "Megmérte a magasságát.",
    german: "Er maß seine Höhe.",
    tense: "past",
  },

  // misslingen (sikertelenné válni) - id: 50
  {
    verbId: 50,
    hungarian: "A kísérlet sikertelen.",
    german: "Das Experiment misslingt.",
    tense: "present",
  },
  {
    verbId: 50,
    hungarian: "A terv sikertelen volt.",
    german: "Der Plan ist misslungen.",
    tense: "perfect",
  },
  {
    verbId: 50,
    hungarian: "A próbálkozás sikertelen volt.",
    german: "Der Versuch misslang.",
    tense: "past",
  },

  // nehmen (venni) - id: 51
  {
    verbId: 51,
    hungarian: "Veszek egy könyvet.",
    german: "Ich nehme ein Buch.",
    tense: "present",
  },
  {
    verbId: 51,
    hungarian: "Vettem egy ajándékot.",
    german: "Ich habe ein Geschenk genommen.",
    tense: "perfect",
  },
  {
    verbId: 51,
    hungarian: "Vett egy almát.",
    german: "Er nahm einen Apfel.",
    tense: "past",
  },

  // pfeifen (fütyülni) - id: 52
  {
    verbId: 52,
    hungarian: "Fütyülök egy dalt.",
    german: "Ich pfeife ein Lied.",
    tense: "present",
  },
  {
    verbId: 52,
    hungarian: "Fütyültem egyet.",
    german: "Ich habe gepfiffen.",
    tense: "perfect",
  },
  {
    verbId: 52,
    hungarian: "A bíró sípolt.",
    german: "Der Schiedsrichter pfiff.",
    tense: "past",
  },

  // preisen (dicsérni) - id: 53
  {
    verbId: 53,
    hungarian: "Dicsérem a munkáját.",
    german: "Ich preise seine Arbeit.",
    tense: "present",
  },
  {
    verbId: 53,
    hungarian: "Dicsértem a teljesítményét.",
    german: "Ich habe seine Leistung gepriesen.",
    tense: "perfect",
  },
  {
    verbId: 53,
    hungarian: "Mindenki dicsérte őt.",
    german: "Alle priesen ihn.",
    tense: "past",
  },

  // raten (tanácsolni) - id: 54
  {
    verbId: 54,
    hungarian: "Tanácsot adok neki.",
    german: "Ich rate ihm.",
    tense: "present",
  },
  {
    verbId: 54,
    hungarian: "Tanácsot adtam neki.",
    german: "Ich habe ihm geraten.",
    tense: "perfect",
  },
  {
    verbId: 54,
    hungarian: "Az orvos azt tanácsolta.",
    german: "Der Arzt riet das.",
    tense: "past",
  },

  // reiben (dörzsölni) - id: 55
  {
    verbId: 55,
    hungarian: "Dörzsölöm a kezem.",
    german: "Ich reibe meine Hände.",
    tense: "present",
  },
  {
    verbId: 55,
    hungarian: "Dörzsöltem a szememet.",
    german: "Ich habe meine Augen gerieben.",
    tense: "perfect",
  },
  {
    verbId: 55,
    hungarian: "Dörzsölte a foltot.",
    german: "Sie rieb den Fleck.",
    tense: "past",
  },

  // reißen (szakítani) - id: 56
  {
    verbId: 56,
    hungarian: "Elszakítom a papírt.",
    german: "Ich reiße das Papier.",
    tense: "present",
  },
  {
    verbId: 56,
    hungarian: "Elszakadt a nadrágomat.",
    german: "Ich habe meine Hose gerissen.",
    tense: "perfect",
  },
  {
    verbId: 56,
    hungarian: "Elszakadt a zsinór.",
    german: "Die Schnur riss.",
    tense: "past",
  },

  // reiten (lovagolni) - id: 57
  {
    verbId: 57,
    hungarian: "Lovagolok.",
    german: "Ich reite.",
    tense: "present",
  },
  {
    verbId: 57,
    hungarian: "Az erdőbe lovagoltam.",
    german: "Ich bin in den Wald geritten.",
    tense: "perfect",
  },
  {
    verbId: 57,
    hungarian: "Lovagoltak a mezőn.",
    german: "Sie ritten auf dem Feld.",
    tense: "past",
  },

  // riechen (szagolni) - id: 58
  {
    verbId: 58,
    hungarian: "Érzem a virágok illatát.",
    german: "Ich rieche die Blumen.",
    tense: "present",
  },
  {
    verbId: 58,
    hungarian: "Éreztem a kávé illatát.",
    german: "Ich habe den Kaffee gerochen.",
    tense: "perfect",
  },
  {
    verbId: 58,
    hungarian: "Rossz szagot érzett.",
    german: "Er roch etwas Schlechtes.",
    tense: "past",
  },

  // rufen (kiáltani) - id: 59
  {
    verbId: 59,
    hungarian: "Segítségért kiáltok.",
    german: "Ich rufe um Hilfe.",
    tense: "present",
  },
  {
    verbId: 59,
    hungarian: "Kiáltottam a nevét.",
    german: "Ich habe seinen Namen gerufen.",
    tense: "perfect",
  },
  {
    verbId: 59,
    hungarian: "Segítségért kiáltott.",
    german: "Sie rief um Hilfe.",
    tense: "past",
  },

  // saufen (iszik - állatokról) - id: 60
  {
    verbId: 60,
    hungarian: "A ló vizet iszik.",
    german: "Das Pferd säuft Wasser.",
    tense: "present",
  },
  {
    verbId: 60,
    hungarian: "A kutya vizet ivott.",
    german: "Der Hund hat Wasser gesoffen.",
    tense: "perfect",
  },
  {
    verbId: 60,
    hungarian: "A tehén ivott a vályúból.",
    german: "Die Kuh soff aus dem Trog.",
    tense: "past",
  },

  // saugen (szívni) - id: 61
  {
    verbId: 61,
    hungarian: "A porszívó szív.",
    german: "Der Staubsauger saugt.",
    tense: "present",
  },
  {
    verbId: 61,
    hungarian: "Felporszívóztam a szőnyeget.",
    german: "Ich habe den Teppich gesogen.",
    tense: "perfect",
  },
  {
    verbId: 61,
    hungarian: "A baba a cumit szívta.",
    german: "Das Baby sog am Schnuller.",
    tense: "past",
  },

  // schaffen (teremteni) - id: 62
  {
    verbId: 62,
    hungarian: "Művészetet teremtek.",
    german: "Ich schaffe Kunst.",
    tense: "present",
  },
  {
    verbId: 62,
    hungarian: "Új világot teremtett.",
    german: "Er hat eine neue Welt geschaffen.",
    tense: "perfect",
  },
  {
    verbId: 62,
    hungarian: "Isten teremtette a világot.",
    german: "Gott schuf die Welt.",
    tense: "past",
  },

  // scheiden (elválasztani) - id: 63
  {
    verbId: 63,
    hungarian: "Elválasztom őket.",
    german: "Ich scheide sie.",
    tense: "present",
  },
  {
    verbId: 63,
    hungarian: "Elváltak.",
    german: "Sie sind geschieden.",
    tense: "perfect",
  },
  {
    verbId: 63,
    hungarian: "Az útjaik elváltak.",
    german: "Ihre Wege schieden sich.",
    tense: "past",
  },

  // scheinen (sütni) - id: 64
  {
    verbId: 64,
    hungarian: "A nap süt.",
    german: "Die Sonne scheint.",
    tense: "present",
  },
  {
    verbId: 64,
    hungarian: "Ma sütött a nap.",
    german: "Heute hat die Sonne geschienen.",
    tense: "perfect",
  },
  {
    verbId: 64,
    hungarian: "Tegnap sütött a nap.",
    german: "Gestern schien die Sonne.",
    tense: "past",
  },

  // schelten (szidni) - id: 65
  {
    verbId: 65,
    hungarian: "A tanár szid.",
    german: "Der Lehrer schilt.",
    tense: "present",
  },
  {
    verbId: 65,
    hungarian: "Megszidtam a gyereket.",
    german: "Ich habe das Kind gescholten.",
    tense: "perfect",
  },
  {
    verbId: 65,
    hungarian: "Megszidta őt.",
    german: "Er schalt ihn.",
    tense: "past",
  },

  // schieben (tolni) - id: 66
  {
    verbId: 66,
    hungarian: "Tolom a kocsit.",
    german: "Ich schiebe den Wagen.",
    tense: "present",
  },
  {
    verbId: 66,
    hungarian: "Toltam a babakocsi.",
    german: "Ich habe den Kinderwagen geschoben.",
    tense: "perfect",
  },
  {
    verbId: 66,
    hungarian: "Tolta az ajtót.",
    german: "Er schob die Tür.",
    tense: "past",
  },

  // schlafen (aludni) - id: 67
  {
    verbId: 67,
    hungarian: "Jól alszom.",
    german: "Ich schlafe gut.",
    tense: "present",
  },
  {
    verbId: 67,
    hungarian: "Jól aludtam.",
    german: "Ich habe gut geschlafen.",
    tense: "perfect",
  },
  {
    verbId: 67,
    hungarian: "Hosszat aludt.",
    german: "Er schlief lange.",
    tense: "past",
  },

  // schlagen (ütni) - id: 68
  {
    verbId: 68,
    hungarian: "Megütöm a labdát.",
    german: "Ich schlage den Ball.",
    tense: "present",
  },
  {
    verbId: 68,
    hungarian: "Megütöttem a labdát.",
    german: "Ich habe den Ball geschlagen.",
    tense: "perfect",
  },
  {
    verbId: 68,
    hungarian: "Az óra ütött tizenkettőt.",
    german: "Die Uhr schlug zwölf.",
    tense: "past",
  },

  // schließen (bezárni) - id: 69
  {
    verbId: 69,
    hungarian: "Bezárom az ajtót.",
    german: "Ich schließe die Tür.",
    tense: "present",
  },
  {
    verbId: 69,
    hungarian: "Bezártam az ablakot.",
    german: "Ich habe das Fenster geschlossen.",
    tense: "perfect",
  },
  {
    verbId: 69,
    hungarian: "Bezárta a boltot.",
    german: "Er schloss den Laden.",
    tense: "past",
  },

  // schmelzen (olvadni) - id: 70
  {
    verbId: 70,
    hungarian: "A hó olvad.",
    german: "Der Schnee schmilzt.",
    tense: "present",
  },
  {
    verbId: 70,
    hungarian: "A jég elolvadt.",
    german: "Das Eis ist geschmolzen.",
    tense: "perfect",
  },
  {
    verbId: 70,
    hungarian: "A fagylalt elolvadt.",
    german: "Das Eis schmolz.",
    tense: "past",
  },

  // schneiden (vágni) - id: 71
  {
    verbId: 71,
    hungarian: "Vágom a kenyeret.",
    german: "Ich schneide das Brot.",
    tense: "present",
  },
  {
    verbId: 71,
    hungarian: "Vágtam zöldségeket.",
    german: "Ich habe Gemüse geschnitten.",
    tense: "perfect",
  },
  {
    verbId: 71,
    hungarian: "Levágta a haját.",
    german: "Sie schnitt ihr Haar.",
    tense: "past",
  },

  // schrecken (megijeszteni) - id: 72
  {
    verbId: 72,
    hungarian: "Megijesztem őt.",
    german: "Ich schrecke ihn.",
    tense: "present",
  },
  {
    verbId: 72,
    hungarian: "Megijedtem.",
    german: "Ich habe mich geschreckt.",
    tense: "perfect",
  },
  {
    verbId: 72,
    hungarian: "Megijedt a zajtól.",
    german: "Er schrak vor dem Lärm.",
    tense: "past",
  },

  // schreiben (írni) - id: 73
  {
    verbId: 73,
    hungarian: "Levelet írok.",
    german: "Ich schreibe einen Brief.",
    tense: "present",
  },
  {
    verbId: 73,
    hungarian: "Írtam egy e-mailt.",
    german: "Ich habe eine E-Mail geschrieben.",
    tense: "perfect",
  },
  {
    verbId: 73,
    hungarian: "Tegnap írt egy könyvet.",
    german: "Gestern schrieb er ein Buch.",
    tense: "past",
  },

  // schreien (kiabálni) - id: 74
  {
    verbId: 74,
    hungarian: "Hangosan kiabálok.",
    german: "Ich schreie laut.",
    tense: "present",
  },
  {
    verbId: 74,
    hungarian: "Kiabáltam segítségért.",
    german: "Ich habe um Hilfe geschrien.",
    tense: "perfect",
  },
  {
    verbId: 74,
    hungarian: "A gyerek kiabált.",
    german: "Das Kind schrie.",
    tense: "past",
  },

  // beißen (harapni) - id: 75
  {
    verbId: 75,
    hungarian: "A kutya harap.",
    german: "Der Hund beißt.",
    tense: "present",
  },
  {
    verbId: 75,
    hungarian: "Megharapott a kutya.",
    german: "Der Hund hat mich gebissen.",
    tense: "perfect",
  },
  {
    verbId: 75,
    hungarian: "Beleharapott az almába.",
    german: "Er biss in den Apfel.",
    tense: "past",
  },

  // binden (kötni) - id: 76
  {
    verbId: 76,
    hungarian: "Megkötöm a cipőm.",
    german: "Ich binde meine Schuhe.",
    tense: "present",
  },
  {
    verbId: 76,
    hungarian: "Megkötöttem a nyakkendőt.",
    german: "Ich habe die Krawatte gebunden.",
    tense: "perfect",
  },
  {
    verbId: 76,
    hungarian: "Megkötötte a csomagot.",
    german: "Sie band das Paket.",
    tense: "past",
  },

  // bitten (kérni) - id: 77
  {
    verbId: 77,
    hungarian: "Segítséget kérek.",
    german: "Ich bitte um Hilfe.",
    tense: "present",
  },
  {
    verbId: 77,
    hungarian: "Kértem bocsánatot.",
    german: "Ich habe um Entschuldigung gebeten.",
    tense: "perfect",
  },
  {
    verbId: 77,
    hungarian: "Pénzt kért.",
    german: "Er bat um Geld.",
    tense: "past",
  },

  // scheißen (szarni - durva) - id: 78
  {
    verbId: 78,
    hungarian: "A kutya a kertben van.",
    german: "Der Hund scheißt im Garten.",
    tense: "present",
  },
  {
    verbId: 78,
    hungarian: "A madár a padra szart.",
    german: "Der Vogel hat auf die Bank geschissen.",
    tense: "perfect",
  },
  {
    verbId: 78,
    hungarian: "Durva beszéd volt.",
    german: "Er schiss.",
    tense: "past",
  },

  // schießen (lőni) - id: 79
  {
    verbId: 79,
    hungarian: "Lövök egy gólt.",
    german: "Ich schieße ein Tor.",
    tense: "present",
  },
  {
    verbId: 79,
    hungarian: "Lőttem egy fotót.",
    german: "Ich habe ein Foto geschossen.",
    tense: "perfect",
  },
  {
    verbId: 79,
    hungarian: "Gólt lőtt.",
    german: "Er schoss ein Tor.",
    tense: "past",
  },

  // schmeißen (hajítani; dobni) - id: 80
  {
    verbId: 80,
    hungarian: "Dobom a labdát.",
    german: "Ich schmeiße den Ball.",
    tense: "present",
  },
  {
    verbId: 80,
    hungarian: "Dobtam a labdát.",
    german: "Ich habe den Ball geschmissen.",
    tense: "perfect",
  },
  {
    verbId: 80,
    hungarian: "Eldobta a követ.",
    german: "Er schmiss den Stein.",
    tense: "past",
  },

  // erschrecken (megijeszteni; megijedni) - id: 81
  {
    verbId: 81,
    hungarian: "Megijeszt engem.",
    german: "Er erschreckt mich.",
    tense: "present",
  },
  {
    verbId: 81,
    hungarian: "Megijedtem.",
    german: "Ich bin erschrocken.",
    tense: "perfect",
  },
  {
    verbId: 81,
    hungarian: "Megijesztette őt.",
    german: "Er erschrak ihn.",
    tense: "past",
  },

  // schweigen (hallgatni - csendben) - id: 82
  {
    verbId: 82,
    hungarian: "Hallgatok.",
    german: "Ich schweige.",
    tense: "present",
  },
  {
    verbId: 82,
    hungarian: "Hallgattam az egész időt.",
    german: "Ich habe die ganze Zeit geschwiegen.",
    tense: "perfect",
  },
  {
    verbId: 82,
    hungarian: "Hallgatott a kérdésre.",
    german: "Er schwieg auf die Frage.",
    tense: "past",
  },

  // schwimmen (úszni) - id: 83
  {
    verbId: 83,
    hungarian: "Úszom a medencében.",
    german: "Ich schwimme im Schwimmbad.",
    tense: "present",
  },
  {
    verbId: 83,
    hungarian: "Úsztam a tengerben.",
    german: "Ich bin im Meer geschwommen.",
    tense: "perfect",
  },
  {
    verbId: 83,
    hungarian: "Átúszott a folyón.",
    german: "Er schwamm über den Fluss.",
    tense: "past",
  },

  // schwören (esküdni) - id: 84
  {
    verbId: 84,
    hungarian: "Megesküszöm.",
    german: "Ich schwöre.",
    tense: "present",
  },
  {
    verbId: 84,
    hungarian: "Megesküdtem az igazat mondani.",
    german: "Ich habe geschworen, die Wahrheit zu sagen.",
    tense: "perfect",
  },
  {
    verbId: 84,
    hungarian: "Megesküdött bosszút állni.",
    german: "Er schwor Rache.",
    tense: "past",
  },

  // sehen (látni) - id: 85
  {
    verbId: 85,
    hungarian: "Látom a házat.",
    german: "Ich sehe das Haus.",
    tense: "present",
  },
  {
    verbId: 85,
    hungarian: "Láttam a filmet.",
    german: "Ich habe den Film gesehen.",
    tense: "perfect",
  },
  {
    verbId: 85,
    hungarian: "Látta a balesetet.",
    german: "Er sah den Unfall.",
    tense: "past",
  },

  // sein (lenni) - id: 86
  {
    verbId: 86,
    hungarian: "Boldog vagyok.",
    german: "Ich bin glücklich.",
    tense: "present",
  },
  {
    verbId: 86,
    hungarian: "Berlinben voltam.",
    german: "Ich bin in Berlin gewesen.",
    tense: "perfect",
  },
  {
    verbId: 86,
    hungarian: "Beteg voltam.",
    german: "Ich war krank.",
    tense: "past",
  },

  // singen (énekelni) - id: 87
  {
    verbId: 87,
    hungarian: "Dalokat énekelek.",
    german: "Ich singe Lieder.",
    tense: "present",
  },
  {
    verbId: 87,
    hungarian: "Énekeltem egy dalt.",
    german: "Ich habe ein Lied gesungen.",
    tense: "perfect",
  },
  {
    verbId: 87,
    hungarian: "Szépen énekelt.",
    german: "Sie sang schön.",
    tense: "past",
  },

  // sinken (süllyedni) - id: 88
  {
    verbId: 88,
    hungarian: "A hajó süllyed.",
    german: "Das Schiff sinkt.",
    tense: "present",
  },
  {
    verbId: 88,
    hungarian: "A hajó elsüllyedt.",
    german: "Das Schiff ist gesunken.",
    tense: "perfect",
  },
  {
    verbId: 88,
    hungarian: "A hőmérséklet csökkent.",
    german: "Die Temperatur sank.",
    tense: "past",
  },

  // sitzen (ülni) - id: 89
  {
    verbId: 89,
    hungarian: "A széken ülök.",
    german: "Ich sitze auf dem Stuhl.",
    tense: "present",
  },
  {
    verbId: 89,
    hungarian: "Egész nap ültem.",
    german: "Ich habe den ganzen Tag gesessen.",
    tense: "perfect",
  },
  {
    verbId: 89,
    hungarian: "Az asztalánál ült.",
    german: "Er saß an seinem Tisch.",
    tense: "past",
  },

  // spinnen (fonni; őrülten viselkedni) - id: 90
  {
    verbId: 90,
    hungarian: "A pók szövet sző.",
    german: "Die Spinne spinnt.",
    tense: "present",
  },
  {
    verbId: 90,
    hungarian: "Fonaltam.",
    german: "Ich habe gesponnen.",
    tense: "perfect",
  },
  {
    verbId: 90,
    hungarian: "Őrült dolgokat mondott.",
    german: "Er spann verrückte Dinge.",
    tense: "past",
  },

  // sprechen (beszélni) - id: 91
  {
    verbId: 91,
    hungarian: "Németül beszélek.",
    german: "Ich spreche Deutsch.",
    tense: "present",
  },
  {
    verbId: 91,
    hungarian: "Beszéltem vele.",
    german: "Ich habe mit ihm gesprochen.",
    tense: "perfect",
  },
  {
    verbId: 91,
    hungarian: "Lassan beszélt.",
    german: "Er sprach langsam.",
    tense: "past",
  },

  // springen (ugrani) - id: 92
  {
    verbId: 92,
    hungarian: "Ugrálok.",
    german: "Ich springe.",
    tense: "present",
  },
  {
    verbId: 92,
    hungarian: "Beleugrottam a vízbe.",
    german: "Ich bin ins Wasser gesprungen.",
    tense: "perfect",
  },
  {
    verbId: 92,
    hungarian: "Átuggrott a kerítésen.",
    german: "Er sprang über den Zaun.",
    tense: "past",
  },

  // stechen (szúrni) - id: 93
  {
    verbId: 93,
    hungarian: "A szúnyog szúr.",
    german: "Die Mücke sticht.",
    tense: "present",
  },
  {
    verbId: 93,
    hungarian: "Megszúrt a méh.",
    german: "Die Biene hat mich gestochen.",
    tense: "perfect",
  },
  {
    verbId: 93,
    hungarian: "A tövis megszúrta.",
    german: "Der Dorn stach ihn.",
    tense: "past",
  },

  // stehen (állni) - id: 94
  {
    verbId: 94,
    hungarian: "Az ajtónál állok.",
    german: "Ich stehe an der Tür.",
    tense: "present",
  },
  {
    verbId: 94,
    hungarian: "Sokáig álltam.",
    german: "Ich habe lange gestanden.",
    tense: "perfect",
  },
  {
    verbId: 94,
    hungarian: "A sarkon állt.",
    german: "Er stand an der Ecke.",
    tense: "past",
  },

  // stehlen (lopni) - id: 95
  {
    verbId: 95,
    hungarian: "Ne lopj!",
    german: "Stiehl nicht!",
    tense: "present",
  },
  {
    verbId: 95,
    hungarian: "Elloptam egy almát.",
    german: "Ich habe einen Apfel gestohlen.",
    tense: "perfect",
  },
  {
    verbId: 95,
    hungarian: "Pénzt lopott.",
    german: "Er stahl Geld.",
    tense: "past",
  },

  // steigen (mászni; emelkedni) - id: 96
  {
    verbId: 96,
    hungarian: "Felmászom a hegyre.",
    german: "Ich steige auf den Berg.",
    tense: "present",
  },
  {
    verbId: 96,
    hungarian: "Felmásztam a létrán.",
    german: "Ich bin auf die Leiter gestiegen.",
    tense: "perfect",
  },
  {
    verbId: 96,
    hungarian: "Felmászott a tetőre.",
    german: "Er stieg auf das Dach.",
    tense: "past",
  },

  // sterben (meghalni) - id: 97
  {
    verbId: 97,
    hungarian: "A beteg meghal.",
    german: "Der Kranke stirbt.",
    tense: "present",
  },
  {
    verbId: 97,
    hungarian: "Meghalt tavaly.",
    german: "Er ist letztes Jahr gestorben.",
    tense: "perfect",
  },
  {
    verbId: 97,
    hungarian: "Fiatalon halt meg.",
    german: "Er starb jung.",
    tense: "past",
  },

  // stinken (bűzölögni) - id: 98
  {
    verbId: 98,
    hungarian: "A szemét büdös.",
    german: "Der Müll stinkt.",
    tense: "present",
  },
  {
    verbId: 98,
    hungarian: "Büdös volt a szoba.",
    german: "Das Zimmer hat gestunken.",
    tense: "perfect",
  },
  {
    verbId: 98,
    hungarian: "Kellemetlen szaga volt.",
    german: "Es stank unangenehm.",
    tense: "past",
  },

  // stoßen (lökni; ütközni) - id: 99
  {
    verbId: 99,
    hungarian: "Meglököm az ajtót.",
    german: "Ich stoße die Tür.",
    tense: "present",
  },
  {
    verbId: 99,
    hungarian: "Belém ütközött.",
    german: "Er hat mich gestoßen.",
    tense: "perfect",
  },
  {
    verbId: 99,
    hungarian: "A falba ütközött.",
    german: "Er ist an die Wand gestoßen.",
    tense: "perfect",
  },

  // streichen (kenni; törölgetni; vonulni) - id: 100
  {
    verbId: 100,
    hungarian: "Festem a falat.",
    german: "Ich streiche die Wand.",
    tense: "present",
  },
  {
    verbId: 100,
    hungarian: "Lefestettem a házat.",
    german: "Ich habe das Haus gestrichen.",
    tense: "perfect",
  },
  {
    verbId: 100,
    hungarian: "Átfestette az ajtót.",
    german: "Er strich die Tür.",
    tense: "past",
  },

  // streiten (veszekedni) - id: 101
  {
    verbId: 101,
    hungarian: "Veszekedünk.",
    german: "Wir streiten.",
    tense: "present",
  },
  {
    verbId: 101,
    hungarian: "Veszekedtem vele.",
    german: "Ich habe mit ihm gestritten.",
    tense: "perfect",
  },
  {
    verbId: 101,
    hungarian: "Sokat veszekedtek.",
    german: "Sie stritten viel.",
    tense: "past",
  },

  // tragen (hordani; viselni) - id: 102
  {
    verbId: 102,
    hungarian: "Táskát hordok.",
    german: "Ich trage eine Tasche.",
    tense: "present",
  },
  {
    verbId: 102,
    hungarian: "Hoztam egy ajándékot.",
    german: "Ich habe ein Geschenk getragen.",
    tense: "perfect",
  },
  {
    verbId: 102,
    hungarian: "Piros ruhát viselt.",
    german: "Sie trug ein rotes Kleid.",
    tense: "past",
  },

  // treffen (találkozni; eltalálni) - id: 103
  {
    verbId: 103,
    hungarian: "Találkozom a barátommal.",
    german: "Ich treffe meinen Freund.",
    tense: "present",
  },
  {
    verbId: 103,
    hungarian: "Találkoztam vele.",
    german: "Ich habe ihn getroffen.",
    tense: "perfect",
  },
  {
    verbId: 103,
    hungarian: "Tegnap találkoztunk.",
    german: "Gestern trafen wir uns.",
    tense: "past",
  },

  // treiben (hajtani; úszkálni) - id: 104
  {
    verbId: 104,
    hungarian: "Sportot űzök.",
    german: "Ich treibe Sport.",
    tense: "present",
  },
  {
    verbId: 104,
    hungarian: "Úsztam a vízben.",
    german: "Ich bin im Wasser getrieben.",
    tense: "perfect",
  },
  {
    verbId: 104,
    hungarian: "Hajtotta a jószágot.",
    german: "Er trieb das Vieh.",
    tense: "past",
  },

  // treten (lépni; rúgni) - id: 105
  {
    verbId: 105,
    hungarian: "Belépek a szobába.",
    german: "Ich trete ins Zimmer.",
    tense: "present",
  },
  {
    verbId: 105,
    hungarian: "Beleléptem a vízbe.",
    german: "Ich bin ins Wasser getreten.",
    tense: "perfect",
  },
  {
    verbId: 105,
    hungarian: "Rúgott a labdára.",
    german: "Er trat den Ball.",
    tense: "past",
  },

  // trinken (inni) - id: 106
  {
    verbId: 106,
    hungarian: "Vizet iszom.",
    german: "Ich trinke Wasser.",
    tense: "present",
  },
  {
    verbId: 106,
    hungarian: "Kávét ittam.",
    german: "Ich habe Kaffee getrunken.",
    tense: "perfect",
  },
  {
    verbId: 106,
    hungarian: "Sört ivott.",
    german: "Er trank Bier.",
    tense: "past",
  },

  // trügen (csalni; megtéveszteni) - id: 107
  {
    verbId: 107,
    hungarian: "A látszat csal.",
    german: "Der Schein trügt.",
    tense: "present",
  },
  {
    verbId: 107,
    hungarian: "Megcsalt engem.",
    german: "Er hat mich getrogen.",
    tense: "perfect",
  },
  {
    verbId: 107,
    hungarian: "A szemem csalt.",
    german: "Mein Auge trog.",
    tense: "past",
  },

  // tun (tenni; csinálni) - id: 108
  {
    verbId: 108,
    hungarian: "Mit csinálsz?",
    german: "Was tust du?",
    tense: "present",
  },
  {
    verbId: 108,
    hungarian: "Megcsináltam a feladatot.",
    german: "Ich habe die Aufgabe getan.",
    tense: "perfect",
  },
  {
    verbId: 108,
    hungarian: "Sokat tett értem.",
    german: "Er tat viel für mich.",
    tense: "past",
  },

  // verderben (romlani; tönkretenni) - id: 109
  {
    verbId: 109,
    hungarian: "Az étel romlik.",
    german: "Das Essen verdirbt.",
    tense: "present",
  },
  {
    verbId: 109,
    hungarian: "A tej megromlott.",
    german: "Die Milch ist verdorben.",
    tense: "perfect",
  },
  {
    verbId: 109,
    hungarian: "Tönkretette a tervet.",
    german: "Er verdarb den Plan.",
    tense: "past",
  },

  // vergessen (elfelejteni) - id: 110
  {
    verbId: 110,
    hungarian: "Elfelejtem a nevét.",
    german: "Ich vergesse seinen Namen.",
    tense: "present",
  },
  {
    verbId: 110,
    hungarian: "Elfelejtettem a találkozót.",
    german: "Ich habe das Treffen vergessen.",
    tense: "perfect",
  },
  {
    verbId: 110,
    hungarian: "Elfelejtette a kulcsokat.",
    german: "Er vergaß die Schlüssel.",
    tense: "past",
  },

  // verlieren (elveszíteni) - id: 111
  {
    verbId: 111,
    hungarian: "Elveszítem a kulcsot.",
    german: "Ich verliere den Schlüssel.",
    tense: "present",
  },
  {
    verbId: 111,
    hungarian: "Elveszítettem a pénztárcámat.",
    german: "Ich habe meine Geldbörse verloren.",
    tense: "perfect",
  },
  {
    verbId: 111,
    hungarian: "Elvesztette a mérkőzést.",
    german: "Er verlor das Spiel.",
    tense: "past",
  },

  // wachsen (nőni; növekedni) - id: 112
  {
    verbId: 112,
    hungarian: "A gyerek nő.",
    german: "Das Kind wächst.",
    tense: "present",
  },
  {
    verbId: 112,
    hungarian: "Nagyra nőttem.",
    german: "Ich bin groß gewachsen.",
    tense: "perfect",
  },
  {
    verbId: 112,
    hungarian: "A fa nagyra nőtt.",
    german: "Der Baum wuchs groß.",
    tense: "past",
  },

  // waschen (mosni) - id: 113
  {
    verbId: 113,
    hungarian: "Mosok ruhát.",
    german: "Ich wasche Kleidung.",
    tense: "present",
  },
  {
    verbId: 113,
    hungarian: "Mostam egy autót.",
    german: "Ich habe ein Auto gewaschen.",
    tense: "perfect",
  },
  {
    verbId: 113,
    hungarian: "Megmosta a kezét.",
    german: "Er wusch seine Hände.",
    tense: "past",
  },

  // weben (szőni) - id: 114
  {
    verbId: 114,
    hungarian: "Szövetet szövök.",
    german: "Ich webe Stoff.",
    tense: "present",
  },
  {
    verbId: 114,
    hungarian: "Szőttem egy szőnyeget.",
    german: "Ich habe einen Teppich gewoben.",
    tense: "perfect",
  },
  {
    verbId: 114,
    hungarian: "Anyaga szőtt szövetet.",
    german: "Sie wob Stoff.",
    tense: "past",
  },

  // werben (hirdetni; toborozni) - id: 115
  {
    verbId: 115,
    hungarian: "Hirdetést készítek.",
    german: "Ich werbe.",
    tense: "present",
  },
  {
    verbId: 115,
    hungarian: "Hirdettünk egy terméket.",
    german: "Wir haben ein Produkt geworben.",
    tense: "perfect",
  },
  {
    verbId: 115,
    hungarian: "Új alkalmazottakat toborzott.",
    german: "Er warb neue Mitarbeiter.",
    tense: "past",
  },

  // werden (változni; lenni - jövő) - id: 116
  {
    verbId: 116,
    hungarian: "Orvos leszek.",
    german: "Ich werde Arzt.",
    tense: "present",
  },
  {
    verbId: 116,
    hungarian: "Tanár lettem.",
    german: "Ich bin Lehrer geworden.",
    tense: "perfect",
  },
  {
    verbId: 116,
    hungarian: "Beteg lett.",
    german: "Er wurde krank.",
    tense: "past",
  },

  // werfen (dobni) - id: 117
  {
    verbId: 117,
    hungarian: "Dobom a labdát.",
    german: "Ich werfe den Ball.",
    tense: "present",
  },
  {
    verbId: 117,
    hungarian: "Dobtam a követ.",
    german: "Ich habe den Stein geworfen.",
    tense: "perfect",
  },
  {
    verbId: 117,
    hungarian: "Eldobta a papírt.",
    german: "Er warf das Papier.",
    tense: "past",
  },

  // wiegen (mérni - súly; fontolni) - id: 118
  {
    verbId: 118,
    hungarian: "Mérem a súlyom.",
    german: "Ich wiege mein Gewicht.",
    tense: "present",
  },
  {
    verbId: 118,
    hungarian: "Megmértem a csomagot.",
    german: "Ich habe das Paket gewogen.",
    tense: "perfect",
  },
  {
    verbId: 118,
    hungarian: "80 kilót nyomott.",
    german: "Er wog 80 Kilo.",
    tense: "past",
  },

  // verzeihen (megbocsátani) - id: 119
  {
    verbId: 119,
    hungarian: "Megbocsátok neki.",
    german: "Ich verzeihe ihm.",
    tense: "present",
  },
  {
    verbId: 119,
    hungarian: "Megbocsátottam neki.",
    german: "Ich habe ihm verziehen.",
    tense: "perfect",
  },
  {
    verbId: 119,
    hungarian: "Megbocsátott neki.",
    german: "Sie verzieh ihm.",
    tense: "past",
  },

  // ziehen (húzni; vonszolni) - id: 120
  {
    verbId: 120,
    hungarian: "Húzom az ajtót.",
    german: "Ich ziehe die Tür.",
    tense: "present",
  },
  {
    verbId: 120,
    hungarian: "Elhúztam a bútort.",
    german: "Ich habe die Möbel gezogen.",
    tense: "perfect",
  },
  {
    verbId: 120,
    hungarian: "Új városba költözött.",
    german: "Er ist in eine neue Stadt gezogen.",
    tense: "perfect",
  },

  // zwingen (kényszeríteni) - id: 121
  {
    verbId: 121,
    hungarian: "Kényszerítem őt.",
    german: "Ich zwinge ihn.",
    tense: "present",
  },
  {
    verbId: 121,
    hungarian: "Kényszerítettem őt erre.",
    german: "Ich habe ihn dazu gezwungen.",
    tense: "perfect",
  },
  {
    verbId: 121,
    hungarian: "Kényszerítette arra.",
    german: "Er zwang ihn dazu.",
    tense: "past",
  },
];

// Helper function to get sentences for a specific verb
export function getSentencesForVerb(verbId: number): SentenceExample[] {
  return sentences.filter((s) => s.verbId === verbId);
}

// Helper function to get all sentences for a list of verbs
export function getSentencesForVerbs(verbs: VerbConjugation[]): SentenceExample[] {
  const verbIds = new Set(verbs.map((v) => v.id));
  return sentences.filter((s) => verbIds.has(s.verbId));
}
