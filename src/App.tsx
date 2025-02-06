import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameMode } from './components/GameMode';
import { Trivia } from './components/trivia/Trivia';
import { Pictionary } from './components/pictionary/Pictionary';
import { SpellCasting } from './components/spellcasting/SpellCasting';
import { Potions } from './components/potions/Potions';
import { Quidditch } from './components/quidditch/Quidditch';
import { Header } from './components/layout/Header';
import { GameComplete } from './components/GameComplete';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { AdminPage } from './pages/AdminPage';
import { ChatAssistant } from './components/chat/ChatAssistant';
import { triviaQuestions } from './data/triviaQuestions';
import { pictionaryWords } from './data/pictionaryWords';
import { spellPatterns } from './data/spellPatterns';
import { potionRecipes } from './data/potionRecipes';
import type { GameModeType } from './data/gameTypes';
import { Footer } from './components/layout/Footer';

function App() {
  const [gameMode, setGameMode] = useState<GameModeType>(null);
  const [gameComplete, setGameComplete] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const handleGameComplete = (score: number) => {
    setFinalScore(score);
    setGameComplete(true);
  };

  const resetGame = () => {
    setGameMode(null);
    setGameComplete(false);
    setFinalScore(0);
  };

  const renderGameContent = () => {
    if (gameComplete) {
      return (
        <GameComplete
          score={finalScore}
          totalPossible={gameMode === 'trivia' ? triviaQuestions.length : undefined}
          onPlayAgain={resetGame}
        />
      );
    }

    switch (gameMode) {
      case 'trivia':
        return <Trivia questions={triviaQuestions} onGameComplete={handleGameComplete} />;
      case 'pictionary':
        return <Pictionary words={pictionaryWords} onGameComplete={handleGameComplete} />;
      case 'spellcasting':
        return <SpellCasting patterns={spellPatterns} onGameComplete={handleGameComplete} />;
      case 'potions':
        return <Potions recipes={potionRecipes} onGameComplete={handleGameComplete} />;
      case 'quidditch':
        return <Quidditch onGameComplete={handleGameComplete} />;
      default:
        return <GameMode onSelectMode={setGameMode} />;
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#00001B] bg-[url('https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-blend-overlay bg-cover bg-fixed">
        <Header />
        <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">
          <Routes>
            <Route path="/" element={renderGameContent()} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        <ChatAssistant />
        <Footer />
      </div>
    </Router>
  );
}

export default App