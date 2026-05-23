"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { DeclensionExercisePage } from "@/components/declension/DeclensionExercisePage";
import { Month, MONTH_LABELS } from "@/lib/vocabulary";
import { filterDeclensionSentences } from "@/lib/adjective-declension";

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
    () => filterDeclensionSentences(months),
    [months]
  );

  const monthLabel =
    months.length === VALID_MONTHS.length
      ? "minden hónap"
      : months.map((m) => MONTH_LABELS[m]).join(", ");
  const title = `Melléknév ragozás – ${monthLabel}`;

  return <DeclensionExercisePage sentences={sentences} title={title} />;
}

export default function DeclensionPracticePage() {
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
