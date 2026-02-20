"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ConjugationPage() {
  const router = useRouter();

  const options = [
    { id: "all", title: "Igealakok - Teljes lista - gyakorlás (121 szó)" },
    { id: "sentences-all", title: "Mondatok - Teljes lista - fordítás (példamondatok)" },
    { id: "1a", title: "Igealakok - Csoport 1 - teszt (12 szó)" },
    { id: "1b", title: "Igealakok - Csoport 1 - gyakorlás (12 szó)" },
    { id: "sentences-1", title: "Mondatok - Csoport 1 - fordítás" },
    { id: "2a", title: "Igealakok - Csoport 2 - teszt (12 szó)" },
    { id: "2b", title: "Igealakok - Csoport 2 - gyakorlás (12 szó)" },
    { id: "sentences-2", title: "Mondatok - Csoport 2 - fordítás" },
    { id: "3a", title: "Igealakok - Csoport 3 - teszt (13 szó)" },
    { id: "3b", title: "Igealakok - Csoport 3 - gyakorlás (13 szó)" },
    { id: "sentences-3", title: "Mondatok - Csoport 3 - fordítás" },
    { id: "4a", title: "Igealakok - Csoport 4 - teszt (13 szó)" },
    { id: "4b", title: "Igealakok - Csoport 4 - gyakorlás (13 szó)" },
    { id: "sentences-4", title: "Mondatok - Csoport 4 - fordítás" },
    { id: "5a", title: "Igealakok - Csoport 5 - teszt (13 szó)" },
    { id: "5b", title: "Igealakok - Csoport 5 - gyakorlás (13 szó)" },
    { id: "sentences-5", title: "Mondatok - Csoport 5 - fordítás" },
    { id: "6a", title: "Igealakok - Csoport 6 - teszt (13 szó)" },
    { id: "6b", title: "Igealakok - Csoport 6 - gyakorlás (13 szó)" },
    { id: "sentences-6", title: "Mondatok - Csoport 6 - fordítás" },
    { id: "7a", title: "Igealakok - Csoport 7 - teszt (13 szó)" },
    { id: "7b", title: "Igealakok - Csoport 7 - gyakorlás (13 szó)" },
    { id: "sentences-7", title: "Mondatok - Csoport 7 - fordítás" },
    { id: "8a", title: "Igealakok - Csoport 8 - teszt (13 szó)" },
    { id: "8b", title: "Igealakok - Csoport 8 - gyakorlás (13 szó)" },
    { id: "sentences-8", title: "Mondatok - Csoport 8 - fordítás" },
    { id: "9a", title: "Igealakok - Csoport 9 - teszt (13 szó)" },
    { id: "9b", title: "Igealakok - Csoport 9 - gyakorlás (13 szó)" },
    { id: "sentences-9", title: "Mondatok - Csoport 9 - fordítás" },
    { id: "10a", title: "Igealakok - Csoport 10 - teszt (13 szó)" },
    { id: "10b", title: "Igealakok - Csoport 10 - gyakorlás (13 szó)" },
    { id: "sentences-10", title: "Mondatok - Csoport 10 - fordítás" },
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
