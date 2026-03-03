// src/components/pages/GamesPage.jsx
import { useState } from 'react';

export const GamesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header - Centered */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Games
          </h1>
          <p className="text-xl text-gray-600">
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
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl 
                       text-gray-800 placeholder-gray-400 focus:outline-none 
                       focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 
                       transition-all duration-300 shadow-sm"
            />
            <svg 
              className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
        <div className="text-center py-16">
          <div className="text-6xl mb-6 text-gray-300">🎮</div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">No Games Available Yet</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            We're working on bringing you amazing games. Please check back later!
          </p>
        </div>
      </div>
    </div>
  );
};