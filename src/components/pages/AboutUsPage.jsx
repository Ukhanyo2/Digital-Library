// src/components/pages/AboutUsPage.jsx
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const AboutUsPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2a6199' }}>
      {/* Import fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          background-color: #2a6199;
          margin: 0;
          padding: 0;
        }
        
        * {
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Main Content Container */}
      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #fff 0%, #e0f2fe 50%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(255,255,255,0.2)'
            }}
          >
            Digital Library
          </h1>
        </div>

        {/* Main Grid Container */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/src/components/assets/IMG-20260302-WA0018.jpg"
                alt="Digital Library"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a6199]/60 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Mission Statement */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Bridging Aspiring Writers to Success
              </h2>
            </div>
            
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                The Dream City project is a digital library and ecommerce store. This initiative aims to bridge the gap between aspiring writers and the resources they need to succeed, fostering a vibrant community of creativity and collaboration.
              </p>
              
              <p>
                By providing access to valuable information and tools, the Dream City project empowers individuals to enhance their skills and contribute meaningfully to society. Through workshops, mentorship programs, and online platforms, we facilitate networking opportunities and encourage the exchange of ideas.
              </p>
              
              <p className="font-medium text-teal-300">
                Ultimately nurturing the next generation of talented writers and authors who can inspire change and innovation in their communities.
              </p>
            </div>
          </div>
        </div>


          
        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block">
            <button 
              onClick={() => navigate('/library')}
              className="px-10 py-5 bg-white text-[#2a6199] font-bold rounded-full 
                       hover:bg-teal-600 hover:text-white transition-all duration-300 
                       transform hover:-translate-y-1 shadow-2xl hover:shadow-teal-500/30 
                       inline-flex items-center gap-3 group text-lg"
            >
              <span>Explore Library</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};