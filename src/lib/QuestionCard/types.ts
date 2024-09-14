export interface Question {
  question: string;
  category: string;
  type: "Poll" | "Quiz";
  correctAnswers: null | string[];
  allowMultipleAnswers: boolean;
  options: string[];
}