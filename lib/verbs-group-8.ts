import { verbs } from "./verbs";

// Group 8: Verbs 84-95 (indices 84-95), with ids renumbered 1-12
export const verbsGroup8 = verbs.slice(84, 96).map((verb, index) => ({
  ...verb,
  id: index + 1,
}));
