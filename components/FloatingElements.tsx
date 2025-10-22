
import React from 'react';
import { BibleVerse } from '../types';
import { CrossIcon } from './icons';

interface FloatingElementsProps {
  verses: BibleVerse[];
}

const CrossPattern: React.FC = () => (
  <div
    className="fixed inset-0 w-full h-full opacity-5 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(255,255,255,0.1) 100px, rgba(255,255,255,0.1) 102px),
        repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(255,255,255,0.1) 100px, rgba(255,255,255,0.1) 102px)
      `,
    }}
  />
);

const FloatingVerses: React.FC<{ verses: BibleVerse[] }> = ({ verses }) => {
  const versesToFloat = verses.slice(0, 20);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden opacity-20 z-0 pointer-events-none">
      {versesToFloat.map((verse, index) => (
        <div
          key={index}
          className="absolute text-white text-sm whitespace-nowrap animate-float text-shadow"
          style={{
            top: `${(index * 5)}%`,
            animationDelay: `${index * 2}s`,
            animationDuration: `${25 + (index * 3)}s`,
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          }}
        >
            <CrossIcon className="inline-block w-4 h-4 mr-2" />
            {verse.ref}: {verse.text.substring(0, 70)}...
        </div>
      ))}
    </div>
  );
};


const FloatingElements: React.FC<FloatingElementsProps> = ({ verses }) => {
  return (
    <>
      <CrossPattern />
      <FloatingVerses verses={verses} />
    </>
  );
};

export default FloatingElements;
