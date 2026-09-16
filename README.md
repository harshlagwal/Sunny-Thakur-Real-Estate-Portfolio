<div align="center">

# 🏡 Sunny Thakur — Real Estate Portfolio

### *"Find Your Place. Build Your Future."*

**A premium, modern real estate portfolio website for Sunny Thakur — a trusted property consultant with 12+ years of experience (since 2014) across the Kurali–Kharar–Chandigarh corridor, Punjab, India.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Sections & Components](#-sections--components)
- [Design System](#-design-system)
- [SEO & Performance](#-seo--performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🔎 Overview

This is a **fully responsive, single-page portfolio website** crafted for **Sunny Thakur**, a verified real estate consultant operating across the high-growth **Kurali → Kharar → Chandigarh** property belt.

The website showcases his 12+ year career journey (since 2014), 200+ verified property transactions, client testimonials, property listings, and an interactive territory map — all wrapped in a premium editorial design language with smooth animations, dark mode support, and mobile-first layouts.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🎨 **Premium Editorial Design** | Ivory & charcoal palette with bronze gold accents, glassmorphism cards, and curated typography (Plus Jakarta Sans + Cormorant Garamond) |
| 🌙 **Dark Mode** | Seamless light/dark theme toggle with system preference detection and persistent state |
| 🗺️ **Interactive Territory Map** | Live embedded Google Maps with switchable blueprint/map views covering Kurali, Kharar & Chandigarh |
| 📊 **Animated Statistics** | Smooth counter animations for 100+ Plots, 50+ Kothis, 40+ Flats, 10+ Villas, 200+ total deals |
| 🏠 **Property Showcase** | Category-filtered gallery with modal detail views for featured listings |
| 📅 **Career Timeline** | Visual milestone journey from 2014 to present day |
| ⭐ **Client Testimonials** | Auto-scrolling marquee of verified 5-star client reviews with pause/play controls |
| 📱 **Mobile Sticky CTA** | Persistent call/WhatsApp action bar on mobile for instant contact |
| 🔍 **SEO Optimized** | JSON-LD structured data, Open Graph meta tags, semantic HTML, and Twitter Cards |
| ⚡ **Scroll Progress Bar** | Gold-gradient scroll indicator at the top of the viewport |
| 🎭 **Micro-Animations** | Framer Motion powered entrance animations, hover effects, and smooth transitions |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev) |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org) |
| **Build Tool** | [Vite 6](https://vite.dev) |
| **Styling** | [Tailwind CSS 4.1](https://tailwindcss.com) (via `@tailwindcss/vite` plugin) |
| **Animations** | [Framer Motion 13](https://motion.dev) |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Utilities** | [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge) |
| **Fonts** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) |

---

## 📁 Project Structure

```
Sunny-Thakur-Real-Estate-Portfolio/
├── public/                          # Static public assets
├── src/
│   ├── assets/                      # Images (portraits, branding)
│   ├── components/
│   │   ├── ui/                      # Reusable UI primitives
│   │   ├── Navbar.tsx               # Sticky navigation with dark mode toggle
│   │   ├── HeroSection.tsx          # Cinematic hero with image carousel
│   │   ├── TrackRecordSection.tsx   # Statistics & track record counters
│   │   ├── TerritoryMapSection.tsx  # Interactive territory map
│   │   ├── PropertyCategoriesSection.tsx  # Property type cards
│   │   ├── FeaturedPropertiesSection.tsx  # Filterable property gallery
│   │   ├── JourneyTimelineSection.tsx     # Career milestone timeline
│   │   ├── PropertyNetworkSection.tsx     # Network showcase
│   │   ├── WhySunnySection.tsx      # Trust pillars & USPs
│   │   ├── ClientStoriesSection.tsx  # Testimonial marquee
│   │   ├── AreaGuideSection.tsx     # Locality guides
│   │   ├── AboutSunnySection.tsx    # Personal profile & credentials
│   │   ├── ContactSection.tsx       # Contact form & direct connect
│   │   ├── Footer.tsx               # Site footer & links
│   │   ├── MobileStickyBar.tsx      # Mobile CTA bar
│   │   ├── PropertyDetailModal.tsx  # Property detail overlay
│   │   └── ThemeToggle.tsx          # Dark/light mode switch
│   ├── context/                     # React context providers
│   ├── data/
│   │   └── portfolioData.ts         # All content, stats & configuration
│   ├── lib/                         # Utility functions
│   ├── types.ts                     # TypeScript interfaces
│   ├── App.tsx                      # Root application component
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global styles & Tailwind theme
├── index.html                       # HTML shell with SEO meta tags
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Dependencies & scripts
└── README.md                        # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or **bun** / **pnpm**)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/harshlagwal/Sunny-Thakur-Real-Estate-Portfolio.git

# 2. Navigate to the project directory
cd Sunny-Thakur-Real-Estate-Portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at **`http://localhost:3000`**.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server on port 3000 |
| `npm run build` | Create an optimized production build in `/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run TypeScript type checking (`tsc --noEmit`) |
| `npm run clean` | Remove build artifacts |

---

## 🧩 Sections & Components

The website is composed of **13 distinct sections**, each a self-contained React component:

| # | Section | Component | Description |
|---|---|---|---|
| 01 | **Hero** | `HeroSection` | Full-width cinematic hero with image carousel, key metrics, and CTAs |
| 02 | **Track Record** | `TrackRecordSection` | Animated counters for 12+ years, 200+ deals, and property stats |
| 03 | **Territory Map** | `TerritoryMapSection` | Interactive Google Maps with territory details and blueprint view |
| 04 | **Property Categories** | `PropertyCategoriesSection` | Visual cards for Plots, Kothis, Flats, and Villas |
| 05 | **Featured Properties** | `FeaturedPropertiesSection` | Filterable property gallery with detail modals |
| 06 | **Journey Timeline** | `JourneyTimelineSection` | Career milestones from 2014 to present day |
| 07 | **Property Network** | `PropertyNetworkSection` | Developer & builder network showcase |
| 08 | **Why Sunny** | `WhySunnySection` | Four trust pillars explaining Sunny's USPs |
| 09 | **Client Stories** | `ClientStoriesSection` | Auto-scrolling verified testimonial marquee |
| 10 | **Area Guide** | `AreaGuideSection` | Locality guides for Kurali, Kharar & Chandigarh |
| 11 | **About Sunny** | `AboutSunnySection` | Personal profile, credentials, and direct contact |
| 12 | **Contact** | `ContactSection` | Contact form with WhatsApp & phone integration |
| 13 | **Footer** | `Footer` | Navigation links, brand info, and copyright |

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-ivory` | `#F5F3EE` | Primary background (light mode) |
| `--color-charcoal` | `#111111` | Primary background (dark mode) |
| `--color-bronze` | `#B89A68` | Brand accent, CTAs, highlights |
| `--color-stone` | `#6F6D68` | Secondary text, muted elements |

### Typography

| Font | Usage |
|---|---|
| **Plus Jakarta Sans** | Headings, body text, and UI elements |
| **Cormorant Garamond** | Editorial accents, italic quotes, and taglines |

---

## 🔍 SEO & Performance

- ✅ **JSON-LD Structured Data** — `RealEstateAgent` schema for rich search results
- ✅ **Open Graph & Twitter Cards** — Optimized social media previews
- ✅ **Semantic HTML5** — Proper heading hierarchy and landmark elements
- ✅ **Responsive Images** — WebP format with optimized dimensions
- ✅ **Code Splitting** — Vite's automatic chunk optimization
- ✅ **Font Optimization** — Preconnected Google Fonts with `display=swap`

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is proprietary and intended solely for **Sunny Thakur's** professional real estate portfolio. Unauthorized reproduction or distribution is prohibited.

---

## 📞 Contact

**Sunny Thakur** — Real Estate Consultant

| | |
|---|---|
| 📱 **Phone** | [+91 62303-69704](tel:+916230369704) |
| 💬 **WhatsApp** | [Chat on WhatsApp](https://wa.me/916230369704) |
| ✉️ **Email** | [devbhoomihimachal50@gmail.com](mailto:devbhoomihimachal50@gmail.com) |
| 📍 **Territory** | Kurali • Kharar • Chandigarh, Punjab, India |

---

<div align="center">

**Built with ❤️ for Sunny Thakur's Real Estate Advisory**

*© 2014–2026 Sunny Thakur. All rights reserved.*

</div>
