import React from 'react';
import { Canvas } from '../Canvas';
import { Button } from '../ui/Button';
import type { PictionaryWord } from '../../data/pictionaryWords';

interface DrawingAreaProps {
  word: PictionaryWord;
  onSave: (imageData: string) => void;
  onSkip: () => void;
  wordIndex: number;
  totalWords: number;
}

export const DrawingArea: React.FC<DrawingAreaProps> = ({
  word,
  onSave,
  onSkip,
  wordIndex,
  totalWords,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-amber-800 font-semibold">
            Word {wordIndex + 1}/{totalWords}
          </p>
          <p className="text-2xl font-bold text-amber-900 mt-2">Draw: {word.word}</p>
          <div className="flex gap-2 mt-2">
            <span className="px-2 py-1 bg-amber-100 rounded text-sm text-amber-800">
              {word.category}
            </span>
            <span className="px-2 py-1 bg-amber-100 rounded text-sm text-amber-800">
              {word.difficulty}
            </span>
          </div>
        </div>
        <Button variant="secondary" onClick={onSkip}>
          Skip Word
        </Button>
      </div>
      <Canvas onSave={onSave} />
    </div>
  );
};