import { verbs } from "./verbs";

// Group 3: Verbs 24-35 (indices 24-35), with ids renumbered 1-12
export const verbsGroup3 = verbs.slice(24, 36).map((verb, index) => ({
  ...verb,
  id: index + 1,
}));
