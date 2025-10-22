
import React from 'react';
import { PrayerIcon } from './icons';

const PrayerSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-white/95 to-gray-100/90 p-6 rounded-2xl shadow-2xl mb-8 text-center border-4 border-divine-blue-dark">
      <h3 className="text-divine-blue-dark mb-4 text-2xl font-bold flex items-center justify-center gap-3">
        <PrayerIcon className="w-7 h-7" />
        Oración
      </h3>
      <p className="text-gray-800 text-lg leading-relaxed italic">
        "Señor Jesús, gracias por tu Palabra que ilumina nuestro camino. Ayúdanos a vivir según tus enseñanzas y a compartir tu amor con el mundo. Amén."
      </p>
    </section>
  );
};

export default PrayerSection;
