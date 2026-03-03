import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useRedemption } from '@/hooks/useRedemption'

export const RedemptionForm = ({ bookId, onSuccess, onCancel }) => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { redeemCode } = useRedemption()
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Check if user is authenticated
    if (!user) {
      // Redirect to login with return path
      navigate(`/register?redirect=${encodeURIComponent(window.location.pathname)}`, { replace: false })
      return
    }

    setLoading(true)

    try {
      const result = await redeemCode(user.id, bookId, code)

      if (result.success) {
        onSuccess()
      } else {
        setError(result.error || result.message || 'Failed to redeem code')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-yellow-50 p-4 rounded-lg mb-4 border border-yellow-200">
      <label className="block text-sm font-medium mb-2">Enter Receipt Code</label>
      {!user && (
        <p className="text-sm text-blue-600 mb-3">You'll need to log in to redeem this code.</p>
      )}
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value.toUpperCase())}
        placeholder="e.g., BOOK-ABC-123"
        className="w-full px-3 py-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={loading}
        autoFocus
      />
      {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading || !code.trim()}
          className="flex-1 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400 transition font-medium"
        >
          {loading ? 'Validating...' : 'Redeem Code'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-2 bg-gray-300 rounded hover:bg-gray-400 transition font-medium"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
