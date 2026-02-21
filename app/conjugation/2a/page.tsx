"use client";

import { RandomExercisePage } from "@/components/conjugation/RandomExercisePage";
import { verbsGroup2 } from "@/lib/verbs-group-2";

export default function ConjugationPage2a() {
  return <RandomExercisePage verbs={verbsGroup2} title="Test - 2" />;
}
