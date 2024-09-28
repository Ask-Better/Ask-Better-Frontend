type QuestionDataBase = {
  title: string;
  description: string;
};

type QuestionDataNumber = {
  min: number;
  max: number;
};

type QuestionDataText = {
};

type QuestionDataSelect = {
  options: string[];
};

export type Question = {
  inputType: "number" | "text" | "select";
  isPoll: boolean;
  data: QuestionDataBase & (QuestionDataNumber | QuestionDataText | QuestionDataSelect);
};

export type Quiz = {
  title: string;
  description: string;
  questions: Question[];
};

type QuestionPacket = {
  action: "ask_question";
  content: Question;
};

type MessagePacket = {
  action: "message";
  content: {
    message: string;
  };
};

export type ActionPacket = QuestionPacket | MessagePacket;
