import { verbs } from "./verbs";

// Group 6: Verbs 60-71 (indices 60-71), with ids renumbered 1-12
export const verbsGroup6 = verbs.slice(60, 72).map((verb, index) => ({
  ...verb,
  id: index + 1,
}));
