import { type Question } from "./types";
const endPoint = "https://zz1djn2p-8080.euw.devtunnels.ms/";

const exampleQuestions: Question[] = [
  {
    question: "Which of these are mammals?",
    options: ["Dog", "Cat", "Fish", "Bird", "Human", "Snake"],
    category: "Biology",
    allowMultipleAnswers: true,
    type: "Quiz",
    correctAnswers: ["Dog", "Cat", "Human"],
  },
  {
    question: "What is your favorite color?",
    options: ["Red", "Blue", "Green"],
    category: "Poll",
    allowMultipleAnswers: false,
    type: "Poll",
    correctAnswers: null,
  },
];

const fetchQuestions = async () => {
  const response = await fetch(endPoint + "api/quiz/list?offset=0", {
    method: "GET",
    credentials: "include",
    headers: {
      "Access-Controll-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    console.error("Failed to fetch questions: " + response.statusText);
    return [];
  }
  return JSON.parse(await response.json());
};

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
        "ee26b0dd4af7e749aa1a8ee3c10ae9923f618980772e473f8819a5d4940e0db27ac185f8a0e1d5f84f88bc887fd67b143732c304cc5fa9ad8e6f57f50028a8ff",
    }),
  });

  if (!response.ok) {
    console.error("Login failed: " + response.statusText);
    console.log(response);
  }
};

export { exampleQuestions, fetchQuestions, backendLogin };
