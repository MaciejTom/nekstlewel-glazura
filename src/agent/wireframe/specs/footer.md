# Footer — Decoration Spec

## Layout Pattern
Multi-column footer: CTA row (headline + button) → 4-col grid (brand + contact + link columns) → copyright bar.

## Wireframe
`src/components/wireframe/footer-wireframe.tsx`

## Oryginal
`src/agent/wireframe/originals/footer.html`

## Dekoracje

### Section
- Background: `bg-[#151515] dark:bg-black`
- Text: `text-white`
- Padding: `pt-24 pb-12`
- Border: `border-t border-gray-900`

### CTA Row
- Border: `pb-20 border-b border-gray-800`
- Headline: `text-3xl font-medium`
- Button: `bg-gray-200 hover:bg-white text-black`
- Button typography: `text-[10px] font-bold uppercase tracking-widest`
- Arrow: `<span class="ml-1">&gt;</span>`

### Brand Column
- Logo icon: Material Symbols `apartment` text-2xl
- Brand name: `font-bold text-lg tracking-wide`
- Description: `text-xs text-gray-400 leading-relaxed`
- Social links: `text-gray-400 hover:text-white transition-colors`

### Contact Column
- Title: `text-[10px] font-bold uppercase tracking-widest text-gray-500`
- Address: `text-sm text-gray-300`
- Sublabel: `text-[10px] uppercase text-gray-500`
- Values: `font-bold text-white`

### Link Columns
- Title: same as contact
- Links: `text-sm text-gray-300 hover:text-white`

### Copyright Bar
- Border: `border-t border-gray-800`
- Font: `text-[10px] text-gray-500 uppercase tracking-widest`
