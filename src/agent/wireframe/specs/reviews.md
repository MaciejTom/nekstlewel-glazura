# Reviews — Wireframe Spec

## Layout Pattern
Centered title + 3-kolumnowy grid kart z opiniami. Srodkowa karta moze byc "featured" (wyrozniczona). Opcjonalny bottom link.

## Wireframe Elements
- **Title** — centered, duzy
- **Review card** — rating (stars) + cytat + autor (avatar + name + label)
- **Featured card** — grubsza ramka, scale-105 w wireframe (w styled: shadow, ring, scale)
- **Quote icon** — dekoracyjny cudzyslow w rogu karty
- **Bottom link** — CTA do pelnej listy opinii

## Decoration Properties (do stylizacji)

### Card
- `bg-background-alt`, `rounded-2xl`
- Featured: `shadow-xl`, `ring-2 ring-primary/20`, `scale-105`
- Quote icon: `format_quote` Material Symbol, `text-primary/30`

### Stars
- Material Symbols `star`, `text-primary`
- Warianty: filled/outlined, kolor accent

### Quote text
- Font: `font-medium` (normal) lub `font-bold text-lg` (featured)
- Cudzyslowy w tresci (content)

### Author
- Avatar: `rounded-full`, `w-10 h-10`, image
- Name: `font-bold text-sm`
- Label: `text-xs text-text-muted`

### Bottom link
- `border-b-2 border-primary`, `font-bold`
- Ikona `open_in_new` na koncu
- Hover: `text-primary`

## Original HTML

```html
<section class="py-20 bg-white border-t border-gray-100" id="reviews">
<div class="max-w-[1280px] mx-auto px-4 md:px-8">
<h2 class="text-center text-4xl font-black text-text-main mb-16">Co mówią nasi klienci?</h2>
<div class="grid md:grid-cols-3 gap-8">
<div class="bg-background-alt p-8 rounded-2xl relative">
<span class="material-symbols-outlined text-4xl text-primary/30 absolute top-6 right-6">format_quote</span>
<div class="flex gap-1 text-primary mb-4">
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
</div>
<p class="text-text-main font-medium mb-6">"Pełen profesjonalizm. Panowie z Fixmana zrobili łazienkę w 5 dni, dokładnie tak jak było ustalone. Czysto, sprawnie i bez niespodzianek cenowych."</p>
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Portrait of happy client Marek" src="..."/>
</div>
<div>
<p class="text-sm font-bold text-text-main">Marek Kowalski</p>
<p class="text-xs text-text-muted">Remont łazienki</p>
</div>
</div>
</div>
<div class="bg-background-alt p-8 rounded-2xl relative shadow-xl ring-2 ring-primary/20 scale-105 z-10">
<span class="material-symbols-outlined text-4xl text-primary/30 absolute top-6 right-6">format_quote</span>
<div class="flex gap-1 text-primary mb-4">
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
</div>
<p class="text-text-main font-bold text-lg mb-6">"Najlepsza ekipa w Stalowej Woli. Remont całego mieszkania przebiegł wzorowo. Bardzo dobry kontakt i doradztwo w kwestii materiałów. Polecam!"</p>
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Portrait of happy client Anna" src="..."/>
</div>
<div>
<p class="text-sm font-bold text-text-main">Anna Nowak</p>
<p class="text-xs text-text-muted">Generalny remont</p>
</div>
</div>
</div>
<div class="bg-background-alt p-8 rounded-2xl relative">
<span class="material-symbols-outlined text-4xl text-primary/30 absolute top-6 right-6">format_quote</span>
<div class="flex gap-1 text-primary mb-4">
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
<span class="material-symbols-outlined text-sm">star</span>
</div>
<p class="text-text-main font-medium mb-6">"Korzystałem z usługi malowania. Szybko, dokładnie i w dobrej cenie. Na pewno wrócę przy kolejnych pracach."</p>
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Portrait of happy client Piotr" src="..."/>
</div>
<div>
<p class="text-sm font-bold text-text-main">Piotr Wiśniewski</p>
<p class="text-xs text-text-muted">Malowanie ścian</p>
</div>
</div>
</div>
</div>
<div class="flex justify-center mt-10">
<a class="inline-flex items-center gap-2 text-text-main font-bold border-b-2 border-primary hover:text-primary transition-colors pb-0.5" href="#">
                Zobacz wszystkie 106 opinii na Google
                <span class="material-symbols-outlined text-sm">open_in_new</span>
</a>
</div>
</div>
</section>
```
