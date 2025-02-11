import React, { useState } from 'react';
import { useAuthStore } from '../../lib/store/authStore';
import { Button } from '../ui/Button';

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = await login(username, password);
    if (!success) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-[#CBA135]/10 backdrop-blur-sm rounded-xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-[#CBA135] mb-6">Admin Login</h2>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-[#CBA135] rounded-lg">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-[#CBA135] mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-[#CBA135] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#CBA135] mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
};