export interface Question {
  question: string;
  category: string;
  allowMultipleAnswers: boolean;
  options: string[];
}