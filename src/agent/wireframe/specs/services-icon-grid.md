# Services Icon Grid — Decoration Spec

## Layout Pattern
Centered header (tagline + title + subtitle) over a 4-column responsive grid of icon cards.
Each card: icon box (Material Symbols) + title + description.
No images, no feature lists.

## Wireframe
`src/components/wireframe/services-icon-grid-wireframe.tsx`

---

## Dekoracje

### Section
- Background: `bg-surface-dark`
- Border: `border-y border-border-dark`
- Spacing: `py-20`
- Container: `max-w-7xl mx-auto px-4 md:px-10`

### Header
- Layout: `text-center mb-16 max-w-3xl mx-auto`
- Tagline: `text-primary text-sm font-bold tracking-widest uppercase mb-3`
- Title: `text-3xl md:text-4xl font-bold text-white mb-6`
- Subtitle: `text-gray-400` (no explicit size — inherits base)

### Card Container
- Base: `bg-background-dark p-8 rounded-xl border border-border-dark`
- Layout: `flex flex-col gap-6`
- Hover: `hover:border-primary/50`
- Shadow hover: `hover:shadow-xl hover:shadow-primary/5`
- Transition: `transition-all`
- Group: `group` (for child hover effects)

### Icon Box
- Size: `w-14 h-14`
- Shape: `rounded-lg`
- Background: `bg-surface-dark`
- Border: `border border-border-dark`
- Layout: `flex items-center justify-center`
- Color: `text-primary`
- Hover: `group-hover:bg-primary group-hover:text-white`
- Transition: `transition-colors`
- Icon type: Material Symbols Outlined (`!text-3xl`)
- Icons used: `foundation`, `construction`, `domain`, `engineering`

### Card Title
- Font: `text-xl font-bold text-white`
- Spacing: `mb-3`

### Card Description
- Font: `text-gray-400 text-sm leading-relaxed`

---

## Hover Effects Summary

| Element | Effect | Timing |
|---------|--------|--------|
| Card border | `border-border-dark` -> `border-primary/50` | `transition-all` |
| Card shadow | none -> `shadow-xl shadow-primary/5` | `transition-all` |
| Icon box bg | `bg-surface-dark` -> `bg-primary` | `transition-colors` |
| Icon box text | `text-primary` -> `text-white` | `transition-colors` |

---

## Item Count Behavior

Grid uzywa `flex flex-wrap justify-center` z dynamiczna szerokoscia kart:
- total = 2: karty 50% (2 per row)
- total = 4 lub 8: karty 25% (4 per row)
- w pozostalych: karty 33% (3 per row)

Przykladowe uklady:
- 3 items → 3 in a row (33%)
- 4 items → 4 in a row (25%)
- 6 items → 3+3 (33%)
- 3 items + CTA card → 4 in a row (25%, total=4)
- 4 items + CTA card → 3+2 centered (33%, total=5)

## CTA Card (optional, in-grid)

- **Wireframe:** bg-muted/50, dashed border, centered text + button placeholder
- Styled options:
  - Glowing secondary: `bg-secondary shadow-[0_0_60px_-12px_var(--secondary)] text-secondary-foreground`
  - Gradient glow: `bg-gradient-to-br from-secondary via-secondary/90 to-primary/20 shadow-2xl`
  - Solid primary: `bg-primary text-primary-foreground shadow-lg`
  - Subtle: `bg-card border-2 border-primary/20`

---

## Unique Elements

- **Tagline** is `text-primary` with `font-bold` (not just tracking-widest uppercase)
- **Section** uses `border-y` (top + bottom border) which is a decorative separator
- **Icon box** has `rounded-lg` (not rounded-full) and inverts on hover (bg + text swap)
- **Opcjonalna CTA card** w gridzie, brak features list — pure icon + text cards
- **Dark theme** throughout: `bg-surface-dark`, `bg-background-dark`, `text-white`, `text-gray-400`
