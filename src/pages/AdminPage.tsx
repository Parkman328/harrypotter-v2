import React from 'react';
import { useAuthStore } from '../lib/store/authStore';
import { LoginForm } from '../components/admin/LoginForm';
import { Dashboard } from '../components/admin/Dashboard';

export const AdminPage: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-2">Administration</h1>
        <p className="text-amber-800">Manage game statistics and leaderboard</p>
      </div>

      {isAuthenticated ? <Dashboard /> : <LoginForm />}
    </div>
  );
};