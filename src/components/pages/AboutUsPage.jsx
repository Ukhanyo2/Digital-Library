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

        {/* Features Grid */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 font-semibold tracking-wider text-sm uppercase mb-4 border border-teal-500/30">
              What We Offer
            </span>
            
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📚', title: 'Extensive Library', desc: 'Thousands of digital books across all genres', color: 'blue' },
              { icon: '🎮', title: 'Latest Games', desc: 'Discover new releases from talented developers', color: 'teal' },
              { icon: '🎨', title: 'Creative Community', desc: 'Connect with designers and artists worldwide', color: 'blue' },
              { icon: '✨', title: 'Regular Events', desc: 'Workshops, launches, and creative meetups', color: 'teal' }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h3 className={`text-lg font-bold text-${feature.color}-300 mb-2`}>{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-base text-gray-300 leading-relaxed">
              We value <span className="font-semibold text-blue-400 hover:text-yellow-400 transition-colors duration-300">accessibility</span> by making digital content available to everyone, 
              regardless of location or background. We value <span className="font-semibold text-yellow-400 hover:text-blue-400 transition-colors duration-300">innovation</span> by constantly improving 
              and evolving our platform to better serve our community. We value <span className="font-semibold text-blue-400 hover:text-yellow-400 transition-colors duration-300">quality</span> by 
              curating only the best content and maintaining high standards across all offerings.
            </p>
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