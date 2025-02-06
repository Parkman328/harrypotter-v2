import React from 'react';
import { LeaderboardTable } from '../components/leaderboard/LeaderboardTable';
import { useLeaderboard } from '../lib/hooks/useLeaderboard';

export const LeaderboardPage: React.FC = () => {
  const { leaderboard, loading, error } = useLeaderboard();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-2">Leaderboard</h1>
        <p className="text-amber-800">Top wizards and their magical achievements</p>
      </div>

      {error ? (
        <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6">
          {error}
        </div>
      ) : (
        <LeaderboardTable entries={leaderboard} isLoading={loading} />
      )}
    </div>
  );
};