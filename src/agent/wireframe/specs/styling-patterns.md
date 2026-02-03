# Styling Patterns — Referencja dekoracji

Wyekstrahowane ze wszystkich komponentow sekcji. Uzywaj przy stylowaniu wireframe'ow.

---

## 1. Tokeny kolorow (semantic)

```
BACKGROUND:
  bg-background          — glowne tlo sekcji
  bg-black               — ciemne sekcje (alternating)
  bg-card                — karty, boxy
  bg-card/50, bg-card/30 — transparentne karty
  bg-primary             — przyciski, akcenty
  bg-primary/20          — transparentne primary (badge, icon bg)

TEXT:
  text-foreground        — naglowki na jasnym tle
  text-white             — naglowki na ciemnym tle
  text-muted-foreground  — opisy, helpery
  text-primary           — akcenty, linki, hover
  text-primary-foreground — tekst na primary bg
  text-black             — tekst na primary bg (alt)

BORDER:
  border-border          — standardowe bordery
  border-primary         — akcentowe bordery
  border-primary/30      — hover state
  border-primary/50      — badge border
  border-white/10        — subtle na ciemnym tle
```

### Alternating pattern (sekcje)
```
Hero       → bg-background
Why Us     → bg-black
Services   → bg-background
For Whom   → bg-black
Process    → bg-background
Portfolio  → bg-black
FAQ        → bg-background
Contact    → bg-black
Footer     → bg-background
```

---

## 2. Typografia

```
FONT FAMILIES:
  font-display  — "Bebas Neue" (H1, H2, hero headlines)
  font-serif    — "Playfair Display" (elegant variant)
  font-work     — "Work Sans" (body text)
  font-mono     — system mono (labels, taglines "/ USLUGI")

SIZES:
  text-7xl      — H1 hero (lg)
  text-6xl      — H1 hero (sm)
  text-5xl      — H1 hero (base), H2 section title (md)
  text-4xl      — H2 section title (base)
  text-3xl      — H3 card title (large), stat value
  text-2xl      — H3 card title, overlay value
  text-xl       — H4 small title
  text-lg       — intro, body-lg, subtitle
  text-base     — standard body
  text-sm       — helpers, labels, features
  text-xs       — metadata, small text, tags

RESPONSIVE HERO:    text-5xl sm:text-6xl lg:text-7xl
RESPONSIVE SECTION: text-4xl md:text-5xl

WEIGHTS:
  font-bold     — headlines, titles, CTAs
  font-semibold — important elements
  font-medium   — links, buttons
  font-black    — hero split, extra bold

TRACKING:
  tracking-widest — "/ USLUGI", section labels
  tracking-wider  — uppercase metadata
  tracking-wide   — display headings
  tracking-tight  — serif headings
```

---

## 3. Spacing

```
SECTION PADDING:
  py-24         — standard section (96px)
  py-32         — hero (128px)
  py-12         — footer (48px)

GAPS:
  gap-8  (32px) — between columns
  gap-6  (24px) — standard card gap
  gap-4  (16px) — smaller gaps
  gap-2  (8px)  — icon+text

CARD PADDING:
  p-8  (32px) — large cards
  p-6  (24px) — standard cards
  p-4  (16px) — small cards

BUTTON:
  px-8 py-4   — standard button
  px-8 py-6   — hero button (large)
  px-4 py-2   — small button

MARGINS:
  mb-16 (64px) — header to content
  mb-12 (48px) — smaller header gap
  mb-6  (24px) — title to description
  mb-4  (16px) — paragraph spacing

CONTAINER:
  container mx-auto px-6         — standard
  max-w-4xl                       — narrow (FAQ, text-heavy)
  max-w-2xl                       — very narrow (CTA text)
```

---

## 4. Hover Effects (4 typy)

### Card with Image (Portfolio, For Whom)
```tsx
// Card:
"group relative overflow-hidden border border-border hover:border-primary/30 transition-colors duration-300"
// Image:
"transition-transform duration-500 group-hover:scale-105"
// Title:
"text-white group-hover:text-primary transition-colors duration-300"
// Hidden content:
"opacity-0 group-hover:opacity-100 transition-opacity duration-300"
```

