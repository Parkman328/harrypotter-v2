import React, { useState } from 'react';
import type { TriviaQuestion } from '../../data/triviaQuestions';
import { QuestionCard } from './QuestionCard';
import { ScoreDisplay } from './ScoreDisplay';
import { GameComplete } from '../GameComplete';

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
    return <GameComplete score={score} totalPossible={questions.length} onPlayAgain={() => {}} />;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <ScoreDisplay
        current={score}
        total={questions.length}
        questionNumber={currentQuestion + 1}
      />
      <QuestionCard
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
        isDisabled={selectedAnswer !== null}
      />
    </div>
  );
};