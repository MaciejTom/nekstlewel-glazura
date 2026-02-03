/**
 * Footer — multi-column: optional CTA row + brand + contact + link columns + copyright
 */

export interface FooterColumn {
  title: string
  links: Array<{ text: string; href: string }>
}

export interface FooterContent {
  cta?: { title: string; buttonText: string }
  brand: { icon?: string; name: string; description: string }
  socialLinks?: Array<{ text: string; href: string }>
  contactInfo?: {
    title?: string
    address: string
    email: string
    phone: string
    label?: string
  }
  columns: FooterColumn[]
  copyright: string
  bottomLinks?: Array<{ text: string }>
}
