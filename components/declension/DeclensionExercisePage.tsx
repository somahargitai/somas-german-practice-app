"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ProgressBar } from "../conjugation/ProgressBar";
import {
  DeclSentence,
  DeclSlot,
  GENDER_LABELS,
  CASE_LABELS,
  DECLENSION_LABELS,
  ROLE_LABELS,
} from "@/lib/adjective-declension";

interface DeclensionExercisePageProps {
  sentences: DeclSentence[];
  title?: string;
}

function shuffle<T>(array: T[]): T[] {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const EMPTY_LABEL = "∅";

function slotChunk(slot: DeclSlot): string {
  return slot.before + slot.answer;
}

export function DeclensionExercisePage({
  sentences,
  title,
}: DeclensionExercisePageProps) {
  const router = useRouter();

  const [order, setOrder] = useState<number[]>(() =>
    sentences.map((_, i) => i)
  );
  const [pos, setPos] = useState(0);
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState(false);
  const [completed, setCompleted] = useState(false);

  // Keverés csak kliensoldalon (a hidratációs eltérés elkerülésére).
  useEffect(() => {
    setOrder(shuffle(sentences.map((_, i) => i)));
    setPos(0);
    setSelectedSlotId(null);
    setAnswers({});
    setRevealed(false);
    setCompleted(false);
  }, [sentences]);

  const current = !completed ? sentences[order[pos]] : null;

  const slots = useMemo(
    () =>
      current
        ? current.tokens.flatMap((tk) => (tk.type === "slot" ? [tk.slot] : []))
        : [],
    [current]
  );

  const selectedSlot = slots.find((s) => s.id === selectedSlotId) ?? null;

  const resetForNext = useCallback(() => {
    setSelectedSlotId(null);
    setAnswers({});
    setRevealed(false);
  }, []);

  const pickOption = useCallback(
    (value: string) => {
      if (!selectedSlotId || revealed) return;
      setAnswers((prev) => ({ ...prev, [selectedSlotId]: value }));
      // Ugorjunk a következő még üres helyre, ha van.
      const idx = slots.findIndex((s) => s.id === selectedSlotId);
      const nextEmpty =
        slots.slice(idx + 1).find((s) => answers[s.id] === undefined) ??
        slots.find((s) => s.id !== selectedSlotId && answers[s.id] === undefined);
      setSelectedSlotId(nextEmpty ? nextEmpty.id : null);
    },
    [selectedSlotId, revealed, slots, answers]
  );

  const handleNext = useCallback(() => {
    if (pos + 1 >= order.length) {
      setCompleted(true);
      return;
    }
    setPos((p) => p + 1);
    resetForNext();
  }, [pos, order.length, resetForNext]);

  const handleRestart = useCallback(() => {
    setOrder(shuffle(sentences.map((_, i) => i)));
    setPos(0);
    resetForNext();
    setCompleted(false);
  }, [sentences, resetForNext]);

  if (sentences.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-6 text-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Nincs találat
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            A kiválasztott hónaphoz nincsenek mondatok.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black grid grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <header className="border-b-2 border-black dark:border-white bg-white dark:bg-black px-4 py-4 md:px-8 md:py-6">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors text-2xl"
            aria-label="Vissza"
          >
            ←
          </button>
          {title && (
            <div className="font-bold text-sm text-black dark:text-white">
              {title}
            </div>
          )}
        </div>
        <ProgressBar
          currentIndex={completed ? order.length : pos}
          furthestIndex={completed ? order.length : pos}
          total={order.length}
          leftLabel={`Mondat: ${Math.min(pos + 1, order.length)}/${order.length}`}
          rightLabel={completed ? "Kész" : revealed ? "Megoldva" : "Kitöltés"}
        />
      </header>

      {/* Main */}
      <main className="px-4 py-6 md:px-8 md:py-8 overflow-y-auto">
        <div className="max-w-2xl mx-auto w-full">
          {completed ? (
            <div className="flex flex-col items-center justify-center text-center space-y-6 py-12">
              <div className="text-6xl">🎉</div>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                Gratulálok!
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Mind a {order.length} mondatot megoldottad!
              </p>
            </div>
          ) : current ? (
            <>
              {/* The sentence with fillable slots */}
              <div className="text-2xl md:text-3xl leading-relaxed text-center text-black dark:text-white">
                {current.tokens.map((tk, i) =>
                  tk.type === "text" ? (
                    <span key={i} style={{ whiteSpace: "pre-wrap" }}>
                      {tk.value}
                    </span>
                  ) : (
                    <SlotBox
                      key={i}
                      slot={tk.slot}
                      value={answers[tk.slot.id]}
                      selected={selectedSlotId === tk.slot.id}
                      revealed={revealed}
                      onSelect={() => !revealed && setSelectedSlotId(tk.slot.id)}
                    />
                  )
                )}
              </div>

              {!revealed && (
                <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-500">
                  Koppints egy aláhúzott helyre, majd válassz alul.
                </p>
              )}

              {revealed && (
                <div className="mt-8 space-y-8">
                  {/* Grammar annotations */}
                  <section className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Helyes ragozás
                    </h3>
                    <ul className="space-y-3">
                      {slots.map((s) => {
                        const correct = (answers[s.id] ?? undefined) === s.answer;
                        const userVal = answers[s.id];
                        return (
                          <li
                            key={s.id}
                            className="border-2 border-black dark:border-white p-3"
                          >
                            <div className="flex items-baseline gap-3 flex-wrap">
                              <span className="text-xl font-bold text-black dark:text-white">
                                {slotChunk(s) || EMPTY_LABEL}
                              </span>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {ROLE_LABELS[s.role]}
                              </span>
                            </div>
                            <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                              {CASE_LABELS[s.case]} · {GENDER_LABELS[s.gender]}
                              {s.declension
                                ? ` · ${DECLENSION_LABELS[s.declension]}`
                                : ""}
                            </div>
                            {s.note && (
                              <div className="mt-1 text-sm italic text-gray-500 dark:text-gray-500">
                                {s.note}
                              </div>
                            )}
                            {!correct && (
                              <div className="mt-1 text-sm font-medium text-red-600 dark:text-red-400">
                                A te válaszod:{" "}
                                {userVal === undefined
                                  ? "—"
                                  : userVal === ""
                                    ? EMPTY_LABEL
                                    : userVal}
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </section>

                  {/* Translation */}
                  <section>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
                      Fordítás
                    </h3>
                    <p className="text-lg text-black dark:text-white">
                      {current.translation}
                    </p>
                  </section>

                  {/* Glossary */}
                  <section>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
                      Szavak
                    </h3>
                    <dl className="divide-y divide-gray-200 dark:divide-gray-800 border-2 border-black dark:border-white">
                      {current.glossary.map((g, i) => (
                        <div key={i} className="flex gap-4 px-3 py-2">
                          <dt className="font-medium text-black dark:text-white w-1/2">
                            {g.de}
                          </dt>
                          <dd className="text-gray-600 dark:text-gray-400 w-1/2">
                            {g.hu}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                </div>
              )}
            </>
          ) : null}
        </div>
      </main>

      {/* Footer: chips + action */}
      <footer className="border-t-2 border-black dark:border-white px-4 py-4 md:px-8 md:py-5">
        <div className="max-w-2xl mx-auto w-full space-y-3">
          {completed ? (
            <button
              onClick={handleRestart}
              className="w-full px-6 py-4 border-2 border-black dark:border-white font-bold text-lg text-black dark:text-white bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              Újrakeverés és újraindítás
            </button>
          ) : revealed ? (
            <button
              onClick={handleNext}
              className="w-full px-6 py-4 border-2 border-black dark:border-white font-bold text-lg text-black dark:text-white bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              {pos + 1 >= order.length ? "Befejezés" : "Következő"}
            </button>
          ) : (
            <>
              {selectedSlot ? (
                <div className="flex flex-wrap gap-2 justify-center">
                  {selectedSlot.options.map((opt) => {
                    const chosen = answers[selectedSlot.id] === opt;
                    return (
                      <button
                        key={opt || "empty"}
                        onClick={() => pickOption(opt)}
                        className={`min-w-[3rem] px-4 py-2 border-2 border-black dark:border-white font-medium transition-colors ${
                          chosen
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "bg-white text-black dark:bg-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                        }`}
                      >
                        {opt === "" ? EMPTY_LABEL : opt}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className="text-center text-sm text-gray-500 dark:text-gray-500 py-2">
                  Válassz egy ragozandó helyet a mondatban.
                </p>
              )}
              <button
                onClick={() => {
                  setRevealed(true);
                  setSelectedSlotId(null);
                }}
                className="w-full px-6 py-4 border-2 border-black dark:border-white font-bold text-lg text-black dark:text-white bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
              >
                Kész
              </button>
            </>
          )}
        </div>
      </footer>
    </div>
  );
}

function SlotBox({
  slot,
  value,
  selected,
  revealed,
  onSelect,
}: {
  slot: DeclSlot;
  value: string | undefined;
  selected: boolean;
  revealed: boolean;
  onSelect: () => void;
}) {
  if (revealed) {
    const correct = value === slot.answer;
    const shown = slot.answer === "" ? EMPTY_LABEL : slot.answer;
    return (
      <span>
        {slot.before}
        <span
          className={`inline-block mx-0.5 px-1.5 rounded font-bold ${
            correct
              ? "bg-green-200 text-green-900 dark:bg-green-800 dark:text-green-100"
              : "bg-red-200 text-red-900 dark:bg-red-800 dark:text-red-100"
          }`}
        >
          {shown}
        </span>
      </span>
    );
  }

  const display =
    value === undefined ? "···" : value === "" ? EMPTY_LABEL : value;

  return (
    <span>
      {slot.before}
      <button
        onClick={onSelect}
        className={`inline-block mx-0.5 px-2 min-w-[2.5rem] border-2 rounded align-baseline transition-colors ${
          selected
            ? "border-black dark:border-white bg-yellow-200 dark:bg-yellow-700 text-black dark:text-white"
            : value === undefined
              ? "border-dashed border-gray-500 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900"
              : "border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
        }`}
      >
        {display}
      </button>
    </span>
  );
}
