import { Calendar, MapPin, Users, Clock, CheckCircle, ArrowLeft, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventDetailPageProps {
  eventId: string;
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
}

export function EventDetailPage({ eventId, onNavigate, isLoggedIn }: EventDetailPageProps) {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Mock event data
  const events: Record<string, any> = {
    'event-1': {
      id: 1,
      title: 'Beach Cleanup Drive',
      date: 'December 15, 2025',
      time: '9:00 AM - 12:00 PM',
      location: 'Santa Monica Beach, CA',
      category: 'Environment',
      volunteers: 24,
      maxVolunteers: 30,
      image: 'https://images.unsplash.com/photo-1751646312130-d6be98d867bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNsZWFudXAlMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc2NTI5MDY2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Join us for a meaningful morning of environmental conservation at Santa Monica Beach. We\'ll be collecting trash, recyclables, and marine debris to help protect our ocean ecosystem and local wildlife. This is a great opportunity to meet like-minded people while making a tangible difference in our community.',
      longDescription: 'Our monthly beach cleanup initiative has removed over 5,000 pounds of waste from local beaches in the past year. Every volunteer makes a difference in protecting marine life and preserving the natural beauty of our coastline. This event is perfect for individuals, families, and groups looking to give back to the environment.',
      requirements: [
        'Minimum age: 12 years old (under 18 must be accompanied by adult)',
        'Wear comfortable clothes and closed-toe shoes',
        'Bring sunscreen, hat, and reusable water bottle',
        'Gloves and collection bags will be provided',
        'No prior experience needed'
      ],
      organizer: {
        name: 'Ocean Conservation Society',
        email: 'contact@oceanconservation.org',
        phone: '(555) 123-4567',
        description: 'A non-profit dedicated to protecting marine ecosystems through community action and education.'
      }
    },
    'event-2': {
      id: 2,
      title: 'Food Bank Support',
      date: 'December 18, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Community Center, 123 Main St',
      category: 'Community',
      volunteers: 18,
      maxVolunteers: 25,
      image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmFuayUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzY1MjEzMTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Help us sort and distribute food to families in need. We provide essential groceries to over 200 families each week, and your support makes this mission possible.',
      longDescription: 'Our food bank serves as a lifeline for families facing food insecurity in our community. Volunteers help with receiving donations, sorting items, packing boxes, and distributing food to families. It\'s rewarding work that directly impacts people\'s lives.',
      requirements: [
        'Minimum age: 16 years old',
        'Ability to lift up to 30 pounds',
        'Comfortable standing for extended periods',
        'Hair nets and gloves will be provided',
        'Food handler training is a plus but not required'
      ],
      organizer: {
        name: 'Community Food Bank',
        email: 'volunteer@communityfoodbank.org',
        phone: '(555) 234-5678',
        description: 'Fighting hunger in our community since 1985, serving thousands of families each year.'
      }
    },
    'event-3': {
      id: 3,
      title: 'Community Garden Project',
      date: 'December 20, 2025',
      time: '8:00 AM - 1:00 PM',
      location: 'Riverside Park Community Garden',
      category: 'Environment',
      volunteers: 15,
      maxVolunteers: 20,
      image: 'https://images.unsplash.com/photo-1631195414013-85b70ff2c180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW58ZW58MXx8fHwxNzY1Mjg3ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Build and maintain a community garden that provides fresh produce to local residents and teaches sustainable growing practices.',
      longDescription: 'Our community garden provides fresh, organic produce to neighborhood residents while creating a green space for everyone to enjoy. Volunteers help with planting, weeding, watering, and harvesting. It\'s a peaceful way to connect with nature and your community.',
      requirements: [
        'All ages welcome (children must be supervised)',
        'Wear garden-appropriate clothing and sturdy shoes',
        'Bring gardening gloves if you have them',
        'Tools and supplies will be provided',
        'Basic gardening knowledge helpful but not required'
      ],
      organizer: {
        name: 'Green Spaces Initiative',
        email: 'info@greenspacesinitiative.org',
        phone: '(555) 345-6789',
        description: 'Creating sustainable urban gardens and green spaces for healthier communities.'
      }
    }
  };

  const event = events[eventId] || events['event-1'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignupSuccess(true);
    setTimeout(() => {
      setSignupSuccess(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('events')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Events
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden mb-8">
              <ImageWithFallback
                src={event.image}
                alt={event.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Event Info */}
            <div className="bg-white rounded-2xl p-8 mb-8">
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-4">
                {event.category}
              </div>
              
              <h1 className="text-gray-900 mb-6">{event.title}</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-500">Date</div>
                    <div className="text-gray-900">{event.date}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-500">Time</div>
                    <div className="text-gray-900">{event.time}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-500">Location</div>
                    <div className="text-gray-900">{event.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-500">Volunteers</div>
                    <div className="text-gray-900">{event.volunteers} / {event.maxVolunteers} signed up</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-gray-900 mb-4">About This Event</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <p className="text-gray-600">{event.longDescription}</p>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl p-8 mb-8">
              <h2 className="text-gray-900 mb-6">Requirements</h2>
              <ul className="space-y-3">
                {event.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Organizer Info */}
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-gray-900 mb-6">Organizer</h2>
              <div className="mb-4">
                <h3 className="text-gray-900 mb-2">{event.organizer.name}</h3>
                <p className="text-gray-600 mb-4">{event.organizer.description}</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <a href={`mailto:${event.organizer.email}`} className="hover:text-emerald-600 transition-colors">
                    {event.organizer.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <a href={`tel:${event.organizer.phone}`} className="hover:text-emerald-600 transition-colors">
                    {event.organizer.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Signup Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 sticky top-24">
              <h2 className="text-gray-900 mb-6">Sign Up as Volunteer</h2>

              {signupSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-gray-900 mb-2">Successfully Registered!</h3>
                  <p className="text-gray-600">
                    We{"'"}ve sent a confirmation email with event details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      placeholder="Tell us why you want to volunteer..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
                  >
                    Confirm Registration
                  </button>

                  <p className="text-gray-500 text-center">
                    You{"'"}ll receive a confirmation email after signing up
                  </p>
                </form>
              )}

              {!isLoggedIn && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-center mb-4">
                    Already have an account?
                  </p>
                  <button
                    onClick={() => onNavigate('auth')}
                    className="w-full px-6 py-3 bg-white border-2 border-emerald-500 text-emerald-600 rounded-full hover:bg-emerald-50 transition-colors"
                  >
                    Sign In
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
