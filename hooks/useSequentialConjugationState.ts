import { useState, useCallback, useEffect } from "react";
import { VerbConjugation } from "@/lib/verbs";

interface UseSequentialConjugationStateProps {
  verbs: VerbConjugation[];
}

function shuffleArray(array: number[]): number[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function useSequentialConjugationState({
  verbs,
}: UseSequentialConjugationStateProps) {
  const [isShowing, setIsShowing] = useState(false);
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);
  const [furthestIndex, setFurthestIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  // Initialize with unshuffled indices to avoid hydration mismatch
  const [shuffledIndices, setShuffledIndices] = useState<number[]>(() =>
    Array.from({ length: verbs.length }, (_, i) => i)
  );

  // Shuffle on client side only after hydration
  useEffect(() => {
    const indices = Array.from({ length: verbs.length }, (_, i) => i);
    setShuffledIndices(shuffleArray(indices));
  }, []);

  const handleShowOrNext = useCallback(() => {
    if (isShowing) {
      // Mark as incorrect and reset to start
      setCurrentVerbIndex(0);
      setIsShowing(false);
      setIsCompleted(false);
    } else {
      // Show mode: toggle to show
      setIsShowing(true);
    }
  }, [isShowing]);

  const handleCorrect = useCallback(() => {
    // Mark as correct and move to next verb
    const nextIndex = currentVerbIndex + 1;

    // Check if we've completed all exercises
    if (nextIndex >= verbs.length) {
      setIsCompleted(true);
      setCurrentVerbIndex(nextIndex);
      setFurthestIndex(verbs.length);
      return;
    }

    setCurrentVerbIndex(nextIndex);
    setIsShowing(false);

    // Update furthest if we've gone further
    if (nextIndex > furthestIndex) {
      setFurthestIndex(nextIndex);
    }
  }, [currentVerbIndex, furthestIndex]);

  const handleReshuffle = useCallback(() => {
    const indices = Array.from({ length: verbs.length }, (_, i) => i);
    setShuffledIndices(shuffleArray(indices));
    setCurrentVerbIndex(0);
    setFurthestIndex(0);
    setIsShowing(false);
    setIsCompleted(false);
  }, []);

  return {
    isShowing,
    setIsShowing,
    currentVerbIndex,
    setCurrentVerbIndex,
    furthestIndex,
    isCompleted,
    shuffledIndices,
    handleShowOrNext,
    handleCorrect,
    handleReshuffle,
  };
}
