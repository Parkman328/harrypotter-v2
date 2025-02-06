import React from 'react';
import { Wand2, Pencil, Sparkles, Beaker, Target } from 'lucide-react';
import type { GameModeType } from '../data/gameTypes';

interface GameModeProps {
  onSelectMode: (mode: GameModeType) => void;
}

const gameModes = [
  {
    id: 'trivia',
    name: 'Magical Knowledge',
    description: 'Test your wizarding knowledge with challenging questions',
    Icon: Wand2,
    difficulty: 'Easy'
  },
  {
    id: 'pictionary',
    name: 'Magical Sketches',
    description: 'Draw magical creatures and objects',
    Icon: Pencil,
    difficulty: 'Medium'
  },
  {
    id: 'spellcasting',
    name: 'Spell Master',
    description: 'Cast spells by drawing the correct patterns',
    Icon: Sparkles,
    difficulty: 'Hard'
  },
  {
    id: 'potions',
    name: 'Potions Class',
    description: 'Mix ingredients in the correct order to brew potions',
    Icon: Beaker,
    difficulty: 'Medium'
  },
  {
    id: 'quidditch',
    name: 'Quidditch Tactics',
    description: 'Plan and execute Quidditch plays',
    Icon: Target,
    difficulty: 'Hard'
  }
] as const;

export const GameMode: React.FC<GameModeProps> = ({ onSelectMode }) => {
  return (
    <div>
      <h2 className="text-4xl font-serif text-[#CBA135] mb-12 text-center">Choose Your Game Mode</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gameModes.map(({ id, name, description, Icon, difficulty }) => (
          <button
            key={id}
            onClick={() => onSelectMode(id)}
            className="flex flex-col p-8 bg-[#000033]/80 backdrop-blur-sm border border-[#CBA135]/20 rounded-lg hover:bg-[#000044]/80 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-[#CBA135]/10 group-hover:bg-[#CBA135]/20 transition-colors">
                <Icon className="w-6 h-6 text-[#CBA135]" />
              </div>
              <h3 className="text-xl font-serif text-[#CBA135]">{name}</h3>
            </div>
            <p className="text-sm text-[#CBA135]/80 mb-6">{description}</p>
            <div className="mt-auto">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#CBA135]/10 text-[#CBA135]">
                {difficulty}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};