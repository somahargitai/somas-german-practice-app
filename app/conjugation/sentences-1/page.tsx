"use client";

import { SentenceExercisePage } from "@/components/sentences/SentenceExercisePage";
import { sentencesGroup1 } from "@/lib/sentences-group-1";

export default function Sentences1Page() {
  return <SentenceExercisePage sentences={sentencesGroup1} title="Sentences - 1" />;
}
