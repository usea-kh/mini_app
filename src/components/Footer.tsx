import { Mail, Phone, MapPin, Facebook, Instagram, Clock } from 'lucide-react';
import type { Page } from './Header';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="container-wide py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white font-display font-bold">
                TOS
              </div>
              <span className="font-display font-bold text-lg text-white">TOS Travel</span>
            </div>
            <p className="text-sm leading-relaxed text-ink-400">
              Your trusted local travel agency in Siem Reap, Cambodia. Curated tours, comfortable stays, and reliable transport since 2015.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 hover:bg-primary-600 transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 hover:bg-primary-600 transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => handleNav('tours')} className="hover:text-primary-400 transition-colors">Tours &amp; Excursions</button></li>
              <li><button onClick={() => handleNav('stays')} className="hover:text-primary-400 transition-colors">Hotels &amp; Stays</button></li>
              <li><button onClick={() => handleNav('transport')} className="hover:text-primary-400 transition-colors">Transport &amp; Drivers</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-primary-400 transition-colors">About Us</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-primary-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-500 flex-shrink-0" />
                <span>Street 27, Wat Bo Village, Siem Reap, Cambodia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span>+855 63 966 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span>hello@tostravel.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Office Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <div>
                  <p className="text-white">Mon - Fri</p>
                  <p>7:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <div>
                  <p className="text-white">Sat - Sun</p>
                  <p>8:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ink-500">&copy; {new Date().getFullYear()} TOS Travel Agency. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
