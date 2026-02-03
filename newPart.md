# Website Factory Blueprint v1.0

## 🎯 CEL SYSTEMU

Automatyczna generacja demo stron dla firm budowlanych/remontowych w 30-45 minut zamiast 3-5 godzin.

**Input:** content.md + (opcjonalnie) zdjęcia klienta
**Output:** Kompletna, ostylowana strona Next.js gotowa do prezentacji

---

## 📋 MASTER CHECKLIST

### Faza 1: Content Analysis
- [ ] Przeanalizuj content.md
- [ ] Zidentyfikuj sekcje (hero, services, about, portfolio, process, faq, contact)
- [ ] Policz elementy w każdej sekcji (ile usług, ile realizacji, ile kroków procesu)
- [ ] Sprawdź czy klient dostarczył zdjęcia
- [ ] Określ braki (co trzeba wygenerować)

### Faza 2: Page Planning (PRZED stylowaniem!)
- [ ] Wybierz STYLE_PRESET (industrial/modern/minimalist/premium)
- [ ] Wypełnij PAGE_STYLE_PLAN (color sequence, density, decorations)
- [ ] Określ IMAGE_STYLE dla całej strony
- [ ] Zaplanuj typography usage

### Faza 3: Component Selection
- [ ] Dla każdej sekcji wybierz wariant komponentu (według COMPONENT_SELECTION_RULES)
- [ ] Zweryfikuj że density sequence się zgadza
- [ ] Zweryfikuj że color rhythm jest poprawny

### Faza 4: Asset Generation
- [ ] Wygeneruj/przetwórz zdjęcia (według IMAGE_GENERATION_SYSTEM)
- [ ] Wygeneruj ikony jeśli potrzebne (według ICON_GENERATION_RULES)
- [ ] Zweryfikuj spójność wizualną assets

### Faza 5: Assembly & Styling
- [ ] Osadź content w komponentach
- [ ] Zastosuj style z wybranego STYLE_PRESET
- [ ] Dodaj dekoracje według DECORATION_BUDGET
- [ ] Final review całej strony

---

## 🎨 STYLE PRESETS (Sprawdzone kombinacje)

### Preset: INDUSTRIAL
```
COLORS:
  --background: #0a0a0a (near black)
  --foreground: #fafafa (off white)
  --card: #171717 (dark gray)
  --primary: #f97316 (orange) | #eab308 (yellow) | #ef4444 (red)
  --muted: #a3a3a3
  --border: #262626

FONTS:
  --font-display: "Bebas Neue", "Oswald", "Anton"
  --font-body: "Work Sans", "Inter", "DM Sans"
  --font-mono: "JetBrains Mono", "Fira Code"

CHARACTERISTICS:
  - Uppercase headings, tracking-widest
  - Sharp corners (rounded-none lub rounded-sm)
  - Border accents, corner decorations
  - Rebar/grid patterns
  - 3D button shadows
  - High contrast
```

### Preset: MODERN
```
COLORS:
  --background: #ffffff
  --foreground: #171717
  --card: #f5f5f5
  --primary: #3b82f6 (blue) | #8b5cf6 (purple) | #06b6d4 (cyan)
  --muted: #737373
  --border: #e5e5e5

FONTS:
  --font-display: "Plus Jakarta Sans", "Outfit", "Sora"
  --font-body: "Inter", "DM Sans"
  --font-mono: "IBM Plex Mono"

CHARACTERISTICS:
  - Mixed case, comfortable tracking
  - Generous rounded corners (rounded-xl, rounded-2xl)
  - Subtle shadows, blur effects
  - Gradient backgrounds
  - Smooth hover transitions
  - Light/airy feel
```

