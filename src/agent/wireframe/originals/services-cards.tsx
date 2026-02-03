/**
 * Original styled component: Services Cards Section
 * Source: src/components/sections/services-cards-section.tsx
 *
 * Wireframe: src/components/wireframe/services-cards-wireframe.tsx
 * Spec: src/agent/wireframe/specs/services-cards.md
 *
 * Layout: left-aligned header + flex-wrap image cards (3+2 for 5 items)
 * Dekoracje: font-serif, shadow-md, rounded-lg, h2-accent, bg-primary dots
 */

import Image from "next/image"
import { ImageIcon } from "lucide-react"
import type { ServiceCardsContent } from "@/types"

const s = {
  section: "bg-background section-spacing",
  container: "container mx-auto px-6",

  // Header
  header: "max-w-2xl mb-16",
  title: "text-3xl md:text-4xl font-serif font-bold text-foreground h2-accent",
  subtitle: "mt-6 text-muted-foreground text-lg leading-relaxed",

  // Grid: 3 top + 2 bottom centered
  gridWrapper: "flex flex-col gap-6",
  gridTop: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  gridBottom: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[66%] mx-auto",
  // Fallback for <=3 items
  gridFlat: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",

  // Card
  card: "bg-card rounded-lg shadow-md overflow-hidden border border-border/50",
  cardImage: "relative w-full aspect-video bg-muted",
  cardImageInner: "object-cover",
  cardPlaceholder: "w-full h-full flex items-center justify-center",
  cardPlaceholderIcon: "w-10 h-10 text-muted-foreground/20",
  cardBody: "p-6",
  cardTitle: "text-lg font-serif font-semibold text-foreground mb-3",
  cardDesc: "text-muted-foreground text-sm leading-relaxed mb-4",

  // Feature list
  featureList: "space-y-2",
  featureItem: "flex items-start gap-2 text-sm text-muted-foreground",
  featureDot: "w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0",
}
