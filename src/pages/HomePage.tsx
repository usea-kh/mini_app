import { ArrowRight, Star, MapPin, Compass, Calendar, Users, Award, Heart, Shield } from 'lucide-react';
import type { Page } from '../components/Header';
import { tours, stays, testimonials } from '../lib/data';
import TourCard from '../components/TourCard';
import type { Tour, Stay } from '../lib/data';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onBookTour: (tour: Tour) => void;
  onBookStay: (stay: Stay) => void;
}

export default function HomePage({ onNavigate, onBookTour, onBookStay }: HomePageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1508009603815-28b7ee6c5b45?w=1920&q=80&auto=format&fit=crop"
            alt="Angkor Wat temple at sunrise"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative container-wide text-center text-white py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in">
            <MapPin className="h-4 w-4" />
            Siem Reap, Cambodia
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl mx-auto text-balance animate-slide-up">
            Discover the magic of Angkor & beyond
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Curated tours, handpicked stays, and reliable transport — all organized by our local team in Siem Reap.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <button
              onClick={() => onNavigate('tours')}
              className="flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-700 transition-colors shadow-lg"
            >
              Explore tours
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => onNavigate('stays')}
              className="rounded-lg bg-white/10 backdrop-blur border border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Find a stay
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container-wide pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              {[
                { icon: Users, value: '12,000+', label: 'Happy travelers' },
                { icon: Compass, value: '50+', label: 'Tours & activities' },
                { icon: Award, value: '4.9/5', label: 'Average rating' },
                { icon: Calendar, value: '10 yrs', label: 'Local expertise' },
              ].map((stat) => (
                <div key={stat.label} className="text-center text-white">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary-300" />
                  <div className="text-2xl font-bold font-display">{stat.value}</div>
                  <div className="text-xs text-white/70 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Why TOS Travel</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 mt-2 mb-4">
              Travel with a team that knows Cambodia inside out
            </h2>
            <p className="text-ink-600 leading-relaxed">
              We're a locally owned agency based in Siem Reap. Every tour, stay, and transfer is personally vetted by our team.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Heart, title: 'Local expertise', desc: 'Our guides are born and raised in Siem Reap. They know the hidden spots and the stories behind the stones.' },
              { icon: Shield, title: 'No hidden costs', desc: 'Transparent pricing with no surprise fees. What you see is what you pay — and what you pay for.' },
              { icon: Users, title: 'Small groups', desc: 'We keep tour groups small for a personal experience. You\'re a guest, not a number on a bus.' },
              { icon: Calendar, title: 'Flexible booking', desc: 'Plans change. We offer free rescheduling and friendly cancellation policies on most bookings.' },
              { icon: Award, title: 'Award-winning', desc: 'Recognized by TripAdvisor as a top Siem Reap tour operator for five consecutive years.' },
              { icon: Compass, title: 'Off-the-beaten-path', desc: 'Beyond Angkor Wat, we take you to hidden temples, local villages, and places most tourists never see.' },
            ].map((feature) => (
              <div key={feature.title} className="card-shadow rounded-2xl p-6 bg-ink-50/50 hover:bg-white transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-ink-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular tours */}
      <section className="py-20 bg-ink-50">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Popular tours</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 mt-2">
                Most loved experiences
              </h2>
            </div>
            <button
              onClick={() => onNavigate('tours')}
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              View all tours
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.slice(0, 3).map((tour) => (
              <TourCard key={tour.id} tour={tour} onBook={onBookTour} />
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <button
              onClick={() => onNavigate('tours')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
            >
              View all tours
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured stays preview */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Where to stay</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 mt-2">
                Handpicked accommodations
              </h2>
            </div>
            <button
              onClick={() => onNavigate('stays')}
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              View all stays
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stays.map((stay) => (
              <div
                key={stay.id}
                onClick={() => onBookStay(stay)}
                className="card-shadow card-shadow-hover bg-white rounded-2xl overflow-hidden cursor-pointer group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={stay.image} alt={stay.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-2.5 py-0.5 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-accent-400 text-accent-400" />
                    <span className="text-xs font-semibold text-ink-900">{stay.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-sm text-ink-900 mb-1">{stay.name}</h3>
                  <p className="text-xs text-ink-500 mb-2 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {stay.location}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-primary-600">${stay.pricePerNight}</span>
                    <span className="text-xs text-ink-400">/night</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-ink-900">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">Traveler stories</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2 mb-4">
              Loved by travelers worldwide
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.id} className="rounded-2xl bg-ink-800 p-6 border border-ink-700">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="text-sm text-ink-300 leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-semibold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-ink-400">{t.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="container-wide text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Ready for your Cambodian adventure?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch today and let us craft the perfect Siem Reap experience for you.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-primary-600 hover:bg-ink-50 transition-colors shadow-lg"
          >
            Contact us
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
