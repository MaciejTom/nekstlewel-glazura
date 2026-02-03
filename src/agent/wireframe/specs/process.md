# Process — Decoration Spec

## Layout Pattern
Vertical stack of step cards. Each card: step badge + title + description. Original has decorative illustrations per step (not included).

## Wireframe
`src/components/wireframe/process-wireframe.tsx`

## Oryginal
`src/agent/wireframe/originals/process.html`

## Dekoracje

### Card
- Background: `bg-white/50 dark:bg-zinc-900/50`
- Shape: `rounded-2xl`
- Border: `border border-gray-200 dark:border-zinc-800`
- Padding: `p-6`

### Step Badge
- Background: `bg-gray-200 dark:bg-zinc-800`
- Text: `text-xs font-medium text-gray-500`
- Shape: `rounded-full`
- Padding: `px-3 py-1`

### Step Title
- Font: `text-xl font-bold`
- Color: `text-gray-900 dark:text-white`

### Step Description
- Font: `text-sm`
- Color: `text-gray-600 dark:text-gray-300`

### Decorative Illustrations (per step)
- Original has unique illustration for each step
- Not included in wireframe — design decision
