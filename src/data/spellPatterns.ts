export interface SpellPattern {
  id: string;
  name: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  pattern: Array<{ x: number; y: number }>;
  effect: string;
}

export const spellPatterns: SpellPattern[] = [
  {
    id: 'lumos',
    name: 'Lumos',
    description: 'The Wand-Lighting Charm',
    difficulty: 'Easy',
    pattern: [
      { x: 100, y: 200 },
      { x: 250, y: 100 },
      { x: 400, y: 200 }
    ],
    effect: 'Creates light at the tip of the wand'
  },
  {
    id: 'wingardium_leviosa',
    name: 'Wingardium Leviosa',
    description: 'The Levitation Charm',
    difficulty: 'Medium',
    pattern: [
      { x: 100, y: 200 },
      { x: 250, y: 100 },
      { x: 400, y: 200 },
      { x: 250, y: 300 }
    ],
    effect: 'Makes objects fly'
  },
  {
    id: 'expecto_patronum',
    name: 'Expecto Patronum',
    description: 'The Patronus Charm',
    difficulty: 'Hard',
    pattern: [
      { x: 100, y: 200 },
      { x: 200, y: 100 },
      { x: 300, y: 200 },
      { x: 400, y: 100 },
      { x: 250, y: 300 }
    ],
    effect: 'Conjures a Patronus'
  }
];