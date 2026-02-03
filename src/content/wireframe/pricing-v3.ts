import type { PricingTableContent } from "@/types/pricing-table"

export const wireframePricingV3: PricingTableContent = {
  title: "Find the Plan That's Right for You",
  subtitle: "Choose the perfect plan to fit your needs. Simple, transparent pricing for teams of all sizes.",
  tiers: [
    {
      name: "Basic",
      description: "For individuals",
      price: "$19",
      priceSuffix: "/mo",
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      description: "For small teams",
      price: "$49",
      priceSuffix: "/mo",
      buttonText: "Start Free Trial",
      featured: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "$99",
      priceSuffix: "/mo",
      buttonText: "Contact Sales",
    },
  ],
  featureSections: [
    {
      sectionTitle: "Core Features",
      features: [
        { name: "Core Feature A", availability: [true, true, true] },
        { name: "Core Feature B", availability: [true, true, true] },
        { name: "Advanced Feature C", availability: [false, true, true] },
        { name: "Enterprise Feature D", availability: [false, false, true] },
      ],
    },
    {
      sectionTitle: "Analytics",
      features: [
        { name: "Basic Analytics", availability: [true, true, true] },
        { name: "Advanced Analytics", availability: [false, true, true] },
        { name: "Custom Analytics", availability: [false, false, true] },
      ],
    },
    {
      sectionTitle: "Support",
      features: [
        { name: "Standard Support", availability: [true, true, true] },
        { name: "Priority Support", availability: [false, true, true] },
        { name: "Dedicated Support", availability: [false, false, true] },
      ],
    },
  ],
}
