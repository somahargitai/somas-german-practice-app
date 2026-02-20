import { verbs } from "./verbs";

// Group 9: Verbs 96-107 (indices 96-107), with ids renumbered 1-12
export const verbsGroup9 = verbs.slice(96, 108).map((verb, index) => ({
  ...verb,
  id: index + 1,
}));
