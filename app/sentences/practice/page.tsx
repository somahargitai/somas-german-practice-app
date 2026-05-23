"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PracticeSentenceExercisePage } from "@/components/sentences/PracticeSentenceExercisePage";
import { Month, MONTH_LABELS } from "@/lib/vocabulary";
import { filterPracticeSentences } from "@/lib/practice-sentences";

const VALID_MONTHS: Month[] = ["april", "may"];

function parseMonths(value: string | null): Month[] {
  if (!value) return [];
  return value
    .split(",")
    .map((s) => s.trim())
    .filter((s): s is Month => (VALID_MONTHS as string[]).includes(s));
}

function PracticeInner() {
  const params = useSearchParams();
  const months = useMemo(() => parseMonths(params.get("months")), [params]);

  const sentences = useMemo(
    () => filterPracticeSentences(months),
    [months]
  );

  const monthLabel =
    months.length === VALID_MONTHS.length
      ? "minden hónap"
      : months.map((m) => MONTH_LABELS[m]).join(", ");
  const title = `Gyakorló mondatok – ${monthLabel}`;

  return <PracticeSentenceExercisePage sentences={sentences} title={title} />;
}

export default function SentencesPracticePage() {
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
