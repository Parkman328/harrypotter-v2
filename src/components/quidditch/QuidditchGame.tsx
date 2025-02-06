import React, { useState } from 'react';
import { Button } from '../ui/Button';

interface Player {
  id: string;
  position: { x: number; y: number };
  role: 'chaser' | 'beater' | 'keeper' | 'seeker';
}

interface QuidditchGameProps {
  onScore: (points: number) => void;
}

export const QuidditchGame: React.FC<QuidditchGameProps> = ({ onScore }) => {
  const [players, setPlayers] = useState<Player[]>([
    { id: 'chaser1', position: { x: 50, y: 50 }, role: 'chaser' },
    { id: 'chaser2', position: { x: 150, y: 50 }, role: 'chaser' },
    { id: 'chaser3', position: { x: 250, y: 50 }, role: 'chaser' },
    { id: 'beater1', position: { x: 350, y: 50 }, role: 'beater' },
    { id: 'beater2', position: { x: 450, y: 50 }, role: 'beater' },
    { id: 'keeper', position: { x: 50, y: 350 }, role: 'keeper' },
    { id: 'seeker', position: { x: 450, y: 350 }, role: 'seeker' },
  ]);

  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);

  const movePlayer = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedPlayer) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPlayers(players.map(player =>
      player.id === selectedPlayer
        ? { ...player, position: { x, y } }
        : player
    ));
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-amber-900 mb-2">Quidditch Field</h2>
        <p className="text-amber-800">Position your players strategically</p>
      </div>

      <div
        className="w-[600px] h-[400px] bg-[#2d5a27] rounded-lg relative cursor-pointer mb-6"
        onClick={movePlayer}
      >
        {players.map((player) => (
          <div
            key={player.id}
            className={`absolute w-8 h-8 rounded-full transition-all duration-200 cursor-pointer
              ${selectedPlayer === player.id ? 'ring-2 ring-amber-400' : ''}
              ${player.role === 'chaser' ? 'bg-red-500' :
                player.role === 'beater' ? 'bg-blue-500' :
                player.role === 'keeper' ? 'bg-green-500' :
                'bg-yellow-500'
              }`}
            style={{
              left: player.position.x - 16,
              top: player.position.y - 16,
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPlayer(player.id);
            }}
          />
        ))}
      </div>

      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500" />
            <span className="text-amber-800">Chaser</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500" />
            <span className="text-amber-800">Beater</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500" />
            <span className="text-amber-800">Keeper</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-500" />
            <span className="text-amber-800">Seeker</span>
          </div>
        </div>

        <Button onClick={() => onScore(150)}>Execute Play</Button>
      </div>
    </div>
  );
};