/**
 * Contact Info Cards — grid of icon cards with contact methods (no form)
 */

export interface ContactInfoCard {
  icon?: string
  title: string
  content: string
  linkText?: string
}

export interface ContactInfoCardsContent {
  title: string
  subtitle?: string
  cards: ContactInfoCard[]
}
