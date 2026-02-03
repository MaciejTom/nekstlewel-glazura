/**
 * Original: Hero Fullscreen
 * Wireframe: src/components/wireframe/hero-wireframe.tsx
 * Spec: src/agent/wireframe/specs/hero-fullscreen.md
 */

"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  onContactClick?: () => void
  onRealizationsClick?: () => void
  className?: string
}

export function HeroSection({
  onContactClick,
  onRealizationsClick,
  className
}: HeroSectionProps) {
  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick()
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleRealizationsClick = () => {
    if (onRealizationsClick) {
      onRealizationsClick()
    } else {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className={cn(
        "hero-section min-h-screen flex items-center relative overflow-hidden bg-background text-white",
        className
      )}
    >
      {/* Rebar pattern overlay */}
      <div className="absolute inset-0 rebar-pattern opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 border border-accent/20 transform rotate-45 translate-x-32" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 border border-accent/10 transform -rotate-12 -translate-x-24" />

      <div className="container px-[5%] py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 border border-accent/50 text-accent text-sm font-medium mb-6 tracking-wider">
              KONSTRUKCJE ŻELBETOWE
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-none mb-6 animate-fade-up stagger-1 tracking-wide">
            ŻELBET DLA BUDOWNICTWA<br/>
            <span className="text-accent">PRZEMYSŁOWEGO</span><br/>
            I MIESZKANIOWEGO
          </h1>

          {/* Subtitle */}
          <p className="font-work text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-up stagger-2">
            Fundamenty, ściany, stropy, zbiorniki. Zespół specjalistów gotowy do wejścia na budowę.
            Tarnów i 4 województwa południowej Polski.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold group"
            >
              <a href="tel:696092434">
                Zadzwoń: 696 092 434
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleContactClick}
              className="border-white/30 text-white hover:bg-white hover:text-black hover:border-white px-8 py-6 text-lg font-semibold bg-transparent"
            >
              Wyślij projekt do wyceny
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-border max-w-2xl animate-fade-up stagger-4">
          {[
            { value: "4", label: "Województwa zasięgu" },
            { value: "24h", label: "Wycena projektu" },
            { value: "100%", label: "Własny zespół specjalistów" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-display text-2xl sm:text-3xl text-primary tracking-wide">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest">PRZEWIŃ</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  )
}
