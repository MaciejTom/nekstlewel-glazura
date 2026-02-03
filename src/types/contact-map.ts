/**
 * Contact Map — map/image left + contact details right (no form)
 */

export interface ContactMapContent {
  title: string
  description?: string
  details: Array<{ icon?: string; title: string; content: string }>
  socialLinks?: Array<{ label: string }>
}
