// src/components/pages/ProfilePage.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userService } from '@/services/userService'
import { supabase } from '@/services/supabaseClient'

export const ProfilePage = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [userBooks, setUserBooks] = useState([])
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    avatar_url: ''
  })

  useEffect(() => {
    loadUserData()
  }, [])

  const loadUserData = async () => {
    try {
      const [profileData, booksData, statsData] = await Promise.all([
        userService.getCurrentUserProfile(),
        userService.getUserBooks(),
        userService.getUserStats()
      ])
      
      setProfile(profileData)
      setUserBooks(booksData)
      setStats(statsData)
      setFormData({
        name: profileData?.name || '',
        avatar_url: profileData?.avatar_url || ''
      })
    } catch (error) {
      console.error('Error loading user data:', error)
      if (error.message.includes('JWT')) {
        navigate('/login')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    try {
      await userService.updateUserProfile(formData)
      setEditing(false)
      loadUserData() // Reload data
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#2a6199' }}>
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#2a6199' }}>
        <div className="text-white text-xl">Please log in to view your profile</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#2a6199' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Profile Header */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <h1 className="font-serif text-4xl font-bold text-white">My Profile</h1>
            <button
              onClick={handleLogout}
              className="px-6 py-2 border border-white/30 text-white rounded-full hover:bg-red-600 hover:border-red-600 transition"
            >
              Sign Out
            </button>
          </div>

          {!editing ? (
            <div className="space-y-4">
              <div>
                <label className="text-white/60 text-sm uppercase tracking-wide">Name</label>
                <p className="text-white text-xl">{profile.name || 'Not set'}</p>
              </div>
              <div>
                <label className="text-white/60 text-sm uppercase tracking-wide">Email</label>
                <p className="text-white text-xl">{profile.email}</p>
              </div>
              <div>
                <label className="text-white/60 text-sm uppercase tracking-wide">Member Since</label>
                <p className="text-white">{new Date(profile.created_at).toLocaleDateString()}</p>
              </div>
              <div>
                <label className="text-white/60 text-sm uppercase tracking-wide">Role</label>
                <p className="text-white capitalize">{profile.role}</p>
              </div>
              <button
                onClick={() => setEditing(true)}
                className="mt-4 px-6 py-2 bg-white text-[#2a6199] rounded-full hover:bg-teal-600 hover:text-white transition"
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block text-white/60 text-sm uppercase tracking-wide mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm uppercase tracking-wide mb-2">Avatar URL</label>
                <input
                  type="url"
                  value={formData.avatar_url}
                  onChange={(e) => setFormData({ ...formData, avatar_url: e.target.value })}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="px-6 py-2 border border-white/30 text-white rounded-full hover:bg-white/10 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {/* User Stats */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center">
              <div className="text-3xl font-bold text-teal-300">{stats.totalBooks}</div>
              <div className="text-white/60 text-sm uppercase tracking-wide">Books in Library</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center">
              <div className="text-3xl font-bold text-teal-300">
                {stats.memberSince ? new Date(stats.memberSince).toLocaleDateString() : 'N/A'}
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wide">Member Since</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center">
              <div className="text-3xl font-bold text-teal-300 capitalize">{stats.role}</div>
              <div className="text-white/60 text-sm uppercase tracking-wide">Account Type</div>
            </div>
          </div>
        )}

        {/* My Books */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h2 className="font-serif text-2xl font-bold text-white mb-6">My Library</h2>
          {userBooks.length === 0 ? (
            <p className="text-white/60">You haven't added any books to your library yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userBooks.map((item) => (
                <div key={item.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h3 className="font-serif text-lg text-white mb-2">{item.books.title}</h3>
                  <p className="text-white/60 text-sm">by {item.books.author}</p>
                  <p className="text-white/40 text-xs mt-2">
                    Added: {new Date(item.purchased_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}