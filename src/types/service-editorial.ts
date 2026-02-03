/**
 * Service Editorial Types (Usługi — wariant editorial, alternating layout)
 */

export interface ServiceEditorialItem {
  icon: string
  step: string
  title: string
  description: string
  features: string[]
  image: string
  imageAlt: string
}

export interface ServiceEditorialContent {
  title: string
  titleBreak?: string
  subtitle: string
  services: ServiceEditorialItem[]
  cta?: {
    title: string
    description: string
    buttonText: string
    buttonIcon?: string
  }
}
