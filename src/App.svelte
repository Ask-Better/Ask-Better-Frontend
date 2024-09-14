<script lang="ts">
  import QuestionCard from "./lib/QuestionCard/QuestionCard.svelte";
  import { type Question } from "./lib/QuestionCard/types";
  
  let sampleQuestion: Question = {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    category: "Geography",
    type: "single",
  };
</script>

<main>
  <QuestionCard question={sampleQuestion}/>
</main>

<style>
</style>
