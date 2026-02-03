import type { FooterMinimalContent } from "@/types/footer-minimal"

const w = {
  // Section
  section: "bg-background py-6 border-t border-dashed border-border",
  container: "container mx-auto px-6 flex items-center justify-between",

  // Brand
  brand: "flex items-center gap-2",
  brandIcon:
    "w-8 h-8 border border-dashed border-border flex items-center justify-center",
  brandIconLabel: "text-[8px] text-muted-foreground/50",
  brandName: "text-sm font-semibold text-foreground",

  // Copyright
  copyright: "text-xs text-muted-foreground/50",
}

interface Props {
  content: FooterMinimalContent
}

export function FooterMinimalWireframe({ content }: Props) {
  const { brand, copyright } = content

  return (
    <footer className={w.section}>
      <div className={w.container}>
        {/* Brand */}
        <div className={w.brand}>
          {brand.icon && (
            <div className={w.brandIcon}>
              <span className={w.brandIconLabel}>icon</span>
            </div>
          )}
          <span className={w.brandName}>{brand.name}</span>
        </div>

        {/* Copyright */}
        <span className={w.copyright}>{copyright}</span>
      </div>
    </footer>
  )
}
