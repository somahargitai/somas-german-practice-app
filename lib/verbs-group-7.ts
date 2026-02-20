import { verbs } from "./verbs";

// Group 7: Verbs 72-83 (indices 72-83), with ids renumbered 1-12
export const verbsGroup7 = verbs.slice(72, 84).map((verb, index) => ({
  ...verb,
  id: index + 1,
}));
