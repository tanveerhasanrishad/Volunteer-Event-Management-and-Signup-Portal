import { ArrowRight, Users, Calendar, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Beach Cleanup Drive',
      date: 'Dec 15, 2025',
      location: 'Santa Monica Beach',
      image: 'https://images.unsplash.com/photo-1751646312130-d6be98d867bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNsZWFudXAlMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc2NTI5MDY2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      volunteers: 24
    },
    {
      id: 2,
      title: 'Food Bank Support',
      date: 'Dec 18, 2025',
      location: 'Community Center',
      image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmFuayUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzY1MjEzMTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      volunteers: 18
    },
    {
      id: 3,
      title: 'Community Garden Project',
      date: 'Dec 20, 2025',
      location: 'Riverside Park',
      image: 'https://images.unsplash.com/photo-1631195414013-85b70ff2c180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW58ZW58MXx8fHwxNzY1Mjg3ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      volunteers: 15
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
                Make a Difference Today
              </div>
              <h1 className="text-gray-900 mb-6">
                Connect with Opportunities to Serve Your Community
              </h1>
              <p className="text-gray-600 mb-8 max-w-lg">
                Join thousands of volunteers making a positive impact. Find meaningful volunteer opportunities that match your passion and schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('events')}
                  className="px-8 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
                >
                  View Events
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('auth')}
                  className="px-8 py-3 bg-white text-emerald-600 border-2 border-emerald-500 rounded-full hover:bg-emerald-50 transition-colors"
                >
                  Sign Up Now
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwY29tbXVuaXR5JTIwc2VydmljZXxlbnwxfHx8fDE3NjUyNjkwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Volunteers working together"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-100 rounded-xl">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-gray-900">5,000+</div>
                    <div className="text-gray-600">Active Volunteers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-gray-900 mb-2">5,000+ Volunteers</div>
              <p className="text-gray-600">Passionate individuals making a difference</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-2xl mb-4">
                <Calendar className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-gray-900 mb-2">200+ Events</div>
              <p className="text-gray-600">Diverse opportunities year-round</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-gray-900 mb-2">50+ Organizations</div>
              <p className="text-gray-600">Trusted community partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our latest volunteer opportunities and find the perfect way to give back to your community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => onNavigate(`event-${event.id}`)}
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-900">{event.volunteers}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 mb-2">{event.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <button className="w-full px-6 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors">
                    Join as Volunteer
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('events')}
              className="px-8 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors inline-flex items-center gap-2"
            >
              View All Events
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
            <Heart className="w-8 h-8 text-white fill-white" />
          </div>
          <h2 className="text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join our community of volunteers today and start creating positive change in your local area.
          </p>
          <button
            onClick={() => onNavigate('auth')}
            className="px-8 py-3 bg-white text-emerald-600 rounded-full hover:bg-emerald-50 transition-colors inline-flex items-center gap-2"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
