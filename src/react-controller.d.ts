type SuggestionSchema = {
  suggestion: string;
  type: string;
  viewed: boolean;
  author: string;
  createdAt: Date;

  _id: string;
};

type Warning = { title: string; content: string; _id: string };
