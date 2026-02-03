/**
 * Hero Types (Hero — full-screen background)
 */

export interface HeroContent {
  badge?: string
  headline: string
  headlineAccent?: string
  subtitle: string
  ctaPrimary: { text: string }
  ctaSecondary?: { text: string }
  stats?: Array<{ value: string; label: string }>
  scrollText?: string
}
