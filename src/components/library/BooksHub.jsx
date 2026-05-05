import { useState } from 'react'
import { BooksList } from './BooksList'
import { useBooks } from '@/hooks/useBooks'
import { AuthGate } from './AuthGate'
import { ChevronRight, Bookmark, Lock } from 'lucide-react'
import { userService } from '@/services/userService'
import { FEATURED_BOOKS } from '@/constants/featuredBooks'

export const BooksHub = () => {
  const [selectedType, setSelectedType] = useState(null) // null, 'FREE', 'CODED'
  const { freeBooks, codedBooks, isLoading } = useBooks()

  // Hub view: Choose book type
  if (!selectedType) {
    return (
      <div className="min-h-screen text-white font-sans" style={{ backgroundColor: '#2a6199' }}>
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

        {/* Hero Section with Two Main Blocks */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          {/* Main Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Free Access Books Block  */}
            <div
              onClick={() => setSelectedType('FREE')}
              className="group cursor-pointer p-12 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-400 transition-all duration-500 relative overflow-hidden rounded-2xl hover:-translate-y-2"
            >
              {/* Background accent  */}
              <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-5 transition duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Free Access Books
                  </h2>
                  <ChevronRight size={32} className="text-white/40 group-hover:text-teal-300 transition duration-300" />
                </div>
                
                <p className="text-white/70 font-light mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Discover our carefully curated collection of freely accessible literature. No restrictions, no codes required.
                </p>
                
                <div className="space-y-4">
                  <p className="font-serif text-sm tracking-widest uppercase text-teal-300">
                    COLLECTION SIZE: {freeBooks.length + FEATURED_BOOKS.length} TITLES
                  </p>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectedType('FREE')
                    }}
                    className="inline-block px-8 py-3 bg-white text-[#2a6199] font-serif text-lg 
                             rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 
                             transform hover:-translate-y-1 shadow-2xl hover:shadow-teal-500/30 
                             tracking-wide uppercase"
                  >
                    View Collection
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Books Block  */}
            <div
              onClick={() => setSelectedType('CODED')}
              className="group cursor-pointer p-12 bg-white/5 backdrop-blur-sm border-2 border-teal-400 hover:border-teal-300 transition-all duration-500 relative overflow-hidden rounded-2xl hover:-translate-y-2 shadow-2xl"
            >
              <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-10 transition duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Bookmark size={28} className="text-teal-300" />
                    <h2 className="font-serif text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Premium Books
                    </h2>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-teal-300 font-semibold">
                    EXCLUSIVE
                  </span>
                </div>
                
                <p className="text-white/70 font-light mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Access our exclusive premium collection with a receipt code. Unlock rare editions and curated selections.
                </p>
                
                <div className="space-y-4">
                  <p className="font-serif text-sm tracking-widest uppercase text-teal-300">
                    PREMIUM TITLES: {codedBooks.length} WORKS
                  </p>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectedType('CODED')
                    }}
                    className="inline-block px-8 py-3 bg-teal-400 text-[#2a6199] font-serif text-lg 
                             rounded-full hover:bg-teal-300 transition-all duration-300 
                             transform hover:-translate-y-1 shadow-2xl hover:shadow-teal-500/30 
                             tracking-wide uppercase font-semibold"
                  >
                    Explore Premium
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Editor's Choice Featured Section */}
          <div className="mb-20 border-t border-white/10 pt-20">
            <h3 className="font-serif text-3xl font-bold mb-8 tracking-wide uppercase text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Featured: Book of the Month
            </h3>
            
            <div className="relative w-full h-64 md:h-80 bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden group cursor-pointer rounded-2xl">
              {/* Background pattern */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition duration-500"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1507842217343-583f7270bfbb?w=1200&h=400&fit=crop&q=80")'
                }}
              ></div>
              
              <div className="relative z-10 h-full flex flex-col justify-end p-12">
                <h4 className="font-serif text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Timeless Narratives
                </h4>
                <p className="text-white/70 font-light max-w-2xl mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  This month's featured selection celebrates the art of storytelling across cultures and centuries. Discover profound narratives that resonate with contemporary readers.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-teal-300 hover:text-white transition duration-300 font-serif font-semibold uppercase tracking-wide"
                >
                  Explore Selection <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Book Club Registration Block */}
          <div className="border-t border-white/10 pt-20">
            <h3 className="font-serif text-3xl font-bold mb-8 tracking-wide uppercase text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Community
            </h3>
            
            <a
              href="/book-club-register"
              className="group block p-12 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-400 transition-all duration-500 relative overflow-hidden rounded-2xl hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-5 transition duration-300 rounded-2xl"></div>
              {/* Hover accent - updated to teal */}
              <div className="relative z-10">
                <h4 className="font-serif text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Join Book Club
                </h4>
                <p className="text-white/70 font-light mb-6 max-w-2xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Connect with fellow book enthusiasts, participate in curated discussions, and gain exclusive access to author events and literary programming.
                </p>
                <div className="flex items-center gap-2 text-teal-300 group-hover:text-white transition duration-300 font-serif font-semibold uppercase tracking-widest text-sm">
                  Register Now <ChevronRight size={20} />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }

  // Books list view - only use AuthGate for free books
  const books = selectedType === 'FREE' ? [...FEATURED_BOOKS, ...freeBooks] : codedBooks
  const isCoded = selectedType === 'CODED'
  const bookType = isCoded ? 'coded' : 'free'

  const bookListContent = (
    <div className="min-h-screen text-white font-sans" style={{ backgroundColor: '#2a6199' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          background-color: #2a6199;
          margin: 0;
          padding: 0;
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <button
          onClick={() => setSelectedType(null)}
          className="mb-12 px-6 py-3 border border-white/20 text-white/70 hover:border-teal-400 hover:text-teal-300 transition duration-300 font-serif uppercase text-sm tracking-widest rounded-full"
        >
          ← Back to Library
        </button>

        <div className="mb-16">
          <h1 
            className="font-serif text-5xl md:text-6xl font-bold mb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #fff 0%, #e0f2fe 50%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {isCoded ? 'Premium Collection' : 'Free Access'}
          </h1>
          <p className="text-white/70 font-light text-lg max-w-2xl leading-relaxed">
            {isCoded
              ? 'Exclusive premium selections. Unlock with your receipt code to access rare and curated titles.'
              : 'Freely accessible literature curated for your discovery. Download instantly and read anywhere.'}
          </p>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="font-serif text-sm tracking-widest uppercase text-teal-300">
              {isCoded ? 'PREMIUM WORKS' : 'COLLECTION SIZE'}: {books.length} TITLES
            </p>
          </div>
        </div>

        {/* Premium Access Section - Only for Coded Books */}
        {isCoded && <PremiumAccessSection />}

        <BooksList books={books} isLoading={isLoading} isCoded={isCoded} />
      </div>
    </div>
  )

  // For coded books, show redemption form first (no auth gate)
  if (isCoded) {
    return bookListContent
  }

  // For free books, wrap with AuthGate to require login
  return <AuthGate bookType={bookType}>{bookListContent}</AuthGate>
}

// Premium Access Receipt Code Section Component 
const PremiumAccessSection = () => {
  const [receiptCode, setReceiptCode] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [codeStatus, setCodeStatus] = useState('idle') // idle, verifying, success, error
  const [message, setMessage] = useState('')

  const handleSubmitCode = async (e) => {
    e.preventDefault()
    if (!receiptCode.trim()) return

    setCodeStatus('verifying')
    setSubmitted(true)
    setMessage('')

    try {
      const result = await userService.verifyReceiptCode(receiptCode)
      setCodeStatus('success')
      setMessage(result.message)
      setReceiptCode('')
      
      setTimeout(() => {
        setSubmitted(false)
        setCodeStatus('idle')
        setMessage('')
      }, 3000)
    } catch (err) {
      setCodeStatus('error')
      setMessage(err.message)
      setTimeout(() => {
        setCodeStatus('idle')
        setMessage('')
      }, 3000)
    }
  }

  return (
    <div className="mb-16 border-b border-white/10 pb-16">
      <div className="bg-white/5 backdrop-blur-sm border border-teal-400/30 p-12 relative overflow-hidden group rounded-2xl hover:border-teal-400 transition-all duration-500">
        <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-5 transition duration-300 rounded-2xl"></div>

        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 border border-teal-400/30 rounded-lg bg-white/5">
              <Lock size={24} className="text-teal-300" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Unlock Premium Access
              </h3>
              <p className="text-white/70 font-light">
                Enter your receipt code to unlock premium titles
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmitCode} className="max-w-md">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="text"
                value={receiptCode}
                onChange={(e) => setReceiptCode(e.target.value.toUpperCase())}
                placeholder="ENTER RECEIPT CODE"
                className="flex-1 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:border-teal-400 focus:outline-none transition duration-300 font-serif uppercase text-sm tracking-widest rounded-xl"
                disabled={codeStatus === 'verifying'}
              />
              <button
                type="submit"
                disabled={!receiptCode.trim() || codeStatus === 'verifying'}
                className="px-8 py-3 bg-teal-400 text-[#2a6199] font-serif font-semibold uppercase tracking-widest text-sm 
                         rounded-full hover:bg-teal-300 transition-all duration-300 
                         transform hover:-translate-y-1 shadow-2xl hover:shadow-teal-500/30 
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {codeStatus === 'verifying' ? 'Verifying...' : 'Verify'}
              </button>
            </div>

            {submitted && (
              <div className={`text-sm font-light tracking-wide p-3 rounded-xl border ${
                codeStatus === 'success'
                  ? 'bg-teal-500/20 border-teal-400 text-teal-300'
                  : codeStatus === 'error'
                  ? 'bg-red-500/20 border-red-400 text-red-300'
                  : 'bg-teal-500/10 border-teal-400/30 text-teal-300'
              }`}>
                {codeStatus === 'success' && '✓ Code verified! Access granted to all premium titles.'}
                {codeStatus === 'error' && `✗ ${message}`}
                {codeStatus === 'verifying' && 'Verifying your code...'}
              </div>
            )}
          </form>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-xs text-white/40 font-light leading-relaxed max-w-xl">
              Don't have a receipt code? Visit the <a href="/" className="text-teal-300 hover:text-white transition duration-300">homepage</a> to learn about premium membership options, or contact our <a href="/contacts" className="text-teal-300 hover:text-white transition duration-300">support team</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}