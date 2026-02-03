/**
 * Reviews Types (Testimonials — grid of review cards)
 */

export interface ReviewItem {
  rating: number
  quote: string
  authorName: string
  authorLabel: string
  featured?: boolean
}

export interface ReviewsContent {
  title: string
  reviews: ReviewItem[]
  bottomLink?: { text: string }
}
