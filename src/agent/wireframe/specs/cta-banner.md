# CTA Banner — Decoration Spec

## Layout Pattern
Full-width centered: decorative icon + headline + subtitle + 2 CTA buttons.

## Wireframe
`src/components/wireframe/cta-banner-wireframe.tsx`

## Oryginal
`src/agent/wireframe/originals/cta-banner.html`

## Dekoracje

### Section
- Background: `bg-luxury-blue dark:bg-black` (custom dark blue)
- Text: `text-white`
- Overflow: `overflow-hidden`

### Background Decoration
- Radial gradient: `radial-gradient(circle at center, white 0%, transparent 70%)`
- Position: `absolute top-0 right-0 w-1/2 h-full`
- Opacity: `opacity-10`

### Icon
- Material Symbols: `stars`
- Size: `text-5xl`
- Color: `text-primary`

### Headline
- Font: `text-4xl md:text-6xl font-bold font-serif leading-tight`
- Line break: `<br />` between lines

### Subtitle
- Color: `text-white/70`
- Font: `text-lg md:text-xl font-light`

### Primary Button
- Background: `bg-primary hover:bg-red-600`
- Text: `text-white font-bold`
- Shape: `rounded-xl`
- Shadow: `shadow-lg`
- Min width: `min-w-[200px]`
- Padding: `px-8 py-4`

### Secondary Button
- Background: `bg-transparent`
- Border: `border border-white/30`
- Text: `text-white font-bold`
- Shape: `rounded-xl`
- Hover: `hover:bg-white/10`
- Min width: `min-w-[200px]`
