import type { NavContent } from "@/types/nav"

const w = {
  // Nav bar
  nav: "w-full border-b border-dashed border-border bg-background px-6 py-4",
  container: "container mx-auto flex items-center justify-between",

  // Logo
  logo: "flex items-center gap-2",
  logoIcon:
    "w-8 h-8 border border-dashed border-border flex items-center justify-center",
  logoIconLabel: "text-[8px] text-muted-foreground/50",
  logoText: "text-lg font-semibold text-foreground",

  // Links
  links: "hidden md:flex items-center gap-1 border border-dashed border-border px-2 py-2",
  link: "px-5 py-2 text-sm text-muted-foreground",

  // CTA
  cta: "hidden md:inline-block border border-dashed border-border px-6 py-2 text-sm text-muted-foreground uppercase tracking-widest",

  // Contact info
  contactInfo: "hidden md:flex items-center gap-4 text-xs text-muted-foreground",

  // Mobile menu button
  mobileBtn:
    "md:hidden w-10 h-10 border border-dashed border-border flex items-center justify-center",
  mobileBtnLabel: "text-[8px] text-muted-foreground/50",
}

interface Props {
  content: NavContent
}

export function NavWireframe({ content }: Props) {
  const { logo, links, cta, contactInfo } = content

  return (
    <nav className={w.nav}>
      <div className={w.container}>
        {/* Logo */}
        <div className={w.logo}>
          <div className={w.logoIcon}>
            <span className={w.logoIconLabel}>icon</span>
          </div>
          <span className={w.logoText}>{logo.text}</span>
        </div>

        {/* Links pill */}
        <div className={w.links}>
          {links.map((link, i) => (
            <span key={i} className={w.link}>
              {link.text}
            </span>
          ))}
        </div>

        {/* Contact info */}
        {contactInfo && (
          <div className={w.contactInfo}>
            <span>{contactInfo.location}</span>
            <span>{contactInfo.phone}</span>
          </div>
        )}

        {/* CTA */}
        {cta && <span className={w.cta}>{cta.text}</span>}

        {/* Mobile menu */}
        <div className={w.mobileBtn}>
          <span className={w.mobileBtnLabel}>menu</span>
        </div>
      </div>
    </nav>
  )
}