### Preset: MINIMALIST
```
COLORS:
  --background: #fafafa
  --foreground: #171717
  --card: #ffffff
  --primary: #171717 (black) | #525252 (gray)
  --muted: #a3a3a3
  --border: #e5e5e5

FONTS:
  --font-display: "Inter", "Helvetica Neue"
  --font-body: "Inter", "System UI"
  --font-mono: "SF Mono"

CHARACTERISTICS:
  - Minimal decorations
  - Lots of whitespace
  - Thin borders or no borders
  - Subtle hover states
  - Typography-focused
  - Black & white + 1 accent max
```

### Preset: PREMIUM
```
COLORS:
  --background: #0c0c0c
  --foreground: #f5f5f5
  --card: #1a1a1a
  --primary: #d4af37 (gold) | #c9a962 (brass) | #b8860b (dark gold)
  --muted: #8a8a8a
  --border: #2a2a2a

FONTS:
  --font-display: "Playfair Display", "Cormorant Garamond"
  --font-body: "Lora", "Source Serif Pro", "Libre Baskerville"
  --font-mono: "Courier Prime"

CHARACTERISTICS:
  - Serif headings
  - Elegant spacing
  - Gold/brass accents
  - Subtle gradients
  - Refined hover effects
  - Luxury feel
```

---

## 🔀 COMPONENT SELECTION RULES

### HERO Section
```
Q1: Czy masz hero image/video od klienta?
├── TAK, dobra jakość → HeroFullBleed (image as background)
├── TAK, średnia jakość → HeroSplit (50/50 layout)
└── NIE → HeroPattern (gradient/pattern + floating elements)

Q2: Ile CTA buttons?
├── 1 → Centered layout
└── 2 → Primary + Ghost/Outline secondary

Q3: Czy są social proof elements (lat doświadczenia, realizacji)?
├── TAK → Dodaj stats bar w HERO lub tuż pod
└── NIE → Pomiń lub użyj badge "Zaufaj ekspertom"
```

### SERVICES Section
```
Q1: Ile usług?
├── 2-3 → Grid 3 columns, larger cards
├── 4-6 → Grid 3 columns, compact cards
└── 7+ → Accordion lub Tabs

Q2: Czy masz zdjęcia dla każdej usługi?
├── TAK → ImageCards (photo + overlay text)
├── CZĘŚCIOWO → Mixed (some with photos, some with icons)
└── NIE → IconCards (icon + text)

Q3: Ile tekstu per usługa?
├── 1-2 zdania → Card z widocznym tekstem
├── 3-5 zdań → Card z truncated + "więcej"
└── Paragraf+ → Accordion/expandable

WARIANTY:
- ServicesIconGrid: ikony, 3-4 col, compact
- ServicesImageCards: zdjęcia nad tekstem, 2-3 col
- ServicesImageOverlay: zdjęcia jako background z overlay
- ServicesAccordion: expandable, dla 6+ usług
- ServicesTabs: tabbed interface, dla różnorodnych usług
```

### ABOUT Section
```
Q1: Czy masz zdjęcie właściciela/zespołu?
├── TAK → AboutSplit (duże zdjęcie + tekst)
└── NIE → AboutStats (tekst + liczby/ikony)

Q2: Czy jest timeline/historia firmy?
├── TAK → AboutTimeline component
└── NIE → Standard About

Q3: Czy są konkretne liczby (lat, realizacji, m2)?
├── TAK → Prominent stats display
└── NIE → Focus on text narrative

WARIANTY:
- AboutSplit: 50/50 image + text
- AboutCentered: centered text, stats below
- AboutTimeline: vertical timeline z milestones
- AboutTeam: grid z team members (jeśli >1 osoba)
```

### PORTFOLIO Section
```
Q1: Ile realizacji do pokazania?
├── 1-4 → Featured layout (duże zdjęcia)
├── 5-8 → Grid masonry
└── 9+ → Grid + "Zobacz więcej" / filtering

Q2: Czy są opisy/case studies?
├── TAK → Cards z overlay info
└── NIE → Clean gallery grid

Q3: Czy realizacje mają kategorie?
├── TAK → Dodaj filtering tabs
└── NIE → Simple grid

WARIANTY:
- PortfolioFeatured: 1-2 duże + 2-3 mniejsze
- PortfolioMasonry: Pinterest-style grid
- PortfolioGrid: uniform grid
- PortfolioSlider: carousel (mobile-friendly)
```

