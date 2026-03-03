import { BookCard } from './BookCard'

export const BooksList = ({ books, isLoading, isCoded }) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-white border-t-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-400 font-light tracking-widest uppercase text-sm">Loading collection...</p>
        </div>
      </div>
    )
  }

  if (!books || books.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <p className="font-serif text-4xl text-gray-600 mb-4">∼</p>
          <p className="text-gray-400 font-light text-lg">No {isCoded ? 'premium' : 'free'} titles available at this time</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {books.map((book) => (
        <BookCard key={book.id} book={book} isCoded={isCoded} />
      ))}
    </div>
  )
}
