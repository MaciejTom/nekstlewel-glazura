# TOM-ART Tomasz Duda — Projekt Content

## Informacje o projekcie

| Pole | Wartosc |
|------|---------|
| **Klient** | TOM-ART Tomasz Duda |
| **Branza** | Wykonczenia i remonty |
| **Lokalizacja** | Krosno Odrzanskie |
| **Telefon** | 514 432 142 |
| **Pipeline** | Content Agent v2.0 |
| **Data generowania** | 2026-01-26 |
| **Status** | APPROVED (RALPH QA 93%) |

---

## Pliki wyjsciowe

| Plik | Opis |
|------|------|
| `1-analysis.json` | Analiza firmy: USP, ton, zdjecia, rekomendacje |
| `2-brand-voice.md` | Glos marki: slownik, ton, style pisania |
| `3-design-tokens.json` | Kolory, fonty, cienie, komponenty (z logo) |
| `4-content.md` | Gotowy content SEO — 6 sekcji, ~1050 slow |
| `5-qa-report.md` | Raport RALPH QA — ocena per sekcja |
| `VERSIONS.md` | Log ewolucji projektu |
| `README.md` | Ten plik |

---

## Kluczowe decyzje

### Direction: WARM
Firma jednoosobowa, male miasto, B2C, artystyczna nazwa — cieplo i osobistosc.

### USP #1: Orly Branzy Budowlanej 2024
Unikalny wyroznik w okolicy. Uzywany jako HOOK w sekcji O firmie.

### Ton: przyjazny_fachowiec
"Ja" nie "my". Bezposredni, konkretny, z wyczuciem estetyki.

### Anti-wzorzec: NIE "Jestem Tomasz Duda"
Sekcja O firmie otwiera od nagrody Orly (HOOK 3), nie od przedstawienia sie.

---

## Dane wejsciowe

| Zrodlo | Status |
|--------|--------|
| `input/raw-data.md` | Uzyte |
| `input/photos/photo-1.jpg` | Uzyte (dom z kolumnami) |
| `input/photos/photo-2.jpg` | Uzyte (logo TOM-ART) |
| `input/photos/photo-3.jpg` | Uzyte ostroznie (potencjalny rendering) |
| `input/photos/photo-4.jpg` | Uzyte (wnetrze ze sztukateriami) |
| `input/photos/photo-5.jpg` | WYKLUCZONE — certyfikaty INNEJ firmy (TELSTER) |
| `input/photos/photo-6.jpg` | WYKLUCZONE — reklama INNEJ firmy (FIXMAN) |
| `input/photos/photo-7.jpg` | Uzyte (nowoczesny dom) |
| `input/photos/photo-8.jpg` | Uzyte (elewacja po remoncie) |

---

## Ostrzezenia

1. **Brak opinii tekstowych** — tylko rating 8.9/10, bez tresci cytatow
2. **Rozbieznosc logo** — logo mowi "Tomasz Wszolek", CEIDG mowi "Tomasz Duda"
3. **2 zdjecia nie naleza do TOM-ART** — photo-5 (TELSTER), photo-6 (FIXMAN)
4. **Mloda firma** (od 10.2023) — nie podkreslac stazu
5. **Brak emaila kontaktowego** w danych

---

## Nastepne kroki

1. Wyslac `4-content.md` do klienta do akceptacji
2. Wyjasnic rozbieznosc logo (Wszolek vs Duda)
3. Pozyskac treści opinii tekstowych
4. Dodac zdjecie wlasciciela
5. Implementacja frontend na podstawie `3-design-tokens.json`
