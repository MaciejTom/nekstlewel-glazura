import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { ReviewsWireframe } from "@/components/wireframe/reviews-wireframe"
import { wireframeReviews } from "@/content/wireframe/reviews"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Reviews" description="Testimonials grid z rating, cytatem, autorem. Featured card wyroznia srodkowa opinie." />

      <main>
        <SectionGroup title="Wireframe">
          <ComponentLabel label="3 cards, stars + quote + author, middle featured" variant="wireframe" />
          <ReviewsWireframe content={wireframeReviews} />
        </SectionGroup>
      </main>
    </div>
  )
}