### Card without Image (Process, FAQ)
```tsx
// Card:
"group border border-border hover:border-primary/30 transition-colors duration-300 bg-card"
// Icon:
"group-hover:scale-105 transition-transform duration-300"
```

### Text Link
```tsx
"text-white hover:text-primary transition-colors duration-300"
// With underline:
"text-white border-b border-primary hover:text-primary transition-colors"
```

### Navigation Tab (Services)
```tsx
// Wrapper:
"border-l-4 transition-all duration-300"
// Active:
"border-primary bg-white/5 text-white"
// Inactive:
"border-transparent text-muted-foreground hover:text-white hover:bg-white/[0.02]"
```

---

## 5. Decorative Elements

### Corner Accents (pojawiaja sie na hover)
```tsx
<div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
<div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary ..." />
<div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary ..." />
<div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary ..." />
```

### Top Accent Line (Process steps)
```tsx
<div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
```

### Decorative Border Offset (Editorial)
```tsx
// Za obrazem, przesunieta o 4px:
"absolute top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-xl hidden lg:block"
"absolute top-4 -right-4 w-full h-full border-2 border-secondary/20 rounded-xl hidden lg:block"
```

### Separator Lines
```tsx
// Horizontal:
"border-t border-border"
// Gradient horizontal:
"h-px bg-gradient-to-r from-transparent via-border to-transparent"
// Vertical:
"w-px h-12 bg-border"
// Title underline:
"w-24 h-1 bg-primary rounded-full"
```

### Scroll Indicator (Hero)
```tsx
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
  <span className="text-xs tracking-widest uppercase">SCROLL</span>
  <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
</div>
```

### Background Number (Process)
```tsx
"absolute -right-4 -top-6 text-9xl font-bold text-white/5 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-500"
```

### Skewed Decoration (Hero Split)
```tsx
"absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/4 pointer-events-none"
```

### Geometric Decorations (Hero Full)
```tsx
"absolute top-1/4 right-0 w-64 h-64 border border-primary/20 transform rotate-45 translate-x-32"
"absolute bottom-1/4 left-0 w-48 h-48 border border-primary/10 transform -rotate-12 -translate-x-24"
```

---

## 6. Overlays & Gradients

### Image Gradient (from bottom)
```tsx
"bg-gradient-to-t from-black via-black/70 to-black/20"
```

### Light Image Gradient
```tsx
"bg-gradient-to-t from-black via-transparent to-transparent opacity-90"
```

### Hero Gradient (top + bottom)
```tsx
// Top:
"bg-gradient-to-b from-background/30 via-transparent to-transparent"
// Bottom:
"bg-gradient-to-t from-background via-background/60 to-transparent"
```

### Semantic Gradient (color-mix, for theme tokens)
```tsx
style={{
  background: "linear-gradient(to top, var(--background), color-mix(in srgb, var(--background) 95%, transparent) 40%, transparent)"
}}
```

### Section Gradient (subtle)
```tsx
"absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-card to-transparent opacity-30"
```

---

## 7. Pattern Backgrounds

### Grid Pattern (standard)
```tsx
style={{
  backgroundImage: `linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)`,
  backgroundSize: '40px 40px'
}}
className="opacity-[0.07]"
```

### Grid on Image (inside card)
```tsx
"opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"
```

### Rebar Pattern (construction theme)
```tsx
style={{
  backgroundImage: `
    repeating-linear-gradient(90deg, transparent 0px, transparent 20px, rgba(var(--primary-rgb), 0.15) 20px, rgba(var(--primary-rgb), 0.15) 21px),
    repeating-linear-gradient(0deg, transparent 0px, transparent 20px, rgba(var(--primary-rgb), 0.15) 20px, rgba(var(--primary-rgb), 0.15) 21px)
  `
}}
```

