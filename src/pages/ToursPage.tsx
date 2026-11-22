import { useState } from 'react';
import { Filter } from 'lucide-react';
import { tours } from '../lib/data';
import type { Tour } from '../lib/data';
import TourCard from '../components/TourCard';

interface ToursPageProps {
  onBookTour: (tour: Tour) => void;
}

const categories = [
  { value: 'all', label: 'All tours' },
  { value: 'angkor', label: 'Angkor temples' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'cultural', label: 'Cultural' },
  { value: 'multi-day', label: 'Multi-day' },
];

export default function ToursPage({ onBookTour }: ToursPageProps) {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? tours : tours.filter((t) => t.category === active);

  return (
    <div className="pt-24">
      <section className="relative py-16 bg-ink-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1530321341288-9c27f9541c5f?w=1600&q=80&auto=format&fit=crop"
          alt="Cambodian temple ruins"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative container-wide text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Tours & Excursions</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            From sunrise at Angkor Wat to hidden jungle temples — find your perfect Cambodian adventure.
          </p>
        </div>
      </section>

      <section className="py-12 bg-ink-50">
        <div className="container-wide">
          <div className="flex items-center gap-2 mb-8 overflow-x-auto scrollbar-hide pb-2">
            <Filter className="h-4 w-4 text-ink-400 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === cat.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-ink-600 hover:bg-ink-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tour) => (
              <TourCard key={tour.id} tour={tour} onBook={onBookTour} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-ink-500 py-12">No tours found in this category.</p>
          )}
        </div>
      </section>
    </div>
  );
}
