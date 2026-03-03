import { Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
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
    <footer className="bg-black text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Newsletter Subscription */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg font-bold tracking-widest uppercase mb-2">
                Stay Inspired
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Be the first to know about new book arrivals, literary events, and exclusive digital collections.
              </p>
            </div>

            {/* Email Input with Subscribe Button */}
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex items-center border border-white rounded-full px-5 py-3 bg-black hover:border-yellow-400 transition duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm font-light"
                  required
                />
                <button
                  type="submit"
                  className="ml-3 text-white hover:text-yellow-400 transition duration-300"
                >
                  <Mail size={18} />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-yellow-400 mt-2 font-light">Thank you for subscribing!</p>
              )}
            </form>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300 border border-gray-700 rounded-full p-2 hover:border-white"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300 border border-gray-700 rounded-full p-2 hover:border-white"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300 border border-gray-700 rounded-full p-2 hover:border-white"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300 border border-gray-700 rounded-full p-2 hover:border-white"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Library */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-bold tracking-widest uppercase">Library</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 text-sm font-light hover:text-white transition duration-300 tracking-wide"
                >
                  About Our Mission
                </a>
              </li>
              <li>
                <a
                  href="/library"
                  className="text-gray-400 text-sm font-light hover:text-white transition duration-300 tracking-wide"
                >
                  The Archive
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 text-sm font-light hover:text-white transition duration-300 tracking-wide"
                >
                  Our Partners
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 text-sm font-light hover:text-white transition duration-300 tracking-wide"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-bold tracking-widest uppercase">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/library"
                  className="text-gray-400 text-sm font-light hover:text-white transition duration-300 tracking-wide"
                >
                  New Releases
                </a>
              </li>
              <li>
                <a
                  href="/library"
                  className="text-gray-400 text-sm font-light hover:text-white transition duration-300 tracking-wide"
                >
                  Curated Collections
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 text-sm font-light hover:text-white transition duration-300 tracking-wide"
                >
                  Reading Journal
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 text-sm font-light hover:text-white transition duration-300 tracking-wide"
                >
                  Member Benefits
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-bold tracking-widest uppercase">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/contacts"
                  className="text-gray-400 text-sm font-light hover:text-white transition duration-300 tracking-wide"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/contacts"
                  className="text-gray-400 text-sm font-light hover:text-white transition duration-300 tracking-wide"
                >
                  Borrowing Policy
                </a>
              </li>
              <li>
                <a
                  href="/contacts"
                  className="text-gray-400 text-sm font-light hover:text-white transition duration-300 tracking-wide"
                >
                  Digital Access Guide
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 text-sm font-light hover:text-white transition duration-300 tracking-wide"
                >
                  Gift Memberships
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Bar - Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-center text-xs text-gray-500 font-light tracking-widest uppercase">
          Copyright © 2026 DIGITAL LIBRARY. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
