"use client";

import Image from "next/image";
import { siteConfig, navItems } from "@/lib/content";
import { IconCall, IconMail } from "@/components/ui/icons";

const s = {
  footer: "bg-card border-t border-border",
  container: "container mx-auto px-6",

  // Main grid - compact single row on desktop
  main: "py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6",

  // Logo - minimal
  logo: "flex items-center gap-2 group",
  logoImage: "relative w-12 h-12",

  // Nav - horizontal, subtle
  nav: "flex flex-wrap justify-center gap-6",
  navLink: "text-sm text-muted-foreground hover:text-primary transition-colors",

  // Contact inline
  contact: "flex items-center gap-4 text-sm",
  contactLink: "flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors",
  contactIcon: "text-primary text-base",

  // Bottom bar - copyright
  bottom: "py-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground",
};

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        {/* Main Row */}
        <div className={s.main}>
          {/* Logo */}
          <a href="/" className={s.logo}>
            <div className={s.logoImage}>
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                fill
                className="object-contain"
              />
            </div>
          </a>

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
              <IconCall className="w-4 h-4 text-primary" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className={s.contactLink}>
              <IconMail className="w-4 h-4 text-primary" />
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className={s.bottom}>
          <span>&copy; {year} {siteConfig.name} · {siteConfig.owner}</span>
          <span>{siteConfig.address} · NIP: {siteConfig.nip}</span>
        </div>
      </div>
    </footer>
  );
}
