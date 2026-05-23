import { useReducer, useCallback, useEffect } from "react";
import { VocabExerciseMode } from "@/lib/vocabulary";

// Általános, ismétlés-alapú gyakorló motor tetszőleges elemtípusra (szó, mondat…).
// Három mód, mind elhagyja a "vissza az elejére" kemény resetet:
//  - requeue:   a rossz elem a sor végére kerül, egy helyes válasz nyugdíjazza.
//  - leitner:   egy elem akkor kész, ha kétszer egymás után tudtad; a rossz nullázza.
//  - expanding: kis adaggal indulsz, minden megtanult elem helyére új csúszik be.

// Mennyi elem van egyszerre az aktív adagban "bővülő adag" módban.
const POOL_SIZE = 5;
// Hány egymás utáni helyes válasz kell, hogy egy elem "megtanult" legyen Leitner módban.
const LEITNER_THRESHOLD = 2;

interface UseSpacedExerciseProps<T> {
  items: T[];
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
  // Az aktív forgásban lévő elemek indexei; az aktuális elem mindig a queue[0].
  queue: number[];
  // Még be nem mutatott elemek (csak "bővülő adag" módban).
  reserve: number[];
  // Egymás utáni helyes válaszok száma elemenként (csak Leitner módban).
  streaks: Record<number, number>;
  learnedCount: number;
  total: number;
  isShowing: boolean;
  isCompleted: boolean;
}

// `shuffle` csak kliensoldalon legyen true: a szerveren és a kliens első
// renderjén determinisztikus (kevereletlen) sorrend kell, különben hidratációs
// eltérés lép fel. A keverés a mount utáni RESET-ben történik.
function createInitialState(
  count: number,
  mode: VocabExerciseMode,
  shuffle: boolean
): State {
  const base = Array.from({ length: count }, (_, i) => i);
  const indices = shuffle ? shuffleArray(base) : base;
  const usePool = mode === "expanding" && indices.length > POOL_SIZE;
  return {
    mode,
    queue: usePool ? indices.slice(0, POOL_SIZE) : indices,
    reserve: usePool ? indices.slice(POOL_SIZE) : [],
    streaks: {},
    learnedCount: 0,
    total: count,
    isShowing: false,
    isCompleted: count === 0,
  };
}

type Action =
  | { type: "RESET"; count: number; mode: VocabExerciseMode }
  | { type: "SHOW" }
  | { type: "HIDE" }
  | { type: "CORRECT" }
  | { type: "WRONG" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "RESET":
      return createInitialState(action.count, action.mode, true);

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
        // Megtanult; egy friss elem csúszik be a tartalékból az adagba.
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

      // requeue: egyetlen helyes válasz nyugdíjazza az elemet.
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
      // Az elem a sor végére kerül, és újra elő fog jönni – nincs újrakezdés.
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

export function useSpacedExercise<T>({ items, mode }: UseSpacedExerciseProps<T>) {
  const [state, dispatch] = useReducer(reducer, undefined, () =>
    createInitialState(items.length, mode, false)
  );

  useEffect(() => {
    dispatch({ type: "RESET", count: items.length, mode });
  }, [items, mode]);

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
    dispatch({ type: "RESET", count: items.length, mode });
  }, [items, mode]);

  const currentItem = state.queue.length > 0 ? items[state.queue[0]] : null;

  return {
    isShowing: state.isShowing,
    setIsShowing,
    currentItem,
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
