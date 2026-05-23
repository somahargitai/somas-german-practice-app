export type WordType = "noun" | "adjective" | "verb" | "other";
export type Month = "april" | "may";

export interface VerbForms {
  present_3rd?: string;
  preterite?: string;
  perfect?: string;
}

export interface VocabularyWord {
  id: number;
  german: string;
  hungarian: string;
  type: WordType;
  month: Month;
  article?: "der" | "die" | "das";
  plural?: string;
  verbForms?: VerbForms;
  note?: string;
}

export const MONTH_LABELS: Record<Month, string> = {
  april: "Április",
  may: "Május",
};

export const TYPE_LABELS: Record<WordType, string> = {
  noun: "Főnév",
  adjective: "Melléknév",
  verb: "Ige",
  other: "Egyéb",
};

import { vocabularyMay } from "./vocabulary-may";
import { vocabularyApril } from "./vocabulary-april";

export const vocabulary: VocabularyWord[] = [...vocabularyMay, ...vocabularyApril];

export function filterVocabulary(
  months: Month[],
  types: WordType[]
): VocabularyWord[] {
  if (months.length === 0 || types.length === 0) return [];
  return vocabulary.filter(
    (w) => months.includes(w.month) && types.includes(w.type)
  );
}
