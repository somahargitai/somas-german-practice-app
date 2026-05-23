import { Month } from "./vocabulary";

export type Gender = "m" | "f" | "n" | "pl";
export type GrammarCase = "nom" | "akk" | "dativ" | "genitiv";
export type DeclensionType = "strong" | "weak" | "mixed";

export const GENDER_LABELS: Record<Gender, string> = {
  m: "Hímnem (maskulin)",
  f: "Nőnem (feminin)",
  n: "Semleges (neutrum)",
  pl: "Többes szám (Plural)",
};

export const CASE_LABELS: Record<GrammarCase, string> = {
  nom: "Alanyeset (Nominativ)",
  akk: "Tárgyeset (Akkusativ)",
  dativ: "Részes eset (Dativ)",
  genitiv: "Birtokos eset (Genitiv)",
};

export const DECLENSION_LABELS: Record<DeclensionType, string> = {
  strong: "erős ragozás (stark)",
  weak: "gyenge ragozás (schwach)",
  mixed: "vegyes ragozás (gemischt)",
};

export const ROLE_LABELS: Record<DeclSlot["role"], string> = {
  article: "névelő / kísérőszó",
  adjective: "melléknév",
  noun: "főnév",
};

export interface DeclSlot {
  id: string;
  role: "article" | "adjective" | "noun";
  before: string; // a slot előtti, már megadott rész (pl. a melléknév töve)
  answer: string; // a helyes érték ("" = nincs végződés)
  options: string[]; // a kínált chipek (tartalmazza a helyeset)
  gender: Gender;
  case: GrammarCase;
  declension?: DeclensionType; // csak melléknévnél releváns
  note?: string;
}

export type DeclToken =
  | { type: "text"; value: string }
  | { type: "slot"; slot: DeclSlot };

export interface DeclSentence {
  id: number;
  month: Month;
  tokens: DeclToken[];
  translation: string;
  glossary: { de: string; hu: string }[];
}

// ===== Nyelvtani táblák =====

type Table = Record<Gender, Record<GrammarCase, string>>;

// Határozott névelő
const DEF: Table = {
  m: { nom: "der", akk: "den", dativ: "dem", genitiv: "des" },
  f: { nom: "die", akk: "die", dativ: "der", genitiv: "der" },
  n: { nom: "das", akk: "das", dativ: "dem", genitiv: "des" },
  pl: { nom: "die", akk: "die", dativ: "den", genitiv: "der" },
};

// der-szavak (dieser, jener, jeder, alle, solche) végződései a tövön
const DER_END: Table = {
  m: { nom: "er", akk: "en", dativ: "em", genitiv: "es" },
  f: { nom: "e", akk: "e", dativ: "er", genitiv: "er" },
  n: { nom: "es", akk: "es", dativ: "em", genitiv: "es" },
  pl: { nom: "e", akk: "e", dativ: "en", genitiv: "er" },
};

// ein-szavak (ein, kein, mein, ihr…) végződései a tövön
const EIN_END: Table = {
  m: { nom: "", akk: "en", dativ: "em", genitiv: "es" },
  f: { nom: "e", akk: "e", dativ: "er", genitiv: "er" },
  n: { nom: "", akk: "", dativ: "em", genitiv: "es" },
  pl: { nom: "e", akk: "e", dativ: "en", genitiv: "er" },
};

// Melléknévvégződések ragozástípusonként
const ADJ: Record<DeclensionType, Table> = {
  weak: {
    m: { nom: "e", akk: "en", dativ: "en", genitiv: "en" },
    f: { nom: "e", akk: "e", dativ: "en", genitiv: "en" },
    n: { nom: "e", akk: "e", dativ: "en", genitiv: "en" },
    pl: { nom: "en", akk: "en", dativ: "en", genitiv: "en" },
  },
  mixed: {
    m: { nom: "er", akk: "en", dativ: "en", genitiv: "en" },
    f: { nom: "e", akk: "e", dativ: "en", genitiv: "en" },
    n: { nom: "es", akk: "es", dativ: "en", genitiv: "en" },
    pl: { nom: "en", akk: "en", dativ: "en", genitiv: "en" },
  },
  strong: {
    m: { nom: "er", akk: "en", dativ: "em", genitiv: "en" },
    f: { nom: "e", akk: "e", dativ: "er", genitiv: "er" },
    n: { nom: "es", akk: "es", dativ: "em", genitiv: "en" },
    pl: { nom: "e", akk: "e", dativ: "en", genitiv: "er" },
  },
};

