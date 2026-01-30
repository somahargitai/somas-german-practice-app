"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ConjugationPage() {
  const router = useRouter();

  const options = [
    { id: 1, title: "Múlt idejű alakok / 1" },
    { id: 2, title: "Múlt idejű alakok / 1 - magolás" },
    { id: 3, title: "Opció 3 (placeholder)" },
    { id: 4, title: "Opció 4 (placeholder)" },
    { id: 5, title: "Opció 5 (placeholder)" },
    { id: 6, title: "Opció 6 (placeholder)" },
    { id: 7, title: "Opció 7 (placeholder)" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      {/* Header - Fixed on mobile */}
      <header className="border-b-2 border-black dark:border-white bg-white dark:bg-black px-4 py-4 md:px-8 md:py-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors text-2xl"
            aria-label="Vissza"
          >
            ←
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-black dark:text-white">
            Igeragozás
          </h1>
        </div>
      </header>

      {/* Scrollable List */}
      <div className="flex-1 overflow-y-auto md:flex md:justify-center md:px-8">
        <div className="w-full md:w-96">
          <nav className="divide-y-2 divide-black dark:divide-white">
            {options.map((option) => (
              <Link key={option.id} href={`/conjugation/${option.id}`}>
                <button
                  className="
                  w-full text-left px-4 md:px-6 py-4 md:py-6
                  border-b-2 border-black dark:border-white last:border-b-0
                  hover:bg-gray-100 dark:hover:bg-gray-900
                  active:bg-gray-200 dark:active:bg-gray-800
                  transition-colors
                  text-black dark:text-white font-medium
                  text-base md:text-xl
                  flex items-center justify-between
                "
                >
                  <span>{option.title}</span>
                  <span className="text-gray-400 dark:text-gray-600">→</span>
                </button>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
