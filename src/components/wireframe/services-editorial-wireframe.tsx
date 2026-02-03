import type { ServiceEditorialContent } from "@/types"
import { ImageIcon } from "lucide-react"

const w = {
  // Section
  section: "bg-background py-24",
  container: "container mx-auto px-6",

  // Header (centered)
  header: "text-center max-w-3xl mx-auto mb-20",
  title: "text-4xl font-semibold text-foreground relative inline-block",
  titleBreak: "block mt-2",
  titleUnderline: "block w-16 h-px bg-border mx-auto mt-4",
  subtitle: "text-muted-foreground text-lg leading-relaxed mt-6 max-w-2xl mx-auto",

  // Services list — vertical stack with large gaps
  list: "flex flex-col gap-20 lg:gap-28",

  // Service row — alternating 50/50 split
  row: "flex flex-col lg:flex-row items-center gap-10 lg:gap-16",
  rowReverse: "flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16",

  // Image column
  imageCol: "w-full lg:w-1/2",
  imageWrap: "h-64 sm:h-80 lg:h-[400px] w-full border border-dashed border-border overflow-hidden",
  placeholder: "w-full h-full bg-muted flex flex-col items-center justify-center gap-2",
  placeholderIcon: "w-10 h-10 text-muted-foreground/30",
  placeholderLabel: "text-xs text-muted-foreground/50",

  // Content column
  contentCol: "w-full lg:w-1/2",
  contentColReverse: "w-full lg:w-1/2 lg:text-right",

  // Step badge
  badge: "flex items-center gap-4 mb-4",
  badgeReverse: "flex items-center gap-4 mb-4 lg:flex-row-reverse",
  iconBox: "w-10 h-10 border border-dashed border-border flex items-center justify-center",
  iconLabel: "text-[10px] text-muted-foreground/50",
  stepLabel: "uppercase tracking-widest text-xs text-muted-foreground",

  // Service text
  serviceTitle: "text-2xl font-semibold text-foreground mb-4",
  serviceDesc: "text-muted-foreground leading-relaxed mb-6",

  // Features
  featureList: "space-y-3",
  featureListReverse: "space-y-3 flex flex-col lg:items-end",
  featureItem: "flex items-center gap-3",
  featureItemReverse: "flex items-center gap-3 lg:flex-row-reverse",
  featureDot: "w-1.5 h-1.5 rounded-full bg-muted-foreground/30 shrink-0",
  featureText: "text-sm text-muted-foreground",

  // CTA
  cta: "mt-20 text-center max-w-2xl mx-auto border-t border-dashed border-border pt-12",
  ctaTitle: "text-xl font-semibold text-foreground mb-3",
  ctaDesc: "text-muted-foreground mb-6",
  ctaButton: "inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest",
}

interface ServicesEditorialWireframeProps {
  content: ServiceEditorialContent
}

export function ServicesEditorialWireframe({ content }: ServicesEditorialWireframeProps) {
  const { title, titleBreak, subtitle, services, cta } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Header */}
        <div className={w.header}>
          <h2 className={w.title}>
            {title}
            {titleBreak && <span className={w.titleBreak}>{titleBreak}</span>}
          </h2>
          <span className={w.titleUnderline} />
          <p className={w.subtitle}>{subtitle}</p>
        </div>

        {/* Services */}
        <div className={w.list}>
          {services.map((service, index) => {
            const isEven = index % 2 === 1

            return (
              <div key={index} className={isEven ? w.rowReverse : w.row}>
                {/* Image placeholder */}
                <div className={w.imageCol}>
                  <div className={w.imageWrap}>
                    <div className={w.placeholder}>
                      <ImageIcon className={w.placeholderIcon} />
                      <span className={w.placeholderLabel}>service {index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? w.contentColReverse : w.contentCol}>
                  {/* Step badge */}
                  <div className={isEven ? w.badgeReverse : w.badge}>
                    <div className={w.iconBox}>
                      <span className={w.iconLabel}>icon</span>
                    </div>
                    <span className={w.stepLabel}>{service.step}</span>
                  </div>

                  <h3 className={w.serviceTitle}>{service.title}</h3>
                  <p className={w.serviceDesc}>{service.description}</p>

                  <ul className={isEven ? w.featureListReverse : w.featureList}>
                    {service.features.map((feature, i) => (
                      <li key={i} className={isEven ? w.featureItemReverse : w.featureItem}>
                        <span className={w.featureDot} />
                        <span className={w.featureText}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        {cta && (
          <div className={w.cta}>
            <p className={w.ctaTitle}>{cta.title}</p>
            <p className={w.ctaDesc}>{cta.description}</p>
            <span className={w.ctaButton}>{cta.buttonText}</span>
          </div>
        )}
      </div>
    </section>
  )
}
