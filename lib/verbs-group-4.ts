import { verbs } from "./verbs";

// Group 3: Verbs 24-36 (indices 24-36), with ids renumbered 1-13
export const verbsGroup4 = verbs.slice(36, 48).map((verb, index) => ({
  ...verb,
  id: index + 1,
}));
