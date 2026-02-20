import { verbs } from "./verbs";

// Group 10: Verbs 108-119 (indices 108-119), with ids renumbered 1-12
export const verbsGroup10 = verbs.slice(108, 121).map((verb, index) => ({
  ...verb,
  id: index + 1,
}));
