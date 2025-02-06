import React, { useState, useCallback } from 'react';
import type { PictionaryWord } from '../data/pictionaryWords';
import { Canvas } from './Canvas';

interface PictionaryProps {
  words: PictionaryWord[];
  onGameComplete: (score: number) => void;
}

export const Pictionary: React.FC<PictionaryProps> = ({ words, onGameComplete }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  const handleSave = useCallback((imageData: string) => {
    // In a real app, you might want to save this drawing or send it to other players
    console.log('Drawing saved:', imageData);
  }, []);

  const skipWord = () => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      setShowResult(true);
      onGameComplete(score);
    }
  };

  if (showResult) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">Game Complete!</h2>
        <p className="text-xl">Final Score: {score}</p>
      </div>
    );
  }

  const currentWord = words[currentWordIndex];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-amber-800 font-semibold">
            Word {currentWordIndex + 1}/{words.length}
          </p>
          <p className="text-lg font-bold text-amber-900">Draw: {currentWord.word}</p>
          <p className="text-sm text-amber-700">
            Category: {currentWord.category} | Difficulty: {currentWord.difficulty}
          </p>
        </div>
        <button
          onClick={skipWord}
          className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
        >
          Skip Word
        </button>
      </div>
      <Canvas onSave={handleSave} />
    </div>
  );
};