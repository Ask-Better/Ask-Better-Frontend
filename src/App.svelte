<script lang="ts">
  import { onMount } from "svelte";

  import type { Question } from "./lib/QuestionCard/types";
  import QuestionCard from "./lib/QuestionCard/QuestionCard.svelte";
  import {
    backendLogin,
    exampleQuestions,
    fetchQuestions,
  } from "./lib/QuestionCard/utils";

  import type { Comment } from "./lib/Chat/types";
  import ChatArea from "./lib/Chat/ChatArea.svelte";
  import { fetchComments } from "./lib/Chat/utils";

  let questions: Question[] = exampleQuestions;
  let comments: Comment[] = [];

  onMount(() => {
    // assure that the user is logged in before fetching questions
    // this is a temporary solution
    (async () => {
      await backendLogin();

      fetchQuestions().then((data: Question[]) => {
        if (data.length === 0) {
          console.error("No questions found");
          return;
        }
        questions = data.slice(0, 5);
      });
    })();

    fetchComments().then((data: Comment[]) => {
      if (data.length === 0) {
        console.error("No comments found");
        return;
      }
      comments = data.slice(0, 5);
    });
  });
</script>

<main>
  <ChatArea {comments} />

  {#each questions as question}
    <QuestionCard {question} />
  {/each}
</main>

<style>
</style>
