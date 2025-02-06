import React, { useState, useCallback } from 'react';
import type { PictionaryWord } from '../../data/pictionaryWords';
import { DrawingArea } from './DrawingArea';
import { GameComplete } from '../GameComplete';

interface PictionaryProps {
  words: PictionaryWord[];
  onGameComplete: (score: number) => void;
}

export const Pictionary: React.FC<PictionaryProps> = ({ words, onGameComplete }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSave = useCallback((imageData: string) => {
    // In a real app, you might want to save this drawing or send it to other players
    console.log('Drawing saved:', imageData);
    setScore(score + 1);
  }, [score]);

  const skipWord = () => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      setShowResult(true);
      onGameComplete(score);
    }
  };

  if (showResult) {
    return <GameComplete score={score} onPlayAgain={() => {}} />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <DrawingArea
        word={words[currentWordIndex]}
        onSave={handleSave}
        onSkip={skipWord}
        wordIndex={currentWordIndex}
        totalWords={words.length}
      />
    </div>
  );
};