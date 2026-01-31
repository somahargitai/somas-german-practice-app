"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { verbs } from "@/lib/verbs";
import { ConjugationHeader } from "@/components/conjugation/ConjugationHeader";
import { ConjugationFooter } from "@/components/conjugation/ConjugationFooter";
import { ConjugationContent } from "@/components/conjugation/ConjugationContent";
import { useConjugationState } from "@/hooks/useConjugationState";

type Language = "hu" | "de";

export default function ConjugationPage1() {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>("hu");
  const {
    isShowing,
    setIsShowing,
    currentVerbIndex,
    correctCount,
    handleShowOrNext,
    handleCorrect,
  } = useConjugationState({ verbs });

  const toggleLanguage = () => {
    setLanguage(language === "hu" ? "de" : "hu");
    setIsShowing(false);
  };

  const currentVerb = verbs[currentVerbIndex];

  return (
    <div className="min-h-screen bg-white dark:bg-black grid grid-rows-[auto_1fr_auto]">
      <ConjugationHeader
        correctCount={correctCount}
        totalCount={verbs.length}
        language={language}
        onLanguageToggle={toggleLanguage}
      />

      <main className="px-4 py-6 md:px-8 md:py-8 overflow-y-auto md:flex md:items-center md:justify-center">
        <div className="w-full md:w-[672px] md:h-[600px] flex flex-col justify-between">
          <ConjugationContent
            currentVerb={currentVerb}
            language={language}
            isShowing={isShowing}
          />

          {/* Desktop buttons - only visible on md and up */}
          <div className="hidden md:flex gap-3 w-full">
          {isShowing ? (
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
        onShowOrNext={handleShowOrNext}
        onCorrect={handleCorrect}
      />
    </div>
  );
}
