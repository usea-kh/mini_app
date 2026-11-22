import { Award, Heart, Leaf, Users, Target, Eye } from 'lucide-react';
import type { Page } from '../components/Header';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="pt-24">
      <section className="relative py-16 bg-ink-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1508298333733-491f15c0399b?w=1600&q=80&auto=format&fit=crop"
          alt="Siem Reap landscape"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative container-wide text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">About TOS Travel</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A locally owned and operated travel agency based in the heart of Siem Reap.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Our story</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 mt-2 mb-6">
                Born from a love of Cambodia
              </h2>
              <div className="space-y-4 text-ink-600 leading-relaxed">
                <p>
                  TOS Travel Agency was founded in 2015 by a group of friends who grew up exploring the temples of Angkor. What started as informal tours for visiting friends has grown into one of Siem Reap's most trusted travel agencies.
                </p>
                <p>
                  We believe travel should be authentic, respectful, and unforgettable. Every tour we lead, every hotel we recommend, and every driver we work with is personally vetted by our team. We're not just selling tours — we're sharing our home.
                </p>
                <p>
                  Today, we serve over 2,000 travelers annually from our office in Wat Bo Village, just minutes from the Angkor Archaeological Park.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1530321341288-9c27f9541c5f?w=800&q=80&auto=format&fit=crop"
                alt="Cambodian temple"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white rounded-2xl p-6 shadow-xl hidden sm:block">
                <p className="text-3xl font-bold font-display">10+</p>
                <p className="text-sm text-white/85">years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink-50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">What drives us</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 mt-2">Our values</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Heart, title: 'Authentic experiences', desc: 'We go beyond the tourist trail to show you the real Cambodia — its people, its food, its hidden corners.' },
              { icon: Leaf, title: 'Responsible tourism', desc: 'We support local businesses, minimize environmental impact, and ensure tourism benefits the community.' },
              { icon: Users, title: 'Community first', desc: 'A portion of every booking supports local schools and education programs in rural Siem Reap.' },
              { icon: Target, title: 'Excellence', desc: 'We hold ourselves to the highest standards. If something isn\'t right, we fix it — no excuses.' },
              { icon: Eye, title: 'Transparency', desc: 'Honest pricing, clear itineraries, and no hidden fees. You always know exactly what you\'re getting.' },
              { icon: Award, title: 'Quality', desc: 'Every guide, driver, and partner is personally vetted. We only work with people we trust.' },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 card-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-ink-900 mb-2">{value.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-ink-900 mb-4">
            Ready to explore with us?
          </h2>
          <p className="text-ink-600 mb-8">
            Browse our tours or get in touch — we'd love to help plan your trip.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('tours')}
              className="rounded-lg bg-primary-600 px-8 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
            >
              Browse tours
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="rounded-lg border border-ink-200 px-8 py-3 text-sm font-semibold text-ink-700 hover:bg-ink-50 transition-colors"
            >
              Get in touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
