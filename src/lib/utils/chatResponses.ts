const responses = {
  trivia: [
    'The Trivia game tests your knowledge of the wizarding world.',
    'Try to answer questions about spells, characters, and magical creatures.',
    'Each correct answer earns you points!'
  ],
  pictionary: [
    'In Pictionary, you\'ll draw magical objects and creatures.',
    'Use your mouse to draw on the canvas.',
    'Try to be as accurate as possible!'
  ],
  spellcasting: [
    'Follow the spell pattern shown on screen.',
    'Draw the pattern as accurately as possible.',
    'The more accurate your spell, the more points you earn!'
  ],
  potions: [
    'Mix ingredients in the correct order to brew potions.',
    'Pay attention to the recipe instructions.',
    'Be careful - wrong ingredients can cause explosions!'
  ],
  quidditch: [
    'Position your players strategically on the field.',
    'Click and drag players to move them.',
    'Score points by executing successful plays!'
  ],
  general: [
    'Welcome to Wizarding Games!',
    'Choose a game mode from the main menu.',
    'Try to achieve the highest score possible!'
  ]
];

export const getResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('trivia')) {
    return responses.trivia[Math.floor(Math.random() * responses.trivia.length)];
  }
  if (lowerMessage.includes('pictionary')) {
    return responses.pictionary[Math.floor(Math.random() * responses.pictionary.length)];
  }
  if (lowerMessage.includes('spell')) {
    return responses.spellcasting[Math.floor(Math.random() * responses.spellcasting.length)];
  }
  if (lowerMessage.includes('potion')) {
    return responses.potions[Math.floor(Math.random() * responses.potions.length)];
  }
  if (lowerMessage.includes('quidditch')) {
    return responses.quidditch[Math.floor(Math.random() * responses.quidditch.length)];
  }
  
  return responses.general[Math.floor(Math.random() * responses.general.length)];
};