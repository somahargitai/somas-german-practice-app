"use client";

import { VerbConjugation } from "@/lib/verbs";

interface ConjugationContentProps {
  currentVerb: VerbConjugation;
  language: "hu" | "de";
  isShowing: boolean;
}

export function ConjugationContent({
  currentVerb,
  language,
  isShowing,
}: ConjugationContentProps) {
  if (language === "hu") {
    return (
      <>
        <div className="md:hidden text-center pb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Magyar
          </p>
          <p className="text-4xl font-bold text-black dark:text-white">
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
                <p className="text-3xl font-bold text-black dark:text-white">
                  {currentVerb.german_infinitive}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Múlt idő (1. személyű)
                </p>
                <p className="text-3xl font-bold text-black dark:text-white">
                  {currentVerb.german_present_first_person}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Befejezett melléknév
                </p>
                <p className="text-3xl font-bold text-black dark:text-white">
                  {currentVerb.german_past_participle}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden md:flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Magyar
              </p>
              <p className="text-5xl font-bold text-black dark:text-white">
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
                    <p className="text-4xl font-bold text-black dark:text-white">
                      {currentVerb.german_infinitive}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      Múlt idő (1. személyű)
                    </p>
                    <p className="text-4xl font-bold text-black dark:text-white">
                      {currentVerb.german_present_first_person}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      Befejezett melléknév
                    </p>
                    <p className="text-4xl font-bold text-black dark:text-white">
                      {currentVerb.german_past_participle}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  // Deutsch view
  return (
    <>
      <div className="md:hidden text-center pb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Szótári alak
        </p>
        <p className="text-4xl font-bold text-black dark:text-white">
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
              <p className="text-3xl font-bold text-black dark:text-white">
                {currentVerb.hungarian}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Múlt idő (1. személyű)
              </p>
              <p className="text-3xl font-bold text-black dark:text-white">
                {currentVerb.german_present_first_person}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Befejezett melléknév
              </p>
              <p className="text-3xl font-bold text-black dark:text-white">
                {currentVerb.german_past_participle}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Desktop: Horizontal layout */}
      <div className="hidden md:flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Szótári alak
            </p>
            <p className="text-5xl font-bold text-black dark:text-white">
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
                  <p className="text-4xl font-bold text-black dark:text-white">
                    {currentVerb.hungarian}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                    Múlt idő (1. személyű)
                  </p>
                  <p className="text-4xl font-bold text-black dark:text-white">
                    {currentVerb.german_present_first_person}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                    Befejezett melléknév
                  </p>
                  <p className="text-4xl font-bold text-black dark:text-white">
                    {currentVerb.german_past_participle}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
