import React from 'react';
import { LeaderboardTable } from '../components/leaderboard/LeaderboardTable';
import { useLeaderboard } from '../lib/hooks/useLeaderboard';

export const LeaderboardPage: React.FC = () => {
  const { leaderboard, loading, error } = useLeaderboard();

  return (
    <div className="bg-[#000033] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#CBA135] mb-2">Leaderboard</h1>
          <p className="text-[#CBA135]">Check the top performers in the Wizarding Games</p>
        </div>

        {error ? (
          <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6">
            {error}
          </div>
        ) : (
          <LeaderboardTable entries={leaderboard} isLoading={loading} />
        )}
      </div>
    </div>
  );
};