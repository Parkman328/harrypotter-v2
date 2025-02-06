import React from 'react';
import type { TriviaQuestion } from '../../data/triviaQuestions';
import { Button } from '../ui/Button';

interface QuestionCardProps {
  question: TriviaQuestion;
  onAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  isDisabled: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  selectedAnswer,
  isDisabled,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
      <h3 className="text-2xl font-bold text-amber-900 mb-6">{question.question}</h3>
      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option) => (
          <Button
            key={option}
            onClick={() => onAnswer(option)}
            disabled={isDisabled}
            variant={
              selectedAnswer === null
                ? 'secondary'
                : option === question.correctAnswer
                ? 'primary'
                : selectedAnswer === option
                ? 'danger'
                : 'secondary'
            }
            className="w-full text-left justify-start h-14"
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};