# ReCycle — Commute E-Bikes

> Revolutionize your commute with ReCycle electric bikes. Sustainable, powerful, and built to last.

## Brand Identity

- **Personality:** Bold, eco-conscious, modern, energetic
- **Primary color:** Orange `#fe610b` — used for large display text, stats, buttons, CTAs
- **Black:** `#1b1b1b` / `#000000` — hero overlay, dark feature section, footer
- **Whites:** `#ffffff` / `#f6f6f6` — backgrounds, footer text
- **Fonts:** Space Grotesk (display/headings), Roboto (UI labels, footer, inputs)
- **Tone:** Action-oriented, clean, confident

## Pages

- **Homepage** (`/`) — Full landing page for the ReCycle e-bike brand

## Page Sections (top to bottom)

| Section | Description |
|---------|-------------|
| **Navbar** | Top nav — logo, links (E-bikes, Specs, Our impact), Order now button |
| **Hero** | White section — headline, CTA buttons, handlebar photo with large orange "COMMUTE" SVG text overlaid (filled + outlined layers with scroll parallax) |
| **Impact Stats** | White section — "Positive Impact" heading, body text, 25% and 30% carbon reduction stats |
| **ReCycle® Marquee** | Scrolling large text ticker — "ReCycle® —" repeating |
| **Full-Width Bike Image** | `e-bike-image-10.png` spanning full width |
| **Sustainable Transportation** | White background — "Leading the Way in Sustainable Transportation" (centered), interactive bike carousel extending off both edges with prev/next arrows |
| **Feature Cards** | Black background — large top card (High-quality materials) + two-column smaller cards below (materials + sustainable manufacturing) |
| **Testimonial** | White — `e-bike-image-1.png` left, 5-star rating + quote + Jordan M. reviewer right |
| **Orange CTA** | Orange `#fe610b` background, `e-bike-image-6.png` overlay, large "JOIN" wordmark, "Join the ReCycle Revolution" heading |
| **Footer** | Black bg, newsletter form, Explore/Top Picks/Follow Us links, legal, large "COMMUTE" wordmark at bottom |

## Components

| File | Description |
|------|-------------|
| `app/page.tsx` | Main page — also contains `CommuteMark`, `CommuteO`, `JoinWordmark`, `FooterCommuteWordmark` SVG helpers |
| `components/BikeCarousel.tsx` | Client component — infinite-looping carousel of 3 bike models, prev/next buttons, RAF-based slide measurement |
| `components/ParallaxCommute.tsx` | Client component — wraps any children with scroll-driven vertical parallax; respects `prefers-reduced-motion`; props: `speed` (default 0.12), `maxOffset` (default 72px) |
| `components/AgentationProvider.tsx` | Ship Studio internal |

## Assets

All design assets are in `public/assets/`:

| File | Used In |
|------|---------|
| `e-bike-image-8.png` | Hero background |
| `e-bike-image-10.png` | Full-width section |
| `e-bike-image-29/30/28.png` | Bike carousel |
| `bike-scene-10.png` | Large feature card |
| `pic.png` | Small feature card left |
| `bike-scene-16.png` | Small feature card right |
| `e-bike-image-1.png` | Testimonial photo |
| `e-bike-image-6.png` | Orange CTA overlay |
| `logo.svg` | Navbar + footer logo |

## Recent Changes

- **2026-04-27:** Built complete ReCycle landing page from Figma design brief
- **2026-04-27:** "Leading the Way" section — changed to white background, centered title, bikes extend off page edges
- **2026-04-27:** Removed Bike Showcase section (stacked photo + placeholder + orange nav arrows)
- **2026-04-27:** Added `ParallaxCommute` component — subtle scroll parallax on hero COMMUTE text
- **2026-04-27:** Added `BikeCarousel` component — replaced static 3-bike layout with interactive infinite carousel
- **2026-04-28:** Updated SITE.md to reflect current state

## How to Customize

- **Change orange accent color:** Search for `#fe610b` in `app/page.tsx` and replace with your hex
- **Edit headline text:** Open `app/page.tsx` — each section has a comment like `{/* ── HERO ── */}` to help you find it
- **Adjust parallax speed:** Open `components/ParallaxCommute.tsx` and change the `speed` prop default (lower = more subtle)
- **Add a bike to the carousel:** Open `components/BikeCarousel.tsx` and add an entry to the `bikeModels` array
- **Change marquee speed:** Edit `globals.css` — adjust the seconds in `animation: marquee 30s linear infinite`
- **Add a new page:** Create `app/your-page/page.tsx` — it will appear at `/your-page`
