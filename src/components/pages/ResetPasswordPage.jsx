// src/components/pages/ResetPasswordPage.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '@/services/supabaseClient'

export const ResetPasswordPage = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1))
    const accessToken = hashParams.get('access_token')
    
    if (!accessToken) {
      navigate('/login')
    }
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      const { error: updateError } = await supabase.auth.updateUser({
        password: password
      })

      if (updateError) {
        setError(updateError.message)
      } else {
        setSuccess(true)
        setTimeout(() => {
          navigate('/login')
        }, 3000)
      }
    } catch (err) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#2a6199' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 w-full max-w-md shadow-2xl">
        <h1 
          className="font-serif text-4xl font-bold mb-2"
          style={{ 
            fontFamily: "'Playfair Display', serif",
            background: 'linear-gradient(135deg, #fff 0%, #e0f2fe 50%, #fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(255,255,255,0.2)'
          }}
        >
          Reset Password
        </h1>
        <p className="text-white/60 mb-8 font-light tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
          Enter your new password
        </p>

        {success ? (
          <div className="text-center">
            <p className="text-teal-300 text-lg mb-4">Password updated successfully!</p>
            <p className="text-white/60">Redirecting to login...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-light tracking-widest uppercase text-white/60 mb-3">
                New Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition duration-300 rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-light tracking-widest uppercase text-white/60 mb-3">
                Confirm New Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition duration-300 rounded-xl"
                required
              />
            </div>

            {error && (
              <p className="text-red-300 text-sm bg-red-500/20 border border-red-400/30 p-4 rounded-xl font-light">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-white text-[#2a6199] font-serif font-semibold text-lg 
                       rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 
                       transform hover:-translate-y-1 shadow-2xl hover:shadow-teal-500/30 
                       disabled:opacity-50 disabled:cursor-not-allowed tracking-wide uppercase"
            >
              {loading ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}