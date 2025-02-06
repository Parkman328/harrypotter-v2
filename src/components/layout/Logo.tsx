import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img 
        src="../../../public/harrypotter.png" 
        alt="Harry Potter"
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};