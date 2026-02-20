"use client";

import { SequentialExercisePage } from "@/components/conjugation/SequentialExercisePage";
import { verbs } from "@/lib/verbs";

export default function ConjugationPageAll() {
  return <SequentialExercisePage verbs={verbs} />;
}
