"use client";

import { useRouter } from "next/navigation";
import { ProgressBar } from "./ProgressBar";

interface SequentialConjugationHeaderProps {
  currentIndex: number;
  furthestIndex: number;
  language: "hu" | "de";
  onLanguageToggle: () => void;
}

export function SequentialConjugationHeader({
  currentIndex,
  furthestIndex,
  language,
  onLanguageToggle,
}: SequentialConjugationHeaderProps) {
  const router = useRouter();

  return (
    <header className="border-b-2 border-black dark:border-white bg-white dark:bg-black px-4 py-4 md:px-8 md:py-6">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors text-2xl"
          aria-label="Vissza"
        >
          ←
        </button>
        <button
          onClick={onLanguageToggle}
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
      <ProgressBar currentIndex={currentIndex} furthestIndex={furthestIndex} />
    </header>
  );
}
