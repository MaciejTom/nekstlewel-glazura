/**
 * Contact — 2-col: info/image left + form right
 */

export interface ContactFormField {
  label: string
  placeholder: string
  type: 'text' | 'email' | 'tel' | 'textarea'
  half?: boolean
}

export interface ContactContent {
  badge?: string
  title: string
  description: string
  showImage?: boolean
  backgroundImage?: boolean
  contactItems?: Array<{ icon?: string; label: string }>
  formTitle: string
  fields: ContactFormField[]
  submitText: string
}
