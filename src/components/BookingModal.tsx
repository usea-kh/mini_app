import { useState, useEffect } from 'react';
import { X, Check, Loader2, Calendar, Users } from 'lucide-react';

interface BookingModalProps {
  open: boolean;
  title: string;
  subtitle: string;
  price: number;
  priceLabel: string;
  onClose: () => void;
}

export default function BookingModal({ open, title, subtitle, price, priceLabel, onClose }: BookingModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', date: '', guests: '2', notes: '' });

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setForm({ name: '', email: '', date: '', guests: '2', notes: '' });
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-scale-in">
        {submitted ? (
          <div className="p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-50 mb-4">
              <Check className="h-8 w-8 text-success-600" />
            </div>
            <h3 className="font-display font-bold text-xl text-ink-900 mb-2">Booking request sent!</h3>
            <p className="text-sm text-ink-600 mb-6">
              Thank you, {form.name || 'traveler'}! Our team will confirm your booking for <strong>{title}</strong> within 24 hours at {form.email}.
            </p>
            <button
              onClick={onClose}
              className="rounded-lg bg-ink-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-ink-800 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between p-6 border-b border-ink-100">
              <div>
                <h3 className="font-display font-bold text-lg text-ink-900">Book: {title}</h3>
                <p className="text-sm text-ink-500 mt-0.5">{subtitle}</p>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-ink-50 transition-colors" aria-label="Close">
                <X className="h-5 w-5 text-ink-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">Full name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-ink-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-ink-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="jane@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full rounded-lg border border-ink-200 pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full rounded-lg border border-ink-200 pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
                    >
                      {['1', '2', '3', '4', '5', '6+'].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">Special requests (optional)</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={3}
                  className="w-full rounded-lg border border-ink-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Dietary needs, hotel pickup, etc."
                />
              </div>

              <div className="flex items-center justify-between rounded-lg bg-primary-50 px-4 py-3">
                <span className="text-sm text-ink-700">{priceLabel}</span>
                <span className="text-xl font-bold text-primary-700">${price}</span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending request...
                  </>
                ) : (
                  'Confirm booking request'
                )}
              </button>
              <p className="text-center text-xs text-ink-400">No payment required now — we'll confirm availability first.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
