// src/components/pages/AboutUsPage.jsx
import { useNavigate } from 'react-router-dom';

export const AboutUsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        
        {/* Hero Section - ABOUT US Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-blue-500 to-blue-500 bg-clip-text text-transparent">
            ABOUT OUR LIBRARY
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're building the future of digital content access, connecting readers, gamers, 
            and creators worldwide.
          </p>
          
          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Vision Card */}
          <div className="group relative">
            <div className="relative bg-gray-50 rounded-3xl p-10 border border-gray-200 
                          hover:border-yellow-400/50 transition-all duration-500 
                          shadow-lg hover:shadow-xl transform hover:-translate-y-2">
              <div className="text-6xl mb-6">🎯</div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 
                           bg-clip-text text-transparent">
                Our Vision
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the world's most accessible and inclusive digital library, where knowledge 
                knows no boundaries and creativity flourishes. We envision a future where everyone 
                has equal access to books, games, and creative resources.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative">
            <div className="relative bg-gray-50 rounded-3xl p-10 border border-gray-200 
                          hover:border-orange-400/50 transition-all duration-500 
                          shadow-lg hover:shadow-xl transform hover:-translate-y-2">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 
                           bg-clip-text text-transparent">
                Our Mission
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To democratize access to digital content while fostering a vibrant community of 
                creators and consumers. We connect authors with readers, developers with gamers, 
                and artists with audiences.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 
                         to-purple-500 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
              A comprehensive platform for all your digital content needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Books Card */}
            <div className="group relative">
              <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200 
                            hover:border-blue-400/50 transition-all duration-500 
                            shadow-md hover:shadow-lg transform hover:-translate-y-2">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-2xl font-bold mb-3 text-blue-600">Books</h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore thousands of digital books across fiction, non-fiction, educational 
                  materials, and more.
                </p>
              </div>
            </div>

            {/* Games Card */}
            <div className="group relative">
              <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200 
                            hover:border-green-400/50 transition-all duration-500 
                            shadow-md hover:shadow-lg transform hover:-translate-y-2">
                <div className="text-5xl mb-4">🎮</div>
                <h3 className="text-2xl font-bold mb-3 text-green-600">Games</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover and play the latest games from talented developers around the world.
                </p>
              </div>
            </div>

            {/* Creatives Card */}
            <div className="group relative">
              <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200 
                            hover:border-purple-400/50 transition-all duration-500 
                            shadow-md hover:shadow-lg transform hover:-translate-y-2">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-3 text-purple-600">Creatives</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with graphic designers, animators, writers, and voice-over artists.
                </p>
              </div>
            </div>

            {/* Events Card */}
            <div className="group relative">
              <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200 
                            hover:border-red-400/50 transition-all duration-500 
                            shadow-md hover:shadow-lg transform hover:-translate-y-2">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-3 text-red-600">Events</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stay updated on book launches, game releases, workshops, and creative meetups.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 
                         to-blue-500 bg-clip-text text-transparent">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Accessibility */}
            <div className="group relative">
              <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200 
                            hover:border-yellow-400/50 transition-all duration-500 
                            shadow-md hover:shadow-lg transform hover:-translate-y-2 text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">Accessibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  Making digital content accessible to everyone, regardless of location or background.
                </p>
              </div>
            </div>

            {/* Innovation */}
            <div className="group relative">
              <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200 
                            hover:border-blue-400/50 transition-all duration-500 
                            shadow-md hover:shadow-lg transform hover:-translate-y-2 text-center">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Constantly improving and evolving our platform to better serve our community.
                </p>
              </div>
            </div>

            {/* Quality */}
            <div className="group relative">
              <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200 
                            hover:border-purple-400/50 transition-all duration-500 
                            shadow-md hover:shadow-lg transform hover:-translate-y-2 text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Curating only the best content and maintaining high standards across all offerings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="relative">
            <div className="relative bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-12 border border-gray-200 shadow-xl">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Join Our Digital Library Today</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Be part of a growing community of readers, gamers, and creators. 
                Start your journey with us today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => navigate('/register')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                           text-white rounded-full font-semibold hover:from-yellow-600 
                           hover:to-orange-600 transition transform hover:-translate-y-1 shadow-md"
                >
                  Create Account
                </button>
                <button
                  onClick={() => navigate('/library')}
                  className="px-8 py-3 bg-white rounded-full font-semibold 
                           hover:bg-gray-50 transition transform hover:-translate-y-1 
                           border border-gray-300 shadow-md text-gray-700"
                >
                  Explore Library
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};