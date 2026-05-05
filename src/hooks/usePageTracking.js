import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { logPageView } from '@/lib/analytics'

const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    // Track page view on route change
    logPageView(location.pathname)
  }, [location])
}

export default usePageTracking