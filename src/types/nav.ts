/**
 * Navigation — fixed navbar with logo, links, and CTA
 */

export interface NavLink {
  text: string
  href: string
}

export interface NavContent {
  logo: { icon?: string; text: string }
  links: NavLink[]
  cta?: { text: string; href: string }
  contactInfo?: { location: string; phone: string }
}
