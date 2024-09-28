import Fetcher from "../fetcher";
import type { Comment } from "./types";

const CommentFetcher = new Fetcher(
  "https://jsonplaceholder.typicode.com/comments"
);

const exampleComments: Comment[] = [
  {
    body: "some body 1",
    email: "some@mail",
    id: 1,
    name: "foo",
    postId: 1,
  },
  {
    body: "some body 2",
    email: "some@mail",
    id: 2,
    name: "bar",
    postId: 2,
  },
  {
    body: "some body 3",
    email: "some@mail",
    id: 3,
    name: "baz",
    postId: 3,
  },
];

export { CommentFetcher, exampleComments };
