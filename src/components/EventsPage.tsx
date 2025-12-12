import { Calendar, Users, MapPin, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventsPageProps {
  onNavigate: (page: string) => void;
}

export function EventsPage({ onNavigate }: EventsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Beach Cleanup Drive',
      date: 'Dec 15, 2025',
      time: '9:00 AM - 12:00 PM',
      location: 'Santa Monica Beach',
      category: 'Environment',
      volunteers: 24,
      maxVolunteers: 30,
      image: 'https://images.unsplash.com/photo-1751646312130-d6be98d867bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNsZWFudXAlMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc2NTI5MDY2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Help us clean up Santa Monica Beach and protect marine life.'
    },
    {
      id: 2,
      title: 'Food Bank Support',
      date: 'Dec 18, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Community Center',
      category: 'Community',
      volunteers: 18,
      maxVolunteers: 25,
      image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmFuayUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzY1MjEzMTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Assist in sorting and distributing food to families in need.'
    },
    {
      id: 3,
      title: 'Community Garden Project',
      date: 'Dec 20, 2025',
      time: '8:00 AM - 1:00 PM',
      location: 'Riverside Park',
      category: 'Environment',
      volunteers: 15,
      maxVolunteers: 20,
      image: 'https://images.unsplash.com/photo-1631195414013-85b70ff2c180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW58ZW58MXx8fHwxNzY1Mjg3ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Build and maintain a community garden for local residents.'
    },
    {
      id: 4,
      title: 'Youth Education Program',
      date: 'Dec 22, 2025',
      time: '3:00 PM - 5:00 PM',
      location: 'Lincoln Elementary',
      category: 'Education',
      volunteers: 12,
      maxVolunteers: 15,
      image: 'https://images.unsplash.com/photo-1764072970350-2ce4f354a483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzY1MjkwNjY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Tutor and mentor elementary students in math and reading.'
    },
    {
      id: 5,
      title: 'Tree Planting Initiative',
      date: 'Dec 25, 2025',
      time: '7:00 AM - 11:00 AM',
      location: 'Oakwood Forest',
      category: 'Environment',
      volunteers: 20,
      maxVolunteers: 40,
      image: 'https://images.unsplash.com/photo-1703012349431-95c3304d098f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NjUyMzAyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Join us in planting 500 trees to restore local forest areas.'
    },
    {
      id: 6,
      title: 'Senior Center Activities',
      date: 'Dec 28, 2025',
      time: '1:00 PM - 4:00 PM',
      location: 'Sunshine Senior Center',
      category: 'Community',
      volunteers: 8,
      maxVolunteers: 12,
      image: 'https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwY29tbXVuaXR5JTIwc2VydmljZXxlbnwxfHx8fDE3NjUyNjkwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Spend time with seniors through games, crafts, and conversation.'
    }
  ];

  const categories = ['all', 'Environment', 'Community', 'Education'];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-gray-900 mb-4">Volunteer Events</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect opportunity to make a difference. Browse through our upcoming volunteer events.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full md:w-48 pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                onClick={() => onNavigate(`event-${event.id}`)}
              >
                <div className="relative h-56">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-gray-900">{event.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-600" />
                    <span className="text-gray-900">{event.volunteers}/{event.maxVolunteers}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-gray-900 mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {event.description}
                  </p>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(`event-${event.id}`);
                    }}
                    className="w-full px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
                  >
                    Join as Volunteer
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
