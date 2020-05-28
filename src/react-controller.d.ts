type SuggestionSchema = {
  suggestion: string;
  type: string;
  viewed: boolean;
  author: string;
  createdAt: Date;

  _id: string;
};

type Warning = { title: string; content: string; _id: string };

declare module "smalltalk" {
  export async function prompt(
    title: string,
    message: string,
    value: string,
    options?: { type: string }
  ): Promise<string>;
}
