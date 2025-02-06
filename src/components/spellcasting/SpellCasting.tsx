import React, { useState } from 'react';
import { SpellCanvas } from './SpellCanvas';
import type { SpellPattern } from '../../data/spellPatterns';

interface SpellCastingProps {
  patterns: SpellPattern[];
  onGameComplete: (score: number) => void;
}

export const SpellCasting: React.FC<SpellCastingProps> = ({ patterns, onGameComplete }) => {
  const [currentSpell, setCurrentSpell] = useState(0);
  const [score, setScore] = useState(0);

  const handleSpellCast = (accuracy: number) => {
    const newScore = score + accuracy;
    if (currentSpell < patterns.length - 1) {
      setScore(newScore);
      setCurrentSpell(currentSpell + 1);
    } else {
      onGameComplete(Math.round(newScore / patterns.length));
    }
  };

  const spell = patterns[currentSpell];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-amber-900">{spell.name}</h2>
              <p className="text-amber-800">{spell.description}</p>
            </div>
            <div className="text-right">
              <p className="text-amber-800">
                Spell {currentSpell + 1}/{patterns.length}
              </p>
              <p className="text-amber-900 font-semibold">Score: {score}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-amber-100 rounded text-sm text-amber-800">
              {spell.difficulty}
            </span>
            <span className="text-amber-700">•</span>
            <span className="text-sm text-amber-800">{spell.effect}</span>
          </div>
        </div>

        <SpellCanvas
          targetPattern={spell.pattern}
          onSpellCast={handleSpellCast}
        />
      </div>
    </div>
  );
};