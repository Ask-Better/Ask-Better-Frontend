<script lang="ts">
  import { onMount } from "svelte";

  import { type Question } from "./lib/QuestionCard/types";
  import QuestionCard from "./lib/QuestionCard/QuestionCard.svelte";
  import ChatArea from "./lib/Chat/ChatArea.svelte";
  import { backendLogin, exampleQuestions, fetchQuestions } from "./lib/QuestionCard/utils";

  let questions: Question[] = exampleQuestions;

  onMount(() => {
    backendLogin();

    fetchQuestions().then((data) => {
      questions = data.slice(0, 5); // Show only the first 5 questions
      console.log(questions);
    });
  });
</script>

<main>
  <ChatArea />

  {#each questions as question}
    <QuestionCard {question} />
  {/each}
</main>

<style>
</style>
