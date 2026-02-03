/**
 * Pricing Table — comparison table with feature rows and tier columns
 */

export interface PricingTableTier {
  name: string
  description?: string
  price: string
  priceSuffix?: string
  buttonText: string
  featured?: boolean
}

export interface PricingTableFeature {
  name: string
  availability: boolean[] // per tier: true=check, false=dash
}

export interface PricingTableSection {
  sectionTitle: string
  features: PricingTableFeature[]
}

export interface PricingTableContent {
  title: string
  subtitle?: string
  tiers: PricingTableTier[]
  featureSections: PricingTableSection[]
}
