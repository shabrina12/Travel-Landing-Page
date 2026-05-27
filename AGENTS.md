# AGENTS.md — Kerala Tour Information / Before Holiday

## 1. Project Overview

- **Domain:** [keralatour.info](https://keralatour.info) — travel booking / lead generation platform.
- **Brand:** BH Holidays / Before Holiday.
- **Purpose:** Marketing website to showcase Kerala (and Karnataka, Tamil Nadu) tour packages, capture leads via forms + WhatsApp, and forward inquiries to an external CRM.
- **Current state:** Frontend-only Next.js marketing site. No backend (Express/API), no database (Prisma/PostgreSQL), no payment processing (Razorpay), no admin dashboard, no auth/roles — these are **not present in this repository**.

---

## 2. Architecture Summary

```
User ──► Next.js 14 (App Router) ──► Sanity CMS (content)
        │
        ├── Static pages (/karnataka, /tamil-nadu, etc.)
        ├── Dynamic pages (/kerala-tour-packages/[slug], /[slug])
        ├── Components (client + server)
        ├── Hardcoded data (constants/index.ts)
        ├── API Route: POST /api/lead ──► External CRM (crm.before.holiday)
        └── Integrations: GTM, FB Pixel, WhatsApp
```

---

## 3. Folder Structure

```
Travel-Landing-Page/
├── app/                          # Next.js App Router
│   ├── [slug]/page.tsx           # Catch-all dynamic page (simplistic, needs work)
│   ├── api/lead/route.ts         # POST /api/lead — forwards to external CRM
│   ├── karnataka/page.tsx        # Karnataka destination page
│   ├── kerala-tour-packages/
│   │   └── [slug]/page.tsx       # Tour package detail page (Sanity-driven)
│   ├── tamil-nadu/page.tsx       # Tamil Nadu destination page
│   ├── privacy-policy/page.tsx
│   ├── terms-and-conditions/page.tsx
│   ├── layout.tsx                # Root layout (GTM, MetaPixel, Navbar, Footer, WhatsApp)
│   ├── page.tsx                  # Homepage (Sanity + fallback static)
│   ├── globals.css
│   ├── robots.txt
│   └── sitemap.ts
├── components/
│   ├── Navbar.tsx                # Client — nav + LeadPopupProvider context
│   ├── Hero.tsx                  # Client — hero section
│   ├── Services.tsx              # Client — service cards
│   ├── TourPackages.tsx          # Client — package grid with filter + PackageModal
│   ├── DynamicTourPackages.tsx   # Client — thin wrapper
│   ├── Destination.tsx           # Client — destination grid
│   ├── TravelPoint.tsx           # Client — about section
│   ├── Testimonials.tsx          # Client — Flowbite carousel
│   ├── ContactForm.tsx           # Client — contact/quote form
│   ├── LeadPopupForm.tsx         # Client — exit-intent + timed popup (2-step), context provider
│   ├── PackageModal.tsx          # Client — modal inquiry form for a specific package
│   ├── Footer.tsx                # Server
│   ├── Newsletter.tsx            # Server
│   ├── Sponsor.tsx               # Server
│   ├── Title.tsx                 # Server
│   ├── Button.tsx                # Server
│   ├── Seo.tsx                   # Server — exports metadata object
│   ├── MetaPixel.tsx             # Client — Facebook Pixel
│   └── WhatsAppFloat.tsx         # Client — floating WhatsApp button
├── constants/index.ts            # All hardcoded data (packages, destinations, nav, contact info)
├── lib/
│   ├── sanityClient.ts           # Sanity client (stub-fallback if no projectId)
│   ├── sanityConfig.ts           # Sanity config helpers
│   ├── queries.ts                # GROQ queries
│   ├── imageUrl.ts               # Stub urlFor function
│   └── types.ts                  # TypeScript interfaces for CMS data
├── public/                       # Static assets (images, SVGs)
├── sanity/kerala-tour/           # Sanity Studio (separate npm project)
│   ├── schemaTypes/
│   │   ├── index.ts
│   │   ├── homepage.ts           # Homepage CMS schema
│   │   └── tourPackage.ts        # Tour package CMS schema
│   ├── sanity.config.ts
│   ├── sanity.cli.ts
│   └── package.json
├── .env.example                  # Strapi vars (legacy — unused)
├── .env.local.example            # Sanity vars template
├── .gitignore
├── .npmrc                        # legacy-peer-deps=true
├── next.config.js                # Empty config
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 4. Frontend Summary

### Routes

| Route | File | Type | Notes |
|-------|------|------|-------|
| `/` | `app/page.tsx` | Server (async) | Fetches Sanity `homepage` document. Falls back to static data if CMS returns null. |
| `/[slug]` | `app/[slug]/page.tsx` | Server (async) | **Catch-all.** Fetches a single `tourPackage` by slug. Currently renders minimal HTML. Used for footer links like `/Lakshadweep`. |
| `/kerala-tour-packages/[slug]` | `app/kerala-tour-packages/[slug]/page.tsx` | Server (async) | Full tour package detail page with image, pricing, tags, CTA buttons. |
| `/karnataka` | `app/karnataka/page.tsx` | — | Static destination page. |
| `/tamil-nadu` | `app/tamil-nadu/page.tsx` | — | Static destination page. |
| `/terms-and-conditions` | `app/terms-and-conditions/page.tsx` | — | Static legal page. |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | — | Static legal page. |
| `/robots.txt` | `app/robots.txt` | — | SEO. |
| `/sitemap.ts` | `app/sitemap.ts` | — | Dynamic sitemap. |

### Key Components

- **`Navbar.tsx`** — Client component. Uses `LeadPopupProvider` context. Mobile hamburger menu.
- **`Hero.tsx`** — Landing hero with CTA, stats, background image. Accepts optional `cmsData`.
- **`TourPackages.tsx`** — Category-filtered package grid with "View Package" → opens `PackageModal`.
- **`PackageModal.tsx`** — Modal popup for a specific package with inquiry form. Submits to `/api/lead`.
- **`LeadPopupForm.tsx`** — Context provider (`LeadPopupProvider`) wrapping the entire app. Shows a 2-step lead capture popup after 8s timeout or on exit-intent (`mouseleave`). Step 1: name/phone/email. Step 2: travelDate/message → submits to `/api/lead` then opens WhatsApp.
- **`ContactForm.tsx`** — Inline contact form in the contact section. Submits to `/api/lead` then opens WhatsApp.
- **`WhatsAppFloat.tsx`** — Fixed-position WhatsApp chat button.

### Data Sources

1. **Sanity CMS** — `homepage` document content (hero title/subtitle/image, featured tours, SEO). `tourPackage` documents (full package details).
2. **Hardcoded constants** — `constants/index.ts`: 21 Kerala packages, 9 Karnataka packages, 9 Tamil Nadu packages, destinations, services, stats, footer, contact info, social links.
3. **Static text/images** — Destination pages and legal pages.

---

## 5. Backend / API Summary

There is **no dedicated backend**. The only server-side code is:

- **`POST /api/lead`** (`app/api/lead/route.ts`):
  - Accepts `{ name, phone, email, travelDate?, message? }`.
  - Validates `email` is required.
  - Transforms payload → `{ lastname, mobile, email, travelDate, description, source: 'KTOUR' }`.
  - Forwards to `https://crm.before.holiday/api/submit-contact`.
  - Returns `{ success: true }` or error with status.
  - **Warning:** If the CRM is down, the form submission silently fails (caught error returns 500, but the WhatsApp redirect still happens client-side). Notification failures do not block the user flow (by design).

**No middleware exists.** No Express, no Redis, no queue, no webhooks, no Prisma, no Razorpay integration.

---

## 6. Database and Prisma Rules

**This project does NOT use Prisma or PostgreSQL.** Content is managed via Sanity CMS.

If a database layer is added in the future:
- Prisma schema should go in `/prisma/schema.prisma`.
- Migration files in `/prisma/migrations/`.
- **Never run `prisma db push` or `prisma migrate reset` against production.**
- **Never edit old migration files.**
- Use `prisma migrate dev` for local development only.

---

## 7. Payment and Razorpay Rules

**Razorpay is NOT implemented in this repository.** This is a lead-gen marketing site only — no payments are processed here.

If Razorpay is added in the future:
- Payment confirmation **must be webhook-authoritative** — never trust the frontend success callback as final payment confirmation.
- The Razorpay webhook handler must consume the **raw request body** for signature verification — do not use `JSON.parse()` or body parsers before `express.raw({ type: 'application/json' })`.
- Notification failures must never block payment flow.

---

## 8. Booking Flow Rules

**There is no booking flow in this repository.** All "inquiries" result in lead capture → forwarded to CRM → user is redirected to WhatsApp for direct conversation.

Every form (ContactForm, LeadPopupForm, PackageModal) follows the same pattern:
1. Validate client-side.
2. POST to `/api/lead`.
3. Open WhatsApp with a pre-filled message.
4. Lead is sent to external CRM; no booking is created in this app.

---

## 9. Leads / CRM / Custom Quote Rules

### Lead Capture Points
1. **ContactForm** (`#contact` section) — inline form.
2. **LeadPopupForm** — 8s timer + exit-intent popup (session-storage gated).
3. **PackageModal** — modal triggered from package grid.

### Lead Submission
- All forms POST to `/api/lead`.
- Payload sent to `https://crm.before.holiday/api/submit-contact` with `source: 'KTOUR'`.
- `lastname` field = user's name (current API uses `lastname` as the name field — verify with CRM team that this mapping is correct).
- Email validation on server; name and phone validated client-side only.

### Failure Handling
- `/api/lead` catches errors and returns 500.
- Client forms catch errors and show user-friendly messages.
- Notification failures **do not block** user flow — user still gets redirected to WhatsApp.

---

## 10. Auth and Role Rules

**No auth, roles, or user accounts exist in this repository.**

If added in the future:
- Prefer NextAuth.js or a dedicated auth provider.
- Roles: admin (for dashboard), agent (for CRM).
- Tenant/default-tenant: **needs verification** — check if the external CRM handles multi-tenancy.

---

## 11. Environment Variables

### Required for local development

| Variable | Source | Required | Notes |
|----------|--------|----------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity CMS | Yes | Project ID from sanity.io/manage |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity CMS | Yes | Usually `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | — | No | Defaults to `2024-01-01` |

### Legacy / unused

| Variable | File | Notes |
|----------|------|-------|
| `NEXT_PUBLIC_STRAPI_URL` | `.env.example` | Not used anywhere in code. Strapi was replaced by Sanity. |
| `NEXT_PUBLIC_STRAPI_TOKEN` | `.env.example` | Not used anywhere in code. |

### Setup

```bash
cp .env.local.example .env.local
# Edit .env.local with your Sanity project ID and dataset
```

The Sanity client (`lib/sanityClient.ts`) falls back to a stub that returns `null` for all queries if the project ID is invalid or missing.

---

## 12. Local Development Commands

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production build
npm run start

# Run linter
npm run lint

# Sanity Studio (separate terminal)
cd sanity/kerala-tour
npm install
npm run dev    # http://localhost:3333
```

---

## 13. Build / Test / Typecheck Commands

```bash
npm run build          # next build
npm run lint           # next lint
npx tsc --noEmit       # TypeScript check (no emit)
```

**There are no tests in this repository.** If tests are added later:
- Prefer Vitest + React Testing Library.
- Place tests co-located with components (`ComponentName.test.tsx`).
- Write E2E tests with Playwright.

---

## 14. Deployment Notes

- **Platform:** Vercel (`.vercelignore` excludes `sanity/` directory).
- **Build command:** `npm run build`.
- **Output directory:** `.next` (Vercel default).
- **Environment variables:** All `NEXT_PUBLIC_*` vars must be set in Vercel project settings.
- **Sanity Studio** is deployed separately (not via this repo). The `sanity/` directory is excluded from Vercel builds.
- **`.npmrc`:** `legacy-peer-deps=true` — needed due to dependency conflicts with React 18 + older packages.
- **Custom domain:** `keralatour.info` — configured in Vercel.

---

## 15. Non-Negotiable Safety Rules

1. **Do NOT modify application code unless explicitly required** by the task.
2. **Do NOT run destructive commands** (rm -rf, prisma db push, migrate reset, etc.).
3. **Do NOT expose or commit secrets** from `.env.local` or `.env` files.
4. **Do NOT edit old migration files** (when Prisma is added in the future).
5. **Do not break the Sanity client stub fallback** — if the Sanity config is invalid, queries must return `null`, not throw.
6. **Notification failures must never block user flows** (lead forms, WhatsApp redirects).
7. **Payment confirmation must be webhook-authoritative** (when Razorpay is added).
8. **Do not remove `legacy-peer-deps=true`** from `.npmrc` — it exists for a reason.
9. **Prefer additive, backward-compatible documentation changes.**

---

## 16. Known Issues / "Verify Before Changing" Areas

| Issue | File | Description |
|-------|------|-------------|
| `[slug]/page.tsx` is very minimal | `app/[slug]/page.tsx` | This catch-all route renders basic HTML (title, tagline, price). It may need enhancement if used for SEO landing pages. Currently handles `/Lakshadweep` footer link. |
| `urlFor` is a stub | `lib/imageUrl.ts` | The `urlFor` function simply returns `source?.asset?.url || ''`. It does NOT use `@sanity/image-url`'s `urlFor` builder. CMS images may not render correctly if the asset URL is stored differently. **Verify with Sanity asset structure.** |
| `lastname` field mapping | `app/api/lead/route.ts` | The CRM payload sends user's name as `lastname`. **Verify with CRM team** that this is intentional (not a copy-paste mistake from a different schema). |
| No type safety on CMS fetch results | `app/page.tsx`, `components/TourPackages.tsx` | Some CMS fetches cast results as `any`. Could cause runtime errors if schema changes. |
| Session storage popup gate | `components/LeadPopupForm.tsx` | Uses `sessionStorage` — popup will re-appear on every new tab/session. Consider `localStorage` if "seen once" behavior is desired. |
| Email required but not phone | `app/api/lead/route.ts` | Server validates `email` required. Client forms require phone. CRM payload has `mobile` field. Inconsistency — verify which field is actually needed by CRM. |
| Exit-intent fires on mobile scroll up | `components/LeadPopupForm.tsx` | `mouseleave` listener will fire when user scrolls up on mobile (touch events). Consider checking `e.clientY` more carefully or disabling exit-intent on touch devices. |
| No loading/error states on `/api/lead` | `app/api/lead/route.ts` | Minimal error handling. CRM submission failure returns generic "CRM submission failed" message. |
| Sanity client uses `useCdn: true` | `lib/sanityClient.ts` | For previews or draft content, this will serve stale cached data. Switch to `useCdn: false` or add a preview mode. |
| `galleryImages` not in GROQ query | `lib/queries.ts` | `TOUR_PACKAGE_QUERY` includes `galleryImages` but the Sanity schema defines the field as `gallery`. **Verify field name.** |
| Tour package detail page does not render all fields | `app/kerala-tour-packages/[slug]/page.tsx` | Only shows hero image, price, tags, and CTA. Does NOT render: description, highlights, inclusions, exclusions, itinerary, gallery, hotel, accommodation details. |
| Package categories are hardcoded | `constants/index.ts` | 21 Kerala, 9 Karnataka, 9 Tamil Nadu packages with categories like "5 Days Packages", "Honeymoon Packages", etc. These are in the code, NOT in Sanity. |
| No graceful degradation when Sanity is down | `app/page.tsx` | If CMS fetch throws, the page will 500. The `HOMEPAGE_QUERY` is not wrapped in try/catch. |
| `galleryImages` in query, `gallery` in schema | `lib/queries.ts` vs `sanity/.../tourPackage.ts` | GROQ query uses `galleryImages` but schema defines `gallery`. This mismatch means the query will always return `undefined` for gallery. |

---

## 17. Recommended Workflow for Future Agents

1. **Read this file** before making changes.
2. **Explore the relevant section** of the codebase using `glob` and `grep`.
3. **Read the files you plan to change** with the `Read` tool before editing.
4. **Understand conventions** — look at existing patterns (component naming, file structure, imports).
5. **Make minimal, focused changes** — avoid scope creep.
6. **Verify** — run `npm run lint`, `npx tsc --noEmit`, and `npm run build` after changes.
7. **For CMS-related changes:** Check the Sanity schema in `sanity/kerala-tour/schemaTypes/` and the GROQ queries in `lib/queries.ts`.
8. **For lead/CRM changes:** The only API route is `app/api/lead/route.ts`. External CRM endpoint is `https://crm.before.holiday/api/submit-contact`.
9. **For forms:** All forms follow the same pattern — validate → POST to `/api/lead` → redirect to WhatsApp. Do not change this flow without understanding the business logic.
10. **When adding new features:** If the task involves Prisma, Razorpay, auth, admin dashboard, or any backend — these are **not currently in the codebase** and will require new implementation. Be clear about what needs to be built from scratch.
