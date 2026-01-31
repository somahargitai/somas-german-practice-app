import { useState, useCallback } from "react";
import { VerbConjugation } from "@/lib/verbs";

interface UseConjugationStateProps {
  verbs: VerbConjugation[];
}

export function useConjugationState({ verbs }: UseConjugationStateProps) {
  const [isShowing, setIsShowing] = useState(false);
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);
  const [correctStatus, setCorrectStatus] = useState<boolean[]>(
    new Array(verbs.length).fill(false)
  );

  const correctCount = correctStatus.filter(Boolean).length;

  const getRandomVerb = useCallback(() => {
    // Súlyozás: helyes = 1x, rossz = 5x valószínűség
    const weights = correctStatus.map((isCorrect) => (isCorrect ? 1 : 5));
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;

    for (let i = 0; i < weights.length; i++) {
      random -= weights[i];
      if (random <= 0) {
        setCurrentVerbIndex(i);
        setIsShowing(false);
        return;
      }
    }
  }, [correctStatus]);

  const handleShowOrNext = useCallback(() => {
    if (isShowing) {
      // Mark as incorrect and get new verb
      setCorrectStatus((prev) => {
        const newStatus = [...prev];
        newStatus[currentVerbIndex] = false;
        return newStatus;
      });
      getRandomVerb();
    } else {
      // Show mode: toggle to show
      setIsShowing(true);
    }
  }, [isShowing, currentVerbIndex, getRandomVerb]);

  const handleCorrect = useCallback(() => {
    // Mark as correct and get new verb
    setCorrectStatus((prev) => {
      const newStatus = [...prev];
      newStatus[currentVerbIndex] = true;
      return newStatus;
    });
    getRandomVerb();
  }, [currentVerbIndex, getRandomVerb]);

  return {
    isShowing,
    setIsShowing,
    currentVerbIndex,
    setCurrentVerbIndex,
    correctStatus,
    correctCount,
    handleShowOrNext,
    handleCorrect,
  };
}
