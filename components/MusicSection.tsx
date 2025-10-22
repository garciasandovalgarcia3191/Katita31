
import React from 'react';
import { MusicIcon } from './icons';

const songPlaylist = [
  { number: 1, title: 'Alabanza Cristiana - Canción 1', link: 'https://www.youtube.com/watch?v=I-Gp53jBiM0' },
  { number: 2, title: 'Alabanza Cristiana - Canción 2', link: 'https://www.youtube.com/watch?v=yl61xlVUqv0' },
  { number: 3, title: 'Alabanza Cristiana - Canción 3', link: 'https://www.youtube.com/watch?v=3YpGkBhR-Q4' },
];

const MusicSection: React.FC = () => {
  return (
    <section className="bg-white/95 p-6 sm:p-8 rounded-2xl shadow-2xl mb-8 border-t-8 border-golden-glory">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-divine-blue-dark mb-6 flex items-center justify-center gap-4">
        <MusicIcon className="w-8 h-8" />
        Música Cristiana y Alabanzas
        <MusicIcon className="w-8 h-8" />
      </h2>
      
      <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden border-4 border-divine-blue-dark mb-5 shadow-lg bg-gradient-to-br from-divine-blue-dark to-divine-blue-light flex items-center justify-center text-white p-4">
        <div className="text-center">
            <MusicIcon className="w-16 h-16 mx-auto mb-4 opacity-75" />
            <p className="text-lg font-semibold">La música de fondo está sonando</p>
            <p className="text-sm opacity-80">Usa el control en la esquina para pausar o reanudar.</p>
        </div>
      </div>

      <div className="bg-golden-glory/10 border-2 border-golden-glory rounded-lg p-4 text-center mb-6">
        <p className="font-bold text-divine-blue-dark">🎶 Reproduciendo: Playlist de Alabanzas</p>
        <p className="text-sm text-divine-blue-dark/80">3 canciones sonando automáticamente de fondo mientras navegas.</p>
      </div>

      <div className="bg-divine-blue-dark/5 border-2 border-divine-blue-dark rounded-xl p-5">
        <h4 className="font-bold text-divine-blue-dark text-center text-lg mb-4">Playlist de Alabanzas</h4>
        <div className="space-y-3">
          {songPlaylist.map(song => (
            <div key={song.number} className="bg-white p-3 rounded-lg flex items-center gap-4 shadow-sm hover:shadow-md hover:translate-x-1 transition-all duration-200">
              <div className="bg-gradient-to-br from-divine-blue-dark to-divine-blue-light text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{song.number}</div>
              <div className="flex-1 text-gray-700 text-sm">{song.title}</div>
              <MusicIcon className="w-5 h-5 text-golden-glory" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a href="https://www.youtube.com/@alabanzaradio24horas" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center bg-gradient-to-br from-divine-blue-dark to-divine-blue-light text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.854-0.908-1.532-1.762-1.762C18.254,4,12,4,12,4S5.746,4,4.18,4.424 c-0.854,0.23-1.532,0.908-1.762,1.762C2,7.754,2,12,2,12s0,4.246,0.418,5.814c0.23,0.854,0.908,1.532,1.762,1.762 C5.746,20,12,20,12,20s6.254,0,7.82-0.424c0.854-0.23,1.532-0.908,1.762-1.762C22,16.246,22,12,22,12S22,7.754,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/></svg>
              Alabanza Radio
          </a>
      </div>
    </section>
  );
};

export default MusicSection;