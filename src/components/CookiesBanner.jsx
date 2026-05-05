import { useState, useEffect } from 'react'
import { initGA } from '@/lib/analytics'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted')
    if (!cookiesAccepted) {
      setShowBanner(true)
    } else if (cookiesAccepted === 'true') {
      initGA()
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    initGA()
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 text-sm"
          >
            Accept
          </button>
          <button
            onClick={declineCookies}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner