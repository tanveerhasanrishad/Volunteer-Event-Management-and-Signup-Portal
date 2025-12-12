import { Calendar, MapPin, Users, Award, Clock, Settings, Mail, Phone, Edit2 } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DashboardPageProps {
  userName: string;
  userEmail: string;
  onNavigate: (page: string) => void;
}

export function DashboardPage({ userName, userEmail, onNavigate }: DashboardPageProps) {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'joined' | 'profile'>('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Beach Cleanup Drive',
      date: 'Dec 15, 2025',
      time: '9:00 AM - 12:00 PM',
      location: 'Santa Monica Beach',
      image: 'https://images.unsplash.com/photo-1751646312130-d6be98d867bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNsZWFudXAlMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc2NTI5MDY2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'confirmed'
    },
    {
      id: 3,
      title: 'Community Garden Project',
      date: 'Dec 20, 2025',
      time: '8:00 AM - 1:00 PM',
      location: 'Riverside Park',
      image: 'https://images.unsplash.com/photo-1631195414013-85b70ff2c180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW58ZW58MXx8fHwxNzY1Mjg3ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'confirmed'
    },
    {
      id: 5,
      title: 'Tree Planting Initiative',
      date: 'Dec 25, 2025',
      time: '7:00 AM - 11:00 AM',
      location: 'Oakwood Forest',
      image: 'https://images.unsplash.com/photo-1703012349431-95c3304d098f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NjUyMzAyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'pending'
    }
  ];

  const completedEvents = [
    {
      id: 101,
      title: 'Food Drive Campaign',
      date: 'Nov 28, 2025',
      hours: 4,
      status: 'completed'
    },
    {
      id: 102,
      title: 'Senior Center Visit',
      date: 'Nov 15, 2025',
      hours: 3,
      status: 'completed'
    },
    {
      id: 103,
      title: 'Park Restoration',
      date: 'Oct 30, 2025',
      hours: 5,
      status: 'completed'
    }
  ];

  const stats = {
    totalHours: 42,
    eventsJoined: 12,
    upcomingEvents: 3,
    certificatesEarned: 2
  };

  const [profileData, setProfileData] = useState({
    name: userName,
    email: userEmail,
    phone: '(555) 123-4567',
    location: 'Los Angeles, CA',
    bio: 'Passionate about making a difference in my community through volunteer work.'
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Welcome back, {userName}!</h1>
          <p className="text-gray-600">Manage your volunteer activities and track your impact</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border-2 border-emerald-100">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-gray-900">{stats.totalHours}h</span>
            </div>
            <p className="text-gray-600">Total Hours</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-blue-100">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-gray-900">{stats.eventsJoined}</span>
            </div>
            <p className="text-gray-600">Events Joined</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-teal-100">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-teal-100 rounded-lg">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <span className="text-gray-900">{stats.upcomingEvents}</span>
            </div>
            <p className="text-gray-600">Upcoming Events</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-purple-100">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-gray-900">{stats.certificatesEarned}</span>
            </div>
            <p className="text-gray-600">Certificates</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-4 transition-colors ${
                  activeTab === 'upcoming'
                    ? 'border-b-2 border-emerald-500 text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('joined')}
                className={`px-6 py-4 transition-colors ${
                  activeTab === 'joined'
                    ? 'border-b-2 border-emerald-500 text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Joined Events
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-4 transition-colors ${
                  activeTab === 'profile'
                    ? 'border-b-2 border-emerald-500 text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Profile Settings
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Upcoming Events Tab */}
            {activeTab === 'upcoming' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">Your Upcoming Events</h2>
                  <button
                    onClick={() => onNavigate('events')}
                    className="px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    Browse More
                  </button>
                </div>

                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-xl hover:border-emerald-300 transition-colors cursor-pointer"
                      onClick={() => onNavigate(`event-${event.id}`)}
                    >
                      <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-gray-900">{event.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-white ${
                            event.status === 'confirmed' ? 'bg-emerald-500' : 'bg-amber-500'
                          }`}>
                            {event.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                          </span>
                        </div>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date} • {event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {upcomingEvents.length === 0 && (
                  <div className="text-center py-12">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-gray-900 mb-2">No upcoming events</h3>
                    <p className="text-gray-600 mb-6">
                      Browse available events and join one to get started
                    </p>
                    <button
                      onClick={() => onNavigate('events')}
                      className="px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
                    >
                      Browse Events
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Joined Events Tab */}
            {activeTab === 'joined' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-gray-900 mb-2">Your Volunteer History</h2>
                  <p className="text-gray-600">
                    You{"'"}ve completed {completedEvents.length} events and contributed {stats.totalHours} volunteer hours
                  </p>
                </div>

                <div className="space-y-4">
                  {completedEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-emerald-300 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-100 rounded-lg">
                          <Award className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-gray-900 mb-1">{event.title}</h3>
                          <p className="text-gray-600">{event.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-900">{event.hours} hours</div>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                          Completed
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {completedEvents.length === 0 && (
                  <div className="text-center py-12">
                    <Award className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-gray-900 mb-2">No completed events yet</h3>
                    <p className="text-gray-600">
                      Complete your first volunteer event to build your history
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Profile Settings Tab */}
            {activeTab === 'profile' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">Profile Settings</h2>
                  {!isEditing && (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit Profile
                    </button>
                  )}
                </div>

                <div className="max-w-2xl">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="profile-name" className="block text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="profile-name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="profile-email" className="block text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="profile-email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                          disabled={!isEditing}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:bg-gray-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="profile-phone" className="block text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="profile-phone"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          disabled={!isEditing}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:bg-gray-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="profile-location" className="block text-gray-700 mb-2">
                        Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="profile-location"
                          value={profileData.location}
                          onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                          disabled={!isEditing}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:bg-gray-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="profile-bio" className="block text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        id="profile-bio"
                        rows={4}
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none disabled:bg-gray-50"
                      />
                    </div>

                    {isEditing && (
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="flex-1 px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
                        >
                          Save Changes
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </form>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-gray-900 mb-4">Account Actions</h3>
                    <div className="space-y-3">
                      <button className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors">
                        <Settings className="w-5 h-5" />
                        Change Password
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors">
                        <Mail className="w-5 h-5" />
                        Email Preferences
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
