/**
 * Service Cards Types (Usługi — wariant karty z obrazem + features)
 */

import type { GridCtaCard } from './common'

export interface ServiceCardItem {
  title: string
  description: string
  features: string[]
  image?: string
}

export interface ServiceCardsContent {
  title: string
  subtitle?: string
  services: ServiceCardItem[]
  ctaCard?: GridCtaCard
}
