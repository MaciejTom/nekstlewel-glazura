# Contact — Decoration Spec

## Layout Pattern
2-col grid: left (badge + title + description + decorative image) + right (form with fields + submit).

## Wireframe
`src/components/wireframe/contact-wireframe.tsx`

## Oryginal
`src/agent/wireframe/originals/contact.html`

## Dekoracje

### Section
- Background: `bg-brand-green dark:bg-brand-dark-green` (custom brand color)
- Transition: `transition-colors`

### Badge
- Border: `border border-gray-400 dark:border-gray-500`
- Font: `text-[10px] font-bold uppercase tracking-widest`
- Color: `text-gray-800 dark:text-white`

### Title
- Font: `text-4xl font-medium leading-tight`

### Description
- Font: `text-sm leading-relaxed`
- Color: `text-gray-700 dark:text-gray-300`

### Decorative Image (left bottom)
- Opacity: `opacity-50`
- Filter: `grayscale`
- Object: `object-contain object-left-bottom`
- Height: `h-64`

### Form Container
- Background: `bg-white dark:bg-gray-800`
- Shadow: `shadow-sm`
- Padding: `p-8 md:p-12`
- No border-radius in original (square)

### Form Title
- Font: `text-lg font-bold`

### Input Fields
- Border: `border-gray-300`
- Font: `text-sm`
- Padding: `px-4 py-3`

### Submit Button
- Background: `bg-primary hover:bg-black`
- Text: `text-white`
- Font: `text-[10px] font-bold uppercase tracking-widest`
- Padding: `px-8 py-3`
