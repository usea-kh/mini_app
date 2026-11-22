import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export type Page = 'home' | 'tours' | 'stays' | 'transport' | 'about' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Tours', page: 'tours' },
  { label: 'Stays', page: 'stays' },
  { label: 'Transport', page: 'transport' },
  { label: 'About', page: 'about' },
  { label: 'Contact', page: 'contact' },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <button onClick={() => handleNav('home')} className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white font-display font-bold text-lg">
            TOS
          </div>
          <div className="text-left">
            <span className={`font-display font-bold text-lg block leading-none ${scrolled ? 'text-ink-900' : 'text-white'}`}>
              TOS Travel
            </span>
            <span className={`text-xs ${scrolled ? 'text-ink-500' : 'text-white/80'}`}>
              Siem Reap, Cambodia
            </span>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNav(item.page)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === item.page
                  ? scrolled
                    ? 'bg-primary-50 text-primary-700'
                    : 'bg-white/20 text-white'
                  : scrolled
                    ? 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="ml-2 flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Book Now
          </button>
        </nav>

        <button
          className="lg:hidden p-2 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`h-6 w-6 ${scrolled || mobileOpen ? 'text-ink-900' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? 'text-ink-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-ink-100 mt-2">
          <nav className="container-wide py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-ink-700 hover:bg-ink-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
