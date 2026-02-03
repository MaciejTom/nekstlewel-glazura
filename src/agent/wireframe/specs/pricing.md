# Pricing — Decoration Spec

## Layout Pattern
2-col grid: standard tier (light) + featured/popular tier (dark). Features checklist with check icons. CTA button at bottom.

## Wireframe
`src/components/wireframe/pricing-wireframe.tsx`

## Oryginal
`src/agent/wireframe/originals/pricing.html`

## Dekoracje

### Section
- Background: `bg-white dark:bg-surface-dark`

### Header
- Title: `text-3xl md:text-4xl font-display font-medium`
- Subtitle: `text-gray-600 dark:text-gray-400`

### Standard Card
- Background: `bg-white dark:bg-surface-dark`
- Border: `border border-gray-200 dark:border-white/10`
- Shadow: `shadow-xl`
- Shape: `rounded-3xl`
- Label: `text-sm font-bold uppercase tracking-wider text-gray-500`

### Featured Card (Popular)
- Background: `bg-gray-900 text-white`
- Shape: `rounded-3xl`
- Shadow: `shadow-xl`
- Overflow: `overflow-hidden`
- Badge: `absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-xl`
- Label color: `text-gray-400`

### Price
- Value: `text-4xl font-bold`
- Suffix: `text-gray-500` / `text-gray-400`

### Description
- Border: `border-b border-gray-100` (standard) / `border-gray-700` (featured)
- Padding: `pb-8 mb-8`

### Feature Items
- Check icon: Material Icons `check`
- Standard: `text-green-500`
- Featured: `text-primary`
- Text: `text-sm text-gray-700` / `text-sm` (white context)

### Standard Button
- Style: `border border-gray-900 text-gray-900 font-medium`
- Full width block

### Featured Button
- Style: `bg-primary text-black font-bold`
- Full width block
