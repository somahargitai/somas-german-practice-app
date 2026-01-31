import { verbs } from "./verbs";

// Group 1: First 12 verbs (indices 0-11), with ids renumbered 1-12
export const verbsGroup1 = verbs.slice(0, 12).map((verb, index) => ({
  ...verb,
  id: index + 1,
}));
