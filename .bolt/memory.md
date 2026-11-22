# Project memory

## Product intent & audience

- Travel agency website for Cambodia-based "TOS Travel Agency"
- Showcases tours, accommodations, transport rentals, agency info, and contact
- Audience: tourists planning trips to Cambodia

## Brand personality & voice

- Travel/tourism brand; approachable and promotional
- Oriented around curated experiences and ease of booking

## Visual design & UX direction

- Orange/blue color theme (defined in config)
- Fully responsive; sticky header that transitions from transparent to solid on scroll
- Mobile menu for small screens
- Smooth animations throughout
- Home page sections: hero, stats bar, "why choose us" features, popular tours, featured stays, testimonials, CTA
- Filtering UI: category filters (tours), type filters with price/rating sorting (stays)
- Reusable booking modal triggered from "Book" actions on tours and stays
- Shared component layer + separate page components
- Large footer section removed; compact bottom navigation bar remains fixed at the bottom on every page for site navigation

## Decisions, constraints & rationale

- Stack: Vite 7.3.7 + React + TypeScript
- Entry point: `/src/main.tsx` (referenced by `index.html`)
- Project has experienced `src/` directory being wiped/reset; full rebuild was needed
- Both production build and TypeScript type-check must pass cleanly before deployment
- Pages: Home, Tours, Stays, Transport, About, Contact
- Footer info (agency description, contact details, office hours, social links) intentionally removed per user request; bottom nav retained for navigation

## Open questions & assumptions

- Root cause of recurring `src/` deletion is unknown; may need investigation if it recurs
- No `.bolt/prompt` provided; all current context is inferred from project state and interactions
- Backend/contact form submission mechanism not yet defined (form exists but backend integration unclear)
- Contact details and social links previously in footer may need to surface elsewhere (e.g., Contact page) if still needed