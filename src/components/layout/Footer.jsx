import { Mail, Instagram, Youtube, Twitter } from 'lucide-react'
import { useState } from 'react'

export const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="border-t" style={{ backgroundColor: '#1e4a7a', borderColor: '#2a6199' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Newsletter Subscription */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg font-bold tracking-widest uppercase mb-2 text-white">
                Stay Inspired
              </h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                Be the first to know about new book arrivals, literary events, and exclusive digital collections.
              </p>
            </div>

            {/* Email Input with Subscribe Button */}
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex items-center border border-white/30 rounded-full px-5 py-3 transition duration-300 hover:border-teal-400" style={{ backgroundColor: '#2a6199' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 bg-transparent text-white placeholder-white/50 outline-none text-sm font-light"
                  required
                />
                <button
                  type="submit"
                  className="ml-3 text-white/80 hover:text-teal-300 transition duration-300"
                >
                  <Mail size={18} />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-teal-300 mt-2 font-light">Thank you for subscribing!</p>
              )}
            </form>

            {/* Social Media Icons  */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.youtube.com/@thedreamcityprojects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-teal-300 transition duration-300 border border-white/20 rounded-full p-2 hover:border-teal-400"
                title="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://twitter.com/dreamcityprojects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-teal-300 transition duration-300 border border-white/20 rounded-full p-2 hover:border-teal-400"
                title="X (Twitter)"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com/dreamcityprojects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-teal-300 transition duration-300 border border-white/20 rounded-full p-2 hover:border-teal-400"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Library */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-bold tracking-widest uppercase text-white">Library</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-white/60 text-sm font-light hover:text-teal-300 transition duration-300 tracking-wide"
                >
                  About Our Mission
                </a>
              </li>
              <li>
                <a
                  href="/library"
                  className="text-white/60 text-sm font-light hover:text-teal-300 transition duration-300 tracking-wide"
                >
                  The Archive
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white/60 text-sm font-light hover:text-teal-300 transition duration-300 tracking-wide"
                >
                  Our Partners
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white/60 text-sm font-light hover:text-teal-300 transition duration-300 tracking-wide"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-bold tracking-widest uppercase text-white">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/library"
                  className="text-white/60 text-sm font-light hover:text-teal-300 transition duration-300 tracking-wide"
                >
                  New Releases
                </a>
              </li>
              <li>
                <a
                  href="/library"
                  className="text-white/60 text-sm font-light hover:text-teal-300 transition duration-300 tracking-wide"
                >
                  Curated Collections
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white/60 text-sm font-light hover:text-teal-300 transition duration-300 tracking-wide"
                >
                  Reading Journal
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white/60 text-sm font-light hover:text-teal-300 transition duration-300 tracking-wide"
                >
                  Member Benefits
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-bold tracking-widest uppercase text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/contacts"
                  className="text-white/60 text-sm font-light hover:text-teal-300 transition duration-300 tracking-wide"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/contacts"
                  className="text-white/60 text-sm font-light hover:text-teal-300 transition duration-300 tracking-wide"
                >
                  Borrowing Policy
                </a>
              </li>
              <li>
                <a
                  href="/contacts"
                  className="text-white/60 text-sm font-light hover:text-teal-300 transition duration-300 tracking-wide"
                >
                  Digital Access Guide
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white/60 text-sm font-light hover:text-teal-300 transition duration-300 tracking-wide"
                >
                  Gift Memberships
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider  */}
      <div className="border-t" style={{ borderColor: '#2a6199' }}></div>

      {/* Bottom Bar - Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-center text-xs text-white/40 font-light tracking-widest uppercase">
          © 2026 The Dream City Projects. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}