"use client";

import { SentenceExample } from "@/lib/sentences";

interface SentenceContentProps {
  currentSentence: SentenceExample;
  language: "hu" | "de";
  isShowing: boolean;
}

export function SentenceContent({
  currentSentence,
  language,
  isShowing,
}: SentenceContentProps) {
  const getTenseLabel = (tense: string) => {
    switch (tense) {
      case "infinitive":
        return "Főnévi igenév";
      case "present":
        return "Jelen idő";
      case "past":
        return "Múlt idő (Präteritum)";
      case "perfect":
        return "Befejezett múlt (Perfekt)";
      default:
        return "";
    }
  };

  if (language === "hu") {
    // Show Hungarian sentence, reveal German translation
    return (
      <>
        {/* Mobile layout */}
        <div className="md:hidden text-center pb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Magyar
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
            {getTenseLabel(currentSentence.tense)}
          </p>
          <p className="text-3xl font-bold text-black dark:text-white">
            {currentSentence.hungarian}
          </p>
        </div>

        <div className="md:hidden flex items-center justify-center flex-1">
          {isShowing && (
            <div className="text-center space-y-3">
              <div className="space-y-2">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Német fordítás
                </p>
                <p className="text-2xl font-bold text-black dark:text-white">
                  {currentSentence.german}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Magyar
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                {getTenseLabel(currentSentence.tense)}
              </p>
              <p className="text-4xl font-bold text-black dark:text-white">
                {currentSentence.hungarian}
              </p>
            </div>

            <div className="flex items-center justify-center">
              {isShowing && (
                <div className="text-center space-y-4">
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      Német fordítás
                    </p>
                    <p className="text-3xl font-bold text-black dark:text-white">
                      {currentSentence.german}
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

  // Deutsch view - Show German sentence, reveal Hungarian translation
  return (
    <>
      {/* Mobile layout */}
      <div className="md:hidden text-center pb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Deutsch
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
          {getTenseLabel(currentSentence.tense)}
        </p>
        <p className="text-3xl font-bold text-black dark:text-white">
          {currentSentence.german}
        </p>
      </div>

      <div className="md:hidden flex items-center justify-center flex-1">
        {isShowing && (
          <div className="text-center space-y-3">
            <div className="space-y-2">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Magyar fordítás
              </p>
              <p className="text-2xl font-bold text-black dark:text-white">
                {currentSentence.hungarian}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Deutsch
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
              {getTenseLabel(currentSentence.tense)}
            </p>
            <p className="text-4xl font-bold text-black dark:text-white">
              {currentSentence.german}
            </p>
          </div>

          <div className="flex items-center justify-center">
            {isShowing && (
              <div className="text-center space-y-4">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                    Magyar fordítás
                  </p>
                  <p className="text-3xl font-bold text-black dark:text-white">
                    {currentSentence.hungarian}
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
