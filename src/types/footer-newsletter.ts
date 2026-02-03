/**
 * Footer Newsletter — multi-col with newsletter signup + contact info
 */

export interface FooterNewsletterContent {
  brand: { name: string; phone?: string; email?: string }
  columns: Array<{ title: string; links: Array<{ text: string }> }>
  newsletter?: { title: string; placeholder: string }
  copyright: string
  bottomBadge?: string
}
