<script lang="ts">
  import { type Question } from "./types";
  export let question: Question;
  let selections: string[] = [];

  const multiAnswerHandler = (answer: string) => {
    if (selections.includes(answer)) {
      selections = selections.filter((selection) => selection !== answer);
    } else {
      selections = [...selections, answer];
    }
  };

  const singleAnswerHandler = (answer: string) => {
    selections = [answer];
  };

  const buttonHandler = question.allowMultipleAnswers
    ? multiAnswerHandler
    : singleAnswerHandler;
</script>

<div>
  <h2>{question.question}</h2>
  <div class="options">
    {#each question.options as answer}
      <button
        on:click={() => buttonHandler(answer)}
        class="option-{selections.includes(answer) ? 'selected' : 'unselected'}"
        >{answer}</button
      >
    {/each}
  </div>
  <p>Selected answer: {selections}</p>
</div>

<style>
  .options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    border: 2px solid black;
    border-radius: 1rem;
  }
  .option-unselected {
    font-size: large;
    border: 2px solid black;
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
    transition: ease-in-out 0.2s;
  }

  .option-selected {
    font-size: large;
    border: 2px solid black;
    border-radius: 1rem;
    background-color: lightgreen;
    transition: ease-in-out 0.2s;
  }
</style>
