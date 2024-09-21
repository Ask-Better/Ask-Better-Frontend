<script lang="ts">
  import { onMount } from "svelte";

  import { type Question } from "./lib/QuestionCard/types";
  import QuestionCard from "./lib/QuestionCard/QuestionCard.svelte";
  import ChatArea from "./lib/Chat/ChatArea.svelte";
  import { sampleQuestionQuiz, sampleQuestionPoll } from "./lib/QuestionCard/utils";

  const endPoint = "https://d9kwmlr0-8080.euw.devtunnels.ms/";

  let questions: Question[] = [];
  const fetchQuestions = async () => {
    const response = await fetch(endPoint + "api/quiz/list?offset=0");
    const data = JSON.parse(await response.json());

    console.log(data);
    return data;
  };

  const login = async () => {
    const response = await fetch(endPoint + "api/account/login", {
      method: "POST",
      referrerPolicy: "unsafe-url",
      credentials: "include",
      headers: {
        "Access-Controll-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "TestUser",
        passwordHash512:
          "ee26b0dd4af7e749aa1a8ee3c10ae9923f618980772e473f8819a5d4940e0db27ac185f8a0e1d5f84f88bc887fd67b143732c304cc5fa9ad8e6f57f50028a8ff",
      }),
    });
    console.log(response);
  };

  onMount(() => {
    // login();
    //
    // fetchQuestions().then((data) => {
    // questions = data.slice(0, 5);
    // console.log(questions);
    // });
    
    // chessBoardSetup();
  });
</script>

<main>
  <ChatArea />
  
  {#each questions as question}
  <QuestionCard question={question} />
  {/each}
  
  {#if questions.length === 0}
  <p>No questions loaded! Displaying example questions</p>
  <QuestionCard question={sampleQuestionQuiz} />
  <QuestionCard question={sampleQuestionPoll} />
  {/if}
</main>

<style>
</style>
