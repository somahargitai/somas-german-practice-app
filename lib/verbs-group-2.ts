import { verbs } from "./verbs";

// Group 2: Verbs 12-23 (indices 12-23), with ids renumbered 1-12
export const verbsGroup2 = verbs.slice(12, 24).map((verb, index) => ({
  ...verb,
  id: index + 1,
}));
