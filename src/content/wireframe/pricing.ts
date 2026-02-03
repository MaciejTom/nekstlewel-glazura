import type { PricingContent } from "@/types/pricing"

export const wireframePricing: PricingContent = {
  title: "Simple, Transparent Pricing",
  subtitle: "No hidden fees. Choose the plan that fits your needs.",
  tiers: [
    {
      label: "Standard",
      price: "$00",
      priceSuffix: "/mo",
      description: "Perfect for small businesses that want a managed solution with zero upfront cost.",
      features: [
        "Feature point one",
        "Feature point two",
        "Feature point three",
        "Feature point four",
      ],
      buttonText: "Get Monthly",
    },
    {
      label: "Premium",
      price: "$000",
      priceSuffix: "one-time",
      description: "Best for businesses with capital to invest upfront. You own everything forever.",
      features: [
        "Feature point one",
        "Feature point two",
        "Feature point three",
        "Feature point four",
      ],
      buttonText: "Get Started",
      featured: true,
    },
  ],
}
