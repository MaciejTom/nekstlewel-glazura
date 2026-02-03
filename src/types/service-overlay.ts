/**
 * Service Overlay Types (Usługi — wariant overlay cards z tłem zdjęciowym)
 */

import type { GridCtaCard } from './common'

export interface ServiceOverlayItem {
  icon: string
  title: string
  description: string
  features: string[]
  image: string
  imageAlt: string
}

export interface ServiceOverlayContent {
  title: string
  titleBreak?: string
  subtitle: string
  services: ServiceOverlayItem[]
  ctaCard?: GridCtaCard
  cta?: {
    text: string
    buttonText: string
    buttonIcon?: string
  }
}
