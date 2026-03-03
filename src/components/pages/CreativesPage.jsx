import { useState } from 'react';
import { Palette, Upload } from 'lucide-react';

const creativeTypes = [
  { value: "graphic-designer", label: "Graphic Designer (2D)" },
  { value: "3d-designer", label: "3D Designer" },
  { value: "animator", label: "Animator" },
  { value: "writer", label: "Writer" },
  { value: "voice-over", label: "Voice Over Artist" },
];

export function CreativesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    creativeType: "",
    experience: "",
    portfolio: "",
    bio: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted! We'll review your profile and get back to you soon.");
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-8 py-12">
        <div className="mb-8">
          <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-6 inline-block rounded-r-lg">
            <h2 className="flex items-center gap-2 m-0 text-2xl font-bold text-green-800">
              <Palette className="w-6 h-6" />
              Creatives Registration
            </h2>
          </div>
          <p className="text-lg mb-6 text-gray-700">
            Are you a creative professional? Join our platform and connect with opportunities! 
            We welcome Graphic Designers (2D & 3D), Animators, Writers, and Voice Over Artists.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Hero Image */}
          <div className="h-64 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1558259299-5d46c4408730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydGlzdCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE2ODU1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Creative workspace"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Benefits */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Why Join Our Platform?</h3>
            <div className="space-y-4">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-blue-600 mb-1">Connect with Projects</h4>
                <p className="text-gray-600">
                  Get matched with exciting projects that fit your skills and interests
                </p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-purple-600 mb-1">Build Your Portfolio</h4>
                <p className="text-gray-600">
                  Showcase your work to potential clients and collaborators
                </p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-green-600 mb-1">Professional Network</h4>
                <p className="text-gray-600">
                  Connect with other creatives and expand your professional network
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-green-50 border border-green-100 p-8 rounded-3xl shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Registration and Profile Set-up</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="creativeType">Creative Type *</label>
                <select 
                  id="creativeType"
                  value={formData.creativeType} 
                  onChange={(e) => handleInputChange("creativeType", e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                >
                  <option value="" disabled>Select your specialty</option>
                  {creativeTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="experience">Years of Experience</label>
              <input
                id="experience"
                type="text"
                placeholder="e.g., 5 years"
                value={formData.experience}
                onChange={(e) => handleInputChange("experience", e.target.value)}
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="portfolio">Portfolio URL</label>
              <input
                id="portfolio"
                type="url"
                placeholder="https://yourportfolio.com"
                value={formData.portfolio}
                onChange={(e) => handleInputChange("portfolio", e.target.value)}
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="bio">Brief Bio / About You *</label>
              <textarea
                id="bio"
                placeholder="Tell us about your creative journey, skills, and what kind of projects you're interested in..."
                value={formData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                required
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all min-h-[120px]"
              />
            </div>

            <div className="border-2 border-dashed border-green-300 p-8 rounded-2xl text-center bg-white/50">
              <Upload className="w-12 h-12 mx-auto mb-3 text-green-600" />
              <p className="font-bold text-gray-800 mb-1">Upload Portfolio Samples</p>
              <p className="text-sm text-gray-600 mb-4">
                You can upload images, videos, or documents (Max 10MB per file)
              </p>
              <button type="button" className="px-6 py-2 border-2 border-green-500 text-green-600 rounded-full font-bold hover:bg-green-50 transition-colors">
                Choose Files
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button type="submit" className="flex-1 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors shadow-md">
                Submit Registration
              </button>
              <button type="button" className="flex-1 py-3 border-2 border-green-600 text-green-600 rounded-xl font-bold hover:bg-green-50 transition-colors">
                Save as Draft
              </button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-8 bg-gray-50 border border-gray-200 rounded-3xl">
          <h4 className="text-xl font-bold mb-4 text-gray-800">What Happens Next?</h4>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Submit your registration form with your portfolio samples</li>
            <li>Our team will review your profile within 3-5 business days</li>
            <li>Once approved, you'll receive access to your professional dashboard</li>
            <li>Start browsing and applying for creative opportunities</li>
            <li>Build your reputation through successful project completions</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
