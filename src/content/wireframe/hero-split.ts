import type { HeroSplitContent } from "@/types"

export const wireframeHeroSplit: HeroSplitContent = {
  badge: "SECTION TAGLINE",
  headline: "Line One Goes Here\nLine Two Here\nAccent Phrase.",
  headlineAccent: "Accent Phrase.",
  subtitle:
    "Short description of this section, its value proposition and what the visitor should expect to find.",
  ctaPrimary: { text: "Get a Free Quote" },
  ctaSecondary: { text: "Our Process" },
  stats: [
    { icon: "icon", value: "00+", label: "Stat Label One" },
    { icon: "icon", value: "000+", label: "Stat Label Two" },
  ],
  imageBadge: { icon: "icon", value: "00 units", label: "Badge Label" },
}
