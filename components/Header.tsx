
import React from 'react';
import { CrossIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="text-center text-white mb-8 p-6 bg-white/10 rounded-2xl backdrop-blur-md">
      <div className="flex justify-center mb-2">
        <CrossIcon className="w-12 h-12 text-golden-glory" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} />
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-golden-glory" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
        La Palabra de Dios
      </h1>
      <p className="text-lg italic text-gray-200">
        "Lámpara es a mis pies tu palabra, y lumbrera a mi camino" - Salmos 119:105
      </p>
    </header>
  );
};

export default Header;
