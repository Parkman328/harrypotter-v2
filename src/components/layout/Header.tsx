import React from 'react';
import { Wand2, Shield } from 'lucide-react';
import { NavLink } from './NavLink';
import { Logo } from './Logo';
import { useAuthStore } from '../../lib/store/authStore';

export const Header: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className="bg-[#000033] border-b border-[#CBA135]/20 fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="h-8 w-px bg-[#CBA135]/20" />
            <div className="flex items-center gap-3">
              <Wand2 className="w-6 h-6 text-[#CBA135]" />
              <h1 className="text-xl font-serif text-[#CBA135]">
                Wizarding Games
              </h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/leaderboard">Leaderboard</NavLink>
            <NavLink href="/architecture">Architecture</NavLink>
            <NavLink href="/admin">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Admin
              </div>
            </NavLink>
          </nav>
        </div>
        {isAuthenticated && (
          <button
            onClick={logout}
            className="text-sm text-[#CBA135] hover:text-[#B08D20] transition-colors"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};