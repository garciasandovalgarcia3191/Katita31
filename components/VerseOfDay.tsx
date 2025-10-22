
import React from 'react';
import { BibleIcon } from './icons';

const VerseOfDay: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-golden-glory to-golden-rod p-6 rounded-2xl shadow-2xl mb-8 text-center border-4 border-white">
      <h3 className="text-divine-blue-dark mb-4 text-2xl font-bold flex items-center justify-center gap-3">
        <BibleIcon className="w-7 h-7" />
        Versículo del Día
      </h3>
      <p className="text-gray-800 text-lg md:text-xl leading-relaxed italic">
        "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna."
      </p>
      <p className="mt-3 font-bold text-divine-blue-dark">- Juan 3:16</p>
    </section>
  );
};

export default VerseOfDay;
