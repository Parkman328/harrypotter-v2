import React from 'react';

interface ScoreDisplayProps {
  current: number;
  total: number;
  questionNumber: number;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  current,
  total,
  questionNumber,
}) => {
  return (
    <div className="bg-white backdrop-blur-sm rounded-xl p-4 mb-6 flex justify-between items-center">
      <span className="text-amber-800 font-semibold">
        Question {questionNumber}/{total}
      </span>
      <div className="flex items-center gap-2">
        <span className="text-amber-800">Score:</span>
        <span className="font-bold text-amber-900">{current}</span>
      </div>
    </div>
  );
};