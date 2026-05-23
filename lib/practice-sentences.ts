import { Month } from "./vocabulary";

export interface PracticeSentence {
  id: number;
  german: string;
  hungarian: string;
  month: Month;
}

// Gyakorló mondatok hónaponként. Új hónaphoz csak vegyél fel ide elemeket
// a megfelelő `month` mezővel – a szűrő automatikusan kezeli.
export const practiceSentences: PracticeSentence[] = [
  {
    id: 1,
    german: "Nun zur nächsten Nachricht.",
    hungarian: "Most pedig következzen a következő hír.",
    month: "may",
  },
  {
    id: 2,
    german: "Menschen freuen sich darüber, dass es heute nicht regnet.",
    hungarian: "Az emberek örülnek annak, hogy ma nem esik az eső.",
    month: "may",
  },
  {
    id: 3,
    german: "Menschen freuen sich darauf, am Wochenende zu reisen.",
    hungarian: "Az emberek várják, hogy hétvégén utazzanak.",
    month: "may",
  },
  {
    id: 4,
    german: "Der Weg ist nämlich weit.",
    hungarian: "Az út meglehetősen hosszú.",
    month: "may",
  },
  {
    id: 5,
    german: "Manche Experten sagen, dass wir mehr Geld sparen müssen.",
    hungarian: "Néhány szakértő azt mondja, hogy több pénzt kell megtakarítanunk.",
    month: "may",
  },
  {
    id: 6,
    german: "Das dauert ein paar Tage.",
    hungarian: "Ez eltarthat néhány napig.",
    month: "may",
  },
  {
    id: 7,
    german: "Es gab ein paar Versuche, den Wal zu retten.",
    hungarian: "Volt néhány kísérlet a bálna megmentésére.",
    month: "may",
  },
  {
    id: 8,
    german: "Ich brauche Hilfe, und zwar sofort.",
    hungarian: "Segítségre van szükségem, méghozzá azonnal.",
    month: "may",
  },
  {
    id: 9,
    german: "Das ist zwar teuer, aber sehr gut.",
    hungarian: "Ez ugyan drága, de nagyon jó.",
    month: "may",
  },
  {
    id: 10,
    german:
      "König Charles hat bisher viele Menschen mit seinem Besuch beeindruckt.",
    hungarian: "Károly király eddig sok embert lenyűgözött a látogatásával.",
    month: "may",
  },
];

export function filterPracticeSentences(months: Month[]): PracticeSentence[] {
  if (months.length === 0) return [];
  return practiceSentences.filter((s) => months.includes(s.month));
}
