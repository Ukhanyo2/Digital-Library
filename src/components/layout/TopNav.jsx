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
      {/* Announcement Banner */}
      <div className="bg-black border-b border-gray-800 py-2 px-4 text-center">
        <p className="text-xs md:text-sm text-gray-300 tracking-widest uppercase font-light">
          Digital Library | Premium Collection | Worldwide Access
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-serif font-bold text-white hover:text-yellow-400 transition duration-300">
                Library
              </a>
            </div>

            {/* Navigation Links - Centered */}
            <div className="hidden lg:flex space-x-12 absolute left-1/2 transform -translate-x-1/2">
              <a 
                href="/" 
                className="text-white font-light tracking-widest uppercase text-xs hover:text-yellow-400 transition duration-300"
              >
                About
              </a>
              <a 
                href="/library" 
                className="text-white font-light tracking-widest uppercase text-xs hover:text-yellow-400 transition duration-300"
              >
                Library
              </a>
              <a 
                href="/games" 
                className="text-white font-light tracking-widest uppercase text-xs hover:text-yellow-400 transition duration-300"
              >
                Games
              </a>
              <a 
                href="/events" 
                className="text-white font-light tracking-widest uppercase text-xs hover:text-yellow-400 transition duration-300"
              >
                Events
              </a>
              <a 
                href="/contacts" 
                className="text-white font-light tracking-widest uppercase text-xs hover:text-yellow-400 transition duration-300"
              >
                Contacts
              </a>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-6">
              {user ? (
                <div className="flex items-center space-x-6">
                  <span className="text-xs text-gray-300 font-light tracking-wide hidden sm:inline">
                    <span className="text-yellow-400 font-semibold">{user.email}</span>
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-white border border-white font-light tracking-widest uppercase text-xs hover:bg-white hover:text-black transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <a
                    href="/login"
                    className="text-white font-light tracking-widest uppercase text-xs hover:text-yellow-400 transition duration-300"
                  >
                    Sign In
                  </a>
                  <a
                    href="/register"
                    className="px-6 py-2 border border-white text-white font-light tracking-widest uppercase text-xs hover:bg-white hover:text-black transition duration-300"
                  >
                    Register
                  </a>
                </div>
              )}

              {/* Location Tag */}
              <div className="text-right border-l border-gray-700 pl-4">
                <p className="text-xs text-gray-400 font-light tracking-widest uppercase">
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
