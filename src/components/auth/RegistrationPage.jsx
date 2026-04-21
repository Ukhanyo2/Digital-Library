// src/components/pages/RegistrationPage.jsx
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { supabase } from '@/services/supabaseClient'
// Add this right after the useState declarations in RegistrationPage
console.log('🔍 Checking Supabase credentials:')
console.log('URL:', import.meta.env.VITE_SUPABASE_URL)
console.log('Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY)
export const RegistrationPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const redirectPath = searchParams.get('redirect') || '/library'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validate
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      // Sign up with Supabase Auth - include user metadata
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
          }
        }
      })

      if (authError) {
        setError(authError.message)
        return
      }

      // The trigger will automatically create the user profile
      // Redirect to login page after successful registration
      alert('Registration successful! Please check your email to confirm your account.')
      navigate('/login', { replace: true })
    } catch (err) {
      setError(err.message || 'An error occurred during registration')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#2a6199' }}>
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

      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
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
          Create Account
        </h1>
        <p className="text-white/60 mb-8 font-light tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
          Register for exclusive access
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-light tracking-widest uppercase text-white/60 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition duration-300 rounded-xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-light tracking-widest uppercase text-white/60 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition duration-300 rounded-xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-light tracking-widest uppercase text-white/60 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition duration-300 rounded-xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-light tracking-widest uppercase text-white/60 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition duration-300 rounded-xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
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
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none 
                     tracking-wide uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {loading ? 'Creating account...' : 'Register'}
          </button>
        </form>

        <p className="text-sm text-white/50 mt-8 text-center font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
          Already have an account?{' '}
          <a
            href={`/login?redirect=${encodeURIComponent(redirectPath)}`}
            className="text-teal-300 hover:text-teal-200 font-semibold transition duration-300"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}