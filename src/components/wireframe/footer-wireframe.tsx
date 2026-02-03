import type { FooterContent } from "@/types/footer"

const w = {
  // Section
  section: "bg-background py-24 border-t border-dashed border-border",
  container: "container mx-auto px-6",

  // CTA row
  ctaRow: "flex flex-col md:flex-row justify-between items-start md:items-center pb-16 mb-16 border-b border-dashed border-border",
  ctaTitle: "text-3xl font-semibold text-foreground mb-6 md:mb-0 max-w-xl",
  ctaButton: "inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest",

  // Columns grid
  columns: "grid grid-cols-1 md:grid-cols-4 gap-12 py-16",

  // Brand column
  brandLogo: "flex items-center gap-2 mb-6",
  brandIcon:
    "w-8 h-8 border border-dashed border-border flex items-center justify-center",
  brandIconLabel: "text-[8px] text-muted-foreground/50",
  brandName: "text-lg font-semibold text-foreground",
  brandDesc: "text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs",
  socialLinks: "flex gap-4",
  socialLink: "text-sm text-muted-foreground",

  // Contact column
  columnTitle: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6",
  address: "text-sm text-muted-foreground mb-4",
  contactLabel: "text-xs text-muted-foreground/50 uppercase mb-1",
  contactValue: "text-sm font-semibold text-foreground",

  // Link columns
  linkList: "space-y-3",
  link: "text-sm text-muted-foreground block",

  // Copyright
  copyright: "border-t border-dashed border-border py-8 flex flex-col md:flex-row justify-between items-center",
  copyrightText: "text-xs text-muted-foreground/50 uppercase tracking-widest",
  bottomLinks: "flex items-center gap-4 mt-4 md:mt-0",
  bottomLink: "text-xs text-muted-foreground/50 uppercase tracking-widest",
}

interface Props {
  content: FooterContent
}

export function FooterWireframe({ content }: Props) {
  const { cta, brand, socialLinks, contactInfo, columns, copyright, bottomLinks } = content

  return (
    <footer className={w.section}>
      <div className={w.container}>
        {/* CTA row */}
        {cta && (
          <div className={w.ctaRow}>
            <h2 className={w.ctaTitle}>{cta.title}</h2>
            <span className={w.ctaButton}>{cta.buttonText}</span>
          </div>
        )}

        {/* Columns */}
        <div className={w.columns}>
          {/* Brand */}
          <div>
            <div className={w.brandLogo}>
              <div className={w.brandIcon}>
                <span className={w.brandIconLabel}>icon</span>
              </div>
              <span className={w.brandName}>{brand.name}</span>
            </div>
            <p className={w.brandDesc}>{brand.description}</p>
            {socialLinks && (
              <div className={w.socialLinks}>
                {socialLinks.map((link, i) => (
                  <span key={i} className={w.socialLink}>{link.text}</span>
                ))}
              </div>
            )}
          </div>

          {/* Contact Info */}
          {contactInfo && (
            <div>
              <h5 className={w.columnTitle}>{contactInfo.title || "Contact Info"}</h5>
              <p className={w.address}>{contactInfo.address}</p>
              <div>
                {contactInfo.label && (
                  <p className={w.contactLabel}>{contactInfo.label}</p>
                )}
                <p className={w.contactValue}>{contactInfo.email}</p>
                <p className={w.contactValue}>{contactInfo.phone}</p>
              </div>
            </div>
          )}

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
        </div>

        {/* Copyright */}
        <div className={w.copyright}>
          <p className={w.copyrightText}>{copyright}</p>
          {bottomLinks && (
            <div className={w.bottomLinks}>
              {bottomLinks.map((link, i) => (
                <span key={i} className={w.bottomLink}>{link.text}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
