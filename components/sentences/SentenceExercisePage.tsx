"use client";

import { useState } from "react";
import { SentenceExample } from "@/lib/sentences";
import { SequentialConjugationHeader } from "../conjugation/SequentialConjugationHeader";
import { ConjugationFooter } from "../conjugation/ConjugationFooter";
import { SentenceContent } from "./SentenceContent";
import { useSentenceExerciseState } from "@/hooks/useSentenceExerciseState";

type Language = "hu" | "de";

interface SentenceExercisePageProps {
  sentences: SentenceExample[];
}

export function SentenceExercisePage({ sentences }: SentenceExercisePageProps) {
  const [language, setLanguage] = useState<Language>("hu");
  const {
    isShowing,
    setIsShowing,
    currentSentenceIndex,
    furthestIndex,
    isCompleted,
    shuffledIndices,
    handleShowOrNext,
    handleCorrect,
    handleReshuffle,
  } = useSentenceExerciseState({ sentences });

  const toggleLanguage = () => {
    setLanguage(language === "hu" ? "de" : "hu");
    setIsShowing(false);
  };

  // Ensure indices are within bounds
  const safeCurrentIndex = Math.min(currentSentenceIndex, shuffledIndices.length - 1);
  const safeSentenceIndex = shuffledIndices[safeCurrentIndex] ?? 0;
  const currentSentence = !isCompleted
    ? sentences[safeSentenceIndex]
    : null;

  return (
    <div className="min-h-screen bg-white dark:bg-black grid grid-rows-[auto_1fr_auto]">
      <SequentialConjugationHeader
        currentIndex={currentSentenceIndex}
        furthestIndex={furthestIndex}
        total={sentences.length}
        language={language}
        onLanguageToggle={toggleLanguage}
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
                Mind a {sentences.length} mondatot lefordítottad!
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Készen állsz az újrakezdésre?
              </p>
            </div>
          ) : (
            <SentenceContent
              currentSentence={currentSentence!}
              language={language}
              isShowing={isShowing}
            />
          )}

          {/* Desktop buttons - only visible on md and up */}
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
