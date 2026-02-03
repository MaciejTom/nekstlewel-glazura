# Wireframe Agent — Instrukcje

## Co to jest

System do konwersji prototypów HTML (ze Stitch, Google AI Studio itp.) na neutralne, reużywalne wireframe'y, które później można ostylować pod dowolnego klienta.

## Workflow

```
HTML prototype (Stitch)
        ↓
   [1] WIREFRAME — neutralny layout (ten dokument)
        ↓
   [2] DECORATION SPEC — zapisane dekoracje z oryginału (specs/*.md)
        ↓
   [3] STYLING — wireframe + content.md + globals.css + spec → produkcyjny komponent
```

**WAZNE:** Po kazdej zmianie (nowy wireframe, nowy styled, nowy spec) zaktualizuj `src/agent/wireframe/SECTIONS.md`.

---

## Faza 1: HTML → Wireframe

### Input
Surowy HTML — sekcja strony z prototypu.

### Output — 3 pliki

```
src/types/{name}.ts                              — interfejs TypeScript
src/content/wireframe/{name}.ts                   — placeholder content
src/components/wireframe/{name}-wireframe.tsx      — komponent wireframe
```

### Konwencje kodu

```tsx
import type { TypeName } from "@/types"
import { ImageIcon } from "lucide-react"

const w = {                              // ← ZAWSZE "w", nie "s"
  section: "bg-background py-24",
  container: "container mx-auto px-6",
  // ...pogrupowane: header, grid, card, cta
}

interface Props {
  content: TypeName
}

export function NameWireframe({ content }: Props) {
  // ...
}
```

- Brak `"use client"`
- Brak `framer-motion`, `next/image`
- Jedyny dozwolony import ikon: `lucide-react` (ImageIcon jako placeholder)

### Dozwolone tokeny kolorów

| Token | Użycie |
|-------|--------|
| `bg-background` | Tło sekcji |
| `bg-muted` | Placeholdery obrazów, subtle fill |
| `bg-background/90` | Overlay na content (np. overlay cards) |
| `text-foreground` | Tytuły (h2, h3) |
| `text-muted-foreground` | Opisy, labele, body text |
| `text-muted-foreground/30` | Ikony placeholder |
| `text-muted-foreground/50` | Tekst placeholder, labele |
| `border-border` | Wszystkie bordery — **zawsze `border-dashed`** |

### ZAKAZANE w wireframe

- `primary`, `secondary`, `accent` (kolory brandowe)
- `shadow-*` (cienie)
- `hover:*`, `group-hover:*` (efekty hover)
- `transition-*`, `duration-*` (animacje)
- `transform`, `scale-*`, `translate-*` (transformacje)
- `backdrop-blur-*`, gradienty
- `rounded-xl`, `rounded-full` (zaokrąglenia dekoracyjne)
- `cursor-pointer`

### Wlasciwosci dekoracji (decoration properties)

Niektore elementy WYGLADAJA strukturalnie, ale sa decyzjami dekoracyjnymi.
Wireframe je ZAZNACZA (pokazuje ze cos tu bedzie), ale NIE DEFINIUJE jak.
Spec opisuje mozliwe treatments.

| Element w wireframe | Jak zaznaczony | Mozliwe treatments (w spec) |
|---------------------|----------------|-----------------------------|
| Headline accent line | `border-b-2 border-dashed text-muted-foreground` | inny kolor, inny font, underline, bg highlight, gradient text, brak |
| Badge | `border border-dashed` | border-accent, solid bg, dot+text, rounded |
| Stat value | `text-foreground font-semibold` | text-primary, font-display, font-mono |
| Background image | `bg-muted` + ImageIcon | real image + gradient overlay + pattern |
| CTA variant | `border border-dashed` (oba takie same) | primary solid vs outline, 3D shadow, pill, with icon |
| Icon style | dashed box + "icon" | solid bg, outlined, ghost/transparent, naked |
| Typography font | brak font-* (default sans) | font-display, font-serif, font-mono |
| Grid CTA card | `bg-muted/50` + dashed border + centered text | glowing secondary, gradient glow, solid primary, subtle border |