### PROCESS Section
```
Q1: Ile kroków?
├── 3-4 → Horizontal timeline
├── 5-6 → Vertical timeline lub numbered cards
└── 7+ → Accordion lub grouped steps

Q2: Czy kroki mają substeps?
├── TAK → Expandable cards
└── NIE → Simple numbered list

WARIANTY:
- ProcessTimeline: horizontal z connecting line
- ProcessVertical: vertical z numbered badges
- ProcessCards: grid cards z numerami
- ProcessAccordion: expandable dla complex processes
```

### FAQ Section
```
Standard: Accordion layout
Variations based on count:
├── 3-5 pytań → Single column, full width
├── 6-10 pytań → Single column z categories
└── 10+ → Two columns lub tabbed categories

WARIANTY:
- FAQAccordion: standard expandable
- FAQTwoColumn: 2 col grid dla wielu pytań
- FAQCategorized: grouped by topic
```

### CONTACT Section
```
Q1: Czy masz adres fizyczny do pokazania na mapie?
├── TAK → ContactWithMap (2 col: info + map)
└── NIE → ContactSimple (centered lub 2 col info only)

Q2: Czy jest formularz kontaktowy?
├── TAK → Include form component
└── NIE → CTA do telefonu/email

WARIANTY:
- ContactSplit: info left, map right
- ContactCentered: centered info, form below
- ContactCards: multiple location cards (jeśli >1 biuro)
```

---

## 📊 PAGE RHYTHM RULES

### Color Rhythm
```
ZASADA 1: Max 2 sekcje tego samego tła pod rząd
ZASADA 2: Po dark MUSI być light lub accent
ZASADA 3: Accent bg (primary/10-20) max 1x na stronę
ZASADA 4: Hero i Footer zazwyczaj dark (bookends)

WZÓR DLA 8 SEKCJI:
Section 1 (Hero):      DARK   ████████
Section 2 (Services):  LIGHT  ░░░░░░░░
Section 3 (About):     CARD   ▒▒▒▒▒▒▒▒
Section 4 (Portfolio): DARK   ████████
Section 5 (Process):   LIGHT  ░░░░░░░░
Section 6 (ForWhom):   ACCENT ▓▓▓▓▓▓▓▓
Section 7 (FAQ):       CARD   ▒▒▒▒▒▒▒▒
Section 8 (Contact):   DARK   ████████

MAPPING:
- DARK = bg-black lub bg-background (dark theme)
- LIGHT = bg-background (light) lub bg-white
- CARD = bg-card lub bg-muted/30
- ACCENT = bg-primary/10 lub bg-primary/5
```

### Visual Density Rhythm
```
ZASADA 1: Po "heavy" sekcji → "light" sekcja
ZASADA 2: Max 2 image-heavy pod rząd
ZASADA 3: Min 1 "breathing room" sekcja (dużo whitespace)
ZASADA 4: FAQ/Contact zawsze "light" density

DENSITY SCALE:
●●●●● HEAVY   = full bg image, grid zdjęć, video
●●●○○ MEDIUM  = 1-2 zdjęcia + tekst, split layout
●●○○○ LIGHT   = ikony, karty bez zdjęć
●○○○○ MINIMAL = pure text, accordion, lots of space

WZÓR:
Hero         ●●●●○  heavy (bg image)
Services     ●●○○○  light (ikony)
About        ●●●○○  medium (1 zdjęcie)
Portfolio    ●●●●●  heavy (grid zdjęć)
Process      ●●○○○  light (ikony/numery)
ForWhom      ●●○○○  light (tekst)
FAQ          ●○○○○  minimal (accordion)
Contact      ●●●○○  medium (mapa + form)
```

