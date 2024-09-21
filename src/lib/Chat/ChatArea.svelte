<script lang="ts">
    import { onMount } from "svelte";
    import type { Comment } from "./types";
    
    const fetchComments = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await response.json();

        console.log(data);
        return data;
    };

    let comments: Comment[] = [];

    onMount(() => {
        fetchComments().then((data) => {
            comments = data.slice(0, 5);
            console.log(comments);
        });
    });
</script>

<div class="chat-area">
  {#each comments as comment}
    <div class="message">
      <strong>{comment.name.slice(0,10)}</strong>: {comment.body.slice(0, 20)}
    </div>
  {/each}

  <div class="message-submision">
    <input type="text" class="message-input" value="Enter a Message..." />
    <button class="send-button"> Send </button>
  </div>
</div>

<style>
    .message-submision {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 1rem;
    }

    .message-input {
        flex-grow: 1;
        padding: 0.5rem;
        margin-right: 0.5rem;
        border-radius: 1rem;
        border: 2px solid #000;
        outline: none;
    }

  .message {
    display: flex;
    flex-direction: row;
  }

  .chat-area {
    display: flex;
    flex-direction: column;

    align-items: left;
    justify-content: left;

    background-color: #141414;
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
    border: 2px solid #000;
  }
</style>
