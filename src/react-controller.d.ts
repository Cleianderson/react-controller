type SuggestionSchema = {
  suggestion: string;
  type: string;
  viewed: boolean;
  author: string;
  createdAt: Date;

  _id: string;
};

type Warning = { title: string; content: string; _id: string };

type TAnswers = {
  _id: string;
  question: string;
  answer: string;
  author: string;
  theme: string;
  relevation: number;
};

type WeekDay = {
  almoco: { [key: string]: string };
  jantar: { [key: string]: string };
  [key:string]: { [key: string]: string };
  almoco: {
    suc: string;
    p1: sting;
    p2: sting;
    gua: sting;
    sob: sting;
    veg: sting;
    gre: sting;
    fag: sting;
    sco: sting;
    sal: sting;
  };
  jantar: {
    suc: string;
    p1: string;
    p2: string;
    gua: string;
    sob: string;
    sopa: string;
    veg: string;
    gre: string;
    fag: string;
    sal: string;
  };
};
type TWeek = {
  _id: string;
  data: WeekDay[];
  number_week: number;
  year: number;
};

declare module "smalltalk" {
  export async function prompt(
    title: string,
    message: string,
    value: string,
    options?: { type: string }
  ): Promise<string>;

  export async function alert(
    title: string,
    message: string,
    options?: { type: string }
  ): Promise<string>;
}
