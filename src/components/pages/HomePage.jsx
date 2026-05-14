import { useAuth } from '@/hooks/useAuth'

export const HomePage = () => {
  const { user } = useAuth()
  
  const featuredBooks = [
    {
      id: 'featured-1',
      title: "Dream City",
      author: "The Dream City Projects",
      cover: "/images/Dream CIty.jpg",
      file: "/books/dream-city.pdf"
    },
    {
      id: 'featured-2',
      title: "Cayla Dowie The Dream City and The Fairy",
      author: "The Dream City Projects",
      cover: "/images/Cayla Dowie The Dream City And The Fairy.jpg",
      file: "/books/cayla-dowie.pdf"
    },
    {
      id: 'featured-3',
      title: "Picturebook 1",
      author: "The Dream City Projects",
      cover: "/images/Picturebook 1.jpg",
      file: "/books/picturebook-1.pdf"
    },
    {
      id: 'featured-4',
      title: "The Dream City children's book",
      author: "The Dream City Projects",
      cover: "/images/The Dream City children's book (1).jpg",
      file: "/books/dream-city-children.pdf"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section with Background Image */}
      <div 
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden hero-section pt-24 sm:pt-32 md:pt-40 lg:pt-48 xl:pt-56"
        style={{
          backgroundImage: 'url("/images/hero-lifestyle.jpg")',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Welcome to Digital Library
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-12 font-light tracking-wide">
            Discover thousands of books. Download instantly. Read anywhere.
          </p>
          <a
            href="/library"
            className="inline-block px-6 sm:px-10 py-2 sm:py-4 border-2 border-white text-white font-serif text-sm sm:text-lg hover:bg-white hover:text-black transition duration-300 ease-out tracking-widest"
          >
            EXPLORE LIBRARY →
          </a>
        </div>

        {/* Location Tag - Bottom Right */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-20">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-300 font-light">
            Premium Collection
          </p>
        </div>
      </div>

      {/* Premium Book Grid Section */}
      <div className="py-12 sm:py-24 px-4 sm:px-6" style={{ backgroundColor: '#1e4a7a' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm font-light tracking-widest uppercase">
            COLLECTION SIZE: {featuredBooks.length} TITLES
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-center mb-3 sm:mb-4 text-white">
            Featured Collection
          </h2>
          <p className="text-center text-gray-300 mb-8 sm:mb-16 text-sm sm:text-lg font-light tracking-wide">
            Curated Selection of Premium Content
          </p>

          {/* Book Cover Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBooks.map((book) => (
              <a
                key={book.id}
                href={book.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer transform transition duration-300 hover:scale-105 block"
              >

                {/* Book Cover */}
                <div className="relative mb-6 overflow-hidden bg-gray-800 aspect-[9/12] rounded-sm">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"%3E%3Crect fill="%23374151" width="300" height="400"/%3E%3Ctext x="50" y="200" font-size="16" fill="%239CA3AF" font-family="Arial"%3EBook Cover%3C/text%3E%3C/svg%3E'; }}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
                </div>

                {/* Book Info */}
                <div className="text-center">
                  <h3 className="font-serif text-lg text-white mb-2 group-hover:text-yellow-400 transition duration-300">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light tracking-wide uppercase">
                    {book.author}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Hidden if user is logged in */}
      {!user && (
        <div className="relative py-12 sm:py-20 px-4 sm:px-6 border-t" style={{ backgroundColor: '#1e4a7a', borderColor: '#2a6199' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-10 font-light leading-relaxed">
              Join thousands of book enthusiasts exploring our premium collection
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 items-center">
              <a
                href="/register"
                className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-white text-black font-serif font-semibold text-sm sm:text-lg hover:bg-gray-200 transition duration-300 tracking-wide text-center"
              >
                CREATE ACCOUNT
              </a>
              <a
                href="/login"
                className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 border-2 border-white text-white font-serif text-sm sm:text-lg hover:bg-white hover:text-black transition duration-300 tracking-wide text-center"
              >
                SIGN IN
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
