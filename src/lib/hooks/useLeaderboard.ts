import { useState, useEffect } from 'react';
import { api } from '../api/client';
import type { LeaderboardEntry } from '../../types/leaderboard';

export function useLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLeaderboard() {
      const response = await api.getLeaderboard();
      if (response.error) {
        setError(response.error);
      } else if (response.data) {
        setLeaderboard(response.data);
      }
      setLoading(false);
    }

    fetchLeaderboard();
  }, []);

  return { leaderboard, loading, error };
}