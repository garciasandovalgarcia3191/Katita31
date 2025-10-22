
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import VerseOfDay from './components/VerseOfDay';
import ThemedVersesSection from './components/ThemedVersesSection';
import MusicSection from './components/MusicSection';
import SearchSection from './components/SearchSection';
import PrayerSection from './components/PrayerSection';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import MusicControl from './components/MusicControl';
import { bibleVerses } from './constants/bibleVerses';

const App: React.FC = () => {
  const [musicPlaying, setMusicPlaying] = useState(true);

  const musicSrc = musicPlaying
    ? "https://www.youtube.com/embed/I-Gp53jBiM0?autoplay=1&loop=1&playlist=I-Gp53jBiM0,yl61xlVUqv0,3YpGkBhR-Q4"
    : "";

  return (
    <div className="font-serif bg-gradient-to-br from-divine-blue-dark via-divine-blue-light to-gray-400 min-h-screen relative overflow-x-hidden text-gray-800">
      <FloatingElements verses={bibleVerses} />
      
      <iframe id="backgroundMusic" src={musicSrc} className="absolute w-px h-px -top-96" allow="autoplay; encrypted-media"></iframe>
      
      <MusicControl isPlaying={musicPlaying} onToggle={() => setMusicPlaying(!musicPlaying)} />
      
      <main className="relative z-10 max-w-7xl mx-auto p-4 sm:p-5">
        <Header />
        <VerseOfDay />
        <ThemedVersesSection />
        <MusicSection />
        <SearchSection allVerses={bibleVerses} />
        <PrayerSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;