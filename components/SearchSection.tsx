
import React, { useState, useRef } from 'react';
import { BibleVerse } from '../types';
import { SearchIcon, CrossIcon, BookmarkIcon } from './icons';

interface SearchSectionProps {
  allVerses: BibleVerse[];
}

const SearchSection: React.FC<SearchSectionProps> = ({ allVerses }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<BibleVerse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setMessage('Por favor, escribe una palabra para buscar en las Escrituras.');
      setResults([]);
      return;
    }

    setIsLoading(true);
    setMessage('');
    setResults([]);

    setTimeout(() => {
      const foundVerses = allVerses.filter(verse =>
        verse.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        verse.ref.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(foundVerses);
      if (foundVerses.length === 0) {
        setMessage(`No se encontraron versículos con la palabra "${searchTerm}". Intenta con otra palabra.`);
      }
      setIsLoading(false);
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };
  
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const HighlightedText: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
    if (!highlight.trim()) {
      return <span>{text}</span>;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <span key={i} className="bg-golden-glory px-1 rounded font-bold">{part}</span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <section className="bg-white/95 p-6 sm:p-8 rounded-2xl shadow-2xl mb-8 border-t-8 border-golden-glory">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-divine-blue-dark mb-6 flex items-center justify-center gap-4">
        <SearchIcon className="w-8 h-8" />
        Buscar en las Escrituras
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Busca: amor, fe, esperanza, paz, salvación..."
          className="flex-grow w-full p-4 text-base border-2 border-divine-blue-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-golden-glory focus:border-golden-glory"
        />
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="w-full sm:w-auto bg-gradient-to-br from-divine-blue-dark to-divine-blue-light text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SearchIcon className="w-5 h-5" />
          <span>Buscar</span>
        </button>
      </div>

      <div ref={resultsRef} className="mt-5">
        {isLoading && (
          <div className="text-center text-divine-blue-dark p-5 font-bold flex items-center justify-center gap-3">
            <svg className="animate-spin h-5 w-5 text-divine-blue-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Buscando en la Palabra de Dios...
          </div>
        )}
        {message && !isLoading && (
          <div className="text-center text-gray-600 p-5 italic">{message}</div>
        )}
        {results.length > 0 && !isLoading && (
          <div>
            <h3 className="text-center text-divine-blue-dark mb-4 font-bold text-lg">
              Se encontraron {results.length} versículo(s):
            </h3>
            <div className="space-y-4">
              {results.map((verse) => (
                <div key={verse.ref} className="bg-gradient-to-r from-white to-gray-50 p-5 rounded-lg border-l-4 border-golden-glory shadow-md hover:shadow-lg hover:translate-x-2 transition-all duration-300 relative">
                   <CrossIcon className="absolute right-5 top-5 text-3xl text-divine-blue-dark/10" />
                  <div className="font-bold text-divine-blue-dark mb-2 flex items-center gap-2">
                    <BookmarkIcon className="w-5 h-5" /> {verse.ref}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base">
                    <HighlightedText text={verse.text} highlight={searchTerm} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchSection;
