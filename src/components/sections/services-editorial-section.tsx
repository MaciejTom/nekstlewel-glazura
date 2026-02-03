/* eslint-disable @next/next/no-img-element */
import type { ServiceEditorialContent } from "@/types"

const s = {
  // Section
  section: "relative min-h-screen w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden",
  gradient: "absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-card to-transparent opacity-30 pointer-events-none",
  container: "max-w-7xl mx-auto flex flex-col items-center",

  // Header
  header: "text-center max-w-3xl mb-20 relative z-10",
  title: "font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 relative inline-block",
  titleBreak: "block mt-2",
  titleUnderline: "absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full",
  subtitle: "font-sans text-muted-foreground text-lg md:text-xl leading-relaxed mt-8 max-w-2xl mx-auto",

  // Services list
  list: "w-full flex flex-col gap-20 lg:gap-32",

  // Service row
  row: "group flex flex-col lg:flex-row items-center gap-10 lg:gap-16",
  rowReverse: "group flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16",

  // Image
  imageCol: "w-full lg:w-1/2 relative",
  imageBorderLeft: "absolute top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-xl hidden lg:block",
  imageBorderRight: "absolute top-4 -right-4 w-full h-full border-2 border-secondary/20 rounded-xl hidden lg:block",
  imageWrap: "relative h-64 sm:h-80 lg:h-[400px] w-full rounded-xl overflow-hidden shadow-lg",
  image: "object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105",

  // Content
  contentCol: "w-full lg:w-1/2",
  contentColReverse: "w-full lg:w-1/2 lg:text-right",

  // Step badge
  badge: "flex items-center gap-4 mb-4",
  badgeReverse: "flex items-center gap-4 mb-4 lg:flex-row-reverse",
  iconCircle: "flex items-center justify-center w-12 h-12 rounded-full bg-card text-primary shadow-sm",
  stepLabel: "uppercase tracking-widest text-xs font-bold text-muted-foreground",

  // Service text
  serviceTitle: "font-serif text-3xl font-bold text-secondary mb-6",
  serviceDesc: "text-muted-foreground text-lg leading-relaxed mb-8",

  // Features
  featureList: "space-y-4",
  featureListReverse: "space-y-4 flex flex-col lg:items-end",
  featureItem: "flex items-start gap-3",
  featureItemReverse: "flex items-start gap-3 lg:flex-row-reverse",
  featureIcon: "material-symbols-outlined text-primary text-xl mt-0.5",
  featureText: "font-medium text-foreground/80",

  // CTA
  cta: "mt-24 lg:mt-32 text-center w-full max-w-2xl border-t border-border pt-16",
  ctaTitle: "font-serif text-2xl text-secondary font-bold mb-6",
  ctaDesc: "text-muted-foreground mb-8",
  ctaButton: "bg-primary hover:bg-primary/85 text-primary-foreground font-sans font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center gap-3 mx-auto text-lg",
}

const iconFill = { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } as const

interface ServicesEditorialSectionProps {
  content: ServiceEditorialContent
  className?: string
}

export function ServicesEditorialSection({ content, className }: ServicesEditorialSectionProps) {
  const { title, titleBreak, subtitle, services, cta } = content

  return (
    <section className={`${s.section} ${className ?? ""}`}>
      {/* Gradient overlay */}
      <div className={s.gradient} />

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

        {/* Services */}
        <div className={s.list}>
          {services.map((service, index) => {
            const isEven = index % 2 === 1

            return (
              <div key={index} className={isEven ? s.rowReverse : s.row}>
                {/* Image */}
                <div className={s.imageCol}>
                  <div className={isEven ? s.imageBorderRight : s.imageBorderLeft} />
                  <div className={s.imageWrap}>
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className={s.image}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? s.contentColReverse : s.contentCol}>
                  {/* Step badge */}
                  <div className={isEven ? s.badgeReverse : s.badge}>
                    <span className={s.iconCircle}>
                      <span className="material-symbols-outlined text-2xl" style={iconFill}>
                        {service.icon}
                      </span>
                    </span>
                    <span className={s.stepLabel}>{service.step}</span>
                  </div>

                  {/* Title & description */}
                  <h3 className={s.serviceTitle}>{service.title}</h3>
                  <p className={s.serviceDesc}>{service.description}</p>

                  {/* Features */}
                  <ul className={isEven ? s.featureListReverse : s.featureList}>
                    {service.features.map((feature, i) => (
                      <li key={i} className={isEven ? s.featureItemReverse : s.featureItem}>
                        <span className={s.featureIcon} style={iconFill}>check_circle</span>
                        <span className={s.featureText}>{feature}</span>
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
          <div className={s.cta}>
            <p className={s.ctaTitle}>{cta.title}</p>
            <p className={s.ctaDesc}>{cta.description}</p>
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
