import { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen pt-20 pb-20" style={{ backgroundColor: '#2a6199' }}>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          background-color: #2a6199;
          margin: 0;
          padding: 0;
        }
      `}</style>

     
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 border-b py-16" style={{ backgroundColor: '#1e4a7a', borderColor: '#2a6199' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 
            className="font-serif text-5xl md:text-6xl font-bold mb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #fff 0%, #e0f2fe 50%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(255,255,255,0.2)'
            }}
          >
            Get In Touch
          </h1>
          <p className="text-white/70 text-lg font-light tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
            We'd love to hear from you. Get in touch with The Dream City Projects.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Company Info - Updated with glassmorphism */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
              <h3 className="font-serif text-2xl font-bold mb-6 text-white">
                The Dream City Projects
              </h3>

              {/* Address */}
              <div className="flex gap-4 mb-8">
                <MapPin className="text-teal-300 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    66 Ring Road, Fairview Office Park<br />
                    Greenacres, 6th Floor Fairview House<br />
                    Eastern Cape, South Africa, 6045
                  </p>
                </div>
              </div>

              {/* Creative Director */}
              <div className="mb-8 border-t border-white/10 pt-8">
                <p className="text-white/60 text-sm font-light mb-2">Creative Director</p>
                <p className="font-serif text-lg text-white">Mzwamadoda Mvimbeli</p>
              </div>

              {/* Phone Numbers */}
              <div className="flex gap-4 mb-8 border-t border-white/10 pt-8">
                <Phone className="text-teal-300 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-white/60 text-sm font-light mb-2">Phone</p>
                  <p className="text-white/90 font-light tracking-wide mb-2">063 026 4541</p>
                  <p className="text-white/90 font-light tracking-wide">Tel: 041 409 8600</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 border-t border-white/10 pt-8">
                <Mail className="text-teal-300 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-white/60 text-sm font-light mb-2">Email</p>
                  <a href="mailto:mzwamadoda2@gmail.com" className="text-white/90 hover:text-teal-300 transition duration-300 font-light tracking-wide">
                    mzwamadoda2@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl">
              <h2 className="font-serif text-3xl font-bold mb-8 text-white">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-teal-500/20 border border-teal-400 rounded-lg">
                  <p className="text-teal-300 font-light">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-light tracking-widest uppercase text-white/60 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition duration-300 rounded-xl font-light"
                    placeholder="Enter your full name"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-light tracking-widest uppercase text-white/60 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition duration-300 rounded-xl font-light"
                    placeholder="your.email@example.com"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-light tracking-widest uppercase text-white/60 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition duration-300 rounded-xl font-light"
                    placeholder="What's this about?"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-light tracking-widest uppercase text-white/60 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition duration-300 rounded-xl font-light resize-none"
                    placeholder="Tell us more about your inquiry..."
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  ></textarea>
                </div>

               
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-[#2a6199] font-serif font-bold tracking-widest uppercase 
                           hover:bg-teal-600 hover:text-white transition-all duration-300 
                           transform hover:-translate-y-1 shadow-2xl hover:shadow-teal-500/30 
                           rounded-full flex items-center justify-center gap-3 mt-8 text-lg"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>

              <p className="text-white/40 text-xs font-light mt-6 text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                We typically respond within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}