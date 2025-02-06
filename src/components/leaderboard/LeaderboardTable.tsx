import React from 'react';
import { LeaderboardRow } from './LeaderboardRow';
import type { LeaderboardEntry } from '../../types/leaderboard';

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
  isLoading: boolean;
}

export const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ entries, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-xl">
        <thead>
          <tr className="border-b border-amber-200">
            <th className="px-6 py-4 text-left text-amber-900 font-bold">Rank</th>
            <th className="px-6 py-4 text-left text-amber-900 font-bold">Name</th>
            <th className="px-6 py-4 text-left text-amber-900 font-bold">Email</th>
            <th className="px-6 py-4 text-left text-amber-900 font-bold">Score</th>
            <th className="px-6 py-4 text-left text-amber-900 font-bold">Game Mode</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-100">
          {entries.map((entry, index) => (
            <LeaderboardRow key={entry.id} entry={entry} rank={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};