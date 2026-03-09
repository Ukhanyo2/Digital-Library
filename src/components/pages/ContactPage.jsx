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
    <div className="min-h-screen bg-black text-white pt-20 pb-20">
      {/* Page Header */}
      <div className="bg-black border-b border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-400 text-lg font-light tracking-wide">
            We'd love to hear from you. Get in touch with The Dream City Projects.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Company Info */}
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-6 text-white">
                The Dream City Projects
              </h3>

              {/* Address */}
              <div className="flex gap-4 mb-8">
                <MapPin className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    66 Ring Road, Fairview Office Park<br />
                    Greenacres, 6th Floor Fairview House<br />
                    Eastern Cape, South Africa, 6045
                  </p>
                </div>
              </div>

              {/* Creative Director */}
              <div className="mb-8 border-t border-gray-700 pt-8">
                <p className="text-gray-400 text-sm font-light mb-2">Creative Director</p>
                <p className="font-serif text-lg text-white">Mzwamadoda Mvimbeli</p>
              </div>

              {/* Phone Numbers */}
              <div className="flex gap-4 mb-8 border-t border-gray-700 pt-8">
                <Phone className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400 text-sm font-light mb-2">Phone</p>
                  <p className="text-white font-light tracking-wide mb-2">063 026 4541</p>
                  <p className="text-white font-light tracking-wide">Tel: 041 409 8600</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 border-t border-gray-700 pt-8">
                <Mail className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400 text-sm font-light mb-2">Email</p>
                  <a href="mailto:mzwamadoda2@gmail.com" className="text-white hover:text-yellow-400 transition duration-300 font-light tracking-wide">
                    mzwamadoda2@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 border border-gray-800 p-8 md:p-12 rounded-lg">
              <h2 className="font-serif text-3xl font-bold mb-8 text-white">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-yellow-400/20 border border-yellow-400 rounded-lg">
                  <p className="text-yellow-400 font-light">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-light tracking-widest uppercase text-gray-400 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition duration-300 rounded-lg font-light"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-light tracking-widest uppercase text-gray-400 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition duration-300 rounded-lg font-light"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-light tracking-widest uppercase text-gray-400 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition duration-300 rounded-lg font-light"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-light tracking-widest uppercase text-gray-400 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition duration-300 rounded-lg font-light resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-yellow-400 text-black font-serif font-bold tracking-widest uppercase hover:bg-yellow-500 transition duration-300 rounded-lg flex items-center justify-center gap-3 mt-8"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>

              <p className="text-gray-500 text-xs font-light mt-6 text-center">
                We typically respond within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
