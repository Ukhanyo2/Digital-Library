import { Mail, MapPin, Phone, Clock } from 'lucide-react'

export const ContactsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <div className="relative w-full py-32 px-6 bg-gradient-to-b from-gray-900 to-black flex items-center justify-center border-b border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6">
            CONTACT US
          </h1>
          <p className="text-lg text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
            Get in touch with our team. We're here to help with any inquiries about our collections, services, or partnerships.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Direct Inquiries Section */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl font-bold mb-12 text-white tracking-wide">
            DIRECT INQUIRIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* General Support */}
            <div className="border border-gray-800 p-8 hover:border-yellow-400 transition duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Mail size={24} className="text-yellow-400" />
                <h3 className="font-serif text-lg font-bold uppercase tracking-widest">
                  General Support
                </h3>
              </div>
              <a
                href="mailto:support@digitallibrary.com"
                className="text-gray-300 hover:text-white transition duration-300 font-light text-lg"
              >
                support@digitallibrary.com
              </a>
              <p className="text-sm text-gray-500 mt-3 font-light">
                For account issues, access questions, and technical support
              </p>
            </div>

            {/* Media & Press */}
            <div className="border border-gray-800 p-8 hover:border-yellow-400 transition duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Mail size={24} className="text-yellow-400" />
                <h3 className="font-serif text-lg font-bold uppercase tracking-widest">
                  Media & Press
                </h3>
              </div>
              <a
                href="mailto:press@digitallibrary.com"
                className="text-gray-300 hover:text-white transition duration-300 font-light text-lg"
              >
                press@digitallibrary.com
              </a>
              <p className="text-sm text-gray-500 mt-3 font-light">
                For press inquiries, interviews, and media partnerships
              </p>
            </div>

            {/* Partnerships */}
            <div className="border border-gray-800 p-8 hover:border-yellow-400 transition duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Mail size={24} className="text-yellow-400" />
                <h3 className="font-serif text-lg font-bold uppercase tracking-widest">
                  Partnerships
                </h3>
              </div>
              <a
                href="mailto:curate@digitallibrary.com"
                className="text-gray-300 hover:text-white transition duration-300 font-light text-lg"
              >
                curate@digitallibrary.com
              </a>
              <p className="text-sm text-gray-500 mt-3 font-light">
                For publisher partnerships and curation opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-16"></div>

        {/* Physical Location & Hours Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Flagship Hub */}
          <div>
            <h2 className="font-serif text-4xl font-bold mb-8 text-white tracking-wide">
              FLAGSHIP DIGITAL HUB
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={28} className="text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-bold uppercase tracking-widest mb-2">
                    Johannesburg Location
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Digital Library Global HQ<br />
                    Sandton, Johannesburg<br />
                    South Africa
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <div className="flex gap-4">
                  <Phone size={28} className="text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-sm font-bold uppercase tracking-widest mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-300 font-light text-lg">
                      +27 (11) 555-0147
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Hours */}
          <div>
            <h2 className="font-serif text-4xl font-bold mb-8 text-white tracking-wide">
              OPERATIONAL HOURS
            </h2>

            <div className="space-y-6 border border-gray-800 p-8">
              <div className="flex gap-4">
                <Clock size={28} className="text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-bold uppercase tracking-widest mb-4">
                    Digital Support
                  </h3>
                  <p className="text-gray-300 font-light">
                    Available 24/7 via email and chat
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <h3 className="font-serif text-lg font-bold uppercase tracking-widest mb-4">
                  Curatorial Staff
                </h3>
                <div className="space-y-2 text-gray-300 font-light">
                  <p>Monday – Friday: 9:00 AM – 6:00 PM (SAST)</p>
                  <p className="text-sm text-gray-500">Responses to partnership inquiries typically within 48 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="border-t border-gray-800 mt-16 pt-16">
          <h2 className="font-serif text-4xl font-bold mb-8 text-white tracking-wide">
            CONNECT WITH US
          </h2>

          <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 p-12 rounded-sm">
            <p className="text-gray-300 font-light mb-6 max-w-2xl">
              For membership questions, book recommendations, or to join our literary community, reach out through our support channels. Our team is passionate about connecting readers with extraordinary stories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:support@digitallibrary.com"
                className="px-12 py-4 bg-white text-black font-serif font-semibold text-lg hover:bg-gray-200 transition duration-300 tracking-wide uppercase"
              >
                Email Us
              </a>
              <a
                href="/"
                className="px-12 py-4 border-2 border-white text-white font-serif text-lg hover:bg-white hover:text-black transition duration-300 tracking-wide uppercase"
              >
                Visit Library
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
