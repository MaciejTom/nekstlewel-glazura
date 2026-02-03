/**
 * Pricing — tier cards with features checklist and CTA
 */

export interface PricingTier {
  label: string
  price: string
  priceSuffix: string
  description: string
  features: string[]
  buttonText: string
  featured?: boolean
}

export interface PricingContent {
  title: string
  subtitle?: string
  tiers: PricingTier[]
}
