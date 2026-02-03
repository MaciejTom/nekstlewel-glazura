import Image from "next/image"
import { ImageIcon } from "lucide-react"
import type { ServiceCardsContent } from "@/types"

const s = {
  section: "bg-background section-spacing",
  container: "container mx-auto px-6",

  // Header
  header: "max-w-2xl mb-16",
  title: "text-3xl md:text-4xl font-serif font-bold text-foreground h2-accent",
  subtitle: "mt-6 text-muted-foreground text-lg leading-relaxed",

  // Grid: 3 top + 2 bottom centered
  gridWrapper: "flex flex-col gap-6",
  gridTop: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  gridBottom: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[66%] mx-auto",
  // Fallback for <=3 items
  gridFlat: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",

  // Card
  card: "bg-card rounded-lg shadow-md overflow-hidden border border-border/50",
  cardImage: "relative w-full aspect-video bg-muted",
  cardImageInner: "object-cover",
  cardPlaceholder: "w-full h-full flex items-center justify-center",
  cardPlaceholderIcon: "w-10 h-10 text-muted-foreground/20",
  cardBody: "p-6",
  cardTitle: "text-lg font-serif font-semibold text-foreground mb-3",
  cardDesc: "text-muted-foreground text-sm leading-relaxed mb-4",

  // Feature list
  featureList: "space-y-2",
  featureItem: "flex items-start gap-2 text-sm text-muted-foreground",
  featureDot: "w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0",
}

interface ServicesCardsSectionProps {
  content: ServiceCardsContent
  className?: string
}

export function ServicesCardsSection({ content, className }: ServicesCardsSectionProps) {
  const { title, subtitle, services } = content

  const renderCard = (service: typeof services[0], index: number) => (
    <div key={index} className={s.card}>
      {/* Image */}
      <div className={s.cardImage}>
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            className={s.cardImageInner}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className={s.cardPlaceholder}>
            <ImageIcon className={s.cardPlaceholderIcon} />
          </div>
        )}
      </div>

      {/* Body */}
      <div className={s.cardBody}>
        <h3 className={s.cardTitle}>{service.title}</h3>
        <p className={s.cardDesc}>{service.description}</p>

        {service.features.length > 0 && (
          <ul className={s.featureList}>
            {service.features.map((feature, i) => (
              <li key={i} className={s.featureItem}>
                <span className={s.featureDot} />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )

  const use5Layout = services.length === 5

  return (
    <section className={`${s.section} ${className ?? ""}`}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <h2 className={s.title}>{title}</h2>
          {subtitle && <p className={s.subtitle}>{subtitle}</p>}
        </div>

        {/* Grid */}
        {use5Layout ? (
          <div className={s.gridWrapper}>
            <div className={s.gridTop}>
              {services.slice(0, 3).map((svc, i) => renderCard(svc, i))}
            </div>
            <div className={s.gridBottom}>
              {services.slice(3, 5).map((svc, i) => renderCard(svc, i + 3))}
            </div>
          </div>
        ) : (
          <div className={s.gridFlat}>
            {services.map((svc, i) => renderCard(svc, i))}
          </div>
        )}
      </div>
    </section>
  )
}
