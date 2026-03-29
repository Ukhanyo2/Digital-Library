// src/components/pages/RegistrationPage.jsx 
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { supabase } from '@/services/supabaseClient'
import { userService } from '@/services/userService'

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
      // But we can also manually create it if needed
      if (authData.user) {
        // Wait a moment for the trigger to fire
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Try to get the profile (it should exist from the trigger)
        const profile = await userService.getCurrentUserProfile();
        
        if (!profile) {
          // If profile doesn't exist, create it manually
          await supabase.from('user_profiles').insert({
            id: authData.user.id,
            email: formData.email,
            name: formData.name,
          });
        }
      }

      // Redirect to login or directly to library
      navigate(redirectPath, { replace: true })
    } catch (err) {
      setError(err.message || 'An error occurred during registration')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    // ... rest of your JSX remains the same
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#2a6199' }}>
      {/* ... your existing JSX ... */}
    </div>
  )
}