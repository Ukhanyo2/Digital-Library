// App.jsx or routes file
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import { TopNav } from '@/components/layout/TopNav'
import { Footer } from '@/components/layout/Footer'
import { HomePage } from '@/components/pages/HomePage'
import { GamesPage } from '@/components/pages/GamesPage' 
import { AboutUsPage } from '@/components/pages/AboutUsPage'
import { BooksHub } from '@/components/library/BooksHub'
import { ContactsPage } from '@/components/pages/ContactsPage'
import { RegistrationPage } from '@/components/auth/RegistrationPage'
import { LoginPage } from '@/components/auth/LoginPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/library/*" element={<BooksHub />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      
      {/* Placeholder routes */}
      <Route path="/games" element={<div className="p-6"><h1 className="text-2xl">Games Coming Soon</h1></div>} />
      <Route path="/events" element={<div className="p-6"><h1 className="text-2xl">Events Coming Soon</h1></div>} />
      <Route path="/contacts" element={<div className="p-6"><h1 className="text-2xl">Contacts Coming Soon</h1></div>} />
      <Route path="/book-club-register" element={<div className="p-6"><h1 className="text-2xl">Book Club Registration Coming Soon</h1></div>} />
      <Route path="/author-register" element={<div className="p-6"><h1 className="text-2xl">Author Registration Coming Soon</h1></div>} />
    </Routes>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <TopNav />
            <main className="flex-grow">
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  )
}