import type { ContactMapContent } from "@/types/contact-map"
import { ImageIcon } from "lucide-react"

const w = {
  // Section
  section: "bg-background py-24 border-y border-dashed border-border",
  container: "container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16",

  // Left: map
  mapCol: "flex items-center justify-center",
  mapPlaceholder: "w-full h-80 lg:h-full min-h-[320px] bg-muted flex items-center justify-center",
  mapIcon: "w-10 h-10 text-muted-foreground/30",
  mapLabel: "text-xs text-muted-foreground/50 mt-2",

  // Right: details
  detailsCol: "flex flex-col justify-center",
  title: "text-4xl font-semibold text-foreground mb-4",
  description: "text-sm text-muted-foreground leading-relaxed mb-8",

  // Detail items
  details: "space-y-6",
  detailItem: "flex items-start gap-4",
  detailIcon:
    "w-12 h-12 border border-dashed border-border flex items-center justify-center shrink-0",
  detailIconLabel: "text-[8px] text-muted-foreground/50",
  detailText: "flex flex-col",
  detailTitle: "text-sm font-semibold text-foreground mb-1",
  detailContent: "text-sm text-muted-foreground",

  // Social
  socialRow: "flex gap-4 mt-8 pt-8 border-t border-dashed border-border",
  socialLink: "text-sm text-muted-foreground",
}

interface Props {
  content: ContactMapContent
}

export function ContactMapWireframe({ content }: Props) {
  const { title, description, details, socialLinks } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Left: map placeholder */}
        <div className={w.mapCol}>
          <div className={w.mapPlaceholder}>
            <div className="flex flex-col items-center gap-2">
              <ImageIcon className={w.mapIcon} />
              <span className={w.mapLabel}>map / image</span>
            </div>
          </div>
        </div>

        {/* Right: details */}
        <div className={w.detailsCol}>
          <h2 className={w.title}>{title}</h2>
          {description && <p className={w.description}>{description}</p>}

          <div className={w.details}>
            {details.map((item, i) => (
              <div key={i} className={w.detailItem}>
                <div className={w.detailIcon}>
                  <span className={w.detailIconLabel}>icon</span>
                </div>
                <div className={w.detailText}>
                  <span className={w.detailTitle}>{item.title}</span>
                  <span className={w.detailContent}>{item.content}</span>
                </div>
              </div>
            ))}
          </div>

          {socialLinks && (
            <div className={w.socialRow}>
              {socialLinks.map((link, i) => (
                <span key={i} className={w.socialLink}>{link.label}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
