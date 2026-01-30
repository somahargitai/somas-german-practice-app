"use client";

interface ConjugationFooterProps {
  isShowing: boolean;
  isCompleted?: boolean;
  onShowOrNext: () => void;
  onCorrect: () => void;
  onReshuffle?: () => void;
}

export function ConjugationFooter({
  isShowing,
  isCompleted = false,
  onShowOrNext,
  onCorrect,
  onReshuffle,
}: ConjugationFooterProps) {
  return (
    <footer className="md:hidden px-4 py-6 border-t-2 border-black dark:border-white">
      {isCompleted ? (
        <button
          onClick={onReshuffle}
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
        <div className="flex gap-3">
          <button
            onClick={onShowOrNext}
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
            onClick={onCorrect}
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
        </div>
      ) : (
        <button
          onClick={onShowOrNext}
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
    </footer>
  );
}
