<script lang="ts">
  import { spring } from "svelte/motion";
  import QuestionCard from "./lib/QuestionCard/QuestionCard.svelte";
  import { type Question } from "./lib/QuestionCard/types";

  let sampleQuestionQuiz: Question = {
    question: "Which of these are mammals?",
    options: ["Dog", "Cat", "Fish", "Bird","Human", "Snake"],
    category: "Biology",
    allowMultipleAnswers: true,
    type: "Quiz",
    correctAnswers: ["Dog", "Cat"],
  };

  let sampleQuestionPoll: Question = {
    question: "What is your favorite color?",
    options: ["Red", "Blue", "Green"],
    category: "Poll",
    allowMultipleAnswers: false,
    type: "Poll",
    correctAnswers: null,
  };
</script>

<main>
  <QuestionCard question={sampleQuestionQuiz} />
  <QuestionCard question={sampleQuestionPoll} />
</main>

<style>
</style>
