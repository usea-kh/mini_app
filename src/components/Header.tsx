import { MapPin } from 'lucide-react';

export type Page = 'home' | 'tours' | 'stays' | 'transport' | 'about' | 'contact';

interface HeaderProps {
  onNavigate: (page: Page) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 py-4">
      <div className="container-wide">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white font-display font-bold text-lg">
            TOS
          </div>
          <div className="text-left">
            <span className="font-display font-bold text-lg block leading-none text-white">TOS Travel</span>
            <span className="flex items-center gap-1 text-xs text-white/80">
              <MapPin className="h-3 w-3" />
              Siem Reap, Cambodia
            </span>
          </div>
        </button>
      </div>
    </header>
  );
}
