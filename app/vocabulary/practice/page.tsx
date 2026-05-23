"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { VocabularyExercisePage } from "@/components/vocabulary/VocabularyExercisePage";
import {
  filterVocabulary,
  Month,
  WordType,
  MONTH_LABELS,
  TYPE_LABELS,
  VocabExerciseMode,
  VOCAB_MODES,
  MODE_LABELS,
} from "@/lib/vocabulary";

const VALID_MONTHS: Month[] = ["april", "may"];
const VALID_TYPES: WordType[] = ["noun", "adjective", "verb", "other"];

function parseList<T extends string>(
  value: string | null,
  valid: readonly T[]
): T[] {
  if (!value) return [];
  return value
    .split(",")
    .map((s) => s.trim())
    .filter((s): s is T => (valid as readonly string[]).includes(s));
}

function PracticeInner() {
  const params = useSearchParams();
  const months = useMemo(
    () => parseList<Month>(params.get("months"), VALID_MONTHS),
    [params]
  );
  const types = useMemo(
    () => parseList<WordType>(params.get("types"), VALID_TYPES),
    [params]
  );

  const words = useMemo(() => filterVocabulary(months, types), [months, types]);

  const mode = useMemo<VocabExerciseMode>(() => {
    const raw = params.get("mode");
    return (VOCAB_MODES as string[]).includes(raw ?? "")
      ? (raw as VocabExerciseMode)
      : "expanding";
  }, [params]);

  const monthLabel =
    months.length === VALID_MONTHS.length
      ? "minden hónap"
      : months.map((m) => MONTH_LABELS[m]).join(", ");
  const typeLabel =
    types.length === VALID_TYPES.length
      ? "minden szófaj"
      : types.map((t) => TYPE_LABELS[t]).join(", ");
  const title = `${monthLabel} · ${typeLabel} · ${MODE_LABELS[mode]}`;

  return <VocabularyExercisePage words={words} mode={mode} title={title} />;
}

export default function VocabularyPracticePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
          <p className="text-gray-600 dark:text-gray-400">Betöltés…</p>
        </div>
      }
    >
      <PracticeInner />
    </Suspense>
  );
}
