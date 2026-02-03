# Lista sekcji

> **UWAGA:** Aktualizuj ta tabele po kazdym dodaniu/usunieciu wireframe'a lub styled komponentu.

## Sekcje (18)

| # | Sekcja | Layout | Wireframe | Styled | Spec | Oryginal |
|---|--------|--------|-----------|--------|------|----------|
| 1 | **Hero Full-screen** | Full-screen, badge + 3-line headline + 2 CTA + stats + scroll indicator. Background image za contentem. | `hero-wireframe.tsx` | — | `hero-fullscreen.md` | `hero-fullscreen.tsx` |
| 2 | **Hero Split** | 2-col grid: content left (badge, headline, subtitle, CTA, stats inline) + image right (z overlay badge). Contained max-w-1280. | `hero-split-wireframe.tsx` | — | `hero-split.md` | w spec |
| 3 | **Services Editorial** | Alternating 50/50 image+text rows (odd: img left, even: img right). Step badges z numerem. CTA na dole z border-top. | `services-editorial-wireframe.tsx` | `services-editorial-section.tsx` | `editorial-alternating.md` | `editorial-alternating.html` |
| 4 | **Services Overlay** | Flex-wrap tall cards (h-500), auto-center. 3/4/5 items + opcjonalna CTA card. Image bg + gradient overlay + content na dole. | `services-overlay-wireframe.tsx` | `services-overlay-section.tsx` | `overlay-cards.md` | `overlay-cards.html` |
| 5 | **Services Cards** | Flex-wrap image cards + features. Dynamic grid (2-col/3-col) + opcjonalna CTA card. Left-aligned header. | `services-cards-wireframe.tsx` | `services-cards-section.tsx` | `services-cards.md` | `services-cards.tsx` |
| 6 | **Portfolio** | Dual mode: Mosaic (CSS grid 4-col, featured/wide) lub Gallery (flex-wrap, all normal). 7 wariantow. Stats w headerze. | `portfolio-wireframe.tsx` | `portfolio-section.tsx` | — | — |
| 7 | **Services Icon Grid** | Flex-wrap icon cards + opcjonalna CTA card. Dynamic grid (3/4-col). Centered header. No images. 5 wariantow. | `services-icon-grid-wireframe.tsx` | — | `services-icon-grid.md` | `services-icon-grid.html` |
| 8 | **Reviews** | 3-col grid kart z opiniami. Rating (stars) + cytat + autor (avatar + name + label). Featured card. Bottom link. | `reviews-wireframe.tsx` | — | `reviews.md` | w spec |
| 9 | **Features Split** | 2-col flex: content left (tagline, title, desc, features 2-col checklist, CTA) + image right. Dekoracje na obrazku w spec. | `features-split-wireframe.tsx` | — | `features-split.md` | w spec |
| 10 | **Nav** | Fixed navbar: logo left + centered pill with links + CTA. Mobile: hamburger. | `nav-wireframe.tsx` | — | `nav.md` | `nav.html` |
| 11 | **Footer** | Multi-column: CTA row + 4-col grid (brand + contact + link columns) + copyright bar. | `footer-wireframe.tsx` | — | `footer.md` | `footer.html` |
| 12 | **Contact** | 2-col grid: info/image left (badge, title, desc, image) + form right (fields + submit). | `contact-wireframe.tsx` | — | `contact.md` | `contact.html` |
| 13 | **CTA Banner** | Full-width centered: icon + headline + subtitle + 2 CTA buttons. | `cta-banner-wireframe.tsx` | — | `cta-banner.md` | `cta-banner.html` |
| 14 | **FAQ** | Centered title + vertical accordion (details/summary with expand/collapse). All expanded in wireframe. | `faq-wireframe.tsx` | — | `faq.md` | `faq.html` |
| 15 | **Pricing** | 2-col grid: standard tier + featured tier. Features checklist. CTA button at bottom. | `pricing-wireframe.tsx` | — | `pricing.md` | `pricing.html` |
| 16 | **Process** | Vertical stack of step cards: badge + title + description. Optional header. | `process-wireframe.tsx` | — | `process.md` | `process.html` |
| 17 | **Stats** | 4-col grid (2-col mobile): icon + big number + label. Centered. Dividers between items. | `stats-wireframe.tsx` | — | `stats.md` | `stats.html` |
| 18 | **Logos** | 6-col grid (3-col mobile): logo placeholders in bordered cells. | `logos-wireframe.tsx` | — | `logos.md` | `logos.html` |

## Brakuje (TODO)

- Hero Full-screen: styled komponent
- Hero Split: styled komponent
- Portfolio: spec + oryginal
- Services Icon Grid: styled komponent
- Reviews: styled komponent
- Features Split: styled komponent
- Nav: styled komponent
- Footer: styled komponent
- Contact: styled komponent
- CTA Banner: styled komponent
- FAQ: styled komponent
- Pricing: styled komponent
- Process: styled komponent
- Stats: styled komponent
- Logos: styled komponent

## Legenda

- **Wireframe** = neutralny layout (bg-muted, border-dashed, placeholders) w `src/components/wireframe/`
- **Styled** = ostylowany komponent z dekoracjami w `src/components/sections/`
- **Spec** = opis dekoracji (co mozna zmieniac, jakie treatments) w `src/agent/wireframe/specs/`
- **Oryginal** = oryginalny HTML/TSX ze Stitch w `src/agent/wireframe/originals/`
