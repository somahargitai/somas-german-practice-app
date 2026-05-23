"use client";

import { VocabularyWord, TYPE_LABELS } from "@/lib/vocabulary";

interface VocabularyContentProps {
  word: VocabularyWord;
  language: "hu" | "de";
  isShowing: boolean;
}

function GermanWord({ word }: { word: VocabularyWord }) {
  if (word.type === "noun") {
    return (
      <span>
        <span className="text-gray-500 dark:text-gray-400">
          {word.article}{" "}
        </span>
        {word.german}
      </span>
    );
  }
  return <span>{word.german}</span>;
}

function ExtraInfo({ word }: { word: VocabularyWord }) {
  return (
    <div className="space-y-2 text-base md:text-lg text-gray-700 dark:text-gray-300">
      {word.type === "noun" && word.plural && (
        <p>
          <span className="text-gray-500 dark:text-gray-500">Tsz.: </span>
          die {word.plural}
        </p>
      )}
      {word.type === "verb" && word.verbForms && (
        <div className="space-y-1">
          {word.verbForms.present_3rd && (
            <p>
              <span className="text-gray-500 dark:text-gray-500">er/sie/es: </span>
              {word.verbForms.present_3rd}
            </p>
          )}
          {word.verbForms.preterite && (
            <p>
              <span className="text-gray-500 dark:text-gray-500">Präteritum: </span>
              {word.verbForms.preterite}
            </p>
          )}
          {word.verbForms.perfect && (
            <p>
              <span className="text-gray-500 dark:text-gray-500">Perfekt: </span>
              {word.verbForms.perfect}
            </p>
          )}
        </div>
      )}
      {word.note && (
        <p className="text-sm italic text-gray-500 dark:text-gray-500 pt-2">
          {word.note}
        </p>
      )}
    </div>
  );
}

export function VocabularyContent({
  word,
  language,
  isShowing,
}: VocabularyContentProps) {
  const typeLabel = TYPE_LABELS[word.type];

  if (language === "de") {
    // German prompt, reveal Hungarian + extras
    return (
      <>
        {/* Mobile */}
        <div className="md:hidden text-center pb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Deutsch
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
            {typeLabel}
          </p>
          <p className="text-3xl font-bold text-black dark:text-white">
            <GermanWord word={word} />
          </p>
        </div>

        <div className="md:hidden flex items-center justify-center flex-1">
          {isShowing && (
            <div className="text-center space-y-4">
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                  Magyar
                </p>
                <p className="text-2xl font-bold text-black dark:text-white">
                  {word.hungarian}
                </p>
              </div>
              <ExtraInfo word={word} />
            </div>
          )}
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Deutsch
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                {typeLabel}
              </p>
              <p className="text-4xl font-bold text-black dark:text-white">
                <GermanWord word={word} />
              </p>
            </div>

            <div className="flex items-center justify-center">
              {isShowing && (
                <div className="text-center space-y-4">
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      Magyar
                    </p>
                    <p className="text-3xl font-bold text-black dark:text-white">
                      {word.hungarian}
                    </p>
                  </div>
                  <ExtraInfo word={word} />
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  // Hungarian prompt, reveal German + extras
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden text-center pb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Magyar</p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
          {typeLabel}
        </p>
        <p className="text-3xl font-bold text-black dark:text-white">
          {word.hungarian}
        </p>
      </div>

      <div className="md:hidden flex items-center justify-center flex-1">
        {isShowing && (
          <div className="text-center space-y-4">
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                Deutsch
              </p>
              <p className="text-2xl font-bold text-black dark:text-white">
                <GermanWord word={word} />
              </p>
            </div>
            <ExtraInfo word={word} />
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Magyar
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
              {typeLabel}
            </p>
            <p className="text-4xl font-bold text-black dark:text-white">
              {word.hungarian}
            </p>
          </div>

          <div className="flex items-center justify-center">
            {isShowing && (
              <div className="text-center space-y-4">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                    Deutsch
                  </p>
                  <p className="text-3xl font-bold text-black dark:text-white">
                    <GermanWord word={word} />
                  </p>
                </div>
                <ExtraInfo word={word} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