**Zasada:** Wireframe pokazuje GDZIE i CO, spec mowi JAK.

### Regula: Struktura vs Dekoracja

Wireframe = **czysta struktura**. Zero dekoracji. Agent czyta 3 zrodla:

- **Wireframe** → co jest i gdzie stoi (layout, flow)
- **Spec** → jak to ostylowac (dekoracje, efekty)
- **Content type** → jakie dane wypelniaja sloty

#### Co jest DEKORACJA (NIE pokazujemy w wireframe):

1. **Elementy `position: absolute` / `fixed`** ktore nie wplywaja na flow layoutu
   — np. ikona cudzysłowu w rogu karty, dekoracyjny kształt w tle, gradient overlay na obrazku
2. **Transformacje wizualne** — `scale-*`, `rotate-*`, `-skew-*`
   — np. powiekszona srodkowa karta (`scale-105`)
3. **Efekty wizualne** — `shadow-*`, `ring-*`, `backdrop-blur-*`, `opacity-*`
4. **Ikony dekoracyjne** — `format_quote`, dekoracyjne strzalki, separatory graficzne
5. **Gradienty overlay** — `bg-gradient-to-t from-black/60 to-transparent`
6. **Floating badges na obrazkach** — jesli sa absolute i dekoracyjne (cytat + gwiazdki na zdjęciu)

#### Co jest STRUKTURA (POKAZUJEMY w wireframe):

1. **Grid/flex layout** — ile kolumn, gap, breakpointy
2. **Elementy content-driven** — rating (z `rating: number`), tekst, lista features
3. **Placeholdery na content** — obrazy (ImageIcon), ikony (dashed box), avatary (CircleDashed)
4. **Flagi w typie** — `featured: boolean` JEST w typie (dane), ale SPOSOB wyroznienia to dekoracja
   → wireframe nie zmienia wygladu karty, spec opisuje jak wyroznic featured

#### Jak oznaczyc flagi typu w wireframe:

Jesli typ ma flage (np. `featured: boolean`), wireframe NIE zmienia wygladu elementu.
Zamiast tego dodaje maly label:

```tsx
{item.featured && (
  <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">[featured]</span>
)}
```

Agent stylujacy czyta flage z typu i spec, zeby wiedziec jak ja wyrenderowac.

### Warianty gridowe (wspolne dla sekcji z kartami)

Sekcje z gridami (Overlay, Cards, Icon Grid) maja dwa wspolne warianty:

1. **Dynamiczna ilosc itemow** — flex-wrap + justify-center, szerokosc kart
   obliczana z total items (2→50%, 3/5/6→33%, 4/8→25%)
2. **Opcjonalna karta CTA** — typ `GridCtaCard` z `common.ts`, renderowana
   jako ostatni element w gridzie. Wireframe: bg-muted/50 + centered text.

```ts
// src/types/common.ts
interface GridCtaCard {
  title: string
  description?: string
  buttonText: string
}
```

Kazdy typ sekcji gridowej uzywa `ctaCard?: GridCtaCard` — to jest JEDEN
wspolny wariant, nie osobna sekcja.

### Zamienniki elementów

#### Obraz → Placeholder

```tsx
<div className="w-full h-full bg-muted flex flex-col items-center justify-center gap-2">
  <ImageIcon className="w-10 h-10 text-muted-foreground/30" />
  <span className="text-xs text-muted-foreground/50">{label}</span>
</div>
```

Label opisuje rolę: `"service 1"`, `"hero"`, `"featured 2x2"`, `"avatar"`, `"logo"`

#### Ikona → Placeholder

```tsx
<div className="w-10 h-10 border border-dashed border-border flex items-center justify-center">
  <span className="text-[10px] text-muted-foreground/50">icon</span>
</div>
```

#### Button / CTA → Placeholder

