# FAQ — Decoration Spec

## Layout Pattern
Centered title + vertical accordion items (details/summary with expand/collapse icon).

## Wireframe
`src/components/wireframe/faq-wireframe.tsx`

## Oryginal
`src/agent/wireframe/originals/faq.html`

## Dekoracje

### Title
- Font: `text-5xl font-black tracking-tighter`
- Line breaks in text

### Subtitle
- Color: `text-gray-600 dark:text-gray-400`
- Max width: `max-w-xl mx-auto`

### Accordion Item
- Element: `<details>` with `<summary>`
- Border: `border-b border-gray-200 dark:border-gray-800`
- Padding: `p-4`
- Group: `group` class for state-based styling

### Question (summary)
- Font: `font-semibold`
- Color: `text-gray-900 dark:text-white`
- Cursor: `cursor-pointer`
- List style: `list-none` (removes default marker)

### Toggle Icon
- Material Icons: `add`
- Transition: `transition-transform`
- Open state: `group-open:rotate-45` (rotates + to x)

### Answer
- Color: `text-gray-600 dark:text-gray-400`
- Margin: `mt-2`
