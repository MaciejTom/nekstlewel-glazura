"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { navItems, siteConfig } from "@/lib/content";
import { Phone, Menu, X } from "lucide-react";

const s = {
  nav: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
  navScrolled: "bg-card/95 backdrop-blur-sm border-b border-border shadow-sm",
  navTop: "bg-transparent",
  container: "container mx-auto px-6 flex items-center justify-between h-16 md:h-20",

  // Logo/Brand text
  logo: "flex items-center gap-2 group",
  logoText: "text-xl font-bold",
  logoTextScrolled: "text-foreground",
  logoTextTop: "text-white",

  links: "hidden lg:flex items-center gap-1",
  link: "px-4 py-2 text-sm transition-colors rounded-md",
  linkScrolled: "text-muted-foreground hover:text-accent hover:bg-secondary",
  linkTop: "text-white/80 hover:text-white hover:bg-white/10",

  cta: "hidden md:inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-sm rounded-md transition-colors",
  ctaScrolled: "bg-accent text-accent-foreground hover:bg-accent/90",
  ctaTop: "bg-accent text-accent-foreground hover:bg-accent/90",

  mobileBtn: "lg:hidden w-11 h-11 flex items-center justify-center rounded-md transition-colors",
  mobileBtnScrolled: "text-foreground hover:text-accent hover:bg-secondary",
  mobileBtnTop: "text-white hover:text-white hover:bg-white/10",

  mobileMenu: "lg:hidden fixed inset-0 top-16 md:top-20 bg-background z-40",
  mobileMenuInner: "container mx-auto px-6 py-8 flex flex-col gap-2",
  mobileLink: "text-lg text-foreground py-4 border-b border-border hover:text-accent transition-colors",
  mobileCta: "mt-6 inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-6 py-4 font-semibold text-lg rounded-md",
};

export function NavSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`${s.nav} ${scrolled ? s.navScrolled : s.navTop}`}>
        <div className={s.container}>
          {/* Logo */}
          <a href="/" className={s.logo}>
            <Image src="/logo-g.svg" alt={siteConfig.name} width={40} height={40} />
            <span className={`${s.logoText} ${scrolled ? s.logoTextScrolled : s.logoTextTop}`}>
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop Links */}
          <div className={s.links}>
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className={`${s.link} ${scrolled ? s.linkScrolled : s.linkTop}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href={siteConfig.phoneHref}
            className={`${s.cta} ${scrolled ? s.ctaScrolled : s.ctaTop}`}
          >
            <Phone className="w-4 h-4" />
            {siteConfig.phone}
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`${s.mobileBtn} ${scrolled ? s.mobileBtnScrolled : s.mobileBtnTop}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={s.mobileMenu}>
          <div className={s.mobileMenuInner}>
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className={s.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={siteConfig.phoneHref} className={s.mobileCta}>
              <Phone className="w-5 h-5" />
              Zadzwoń: {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
