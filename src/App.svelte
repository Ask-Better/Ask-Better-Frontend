<script lang="ts">
  import { spring } from "svelte/motion";
  import QuestionCard from "./lib/QuestionCard/QuestionCard.svelte";
  import { type Question } from "./lib/QuestionCard/types";

  let sampleQuestionSingle: Question = {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    category: "Geography",
    allowMultipleAnswers: false,
  };
  let sampleQuestionMulti: Question = {
    question: "Which of these are mammals?",
    options: ["Dog", "Cat", "Fish", "Bird"],
    category: "Biology",
    allowMultipleAnswers: true,
  };
</script>

<main>
  <QuestionCard question={sampleQuestionSingle} />
  <QuestionCard question={sampleQuestionMulti} />
</main>

<style>
</style>
