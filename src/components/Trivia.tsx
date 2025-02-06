import React, { useState } from 'react';
import type { TriviaQuestion } from '../data/triviaQuestions';

interface TriviaProps {
  onGameComplete: (score: number) => void;
  questions: TriviaQuestion[];
}

export const Trivia: React.FC<TriviaProps> = ({ onGameComplete, questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
        onGameComplete(score);
      }
    }, 1000);
  };

  if (showResult) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">Game Complete!</h2>
        <p className="text-xl">
          Your score: {score} out of {questions.length}
        </p>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-amber-800 font-semibold">
            Question {currentQuestion + 1}/{questions.length}
          </span>
          <span className="text-amber-800 font-semibold">Score: {score}</span>
        </div>
        <h3 className="text-xl font-bold text-amber-900 mb-6">{question.question}</h3>
        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
              className={`p-4 text-left rounded-lg transition-colors ${
                selectedAnswer === null
                  ? 'bg-amber-100 hover:bg-amber-200'
                  : selectedAnswer === option
                  ? option === question.correctAnswer
                    ? 'bg-green-200'
                    : 'bg-red-200'
                  : option === question.correctAnswer
                  ? 'bg-green-200'
                  : 'bg-amber-100'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};