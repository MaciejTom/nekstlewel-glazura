import type { PricingContent } from "@/types/pricing"

const w = {
  // Section
  section: "bg-background py-24",
  container: "container mx-auto px-6",

  // Header
  header: "text-center mb-16",
  title: "text-4xl font-semibold text-foreground mb-4",
  subtitle: "text-sm text-muted-foreground",

  // Grid (base — overridden dynamically)
  gridBase: "grid gap-8 max-w-5xl mx-auto",

  // Card
  card: "border border-dashed border-border p-8 flex flex-col",
  cardLabel: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4",
  priceRow: "flex items-baseline gap-1 mb-6",
  priceValue: "text-4xl font-semibold text-foreground",
  priceSuffix: "text-sm text-muted-foreground",
  cardDesc: "text-sm text-muted-foreground mb-8 pb-8 border-b border-dashed border-border leading-relaxed",

  // Features
  features: "space-y-4 mb-8 flex-1",
  featureItem: "flex items-center gap-3 text-sm text-muted-foreground",
  featureDot: "w-1.5 h-1.5 rounded-full bg-muted-foreground/30 shrink-0",

  // Button
  button: "block w-full py-4 text-center border border-dashed border-border text-sm text-muted-foreground uppercase tracking-widest",

  // Featured label
  featuredLabel: "text-[10px] text-muted-foreground/50 uppercase tracking-widest",
}

interface Props {
  content: PricingContent
}

export function PricingWireframe({ content }: Props) {
  const { title, subtitle, tiers } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Header */}
        <div className={w.header}>
          <h2 className={w.title}>{title}</h2>
          {subtitle && <p className={w.subtitle}>{subtitle}</p>}
        </div>

        {/* Tier cards */}
        <div className={`${w.gridBase} ${tiers.length <= 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3'}`}>
          {tiers.map((tier, i) => (
            <div key={i} className={w.card}>
              {/* Featured label */}
              {tier.featured && (
                <span className={w.featuredLabel}>[featured]</span>
              )}

              {/* Label */}
              <span className={w.cardLabel}>{tier.label}</span>

              {/* Price */}
              <div className={w.priceRow}>
                <span className={w.priceValue}>{tier.price}</span>
                <span className={w.priceSuffix}>{tier.priceSuffix}</span>
              </div>

              {/* Description */}
              <p className={w.cardDesc}>{tier.description}</p>

              {/* Features */}
              <ul className={w.features}>
                {tier.features.map((feature, j) => (
                  <li key={j} className={w.featureItem}>
                    <span className={w.featureDot} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <span className={w.button}>{tier.buttonText}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
