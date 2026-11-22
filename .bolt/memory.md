# Project memory

## Product intent & audience

- **TOS Travel Agency** — a travel booking website for Siem Reap, Cambodia tours.
- Target audience: tourists planning trips to Siem Reap (Angkor temples, adventure, cultural, multi-day tours).
- Core user flows: browse tours/stays/transport, filter & sort, view details, book via modal, submit contact form.

## Brand personality & voice

- Tourism/hospitality brand; warm, inviting, trustworthy.
- Tone is promotional yet informative — emphasizes local expertise and curated experiences.

## Visual design & UX direction

- **Color palette:** orange + blue + neutrals (defined in config; warm accent + cool secondary).
- **Typography:** Inter and Poppins (defined in config).
- **Layout:** responsive multi-page SPA; sticky header transparent over hero sections, turns solid white on scroll; mobile menu for small screens.
- **Pages:** Home (hero, stats, features, popular tours, featured stays, testimonials, CTA), Tours (category filtering: Angkor temples / adventure / cultural / multi-day; six curated tours), Stays (type filtering; sorting by price/rating; four accommodation types), Transport (tuk tuk / sedan / van / bus with pricing), About (story/values), Contact (form + office details).
- **Components:** Header, Footer, BookingModal (opens from tour/stay "Book" buttons), page components.
- **Imagery:** CSS gradients + Unsplash source URLs (Pexels unavailable).
- **Patterns:** client-side filtering & sorting; modal-based booking; form submission for contact.

## Decisions, constraints & rationale

- **Stack:** Vite 7 + React + TypeScript + Supabase (client).
- **Root cause of original deployment failure:** entire `src/` directory was missing despite valid `index.html` and config files; rebuilt from scratch.
- **TypeScript:** requires `vite-env.d.ts` for Vite env type declarations; both `vite build` and typecheck must pass.
- **Build verified:** production build and typecheck both pass after rebuild.

## Open questions & assumptions

- Supabase integration present but backend schema/config details unverified.
- Booking modal is UI-only; actual booking persistence/confirmation flow not confirmed.
- Contact form submission handling (email service vs. Supabase) not confirmed.
- Imagery uses Unsplash source URLs; long-term image strategy (licensed assets, CDN) undecided.