/**
 * FAQ — accordion with expand/collapse items
 */

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqContent {
  title: string
  subtitle?: string
  items: FaqItem[]
}