```tsx
<span className="inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest">
  {buttonText}
</span>
```

#### Dekoracyjne linie/separatory

```tsx
<div className="w-12 h-px bg-border mt-4" />
```

#### Feature dots

```tsx
<span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 shrink-0" />
```

### Typografia

- **h2 (tytuł sekcji):** `text-4xl font-semibold text-foreground`
- **h3 (tytuł karty/elementu):** `text-lg font-semibold text-foreground`
- **Body/opis:** `text-sm text-muted-foreground leading-relaxed` lub `text-lg`
- **Label/tagline:** `text-xs tracking-widest uppercase text-muted-foreground`
- **Brak `font-serif`** — to jest dekoracja, dodaje się w stylowaniu

### Content — placeholder tekst

- Tytuły sekcji: `"Section Title Goes Here"`
- Tytuły kart: `"Service Title One"`, `"Card Title"`
- Opisy: `"Short description of this service, its value and what the client gets."`
- Features: `"Feature point one"`, `"Feature point two"`
- Tagline: `"SECTION TAGLINE"`
- CTA: `"Call to Action"`, `"Looking for something else?"`
- Stats: `"00+"`, `"Label"`

### Co ZACHOWAĆ z HTML

1. **Grid/flex structure** — breakpointy (lg/md/sm), kolumny, gap
2. **Proporcje** — aspect ratio, heights (h-[500px], aspect-square)
3. **Hierarchia treści** — co jest h2 vs h3 vs p vs ul
4. **Wzorce** — alternating left/right, flex-wrap 3+2, mosaic grid
5. **Struktura wewnętrzna** — kolejność elementów w karcie
6. **Responsywność** — mobile-first breakpoints

### Co USUNĄĆ z HTML

1. Kolory brandowe (primary, red, navy)
2. Cienie (shadow-lg, shadow-2xl)
3. Hover efekty (hover:shadow, group-hover:scale)
4. Animacje (transition, duration, transform)
5. Gradienty (gradient-to-t, from-color)
6. Dekoracyjne obramowania (border-primary/20 offset)
7. Backdrop blur, opacity effects
8. Zaokrąglenia dekoracyjne (rounded-xl → pomiń)
9. Real images (→ ImageIcon placeholder)
10. Ikony Material Symbols (→ dashed box placeholder)

---

## Faza 2: Ekstrakcja dekoracji

Przy każdej konwersji HTML → wireframe, zapisz osobny plik w `src/agent/wireframe/specs/{name}.md` z opisem WSZYSTKICH dekoracji z oryginalnego HTML.

### Co zapisać w spec

Dla każdej kategorii elementu:

1. **Klasy CSS** — dokładne klasy Tailwind z oryginału
2. **Hover/focus** — co się dzieje na interakcji
3. **Transition** — jakie animacje, timing
4. **Kolory** — gdzie idzie primary, secondary (jako tokeny, nie hex)
5. **Zaokrąglenia** — jaki border-radius
6. **Cienie** — jakie shadow
7. **Typografia** — font-family, weight, size

### Kategorie elementów w spec

- Section (tło, gradient overlay)
- Card container
- Image treatment
- Icon treatment
- Title typography
- Description typography
- Feature list
- Decorative elements (linie, separatory, border offsets)
- Button/CTA
- Hover effects (osobno, jako grupa)

### Format pliku spec

```md
# {Nazwa} — Decoration Spec

## Layout Pattern
{Opis layoutu: overlay cards, alternating rows, grid itp.}

## Wireframe
`src/components/wireframe/{name}-wireframe.tsx`

## Dekoracje

### Card
- Base: `rounded-xl overflow-hidden shadow-lg`
- Hover: `hover:shadow-2xl transition-all duration-500`

### Image
- ...
```

---

## Faza 3: Stylowanie wireframe'a

Kiedy user ma content + styl, bierze wireframe i mówi jak go ostylować.

### Input

