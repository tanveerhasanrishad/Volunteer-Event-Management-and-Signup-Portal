import { Heart, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-xl">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-gray-900">VolunteerHub</span>
            </div>
            <p className="text-gray-600 max-w-md">
              Connecting passionate volunteers with meaningful opportunities to make a difference in their communities.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="p-2 rounded-full bg-gray-200 hover:bg-emerald-500 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-200 hover:bg-emerald-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-200 hover:bg-emerald-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-200 hover:bg-emerald-500 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-600 hover:text-emerald-600 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-emerald-600 transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-emerald-600 transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Help Center
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Community Guidelines
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2025 VolunteerHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
