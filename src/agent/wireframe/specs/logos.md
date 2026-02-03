# Logos — Decoration Spec

## Layout Pattern
6-col grid with vertical borders between cells. Logo images centered in each cell.

## Wireframe
`src/components/wireframe/logos-wireframe.tsx`

## Oryginal
`src/agent/wireframe/originals/logos.html`

## Dekoracje

### Section
- Border: `border-t border-b border-gray-200 dark:border-gray-800`

### Grid
- Mobile: `grid-cols-3`
- Desktop: `md:grid-cols-6`

### Cell
- Padding: `p-8`
- Border: `border-r border-gray-200 dark:border-gray-800` (except last)
- Flex center: `flex items-center justify-center`

### Logo Images
- Height: `h-6`
- Opacity: `opacity-60`
- Dark mode: `dark:invert`
