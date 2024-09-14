<script lang="ts">
  import { spring } from "svelte/motion";
  import QuestionCard from "./lib/QuestionCard/QuestionCard.svelte";
  import { type Question } from "./lib/QuestionCard/types";
  import { onMount } from "svelte";

  const endPoint = "https://d9kwmlr0-8080.euw.devtunnels.ms/";
  let questions: Question[] = [];

  const fetchQuestions = async () => {
    const response = await fetch(endPoint + "api/quiz/list?offset=0");
    const data: string = JSON.parse(await response.json());

    console.log(data);
    return data;
  };

  const login = async () => {
    const response = await fetch(endPoint + "api/account/login", {
      method: "POST",
      referrerPolicy: "unsafe-url",
      credentials: "include",
      headers: {
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
    login();
    // fetchQuestions();
  });

  let sampleQuestionQuiz: Question = {
    question: "Which of these are mammals?",
    options: ["Dog", "Cat", "Fish", "Bird", "Human", "Snake"],
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
