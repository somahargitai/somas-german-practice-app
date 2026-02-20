import { verbs } from "./verbs";

// Group 5: Verbs 48-59 (indices 48-59), with ids renumbered 1-12
export const verbsGroup5 = verbs.slice(48, 60).map((verb, index) => ({
  ...verb,
  id: index + 1,
}));
