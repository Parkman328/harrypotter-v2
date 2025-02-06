export interface TriviaQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  category: 'Spells' | 'Characters' | 'Magical Creatures' | 'Hogwarts';
}

export const triviaQuestions: TriviaQuestion[] = [
  {
    id: 1,
    question: "What is Harry Potter's Patronus?",
    options: ['Stag', 'Doe', 'Wolf', 'Phoenix'],
    correctAnswer: 'Stag',
    category: 'Spells'
  },
  {
    id: 2,
    question: 'Which house does Luna Lovegood belong to?',
    options: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'],
    correctAnswer: 'Ravenclaw',
    category: 'Characters'
  },
  {
    id: 3,
    question: 'What creature guards the entrance to the Gryffindor common room?',
    options: ['The Grey Lady', 'The Fat Lady', 'Sir Cadogan', 'Peeves'],
    correctAnswer: 'The Fat Lady',
    category: 'Hogwarts'
  },
  // Add more questions as needed
];