1. Wireframe component (z `src/components/wireframe/`)
2. Decoration spec (z `src/agent/wireframe/specs/`) — opcjonalnie
3. `globals.css` — tokeny klienta (kolory, fonty)
4. Content data (teksty, zdjęcia)
5. Wskazówki stylu (np. "industrial", "warm", "minimalist")

### Output

```
src/components/sections/{name}-section.tsx  — stylowany komponent
src/content/{client}/{name}.ts              — content klienta
```

### Proces

1. Skopiuj wireframe jako bazę
2. Zamień `const w =` na `const s =`
3. Aplikuj dekoracje z spec (lub nowe wg wskazówek)
4. Zamień ImageIcon → `<img>` lub `next/image`
5. Zamień icon placeholders → Material Symbols (lub Lucide)
6. Zamień button placeholders → prawdziwe buttony
7. Dodaj `font-serif` na tytuły (jeśli theme tego wymaga)
8. Podmień content na dane klienta
9. Dodaj `"use client"` jeśli potrzeba (np. framer-motion)

---

## Referencja: oryginalne HTML (Stitch)

| Oryginał | Layout | Plik |
|----------|--------|------|
| Hero Fullscreen | Full-screen hero, badge + headline + CTA + stats + scroll | `src/agent/wireframe/originals/hero-fullscreen.tsx` |
| Overlay Cards | Tall cards z image bg, gradient, hover | `src/agent/wireframe/originals/overlay-cards.html` |
| Editorial Alternating | Alternating image+text rows z step badges | `src/agent/wireframe/originals/editorial-alternating.html` |
| Services Icon Grid | Centered header + 4-col icon cards, no images | `src/agent/wireframe/originals/services-icon-grid.html` |
| Services Cards | Image cards + features list, left-aligned header | `src/agent/wireframe/originals/services-cards.tsx` |
| Nav | Fixed navbar, glassmorphism pill, logo + links + CTA | `src/agent/wireframe/originals/nav.html` |
| Footer | 4-col multi-column: brand + contact + links + utility + copyright | `src/agent/wireframe/originals/footer.html` |
| Contact | 2-col: info/image left + form right | `src/agent/wireframe/originals/contact.html` |
| CTA Banner | Full-width centered: icon + headline + subtitle + 2 buttons | `src/agent/wireframe/originals/cta-banner.html` |
| FAQ | Accordion with details/summary, rotate icon | `src/agent/wireframe/originals/faq.html` |
| Pricing | 2-col: standard + popular tier with features checklist | `src/agent/wireframe/originals/pricing.html` |
| Process | 4 vertical step cards: badge + title + description | `src/agent/wireframe/originals/process.html` |
| Stats | 4-col grid: icon + big number + label, centered | `src/agent/wireframe/originals/stats.html` |
| Logos | 6-col grid with borders, logo placeholders | `src/agent/wireframe/originals/logos.html` |

Każdy oryginał ma komentarz na górze wskazujący powiązany wireframe i spec.

## Referencja: istniejące wireframe'y