### Typography Rules
```
FONT-DISPLAY (Bebas, Playfair, etc.):
- TYLKO: h1, h2, hero headline
- NIGDY: body text, buttons, labels

FONT-SERIF:
- MAX 2x na stronę
- Użyj: cytat, about section headline, testimonial
- Nie mieszaj z display w tej samej sekcji

FONT-MONO:
- Użyj: taglines ("// Budujemy przyszłość")
- Użyj: badges, labels, stats numbers
- Użyj: small caps section markers

FONT-SANS (default body):
- Wszystko inne: paragraphs, buttons, nav, cards

HIERARCHY WITHIN SECTION:
1. Tagline: font-mono, text-sm, uppercase, tracking-widest, text-primary
2. Headline: font-display, text-4xl-6xl, font-bold
3. Subheadline: font-sans, text-xl, text-muted-foreground
4. Body: font-sans, text-base, text-muted-foreground
5. Button: font-sans, text-sm-base, font-medium, uppercase (optional)
```

### Decoration Budget
```
ZASADA: Max 1 "fancy" decoration type per section
ZASADA: Corner accents XOR background pattern, nie oba
ZASADA: Geometric shapes max 2 sekcje na stronie
ZASADA: Animated elements max 3 na stronę

ALLOWED PER SECTION:
Option A: Pattern bg + simple cards
Option B: Solid bg + corner accents on hover
Option C: Image bg + gradient overlay only
Option D: Solid bg + 1 animated element (line, pulse dot)

GLOBAL BUDGET (cała strona):
- Corner accents: max 2 sekcje
- Background patterns: max 2 sekcje (incl. hero)
- Geometric shapes: max 2 sekcje
- Animated lines/dots: max 3 sekcje
- Gradient overlays: unlimited (na zdjęciach)
```

---

## 🖼️ IMAGE GENERATION SYSTEM

### Global Preprompt (dla wszystkich zdjęć na stronie)
```
TEMPLATE:
"Professional {INDUSTRY} photography, Polish/European context.
{LIGHTING} lighting, {COLOR_TEMP} tones.
{LENS} lens look, shallow depth of field.
Clean composition, {PEOPLE_RULE}.
{PRIMARY_COLOR} accent elements subtly visible in scene where natural.
Photorealistic, editorial quality, NOT stock photography look.
Avoid: watermarks, text, logos, artificial poses, oversaturation."

VARIABLES TO SET ONCE:
- INDUSTRY: "construction and renovation" / "architecture" / "interior design"
- LIGHTING: "natural" / "golden hour" / "overcast soft" / "bright midday"
- COLOR_TEMP: "warm" / "neutral" / "cool"
- LENS: "85mm portrait" / "35mm environmental" / "24mm wide architectural"
- PEOPLE_RULE: "no people" / "workers in background, not facing camera" / "hands only"
- PRIMARY_COLOR: "orange" / "blue" / "yellow" (z twojego STYLE_PRESET)
```

### Scene Types (per section)
```
HERO:
"Wide establishing shot, dramatic angle, {building_type} exterior/interior.
Scale emphasis - show the grandeur of completed work.
Sky visible, golden hour or blue hour lighting."

SERVICES (per service):
"Detail shot showing {service_name} work in progress.
Craftsman hands visible, professional tools.
Focus on quality and precision of work."

PORTFOLIO:
"Completed project showcase, {interior/exterior}.
Staged but natural, magazine-quality composition.
Before/after potential - show transformation."

ABOUT:
"Professional workshop/office environment.
Organized tools, clean workspace.
Implies expertise and professionalism."

PROCESS:
"Documentary style, authentic work moment.
Mid-action capture, natural movement.
Shows real process, not posed."
```

