export type Card = {
    id: number;
    question: string;
    answer: string;
    count: number;
  };
  
  export type CardId = Card['id'];
  