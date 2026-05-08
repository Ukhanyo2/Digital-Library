import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export const TopNav = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    await logout()
    navigate('/')
    setMobileMenuOpen(false)
  }

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Main Navigation with Collapsible Components */}
      <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: '#1e4a7a', borderColor: '#2a6199' }}>
        {/* Announcement Banner - Collapses on idle */}
        <div className="announcement-banner border-b py-2 px-4 text-center hidden sm:block" style={{ backgroundColor: '#1e4a7a', borderColor: '#2a6199' }}>
          <p className="text-xs md:text-sm text-white/80 tracking-widest uppercase font-light">
            Digital Library | Premium Collection | Worldwide Access
          </p>
        </div>

        {/* Navigation Content */}
        <div className="nav-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20">
              {/* Logo/Brand */}
              <div className="flex-shrink-0">
                <a href="/" className="text-xl sm:text-2xl font-serif font-bold text-white hover:text-teal-300 transition duration-300">
                  Library
                </a>
              </div>

              {/* Navigation Links - Desktop */}
              <div className="hidden md:flex space-x-2 lg:space-x-8">
                <a href="/" className="text-white/80 hover:text-teal-300 transition text-sm lg:text-base">
                  Home
                </a>
                <a href="/about" className="text-white/80 hover:text-teal-300 transition text-sm lg:text-base">
                  About
                </a>
                <a href="/library" className="text-white/80 hover:text-teal-300 transition text-sm lg:text-base">
                  Library
                </a>
                <a href="/games" className="text-white/80 hover:text-teal-300 transition text-sm lg:text-base">
                  Games
                </a>
                <a href="/events" className="text-white/80 hover:text-teal-300 transition text-sm lg:text-base">
                  Events
                </a>
                <a href="/creatives" className="text-white/80 hover:text-teal-300 transition text-sm lg:text-base">
                  Creatives
                </a>
                <a href="/contacts" className="text-white/80 hover:text-teal-300 transition text-sm lg:text-base">
                  Contacts
                </a>
              </div>

              {/* User Menu - Desktop */}
              <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
                {user ? (
                  <div className="flex items-center space-x-3 lg:space-x-6">
                    <a
                      href="/profile"
                      className="text-white/80 hover:text-teal-300 transition duration-300 text-xs lg:text-sm"
                    >
                      Profile
                    </a>
                    <span className="text-xs text-white/60 font-light tracking-wide hidden lg:inline">
                      <span className="text-teal-300 font-semibold">{user.email}</span>
                    </span>
                    <button
                      onClick={handleLogout}
                      className="px-3 lg:px-4 py-1 lg:py-2 text-white border border-white/30 font-light tracking-widest uppercase text-xs hover:bg-teal-600 hover:border-teal-600 hover:text-white transition duration-300 rounded-full"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 lg:space-x-4">
                    <a
                      href="/login"
                      className="text-white/80 font-light tracking-widest uppercase text-xs hover:text-teal-300 transition duration-300"
                    >
                      Sign In
                    </a>
                    <a
                      href="/register"
                      className="px-3 lg:px-6 py-1 lg:py-2 border border-white/30 text-white/80 font-light tracking-widest uppercase text-xs hover:bg-teal-600 hover:border-teal-600 hover:text-white transition duration-300 rounded-full"
                    >
                      Register
                    </a>
                  </div>
                )}

                {/* Location Tag */}
                <div className="text-right border-l pl-3 lg:pl-4 hidden lg:block" style={{ borderColor: '#2a6199' }}>
                  <p className="text-xs text-white/60 font-light tracking-widest uppercase">
                    Global
                  </p>
                </div>
              </div>

              {/* Hamburger Menu - Mobile */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t" style={{ backgroundColor: '#1e4a7a', borderColor: '#2a6199' }}>
              <div className="px-4 pt-2 pb-4 space-y-2">
                <a
                  href="/"
                  onClick={handleNavClick}
                  className="block text-white/80 hover:text-teal-300 transition py-2 text-sm"
                >
                  Home
                </a>
                <a
                  href="/about"
                  onClick={handleNavClick}
                  className="block text-white/80 hover:text-teal-300 transition py-2 text-sm"
                >
                  About
                </a>
                <a
                  href="/library"
                  onClick={handleNavClick}
                  className="block text-white/80 hover:text-teal-300 transition py-2 text-sm"
                >
                  Library
                </a>
                <a
                  href="/games"
                  onClick={handleNavClick}
                  className="block text-white/80 hover:text-teal-300 transition py-2 text-sm"
                >
                  Games
                </a>
                <a
                  href="/events"
                  onClick={handleNavClick}
                  className="block text-white/80 hover:text-teal-300 transition py-2 text-sm"
                >
                  Events
                </a>
                <a
                  href="/creatives"
                  onClick={handleNavClick}
                  className="block text-white/80 hover:text-teal-300 transition py-2 text-sm"
                >
                  Creatives
                </a>
                <a
                  href="/contacts"
                  onClick={handleNavClick}
                  className="block text-white/80 hover:text-teal-300 transition py-2 text-sm"
                >
                  Contacts
                </a>

                {/* Mobile User Menu */}
                <div className="border-t pt-4" style={{ borderColor: '#2a6199' }}>
                  {user ? (
                    <div className="space-y-2">
                      <a
                        href="/profile"
                        onClick={handleNavClick}
                        className="block text-white/80 hover:text-teal-300 transition py-2 text-sm"
                      >
                        Profile
                      </a>
                      <p className="text-xs text-white/60 py-2 truncate">
                        {user.email}
                      </p>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-white border border-white/30 font-light tracking-widest uppercase text-xs hover:bg-teal-600 hover:border-teal-600 hover:text-white transition duration-300 rounded-full"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <a
                        href="/login"
                        onClick={handleNavClick}
                        className="block text-white/80 font-light tracking-widest uppercase text-xs hover:text-teal-300 transition py-2"
                      >
                        Sign In
                      </a>
                      <a
                        href="/register"
                        onClick={handleNavClick}
                        className="block px-4 py-2 border border-white/30 text-white/80 font-light tracking-widest uppercase text-xs hover:bg-teal-600 hover:border-teal-600 hover:text-white transition duration-300 rounded-full text-center"
                      >
                        Register
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}