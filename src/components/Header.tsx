import { Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export function Header({ currentPage, onNavigate, isLoggedIn, onLogout }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-xl">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-gray-900">VolunteerHub</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-emerald-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('events')}
              className={`transition-colors ${
                currentPage === 'events' ? 'text-emerald-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Events
            </button>
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className={`transition-colors ${
                    currentPage === 'dashboard' ? 'text-emerald-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={onLogout}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => onNavigate('auth')}
                className="px-6 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
              >
                Sign Up
              </button>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'home' ? 'bg-emerald-50 text-emerald-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('events');
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'events' ? 'bg-emerald-50 text-emerald-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Events
              </button>
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => {
                      onNavigate('dashboard');
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-4 py-2 rounded-lg transition-colors ${
                      currentPage === 'dashboard' ? 'bg-emerald-50 text-emerald-600' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => {
                      onLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="text-left px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    onNavigate('auth');
                    setMobileMenuOpen(false);
                  }}
                  className="mx-4 px-6 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
                >
                  Sign Up
                </button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
