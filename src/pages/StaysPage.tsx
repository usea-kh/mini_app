import { useState } from 'react';
import { stays } from '../lib/data';
import type { Stay } from '../lib/data';
import StayCard from '../components/StayCard';

interface StaysPageProps {
  onBookStay: (stay: Stay) => void;
}

const types = ['All', 'Hotel', 'Boutique', 'Villa', 'Hostel'];

export default function StaysPage({ onBookStay }: StaysPageProps) {
  const [active, setActive] = useState('All');
  const [sortBy, setSortBy] = useState('recommended');

  let filtered = active === 'All' ? stays : stays.filter((s) => s.type === active);

  if (sortBy === 'price-low') filtered = [...filtered].sort((a, b) => a.pricePerNight - b.pricePerNight);
  if (sortBy === 'price-high') filtered = [...filtered].sort((a, b) => b.pricePerNight - a.pricePerNight);
  if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className="pt-24">
      <section className="relative py-16 bg-ink-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80&auto=format&fit=crop"
          alt="Luxury hotel pool"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative container-wide text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Hotels &amp; Stays</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            From budget-friendly hostels to private villas - find your perfect home base in Siem Reap.
          </p>
        </div>
      </section>

      <section className="py-12 bg-ink-50">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setActive(type)}
                  className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === type
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-ink-600 hover:bg-ink-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((stay) => (
              <StayCard key={stay.id} stay={stay} onBook={onBookStay} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
