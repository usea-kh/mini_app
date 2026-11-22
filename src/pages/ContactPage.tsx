import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Check, Loader2, Send } from 'lucide-react';

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="pt-24">
      <section className="relative py-16 bg-ink-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-primary-900" />
        <div className="relative container-wide text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Get in Touch</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Questions about tours, stays, or custom itineraries? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-ink-50">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl p-6 card-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-ink-900 mb-1">Visit us</h3>
                <p className="text-sm text-ink-600">Street 27, Wat Bo Village<br />Siem Reap, Cambodia</p>
              </div>

              <div className="bg-white rounded-2xl p-6 card-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-100 text-secondary-600 mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-ink-900 mb-1">Call us</h3>
                <p className="text-sm text-ink-600">
                  <a href="tel:+85563966789" className="hover:text-primary-600 transition-colors">+855 63 966 789</a><br />
                  <a href="tel:+85512345678" className="hover:text-primary-600 transition-colors">+855 12 345 678</a> (WhatsApp)
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 card-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-accent-600 mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-ink-900 mb-1">Email us</h3>
                <p className="text-sm text-ink-600">
                  <a href="mailto:hello@tostravel.com" className="hover:text-primary-600 transition-colors">hello@tostravel.com</a><br />
                  <a href="mailto:bookings@tostravel.com" className="hover:text-primary-600 transition-colors">bookings@tostravel.com</a>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 card-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success-100 text-success-600 mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-ink-900 mb-1">Office hours</h3>
                <p className="text-sm text-ink-600">
                  Mon - Fri: 7:00 AM - 8:00 PM<br />
                  Sat - Sun: 8:00 AM - 6:00 PM<br />
                  <span className="text-ink-400">(GMT+7, Cambodia time)</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 card-shadow">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-50 mb-4">
                      <Check className="h-8 w-8 text-success-600" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-ink-900 mb-2">Message sent!</h3>
                    <p className="text-sm text-ink-600 mb-6 max-w-md mx-auto">
                      Thanks for reaching out, {form.name}. We'll get back to you at {form.email} within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                      className="rounded-lg bg-ink-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-ink-800 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display font-bold text-2xl text-ink-900 mb-2">Send us a message</h2>
                    <p className="text-sm text-ink-500 mb-6">Fill out the form below and we'll respond within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
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

                      <div>
                        <label className="block text-sm font-medium text-ink-700 mb-1.5">Subject</label>
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full rounded-lg border border-ink-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                        >
                          <option value="">Select a topic...</option>
                          <option value="tour">Tour inquiry</option>
                          <option value="stay">Hotel booking</option>
                          <option value="transport">Transport request</option>
                          <option value="custom">Custom itinerary</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink-700 mb-1.5">Message</label>
                        <textarea
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          rows={6}
                          className="w-full rounded-lg border border-ink-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                          placeholder="Tell us about your trip plans, dates, group size, and any questions..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors disabled:opacity-60"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
