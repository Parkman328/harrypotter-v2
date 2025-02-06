import { API_ENDPOINTS } from './endpoints';

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'An error occurred');
    }
    
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export const api = {
  // Scores
  submitScore: (score: number, gameMode: string) =>
    apiRequest(API_ENDPOINTS.SCORES, {
      method: 'POST',
      body: JSON.stringify({ score, gameMode }),
    }),

  // Drawings
  saveDrawing: (imageData: string, word: string) =>
    apiRequest(API_ENDPOINTS.DRAWINGS, {
      method: 'POST',
      body: JSON.stringify({ imageData, word }),
    }),

  // Leaderboard
  getLeaderboard: () =>
    apiRequest(API_ENDPOINTS.LEADERBOARD),
    
  clearLeaderboard: () =>
    apiRequest(API_ENDPOINTS.CLEAR_LEADERBOARD, {
      method: 'POST',
    }),
};