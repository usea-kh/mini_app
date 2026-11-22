import { CarFront, Bus, Check } from 'lucide-react';
import { transportOptions } from '../lib/data';

const iconMap: Record<string, typeof CarFront> = {
  car: CarFront,
  'car-front': CarFront,
  bus: Bus,
};

export default function TransportPage() {
  return (
    <div className="pt-24">
      <section className="relative py-16 bg-ink-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1528127269322-539801943592?w=1600&q=80&auto=format&fit=crop"
          alt="Cambodian road"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative container-wide text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Transport &amp; Drivers</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Reliable, comfortable transport with experienced local drivers. From tuk tuks to private vans.
          </p>
        </div>
      </section>

      <section className="py-12 bg-ink-50">
        <div className="container-wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {transportOptions.map((option) => {
              const Icon = iconMap[option.icon] || CarFront;
              return (
                <div key={option.id} className="card-shadow card-shadow-hover bg-white rounded-2xl p-6 flex flex-col">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600 mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ink-900 mb-1">{option.vehicle}</h3>
                  <p className="text-xs text-ink-500 mb-4">{option.capacity}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {option.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink-600">
                        <Check className="h-4 w-4 text-success-500 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-ink-100">
                    <div>
                      <span className="text-2xl font-bold text-primary-600">${option.pricePerDay}</span>
                      <span className="text-xs text-ink-500"> /day</span>
                    </div>
                    <a
                      href="#contact-cta"
                      className="rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-600 transition-colors"
                    >
                      Request
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div id="contact-cta" className="mt-16 rounded-2xl bg-white p-8 sm:p-12 card-shadow text-center">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink-900 mb-4">
              Need a custom transport arrangement?
            </h2>
            <p className="text-ink-600 max-w-2xl mx-auto mb-6">
              Whether it's airport transfers, multi-day tours, or group charters - we can arrange exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+85563966789"
                className="rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
              >
                Call +855 63 966 789
              </a>
              <a
                href="mailto:hello@tostravel.com"
                className="rounded-lg border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 hover:bg-ink-50 transition-colors"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
