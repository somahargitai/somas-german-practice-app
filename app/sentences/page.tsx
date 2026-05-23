"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Month, MONTH_LABELS } from "@/lib/vocabulary";
import { filterPracticeSentences } from "@/lib/practice-sentences";

const ALL_MONTHS: Month[] = ["may", "april"];

export default function SentencesStartPage() {
  const router = useRouter();
  const [selectedMonths, setSelectedMonths] = useState<Set<Month>>(
    new Set(ALL_MONTHS)
  );

  const matched = useMemo(
    () => filterPracticeSentences(Array.from(selectedMonths)),
    [selectedMonths]
  );

  const toggleMonth = (m: Month) => {
    setSelectedMonths((prev) => {
      const next = new Set(prev);
      if (next.has(m)) next.delete(m);
      else next.add(m);
      return next;
    });
  };

  const canStart = matched.length > 0;

  const handleStart = () => {
    const months = Array.from(selectedMonths).join(",");
    router.push(`/sentences/practice?months=${months}`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <header className="border-b-2 border-black dark:border-white bg-white dark:bg-black px-4 py-4 md:px-8 md:py-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors text-2xl"
            aria-label="Vissza"
          >
            ←
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-black dark:text-white">
            Gyakorló mondatok
          </h1>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Months */}
          <section>
            <h2 className="text-lg font-bold mb-4 text-black dark:text-white">
              Melyik hónap mondatai?
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {ALL_MONTHS.map((m) => {
                const checked = selectedMonths.has(m);
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => toggleMonth(m)}
                    className={`
                      flex items-center gap-3 px-4 py-3
                      border-2 border-black dark:border-white
                      text-left
                      transition-colors
                      ${
                        checked
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "bg-white text-black dark:bg-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                      }
                    `}
                  >
                    <span
                      className={`
                        inline-block w-5 h-5 border-2
                        ${checked ? "border-white dark:border-black bg-white dark:bg-black" : "border-black dark:border-white"}
                        flex items-center justify-center text-xs font-bold
                        ${checked ? "text-black dark:text-white" : ""}
                      `}
                      aria-hidden
                    >
                      {checked ? "✓" : ""}
                    </span>
                    <span className="font-medium">{MONTH_LABELS[m]}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Summary + Start */}
          <section className="pt-2 space-y-4">
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              {canStart
                ? `${matched.length} mondat a kiválasztott hónap(ok)ból`
                : "Válassz legalább egy hónapot, amelyhez van mondat"}
            </div>
            <button
              onClick={handleStart}
              disabled={!canStart}
              className="
                w-full px-6 py-4
                border-2 border-black dark:border-white
                font-bold text-lg
                text-black dark:text-white
                bg-white dark:bg-black
                hover:bg-gray-100 dark:hover:bg-gray-900
                active:bg-gray-200 dark:active:bg-gray-800
                disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white dark:disabled:hover:bg-black
                transition-colors
              "
            >
              Indítás
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
