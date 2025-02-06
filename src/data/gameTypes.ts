import { Wand2, Pencil, Sparkles, Beaker, Target } from 'lucide-react';

export type GameModeType = 'trivia' | 'pictionary' | 'spellcasting' | 'potions' | 'quidditch' | null;

export interface GameMode {
  id: GameModeType;
  name: string;
  description: string;
  Icon: typeof Wand2 | typeof Pencil | typeof Sparkles | typeof Beaker | typeof Target;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}