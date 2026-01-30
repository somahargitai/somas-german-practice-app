"use client";

import { verbs } from "@/lib/verbs";

interface ProgressBarProps {
  currentIndex: number;
  furthestIndex: number;
}

export function ProgressBar({ currentIndex, furthestIndex }: ProgressBarProps) {
  const total = verbs.length;
  const currentPercent = (currentIndex / total) * 100;
  const furthestPercent = (furthestIndex / total) * 100;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        {/* Furthest reached background */}
        <div
          className="absolute h-full bg-gray-400 dark:bg-gray-600 transition-all"
          style={{ width: `${furthestPercent}%` }}
        />
        {/* Current position indicator */}
        <div
          className="absolute h-full w-1 bg-black dark:bg-white transition-all"
          style={{ left: `${currentPercent}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
        <span>Jelenlegi: {currentIndex + 1}/{total}</span>
        <span>Legjobb: {furthestIndex + 1}/{total}</span>
      </div>
    </div>
  );
}
