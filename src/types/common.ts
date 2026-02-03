/**
 * Common Types - Wspólne interfejsy
 */

// ============================================
// SEKCJA - wspólne elementy
// ============================================

export interface SectionHeader {
  /** Tagline sekcji, np. "/ USŁUGI" */
  tagline?: string

  /** Główny tytuł */
  title: string

  /** Część tytułu z akcentem (opcjonalna) */
  titleAccent?: string

  /** Opis pod tytułem */
  subtitle?: string
}

// ============================================
// GRID - warianty wspólne dla sekcji gridowych
// ============================================

/**
 * Opcjonalna karta CTA wewnątrz grida.
 * Wariant wspólny dla: Overlay, Cards, Icon Grid.
 * Dekoracja: glowing secondary, gradient, solid primary, subtle.
 */
export interface GridCtaCard {
  title: string
  description?: string
  buttonText: string
}
