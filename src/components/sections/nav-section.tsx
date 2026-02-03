"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { navItems, siteConfig } from "@/lib/content";
import { IconCall, IconMenu, IconClose } from "@/components/ui/icons";

const s = {
  nav: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
  navScrolled: "bg-background border-b border-border",
  navTop: "bg-transparent",
  container: "container mx-auto px-6 flex items-center justify-between h-16 md:h-20",

  logo: "flex items-center gap-2 group",
  logoImage: "relative w-14 h-14 md:w-16 md:h-16",

  links: "hidden lg:flex items-center gap-1",
  link: "px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors",

  cta: "hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors",

  mobileBtn: "lg:hidden w-11 h-11 flex items-center justify-center text-foreground hover:text-primary transition-colors",

  mobileMenu: "lg:hidden fixed inset-0 top-16 md:top-20 bg-background z-40",
  mobileMenuInner: "container mx-auto px-6 py-8 flex flex-col gap-2",
  mobileLink: "text-lg text-foreground py-4 border-b border-border hover:text-primary transition-colors",
  mobileCta: "mt-6 inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 py-4 font-heading text-lg tracking-wider",
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
            <div className={s.logoImage}>
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                fill
                className="object-contain"
              />
            </div>
          </a>

          {/* Desktop Links */}
          <div className={s.links}>
            {navItems.map((item, i) => (
              <a key={i} href={item.href} className={s.link}>
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href={siteConfig.phoneHref} className={s.cta}>
            <IconCall className="w-5 h-5" />
            {siteConfig.phone}
          </a>

          {/* Mobile Menu Button */}
          <button
            className={s.mobileBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
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
              <IconCall className="w-5 h-5" />
              Zadzwoń: {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
