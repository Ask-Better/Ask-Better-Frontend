import type { Question, Quiz } from "./types";
import Fetcher from "../fetcher";
const endPoint = "https://mhz4sst4-8080.euw.devtunnels.ms/";

const exampleQuestions: Question[] = [
  {
    isPoll: false,
    inputType: "select",
    data: {
      title: "What is your favorite animal?",
      description: "Please select all that apply",
      options: ["Dog", "Cat", "Fish", "Bird", "Human", "Snake"],
    },
  },
  {
    isPoll: true,
    inputType: "select",
    data: {
      title: "What is your favorite color?",
      description: "Please select one",
      options: ["Red", "Blue", "Green"],
    },
  },
];

const QuizPreviewFetcher = new Fetcher(endPoint + "api/quiz/list?offset=0", {
  method: "GET",
  signal: AbortSignal.timeout(3000),
  credentials: "include",
  headers: {
    "Access-Controll-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const backendLogin = async () => {
  const response = await fetch(endPoint + "api/account/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Access-Controll-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "TestUser",
      passwordHash512:
        "f6c1788e5bc736fb2b6265a39c15178ded2deac2bd6cd4d27fc5185a9ebbdfd3165d1aad078619184b0fcedbc6b29aa48fd03753788b6758570f60f0beec30e0",
    }),
  });

  if (!response.ok) {
    console.error("Login failed: " + response.statusText);
    console.log(response);
  }
};

export { exampleQuestions, backendLogin };
