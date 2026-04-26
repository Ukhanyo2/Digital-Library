// src/components/pages/PrivacyPage.jsx
import { useEffect, useState } from 'react'

export const PrivacyPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#2a6199' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`relative max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ 
            fontFamily: "'Playfair Display', serif",
            background: 'linear-gradient(135deg, #fff 0%, #e0f2fe 50%, #fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Privacy Policy
          </h1>
          <p className="text-white/60 text-lg">Your privacy is something that we take very seriously</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 space-y-6">
          <p className="text-white/70 leading-relaxed">
            This privacy statement is applicable to every page on this website. Every piece of data collected through the website's online forms is utilized to uniquely identify the service subscribers. This data will only be used as stated in the Terms and Conditions of Use.
          </p>

          <p className="text-white/70 leading-relaxed">
            The website may gather certain data about your visit, including the IP address and name of your Internet service provider, the date and time you access the website, the pages you view while on the website, and the Internet address of the webpage that provided a direct connection to our website. This data is utilised for site administration, trend analysis, and improvement.
          </p>

          <div className="border-t border-white/20 pt-6">
            <p className="text-white/70 leading-relaxed">
              Please email us with any queries or worries you may have regarding our privacy statement at{' '}
              <a href="mailto:mzwamadoda2@gmail.com" className="text-teal-300 hover:text-teal-200 transition">
                mzwamadoda2@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-teal-500/10 border border-teal-400/30 rounded-xl p-6">
            <p className="text-white/80 leading-relaxed">
              <strong className="text-teal-300">Acknowledgment:</strong> You acknowledge that you have read our privacy statement by using this website. Please do not use our site if you disagree with this policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}