### Image Consistency Rules
```
ZASADA 1: Wszystkie zdjęcia tego samego "time of day"
- Golden hour (warm, long shadows)
- Overcast (soft, even light)
- Bright midday (crisp, high contrast)

ZASADA 2: Ta sama paleta kolorów w scenach
- Jeśli primary=#F97316, szukaj/generuj zdjęcia z orange elementami
- Może być: maszyna, kask, narzędzia, detal budynku

ZASADA 3: Ten sam "lens look"
- 85mm: intimate, compressed background, portrait-style
- 35mm: environmental, context visible
- 24mm: wide, architectural, dramatic

ZASADA 4: Consistent editing style
- Filters: wszystkie ten sam LUT/preset
- Contrast: consistent across all
- Saturation: consistent (usually slightly desaturated for pro look)
```

### Image Processing Options
```
OPCJA A: Klient dostarcza zdjęcia
1. Color grade do palette strony (Lightroom preset / CSS filter)
2. Crop do consistent aspect ratios
3. Add gradient overlay matching dark sections

OPCJA B: AI generation (Midjourney, DALL-E, Ideogram)
1. Use GLOBAL_PREPROMPT + SCENE_TYPE
2. Generate 2-3 warianty, wybierz najlepszy
3. Process jak w OPCJA A

OPCJA C: Hybrid (AI enhance real photos)
1. Weź zdjęcie klienta
2. AI upscale (Topaz, Magnific)
3. AI extend (outpainting dla lepszych proporcji)
4. Color grade

OPCJA D: Stock + Processing
1. Wybierz z Unsplash/Pexels (construction/architecture)
2. Heavy color grading do palette
3. Add overlays, może AI-enhanced details
```

---

## 🔷 ICON GENERATION RULES

### When to Generate Icons
```
- Brak zdjęć dla services/features
- Process steps visualization
- Feature lists
- USP indicators
- Contact info (phone, email, location)
```

### Icon Style Options
```
STYLE A: Line Icons (minimalist, modern)
- Stroke only, consistent weight
- Single color (primary lub foreground)
- Tools: Lucide, Phosphor, Heroicons

STYLE B: Filled Icons (bold, industrial)
- Solid fill, no stroke
- Primary color lub high contrast
- Tools: Material Symbols (filled variant)

STYLE C: Duotone (premium, sophisticated)
- Two-color system (primary + muted)
- Layered depth effect
- Tools: Phosphor Duotone, custom SVG

STYLE D: 3D Icons (modern, tech-forward)
- AI-generated 3D renders
- Consistent lighting angle (top-left zazwyczaj)
- Same material/texture across set
- Tools: Midjourney, Spline, custom 3D

STYLE E: Illustrated (friendly, approachable)
- Hand-drawn feel
- Consistent stroke character
- May include small color accents
- Tools: Custom illustration lub AI + vectorize
```

### Icon Consistency Rules
```
ZASADA 1: Jeden styl ikon na całą stronę
- Nie mieszaj line z 3D
- Nie mieszaj filled z duotone

ZASADA 2: Consistent sizing
- Small: 20-24px (inline, lists)
- Medium: 32-40px (cards, features)
- Large: 48-64px (hero features, process steps)

ZASADA 3: Consistent container (jeśli używasz)
- Wszystkie w kółku LUB wszystkie w kwadracie
- Ten sam bg treatment (solid, gradient, outline)

ZASADA 4: Color mapping
- Primary action icons: text-primary
- Neutral info icons: text-muted-foreground
- On dark bg: text-white lub text-primary

3D ICON GENERATION PROMPT:
"3D icon representing {CONCEPT}, isometric view.
{MATERIAL} material, soft shadows.
{PRIMARY_COLOR} color accent.
Clean background, centered composition.
Minimal, professional, corporate style.
Consistent with other icons in set."

MATERIAL options: "glossy plastic" / "matte clay" / "glass" / "metal"
```

