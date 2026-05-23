"use client";

import { PracticeSentence } from "@/lib/practice-sentences";

interface PracticeSentenceContentProps {
  sentence: PracticeSentence;
  language: "hu" | "de";
  isShowing: boolean;
}

export function PracticeSentenceContent({
  sentence,
  language,
  isShowing,
}: PracticeSentenceContentProps) {
  const promptLabel = language === "de" ? "Deutsch" : "Magyar";
  const answerLabel = language === "de" ? "Magyar fordítás" : "Német fordítás";
  const prompt = language === "de" ? sentence.german : sentence.hungarian;
  const answer = language === "de" ? sentence.hungarian : sentence.german;

  return (
    <>
      {/* Mobile layout */}
      <div className="md:hidden text-center pb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {promptLabel}
        </p>
        <p className="text-2xl font-bold text-black dark:text-white leading-snug">
          {prompt}
        </p>
      </div>

      <div className="md:hidden flex items-center justify-center flex-1">
        {isShowing && (
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {answerLabel}
            </p>
            <p className="text-xl font-bold text-black dark:text-white leading-snug">
              {answer}
            </p>
          </div>
        )}
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {promptLabel}
            </p>
            <p className="text-3xl font-bold text-black dark:text-white leading-snug">
              {prompt}
            </p>
          </div>

          <div className="flex items-center justify-center">
            {isShowing && (
              <div className="text-center space-y-2">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                  {answerLabel}
                </p>
                <p className="text-2xl font-bold text-black dark:text-white leading-snug">
                  {answer}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
