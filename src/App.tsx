import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { EventsPage } from './components/EventsPage';
import { EventDetailPage } from './components/EventDetailPage';
import { AuthPage } from './components/AuthPage';
import { DashboardPage } from './components/DashboardPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  const handleLogin = (email: string, name: string) => {
    setIsLoggedIn(true);
    setUser({ email, name });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ name: '', email: '' });
    setCurrentPage('home');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'events' && (
          <EventsPage onNavigate={handleNavigate} />
        )}

        {currentPage.startsWith('event-') && (
          <EventDetailPage
            eventId={currentPage}
            onNavigate={handleNavigate}
            isLoggedIn={isLoggedIn}
          />
        )}

        {currentPage === 'auth' && (
          <AuthPage
            onLogin={handleLogin}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'dashboard' && isLoggedIn && (
          <DashboardPage
            userName={user.name}
            userEmail={user.email}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'dashboard' && !isLoggedIn && (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h2 className="text-gray-900 mb-4">Please Sign In</h2>
              <p className="text-gray-600 mb-6">
                You need to be logged in to access your dashboard
              </p>
              <button
                onClick={() => handleNavigate('auth')}
                className="px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