### Dots Pattern
```tsx
style={{ backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)` }}
```

---

## 8. Button Variants

### Primary
```tsx
// Default:
"bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
// 3D Shadow:
"bg-primary text-primary-foreground rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.3)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.3)] hover:translate-y-[2px] active:shadow-none active:translate-y-1 transition-all"
// Outline:
"border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg"
// Pill (rounded-full):
"bg-primary hover:bg-primary/85 text-primary-foreground font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300"
```

### Secondary
```tsx
// Default:
"border border-border text-foreground hover:border-primary hover:text-primary bg-transparent rounded-lg"
// 3D Shadow:
"bg-background border-2 border-foreground text-foreground rounded-lg hover:bg-muted transition-colors"
// Outline:
"border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-lg"
```

### Gallery/CTA (uppercase, wide)
```tsx
"border border-border text-white px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-primary hover:text-black hover:border-primary transition-colors duration-300"
```

---

## 9. Icon Containers

### Solid Primary (main icon)
```tsx
"p-3 bg-primary text-black rounded-sm"
```

### Outlined (process steps)
```tsx
"w-10 h-10 bg-background border border-primary text-primary flex items-center justify-center shadow-[0_0_15px_rgba(255,94,0,0.2)]"
```

### Ghost/Transparent (on images)
```tsx
"bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/40 group-hover:bg-primary/30 group-hover:border-primary/60 transition-all duration-300"
```

### Step Badge (circle + label)
```tsx
// Circle:
"w-12 h-12 rounded-full bg-card text-primary shadow-sm"
// Label:
"uppercase tracking-widest text-xs font-bold text-muted-foreground"
```

### Material Symbols (filled)
```tsx
<span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
  check_circle
</span>
```

---

## 10. Section Header Pattern

### Standard (left-aligned)
```tsx
<span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
  / USLUGI
</span>
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
  Nasze <span className="text-primary">Uslugi</span>
</h2>
<p className="text-muted-foreground text-lg">Opis sekcji</p>
```

### With Pulsating Dot (For Whom)
```tsx
<div className="flex items-center gap-2 mb-4">
  <div className="w-2 h-2 bg-primary animate-pulse" />
  <span className="text-primary font-mono text-sm tracking-widest uppercase">/ ODBIORCY</span>
</div>
```

### Centered (Why Us, Editorial)
```tsx
<div className="text-center mb-20 max-w-3xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display uppercase">
    Dlaczego <span className="text-primary border-b-4 border-primary pb-2">My</span>
  </h2>
  <p className="text-muted-foreground text-lg leading-relaxed">...</p>
</div>
```

### With Serif (Editorial)
```tsx
<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary relative inline-block">
  Tytul<span className="block mt-2">Drugalinia</span>
</h2>
<div className="w-24 h-1 bg-primary rounded-full mx-auto mt-4" />
```

---

## 11. Card Patterns

### Image Card (Portfolio, For Whom)
```tsx
// Wrapper:
"group relative overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors duration-300"
// Image:
"object-cover transition-transform duration-500 group-hover:scale-105"
// Gradient:
"absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20"
// Content:
"absolute bottom-0 left-0 p-6 w-full"
```

### Overlay Card (Services Overlay)
```tsx
// Card:
"group relative h-[500px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
// Gradient (semantic tokens):
style={{ background: "linear-gradient(to top, var(--background), color-mix(in srgb, var(--background) 95%, transparent) 40%, transparent)" }}
// Content:
"absolute bottom-0 left-0 w-full p-6"
// Expanding line:
"absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-primary transition-all duration-500"
```

### Flat Card (Process)
```tsx
"bg-card border border-border p-8 h-full hover:border-primary/30 transition-colors duration-300 relative overflow-hidden"
// Accent line:
"absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
```

---

## 12. Animation Tokens

```
DURATION:
  duration-200 — micro (icons, tooltips)
  duration-300 — colors, opacity, borders
  duration-500 — transforms, scale
  duration-700 — large images

TRANSITION:
  transition-colors    — color changes
  transition-transform — scale, rotate, translate
  transition-opacity   — fade in/out
  transition-all       — complex (use sparingly)

SCALE:
  group-hover:scale-105 — standard hover (images, cards)

FRAMER MOTION (card grids):
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1, duration: 0.5 }}

Z-INDEX:
  z-0  — pattern background
  z-10 — main content
  z-20 — overlay content
  z-50 — fixed header
  z-[60] — mobile menu
