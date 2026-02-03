/* eslint-disable @next/next/no-img-element */
import type { ServiceOverlayContent } from "@/types"

const s = {
  // Section
  section: "relative min-h-screen w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden",
  container: "max-w-7xl mx-auto flex flex-col items-center",

  // Header
  header: "text-center max-w-3xl mb-16 relative z-10",
  title: "font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 relative inline-block",
  titleBreak: "block mt-2",
  titleUnderline: "absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full",
  subtitle: "font-sans text-muted-foreground text-lg md:text-xl leading-relaxed mt-8 max-w-2xl mx-auto",

  // Grid
  grid: "flex flex-wrap justify-center gap-8 w-full",

  // Card
  card: "group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] h-[500px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer",
  cardImageWrap: "absolute inset-0",
  cardImage: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110",
  cardGradient: "absolute inset-0",
  cardContent: "absolute inset-0 flex flex-col justify-end p-8",

  // Card elements
  iconCircle: "mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary backdrop-blur-sm self-start",
  cardTitle: "font-serif text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300",
  cardDesc: "text-secondary/80 mb-4 text-sm leading-relaxed font-medium",
  featureList: "space-y-2 text-sm text-secondary font-bold",
  featureItem: "flex items-center gap-2",
  featureDot: "h-1.5 w-1.5 rounded-full bg-primary shrink-0",
  cardLine: "w-12 h-1 bg-primary mt-6 rounded-full transition-all duration-300 group-hover:w-full opacity-80",

  // CTA
  cta: "mt-20 text-center",
  ctaText: "text-secondary font-medium mb-4 text-lg",
  ctaButton: "bg-primary hover:bg-primary/85 text-primary-foreground font-sans font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto transform hover:-translate-y-0.5",
}

const iconFill = { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } as const

const gradientStyle = {
  background: "linear-gradient(to top, var(--background), color-mix(in srgb, var(--background) 95%, transparent) 40%, transparent)",
} as const

interface ServicesOverlaySectionProps {
  content: ServiceOverlayContent
  className?: string
}

export function ServicesOverlaySection({ content, className }: ServicesOverlaySectionProps) {
  const { title, titleBreak, subtitle, services, cta } = content

  return (
    <section className={`${s.section} ${className ?? ""}`}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <h2 className={s.title}>
            {title}
            {titleBreak && <span className={s.titleBreak}>{titleBreak}</span>}
            <span className={s.titleUnderline} />
          </h2>
          <p className={s.subtitle}>{subtitle}</p>
        </div>

        {/* Cards */}
        <div className={s.grid}>
          {services.map((service, index) => (
            <div key={index} className={s.card}>
              {/* Background image */}
              <div className={s.cardImageWrap}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className={s.cardImage}
                />
              </div>

              {/* Gradient overlay */}
              <div className={s.cardGradient} style={gradientStyle} />

              {/* Content */}
              <div className={s.cardContent}>
                <div className={s.iconCircle}>
                  <span className="material-symbols-outlined text-2xl" style={iconFill}>
                    {service.icon}
                  </span>
                </div>

                <h3 className={s.cardTitle}>{service.title}</h3>
                <p className={s.cardDesc}>{service.description}</p>

                <ul className={s.featureList}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={s.featureItem}>
                      <span className={s.featureDot} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className={s.cardLine} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <div className={s.cta}>
            <p className={s.ctaText}>{cta.text}</p>
            <button className={s.ctaButton}>
              {cta.buttonIcon && (
                <span className="material-symbols-outlined text-[24px]" style={iconFill}>
                  {cta.buttonIcon}
                </span>
              )}
              {cta.buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
