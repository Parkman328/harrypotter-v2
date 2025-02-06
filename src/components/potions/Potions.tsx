import React, { useState } from 'react';
import { PotionBrewing } from './PotionBrewing';
import type { PotionRecipe } from '../../data/potionRecipes';

interface PotionsProps {
  recipes: PotionRecipe[];
  onGameComplete: (score: number) => void;
}

export const Potions: React.FC<PotionsProps> = ({ recipes, onGameComplete }) => {
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const [score, setScore] = useState(0);

  const handleComplete = (success: boolean) => {
    const points = success ? 100 : 0;
    const newScore = score + points;

    if (currentRecipe < recipes.length - 1) {
      setScore(newScore);
      setCurrentRecipe(currentRecipe + 1);
    } else {
      onGameComplete(Math.round(newScore / recipes.length));
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <p className="text-amber-800">
            Potion {currentRecipe + 1}/{recipes.length}
          </p>
          <p className="text-amber-900 font-semibold">Score: {score}</p>
        </div>
      </div>

      <PotionBrewing
        recipe={recipes[currentRecipe]}
        onComplete={handleComplete}
      />
    </div>
  );
};