# Editorial Alternating — Decoration Spec

## Layout Pattern
Alternating rows: image left + content right (nieparzyste), image right + content left (parzyste).
Każdy row to 50/50 split na lg. Stack na mobile.
5 elementów z numerowanymi etapami (step badge).
CTA na końcu z separatorem border-top.

## Wireframe
`src/components/wireframe/services-editorial-wireframe.tsx`

## Styled example
`src/components/sections/services-editorial-section.tsx`

---

## Dekoracje

### Section
- Background: `bg-background`
- Spacing: `py-16 md:py-24 px-4 sm:px-6 lg:px-8`
- Container: `max-w-7xl mx-auto`
- Section gradient: `absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-card to-transparent opacity-30`
- Overflow: `overflow-hidden`

### Header
- Title: `font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary`
- Title underline: `w-24 h-1 bg-primary rounded-full` (centered, absolute -bottom-4)
- Title break: `<span class="block mt-2">` dla złamania linii
- Subtitle: `text-muted-foreground text-lg md:text-xl leading-relaxed`
- Layout: centered, `max-w-3xl`, `mb-20`

### Service Row
- Layout odd: `flex flex-col lg:flex-row items-center gap-10 lg:gap-16`
- Layout even: `flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16`
- Gap between rows: `gap-20 lg:gap-32`
- Group: `group` (dla hover effects na obrazach)

### Image Column
- Width: `w-full lg:w-1/2`
- Container: `rounded-xl overflow-hidden shadow-lg`
- Height: `h-64 sm:h-80 lg:h-[400px]`
- Image: `object-cover w-full h-full`
- Hover: `group-hover:scale-105`
- Transition: `transition-transform duration-700`

### Decorative Border (za obrazem)
- Odd (lewa): `absolute top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-xl hidden lg:block`
- Even (prawa): `absolute top-4 -right-4 w-full h-full border-2 border-secondary/20 rounded-xl hidden lg:block`
- Purpose: delikatny offset frame za obrazem

### Content Column
- Width: `w-full lg:w-1/2`
- Even: `lg:text-right` (tekst wyrównany do prawej)

### Step Badge
- Layout odd: `flex items-center gap-4 mb-4`
- Layout even: `flex items-center gap-4 mb-4 lg:flex-row-reverse`
- Icon circle: `w-12 h-12 rounded-full bg-card text-primary shadow-sm`
- Icon: Material Symbols (filled, FILL 1), `text-2xl`
- Label: `uppercase tracking-widest text-xs font-bold text-muted-foreground`

### Service Title
- Font: `font-serif text-3xl font-bold text-secondary`
- Spacing: `mb-6`

### Service Description
- Color: `text-muted-foreground text-lg leading-relaxed`
- Spacing: `mb-8`

### Feature List
- Container odd: `space-y-4`
- Container even: `space-y-4 flex flex-col lg:items-end`
- Item odd: `flex items-start gap-3`
- Item even: `flex items-start gap-3 lg:flex-row-reverse`
- Icon: Material Symbol `check_circle` (filled), `text-primary text-xl`
- Text: `font-medium text-foreground/80`

### CTA
- Container: `mt-24 lg:mt-32 text-center max-w-2xl`
- Separator: `border-t border-border pt-16`
- Title: `font-serif text-2xl text-secondary font-bold mb-6`
- Description: `text-muted-foreground mb-8`
- Button: `bg-primary hover:bg-primary/85 text-primary-foreground font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-primary/30`
- Button transition: `transition-all duration-300`
- Button icon: Material Symbol (filled), gap-3

---

## Hover Effects Summary

| Element | Effect | Timing |
|---------|--------|--------|
| Image | scale-100 → scale-105 | duration-700 |
| Button | shadow-lg → shadow-primary/30 | duration-300 |

## Unique Elements

- **Decorative border offset** — ramka border-2 przesunięta o 4px za obrazem, widoczna tylko na lg
- **Step badges** — numerowane etapy z ikoną w kółku + label "Etap 1: Ściany"
- **Text alignment flip** — parzyste elementy mają text-right i flex-row-reverse na lg
- **Section gradient** — subtelny gradient z prawej strony sekcji (from-card to-transparent)
