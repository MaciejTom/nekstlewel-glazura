# Services Cards — Decoration Spec

## Layout Pattern
Left-aligned header (title + subtitle). Flex-wrap grid z image cards.
Kazda karta: aspect-video image + body (title + desc + features list).
Dynamiczna szerokosc: 2-col dla 2/4 items, 3-col dla reszty.
Opcjonalna CTA card w gridzie.

## Wireframe
`src/components/wireframe/services-cards-wireframe.tsx`

## Styled example
`src/components/sections/services-cards-section.tsx`

---

## Item Count Behavior

Grid uzywa `flex flex-wrap justify-center` z dynamiczna szerokoscia kart:
- Jesli total (services + ctaCard) = 2 lub 4: karty 50% (2 per row)
- W przeciwnym razie: karty 33% (3 per row)

Przykladowe uklady:
- 3 items → 3 in a row (33%)
- 4 items → 2+2 (50%)
- 5 items → 3+2 centered (33%)
- 3 items + CTA card → 2+2 (50%, total=4)
- 5 items + CTA card → 3+3 (33%, total=6)

---

## Dekoracje

### Section
- Background: `bg-background`
- Spacing: `section-spacing` (py-16 md:py-24)
- Container: `container mx-auto px-6`

### Header
- Title: `font-serif text-3xl md:text-4xl font-bold text-foreground`
- Title accent: `h2-accent` (CSS class — dekoracyjne podkreslenie)
- Subtitle: `text-muted-foreground text-lg leading-relaxed mt-6`
- Layout: left-aligned, `max-w-2xl`, `mb-16`

### Card Container
- Base: `bg-card rounded-lg shadow-md overflow-hidden border border-border/50`
- No hover effects in original

### Card Image
- Position: relative, aspect-video
- Fit: `object-cover`
- Fallback: bg-muted z ImageIcon placeholder

### Card Body
- Padding: `p-6`
- Title: `font-serif text-lg font-semibold text-foreground mb-3`
- Description: `text-muted-foreground text-sm leading-relaxed mb-4`

### Feature List
- Container: `space-y-2`
- Text: `text-sm text-muted-foreground`
- Dot: `w-1.5 h-1.5 rounded-full bg-primary mt-1.5`

### CTA Card (optional, in-grid)
- **Wireframe:** bg-muted/50, dashed border, centered text + button placeholder
- Styled options:
  - Glowing secondary: `bg-secondary shadow-[0_0_60px_-12px_var(--secondary)] text-secondary-foreground`
  - Gradient glow: `bg-gradient-to-br from-secondary via-secondary/90 to-primary/20 shadow-2xl`
  - Solid primary: `bg-primary text-primary-foreground shadow-lg`
  - Subtle: `bg-card border-2 border-primary/20`
- Button: same treatments as CTA buttons
- Content: title + optional description + button

---

## Hover Effects Summary

| Element | Effect | Timing |
|---------|--------|--------|
| (brak hover w oryginale) | — | — |

## Unique Elements

- **h2-accent** — CSS class na tytule sekcji, dekoracyjne podkreslenie
- **font-serif** — uzyty na tytulach (section + card)
- **shadow-md** — karty maja cien (nie hover, staly)
- **aspect-video** — proporcje obrazu karty (16:9)
