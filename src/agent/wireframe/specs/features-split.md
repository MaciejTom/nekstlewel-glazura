# Features Split — Wireframe Spec

## Layout Pattern
2-kolumnowy flex (lg:flex-row): content left (tagline, title, desc, features grid 2-col, CTA) + image right. Contained max-w-7xl.

## Wireframe Elements
- **Tagline** — uppercase label
- **Title** — duzy, bold
- **Description** — paragraph
- **Features grid** — 2-col grid, icon placeholder + text per item
- **CTA button** — dashed border placeholder
- **Image** — placeholder (ImageIcon)

## Decoration Properties (do stylizacji)

### Background
- `bg-white dark:bg-[#1a180d]` — light/dark mode

### Feature icons
- Material Symbols `check_circle`, `text-primary`
- Warianty: checkmark, bullet, numbered, custom icon per feature

### CTA button
- `rounded-lg h-12 px-8 bg-primary hover:bg-[#e0bd0c]`
- `text-[#181711] font-bold shadow-lg shadow-primary/20`

### Image (DEKORACJE — nie w wireframe)
- `rounded-xl overflow-hidden shadow-2xl`
- **Gradient overlay**: `absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`
- **Floating quote badge** (absolute bottom-6 left-6):
  - `bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20`
  - Cytat tekst: `font-bold text-lg text-white`
  - 5 gwiazdek: `text-primary`

### Typography
- Tagline: `text-primary font-bold tracking-wider uppercase text-sm`
- Title: `text-3xl md:text-4xl font-black leading-tight`
- Description: `text-text-muted text-lg leading-relaxed`
- Feature text: `text-text-main font-medium` / `dark:text-white`

## Original HTML

```html
<section class="py-16 md:py-24 bg-white dark:bg-[#1a180d]">
<div class="max-w-7xl mx-auto px-4 md:px-10">
<div class="flex flex-col lg:flex-row gap-16 items-center">
<div class="flex-1 flex flex-col gap-8">
<div class="flex flex-col gap-4">
<span class="text-primary font-bold tracking-wider uppercase text-sm">Dlaczego my?</span>
<h2 class="text-3xl md:text-4xl font-black text-text-main dark:text-white leading-tight">
Gwarancja jakości i spokoju ducha
</h2>
<p class="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
Wiemy, że remont to stres. Dlatego FIXMAN stawia na jasne zasady, punktualność i porządek.
</p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">check_circle</span>
<span class="text-text-main dark:text-white font-medium">Darmowa wycena w 24h</span>
</div>
<!-- ...6 items total -->
</div>
<button class="w-fit mt-4 flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-[#e0bd0c] text-[#181711] text-base font-bold shadow-lg shadow-primary/20 transition-all">
Umów spotkanie
</button>
</div>
<div class="flex-1 w-full h-full min-h-[400px] rounded-xl overflow-hidden relative shadow-2xl">
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<div class="w-full h-full bg-cover bg-center" style="background-image: url(...)"></div>
<div class="absolute bottom-6 left-6 z-20 text-white">
<div class="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
<p class="font-bold text-lg">"Najlepsi w Stalowej Woli!"</p>
<div class="flex text-primary mt-1">
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
```
