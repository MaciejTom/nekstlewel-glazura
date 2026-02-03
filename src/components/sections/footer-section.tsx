"use client";

import { siteConfig, navItems } from "@/lib/content";
import { Phone, MapPin } from "lucide-react";

const s = {
  footer: "bg-primary text-primary-foreground",
  container: "container mx-auto px-6",

  // Main grid
  main: "py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8",

  // Logo/Brand
  brand: "text-center md:text-left",
  brandName: "text-2xl font-bold",
  brandTagline: "text-sm text-primary-foreground/70 mt-1",

  // Nav
  nav: "flex flex-wrap justify-center gap-6",
  navLink: "text-sm text-primary-foreground/80 hover:text-accent transition-colors",

  // Contact
  contact: "flex flex-col sm:flex-row items-center gap-4 text-sm",
  contactLink: "flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors",

  // Bottom bar
  bottom: "py-4 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60",
};

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        {/* Main Row */}
        <div className={s.main}>
          {/* Brand */}
          <div className={s.brand}>
            <div className={s.brandName}>{siteConfig.name}</div>
            <div className={s.brandTagline}>Posadzki przemysłowe</div>
          </div>

          {/* Navigation */}
          <nav className={s.nav}>
            {navItems.map((item, i) => (
              <a key={i} href={item.href} className={s.navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className={s.contact}>
            <a href={siteConfig.phoneHref} className={s.contactLink}>
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <span className={s.contactLink}>
              <MapPin className="w-4 h-4" />
              Zielona Góra
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className={s.bottom}>
          <span>&copy; {year} {siteConfig.name}</span>
          <span>{siteConfig.address}</span>
        </div>
      </div>
    </footer>
  );
}
