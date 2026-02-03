import type { ServiceCardsContent } from "@/types"
import { ImageIcon } from "lucide-react"

const w = {
  // Section
  section: "bg-background py-24",
  container: "container mx-auto px-6",

  // Header (left-aligned)
  header: "max-w-2xl mb-16",
  title: "text-3xl md:text-4xl font-semibold text-foreground",
  subtitle: "mt-6 text-muted-foreground text-lg leading-relaxed",

  // Grid — flex-wrap with justify-center for auto-centering last row
  grid: "flex flex-wrap justify-center gap-6",

  // Card base
  cardBase: "border border-dashed border-border overflow-hidden",
  // Width variants
  cardW3: "w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]",
  cardW2: "w-full md:w-[calc(50%-0.75rem)]",

  // Image placeholder
  cardImage: "w-full aspect-video bg-muted flex items-center justify-center",
  cardImageIcon: "w-10 h-10 text-muted-foreground/30",

  // Card body
  cardBody: "p-6",
  cardTitle: "text-lg font-semibold text-foreground mb-3",
  cardDesc: "text-sm text-muted-foreground leading-relaxed mb-4",

  // Features
  featureList: "space-y-2",
  featureItem: "flex items-start gap-2 text-sm text-muted-foreground",
  featureDot: "w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mt-1.5 shrink-0",

  // CTA Card (in-grid) — same size as service card, different content
  ctaCardBase: "border border-dashed border-border overflow-hidden flex flex-col items-center justify-center text-center p-8 bg-muted/50 min-h-[350px]",
  ctaCardLabel: "text-[10px] text-muted-foreground/50 uppercase tracking-widest mb-4",
  ctaCardTitle: "text-xl font-semibold text-foreground mb-3",
  ctaCardDesc: "text-sm text-muted-foreground mb-6 max-w-xs",
  ctaCardButton: "inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest",
}

interface Props {
  content: ServiceCardsContent
}

export function ServicesCardsWireframe({ content }: Props) {
  const { title, subtitle, services, ctaCard } = content

  // Total grid items (services + optional CTA card)
  const total = services.length + (ctaCard ? 1 : 0)
  // Use 2-col layout when total is 2 or 4, 3-col otherwise
  const widthClass = total === 2 || total === 4 ? w.cardW2 : w.cardW3

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Header */}
        <div className={w.header}>
          <h2 className={w.title}>{title}</h2>
          {subtitle && <p className={w.subtitle}>{subtitle}</p>}
        </div>

        {/* Cards */}
        <div className={w.grid}>
          {services.map((service, index) => (
            <div key={index} className={`${w.cardBase} ${widthClass}`}>
              {/* Image placeholder */}
              <div className={w.cardImage}>
                <ImageIcon className={w.cardImageIcon} />
              </div>

              {/* Body */}
              <div className={w.cardBody}>
                <h3 className={w.cardTitle}>{service.title}</h3>
                <p className={w.cardDesc}>{service.description}</p>

                {service.features.length > 0 && (
                  <ul className={w.featureList}>
                    {service.features.map((feature, i) => (
                      <li key={i} className={w.featureItem}>
                        <span className={w.featureDot} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {/* CTA Card (optional, in-grid) */}
          {ctaCard && (
            <div className={`${w.ctaCardBase} ${widthClass}`}>
              <span className={w.ctaCardLabel}>cta card</span>
              <h3 className={w.ctaCardTitle}>{ctaCard.title}</h3>
              {ctaCard.description && (
                <p className={w.ctaCardDesc}>{ctaCard.description}</p>
              )}
              <span className={w.ctaCardButton}>{ctaCard.buttonText}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
