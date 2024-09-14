<script lang="ts">
  import { type Question } from "./types";
  export let question: Question;
  let selectedAnswer: string = "";
</script>

<div>
  <h2>{question.question}</h2>
  <div class="options" id="option-field">
    {#each question.options as answer}
      <button on:click={() => (selectedAnswer = answer)} class="option-selected"
        >{answer}</button
      >
    {/each}
  </div>
  <p>Selected answer: {selectedAnswer}</p>
</div>

<style>
  .options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    border: 2px solid black;
    border-radius: 1rem;
  }
  .option-selected {
    font-size: large;
    border: 2px solid black;
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
  }
</style>