```

---

## 13. Shadow Effects

```tsx
// 3D button:
"shadow-[0_4px_0_0_rgba(0,0,0,0.3)]"
// Icon glow:
"shadow-[0_0_15px_rgba(255,94,0,0.2)]"
// Dynamic primary:
"shadow-[0_4px_0_0_hsl(var(--primary)/0.7)]"
// Card:
"shadow-lg"
// Card hover:
"shadow-2xl"
// Primary hover glow:
"hover:shadow-primary/30"
```

---

## 14. Navigation Styles

### Fixed Header
```tsx
// Base:
"fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
// Scrolled:
"bg-background/80 backdrop-blur-md border-border py-4"
// Top:
"bg-transparent border-transparent py-6"
```

### Logo
```tsx
"flex items-center gap-2 group"
// Initials box:
"w-10 h-10 bg-primary text-background font-bold flex items-center justify-center text-xl rounded-sm"
// Name:
"font-bold text-white leading-none group-hover:text-primary transition-colors"
```

### Nav Links
```tsx
"text-sm font-medium text-white hover:text-primary transition-colors uppercase tracking-wide"
```

### Mobile Menu
```tsx
"fixed inset-0 z-[60] bg-background border-l border-border flex flex-col p-8"
// Links:
"text-2xl font-bold text-muted-foreground hover:text-primary transition-colors"
```

---

## 15. Component-Specific Specs

### Hero Full Background
- Badge: `border border-primary/50 text-primary uppercase tracking-wider rounded-lg`
- Headline: `font-display text-5xl sm:text-6xl lg:text-7xl leading-none tracking-wide uppercase`
- Stats: `grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-border`
- Pattern: rebar/grid/dots overlay at `opacity-[0.07]`
- Decorative shapes: rotated borders at `border-primary/20`

### Hero Split Contained
- Skewed decoration: `bg-primary/10 -skew-x-12`
- Badge with dot: `bg-background px-3 py-1 rounded-lg border border-border shadow-sm`
- Headline highlight: `bg-primary px-2 text-primary-foreground`
- 3D button shadow: `shadow-[0_4px_0_0_hsl(var(--primary)/0.7)]`
- Image: `rounded-2xl shadow-2xl border-4 border-background`
- Floating overlay: `bg-primary px-6 py-4 rounded-xl shadow-lg`

### Hero Split Edge-Bleed
- Full-bleed image (no rounding, edge to edge)
- Edge line: `absolute top-0 left-0 bottom-0 w-px bg-border`
- Same badge/button patterns as Split

### Services Interactive Nav
- Left column: tab nav with `border-l-4`
- Right column: display area with image, gradient, features grid
- Active state: `border-primary bg-white/5`
- Display: `group-hover:scale-105` on image

### Portfolio Mosaic
- Grid: `grid-cols-4` with featured (2x2), normal (1x1), wide (2x1)
- Framer-motion stagger
- Corner accents on hover
- Badge: `bg-primary/90 text-black text-xs font-bold`

### For Whom Image Cards
- 4 corner accents (border-t/r/b/l-2)
- Icon badge: `bg-primary/20 backdrop-blur-sm rounded-full`
- Expanding description: `max-h-0 group-hover:max-h-32`
- Tags: `text-[10px] uppercase tracking-wider border border-primary/20 bg-primary/10`

### Process Horizontal Cards
- Connecting line: `hidden lg:block absolute top-12 w-full h-[2px] bg-border`
- Big background number: `text-9xl text-white/5`
- Icon with glow: `shadow-[0_0_15px_rgba(255,94,0,0.2)]`
- Top accent line animation: `scale-x-0 group-hover:scale-x-100 origin-left`

### FAQ Accordion
- Container: `max-w-4xl`
- Item: `border border-border bg-card/30 px-6 rounded-sm`
- Question number: `text-primary/50 font-mono`
- Trigger: `hover:text-primary`

### Contact Info + Map
- Two-column: info left, map right
- Contact cards: `border border-border bg-card/50 hover:border-primary/50`
- Map overlay: `bg-black/80 backdrop-blur-sm p-4 border border-border`

### Footer Multi-Column
- 4 columns (company 2-wide + nav + info)
- Nav title: `text-sm font-bold text-primary uppercase tracking-wider`
- Big text: `text-[8vw] text-border/20 select-none`
- Bottom: `font-mono uppercase text-xs`
