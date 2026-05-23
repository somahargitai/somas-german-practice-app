import { useReducer, useCallback, useEffect } from "react";
import { VocabularyWord, VocabExerciseMode } from "@/lib/vocabulary";

// Mennyi szó van egyszerre az aktív adagban "bővülő adag" módban.
const POOL_SIZE = 5;
// Hány egymás utáni helyes válasz kell, hogy egy szó "megtanult" legyen Leitner módban.
const LEITNER_THRESHOLD = 2;

interface UseVocabularyExerciseStateProps {
  words: VocabularyWord[];
  mode: VocabExerciseMode;
}

function shuffleArray(array: number[]): number[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface State {
  mode: VocabExerciseMode;
  // Az aktív forgásban lévő szavak indexei; az aktuális szó mindig a queue[0].
  queue: number[];
  // Még be nem mutatott szavak (csak "bővülő adag" módban).
  reserve: number[];
  // Egymás utáni helyes válaszok száma szavanként (csak Leitner módban).
  streaks: Record<number, number>;
  learnedCount: number;
  total: number;
  isShowing: boolean;
  isCompleted: boolean;
}

function createInitialState(
  words: VocabularyWord[],
  mode: VocabExerciseMode
): State {
  const indices = shuffleArray(
    Array.from({ length: words.length }, (_, i) => i)
  );
  const usePool = mode === "expanding" && indices.length > POOL_SIZE;
  return {
    mode,
    queue: usePool ? indices.slice(0, POOL_SIZE) : indices,
    reserve: usePool ? indices.slice(POOL_SIZE) : [],
    streaks: {},
    learnedCount: 0,
    total: words.length,
    isShowing: false,
    isCompleted: words.length === 0,
  };
}

type Action =
  | { type: "RESET"; words: VocabularyWord[]; mode: VocabExerciseMode }
  | { type: "SHOW" }
  | { type: "HIDE" }
  | { type: "CORRECT" }
  | { type: "WRONG" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "RESET":
      return createInitialState(action.words, action.mode);

    case "SHOW":
      return { ...state, isShowing: true };

    case "HIDE":
      return { ...state, isShowing: false };

    case "CORRECT": {
      if (state.queue.length === 0) return state;
      const current = state.queue[0];
      const rest = state.queue.slice(1);

      if (state.mode === "leitner") {
        const nextStreak = (state.streaks[current] ?? 0) + 1;
        if (nextStreak < LEITNER_THRESHOLD) {
          // Még nem megtanult – visszakerül a forgás végére.
          const queue = [...rest, current];
          return {
            ...state,
            queue,
            streaks: { ...state.streaks, [current]: nextStreak },
            isShowing: false,
            isCompleted: queue.length === 0,
          };
        }
        // Elérte a küszöböt – megtanult, kikerül.
        return {
          ...state,
          queue: rest,
          streaks: { ...state.streaks, [current]: nextStreak },
          learnedCount: state.learnedCount + 1,
          isShowing: false,
          isCompleted: rest.length === 0,
        };
      }

      if (state.mode === "expanding") {
        // Megtanult; egy friss szó csúszik be a tartalékból az adagba.
        let queue = rest;
        let reserve = state.reserve;
        if (state.reserve.length > 0) {
          queue = [...rest, state.reserve[0]];
          reserve = state.reserve.slice(1);
        }
        return {
          ...state,
          queue,
          reserve,
          learnedCount: state.learnedCount + 1,
          isShowing: false,
          isCompleted: queue.length === 0,
        };
      }

      // requeue: egyetlen helyes válasz nyugdíjazza a szót.
      return {
        ...state,
        queue: rest,
        learnedCount: state.learnedCount + 1,
        isShowing: false,
        isCompleted: rest.length === 0,
      };
    }

    case "WRONG": {
      if (state.queue.length === 0) return state;
      const current = state.queue[0];
      // A szó a sor végére kerül, és újra elő fog jönni – nincs újrakezdés.
      const queue = [...state.queue.slice(1), current];
      const streaks =
        state.mode === "leitner"
          ? { ...state.streaks, [current]: 0 }
          : state.streaks;
      return { ...state, queue, streaks, isShowing: false };
    }

    default:
      return state;
  }
}

export function useVocabularyExerciseState({
  words,
  mode,
}: UseVocabularyExerciseStateProps) {
  const [state, dispatch] = useReducer(reducer, undefined, () =>
    createInitialState(words, mode)
  );

  useEffect(() => {
    dispatch({ type: "RESET", words, mode });
  }, [words, mode]);

  const setIsShowing = useCallback((value: boolean) => {
    dispatch({ type: value ? "SHOW" : "HIDE" });
  }, []);

  const handleShowOrNext = useCallback(() => {
    dispatch(state.isShowing ? { type: "WRONG" } : { type: "SHOW" });
  }, [state.isShowing]);

  const handleCorrect = useCallback(() => {
    dispatch({ type: "CORRECT" });
  }, []);

  const handleReshuffle = useCallback(() => {
    dispatch({ type: "RESET", words, mode });
  }, [words, mode]);

  const currentWord =
    state.queue.length > 0 ? words[state.queue[0]] : null;

  return {
    isShowing: state.isShowing,
    setIsShowing,
    currentWord,
    isCompleted: state.isCompleted,
    learnedCount: state.learnedCount,
    total: state.total,
    poolSize: state.queue.length,
    reserveCount: state.reserve.length,
    handleShowOrNext,
    handleCorrect,
    handleReshuffle,
  };
}