---

## 📝 PAGE_STYLE_PLAN Template

**Wypełnij PRZED rozpoczęciem stylowania:**

```yaml
# ============================================
# PAGE STYLE PLAN - [NAZWA FIRMY]
# ============================================

# 1. GLOBAL DECISIONS
style_preset: "industrial" # industrial | modern | minimalist | premium
primary_color: "#f97316"   # HEX z preset lub custom
secondary_accent: null     # opcjonalnie drugi akcent

# 2. COLOR SEQUENCE
sections:
  - name: hero
    bg_type: dark          # dark | light | card | accent
    bg_value: "bg-black"
  - name: services
    bg_type: light
    bg_value: "bg-background"
  - name: about
    bg_type: card
    bg_value: "bg-card"
  - name: portfolio
    bg_type: dark
    bg_value: "bg-black"
  - name: process
    bg_type: light
    bg_value: "bg-background"
  - name: for_whom
    bg_type: accent
    bg_value: "bg-primary/10"
  - name: faq
    bg_type: card
    bg_value: "bg-card"
  - name: contact
    bg_type: dark
    bg_value: "bg-black"

# 3. VISUAL DENSITY
density_sequence:
  hero: heavy        # full bg image
  services: light    # icons only
  about: medium      # 1 image + text
  portfolio: heavy   # image grid
  process: light     # icons/numbers
  for_whom: light    # text focus
  faq: minimal       # accordion
  contact: medium    # map + form

# 4. IMAGE STYLE
images:
  source: "ai_generated"  # client | ai_generated | stock | hybrid
  time_of_day: "golden_hour"
  lens_look: "85mm"
  color_temp: "warm"
  people: "no_people"
  primary_in_scene: true

# 5. ICON STYLE
icons:
  style: "filled"         # line | filled | duotone | 3d | illustrated
  container: "rounded_square"  # none | circle | square | rounded_square
  container_bg: "bg-primary/20"
  icon_color: "text-primary"

# 6. TYPOGRAPHY USAGE
typography:
  display_font: "Bebas Neue"
  display_usage:
    - "hero_h1"
    - "section_h2"
  serif_font: null        # null jeśli nie używamy
  serif_usage: []
  mono_usage:
    - "taglines"
    - "badges"
    - "stat_numbers"

# 7. DECORATION BUDGET
decorations:
  corner_accents:
    - "portfolio_cards"
  patterns:
    - section: "hero"
      pattern: "rebar"
  geometric_shapes:
    - "hero"
  animated_lines:
    - "process_cards"
    - "services_cards"

# 8. COMPONENT SELECTIONS
components:
  hero: "HeroFullBleed"
  services: "ServicesIconGrid"
  about: "AboutSplit"
  portfolio: "PortfolioMasonry"
  process: "ProcessTimeline"
  for_whom: "ForWhomCards"
  faq: "FAQAccordion"
  contact: "ContactSplit"
```

---

## 🚀 CLAUDE CODE WORKFLOW

### Step 1: Analyze Content
```
INPUT: content.md
TASK: Parse and categorize all content
OUTPUT: Structured data per section

PROMPT FOR CLAUDE CODE:
"Przeanalizuj content.md i zwróć JSON z:
- Listą sekcji wykrytych w content
- Dla każdej sekcji: ilość elementów, czy są liczby/stats, długość tekstów
- Identyfikacja brakujących sekcji (standardowo: hero, services, about, portfolio, process, faq, contact)
- Lista zdjęć dostarczonych przez klienta (jeśli są)"
```

