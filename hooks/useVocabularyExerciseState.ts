import { useState, useCallback, useEffect } from "react";
import { VocabularyWord } from "@/lib/vocabulary";

interface UseVocabularyExerciseStateProps {
  words: VocabularyWord[];
}

function shuffleArray(array: number[]): number[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function useVocabularyExerciseState({
  words,
}: UseVocabularyExerciseStateProps) {
  const [isShowing, setIsShowing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [furthestIndex, setFurthestIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [shuffledIndices, setShuffledIndices] = useState<number[]>(() =>
    Array.from({ length: words.length }, (_, i) => i)
  );

  useEffect(() => {
    const indices = Array.from({ length: words.length }, (_, i) => i);
    setShuffledIndices(shuffleArray(indices));
    setCurrentIndex(0);
    setFurthestIndex(0);
    setIsShowing(false);
    setIsCompleted(false);
  }, [words.length]);

  const handleShowOrNext = useCallback(() => {
    if (isShowing) {
      setCurrentIndex(0);
      setIsShowing(false);
      setIsCompleted(false);
    } else {
      setIsShowing(true);
    }
  }, [isShowing]);

  const handleCorrect = useCallback(() => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= words.length) {
      setIsCompleted(true);
      setCurrentIndex(nextIndex);
      setFurthestIndex(words.length);
      return;
    }
    setCurrentIndex(nextIndex);
    setIsShowing(false);
    if (nextIndex > furthestIndex) {
      setFurthestIndex(nextIndex);
    }
  }, [currentIndex, furthestIndex, words.length]);

  const handleReshuffle = useCallback(() => {
    const indices = Array.from({ length: words.length }, (_, i) => i);
    setShuffledIndices(shuffleArray(indices));
    setCurrentIndex(0);
    setFurthestIndex(0);
    setIsShowing(false);
    setIsCompleted(false);
  }, [words.length]);

  return {
    isShowing,
    setIsShowing,
    currentIndex,
    furthestIndex,
    isCompleted,
    shuffledIndices,
    handleShowOrNext,
    handleCorrect,
    handleReshuffle,
  };
}
