import { Star, MapPin, BedDouble } from 'lucide-react';
import type { Stay } from '../lib/data';

interface StayCardProps {
  stay: Stay;
  onBook: (stay: Stay) => void;
}

export default function StayCard({ stay, onBook }: StayCardProps) {
  return (
    <article className="card-shadow card-shadow-hover bg-white rounded-2xl overflow-hidden flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img
          src={stay.image}
          alt={stay.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
          <span className="text-xs font-semibold text-ink-900">{stay.rating}</span>
          <span className="text-xs text-ink-500">({stay.reviews})</span>
        </div>
        <div className="absolute top-4 right-4 rounded-full bg-ink-900/80 backdrop-blur px-3 py-1">
          <span className="text-xs font-medium text-white">{stay.type}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-ink-900 mb-1">{stay.name}</h3>
        <p className="flex items-center gap-1 text-xs text-ink-500 mb-3">
          <MapPin className="h-3.5 w-3.5" />
          {stay.location}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {stay.amenities.slice(0, 5).map((a) => (
            <span key={a} className="rounded-full bg-ink-50 text-ink-600 px-2.5 py-1 text-xs font-medium flex items-center gap-1">
              <BedDouble className="h-3 w-3" />
              {a}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-ink-100">
          <div>
            <span className="text-2xl font-bold text-primary-600">${stay.pricePerNight}</span>
            <span className="text-xs text-ink-500"> / night</span>
          </div>
          <button
            onClick={() => onBook(stay)}
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
          >
            Book stay
          </button>
        </div>
      </div>
    </article>
  );
}
