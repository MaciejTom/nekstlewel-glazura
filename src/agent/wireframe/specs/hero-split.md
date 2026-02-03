# Hero Split — Wireframe Spec

## Layout Pattern
2-kolumnowy grid: content (lewa) + image (prawa). Contained w max-w-[1280px].

## Wireframe Elements
- **Badge** — tagline w dashed border
- **Headline** — multi-line z accent (dashed underline)
- **Subtitle** — opis
- **CTA** — primary + secondary (dashed border buttons)
- **Stats** — inline row z icon circles, vertical divider miedzy statami
- **Image** — duzy placeholder (aspect 4/3, lg: auto height)
- **Image badge** — overlay na obrazku (bottom-left): icon + value + label

## Decoration Properties (do stylizacji)

### Background
- `bg-background-alt` lub inny kolor
- Dekoracyjny element (skew shape, gradient, pattern) w prawej czesci

### Badge
- Warianty: border accent, solid bg, icon+text, pill/rounded-full

### Headline
- Font: display, serif, bold
- Accent: color span, highlight bg (px-2), underline, gradient

### CTA Buttons
- Primary: solid bg, icon+text, pill shape
- Secondary: outline, text-only, underline

### Stats
- Icon: Material Symbols w rounded bg (primary/20)
- Value: font-black, accent color
- Divider: vertical line (w-px)

### Image
- Rounded corners (rounded-2xl)
- Border (border-4 border-white)
- Shadow (shadow-2xl)

### Image Badge
- Solid bg (primary), shadow
- Icon (Material Symbol) + value + label

## Original HTML

```tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-background-alt pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6 lg:max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 w-fit shadow-sm"
            >
              <span className="material-symbols-outlined text-primary text-sm">star</span>
              <span className="text-xs font-bold uppercase tracking-wider text-text-main">150+ opinii • wszystkie 5.0</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight text-text-main"
            >
              Remont mieszkania? <br />
              Naprawa hydrauliki? <br />
              <span className="bg-primary px-2">Nasz zespół pomoże.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-text-muted font-medium leading-relaxed max-w-md"
            >
              19 lat doświadczenia. Ponad 200 usług pod jednym dachem - od drobnej naprawy po remont pod klucz. Stalowa Wola, Tarnobrzeg, Sandomierz i okolice.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="tel:739437828" className="btn-primary">
                <span className="material-symbols-outlined">call</span>
                Zadzwoń: 739 437 828
              </a>
              <a href="#reviews" className="btn-secondary">
                Zobacz opinie klientów
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6 pt-6 border-t border-gray-200/60 mt-4"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full text-text-main">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-xl leading-none">19</span>
                  <span className="text-xs font-medium text-text-muted uppercase">Lat doświadczenia</span>
                </div>
              </div>

              <div className="w-px h-10 bg-gray-300" />

              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full text-text-main">
                  <span className="material-symbols-outlined">star</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-xl leading-none">150+</span>
                  <span className="text-xs font-medium text-text-muted uppercase">Opinii 5.0</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] w-full flex items-center justify-center"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white">
              <Image
                src="/ultimateHero.jpg"
                alt="FIXMAN - Remonty Stalowa Wola"
                fill
                className="object-cover"
                priority
              />
              {/* Location badge on image */}
              <div className="absolute bottom-6 left-6 bg-primary px-5 py-3 rounded-xl shadow-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-text-main">location_on</span>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-text-main">6 miast</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-main/70">w zasięgu</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```
