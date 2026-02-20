import { useState, useCallback, useEffect } from "react";
import { SentenceExample } from "@/lib/sentences";

interface UseSentenceExerciseStateProps {
  sentences: SentenceExample[];
}

function shuffleArray(array: number[]): number[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function useSentenceExerciseState({
  sentences,
}: UseSentenceExerciseStateProps) {
  const [isShowing, setIsShowing] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [furthestIndex, setFurthestIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  // Initialize with unshuffled indices to avoid hydration mismatch
  const [shuffledIndices, setShuffledIndices] = useState<number[]>(() =>
    Array.from({ length: sentences.length }, (_, i) => i)
  );

  // Shuffle on client side only after hydration
  useEffect(() => {
    const indices = Array.from({ length: sentences.length }, (_, i) => i);
    setShuffledIndices(shuffleArray(indices));
  }, [sentences.length]);

  const handleShowOrNext = useCallback(() => {
    if (isShowing) {
      // Mark as incorrect and reset to start
      setCurrentSentenceIndex(0);
      setIsShowing(false);
      setIsCompleted(false);
    } else {
      // Show mode: toggle to show
      setIsShowing(true);
    }
  }, [isShowing]);

  const handleCorrect = useCallback(() => {
    // Mark as correct and move to next sentence
    const nextIndex = currentSentenceIndex + 1;

    // Check if we've completed all exercises
    if (nextIndex >= sentences.length) {
      setIsCompleted(true);
      setCurrentSentenceIndex(nextIndex);
      setFurthestIndex(sentences.length);
      return;
    }

    setCurrentSentenceIndex(nextIndex);
    setIsShowing(false);

    // Update furthest if we've gone further
    if (nextIndex > furthestIndex) {
      setFurthestIndex(nextIndex);
    }
  }, [currentSentenceIndex, furthestIndex, sentences.length]);

  const handleReshuffle = useCallback(() => {
    const indices = Array.from({ length: sentences.length }, (_, i) => i);
    setShuffledIndices(shuffleArray(indices));
    setCurrentSentenceIndex(0);
    setFurthestIndex(0);
    setIsShowing(false);
    setIsCompleted(false);
  }, [sentences.length]);

  return {
    isShowing,
    setIsShowing,
    currentSentenceIndex,
    setCurrentSentenceIndex,
    furthestIndex,
    isCompleted,
    shuffledIndices,
    handleShowOrNext,
    handleCorrect,
    handleReshuffle,
  };
}
