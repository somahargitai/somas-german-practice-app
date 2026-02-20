import { verbs } from "./verbs";

// Group 4: Verbs 36-47 (indices 36-47), with ids renumbered 1-12
export const verbsGroup4 = verbs.slice(36, 48).map((verb, index) => ({
  ...verb,
  id: index + 1,
}));
