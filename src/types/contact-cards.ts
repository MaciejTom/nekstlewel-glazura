/**
 * Contact Cards — form LEFT + image + info cards + social RIGHT
 */

export interface ContactCardsContent {
  title: string
  description: string
  formTitle?: string
  fields: Array<{ label: string; placeholder: string; type: string; half?: boolean }>
  submitText: string
  infoCards: Array<{ icon?: string; title: string; content: string }>
  socialLinks?: Array<{ label: string }>
}
