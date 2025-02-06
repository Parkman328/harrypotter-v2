export interface LeaderboardEntry {
  id: string;
  playerName: string;
  email: string;
  score: number;
  gameMode: 'Trivia' | 'Pictionary';
  timestamp: string;
}