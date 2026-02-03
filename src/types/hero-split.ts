/**
 * Hero Split Types (Hero — 2-column split: content left, image right)
 */

export interface HeroSplitContent {
  badge?: string
  badgeIcon?: string
  headline: string
  headlineAccent?: string
  subtitle: string
  ctaPrimary: { text: string; icon?: string }
  ctaSecondary?: { text: string }
  stats?: Array<{ icon?: string; value: string; label: string }>
  imageBadge?: { icon?: string; value: string; label: string }
}