| Wireframe | Layout | Plik |
|-----------|--------|------|
| HeroWireframe | Full-screen, badge + 3-line headline + CTA + stats + scroll indicator | `src/components/wireframe/hero-wireframe.tsx` |
| HeroSplitWireframe | 2-col grid: content left + image right with overlay badge | `src/components/wireframe/hero-split-wireframe.tsx` |
| PortfolioWireframe | Mosaic grid (featured 2x2 + normal 1x1 + wide 2x1) | `src/components/wireframe/portfolio-wireframe.tsx` |
| ServicesOverlayWireframe | Overlay cards flex-wrap 3+2, image bg + content overlay | `src/components/wireframe/services-overlay-wireframe.tsx` |
| ServicesEditorialWireframe | Alternating 50/50 image+text rows, step badges | `src/components/wireframe/services-editorial-wireframe.tsx` |
| ServicesIconGridWireframe | Centered header + 4-col icon cards, no images | `src/components/wireframe/services-icon-grid-wireframe.tsx` |
| ServicesCardsWireframe | Image cards + features list, flex-wrap dynamic grid + CTA card | `src/components/wireframe/services-cards-wireframe.tsx` |
| ReviewsWireframe | 3-col grid: stars + quote + author, featured label | `src/components/wireframe/reviews-wireframe.tsx` |
| FeaturesSplitWireframe | 2-col: content left (features checklist) + image right | `src/components/wireframe/features-split-wireframe.tsx` |
| NavWireframe | Fixed navbar: logo + centered links pill + CTA + mobile menu | `src/components/wireframe/nav-wireframe.tsx` |
| FooterWireframe | CTA row + 4-col grid (brand, contact, links) + copyright | `src/components/wireframe/footer-wireframe.tsx` |
| ContactWireframe | 2-col: info/image left + form right | `src/components/wireframe/contact-wireframe.tsx` |
| CtaBannerWireframe | Centered: icon + headline + subtitle + 2 buttons | `src/components/wireframe/cta-banner-wireframe.tsx` |
| FaqWireframe | Centered title + accordion items (all expanded) | `src/components/wireframe/faq-wireframe.tsx` |
| PricingWireframe | 2-col: standard + featured tier with features checklist | `src/components/wireframe/pricing-wireframe.tsx` |
| ProcessWireframe | Vertical step cards: badge + title + description | `src/components/wireframe/process-wireframe.tsx` |
| StatsWireframe | 4-col grid: icon + value + label, centered, dividers | `src/components/wireframe/stats-wireframe.tsx` |
| LogosWireframe | 6-col grid: logo placeholders in bordered cells | `src/components/wireframe/logos-wireframe.tsx` |

## Referencja: istniejące specs

| Spec | Layout | Plik |
|------|--------|------|
| Hero Fullscreen | Full-screen hero, rebar pattern, geometric decorations, stagger animations | `src/agent/wireframe/specs/hero-fullscreen.md` |
| Hero Split | 2-col split, gradient overlay on image, floating badge | `src/agent/wireframe/specs/hero-split.md` |
| Overlay Cards | Tall cards with image bg, gradient, hover effects | `src/agent/wireframe/specs/overlay-cards.md` |
| Editorial Alternating | Alternating image+text rows with decorative borders | `src/agent/wireframe/specs/editorial-alternating.md` |
| Services Icon Grid | Centered header + 4-col icon cards, dark theme, hover invert | `src/agent/wireframe/specs/services-icon-grid.md` |
| Services Cards | Image cards + features, font-serif, shadow-md, h2-accent | `src/agent/wireframe/specs/services-cards.md` |
| Reviews | 3-col testimonial grid, quote icon, scale featured | `src/agent/wireframe/specs/reviews.md` |
| Features Split | 2-col, gradient overlay on image, floating quote badge | `src/agent/wireframe/specs/features-split.md` |
| Nav | Glassmorphism pill, rounded-pill shape, backdrop-blur | `src/agent/wireframe/specs/nav.md` |
| Footer | Dark bg, CTA row, social links, contact info | `src/agent/wireframe/specs/footer.md` |
| Contact | Brand bg, form with shadow, grayscale image | `src/agent/wireframe/specs/contact.md` |
| CTA Banner | Dark bg, radial gradient decoration, serif font, rounded buttons | `src/agent/wireframe/specs/cta-banner.md` |
| FAQ | Bold title, details/summary accordion, rotate-45 icon | `src/agent/wireframe/specs/faq.md` |
| Pricing | 2-col light/dark, POPULAR badge, check icons, rounded-3xl | `src/agent/wireframe/specs/pricing.md` |
| Process | Semi-transparent cards, rounded-2xl, pill badges | `src/agent/wireframe/specs/process.md` |
| Stats | Dark bg, dot pattern, Material icons, accent colors | `src/agent/wireframe/specs/stats.md` |
| Logos | Bordered grid, opacity logos, dark:invert | `src/agent/wireframe/specs/logos.md` |
