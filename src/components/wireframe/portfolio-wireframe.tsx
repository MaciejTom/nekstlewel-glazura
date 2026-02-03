import type { PortfolioContent } from "@/types"
import { ImageIcon } from "lucide-react"

const w = {
  section: "bg-background py-24",
  container: "container mx-auto px-6",

  header: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",
  tagline: "text-xs tracking-widest uppercase mb-2 block text-muted-foreground",
  title: "text-4xl font-semibold text-foreground",
  titleAccent: "text-muted-foreground",

  stats: "flex gap-4",
  stat: "text-right",
  statValue: "text-3xl font-semibold text-foreground",
  statLabel: "text-xs text-muted-foreground uppercase",
  statDivider: "w-px h-12 bg-border",

  // Mosaic mode — CSS grid 4-col (for featured/wide items)
  gridMosaic: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",

  // Gallery mode — flex-wrap (for all-normal items)
  gridFlex: "flex flex-wrap justify-center gap-4",

  card: "relative border border-dashed border-border overflow-hidden",

  // Mosaic card sizes (CSS grid spans)
  cardFeatured: "col-span-1 md:col-span-2 row-span-2 min-h-[400px]",
  cardNormal: "col-span-1 aspect-square",
  cardWide: "col-span-1 md:col-span-2 aspect-[2/1]",

  // Gallery card widths (flex-wrap)
  cardW3: "w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] aspect-square",
  cardW2: "w-full md:w-[calc(50%-0.5rem)] aspect-square",
  cardW4: "w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] aspect-square",

  placeholder: "w-full h-full bg-muted flex flex-col items-center justify-center gap-2",
  placeholderIcon: "w-10 h-10 text-muted-foreground/30",
  placeholderLabel: "text-xs text-muted-foreground/50",

  cardContent: "absolute bottom-0 left-0 p-6 w-full",
  cardBadge: "text-xs text-muted-foreground mb-1",
  cardTitle: "text-lg font-semibold text-foreground mb-1",
  cardMeta: "flex items-center gap-3 text-xs text-muted-foreground",
  metaDot: "w-1 h-1 bg-muted-foreground rounded-full",

  galleryBtn: "mt-12 text-center",
  galleryBtnInner: "inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest",
}

interface PortfolioWireframeProps {
  content: PortfolioContent
}

export function PortfolioWireframe({ content }: PortfolioWireframeProps) {
  const { tagline, title, titleAccent, stats, projects, galleryButton } = content

  const hasMosaic = projects.some((p) => p.featured || p.wide)

  // Mosaic: CSS grid with col/row spans
  const getMosaicSize = (project: (typeof projects)[0]) => {
    if (project.featured) return w.cardFeatured
    if (project.wide) return w.cardWide
    return w.cardNormal
  }

  // Gallery: flex-wrap width based on total items
  const getGalleryWidth = (total: number) => {
    if (total <= 2) return w.cardW2
    if (total <= 3 || total === 6 || total === 9) return w.cardW3
    return w.cardW4
  }

  const gridClass = hasMosaic ? w.gridMosaic : w.gridFlex
  const galleryWidth = !hasMosaic ? getGalleryWidth(projects.length) : ""

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Header */}
        <div className={w.header}>
          <div>
            {tagline && <span className={w.tagline}>{tagline}</span>}
            <h2 className={w.title}>
              {title} {titleAccent && <span className={w.titleAccent}>{titleAccent}</span>}
            </h2>
          </div>

          {stats && stats.length > 0 && (
            <div className={w.stats}>
              {stats.map((stat, i) => (
                <div key={i} className="contents">
                  <div className={w.stat}>
                    <div className={w.statValue}>{stat.value}</div>
                    <div className={w.statLabel}>{stat.label}</div>
                  </div>
                  {i < stats.length - 1 && <div className={w.statDivider} />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Grid */}
        <div className={gridClass}>
          {projects.map((project, i) => (
            <div
              key={i}
              className={`${w.card} ${hasMosaic ? getMosaicSize(project) : galleryWidth}`}
            >
              {/* Image placeholder */}
              <div className={w.placeholder}>
                <ImageIcon className={w.placeholderIcon} />
                <span className={w.placeholderLabel}>
                  {project.featured ? "featured" : project.wide ? "wide" : "1:1"}
                </span>
              </div>

              {/* Content */}
              <div className={w.cardContent}>
                <div className={w.cardBadge}>#{i + 1}</div>
                <h3 className={w.cardTitle}>{project.title}</h3>
                <div className={w.cardMeta}>
                  <span>{project.category}</span>
                  <span className={w.metaDot} />
                  <span>{project.specs}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Button */}
        {galleryButton && (
          <div className={w.galleryBtn}>
            <span className={w.galleryBtnInner}>{galleryButton.text}</span>
          </div>
        )}
      </div>
    </section>
  )
}
