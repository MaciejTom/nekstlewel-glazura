import type { ContactInfoCardsContent } from "@/types/contact-info-cards"

const w = {
  // Section
  section: "bg-background py-24 border-y border-dashed border-border",
  container: "container mx-auto px-6",

  // Header
  header: "text-center mb-12",
  title: "text-4xl font-semibold text-foreground mb-4",
  subtitle: "text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed",

  // Cards grid
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto",

  // Card
  card: "border border-dashed border-border p-8 text-center",
  iconBox:
    "w-14 h-14 mx-auto border border-dashed border-border flex items-center justify-center mb-6",
  iconLabel: "text-[8px] text-muted-foreground/50",
  cardTitle: "text-sm font-semibold text-foreground mb-2",
  cardContent: "text-xs text-muted-foreground mb-3",
  cardLink: "text-xs text-muted-foreground underline",
}

interface Props {
  content: ContactInfoCardsContent
}

export function ContactInfoCardsWireframe({ content }: Props) {
  const { title, subtitle, cards } = content

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
          {cards.map((card, i) => (
            <div key={i} className={w.card}>
              <div className={w.iconBox}>
                <span className={w.iconLabel}>icon</span>
              </div>
              <h3 className={w.cardTitle}>{card.title}</h3>
              <p className={w.cardContent}>{card.content}</p>
              {card.linkText && (
                <span className={w.cardLink}>{card.linkText}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
