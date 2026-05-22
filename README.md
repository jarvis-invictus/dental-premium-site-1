# Dental Standard — White-Label Dental Clinic Website Template

> **Tier:** Standard (Mid-tier)
> **Live Demo:** [dental-standard-v2.vercel.app](https://dental-standard-v2.vercel.app)
> **Stack:** Next.js 14 · TypeScript · Tailwind CSS · Framer Motion

A fully white-label, production-ready dental clinic website. Every text, color, image, phone number, address, and SEO value is controlled from a **single config file** (`lib/site-config.ts`). Deploying for a new clinic = update the config, push, done.

---

## Product Tier

| Tier | Repo | Description |
|---|---|---|
| Starter | `dental-starter` | Basic single-page, minimal features |
| **Standard** | **`dental-standard`** *(this repo)* | Full-featured, white-label, SEO-ready |
| Premium | `dental-premium` | *(in development)* |

---

## Features

- **Single-file config** — all clinic details, colors, SEO, schema in `lib/site-config.ts`
- **Dentoi-inspired theme** — mint green (`#09E0A7`) + electric cyan (`#0DC6FF`) color system
- **Inter + Inter Tight fonts** — clean, modern, no serif
- **Full SEO** — JSON-LD schema (Dentist + WebSite + FAQ), OpenGraph, Twitter cards, sitemap, robots.txt, llms.txt
- **WhatsApp appointment booking** — pre-filled message, no backend needed
- **Sections:** Header · Hero · Services · Features · About · Testimonials · FAQ · Appointment Form · Footer
- **Mobile sticky CTA bar** — call + book buttons pinned to bottom on mobile
- **Framer Motion animations** — scroll-triggered, smooth, performant
- **Floating WhatsApp button** + AI chatbot widget

---

## Project Structure

```
dental-standard/
├── app/
│   ├── globals.css          # CSS variables (colors, fonts)
│   ├── layout.tsx           # Root layout — all SEO metadata + schema pulled from siteConfig
│   ├── page.tsx             # Home page — assembles all sections
│   ├── robots.ts            # Dynamic robots.txt
│   ├── sitemap.ts           # Dynamic sitemap (home + all 9 service pages)
│   └── services/
│       └── [slug]/
│           └── page.tsx     # Individual service detail page
├── components/
│   ├── Header.tsx           # Sticky nav with mobile menu
│   ├── Hero.tsx             # Hero section with orbital SVG rings + trust widget
│   ├── Services.tsx         # 9-service grid with Lucide icons
│   ├── Features.tsx         # Why choose us — 3 feature cards + image
│   ├── About.tsx            # Doctor profile with animated frame
│   ├── Testimonials.tsx     # Embla carousel with autoplay + dot nav
│   ├── FAQ.tsx              # Accordion FAQ from siteConfig.faqs
│   ├── AppointmentForm.tsx  # Date/time picker → WhatsApp booking
│   ├── Footer.tsx           # Links, contact, social icons
│   ├── Preloader.tsx        # 1.2s branded loading screen
│   ├── FloatingWhatsApp.tsx # Fixed WhatsApp CTA button
│   ├── MobileStickyBar.tsx  # Mobile bottom bar (Call + Book)
│   ├── ChatbotWidget.tsx    # AI chatbot widget
│   ├── SmoothScroll.tsx     # Lenis smooth scroll wrapper
│   └── ui/
│       └── avatar.tsx       # Radix UI avatar component
├── lib/
│   ├── site-config.ts       # ⭐ THE ONLY FILE YOU NEED TO EDIT for a new clinic
│   ├── services_data.ts     # All 9 service definitions (title, description, why[], slug)
│   └── utils.ts             # cn() helper (clsx + tailwind-merge)
└── public/
    ├── images/              # Logo, hero, doctor, patient avatars, service SVGs
    └── llms.txt             # LLM reference file for AI crawlers
```

---

## How to Deploy for a New Clinic

### 1. Clone the repo
```bash
git clone https://github.com/sahil-b-09/dental-standard.git my-clinic
cd my-clinic
npm install
```

### 2. Edit `lib/site-config.ts` only
Update every field — name, phone, address, doctor, colors, social links, FAQs, testimonials. All SEO, schema, and UI update automatically.

```ts
export const siteConfig = {
  siteUrl: "https://your-clinic.vercel.app",
  locale: "en-IN",
  foundingYear: "2010",
  name: "Your Clinic Name",
  // ... rest of config
}
```

### 3. Replace images in `public/images/`
| File | Replace with |
|---|---|
| `logo.png` | Clinic logo |
| `hero.avif` | Hero/patient photo |
| `doctor-ananya.png` | Doctor's photo |

### 4. Run locally
```bash
npm run dev
# Visit http://localhost:3000
```

### 5. Deploy to Vercel
```bash
# Connect repo to Vercel — auto-deploys on every push to main
```

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Embla Carousel | Testimonials carousel |
| Lucide React | Icons |
| Radix UI Avatar | Avatar component |
| Inter + Inter Tight | Typography (Google Fonts) |

---

## Key Config Fields Reference

```ts
siteConfig = {
  siteUrl        // Vercel URL — used in all SEO meta tags
  locale         // e.g. "en-IN" — used in html lang + schema
  foundingYear   // Used in schema
  name           // Clinic name — appears everywhere
  subtitle       // Tagline under logo
  phone          // Primary phone (WhatsApp booking)
  email          // Contact email
  address: {
    line1/2/3    // Display address lines
    locality     // Neighbourhood (e.g. "Baner")
    city         // City (e.g. "Pune")
    state        // State (e.g. "Maharashtra")
    postalCode   // PIN code
    country      // "IN"
    geo          // { latitude, longitude } for schema
    areaServed   // Array of localities served
    googleMapsLink / mapEmbedUrl
  }
  social         // whatsapp, instagram, facebook, twitter
  images         // logo, hero, features
  theme.colors   // primary, secondary, accent (hex)
  hero           // tagline, headings, description
  features       // section content + 3 feature items
  doctor         // name, qualification, bio, image, stats
  testimonials   // 6 patient reviews
  faqs           // 5 FAQ items → also generates FAQ schema
}
```

---

## Scripts

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

---

## Notes for AI Agents

- **Do not hardcode clinic names, cities, or URLs anywhere** — always use `siteConfig.*`
- `layout.tsx` is fully variable — no hardcoded strings
- All colors come from `siteConfig.theme.colors` or CSS variables in `globals.css`
- `font-serif` class is intentionally absent — Inter/Inter Tight only
- TypeScript lint errors in IDE are false positives (node_modules not installed locally) — Vercel build resolves all types
