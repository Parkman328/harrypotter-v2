import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img 
        src="https://images.unsplash.com/photo-1598153346810-860daa814c4b?auto=format&fit=crop&w=200&q=80" 
        alt="Wizarding Games"
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};