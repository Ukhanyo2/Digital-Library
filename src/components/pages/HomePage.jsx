export const HomePage = () => {
  // Sample book cover data - replace with actual books from your library
  const featuredBooks = [
    {
      id: 1,
      title: "The Art of Elegance",
      author: "Unknown",
      cover: "https://images.unsplash.com/photo-1507842217343-583f7270bfbb?w=400&h=600&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Luxury Collections",
      author: "Premium Author",
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Modern Aesthetics",
      author: "Design Master",
      cover: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=400&h=600&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Cultural Tapestry",
      author: "Heritage Guide",
      cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=600&fit=crop&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section with Background Image */}
      <div 
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&q=80")',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to Digital Library
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light tracking-wide">
            Discover thousands of books. Download instantly. Read anywhere.
          </p>
          <a
            href="/library"
            className="inline-block px-10 py-4 border-2 border-white text-white font-serif text-lg hover:bg-white hover:text-black transition duration-300 ease-out tracking-widest"
          >
            EXPLORE LIBRARY →
          </a>
        </div>

        {/* Location Tag - Bottom Right */}
        <div className="absolute bottom-8 right-8 z-20">
          <p className="text-sm tracking-widest uppercase text-gray-300 font-light">
            Premium Collection
          </p>
        </div>
      </div>

      {/* Premium Book Grid Section */}
      <div className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-center mb-4 text-white">
            Featured Collection
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg font-light tracking-wide">
            Curated Selection of Premium Content
          </p>

          {/* Book Cover Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBooks.map((book) => (
              <div 
                key={book.id}
                className="group cursor-pointer transform transition duration-300 hover:scale-105"
              >
                {/* Book Cover */}
                <div className="relative mb-6 overflow-hidden bg-gray-900 aspect-[9/12]">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-b from-black via-black to-gray-900 py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-10 font-light leading-relaxed">
            Join thousands of book enthusiasts exploring our premium collection
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <a
              href="/register"
              className="px-12 py-4 bg-white text-black font-serif font-semibold text-lg hover:bg-gray-200 transition duration-300 tracking-wide"
            >
              CREATE ACCOUNT
            </a>
            <a
              href="/login"
              className="px-12 py-4 border-2 border-white text-white font-serif text-lg hover:bg-white hover:text-black transition duration-300 tracking-wide"
            >
              SIGN IN
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
