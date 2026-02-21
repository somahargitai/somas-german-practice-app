"use client";

import { RandomExercisePage } from "@/components/conjugation/RandomExercisePage";
import { verbsGroup3 } from "@/lib/verbs-group-3";

export default function ConjugationPage3a() {
  return <RandomExercisePage verbs={verbsGroup3} title="Test - 3" />;
}
