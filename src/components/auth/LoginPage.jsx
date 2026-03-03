import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { supabase } from '@/services/supabaseClient'

export const LoginPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    setLoading(true)

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (signInError) {
        setError(signInError.message)
        return
      }

      if (data.user) {
        navigate(redirectPath, { replace: true })
      }
    } catch (err) {
      setError(err.message || 'An error occurred during login')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative bg-gray-950 border border-gray-800 rounded-none p-12 w-full max-w-md shadow-2xl">
        <h1 className="font-serif text-4xl font-bold mb-2 text-white">Sign In</h1>
        <p className="text-gray-400 mb-8 font-light tracking-wide">Access your premium collection</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-light tracking-widest uppercase text-gray-300 mb-3">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-light tracking-widest uppercase text-gray-300 mb-3">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
              required
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-950 border border-red-800 p-4 rounded">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-white text-black font-serif font-semibold text-lg hover:bg-gray-200 disabled:bg-gray-600 transition duration-300 tracking-wide uppercase"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-8 text-center font-light">
          Don't have an account?{' '}
          <a
            href={`/register?redirect=${encodeURIComponent(redirectPath)}`}
            className="text-yellow-400 hover:text-yellow-300 font-semibold transition"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  )
}
