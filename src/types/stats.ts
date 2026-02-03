/**
 * Stats — grid of number/value cards with icon + label
 */

export interface StatItem {
  icon?: string
  value: string
  label: string
  description?: string
}

export interface StatsContent {
  badge?: string
  title?: string
  stats: StatItem[]
}
