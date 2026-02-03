import type { ReviewsContent } from "@/types"

export const wireframeReviews: ReviewsContent = {
  title: "Section Title Goes Here",
  reviews: [
    {
      rating: 5,
      quote:
        "Lorem ipsum dolor sit amet consectetur. Short testimonial text that describes the client experience with the service.",
      authorName: "Author Name",
      authorLabel: "Service Label",
    },
    {
      rating: 5,
      quote:
        "Lorem ipsum dolor sit amet consectetur adipiscing. Featured testimonial with longer text that stands out from the rest of the reviews.",
      authorName: "Author Name",
      authorLabel: "Service Label",
      featured: true,
    },
    {
      rating: 5,
      quote:
        "Lorem ipsum dolor sit amet consectetur. Short testimonial text about a positive experience.",
      authorName: "Author Name",
      authorLabel: "Service Label",
    },
  ],
  bottomLink: { text: "View All Reviews" },
}
