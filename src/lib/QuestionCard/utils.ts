import { type Question } from "./types";

let sampleQuestionQuiz: Question = {
  question: "Which of these are mammals?",
  options: ["Dog", "Cat", "Fish", "Bird", "Human", "Snake"],
  category: "Biology",
  allowMultipleAnswers: true,
  type: "Quiz",
  correctAnswers: ["Dog", "Cat"],
};

let sampleQuestionPoll: Question = {
  question: "What is your favorite color?",
  options: ["Red", "Blue", "Green"],
  category: "Poll",
  allowMultipleAnswers: false,
  type: "Poll",
  correctAnswers: null,
};

export { sampleQuestionQuiz, sampleQuestionPoll };