
import React from 'react';
import { EyeIcon, BookmarkIcon } from './icons';

interface ThemeCardProps {
    theme: {
        id: string;
        title: string;
        icon: string;
        color: string;
        verses: { ref: string; text: string; }[];
    };
    isActive: boolean;
    onToggle: () => void;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme, isActive, onToggle }) => {
    const borderColor = `border-${theme.color}`;
    const textColor = `text-${theme.color}`;
    
    return (
        <div className={`bg-white/95 rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-8 ${borderColor} relative overflow-hidden`}>
            <div className="absolute top-0 right-0 text-7xl opacity-5 pointer-events-none -translate-y-1/4 translate-x-1/4">
                {theme.icon}
            </div>
            <div className={`text-5xl mb-4 text-center ${textColor}`}>
                {theme.icon}
            </div>
            <h3 className="text-2xl font-bold text-center text-divine-blue-dark mb-4">{theme.title}</h3>
            
            {isActive && (
                <div className="animate-fadeIn">
                    {theme.verses.map((verse, index) => (
                        <div key={index} className={`bg-gray-50 p-4 mb-3 rounded-lg border-l-4 ${borderColor} shadow-sm hover:shadow-md hover:translate-x-1 transition-transform duration-200`}>
                            <div className="font-bold text-divine-blue-dark mb-2 text-sm flex items-center gap-2">
                                <BookmarkIcon className="w-4 h-4" />
                                {verse.ref}
                            </div>
                            <p className="text-gray-700 text-sm italic leading-relaxed">{verse.text}</p>
                        </div>
                    ))}
                </div>
            )}

            <button
                onClick={onToggle}
                className="w-full mt-4 bg-gradient-to-br from-divine-blue-dark to-divine-blue-light text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105"
            >
                <EyeIcon className="w-5 h-5" />
                <span>{isActive ? 'Ocultar Versículos' : 'Ver Versículos'}</span>
            </button>
        </div>
    );
}

export default ThemeCard;
