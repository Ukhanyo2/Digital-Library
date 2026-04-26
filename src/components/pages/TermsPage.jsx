// src/components/pages/TermsPage.jsx
import { useEffect, useState } from 'react'

export const TermsPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#2a6199' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          background-color: #2a6199;
          margin: 0;
          padding: 0;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className={`relative max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #fff 0%, #e0f2fe 50%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(255,255,255,0.2)'
            }}
          >
            Terms & Conditions
          </h1>
          <p className="text-white/60 text-lg">Last Updated: April 2026</p>
        </div>

        {/* Content Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 space-y-8">
          
          {/* Section 1: Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              1. Introduction
            </h2>
            <p className="text-white/70 leading-relaxed">
              Welcome to the Dream City Projects Digital Library ("the Platform"). These Terms and Conditions govern your access to and use of our digital library, including all content, features, and services offered. By accessing or using this Platform, you agree to comply with and be bound by these Terms. If you do not agree, please do not use the Platform.
            </p>
          </section>

          {/* Section 2: About the Platform */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              2. About the Platform
            </h2>
            <p className="text-white/70 leading-relaxed">
              Dream City Projects Digital Library provides access to digital books, educational materials, storytelling content, and other knowledge resources aimed at promoting literacy, education, and community development.
            </p>
          </section>

          {/* Section 3: User Eligibility */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              3. User Eligibility
            </h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Users must be at least 13 years old or have parental/guardian consent.</li>
              <li>By using the Platform, you confirm that the information you provide is accurate and complete.</li>
            </ul>
          </section>

          {/* Section 4: Account Registration */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              4. Account Registration
            </h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Some features may require you to create an account.</li>
              <li>You are responsible for maintaining the confidentiality of your login details.</li>
              <li>You agree to notify us immediately of any unauthorized use of your account.</li>
            </ul>
          </section>

          {/* Section 5: Acceptable Use */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              5. Acceptable Use
            </h2>
            <p className="text-white/70 leading-relaxed mb-2">You agree to use the Platform only for lawful purposes. You must not:</p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Copy, distribute, or reproduce content without permission</li>
              <li>Use the Platform for fraudulent or harmful activities</li>
              <li>Attempt to gain unauthorized access to the system</li>
              <li>Upload harmful software, viruses, or malicious content</li>
            </ul>
          </section>

          {/* Section 6: Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              6. Intellectual Property Rights
            </h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>All content on the Platform, including books, designs, logos, and materials, is owned by Dream City Projects or its licensors.</li>
              <li>Content is provided for personal, educational, and non-commercial use only.</li>
              <li>Unauthorized use, reproduction, or distribution is strictly prohibited.</li>
            </ul>
          </section>

          {/* Section 7: Content Usage */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              7. Content Usage
            </h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Users may read, download, or stream content where permitted.</li>
              <li>Content must not be modified, resold, or redistributed without written consent.</li>
              <li>Proper credit must be given when referencing any material.</li>
            </ul>
          </section>

          {/* Section 8: Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              8. Privacy and Data Protection
            </h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>We are committed to protecting your personal information.</li>
              <li>Any data collected will be used in accordance with our Privacy Policy.</li>
              <li>We do not sell or share your personal data without consent unless required by law.</li>
            </ul>
          </section>

          {/* Section 9: Availability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              9. Availability of Service
            </h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>We strive to ensure the Platform is always available but do not guarantee uninterrupted access.</li>
              <li>We may update, suspend, or discontinue services at any time without notice.</li>
            </ul>
          </section>

          {/* Section 10: Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              10. Limitation of Liability
            </h2>
            <p className="text-white/70 leading-relaxed mb-2">Dream City Projects will not be held liable for:</p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Any loss or damage resulting from the use or inability to use the Platform</li>
              <li>Errors or omissions in content</li>
              <li>Unauthorized access to user data</li>
            </ul>
          </section>

          {/* Section 11: Third-Party Content */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              11. Third-Party Content
            </h2>
            <p className="text-white/70 leading-relaxed">
              The Platform may include links or materials from third parties. We are not responsible for the accuracy or reliability of such content.
            </p>
          </section>

          {/* Section 12: Termination */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              12. Termination of Use
            </h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Suspend or terminate accounts that violate these terms.</li>
              <li>Restrict access without prior notice if misuse is detected</li>
            </ul>
          </section>

          {/* Section 13: Changes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              13. Changes to Terms
            </h2>
            <p className="text-white/70 leading-relaxed">
              We may update these Terms and Conditions at any time. Continued use of the Platform means you accept any changes.
            </p>
          </section>

          {/* Section 14: Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              14. Governing Law
            </h2>
            <p className="text-white/70 leading-relaxed">
              These Terms shall be governed by and interpreted in accordance with the laws of the Republic of South Africa.
            </p>
          </section>

          {/* Section 15: Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              15. Contact Information
            </h2>
            <div className="text-white/70 leading-relaxed space-y-1">
              <p><strong className="text-white">Dream City Projects Digital Library</strong></p>
              <p>Email: mzwamadoda2@gmail.com</p>
              <p>Phone: 0414098600</p>
              <p>Location: South Africa</p>
            </div>
          </section>

          {/* Agreement Section */}
          <div className="border-t border-white/20 pt-8 mt-8 text-center">
            <p className="text-white/50 text-sm">
              By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}