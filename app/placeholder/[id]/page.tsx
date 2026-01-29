"use client";

import { useRouter } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default function PlaceholderPage({ params }: PageProps) {
  const router = useRouter();

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
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Hamarosan!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Ez a szakasz még fejlesztés alatt áll. Kérjük, térjen vissza később.
          </p>
        </div>
      </div>
    </div>
  );
}
