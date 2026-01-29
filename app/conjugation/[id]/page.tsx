"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { verbs } from "@/lib/verbs";

type Language = "hu" | "de";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ConjugationDetailPage({ params }: PageProps) {
  const router = useRouter();
  const [isShowing, setIsShowing] = useState(false);
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);
  const [language, setLanguage] = useState<Language>("hu");

  const verbId = parseInt(params.id, 10);

  // Only show real content for verb id 1, placeholder for others
  if (verbId !== 1) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex flex-col">
        <header className="border-b-2 border-black dark:border-white bg-white dark:bg-black px-4 py-4 md:px-8 md:py-6">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors text-2xl"
            aria-label="Vissza"
          >
            ←
          </button>
        </header>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Placeholder
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Ez a szakasz még fejlesztés alatt áll.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const currentVerb = verbs[currentVerbIndex];

  const handleShowOrNext = () => {
    if (isShowing) {
      // Next mode: advance to next verb and hide
      if (currentVerbIndex < verbs.length - 1) {
        setCurrentVerbIndex(currentVerbIndex + 1);
        setIsShowing(false);
      }
    } else {
      // Show mode: toggle to show
      setIsShowing(true);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "hu" ? "de" : "hu");
    setIsShowing(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black grid grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <header className="border-b-2 border-black dark:border-white bg-white dark:bg-black px-4 py-4 md:px-8 md:py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors text-2xl"
            aria-label="Vissza"
          >
            ←
          </button>
          <button
            onClick={toggleLanguage}
            className="
              px-4 py-2
              border-2 border-black dark:border-white
              rounded
              font-medium
              text-black dark:text-white
              hover:bg-gray-100 dark:hover:bg-gray-900
              active:bg-gray-200 dark:active:bg-gray-800
              transition-colors
            "
          >
            {language === "hu" ? "🇩🇪 Német" : "🇭🇺 Magyar"}
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 py-6 md:px-8 md:py-8 overflow-y-auto md:flex md:flex-col md:h-full md:justify-between md:max-w-2xl md:mx-auto md:w-full">
        {/* Word display */}
        {language === "hu" ? (
          // Hungarian view
          <>
            {/* Mobile: Hungarian on top, German in middle, button on bottom */}
            <div className="md:hidden text-center pb-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Magyar
              </p>
              <p className="text-3xl font-bold text-black dark:text-white">
                {currentVerb.hungarian}
              </p>
            </div>

            <div className="md:hidden flex items-center justify-center flex-1">
                  {isShowing && (
                    <div className="text-center space-y-3">
                      <div className="space-y-2">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Szótári alak
                        </p>
                        <p className="text-2xl font-bold text-black dark:text-white">
                          {currentVerb.german_infinitive}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Múlt idő (1. személyű)
                        </p>
                        <p className="text-2xl font-bold text-black dark:text-white">
                          {currentVerb.german_present_first_person}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Befejezett melléknév
                        </p>
                        <p className="text-2xl font-bold text-black dark:text-white">
                          {currentVerb.german_past_participle}
                        </p>
                      </div>
                    </div>
                  )}
            </div>

            {/* Desktop: Horizontal layout */}
              <div className="hidden md:flex flex-col gap-8">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Magyar
                    </p>
                    <p className="text-4xl font-bold text-black dark:text-white">
                      {currentVerb.hungarian}
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    {isShowing && (
                      <div className="text-center space-y-4">
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                            Szótári alak
                          </p>
                          <p className="text-3xl font-bold text-black dark:text-white">
                            {currentVerb.german_infinitive}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                            Múlt idő (1. személyű)
                          </p>
                          <p className="text-3xl font-bold text-black dark:text-white">
                            {currentVerb.german_present_first_person}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                            Befejezett melléknév
                          </p>
                          <p className="text-3xl font-bold text-black dark:text-white">
                            {currentVerb.german_past_participle}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <button
                      onClick={handleShowOrNext}
                      disabled={isShowing && currentVerbIndex === verbs.length - 1}
                      className="
                        w-full px-6 py-6
                        border-2 border-black dark:border-white
                        font-bold text-lg
                        text-black dark:text-white
                        bg-white dark:bg-black
                        hover:bg-gray-100 dark:hover:bg-gray-900
                        active:bg-gray-200 dark:active:bg-gray-800
                        disabled:opacity-50 disabled:cursor-not-allowed
                        transition-colors
                      "
                    >
                      {isShowing ? "Következő" : "Megjelenítés"}
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // Deutsch view
            <>
              {/* Mobile: German infinitive on top, Hungarian in middle, button on bottom */}
              <div className="md:hidden text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Szótári alak
                </p>
                <p className="text-3xl font-bold text-black dark:text-white">
                  {currentVerb.german_infinitive}
                </p>
              </div>

              <div className="md:hidden flex items-center justify-center flex-1">
                  {isShowing && (
                    <div className="text-center space-y-3">
                      <div className="space-y-2">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Magyar
                        </p>
                        <p className="text-2xl font-bold text-black dark:text-white">
                          {currentVerb.hungarian}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Múlt idő (1. személyű)
                        </p>
                        <p className="text-2xl font-bold text-black dark:text-white">
                          {currentVerb.german_present_first_person}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Befejezett melléknév
                        </p>
                        <p className="text-2xl font-bold text-black dark:text-white">
                          {currentVerb.german_past_participle}
                        </p>
                      </div>
                    </div>
                  )}
              </div>

              {/* Desktop: Horizontal layout */}
              <div className="hidden md:flex flex-col gap-8">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Szótári alak
                    </p>
                    <p className="text-4xl font-bold text-black dark:text-white">
                      {currentVerb.german_infinitive}
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    {isShowing && (
                      <div className="text-center space-y-4">
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                            Magyar
                          </p>
                          <p className="text-3xl font-bold text-black dark:text-white">
                            {currentVerb.hungarian}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                            Múlt idő (1. személyű)
                          </p>
                          <p className="text-3xl font-bold text-black dark:text-white">
                            {currentVerb.german_present_first_person}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                            Befejezett melléknév
                          </p>
                          <p className="text-3xl font-bold text-black dark:text-white">
                            {currentVerb.german_past_participle}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <button
                      onClick={handleShowOrNext}
                      disabled={isShowing && currentVerbIndex === verbs.length - 1}
                      className="
                        w-full px-6 py-6
                        border-2 border-black dark:border-white
                        font-bold text-lg
                        text-black dark:text-white
                        bg-white dark:bg-black
                        hover:bg-gray-100 dark:hover:bg-gray-900
                        active:bg-gray-200 dark:active:bg-gray-800
                        disabled:opacity-50 disabled:cursor-not-allowed
                        transition-colors
                      "
                    >
                      {isShowing ? "Következő" : "Megjelenítés"}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
      </main>

      {/* Footer */}
      <footer className="md:hidden px-4 py-6 border-t-2 border-black dark:border-white">
        <button
          onClick={handleShowOrNext}
          disabled={isShowing && currentVerbIndex === verbs.length - 1}
          className="
            w-full px-6 py-4
            border-2 border-black dark:border-white
            font-bold text-lg
            text-black dark:text-white
            bg-white dark:bg-black
            hover:bg-gray-100 dark:hover:bg-gray-900
            active:bg-gray-200 dark:active:bg-gray-800
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors
          "
        >
          {isShowing ? "Következő" : "Megjelenítés"}
        </button>
      </footer>
    </div>
  );
}
