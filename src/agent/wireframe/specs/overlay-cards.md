# Overlay Cards — Decoration Spec

## Layout Pattern
Tall cards (500px) w flex-wrap grid (3 cols lg, 2 md, 1 mobile).
Zdjęcie jako pełne tło karty, gradient overlay od dołu, content na dole.
CTA na końcu — prosty tekst + button.

## Wireframe
`src/components/wireframe/services-overlay-wireframe.tsx`

## Styled example
`src/components/sections/services-overlay-section.tsx`

---

## Dekoracje

### Section
- Background: `bg-background`
- Spacing: `py-16 md:py-24 px-4 sm:px-6 lg:px-8`
- Container: `max-w-7xl mx-auto`
- Extras: brak gradient overlay na sekcji (jest na kartach)

### Header
- Title: `font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary`
- Title underline: `w-24 h-1 bg-primary rounded-full` (centered, absolute -bottom-4)
- Subtitle: `text-muted-foreground text-lg md:text-xl leading-relaxed`
- Layout: centered, `max-w-3xl`, `mb-16`

### Card Container
- Base: `rounded-xl overflow-hidden shadow-lg`
- Hover: `hover:shadow-2xl`
- Transition: `transition-all duration-500`
- Cursor: `cursor-pointer`
- Height: `h-[500px]`
- Width: `w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]`

### Image
- Position: `absolute inset-0` (full bleed)
- Fit: `object-cover w-full h-full`
- Hover: `group-hover:scale-110`
- Transition: `transition-transform duration-700`

### Gradient Overlay
- Position: `absolute inset-0`
- Gradient: `linear-gradient(to top, var(--background), color-mix(in srgb, var(--background) 95%, transparent) 40%, transparent)`
- Purpose: zapewnia czytelność tekstu na zdjęciu

### Content Overlay
- Position: `absolute inset-0 flex flex-col justify-end`
- Padding: `p-8`

### Icon
- Shape: `w-12 h-12 rounded-full`
- Background: `bg-primary/10`
- Color: `text-primary`
- Extras: `backdrop-blur-sm`
- Icon type: Material Symbols (filled, FILL 1)
- Alignment: `self-start`, `mb-4`

### Card Title
- Font: `font-serif text-2xl font-bold`
- Color: `text-secondary`
- Hover: `group-hover:text-primary`
- Transition: `transition-colors duration-300`
- Spacing: `mb-3`

### Card Description
- Color: `text-secondary/80`
- Size: `text-sm leading-relaxed font-medium`
- Spacing: `mb-4`

### Feature List
- Container: `space-y-2`
- Text: `text-sm text-secondary font-bold`
- Dot: `h-1.5 w-1.5 rounded-full bg-primary`

### Decorative Line
- Default: `w-12 h-1 bg-primary rounded-full opacity-80`
- Hover: `group-hover:w-full`
- Transition: `transition-all duration-300`
- Spacing: `mt-6`

### CTA
- Layout: `mt-20 text-center`
- Text: `text-secondary font-medium text-lg mb-4`
- Button: `bg-primary hover:bg-primary/85 text-primary-foreground font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl`
- Button hover: `hover:-translate-y-0.5`
- Button transition: `transition-all duration-300`
- Button icon: Material Symbol (filled) `text-[24px]`

### CTA Card (optional, in-grid)
- **Wireframe:** bg-muted/50, dashed border, centered text + button placeholder
- **To jest dodatkowa karta w gridzie (nie na dole), sluzy jako CTA / upsell.**
- Styled options:
  - Glowing secondary: `bg-secondary shadow-[0_0_60px_-12px_var(--secondary)] text-secondary-foreground`
  - Gradient glow: `bg-gradient-to-br from-secondary via-secondary/90 to-primary/20 shadow-2xl`
  - Solid primary: `bg-primary text-primary-foreground shadow-lg`
  - Subtle: `bg-card border-2 border-primary/20`
- Button: same treatments as CTA buttons (solid, pill, outline)
- Content: title + optional description + button

---

## Item Count Behavior

Grid uzywa `flex flex-wrap justify-center` z dynamiczna szerokoscia kart:
- Jesli total (services + ctaCard) = 2 lub 4: karty 50% (2 per row)
- W przeciwnym razie: karty 33% (3 per row)

Przykladowe uklady:
- 3 items → 3 in a row (33%)
- 4 items → 2+2 (50%)
- 5 items → 3+2 centered (33%)
- 6 items → 3+3 (33%)
- 3 items + CTA card → 2+2 (50%, total=4)
- 5 items + CTA card → 3+3 (33%, total=6)

---

## Hover Effects Summary

| Element | Effect | Timing |
|---------|--------|--------|
| Card | shadow-lg → shadow-2xl | duration-500 |
| Image | scale-100 → scale-110 | duration-700 |
| Title | text-secondary → text-primary | duration-300 |
| Line | w-12 → w-full | duration-300 |
| Button | -translate-y-0 → -translate-y-0.5 | duration-300 |
