"use client";

import { useRouter } from "next/navigation";

export default function ConjugationPage4() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white dark:bg-black grid grid-rows-[auto_1fr_auto]">
      <header className="border-b-2 border-black dark:border-white bg-white dark:bg-black px-4 py-4 md:px-8 md:py-6">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors text-2xl"
          aria-label="Vissza"
        >
          ←
        </button>
      </header>
      <main className="flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-9xl font-bold text-black dark:text-white">
            4
          </h2>
        </div>
      </main>
    </div>
  );
}
