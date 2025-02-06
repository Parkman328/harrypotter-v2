import React, { useState } from 'react';
import { QuidditchGame } from './QuidditchGame';

interface QuidditchProps {
  onGameComplete: (score: number) => void;
}

export const Quidditch: React.FC<QuidditchProps> = ({ onGameComplete }) => {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const totalRounds = 3;

  const handleScore = (points: number) => {
    const newScore = score + points;
    
    if (round < totalRounds) {
      setScore(newScore);
      setRound(round + 1);
    } else {
      onGameComplete(newScore);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <p className="text-amber-800">
            Round {round}/{totalRounds}
          </p>
          <p className="text-amber-900 font-semibold">Score: {score}</p>
        </div>
      </div>

      <QuidditchGame onScore={handleScore} />
    </div>
  );
};