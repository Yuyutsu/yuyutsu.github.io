# Amol Chavan — Portfolio

Personal portfolio website for a Senior Mobile Architect & Open Source Developer.

## Tech Stack

- **Next.js 16** (App Router) with static export
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **TypeScript**

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Generates a static export in the `out/` directory, ready for GitHub Pages deployment.

## Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata and fonts
│   ├── page.tsx        # Main page composing all sections
│   └── globals.css     # Global styles and Tailwind theme
└── components/
    ├── Navbar.tsx       # Sticky navigation with mobile menu
    ├── ScrollProgress.tsx # Scroll progress indicator
    ├── FadeIn.tsx       # Reusable animation wrapper
    ├── Hero.tsx         # Hero section
    ├── WhatIBuild.tsx   # Skills overview
    ├── OpenSource.tsx   # npm packages showcase
    ├── Projects.tsx     # Case study project cards
    ├── Experience.tsx   # Work experience
    ├── Philosophy.tsx   # Engineering principles
    ├── CurrentlyBuilding.tsx # Active projects
    ├── Contact.tsx      # Contact links
    └── Footer.tsx       # Site footer
```
