<script lang="ts">
  import type { Quiz } from "./lib/QuestionCard/types";

  import QuizCard from "./lib/QuestionCard/QuizCard.svelte";
  import { backendLogin, exampleQuestions } from "./lib/QuestionCard/utils";
  import LoadingSpinner from "./lib/GeneralComponents/LoadingSpinner.svelte";

  import type { Comment } from "./lib/Chat/types";
  import ChatArea from "./lib/Chat/ChatArea.svelte";
  import { CommentFetcher, exampleComments } from "./lib/Chat/utils";

  let quizzes: Quiz[] = [
    {
      title: "Quiz 1",
      description: "Example quiz",
      questions: exampleQuestions,
    },
  ];

  let comments: Comment[] = [];
  const CommentFetching = async () => {
    return CommentFetcher.sfetch((data: any) => {
      const parsedData: Comment[] = data as Comment[];

      if (parsedData) comments = parsedData.slice(0, 5);
      else throw new Error("No valid comments found");
    }).catch((err: Error) => {
      console.error(err);
      comments = exampleComments;
    });
  };

  let backendLoginStatus = new Promise((resolve) => setTimeout(resolve, 500)); //backendLogin();
  let commentFetchStatus: Promise<void>;

  backendLoginStatus.then(() => {
    commentFetchStatus = CommentFetching();
  });
</script>

<main>
  {#await backendLoginStatus}
    <LoadingSpinner />
  {:then}
    <!-- Quizzes -->
    {#each quizzes as quiz}
      <QuizCard {quiz} />
    {/each}
    <!-- Quizzes -->
    {#await commentFetchStatus}
      <LoadingSpinner />
    {:then}
      <!-- Chat -->
      <ChatArea {comments} />
      <!-- Chat -->
    {/await}
  {:catch error}
    <div>
      <h1>Could not login</h1>
      <p style="color: red;">{error.message}</p>
    </div>
  {/await}
</main>

<style>
</style>
