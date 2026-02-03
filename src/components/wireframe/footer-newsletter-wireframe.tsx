import type { FooterNewsletterContent } from "@/types/footer-newsletter"

const w = {
  // Section
  section: "bg-background py-24 border-t border-dashed border-border",
  container: "container mx-auto px-6",

  // Columns grid
  columns: "grid grid-cols-1 md:grid-cols-4 gap-12 pb-16",

  // Brand column
  brandName: "text-lg font-semibold text-foreground mb-4",
  brandContact: "space-y-2",
  brandContactItem: "text-sm text-muted-foreground",

  // Link column
  columnTitle: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6",
  linkList: "space-y-3",
  link: "text-sm text-muted-foreground block",

  // Newsletter column (spans 2)
  newsletter: "md:col-span-2",
  newsletterTitle: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6",
  inputRow: "flex gap-2",
  input:
    "flex-1 border border-dashed border-border bg-background text-sm px-4 py-3 text-muted-foreground/50",
  submitButton:
    "border border-dashed border-border px-6 py-3 text-sm text-muted-foreground",

  // Copyright
  copyright: "border-t border-dashed border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4",
  copyrightText: "text-xs text-muted-foreground/50 uppercase tracking-widest",
  bottomBadge: "text-xs text-muted-foreground/50",
}

interface Props {
  content: FooterNewsletterContent
}

export function FooterNewsletterWireframe({ content }: Props) {
  const { brand, columns, newsletter, copyright, bottomBadge } = content

  return (
    <footer className={w.section}>
      <div className={w.container}>
        {/* Columns */}
        <div className={w.columns}>
          {/* Brand */}
          <div>
            <h3 className={w.brandName}>{brand.name}</h3>
            <div className={w.brandContact}>
              {brand.phone && (
                <p className={w.brandContactItem}>{brand.phone}</p>
              )}
              {brand.email && (
                <p className={w.brandContactItem}>{brand.email}</p>
              )}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col, i) => (
            <div key={i}>
              <h5 className={w.columnTitle}>{col.title}</h5>
              <ul className={w.linkList}>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <span className={w.link}>{link.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          {newsletter && (
            <div className={w.newsletter}>
              <h5 className={w.newsletterTitle}>{newsletter.title}</h5>
              <div className={w.inputRow}>
                <div className={w.input}>{newsletter.placeholder}</div>
                <span className={w.submitButton}>→</span>
              </div>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className={w.copyright}>
          <p className={w.copyrightText}>{copyright}</p>
          {bottomBadge && <span className={w.bottomBadge}>{bottomBadge}</span>}
        </div>
      </div>
    </footer>
  )
}
