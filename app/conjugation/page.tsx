"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ClipboardCheck, RefreshCw, MessageSquare } from "lucide-react";

export default function ConjugationPage() {
  const router = useRouter();

  const verbGroups = [
    { number: 1, count: 12 },
    { number: 2, count: 12 },
    { number: 3, count: 13 },
    { number: 4, count: 13 },
    { number: 5, count: 13 },
    { number: 6, count: 13 },
    { number: 7, count: 13 },
    { number: 8, count: 13 },
    { number: 9, count: 13 },
    { number: 10, count: 13 },
  ];

  const allOptions = [
    { href: "/search", title: "Ige keresés", subtitle: "Szótár – minden ige" },
    { href: "/conjugation/all", title: "Teljes lista - Gyakorlás", subtitle: "121 ige" },
    { href: "/conjugation/sentences-all", title: "Teljes lista - Mondatok", subtitle: "Fordítási gyakorlás" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      {/* Header */}
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

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* All options section */}
          <div className="space-y-3">
            {allOptions.map((option) => (
              <Link key={option.href} href={option.href}>
                <div className="
                  rounded-lg
                  p-5 md:p-6
                  hover:bg-gray-100 dark:hover:bg-gray-900
                  active:bg-gray-200 dark:active:bg-gray-800
                  transition-all duration-200
                  flex items-center justify-between
                ">
                  <div>
                    <div className="font-bold text-lg text-black dark:text-white">
                      {option.title}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {option.subtitle}
                    </div>
                  </div>
                  <span className="text-gray-400 dark:text-gray-600 text-xl">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Verb groups grid */}
          <div className="space-y-3 pt-4">
            {verbGroups.map((group) => (
              <div key={group.number} className="flex items-center gap-3">
                {/* Row index */}
                <div className="flex-shrink-0 w-8 md:w-10 text-center">
                  <span className="text-xl md:text-2xl font-bold text-black dark:text-white">
                    {group.number}
                  </span>
                </div>

                {/* Icon grid */}
                <div className="flex-1 grid grid-cols-3 gap-3">
                  {/* Test */}
                  <Link href={`/conjugation/${group.number}a`}>
                    <div className="
                      p-4 md:p-6
                      hover:bg-gray-100 dark:hover:bg-gray-900
                      active:bg-gray-200 dark:active:bg-gray-800
                      transition-colors
                      flex flex-col items-center justify-center gap-2
                    ">
                      <ClipboardCheck className="w-12 h-12 md:w-14 md:h-14 text-black dark:text-white" strokeWidth={1.5} />
                      <span className="text-xs md:text-sm font-bold text-black dark:text-white text-center">
                        Teszt
                      </span>
                    </div>
                  </Link>

                  {/* Practice */}
                  <Link href={`/conjugation/${group.number}b`}>
                    <div className="
                      p-4 md:p-6
                      hover:bg-gray-100 dark:hover:bg-gray-900
                      active:bg-gray-200 dark:active:bg-gray-800
                      transition-colors
                      flex flex-col items-center justify-center gap-2
                    ">
                      <RefreshCw className="w-12 h-12 md:w-14 md:h-14 text-black dark:text-white" strokeWidth={1.5} />
                      <span className="text-xs md:text-sm font-bold text-black dark:text-white text-center">
                        Gyakorlás
                      </span>
                    </div>
                  </Link>

                  {/* Sentences */}
                  <Link href={`/conjugation/sentences-${group.number}`}>
                    <div className="
                      p-4 md:p-6
                      hover:bg-gray-100 dark:hover:bg-gray-900
                      active:bg-gray-200 dark:active:bg-gray-800
                      transition-colors
                      flex flex-col items-center justify-center gap-2
                    ">
                      <MessageSquare className="w-12 h-12 md:w-14 md:h-14 text-black dark:text-white" strokeWidth={1.5} />
                      <span className="text-xs md:text-sm font-bold text-black dark:text-white text-center">
                        Mondatok
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
