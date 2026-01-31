"use client";

import { RandomExercisePage } from "@/components/conjugation/RandomExercisePage";
import { verbsGroup1 } from "@/lib/verbs-group-1";

export default function ConjugationPage1a() {
  return <RandomExercisePage verbs={verbsGroup1} />;
}
