
import React, { useState, useEffect } from 'react';
import { HeadphonesIcon, MusicIcon, MuteIcon } from './icons';

interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicControl: React.FC<MusicControlProps> = ({ isPlaying, onToggle }) => {
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInfo(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showInfo && (
        <div className="fixed bottom-24 right-5 sm:bottom-28 sm:right-7 z-40 bg-white/95 p-4 rounded-lg shadow-xl max-w-xs border-2 border-golden-glory transition-opacity duration-1000 opacity-100 data-[hidden]:opacity-0" data-hidden={!showInfo}>
          <h4 className="text-divine-blue-dark font-bold text-sm mb-1 flex items-center gap-2">
            <HeadphonesIcon className="w-5 h-5" />
            Música de Fondo
          </h4>
          <p className="text-gray-700 text-sm">🎵 Playlist de 3 alabanzas cristianas</p>
          <p className="text-xs text-gray-500 mt-1">Haz clic en el botón para pausar/reanudar</p>
        </div>
      )}
      <button
        onClick={onToggle}
        className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 bg-gradient-to-br from-golden-glory to-golden-rod rounded-full w-16 h-16 sm:w-[70px] sm:h-[70px] flex items-center justify-center cursor-pointer shadow-2xl transition-all duration-300 border-3 border-white hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50 ${isPlaying ? 'animate-pulse' : ''}`}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <MusicIcon className="w-8 h-8 sm:w-9 sm:h-9 text-divine-blue-dark" />
        ) : (
          <MuteIcon className="w-8 h-8 sm:w-9 sm:h-9 text-divine-blue-dark" />
        )}
      </button>
    </>
  );
};

export default MusicControl;
