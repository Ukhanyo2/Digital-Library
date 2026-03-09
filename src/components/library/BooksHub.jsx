import { useState } from 'react'
import { BooksList } from './BooksList'
import { useBooks } from '@/hooks/useBooks'
import { AuthGate } from './AuthGate'
import { ChevronRight, Bookmark, Lock } from 'lucide-react'

export const BooksHub = () => {
  const [selectedType, setSelectedType] = useState(null) // null, 'FREE', 'CODED'
  const { freeBooks, codedBooks, isLoading } = useBooks()

  // Hub view: Choose book type
  if (!selectedType) {
    return (
      <div className="min-h-screen bg-black text-white font-sans">
        {/* Hero Section with Two Main Blocks */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Main Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Free Access Books Block */}
            <div
              onClick={() => setSelectedType('FREE')}
              className="group cursor-pointer p-12 bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-white transition duration-300 relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-4xl font-bold text-white">
                    Free Access Books
                  </h2>
                  <ChevronRight size={32} className="text-gray-400 group-hover:text-white transition duration-300" />
                </div>
                
                <p className="text-gray-300 font-light mb-8 leading-relaxed">
                  Discover our carefully curated collection of freely accessible literature. No restrictions, no codes required.
                </p>
                
                <div className="space-y-4">
                  <p className="font-serif text-sm tracking-widest uppercase text-yellow-400">
                    COLLECTION SIZE: {freeBooks.length} TITLES
                  </p>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectedType('FREE')
                    }}
                    className="inline-block px-8 py-3 border border-white text-white font-serif text-lg hover:bg-white hover:text-black transition duration-300 tracking-wide uppercase"
                  >
                    View Collection
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Books Block */}
            <div
              onClick={() => setSelectedType('CODED')}
              className="group cursor-pointer p-12 bg-gradient-to-br from-gray-950 via-black to-black border-2 border-yellow-400 hover:border-white transition duration-300 relative overflow-hidden shadow-2xl"
            >
              {/* Gold accent background */}
              <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-10 transition duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Bookmark size={28} className="text-yellow-400" />
                    <h2 className="font-serif text-4xl font-bold text-white">
                      Premium Books
                    </h2>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-yellow-400 font-semibold">
                    EXCLUSIVE
                  </span>
                </div>
                
                <p className="text-gray-300 font-light mb-8 leading-relaxed">
                  Access our exclusive premium collection with a receipt code. Unlock rare editions and curated selections.
                </p>
                
                <div className="space-y-4">
                  <p className="font-serif text-sm tracking-widest uppercase text-yellow-400">
                    PREMIUM TITLES: {codedBooks.length} WORKS
                  </p>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectedType('CODED')
                    }}
                    className="inline-block px-8 py-3 bg-yellow-400 text-black font-serif text-lg hover:bg-white transition duration-300 tracking-wide uppercase font-semibold"
                  >
                    Explore Premium
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Editor's Choice Featured Section */}
          <div className="mb-20 border-t border-gray-800 pt-20">
            <h3 className="font-serif text-3xl font-bold mb-8 tracking-wide uppercase">
              Featured: Book of the Month
            </h3>
            
            <div className="relative w-full h-64 md:h-80 bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-gray-800 overflow-hidden group cursor-pointer">
              {/* Background pattern */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition duration-500"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1507842217343-583f7270bfbb?w=1200&h=400&fit=crop&q=80")'
                }}
              ></div>
              
              {/* Content overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end p-12">
                <h4 className="font-serif text-3xl font-bold text-white mb-2">
                  Timeless Narratives
                </h4>
                <p className="text-gray-300 font-light max-w-2xl mb-6">
                  This month's featured selection celebrates the art of storytelling across cultures and centuries. Discover profound narratives that resonate with contemporary readers.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-white transition duration-300 font-serif font-semibold uppercase tracking-wide"
                >
                  Explore Selection <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Book Club Registration Block */}
          <div className="border-t border-gray-800 pt-20">
            <h3 className="font-serif text-3xl font-bold mb-8 tracking-wide uppercase">
              Community
            </h3>
            
            <a
              href="/book-club-register"
              className="group block p-12 bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-yellow-400 transition duration-300 relative overflow-hidden"
            >
              {/* Hover accent */}
              <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-5 transition duration-300"></div>
              
              <div className="relative z-10">
                <h4 className="font-serif text-3xl font-bold text-white mb-4">
                  Join Book Club
                </h4>
                <p className="text-gray-300 font-light mb-6 max-w-2xl leading-relaxed">
                  Connect with fellow book enthusiasts, participate in curated discussions, and gain exclusive access to author events and literary programming.
                </p>
                <div className="flex items-center gap-2 text-yellow-400 group-hover:text-white transition duration-300 font-serif font-semibold uppercase tracking-widest text-sm">
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
  const books = selectedType === 'FREE' ? freeBooks : codedBooks
  const isCoded = selectedType === 'CODED'
  const bookType = isCoded ? 'coded' : 'free'

  const bookListContent = (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <button
          onClick={() => setSelectedType(null)}
          className="mb-12 px-6 py-3 border border-gray-700 text-gray-300 hover:border-white hover:text-white transition duration-300 font-serif uppercase text-sm tracking-widest"
        >
          ← Back to Library
        </button>

        <div className="mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-white">
            {isCoded ? 'Premium Collection' : 'Free Access'}
          </h1>
          <p className="text-gray-400 font-light text-lg max-w-2xl leading-relaxed">
            {isCoded
              ? 'Exclusive premium selections. Unlock with your receipt code to access rare and curated titles.'
              : 'Freely accessible literature curated for your discovery. Download instantly and read anywhere.'}
          </p>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="font-serif text-sm tracking-widest uppercase text-yellow-400">
              {isCoded ? 'PREMIUM WORKS' : 'COLLECTION SIZE'}: {books.length} TITLES
            </p>
          </div>
        </div>

        {/* Premium Access Receipt Code Section - Only for Coded Books */}
        {isCoded && (
          <PremiumAccessSection />
        )}

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

  const handleSubmitCode = async (e) => {
    e.preventDefault()
    if (!receiptCode.trim()) return

    setCodeStatus('verifying')
    setSubmitted(true)

    try {
      // Simulate receipt code verification
      // In a real app, this would call your backend API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setCodeStatus('success')
      setReceiptCode('')
      setTimeout(() => {
        setSubmitted(false)
        setCodeStatus('idle')
      }, 3000)
    } catch (err) {
      setCodeStatus('error')
      setTimeout(() => {
        setCodeStatus('idle')
      }, 3000)
    }
  }

  return (
    <div className="mb-16 border-b border-gray-800 pb-16">
      <div className="border border-yellow-400 bg-gradient-to-r from-black via-black/80 to-black p-12 relative overflow-hidden group">
        {/* Background accent */}
        <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-5 transition duration-300"></div>

        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 border border-yellow-400 rounded-lg">
              <Lock size={24} className="text-yellow-400" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Unlock Premium Access
              </h3>
              <p className="text-gray-400 font-light">
                Enter your receipt code to unlock premium titles
              </p>
            </div>
          </div>

          {/* Receipt Code Form */}
          <form onSubmit={handleSubmitCode} className="max-w-md">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="text"
                value={receiptCode}
                onChange={(e) => setReceiptCode(e.target.value.toUpperCase())}
                placeholder="ENTER RECEIPT CODE"
                className="flex-1 px-6 py-3 bg-black border border-gray-700 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition duration-300 font-serif uppercase text-sm tracking-widest"
                disabled={codeStatus === 'verifying'}
              />
              <button
                type="submit"
                disabled={!receiptCode.trim() || codeStatus === 'verifying'}
                className="px-8 py-3 bg-yellow-400 text-black font-serif font-semibold uppercase tracking-widest text-sm hover:bg-white transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {codeStatus === 'verifying' ? 'Verifying...' : 'Verify'}
              </button>
            </div>

            {/* Status Messages */}
            {submitted && (
              <div className={`text-sm font-light tracking-wide p-3 rounded border ${
                codeStatus === 'success'
                  ? 'bg-green-950 border-green-800 text-green-300'
                  : codeStatus === 'error'
                  ? 'bg-red-950 border-red-800 text-red-300'
                  : 'bg-yellow-950 border-yellow-800 text-yellow-300'
              }`}>
                {codeStatus === 'success' && '✓ Code verified! Access granted to all premium titles.'}
                {codeStatus === 'error' && '✗ Invalid code. Please check and try again.'}
                {codeStatus === 'verifying' && 'Verifying your code...'}
              </div>
            )}
          </form>

          {/* Information */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500 font-light leading-relaxed max-w-xl">
              Don't have a receipt code? Visit the <a href="/" className="text-yellow-400 hover:text-white transition duration-300">homepage</a> to learn about premium membership options, or contact our <a href="/contacts" className="text-yellow-400 hover:text-white transition duration-300">support team</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