type DetFamily =
  | "def"
  | "dies"
  | "jen"
  | "jed"
  | "alle"
  | "solch"
  | "ein"
  | "mein"
  | "ihr";

const DER_FAMILIES: DetFamily[] = ["dies", "jen", "jed", "alle", "solch"];
const STEM: Record<DetFamily, string> = {
  def: "",
  dies: "dies",
  jen: "jen",
  jed: "jed",
  alle: "all",
  solch: "solch",
  ein: "ein",
  mein: "mein",
  ihr: "ihr",
};

const DET_OPTIONS: Record<DetFamily, string[]> = {
  def: ["der", "die", "das", "den", "dem", "des"],
  dies: ["dieser", "diese", "dieses", "diesen", "diesem"],
  jen: ["jener", "jene", "jenes", "jenen", "jenem"],
  jed: ["jeder", "jede", "jedes", "jeden", "jedem"],
  alle: ["alle", "allen", "aller"],
  solch: ["solche", "solchen", "solcher"],
  ein: ["ein", "eine", "einen", "einem", "eines", "einer"],
  mein: ["mein", "meine", "meinen", "meinem", "meines", "meiner"],
  ihr: ["ihr", "ihre", "ihren", "ihrem", "ihres", "ihrer"],
};

const ADJ_ENDINGS = ["e", "en", "er", "es", "em"];
const NOUN_ENDINGS = ["", "n", "en", "es", "s"];

function detForm(family: DetFamily, g: Gender, c: GrammarCase): string {
  if (family === "def") return DEF[g][c];
  const table = DER_FAMILIES.includes(family) ? DER_END : EIN_END;
  return STEM[family] + table[g][c];
}

