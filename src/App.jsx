// App.jsx or routes file
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { AuthProvider } from '@/context/AuthContext'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import { TopNav } from '@/components/layout/TopNav'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import { HomePage } from '@/components/pages/HomePage'
import { GamesPage } from '@/components/pages/GamesPage' 
import { AboutUsPage } from '@/components/pages/AboutUsPage'
import { ContactPage } from '@/components/pages/ContactPage'
import { BooksHub } from '@/components/library/BooksHub'
import { RegistrationPage } from '@/components/auth/RegistrationPage'
import { LoginPage } from '@/components/auth/LoginPage'
import { ProfilePage } from '@/components/pages/ProfilePage'
import { CreativesPage } from '@/components/pages/CreativesPage'
import { Events } from '@/components/pages/EventsPage'
import CookieBanner from '@/components/CookiesBanner'
import { initGA } from '@/lib/analytics'
import usePageTracking from '@/hooks/usePageTracking'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/library/*" element={<BooksHub />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      
      {/* Card navigation routes */}
      <Route path="/games" element={<GamesPage />} />
      <Route path="/games/:id" element={<div className="p-6 min-h-screen bg-gray-900 text-white"><h1 className="text-2xl">Game Details Coming Soon</h1></div>} />
      <Route path="/creatives" element={<CreativesPage />} />
      <Route path="/events" element={<Events />} />
      

      {/* Contact page */}
      <Route path="/contacts" element={<ContactPage />} />
      
      {/* Other placeholder routes */}
      <Route path="/book-club-register" element={<div className="p-6 min-h-screen bg-gray-900 text-white"><h1 className="text-2xl">Book Club Registration Coming Soon</h1></div>} />
      <Route path="/author-register" element={<div className="p-6 min-h-screen bg-gray-900 text-white"><h1 className="text-2xl">Author Registration Coming Soon</h1></div>} />
    </Routes>
  )
}

export default function App() {
  // Check if user already accepted cookies
  useEffect(() => {
    const consent = localStorage.getItem('cookiesAccepted')
    if (consent === 'true') {
      initGA()
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <PageTracker />
          <TopNav />
          <AppRoutes />
          <Footer />
          <ScrollToTop />
          <CookieBanner />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  )
}

// Wrapper component for page tracking
function PageTracker() {
  usePageTracking()
  return null
}