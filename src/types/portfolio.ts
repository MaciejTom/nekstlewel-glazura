/**
 * Portfolio Types (Realizacje)
 */

import type { SectionHeader } from './common'

export interface PortfolioContent extends SectionHeader {
  stats?: Array<{
    value: string
    label: string
    highlight?: boolean
  }>
  projects: Array<{
    title: string
    category: string
    specs: string
    image: string
    featured?: boolean
    wide?: boolean
  }>
  galleryButton?: {
    text: string
    href: string
  }
}