### Step 2: Create Page Plan
```
INPUT: Content analysis + user preference (jeśli podane)
TASK: Wypełnij PAGE_STYLE_PLAN
OUTPUT: Completed YAML plan

PROMPT FOR CLAUDE CODE:
"Na podstawie analizy contentu i preferencji [industrial/modern/etc]:
1. Wybierz STYLE_PRESET
2. Określ color sequence (przestrzegaj rhythm rules)
3. Określ density sequence
4. Wybierz komponenty dla każdej sekcji (użyj COMPONENT_SELECTION_RULES)
5. Wypełnij pozostałe sekcje PAGE_STYLE_PLAN
6. Zwróć completed plan jako YAML"
```

### Step 3: Generate/Gather Assets
```
INPUT: PAGE_STYLE_PLAN + content
TASK: Prepare all images and icons
OUTPUT: Asset files in /public

PROMPT FOR CLAUDE CODE:
"Na podstawie PAGE_STYLE_PLAN:
1. Dla każdej sekcji wymagającej zdjęć:
   - Jeśli klient dostarczył → zaplanuj processing (crop, color grade)
   - Jeśli brak → wygeneruj prompt dla AI image gen (użyj IMAGE_GENERATION_SYSTEM)
2. Dla sekcji z ikonami:
   - Określ które ikony potrzebne
   - Jeśli standard (Lucide) → podaj nazwy
   - Jeśli custom/3D → wygeneruj prompty
3. Zwróć listę assets do przygotowania"
```

### Step 4: Assemble Page
```
INPUT: PAGE_STYLE_PLAN + content + assets
TASK: Build page component by component
OUTPUT: Working Next.js page

PROMPT FOR CLAUDE CODE:
"Na podstawie PAGE_STYLE_PLAN, zbuduj stronę:
1. Setup: tailwind config z kolorami z STYLE_PRESET
2. Dla każdej sekcji w kolejności:
   - Użyj wybranego komponentu
   - Osadź content z content.md
   - Zastosuj style zgodnie z planem
   - Dodaj dekoracje z decoration budget
3. Zweryfikuj:
   - Color rhythm ✓
   - Density rhythm ✓
   - Typography hierarchy ✓
   - Decoration limits ✓"
```

### Step 5: Final Review
```
CHECKLIST:
□ Wszystkie sekcje renderują się poprawnie
□ Responsive na mobile/tablet/desktop
□ Zdjęcia mają consistent style
□ Hover effects działają
□ Animacje są smooth (nie za dużo)
□ Typography hierarchy jest czytelna
□ Color contrast jest accessibility-friendly
□ Loading performance OK (obrazki optimized)
```

---

## 📚 APPENDIX A: Color Palette Presets

### Construction/Industrial Palettes
```
PALETTE: "Safety Orange"
--primary: #f97316 (orange-500)
--background: #0a0a0a
--card: #171717
--foreground: #fafafa
VIBE: Bold, construction site, warning signs

PALETTE: "Warning Yellow"
--primary: #eab308 (yellow-500)
--background: #0a0a0a
--card: #1c1917
--foreground: #fafaf9
VIBE: Machinery, caution tape, industrial

PALETTE: "Steel Blue"
--primary: #3b82f6 (blue-500)
--background: #0f172a
--card: #1e293b
--foreground: #f8fafc
VIBE: Engineering, blueprints, precision

PALETTE: "Concrete Gray"
--primary: #78716c (stone-500)
--background: #1c1917
--card: #292524
--foreground: #fafaf9
--accent: #f97316 (orange for CTAs)
VIBE: Raw materials, brutalist, minimal
```

### Modern/Light Palettes
```
PALETTE: "Clean Blue"
--primary: #2563eb (blue-600)
--background: #ffffff
--card: #f8fafc
--foreground: #0f172a
VIBE: Professional, trustworthy, tech

PALETTE: "Fresh Green"
--primary: #16a34a (green-600)
--background: #ffffff
--card: #f0fdf4
--foreground: #14532d
VIBE: Eco-friendly, sustainable, growth

PALETTE: "Warm Neutral"
--primary: #ea580c (orange-600)
--background: #fffbeb
--card: #fef3c7
--foreground: #451a03
VIBE: Friendly, approachable, warm
```

