/**
 * Service Icon Grid Types (Uslugi — wariant icon grid z centered header)
 */

import type { GridCtaCard } from './common'

export interface ServiceIconGridItem {
  icon: string
  title: string
  description: string
}

export interface ServiceIconGridContent {
  tagline: string
  title: string
  subtitle: string
  services: ServiceIconGridItem[]
  ctaCard?: GridCtaCard
}
