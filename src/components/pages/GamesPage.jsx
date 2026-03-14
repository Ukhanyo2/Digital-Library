// src/components/pages/GamesPage.jsx
import { useState } from 'react';
import consoleImage from '@/components/assets/console.jpeg'; // Adjust the path as needed

export const GamesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div 
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: `url(${consoleImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

   
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          margin: 0;
          padding: 0;
        }
        
        * {
          transition: all 0.3s ease;
        }
      `}</style>

      <div className="flex-grow relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       
          <div className="text-center mb-12">
            <h1 
              className="text-5xl md:text-7xl font-bold mb-4"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                background: 'linear-gradient(135deg, #1d3cd7 0%, #4964ed 50%, #16adf3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(255,255,255,0.2)'
              }}
            >
              Games
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Discover and play the latest games from talented developers
            </p>
          </div>

          
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl 
                         text-white placeholder-white/60 focus:outline-none 
                         focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 
                         transition-all duration-300 shadow-lg hover:bg-white/15"
                style={{ fontFamily: "'Inter', sans-serif" }}
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

          <div className="max-w-2xl mx-auto text-center">
            <div className="text-7xl mb-6 opacity-80"></div>
            <h2 
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              No Games Available Yet
            </h2>
            <p className="text-white/80 text-lg max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              We're working on bringing you amazing games. Please check back later!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};