function capF(s: string): string {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

// ===== Builder függvények =====

function t(value: string): DeclToken {
  return { type: "text", value };
}

function det(
  id: string,
  family: DetFamily,
  g: Gender,
  c: GrammarCase,
  cap = false,
  note?: string
): DeclToken {
  let answer = detForm(family, g, c);
  let options = DET_OPTIONS[family];
  if (cap) {
    answer = capF(answer);
    options = options.map(capF);
  }
  return {
    type: "slot",
    slot: { id, role: "article", before: "", answer, options, gender: g, case: c, note },
  };
}

function adj(
  id: string,
  stem: string,
  decl: DeclensionType,
  g: Gender,
  c: GrammarCase,
  note?: string
): DeclToken {
  return {
    type: "slot",
    slot: {
      id,
      role: "adjective",
      before: stem,
      answer: ADJ[decl][g][c],
      options: ADJ_ENDINGS,
      gender: g,
      case: c,
      declension: decl,
      note,
    },
  };
}

function noun(
  id: string,
  stem: string,
  ending: string,
  g: Gender,
  c: GrammarCase,
  note?: string
): DeclToken {
  return {
    type: "slot",
    slot: {
      id,
      role: "noun",
      before: stem,
      answer: ending,
      options: NOUN_ENDINGS,
      gender: g,
      case: c,
      note,
    },
  };
}

const N_NOUN = "gyenge (n-) főnév: -en minden esetben, kivéve alanyeset egyes szám";
const DAT_PL = "Dativ többes szám: a főnév -n végződést kap";
const PLURAL = "többes számú alak";

// ===== Mondatok =====
// A felhasználó 22 mondata (májushoz), nyelvtanilag ellenőrizve és apró
// elírásokból javítva, majd 6 generált példa az áprilisi/májusi szókincsből.

export const declensionSentences: DeclSentence[] = [
  {
    id: 1,
    month: "may",
    tokens: [
      det("1d1", "def", "f", "nom", true),
      t(" "),
      adj("1a1", "jung", "weak", "f", "nom"),
      t(" "),
      noun("1n1", "Frau", "", "f", "nom"),
      t(" wartet auf "),
      det("1d2", "ihr", "m", "akk"),
      t(" "),
      noun("1n2", "Sohn", "", "m", "akk"),
      t("."),
    ],
    translation: "A fiatal nő a fiára vár.",
    glossary: [
      { de: "die", hu: "a/az (határozott névelő)" },
      { de: "jung", hu: "fiatal" },
      { de: "Frau", hu: "nő, asszony" },
      { de: "warten (auf)", hu: "várni (vkire/vmire, + Akk)" },
      { de: "ihr", hu: "az ő …-a/-e (birtokos)" },
      { de: "Sohn", hu: "fiú (utód)" },
    ],
  },
  {
    id: 2,
    month: "may",
    tokens: [
      det("2d1", "dies", "m", "nom", true),
      t(" "),
      adj("2a1", "neu", "weak", "m", "nom"),
      t(" "),
      noun("2n1", "Wagen", "", "m", "nom"),
      t(" gefällt mir nicht."),
    ],
    translation: "Ez az új autó nem tetszik nekem.",
    glossary: [
      { de: "dieser", hu: "ez (a)" },
      { de: "neu", hu: "új" },
      { de: "Wagen", hu: "autó, kocsi" },
      { de: "gefallen", hu: "tetszeni (+ Dativ)" },
      { de: "mir", hu: "nekem" },
      { de: "nicht", hu: "nem" },
    ],
  },
  {
    id: 3,
    month: "may",
    tokens: [
      t("Sie arbeitet jetzt unter "),
      det("3d1", "def", "f", "dativ"),
      t(" "),
      adj("3a1", "klein", "weak", "f", "dativ"),
      t(" "),
      noun("3n1", "Dusche", "", "f", "dativ"),
      t("."),
    ],
    translation: "Most a kis zuhany alatt dolgozik.",
    glossary: [
      { de: "sie", hu: "ő (nőnem)" },
      { de: "arbeiten", hu: "dolgozni" },
      { de: "jetzt", hu: "most" },
      { de: "unter", hu: "alatt (+ Dativ)" },
      { de: "der", hu: "a/az (névelő)" },
      { de: "klein", hu: "kicsi" },
      { de: "Dusche", hu: "zuhany" },
    ],
  },
  {
    id: 4,
    month: "may",
    tokens: [
      det("4d1", "jen", "m", "dativ", true),
      t(" "),
      adj("4a1", "nervös", "weak", "m", "dativ"),
      t(" "),
      noun("4n1", "Mann", "", "m", "dativ"),
      t(" gebe ich "),
      det("4d2", "ein", "f", "akk"),
      t(" "),
      noun("4n2", "Ohrfeige", "", "f", "akk"),
      t("."),
    ],
    translation: "Annak az ideges férfinak adok egy pofont.",
    glossary: [
      { de: "jener", hu: "az (amaz)" },
      { de: "nervös", hu: "ideges" },
      { de: "Mann", hu: "férfi" },
      { de: "geben", hu: "adni" },
      { de: "ich", hu: "én" },
      { de: "eine", hu: "egy (határozatlan névelő)" },
      { de: "Ohrfeige", hu: "pofon" },
    ],
  },
  {
    id: 5,
    month: "may",
    tokens: [
      t("Neben uns wohnt "),
      det("5d1", "jen", "m", "nom"),
      t(" "),
      adj("5a1", "intelligent", "weak", "m", "nom"),
      t(" und "),
      adj("5a2", "stark", "weak", "m", "nom"),
      t(" "),
      noun("5n1", "Detektiv", "", "m", "nom"),
      t("."),
    ],
    translation: "Mellettünk lakik az az intelligens és erős detektív.",
    glossary: [
      { de: "neben", hu: "mellett" },
      { de: "uns", hu: "minket / nálunk" },
      { de: "wohnen", hu: "lakni" },
      { de: "jener", hu: "az (amaz)" },
      { de: "intelligent", hu: "intelligens" },
      { de: "und", hu: "és" },
      { de: "stark", hu: "erős" },
      { de: "Detektiv", hu: "detektív, nyomozó" },
    ],
  },
  {
    id: 6,
    month: "may",
    tokens: [
      t("Seht ihr "),
      det("6d1", "jen", "m", "akk"),
      t(" "),
      adj("6a1", "alt", "weak", "m", "akk"),
      t(" "),
      noun("6n1", "Baum", "", "m", "akk"),
      t("?"),
    ],
    translation: "Látjátok azt a régi fát?",
    glossary: [
      { de: "sehen", hu: "látni" },
      { de: "ihr", hu: "ti" },
      { de: "jener", hu: "az (amaz)" },
      { de: "alt", hu: "öreg, régi" },
      { de: "Baum", hu: "fa" },
    ],
  },
  {
    id: 7,
    month: "may",
    tokens: [
      t("Er spricht immer mit "),
      det("7d1", "def", "pl", "dativ"),
      t(" "),
      adj("7a1", "fröhlich", "weak", "pl", "dativ"),
      t(" "),
      adj("7a2", "klein", "weak", "pl", "dativ"),
      t(" "),
      noun("7n1", "Kinder", "n", "pl", "dativ", DAT_PL),
      t("."),
    ],
    translation: "Mindig a vidám kis gyerekekkel beszél.",
    glossary: [
      { de: "er", hu: "ő (hímnem)" },
      { de: "sprechen", hu: "beszélni" },
      { de: "immer", hu: "mindig" },
      { de: "mit", hu: "-val/-vel (+ Dativ)" },
      { de: "den", hu: "a/az (részes, többes)" },
      { de: "fröhlich", hu: "vidám" },
      { de: "klein", hu: "kicsi" },
      { de: "Kind", hu: "gyerek (tsz. Kinder)" },
    ],
  },
  {
    id: 8,
    month: "may",
    tokens: [
      t("Morgen fährt "),
      det("8d1", "mein", "m", "nom"),
      t(" "),
      noun("8n1", "Vater", "", "m", "nom"),
      t(" zu "),
      det("8d2", "def", "f", "dativ"),
      t(" "),
      adj("8a1", "neu", "weak", "f", "dativ"),
      t(" "),
      noun("8n2", "Ärztin", "", "f", "dativ"),
      t("."),
    ],
    translation: "Holnap apám az új orvosnőhöz megy.",
    glossary: [
      { de: "morgen", hu: "holnap" },
      { de: "fahren", hu: "menni (járművel)" },
      { de: "mein", hu: "az én …-m" },
      { de: "Vater", hu: "apa" },
      { de: "zu", hu: "-hoz/-hez/-höz (+ Dativ)" },
      { de: "die", hu: "a/az (névelő)" },
      { de: "neu", hu: "új" },
      { de: "Ärztin", hu: "orvosnő" },
    ],
  },
  {
    id: 9,
    month: "may",
    tokens: [
      det("9d1", "dies", "f", "nom", true),
      t(" "),
      adj("9a1", "kariert", "weak", "f", "nom"),
      t(" "),
      noun("9n1", "Hose", "", "f", "nom"),
      t(" gefällt mir sehr."),
    ],
    translation: "Ez a kockás nadrág nagyon tetszik nekem.",
    glossary: [
      { de: "diese", hu: "ez (a)" },
      { de: "kariert", hu: "kockás" },
      { de: "Hose", hu: "nadrág" },
      { de: "gefallen", hu: "tetszeni (+ Dativ)" },
      { de: "mir", hu: "nekem" },
      { de: "sehr", hu: "nagyon" },
    ],
  },
  {
    id: 10,
    month: "may",
    tokens: [
      t("Siehst du da "),
      det("10d1", "jen", "m", "akk"),
      t(" "),
      adj("10a1", "alt", "weak", "m", "akk"),
      t(" "),
      noun("10n1", "Mann", "", "m", "akk"),
      t("?"),
    ],
    translation: "Látod ott azt az öreg férfit?",
    glossary: [
      { de: "sehen", hu: "látni" },
      { de: "du", hu: "te" },
      { de: "da", hu: "ott" },
      { de: "jener", hu: "az (amaz)" },
      { de: "alt", hu: "öreg, régi" },
      { de: "Mann", hu: "férfi" },
    ],
  },
  {
    id: 11,
    month: "may",
    tokens: [
      det("11d1", "def", "m", "nom", true),
      t(" "),
      adj("11a1", "grün", "weak", "m", "nom"),
      t(" "),
      noun("11n1", "Mantel", "", "m", "nom"),
      t(" gefällt nicht "),
      det("11d2", "mein", "f", "dativ"),
      t(" "),
      noun("11n2", "Mutter", "", "f", "dativ"),
      t("."),
    ],
    translation: "A zöld kabát nem tetszik anyámnak.",
    glossary: [
      { de: "der", hu: "a/az (névelő)" },
      { de: "grün", hu: "zöld" },
      { de: "Mantel", hu: "kabát" },
      { de: "gefallen", hu: "tetszeni (+ Dativ)" },
      { de: "nicht", hu: "nem" },
      { de: "mein", hu: "az én …-m" },
      { de: "Mutter", hu: "anya" },
    ],
  },
  {
    id: 12,
    month: "may",
    tokens: [
      det("12d1", "def", "n", "akk", true),
      t(" "),
      adj("12a1", "bunt", "weak", "n", "akk"),
      t(" "),
      noun("12n1", "Regal", "", "n", "akk"),
      t(" kaufen wir uns nicht."),
    ],
    translation: "A tarka polcot nem vesszük meg.",
    glossary: [
      { de: "das", hu: "a/az (névelő)" },
      { de: "bunt", hu: "tarka, színes" },
      { de: "Regal", hu: "polc" },
      { de: "kaufen", hu: "venni, vásárolni" },
      { de: "wir", hu: "mi" },
      { de: "uns", hu: "magunknak" },
      { de: "nicht", hu: "nem" },
    ],
  },
  {
    id: 13,
    month: "may",
    tokens: [
      t("Nicht "),
      det("13d1", "alle", "pl", "nom"),
      t(" "),
      adj("13a1", "jung", "weak", "pl", "nom"),
      t(" und "),
      adj("13a2", "gesund", "weak", "pl", "nom"),
      t(" "),
      noun("13n1", "Junge", "n", "pl", "nom", "gyenge főnév, többes száma: Jungen"),
      t(" arbeiten viel."),
    ],
    translation: "Nem minden fiatal és egészséges fiú dolgozik sokat.",
    glossary: [
      { de: "nicht", hu: "nem" },
      { de: "alle", hu: "minden, az összes" },
      { de: "jung", hu: "fiatal" },
      { de: "und", hu: "és" },
      { de: "gesund", hu: "egészséges" },
      { de: "Junge", hu: "fiú" },
      { de: "arbeiten", hu: "dolgozni" },
      { de: "viel", hu: "sok(at)" },
    ],
  },
  {
    id: 14,
    month: "may",
    tokens: [
      t("Ich gehe morgen in "),
      det("14d1", "def", "n", "akk"),
      t(" "),
      adj("14a1", "groß", "weak", "n", "akk"),
      t(" und "),
      adj("14a2", "schön", "weak", "n", "akk"),
      t(" "),
      noun("14n1", "Nationaltheater", "", "n", "akk"),
      t("."),
    ],
    translation: "Holnap a nagy és szép Nemzeti Színházba megyek.",
    glossary: [
      { de: "ich", hu: "én" },
      { de: "gehen", hu: "menni" },
      { de: "morgen", hu: "holnap" },
      { de: "in", hu: "-ba/-be (+ Akk)" },
      { de: "das", hu: "a/az (névelő)" },
      { de: "groß", hu: "nagy" },
      { de: "und", hu: "és" },
      { de: "schön", hu: "szép" },
      { de: "Nationaltheater", hu: "nemzeti színház" },
    ],
  },
  {
    id: 15,
    month: "may",
    tokens: [
      t("Bei "),
      det("15d1", "def", "pl", "dativ"),
      t(" "),
      adj("15a1", "nett", "weak", "pl", "dativ"),
      t(" und "),
      adj("15a2", "intelligent", "weak", "pl", "dativ"),
      t(" "),
      noun("15n1", "Leute", "n", "pl", "dativ", DAT_PL),
      t(" fühle ich mich gut."),
    ],
    translation: "A kedves és intelligens embereknél jól érzem magam.",
    glossary: [
      { de: "bei", hu: "-nál/-nél (+ Dativ)" },
      { de: "den", hu: "a/az (részes, többes)" },
      { de: "nett", hu: "kedves" },
      { de: "und", hu: "és" },
      { de: "intelligent", hu: "intelligens" },
      { de: "Leute", hu: "emberek (csak többes)" },
      { de: "sich fühlen", hu: "érezni magát" },
      { de: "gut", hu: "jól" },
    ],
  },
  {
    id: 16,
    month: "may",
    tokens: [
      t("Kaufst du dir "),
      det("16d1", "solch", "pl", "akk"),
      t(" "),
      adj("16a1", "grün", "weak", "pl", "akk"),
      t(" "),
      noun("16n1", "Tasche", "n", "pl", "akk", PLURAL),
      t("?"),
    ],
    translation: "Veszel magadnak ilyen zöld táskákat?",
    glossary: [
      { de: "kaufen", hu: "venni, vásárolni" },
      { de: "du", hu: "te" },
      { de: "dir", hu: "magadnak" },
      { de: "solche", hu: "ilyen (többes)" },
      { de: "grün", hu: "zöld" },
      { de: "Tasche", hu: "táska" },
    ],
  },
  {
    id: 17,
    month: "may",
    tokens: [
      det("17d1", "def", "n", "nom", true),
      t(" "),
      adj("17a1", "rot", "weak", "n", "nom"),
      t(" "),
      noun("17n1", "Fahrrad", "", "n", "nom"),
      t(" steht neben "),
      det("17d2", "jen", "n", "dativ"),
      t(" "),
      adj("17a2", "neu", "weak", "n", "dativ"),
      t(" "),
      noun("17n2", "Haus", "", "n", "dativ"),
      t("."),
    ],
    translation: "A piros bicikli amellett az új ház mellett áll.",
    glossary: [
      { de: "das", hu: "a/az (névelő)" },
      { de: "rot", hu: "piros, vörös" },
      { de: "Fahrrad", hu: "bicikli" },
      { de: "stehen", hu: "állni" },
      { de: "neben", hu: "mellett (+ Dativ)" },
      { de: "jenes", hu: "az (amaz)" },
      { de: "neu", hu: "új" },
      { de: "Haus", hu: "ház" },
    ],
  },
  {
    id: 18,
    month: "may",
    tokens: [
      t("Nicht "),
      det("18d1", "alle", "pl", "nom"),
      t(" "),
      adj("18a1", "dick", "weak", "pl", "nom"),
      t(" "),
      noun("18n1", "Leute", "", "pl", "nom"),
      t(" mögen "),
      det("18d2", "def", "f", "akk"),
      t(" "),
      noun("18n2", "Torte", "", "f", "akk"),
      t("."),
    ],
    translation: "Nem minden kövér ember szereti a tortát.",
    glossary: [
      { de: "nicht", hu: "nem" },
      { de: "alle", hu: "minden, az összes" },
      { de: "dick", hu: "kövér, vastag" },
      { de: "Leute", hu: "emberek (csak többes)" },
      { de: "mögen", hu: "szeretni, kedvelni" },
      { de: "die", hu: "a/az (névelő)" },
      { de: "Torte", hu: "torta" },
    ],
  },
  {
    id: 19,
    month: "may",
    tokens: [
      det("19d1", "jed", "f", "akk", true),
      t(" "),
      {
        type: "slot",
        slot: {
          id: "19a1",
          role: "adjective",
          before: "",
          answer: "teure",
          options: ["teure", "teuren", "teurer", "teures", "teurem"],
          gender: "f",
          case: "akk",
          declension: "weak",
          note: "teuer → ragozva kiesik az e: teure (nem teuere)",
        },
      },
      t(" "),
      noun("19n1", "Uhr", "", "f", "akk"),
      t(" verkaufen sie heute."),
    ],
    translation: "Minden drága órát eladnak ma.",
    glossary: [
      { de: "jede", hu: "minden (egyes)" },
      { de: "teuer", hu: "drága" },
      { de: "Uhr", hu: "óra" },
      { de: "verkaufen", hu: "eladni" },
      { de: "sie", hu: "ők" },
      { de: "heute", hu: "ma" },
    ],
  },
  {
    id: 20,
    month: "may",
    tokens: [
      t("Auf "),
      det("20d1", "dies", "m", "akk"),
      t(" "),
      adj("20a1", "alt", "weak", "m", "akk"),
      t(" "),
      noun("20n1", "Stuhl", "", "m", "akk"),
      t(" lege ich "),
      det("20d2", "mein", "n", "akk"),
      t(" "),
      noun("20n2", "Buch", "", "n", "akk"),
      t("."),
    ],
    translation: "Erre a régi székre teszem a könyvemet.",
    glossary: [
      { de: "auf", hu: "-ra/-re (+ Akk)" },
      { de: "dieser", hu: "ez (a)" },
      { de: "alt", hu: "öreg, régi" },
      { de: "Stuhl", hu: "szék" },
      { de: "legen", hu: "tenni, fektetni" },
      { de: "ich", hu: "én" },
      { de: "mein", hu: "az én …-m" },
      { de: "Buch", hu: "könyv" },
    ],
  },
  {
    id: 21,
    month: "may",
    tokens: [
      t("Wo sind "),
      det("21d1", "jen", "pl", "nom"),
      t(" "),
      adj("21a1", "blond", "weak", "pl", "nom"),
      t(" und "),
      adj("21a2", "laut", "weak", "pl", "nom"),
      t(" "),
      noun("21n1", "Kinder", "", "pl", "nom"),
      t("?"),
    ],
    translation: "Hol vannak azok a szőke és hangos gyerekek?",
    glossary: [
      { de: "wo", hu: "hol" },
      { de: "sein (sind)", hu: "lenni (vannak)" },
      { de: "jene", hu: "az (amazok)" },
      { de: "blond", hu: "szőke" },
      { de: "und", hu: "és" },
      { de: "laut", hu: "hangos" },
      { de: "Kind", hu: "gyerek (tsz. Kinder)" },
    ],
  },
  {
    id: 22,
    month: "may",
    tokens: [
      t("Bei "),
      det("22d1", "dies", "pl", "dativ"),
      t(" "),
      adj("22a1", "reich", "weak", "pl", "dativ"),
      t(" und "),
      adj("22a2", "schlau", "weak", "pl", "dativ"),
      t(" "),
      noun("22n1", "Händler", "n", "pl", "dativ", DAT_PL),
      t(" kaufen wir nicht."),
    ],
    translation: "Ezeknél a gazdag és ravasz kereskedőknél nem vásárolunk.",
    glossary: [
      { de: "bei", hu: "-nál/-nél (+ Dativ)" },
      { de: "diese", hu: "ez (ezek)" },
      { de: "reich", hu: "gazdag" },
      { de: "und", hu: "és" },
      { de: "schlau", hu: "ravasz, okos" },
      { de: "Händler", hu: "kereskedő" },
      { de: "kaufen", hu: "venni, vásárolni" },
      { de: "wir", hu: "mi" },
      { de: "nicht", hu: "nem" },
    ],
  },

  // ===== Generált példák az áprilisi/májusi szókincsből =====
  {
    id: 101,
    month: "may",
    tokens: [
      det("101d1", "def", "m", "nom", true),
      t(" "),
      adj("101a1", "streng", "weak", "m", "nom"),
      t(" "),
      noun("101n1", "Vater", "", "m", "nom"),
      t(" sieht "),
      det("101d2", "def", "m", "akk"),
      t(" "),
      adj("101a2", "faul", "weak", "m", "akk"),
      t(" "),
      noun("101n2", "Sohn", "", "m", "akk"),
      t("."),
    ],
    translation: "A szigorú apa látja a lusta fiút.",
    glossary: [
      { de: "der", hu: "a/az (névelő)" },
      { de: "streng", hu: "szigorú" },
      { de: "Vater", hu: "apa" },
      { de: "sehen", hu: "látni" },
      { de: "faul", hu: "lusta" },
      { de: "Sohn", hu: "fiú (utód)" },
    ],
  },
  {
    id: 102,
    month: "may",
    tokens: [
      det("102d1", "def", "n", "nom", true),
      t(" "),
      adj("102a1", "hübsch", "weak", "n", "nom"),
      t(" "),
      noun("102n1", "Mädchen", "", "n", "nom"),
      t(" trägt "),
      det("102d2", "ein", "n", "akk"),
      t(" "),
      adj("102a2", "hellblau", "mixed", "n", "akk"),
      t(" "),
      noun("102n2", "Kleid", "", "n", "akk"),
      t("."),
    ],
    translation: "A csinos lány világoskék ruhát visel.",
    glossary: [
      { de: "das", hu: "a/az (névelő)" },
      { de: "hübsch", hu: "csinos" },
      { de: "Mädchen", hu: "lány" },
      { de: "tragen", hu: "viselni, hordani" },
      { de: "ein", hu: "egy (névelő)" },
      { de: "hellblau", hu: "világoskék" },
      { de: "Kleid", hu: "ruha" },
    ],
  },
  {
    id: 103,
    month: "april",
    tokens: [
      t("Wir besuchen "),
      det("103d1", "def", "m", "akk"),
      t(" "),
      adj("103a1", "krank", "weak", "m", "akk"),
      t(" "),
      noun("103n1", "König", "", "m", "akk"),
      t("."),
    ],
    translation: "Meglátogatjuk a beteg királyt.",
    glossary: [
      { de: "wir", hu: "mi" },
      { de: "besuchen", hu: "meglátogatni" },
      { de: "der", hu: "a/az (névelő)" },
      { de: "krank", hu: "beteg" },
      { de: "König", hu: "király" },
    ],
  },
  {
    id: 104,
    month: "april",
    tokens: [
      det("104d1", "def", "f", "nom", true),
      t(" "),
      adj("104a1", "wichtig", "weak", "f", "nom"),
      t(" "),
      noun("104n1", "Nachricht", "", "f", "nom"),
      t(" beeindruckt "),
      det("104d2", "def", "m", "akk"),
      t(" "),
      adj("104a2", "schwach", "weak", "m", "akk"),
      t(" "),
      noun("104n2", "Politiker", "", "m", "akk"),
      t("."),
    ],
    translation: "A fontos hír lenyűgözi a gyenge politikust.",
    glossary: [
      { de: "die", hu: "a/az (névelő)" },
      { de: "wichtig", hu: "fontos" },
      { de: "Nachricht", hu: "hír" },
      { de: "beeindrucken", hu: "lenyűgözni" },
      { de: "der", hu: "a/az (névelő)" },
      { de: "schwach", hu: "gyenge" },
      { de: "Politiker", hu: "politikus" },
    ],
  },
  {
    id: 105,
    month: "may",
    tokens: [
      t("Ich helfe "),
      det("105d1", "def", "m", "dativ"),
      t(" "),
      adj("105a1", "fleißig", "weak", "m", "dativ"),
      t(" "),
      noun("105n1", "Student", "en", "m", "dativ", N_NOUN),
      t("."),
    ],
    translation: "Segítek a szorgalmas diáknak.",
    glossary: [
      { de: "ich", hu: "én" },
      { de: "helfen", hu: "segíteni (+ Dativ)" },
      { de: "dem", hu: "a/az (részes eset)" },
      { de: "fleißig", hu: "szorgalmas" },
      { de: "Student", hu: "diák" },
    ],
  },
  {
    id: 106,
    month: "april",
    tokens: [
      det("106d1", "def", "m", "nom", true),
      t(" "),
      adj("106a1", "zufrieden", "weak", "m", "nom"),
      t(" "),
      noun("106n1", "Sieger", "", "m", "nom"),
      t(" steht auf "),
      det("106d2", "def", "m", "dativ"),
      t(" "),
      adj("106a2", "breit", "weak", "m", "dativ"),
      t(" "),
      noun("106n2", "Boden", "", "m", "dativ"),
      t("."),
    ],
    translation: "Az elégedett győztes a széles talajon áll.",
    glossary: [
      { de: "der", hu: "a/az (névelő)" },
      { de: "zufrieden", hu: "elégedett" },
      { de: "Sieger", hu: "győztes" },
      { de: "stehen", hu: "állni" },
      { de: "auf", hu: "-on/-en/-ön (+ Dativ)" },
      { de: "breit", hu: "széles" },
      { de: "Boden", hu: "talaj, padló" },
    ],
  },
];

export function filterDeclensionSentences(months: Month[]): DeclSentence[] {
  if (months.length === 0) return [];
  return declensionSentences.filter((s) => months.includes(s.month));
}
