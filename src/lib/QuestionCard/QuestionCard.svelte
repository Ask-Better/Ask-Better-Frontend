<script lang="ts">
  import TitleDescriptionDisplay from "../GeneralComponents/TitleDescriptionDisplay.svelte";

  import type { Question } from "./types";
  export let question: Question;
  let selections: string[] = [];

  const clickHandler = (option: string) => {
    if (selections.includes(option)) {
      selections = selections.filter((selection) => selection !== option);
    } else {
      selections = [...selections, option];
    }
  };

  const submitHandler = () => {
    if (question.inputType === "select" && "options" in question.data) {
      const userSelection: number[] = selections.map((selection) =>
        // @ts-ignore
        question.data.options.indexOf(selection)
      );
      console.log(userSelection);
    }
  };
</script>

<div>
  <h2>
    <TitleDescriptionDisplay object={question.data} />
  </h2>
  <div class="options">
    {#if question.inputType === "select" && "options" in question.data}
      {#each question.data.options as option}
        <div class="option-container">
          <button
            on:click={() => clickHandler(option)}
            class="option {selections.includes(option) ? 'selected' : ''}"
            >{option}</button
          >
        </div>
      {/each}
    {/if}
  </div>

  <div class="submision">
    <button on:click={submitHandler}>Submit</button>
  </div>
</div>

<style>
  .option-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 2px solid black;
    border-radius: 1rem;
    overflow: hidden;
    padding: 1rem;
    margin: 1rem;
  }

  .option {
    display: flex;
    justify-content: center;
    align-items: center;

    outline: 2px solid black;
    font-size: large;

    padding: 1rem;
    min-width: fit-content;

    width: 50%;
    height: 80%;

    transition: ease-in-out 0.2s;
  }

  .option.selected {
    width: 100%;
    height: 100%;

    border-radius: 0;
    outline: 0;

    background-color: #535bf2;
  }

  .option:hover {
    background-color: #646cf3;
  }

  .submision {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
</style>
