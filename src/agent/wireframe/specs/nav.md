# Nav — Decoration Spec

## Layout Pattern
Fixed navbar: logo left + centered pill with links + CTA button. Mobile: hamburger menu.

## Wireframe
`src/components/wireframe/nav-wireframe.tsx`

## Oryginal
`src/agent/wireframe/originals/nav.html`

## Dekoracje

### Nav Container
- Position: `fixed top-0 w-full z-50`
- Pointer events: `pointer-events-none` on container, `pointer-events-auto` on interactive elements
- Padding: `p-6`

### Logo
- Font: `font-display font-medium tracking-tight`
- Icon: Material Symbols `all_inclusive` with `text-primary`
- Size: `text-2xl`

### Links Pill
- Background: `bg-white/80 dark:bg-black/40 backdrop-blur-md`
- Border: `border border-gray-200 dark:border-white/10`
- Shape: `rounded-pill` (custom)
- Shadow: `shadow-lg`
- Padding: `px-2 py-2`

### Link Items
- Font: `text-sm font-medium`
- Color: `text-gray-600 dark:text-gray-300`
- Hover: `hover:text-gray-900 dark:hover:text-white`
- Shape: `rounded-pill hover:bg-gray-100 dark:hover:bg-white/10`
- Transition: `transition-colors`

### CTA Button
- Background: `bg-gray-900 dark:bg-white`
- Text: `text-white dark:text-black`
- Shape: `rounded-pill`
- Hover: `hover:opacity-90 transition-opacity`
- Extra margin: `ml-2`

### Mobile Button
- Icon: Material Symbols `menu`
- Visible: `md:hidden`
