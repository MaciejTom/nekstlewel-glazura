/**
 * Logos Header — header section + icon/name grid
 */

export interface LogosHeaderContent {
  badge?: string
  title: string
  description?: string
  logos: Array<{ icon?: string; name: string }>
}
