import { Star, Clock, Users, ArrowRight } from 'lucide-react';
import type { Tour } from '../lib/data';

interface TourCardProps {
  tour: Tour;
  onBook: (tour: Tour) => void;
}

export default function TourCard({ tour, onBook }: TourCardProps) {
  return (
    <article className="card-shadow card-shadow-hover bg-white rounded-2xl overflow-hidden flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-3 py-1">
          <Star className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
          <span className="text-xs font-semibold text-ink-900">{tour.rating}</span>
          <span className="text-xs text-ink-500">({tour.reviews})</span>
        </div>
        <div className="absolute bottom-4 right-4 rounded-full bg-primary-600 px-3 py-1">
          <span className="text-sm font-bold text-white">${tour.price}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-ink-900 mb-2 leading-snug">{tour.title}</h3>

        <div className="flex items-center gap-4 text-xs text-ink-500 mb-3">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {tour.groupSize}
          </span>
        </div>

        <p className="text-sm text-ink-600 leading-relaxed mb-4 flex-1">{tour.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tour.highlights.slice(0, 3).map((h) => (
            <span key={h} className="rounded-full bg-secondary-50 text-secondary-700 px-3 py-1 text-xs font-medium">
              {h}
            </span>
          ))}
        </div>

        <button
          onClick={() => onBook(tour)}
          className="flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-600 transition-colors"
        >
          Book this tour
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
