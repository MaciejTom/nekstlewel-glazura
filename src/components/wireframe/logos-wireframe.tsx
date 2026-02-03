import type { LogosContent } from "@/types/logos"
import { ImageIcon } from "lucide-react"

const w = {
  // Section
  section: "bg-background py-12 border-y border-dashed border-border",

  // Grid (base — column count set dynamically)
  gridBase: "grid grid-cols-2",

  // Logo cell
  cell: "flex items-center justify-center p-8 border-r border-dashed border-border last:border-r-0",
  cellLast: "flex items-center justify-center p-8",

  // Logo placeholder
  logoIcon: "w-6 h-6 text-muted-foreground/30",
  logoLabel: "text-[10px] text-muted-foreground/50 mt-1",
}

interface Props {
  content: LogosContent
}

function logosGridCols(count: number) {
  if (count <= 4) return "md:grid-cols-4"
  if (count <= 6) return "md:grid-cols-6"
  return "md:grid-cols-4"
}

export function LogosWireframe({ content }: Props) {
  const { logos } = content

  return (
    <section className={w.section}>
      <div className={`${w.gridBase} ${logosGridCols(logos.length)}`}>
        {logos.map((logo, i) => (
          <div
            key={i}
            className={i < logos.length - 1 ? w.cell : w.cellLast}
          >
            <div className="flex flex-col items-center gap-1">
              <ImageIcon className={w.logoIcon} />
              <span className={w.logoLabel}>{logo.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
