"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { verbs, VerbConjugation } from "@/lib/verbs";
import { sentences } from "@/lib/sentences";

function searchVerbs(query: string): VerbConjugation[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();

  const scored = verbs
    .map((verb) => {
      const de = verb.german_infinitive.toLowerCase();
      const hu = verb.hungarian.toLowerCase();
      let score = 0;
      if (de.startsWith(q)) score = 4;
      else if (hu.startsWith(q)) score = 3;
      else if (de.includes(q)) score = 2;
      else if (hu.includes(q)) score = 1;
      return { verb, score };
    })
    .filter(({ score }) => score > 0);

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 5).map(({ verb }) => verb);
}

const tenseLabel: Record<string, string> = {
  present: "Jelen idő",
  past: "Präteritum",
  perfect: "Perfekt",
  infinitive: "Infinitiv",
};

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<VerbConjugation[]>([]);
  const [selected, setSelected] = useState<VerbConjugation | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (value: string) => {
    setQuery(value);
    setSelected(null);
    setSuggestions(searchVerbs(value));
  };

  const handleSelect = (verb: VerbConjugation) => {
    setSelected(verb);
    setSuggestions([]);
    setQuery(verb.german_infinitive);
  };

  const verbSentences = selected
    ? sentences.filter((s) => s.verbId === selected.id)
    : [];

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <header className="border-b-2 border-black dark:border-white bg-white dark:bg-black px-4 py-4 md:px-8 md:py-6 flex-shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors text-2xl"
            aria-label="Vissza"
          >
            ←
          </button>
          <h1 className="text-xl font-bold text-black dark:text-white">Ige keresés</h1>
        </div>
      </header>

      <main className="flex-1 px-4 py-6 md:px-8 w-full max-w-2xl mx-auto">
        {/* Search input */}
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleInput(e.target.value)}
            placeholder="Ige keresése (pl. gehen, menni…)"
            autoFocus
            className="
              w-full px-4 py-3
              border-2 border-black dark:border-white
              bg-white dark:bg-black
              text-black dark:text-white
              text-lg
              focus:outline-none
              placeholder-gray-400 dark:placeholder-gray-600
            "
          />

          {suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full z-10 border-2 border-t-0 border-black dark:border-white bg-white dark:bg-black">
              {suggestions.map((verb) => (
                <button
                  key={verb.id}
                  onClick={() => handleSelect(verb)}
                  className="
                    w-full text-left px-4 py-3
                    hover:bg-gray-100 dark:hover:bg-gray-900
                    border-b border-gray-200 dark:border-gray-800 last:border-b-0
                    text-black dark:text-white
                    transition-colors
                  "
                >
                  <span className="font-bold">{verb.german_infinitive}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">— {verb.hungarian}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Verb detail */}
        {selected && (
          <div className="mt-6 space-y-6">
            {/* Conjugation card */}
            <div className="border-2 border-black dark:border-white">
              <div className="border-b-2 border-black dark:border-white px-4 py-3">
                <div className="font-bold text-2xl text-black dark:text-white">
                  {selected.german_infinitive}
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-1">{selected.hungarian}</div>
              </div>
              <div>
                {[
                  { label: "Infinitiv", value: selected.german_infinitive },
                  { label: "Präteritum", value: selected.german_present_first_person },
                  { label: "Partizip II", value: selected.german_past_participle },
                  { label: "Hilfsverb", value: selected.auxiliary_verb },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
                  >
                    <span className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {label}
                    </span>
                    <span className="font-bold text-black dark:text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Example sentences */}
            {verbSentences.length > 0 && (
              <div>
                <h2 className="font-bold text-lg text-black dark:text-white mb-3">
                  Példamondatok
                </h2>
                <div className="space-y-3">
                  {verbSentences.map((sentence, i) => (
                    <div
                      key={i}
                      className="border-2 border-black dark:border-white px-4 py-3"
                    >
                      <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
                        {tenseLabel[sentence.tense] ?? sentence.tense}
                      </div>
                      <div className="font-bold text-black dark:text-white">{sentence.german}</div>
                      <div className="text-gray-600 dark:text-gray-400 mt-1">{sentence.hungarian}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Empty state */}
        {!selected && !query && (
          <div className="mt-16 text-center text-gray-400 dark:text-gray-600">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-base">Írj be egy igét magyarul vagy németül</p>
          </div>
        )}

        {/* No results */}
        {!selected && query && suggestions.length === 0 && (
          <div className="mt-16 text-center text-gray-400 dark:text-gray-600">
            <p className="text-base">Nincs találat: <span className="font-bold">{query}</span></p>
          </div>
        )}
      </main>
    </div>
  );
}
