/**
 * Process — vertical step cards with badge + title + description
 */

export interface ProcessStep {
  badge: string
  title: string
  description: string
}

export interface ProcessContent {
  title?: string
  subtitle?: string
  steps: ProcessStep[]
}
