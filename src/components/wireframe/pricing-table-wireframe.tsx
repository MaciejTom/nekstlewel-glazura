import type { PricingTableContent } from "@/types/pricing-table"

const w = {
  // Section
  section: "bg-background py-24",
  container: "container mx-auto px-6",

  // Header
  header: "text-center mb-16",
  title: "text-4xl font-semibold text-foreground mb-4",
  subtitle: "text-sm text-muted-foreground",

  // Table
  table: "w-full max-w-5xl mx-auto border border-dashed border-border",

  // Thead
  thead: "border-b border-dashed border-border",
  thEmpty: "p-6",
  thTier: "p-6 text-center border-l border-dashed border-border min-w-[160px]",
  tierName: "text-sm font-semibold text-foreground mb-1",
  tierDesc: "text-xs text-muted-foreground mb-3",
  tierPrice: "text-2xl font-semibold text-foreground",
  tierSuffix: "text-xs text-muted-foreground",
  tierButton:
    "mt-4 inline-block border border-dashed border-border px-6 py-2 text-xs text-muted-foreground uppercase tracking-widest",
  featuredLabel: "text-[10px] text-muted-foreground/50 uppercase tracking-widest mb-1",

  // Feature sections
  sectionRow: "border-b border-dashed border-border bg-muted/30",
  sectionTitle: "p-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground",

  // Feature rows
  featureRow: "border-b border-dashed border-border",
  featureName: "p-4 text-sm text-muted-foreground",
  featureCell: "p-4 text-center border-l border-dashed border-border",
  check: "text-sm text-foreground",
  dash: "text-sm text-muted-foreground/30",
}

interface Props {
  content: PricingTableContent
}

export function PricingTableWireframe({ content }: Props) {
  const { title, subtitle, tiers, featureSections } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Header */}
        <div className={w.header}>
          <h2 className={w.title}>{title}</h2>
          {subtitle && <p className={w.subtitle}>{subtitle}</p>}
        </div>

        {/* Table */}
        <table className={w.table}>
          <thead>
            <tr className={w.thead}>
              <th className={w.thEmpty} />
              {tiers.map((tier, i) => (
                <th key={i} className={w.thTier}>
                  {tier.featured && (
                    <span className={w.featuredLabel}>[featured]</span>
                  )}
                  <div className={w.tierName}>{tier.name}</div>
                  {tier.description && (
                    <div className={w.tierDesc}>{tier.description}</div>
                  )}
                  <div>
                    <span className={w.tierPrice}>{tier.price}</span>
                    {tier.priceSuffix && (
                      <span className={w.tierSuffix}>{tier.priceSuffix}</span>
                    )}
                  </div>
                  <span className={w.tierButton}>{tier.buttonText}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureSections.map((section, si) => (
              <>
                <tr key={`s-${si}`} className={w.sectionRow}>
                  <td colSpan={tiers.length + 1} className={w.sectionTitle}>
                    {section.sectionTitle}
                  </td>
                </tr>
                {section.features.map((feature, fi) => (
                  <tr key={`f-${si}-${fi}`} className={w.featureRow}>
                    <td className={w.featureName}>{feature.name}</td>
                    {feature.availability.map((avail, ti) => (
                      <td key={ti} className={w.featureCell}>
                        <span className={avail ? w.check : w.dash}>
                          {avail ? "✓" : "—"}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
