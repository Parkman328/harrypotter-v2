export interface PictionaryWord {
  word: string;
  category: 'Magical Objects' | 'Creatures' | 'Characters' | 'Places';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const pictionaryWords: PictionaryWord[] = [
  {
    word: 'Golden Snitch',
    category: 'Magical Objects',
    difficulty: 'Easy'
  },
  {
    word: 'Hippogriff',
    category: 'Creatures',
    difficulty: 'Medium'
  },
  {
    word: 'Hogwarts Castle',
    category: 'Places',
    difficulty: 'Medium'
  },
  // Add more words as needed
];