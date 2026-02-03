/**
 * CTA Banner — full-width centered: icon + headline + subtitle + 2 buttons
 */

export interface CtaBannerContent {
  icon?: string
  title: string
  subtitle: string
  ctaPrimary: { text: string }
  ctaSecondary?: { text: string }
}
