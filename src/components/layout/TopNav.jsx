import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export const TopNav = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <>
      {/* Announcement Banner  */}
      <div className="border-b py-2 px-4 text-center" style={{ backgroundColor: '#1e4a7a', borderColor: '#2a6199' }}>
        <p className="text-xs md:text-sm text-white/80 tracking-widest uppercase font-light">
          Digital Library | Premium Collection | Worldwide Access
        </p>
      </div>

      {/* Main Navigation  */}
      <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: '#1e4a7a', borderColor: '#2a6199' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-serif font-bold text-white hover:text-teal-300 transition duration-300">
                Library
              </a>
            </div>

            {/* Navigation Links - Updated hover colors */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-white/80 hover:text-teal-300 transition">
                Home
              </a>
              <a href="/about" className="text-white/80 hover:text-teal-300 transition">
                About
              </a>
              <a href="/library" className="text-white/80 hover:text-teal-300 transition">
                Library
              </a>
              <a href="/games" className="text-white/80 hover:text-teal-300 transition">
                Games
              </a>
              <a href="/events" className="text-white/80 hover:text-teal-300 transition">
                Events
              </a>
              <a href="/creatives" className="text-white/80 hover:text-teal-300 transition">
                Creatives
              </a>
              <a href="/contacts" className="text-white/80 hover:text-teal-300 transition">
                Contacts
              </a>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-6">
              {user ? (
                <div className="flex items-center space-x-6">
                  <span className="text-xs text-white/60 font-light tracking-wide hidden sm:inline">
                    <span className="text-teal-300 font-semibold">{user.email}</span>
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-white border border-white/30 font-light tracking-widest uppercase text-xs hover:bg-teal-600 hover:border-teal-600 hover:text-white transition duration-300 rounded-full"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <a
                    href="/login"
                    className="text-white/80 font-light tracking-widest uppercase text-xs hover:text-teal-300 transition duration-300"
                  >
                    Sign In
                  </a>
                  <a
                    href="/register"
                    className="px-6 py-2 border border-white/30 text-white/80 font-light tracking-widest uppercase text-xs hover:bg-teal-600 hover:border-teal-600 hover:text-white transition duration-300 rounded-full"
                  >
                    Register
                  </a>
                </div>
              )}

              {/* Location Tag */}
              <div className="text-right border-l pl-4" style={{ borderColor: '#2a6199' }}>
                <p className="text-xs text-white/60 font-light tracking-widest uppercase">
                  Global
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}