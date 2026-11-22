import { useState } from 'react';
import Header, { type Page } from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import HomePage from './pages/HomePage';
import ToursPage from './pages/ToursPage';
import StaysPage from './pages/StaysPage';
import TransportPage from './pages/TransportPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import type { Tour, Stay } from './lib/data';

interface BookingState {
  open: boolean;
  title: string;
  subtitle: string;
  price: number;
  priceLabel: string;
}

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [booking, setBooking] = useState<BookingState>({
    open: false,
    title: '',
    subtitle: '',
    price: 0,
    priceLabel: '',
  });

  const navigate = (p: Page) => setPage(p);

  const bookTour = (tour: Tour) => {
    setBooking({
      open: true,
      title: tour.title,
      subtitle: `${tour.duration} · ${tour.groupSize}`,
      price: tour.price,
      priceLabel: 'per person',
    });
  };

  const bookStay = (stay: Stay) => {
    setBooking({
      open: true,
      title: stay.name,
      subtitle: `${stay.type} · ${stay.location}`,
      price: stay.pricePerNight,
      priceLabel: 'per night',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={navigate} />

      <main className="flex-1">
        {page === 'home' && <HomePage onNavigate={navigate} onBookTour={bookTour} onBookStay={bookStay} />}
        {page === 'tours' && <ToursPage onBookTour={bookTour} />}
        {page === 'stays' && <StaysPage onBookStay={bookStay} />}
        {page === 'transport' && <TransportPage />}
        {page === 'about' && <AboutPage onNavigate={navigate} />}
        {page === 'contact' && <ContactPage />}
      </main>

      <Footer currentPage={page} onNavigate={navigate} />

      <BookingModal
        open={booking.open}
        title={booking.title}
        subtitle={booking.subtitle}
        price={booking.price}
        priceLabel={booking.priceLabel}
        onClose={() => setBooking({ ...booking, open: false })}
      />
    </div>
  );
}
