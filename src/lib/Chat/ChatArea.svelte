<script lang="ts">
  import type { Comment } from "./types";
  export let comments: Comment[];
</script>

<div class="chat-area">
  {#each comments as comment}
    <div class="comment">
      <div class="comment-name">
        <strong>{comment.name}</strong>
      </div>
      <p>{comment.body}</p>
    </div>
  {/each}

  <div class="message-submision">
    <input type="text" class="message-input" placeholder="Enter a Message..." />
    <button class="send-button"> Send </button>
  </div>
</div>

<style>
  .comment {
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
    text-align: left;

    background-color: #333333;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .comment-name {
    margin-bottom: -1rem;
    color: #535bf2;
    font-size: small;
  }
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

  .chat-area {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;

    background-color: #141414;
    border-radius: 1rem;

    padding: 1rem;
    margin: auto;
    max-width: 30%;

    border: 2px solid #000;
  }
</style>
