import { VocabularyWord, VocabExerciseMode } from "@/lib/vocabulary";
import { useSpacedExercise } from "./useSpacedExercise";

interface UseVocabularyExerciseStateProps {
  words: VocabularyWord[];
  mode: VocabExerciseMode;
}

export function useVocabularyExerciseState({
  words,
  mode,
}: UseVocabularyExerciseStateProps) {
  const { currentItem, ...rest } = useSpacedExercise<VocabularyWord>({
    items: words,
    mode,
  });
  return { ...rest, currentWord: currentItem };
}
