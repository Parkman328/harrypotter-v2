import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`
        relative py-2 px-3
        text-sm font-medium
        transition-colors
        ${isActive ? 'text-[#CBA135]' : 'text-[#CBA135]/80 hover:text-[#CBA135]'}
        after:absolute
        after:left-0
        after:bottom-0
        after:h-0.5
        after:w-full
        after:origin-left
        after:scale-x-0
        after:bg-[#CBA135]
        after:transition-transform
        hover:after:scale-x-100
      `}
    >
      {children}
    </Link>
  );
};