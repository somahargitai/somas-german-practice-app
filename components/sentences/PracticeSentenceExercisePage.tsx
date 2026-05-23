"use client";

import { useState } from "react";
import { PracticeSentence } from "@/lib/practice-sentences";
import { SequentialConjugationHeader } from "../conjugation/SequentialConjugationHeader";
import { ConjugationFooter } from "../conjugation/ConjugationFooter";
import { PracticeSentenceContent } from "./PracticeSentenceContent";
import { useSpacedExercise } from "@/hooks/useSpacedExercise";

type Language = "hu" | "de";

interface PracticeSentenceExercisePageProps {
  sentences: PracticeSentence[];
  title?: string;
}

export function PracticeSentenceExercisePage({
  sentences,
  title,
}: PracticeSentenceExercisePageProps) {
  const [language, setLanguage] = useState<Language>("hu");
  const {
    isShowing,
    setIsShowing,
    currentItem,
    isCompleted,
    learnedCount,
    total,
    poolSize,
    reserveCount,
    handleShowOrNext,
    handleCorrect,
    handleReshuffle,
  } = useSpacedExercise<PracticeSentence>({ items: sentences, mode: "expanding" });

  const toggleLanguage = () => {
    setLanguage(language === "hu" ? "de" : "hu");
    setIsShowing(false);
  };

  const progressLeftLabel = `Megtanult: ${learnedCount}/${total}`;
  const progressRightLabel = `Adag: ${poolSize} · Vár: ${reserveCount}`;

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
      <SequentialConjugationHeader
        currentIndex={learnedCount}
        furthestIndex={learnedCount}
        total={total}
        language={language}
        onLanguageToggle={toggleLanguage}
        title={title}
        progressLeftLabel={progressLeftLabel}
        progressRightLabel={progressRightLabel}
      />

      <main className="px-4 py-6 md:px-8 md:py-8 overflow-y-auto md:flex md:items-center md:justify-center">
        <div className="w-full md:w-[672px] md:h-[600px] flex flex-col justify-between">
          {isCompleted ? (
            <div className="flex flex-col items-center justify-center flex-1 text-center space-y-6">
              <div className="text-6xl">🎉</div>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                Gratulálok!
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Mind a {total} mondatot megtanultad!
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Készen állsz az újrakezdésre?
              </p>
            </div>
          ) : currentItem ? (
            <PracticeSentenceContent
              sentence={currentItem}
              language={language}
              isShowing={isShowing}
            />
          ) : null}

          {/* Desktop buttons */}
          <div className="hidden md:flex gap-3 w-full">
            {isCompleted ? (
              <button
                onClick={handleReshuffle}
                className="
                  w-full px-6 py-4
                  border-2 border-black dark:border-white
                  font-bold text-lg
                  text-black dark:text-white
                  bg-white dark:bg-black
                  hover:bg-gray-100 dark:hover:bg-gray-900
                  active:bg-gray-200 dark:active:bg-gray-800
                  transition-colors
                "
              >
                Újrakeverés és újraindítás
              </button>
            ) : isShowing ? (
              <>
                <button
                  onClick={handleShowOrNext}
                  className="
                    flex-1 px-6 py-4
                    border-2 border-black dark:border-white
                    font-bold text-lg
                    text-black dark:text-white
                    bg-white dark:bg-black
                    hover:bg-gray-100 dark:hover:bg-gray-900
                    active:bg-gray-200 dark:active:bg-gray-800
                    transition-colors
                  "
                >
                  Rossz
                </button>
                <button
                  onClick={handleCorrect}
                  className="
                    w-16 h-16 aspect-square
                    border-2 border-black dark:border-white
                    font-bold text-2xl
                    text-black dark:text-white
                    bg-green-100 dark:bg-green-900
                    hover:bg-green-200 dark:hover:bg-green-800
                    active:bg-green-300 dark:active:bg-green-700
                    transition-colors
                    flex items-center justify-center
                  "
                >
                  ✓
                </button>
              </>
            ) : (
              <button
                onClick={handleShowOrNext}
                className="
                  w-full px-6 py-4
                  border-2 border-black dark:border-white
                  font-bold text-lg
                  text-black dark:text-white
                  bg-white dark:bg-black
                  hover:bg-gray-100 dark:hover:bg-gray-900
                  active:bg-gray-200 dark:active:bg-gray-800
                  transition-colors
                "
              >
                Megjelenítés
              </button>
            )}
          </div>
        </div>
      </main>

      <ConjugationFooter
        isShowing={isShowing}
        isCompleted={isCompleted}
        onShowOrNext={handleShowOrNext}
        onCorrect={handleCorrect}
        onReshuffle={handleReshuffle}
      />
    </div>
  );
}
