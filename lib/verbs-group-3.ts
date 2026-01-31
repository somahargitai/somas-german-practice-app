import { verbs } from "./verbs";

// Group 3: Verbs 24-36 (indices 24-36), with ids renumbered 1-13
export const verbsGroup3 = verbs.slice(24).map((verb, index) => ({
  ...verb,
  id: index + 1,
}));
