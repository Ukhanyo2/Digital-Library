// src/components/pages/GamesPage.jsx
import { useState } from 'react';
import consoleImage from '@/components/assets/console.jpeg'; // Adjust the path as needed

export const GamesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div 
      className="min-h-screen bg-black/60 flex flex-col"
      style={{
        backgroundImage: `url(${consoleImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Header - Centered */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-dark blue-300 to-navy-200 bg-clip-text text-transparent">
              Games
            </h1>
            <p className="text-xl text-black/90">
              Discover and play the latest games from talented developers
            </p>
          </div>

          {/* Search Bar - Centered */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/30 backdrop-blur-sm border border-white/30 rounded-2xl 
                         text-white placeholder-white/100 focus:outline-none 
                         focus:border-blue-300 focus:ring-2 focus:ring-blue-300/50 
                         transition-all duration-300 shadow-lg"
              />
              <svg 
                className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Empty State Message */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-3">No Games Available Yet</h2>
            <p className="text-white/80 max-w-md mx-auto">
              We're working on bringing you amazing games. Please check back later!
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
};