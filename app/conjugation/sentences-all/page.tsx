"use client";

import { SentenceExercisePage } from "@/components/sentences/SentenceExercisePage";
import { sentences } from "@/lib/sentences";

export default function SentencesAllPage() {
  return <SentenceExercisePage sentences={sentences} />;
}
