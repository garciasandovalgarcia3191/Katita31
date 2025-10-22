
import React from 'react';
import { CrossIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-white p-8 mt-8 bg-white/10 rounded-2xl backdrop-blur-md">
      <p className="text-lg flex items-center justify-center gap-3">
        <CrossIcon className="w-5 h-5" />
        Gloria a Dios en las alturas
        <CrossIcon className="w-5 h-5" />
      </p>
      <p className="mt-2 text-gray-200">
        "Jesucristo es el mismo ayer, y hoy, y por los siglos" - Hebreos 13:8
      </p>
    </footer>
  );
};

export default Footer;
