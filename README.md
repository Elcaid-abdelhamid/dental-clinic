# Brightline Dental — Premium Dental Clinic Website

A production-ready, fully responsive dental clinic website built with Next.js 15 (App Router),
TypeScript, Tailwind CSS, shadcn/ui-style components, and Framer Motion. Designed as the
frontend foundation for a future AI chatbot and appointment booking system.

## Tech stack

- **Next.js 15** (App Router, Server Components by default)
- **TypeScript** (strict mode)
- **Tailwind CSS** with a custom blue/cyan medical design system + dark mode
- **shadcn/ui-style primitives** (Button, Card, Dialog, Accordion, Select, etc.) built on Radix UI
- **Framer Motion** for scroll and interaction animations
- **lucide-react** for icons
- **next-themes** for dark mode

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run production build locally
```

Ready to deploy on **Vercel** with zero configuration (`vercel deploy`).

## Project structure

```
app/                  → routes (App Router)
components/           → reusable UI building blocks
  ui/                 → shadcn-style primitives (Button, Card, Dialog...)
hooks/                → client-side React hooks (booking form, chat widget)
lib/                  → utilities and static content data
types/                → shared TypeScript types
public/               → static assets
```

## Pages implemented

Home · About · Services · Doctors · Appointment (booking) · Contact · FAQ · Privacy Policy · Terms

## Reusable components

`Navbar`, `Footer`, `Hero`, `ServiceCard`, `DoctorCard`, `Testimonial`, `FAQAccordion`,
`BookingCalendar`, `FloatingChatWidget`, `ContactForm`.

## What's already built (frontend only)

- **FloatingChatWidget** (`components/floating-chat-widget.tsx`) — full ChatGPT/Intercom-style
  widget: floating button with online indicator + pulse ring, unread badge, expandable window,
  typing indicator animation, quick replies, message list. Currently uses a mocked local
  response via `hooks/use-chat-widget.ts` — **no AI logic is wired up yet**.
- **BookingCalendar** (`components/booking-calendar.tsx`) — 4-step wizard: treatment + doctor
  selection → date + time slots → patient info → review & confirm, with a confirmation modal.
  State is managed in `hooks/use-booking-form.ts`. **No backend/persistence is connected yet.**
- **ContactForm** — client-side validated, currently simulates a submit with `setTimeout`.

## Integration roadmap (not yet implemented)

These are the intended next steps, each marked with a `// TODO` in the relevant file:

| Service | Where it plugs in | Notes |
|---|---|---|
| **OpenAI API** | `hooks/use-chat-widget.ts` → `sendMessage()` | Replace the mocked `setTimeout` reply with a real streaming completion call. Suggested: a `/app/api/chat/route.ts` edge route that proxies to OpenAI. |
| **n8n** | `hooks/use-chat-widget.ts`, `hooks/use-booking-form.ts`, `components/contact-form.tsx` | Use n8n webhooks to orchestrate lead capture, reminders, and multi-step automations after booking/contact submission. |
| **Supabase** | `hooks/use-booking-form.ts` → `submit()`, `components/contact-form.tsx` → `handleSubmit()` | Persist appointments, patients, and messages. Add `@supabase/supabase-js` and a server action or API route. |
| **Google Calendar** | `hooks/use-booking-form.ts` → `submit()` | On confirmed booking, create a calendar event via a server-side route using a service account or OAuth refresh token. |
| **WhatsApp API** | Booking confirmation + `FloatingChatWidget` | Send confirmation/reminder messages, or offer WhatsApp as a chat channel alongside the AI widget. |

Environment variable placeholders for all of the above are in `.env.example`.

## Design system

- Colors: white / sky-blue / cyan medical palette, defined as HSL CSS variables in
  `app/globals.css` (light + `.dark` theme).
- Rounded corners (`--radius: 1rem`), soft shadows (`shadow-soft`, `shadow-premium`, `shadow-glow`),
  and glassmorphism utilities (`.glass`, `.glass-strong`) are available globally.
- All interactive components are keyboard-accessible and use `focus-ring` for visible focus states.

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `nav`), skip-to-content link, `aria-label`s on
  icon-only buttons, accessible Radix primitives (Dialog, Accordion, Select) with correct
  focus trapping and ARIA attributes, alt text/roles on illustrations and maps.

## SEO

- Per-page `metadata` (title templates, description, Open Graph, Twitter card)
- `app/sitemap.ts` and `app/robots.ts` generated dynamically
- Semantic heading hierarchy and descriptive link text throughout
