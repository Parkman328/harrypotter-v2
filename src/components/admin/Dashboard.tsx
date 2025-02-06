import React from 'react';
import { Download, Trash2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { QlikPanel } from './QlikPanel';
import { useLeaderboard } from '../../lib/hooks/useLeaderboard';
import { api } from '../../lib/api/client';
import { exportToExcel } from '../../lib/utils/excel';

export const Dashboard: React.FC = () => {
  const { leaderboard, loading } = useLeaderboard();

  const handleExport = () => {
    exportToExcel(leaderboard, 'leaderboard-export.xlsx');
  };

  const handleClearLeaderboard = async () => {
    if (window.confirm('Are you sure you want to clear the leaderboard? This action cannot be undone.')) {
      const response = await api.clearLeaderboard();
      if (!response.error) {
        window.location.reload();
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
        <h2 className="text-xl font-bold text-amber-900 mb-4">Game Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-amber-800 mb-2">Total Games</h3>
            <p className="text-2xl font-bold text-amber-900">{leaderboard.length}</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-amber-800 mb-2">Trivia Games</h3>
            <p className="text-2xl font-bold text-amber-900">
              {leaderboard.filter(entry => entry.gameMode === 'Trivia').length}
            </p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-amber-800 mb-2">Pictionary Games</h3>
            <p className="text-2xl font-bold text-amber-900">
              {leaderboard.filter(entry => entry.gameMode === 'Pictionary').length}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-amber-900">Leaderboard Management</h2>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              onClick={handleExport}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button
              variant="danger"
              onClick={handleClearLeaderboard}
              className="flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear Leaderboard
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QlikPanel type="knowledge-base" />
        <QlikPanel type="answers-api" />
      </div>
    </div>
  );
};