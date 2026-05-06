import { useState } from 'react'

export const RedemptionForm = ({ bookId, onSuccess, onCancel }) => {
  const [code, setCode] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!code.trim()) {
      setError('Please enter a code')
      return
    }

    setIsVerifying(true)
    setError('')

    // Simulate API call 
    setTimeout(() => {
      setIsVerifying(false)
      // For demo purposes, any code works
      onSuccess()
    }, 1500)
  }

  return (
    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-yellow-400">
      <h4 className="text-white font-serif mb-3">Enter Redemption Code</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="ENTER CODE"
          className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded text-white mb-3 focus:outline-none focus:border-teal-400"
          disabled={isVerifying}
          autoFocus
        />
        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={!code.trim() || isVerifying}
            className="flex-1 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 disabled:opacity-50"
          >
            {isVerifying ? 'Verifying...' : 'Unlock'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}