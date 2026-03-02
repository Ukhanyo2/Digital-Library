import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useUserAccess } from '@/hooks/useUserAccess'
import { RedemptionForm } from './RedemptionForm'
import { Download, Lock, ChevronRight } from 'lucide-react'

export const BookCard = ({ book, isCoded }) => {
  const { user } = useAuth()
  const { checkAccess, grantAccess } = useUserAccess()
  const [showRedemption, setShowRedemption] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [hasAccess, setHasAccess] = useState(false)
  const [checking, setChecking] = useState(isCoded)

  // Check access on mount for coded books
  useEffect(() => {
    const checkUserAccess = async () => {
      if (isCoded && user?.id && book?.id) {
        const access = await checkAccess(user.id, book.id)
        setHasAccess(access)
        setChecking(false)
      }
    }
    checkUserAccess()
  }, [isCoded, user, book, checkAccess])

  const handleDownload = async () => {
    if (!isCoded) {
      // Free book - grant access and download
      if (user?.id && book?.id && !hasAccess) {
        await grantAccess(user.id, book.id, 'FREE')
        setHasAccess(true)
      }
      initiateDownload()
      return
    }

    // Coded book - check access or show redemption
    if (hasAccess) {
      initiateDownload()
    } else {
      setShowRedemption(true)
    }
  }

  const initiateDownload = async () => {
    setIsDownloading(true)
    try {
      if (book.pdf_url) {
        window.open(book.pdf_url, '_blank')
      } else {
        alert('Download link not available')
      }
    } catch (err) {
      console.error('Download error:', err)
      alert('Failed to download book')
    } finally {
      setIsDownloading(false)
    }
  }

  const handleRedemptionSuccess = () => {
    setShowRedemption(false)
    setHasAccess(true)
    initiateDownload()
  }

  // Extract year from description or use placeholder
  const year = book.year || new Date().getFullYear()

  return (
    <div className="group flex flex-col h-full">
      {/* Book Cover Container */}
      <div className="relative mb-6 overflow-hidden bg-gray-900 aspect-[9/12] border border-gray-800 group-hover:border-white transition duration-300">
        {book.cover_url ? (
          <img
            src={book.cover_url}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-gray-500 font-serif">
            <span className="text-center text-sm">No Cover Available</span>
          </div>
        )}

        {/* Lock Badge for Premium Books */}
        {isCoded && !hasAccess && (
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-yellow-400 p-2 rounded-full border border-yellow-400">
            <Lock size={18} />
          </div>
        )}

        {/* Premium Badge */}
        {isCoded && hasAccess && (
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-serif tracking-widest uppercase border border-white">
            Unlocked
          </div>
        )}
      </div>

      {/* Book Metadata - Luxury Lookbook Style */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-serif text-lg text-white mb-2 group-hover:text-yellow-400 transition duration-300 line-clamp-2">
          {book.title}
        </h3>

        {/* Minimalist Author & Year Tag */}
        <p className="text-xs text-gray-400 font-light tracking-widest uppercase mb-4">
          BY {book.author || 'UNKNOWN AUTHOR'} | {year}
        </p>

        {/* Description */}
        {book.description && (
          <p className="text-xs text-gray-500 font-light leading-relaxed mb-4 line-clamp-2">
            {book.description}
          </p>
        )}

        {/* File Size */}
        {book.file_size_mb && (
          <p className="text-xs text-gray-600 font-light mb-6">
            {book.file_size_mb} MB
          </p>
        )}

        {/* Redemption Form */}
        {showRedemption && (
          <div className="mb-6 p-4 border border-yellow-400 bg-black/50 rounded">
            <RedemptionForm
              bookId={book.id}
              onSuccess={handleRedemptionSuccess}
              onCancel={() => setShowRedemption(false)}
            />
          </div>
        )}

        {/* Download Button */}
        <button
          onClick={handleDownload}
          disabled={isDownloading || checking}
          className="mt-auto w-full py-3 border border-white text-white hover:bg-white hover:text-black transition duration-300 font-serif font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download size={16} />
          {isDownloading 
            ? 'Downloading...' 
            : isCoded 
              ? (hasAccess ? 'Download' : checking ? 'Checking...' : 'Unlock') 
              : 'Download'}
          <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition duration-300" />
        </button>
      </div>
    </div>
  )
}
