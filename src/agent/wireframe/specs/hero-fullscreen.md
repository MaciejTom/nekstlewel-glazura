# Hero Fullscreen — Decoration Spec

## Layout Pattern
Full-screen hero (`min-h-screen`) z background image/pattern.
Content left-aligned, max-w-4xl. Badge + headline + subtitle + 2 CTA + stats grid.
Scroll indicator na dole (centered).

## Wireframe
`src/components/wireframe/hero-wireframe.tsx`

---

## Wlasciwosci dekoracji (co mozna zmieniac)

Ponizsze elementy wireframe sa neutralne. Kazdy z nich to "slot" na dekoracje
ktory mozna wypelnic wg stylu klienta. Wireframe pokazuje GDZIE jest element,
spec mowi JAK go ostylowac.

### Background Image
- Wireframe: bg-muted placeholder z ImageIcon
- Styled: `<img>` lub `next/image` object-cover, z overlay gradient
- Overlay gradient: `bg-gradient-to-t from-background via-background/60 to-transparent`
- Pattern overlay: `.rebar-pattern opacity-30` lub grid/dots pattern

### Decorative Elements (geometric shapes)
- Wireframe: brak
- Styled: obrocone prostokaty z border w kolorze accent
- Right: `absolute top-1/4 right-0 w-64 h-64 border border-accent/20 transform rotate-45 translate-x-32`
- Left: `absolute bottom-1/4 left-0 w-48 h-48 border border-accent/10 transform -rotate-12 -translate-x-24`

### Badge
- Wireframe: dashed border, muted text
- Styled options:
  - Border accent: `border border-accent/50 text-accent tracking-wider`
  - Solid bg: `bg-accent text-white px-4 py-1.5 rounded-lg`
  - Dot + text: `flex gap-2` z `w-2 h-2 bg-accent animate-pulse`

### Headline Accent (keyword)
- Content: `headlineAccent: "PRZEMYSLOWEGO"` — slowo kluczowe w headline
- Wireframe: `border-b-2 border-dashed text-muted-foreground` (zaznacza "tu bedzie wyroznienie")
- **To jest wlasciwosc dekoracji, NIE struktury.** Accent moze byc na dowolnym slowie/frazie.
- Mozliwe treatments:
  - Inny kolor: `text-accent` / `text-primary`
  - Inny font: `font-serif` vs `font-display`
  - Background highlight: `bg-primary px-2 text-primary-foreground`
  - Underline: `border-b-4 border-primary pb-2`
  - Gradient text: `bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent`
  - Brak wyroznienia (wszystkie slowa jednakowe)
- W oryginalnym HTML: `text-accent` na slowie "PRZEMYSLOWEGO"

### Headline Typography
- Wireframe: `text-5xl sm:text-6xl lg:text-8xl font-semibold`
- Styled options:
  - Display font: `font-display tracking-wide uppercase`
  - Serif: `font-serif tracking-tight`
  - Sans bold: `font-bold` (default)

### CTA Buttons
- Wireframe: dashed border placeholders
- Primary options:
  - Solid: `bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold`
  - 3D shadow: `shadow-[0_4px_0_0_rgba(0,0,0,0.3)] hover:translate-y-[2px] active:translate-y-1`
  - Pill: `rounded-full shadow-lg`
  - With icon: `ArrowRight ml-2 w-5 h-5 group-hover:translate-x-1`
  - Phone link: `<a href="tel:...">`
- Secondary options:
  - Ghost: `border-white/30 text-white hover:bg-white hover:text-black`
  - Outline accent: `border-2 border-accent text-accent hover:bg-accent hover:text-white`

### Stats Values
- Wireframe: `text-foreground font-semibold`
- Styled options:
  - Accent color: `text-primary` / `text-accent`
  - Display font: `font-display tracking-wide`
  - Mono: `font-mono`

### Scroll Indicator
- Wireframe: `bg-border` linia, muted text
- Styled: `bg-gradient-to-b from-accent to-transparent` linia, accent kolor

---

## Dekoracje z oryginalnego HTML

### Section
- Background: `bg-background text-white overflow-hidden`
- Pattern: `.rebar-pattern opacity-30` (absolute inset-0)

### Headline
- Font: `font-display text-5xl sm:text-6xl lg:text-8xl leading-none tracking-wide uppercase`
- Accent line: `text-accent`

### Badge
- `inline-block px-4 py-1.5 border border-accent/50 text-accent text-sm font-medium tracking-wider`

### Subtitle
- `font-work text-lg sm:text-xl text-muted-foreground max-w-2xl`

### CTA Primary
- `bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold`
- Arrow: `ArrowRight ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform`

### CTA Secondary
- `border-white/30 text-white hover:bg-white hover:text-black hover:border-white px-8 py-6 text-lg font-semibold bg-transparent`

### Stats
- Value: `font-display text-2xl sm:text-3xl text-primary tracking-wide`
- Label: `text-sm text-muted-foreground mt-1`

### Scroll Indicator
- Text: `text-xs tracking-widest text-muted-foreground uppercase`
- Line: `w-px h-12 bg-gradient-to-b from-accent to-transparent`

### Animations
- `animate-fade-up` z `stagger-1` do `stagger-4`
- Arrow: `group-hover:translate-x-1 transition-transform`

---

## Hover Effects Summary

| Element | Effect | Timing |
|---------|--------|--------|
| CTA Primary | bg-accent/90 | default |
| CTA Secondary | bg-white, text-black, border-white | default |
| Arrow icon | translate-x-1 | transition-transform |

## Unique Elements

- **Rebar pattern** — CSS class `.rebar-pattern`, siatka zbrojeniowa
- **Geometric decorations** — obrocone prostokaty border z accent/20 i accent/10
- **Staggered animations** — fade-up z delay per element
- **Phone CTA** — primary button to link tel: z ArrowRight ikona
- **3-line headline** — podzielony na linie z jedna wyrozoniona (accent treatment)
