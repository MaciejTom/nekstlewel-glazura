/**
 * Process Grid — 3-col grid cards with icons + badge + CTA
 */

export interface ProcessGridStep {
  icon?: string
  badge: string
  title: string
  description: string
}

export interface ProcessGridContent {
  title: string
  subtitle?: string
  steps: ProcessGridStep[]
  cta?: { text: string }
}
