// src/components/TermsModal.jsx
import { useState, useEffect } from 'react'

export const TermsModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem('termsAccepted')
    if (!hasAccepted) {
      setIsOpen(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('termsAccepted', 'true')
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#1e4a7a] rounded-2xl border border-white/20 max-w-lg w-full p-6">
        <h2 className="font-serif text-2xl font-bold text-white mb-4">Terms & Conditions</h2>
        <p className="text-white/70 text-sm mb-6">
          By continuing to use our website, you agree to our Terms and Conditions and Privacy Policy.
        </p>
        <div className="flex gap-4">
          <a href="/terms" target="_blank" className="text-teal-300 hover:text-teal-200 text-sm">
            Read Terms
          </a>
          <button
            onClick={handleAccept}
            className="flex-1 px-4 py-2 bg-white text-[#2a6199] rounded-full hover:bg-teal-600 hover:text-white transition"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  )
}