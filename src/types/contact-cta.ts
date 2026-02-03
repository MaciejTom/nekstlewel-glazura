/**
 * Contact CTA — centered: badge + title + inline contact details + CTA button (no form)
 */

export interface ContactCtaContent {
  badge?: string
  title: string
  description?: string
  details: Array<{ icon?: string; label: string; value: string }>
  cta?: { text: string }
}
