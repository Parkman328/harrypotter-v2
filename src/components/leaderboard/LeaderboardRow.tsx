import React from 'react';
import type { LeaderboardEntry } from '../../types/leaderboard';
import { Trophy } from 'lucide-react';

interface LeaderboardRowProps {
  entry: LeaderboardEntry;
  rank: number;
}

export const LeaderboardRow: React.FC<LeaderboardRowProps> = ({ entry, rank }) => {
  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'text-yellow-500';
      case 2:
        return 'text-gray-400';
      case 3:
        return 'text-amber-600';
      default:
        return 'text-amber-900';
    }
  };

  return (
    <tr className="hover:bg-amber-50/50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          {rank <= 3 ? (
            <Trophy className={`w-5 h-5 ${getRankColor(rank)}`} />
          ) : null}
          <span className={getRankColor(rank)}>{rank}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-amber-900">{entry.playerName}</td>
      <td className="px-6 py-4 text-amber-900">{entry.email}</td>
      <td className="px-6 py-4 font-semibold text-amber-900">{entry.score}</td>
      <td className="px-6 py-4">
        <span className="px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800">
          {entry.gameMode}
        </span>
      </td>
    </tr>
  );
};