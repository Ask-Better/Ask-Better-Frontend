<script lang="ts">
  import QuestionCard from "./QuestionCard.svelte";
  import type { Quiz } from "./types";
  import TitleDescriptionDisplay from "../GeneralComponents/TitleDescriptionDisplay.svelte";
  export let quiz: Quiz;
</script>

<div>
  <h1>
    <TitleDescriptionDisplay object={quiz}/>
  </h1>
  <div class="quizzes">
    {#each quiz.questions as question}
      <QuestionCard {question} />
    {/each}
  </div>
</div>

<style>
  .quizzes {
    border: 2px solid #000;
    margin: 1rem;
    border-radius: 1rem;
    padding: 1rem;
    gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>