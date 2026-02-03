/**
 * FAQ Split — image left + badge/title + accordion right
 */

export interface FaqSplitContent {
  badge?: string
  title: string
  items: Array<{ question: string; answer: string }>
}
