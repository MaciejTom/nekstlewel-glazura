import type { LogosInlineContent } from "@/types/logos-inline"

const w = {
  // Section
  section: "bg-background py-12 border-y border-dashed border-border",
  container: "container mx-auto px-6",

  // Label
  label: "text-sm text-muted-foreground text-center mb-8",

  // Logos row
  row: "flex flex-wrap items-center justify-center gap-8",

  // Logo item
  item: "flex items-center gap-2",
  iconBox:
    "w-8 h-8 border border-dashed border-border flex items-center justify-center",
  iconLabel: "text-[8px] text-muted-foreground/50",
  name: "text-sm text-muted-foreground",
}

interface Props {
  content: LogosInlineContent
}

export function LogosInlineWireframe({ content }: Props) {
  const { label, logos } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Label */}
        {label && <p className={w.label}>{label}</p>}

        {/* Logos flex-wrap */}
        <div className={w.row}>
          {logos.map((logo, i) => (
            <div key={i} className={w.item}>
              <div className={w.iconBox}>
                <span className={w.iconLabel}>icon</span>
              </div>
              <span className={w.name}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