### Premium Palettes
```
PALETTE: "Gold Luxury"
--primary: #d4af37 (gold)
--background: #0c0c0c
--card: #1a1a1a
--foreground: #f5f5f5
VIBE: High-end, exclusive, expensive

PALETTE: "Emerald Elite"
--primary: #047857 (emerald-700)
--background: #0f0f0f
--card: #1a1a1a
--foreground: #ecfdf5
VIBE: Prestigious, established, wealth

PALETTE: "Navy Classic"
--primary: #1e3a5f (navy)
--background: #ffffff
--card: #f8fafc
--foreground: #0f172a
--accent: #d4af37 (gold details)
VIBE: Traditional, trustworthy, premium
```

---

## 📚 APPENDIX B: Font Pairings

### Industrial/Bold
```
PAIRING 1:
Display: Bebas Neue
Body: Work Sans
Mono: JetBrains Mono
USE: Construction, manufacturing, bold statements

PAIRING 2:
Display: Oswald
Body: Source Sans Pro
Mono: Fira Code
USE: Technical, engineering, detailed

PAIRING 3:
Display: Anton
Body: Inter
Mono: IBM Plex Mono
USE: Maximum impact, headlines matter most
```

### Modern/Clean
```
PAIRING 1:
Display: Plus Jakarta Sans (bold)
Body: Plus Jakarta Sans (regular)
Mono: Plus Jakarta Sans (mono)
USE: Consistent, modern, SaaS-like

PAIRING 2:
Display: Outfit
Body: Inter
Mono: Roboto Mono
USE: Friendly, approachable, tech

PAIRING 3:
Display: Sora
Body: DM Sans
Mono: Space Mono
USE: Geometric, contemporary, startup
```

### Premium/Elegant
```
PAIRING 1:
Display: Playfair Display
Body: Lora
Mono: Courier Prime
USE: Luxury, editorial, sophisticated

PAIRING 2:
Display: Cormorant Garamond
Body: Libre Baskerville
Mono: Anonymous Pro
USE: Classic, timeless, high-end

PAIRING 3:
Display: Fraunces
Body: Source Serif Pro
Mono: IBM Plex Mono
USE: Contemporary elegance, craft
```

---

## 📚 APPENDIX C: Quick Reference Cards

### Color Rhythm Cheatsheet
```
✅ GOOD:
dark → light → card → dark → light → accent → card → dark

❌ BAD:
dark → dark → dark → light (3 darks in row)
light → light → light → light (monotonous)
accent → accent (2 accents)
```

### Density Rhythm Cheatsheet
```
✅ GOOD:
heavy → light → medium → heavy → light → light → minimal → medium

❌ BAD:
heavy → heavy → heavy → light (3 heavy in row)
minimal → minimal → minimal (too empty)
```

### Decoration Limits Cheatsheet
```
PER SECTION: Pick ONE
□ Pattern background
□ Corner accents (on cards)
□ Geometric shapes
□ Animated element

WHOLE PAGE MAX:
□ 2x pattern backgrounds
□ 2x corner accents usage
□ 2x geometric shapes
□ 3x animated elements
```

---

## 🔄 VERSION HISTORY

- v1.0 (2025-01-28): Initial blueprint
  - Style presets defined
  - Component selection rules
  - Page rhythm rules
  - Image/icon generation systems
  - Claude Code workflow

---

## 📌 TODO / FUTURE IMPROVEMENTS

- [ ] Dodać więcej STYLE_PRESETS (eco, tech, luxury-light)
- [ ] Rozszerzyć component library o warianty
- [ ] Stworzyć visual examples dla każdego preset
- [ ] Dodać A/B testing patterns
- [ ] Integration z Midjourney API dla auto image gen
- [ ] Template content.md dla różnych branż budowlanych
- [ ] Automated PageSpeed optimization checklist
