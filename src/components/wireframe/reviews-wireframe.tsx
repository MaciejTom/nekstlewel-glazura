import { Star, CircleDashed } from "lucide-react"
import type { ReviewsContent } from "@/types"

const w = {
  // Section
  section: "bg-background py-20 border-y border-dashed border-border",
  container: "max-w-[1280px] mx-auto px-[5%]",

  // Header
  title: "text-center text-4xl font-semibold text-foreground mb-16",

  // Grid
  grid: "grid md:grid-cols-3 gap-8",

  // Card (same for all — featured styling is decoration, described in spec)
  card: "border border-dashed border-border p-8",

  // Stars
  starsRow: "flex gap-1 mb-4",
  star: "w-4 h-4 text-muted-foreground/40",

  // Quote text
  quote: "text-sm text-muted-foreground leading-relaxed mb-6",

  // Author
  authorRow: "flex items-center gap-3",
  avatar:
    "w-10 h-10 border border-dashed border-border rounded-full flex items-center justify-center bg-muted",
  avatarIcon: "w-4 h-4 text-muted-foreground/40",
  authorName: "text-sm font-semibold text-foreground",
  authorLabel: "text-xs text-muted-foreground",

  // Featured label
  featuredLabel:
    "text-[10px] text-muted-foreground/50 uppercase tracking-widest mb-2",

  // Bottom link
  bottomLink: "flex justify-center mt-10",
  link: "inline-block border-b border-dashed border-border text-sm text-muted-foreground uppercase tracking-widest pb-1",
}

interface Props {
  content: ReviewsContent
}

export function ReviewsWireframe({ content }: Props) {
  const { title, reviews, bottomLink } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Title */}
        <h2 className={w.title}>{title}</h2>

        {/* Cards */}
        <div className={w.grid}>
          {reviews.map((review, i) => (
            <div key={i} className={w.card}>
              {/* Featured label (styling is decoration — see spec) */}
              {review.featured && (
                <span className={w.featuredLabel}>[featured]</span>
              )}

              {/* Stars */}
              <div className={w.starsRow}>
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Star key={s} className={w.star} />
                ))}
              </div>

              {/* Quote */}
              <p className={w.quote}>{review.quote}</p>

              {/* Author */}
              <div className={w.authorRow}>
                <div className={w.avatar}>
                  <CircleDashed className={w.avatarIcon} />
                </div>
                <div>
                  <p className={w.authorName}>{review.authorName}</p>
                  <p className={w.authorLabel}>{review.authorLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom link */}
        {bottomLink && (
          <div className={w.bottomLink}>
            <span className={w.link}>{bottomLink.text}</span>
          </div>
        )}
      </div>
    </section>
  )
}
