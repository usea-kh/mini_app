import { House, Compass, Heart, CalendarDays, Info, Send } from 'lucide-react';
import type { Page } from './Header';

interface FooterProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { label: string; page: Page; icon: typeof House }[] = [
  { label: 'Home', page: 'home', icon: House },
  { label: 'Explore', page: 'tours', icon: Compass },
  { label: 'Stays', page: 'stays', icon: Heart },
  { label: 'Trips', page: 'transport', icon: CalendarDays },
  { label: 'About', page: 'about', icon: Info },
  { label: 'Contact', page: 'contact', icon: Send },
];

export default function Footer({ currentPage, onNavigate }: FooterProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-ink-200 bg-white/95 shadow-[0_-4px_14px_rgba(15,23,42,0.12)] backdrop-blur-md" aria-label="Main navigation">
      <div className="mx-auto flex max-w-3xl items-stretch justify-between px-2 sm:px-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = currentPage === item.page;
          return (
            <button
              key={item.page}
              onClick={() => handleNav(item.page)}
              className={`relative flex min-w-0 flex-1 flex-col items-center gap-1 px-1 py-2.5 text-[11px] font-medium transition-colors sm:py-3 sm:text-xs ${active ? 'text-primary-600' : 'text-ink-400 hover:text-primary-500'}`}
            >
              {active && <span className="absolute top-0 h-0.5 w-10 rounded-full bg-primary-600" />}
              <Icon className={`h-5 w-5 sm:h-5 sm:w-5 ${active ? 'stroke-[2.5]' : ''}`} />
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
