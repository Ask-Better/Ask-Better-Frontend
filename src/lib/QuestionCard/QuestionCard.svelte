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

  const submitHandlerQuiz = () => {
    //! TODO
  };

  const submitHandlerPoll = () => {
    //! TODO
  };

  const submitHandler =
    question.type === "Quiz" ? submitHandlerQuiz : submitHandlerPoll;
</script>

<div>
  <h2>
    <ruby>
      {question.question}
      <rt>{question.type}</rt>
    </ruby>
  </h2>
  <div class="options">
    {#each question.options as answer}
    <div class="option-container">
    <button
    on:click={() => buttonHandler(answer)}
    class="option-{selections.includes(answer)
            ? 'selected'
            : 'unselected'}">{answer}</button
        >
      </div>
    {/each}
  </div>

  <div class="submision">
    <button on:click={submitHandler}>Submit</button>
  </div>
</div>

<style>
  ruby {
    display: grid;
    text-align: center;
    grid-template-rows: 1fr;
  }
  rt {
    font-size: small;
    color: #535bf2;
  }

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

  .option-unselected {
    font-size: large;
    border: 2px solid black;
    border-radius: 0;

    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 2rem;
  }

  .option-selected {
    font-size: large;
    border-radius: 1rem;
    border-radius: 0;
    background-color: #535bf2;

    width: 100%;
    height: 100%;
    padding: 2rem;
  }

  .option-unselected:hover {
    border: 1px solid white;
  }
  .option-selected:hover {
    border: 1px solid white;
  }

  button {
    transition: ease-in-out 0.4s;
  }

  .submision {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
</style>
