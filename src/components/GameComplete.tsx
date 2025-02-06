import React from 'react';
import { Button } from './ui/Button';

interface GameCompleteProps {
  score: number;
  totalPossible?: number;
  onPlayAgain: () => void;
}

export const GameComplete: React.FC<GameCompleteProps> = ({
  score,
  totalPossible,
  onPlayAgain,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl text-center">
      <h2 className="text-3xl font-bold text-amber-900 mb-4">Game Complete!</h2>
      <p className="text-xl mb-6">
        Your final score: {score}
        {totalPossible && ` out of ${totalPossible}`}
      </p>
      <Button size="lg" onClick={onPlayAgain}>
        Play Again
      </Button>
    </div>
  );
};