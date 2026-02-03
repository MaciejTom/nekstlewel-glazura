import type { PricingContent } from "@/types/pricing"

export const wireframePricingV2: PricingContent = {
  title: "Choose the speed that suits your lifestyle whether you stream, game, work from home, or run a smart home.",
  subtitle: "All plans come with 24/7 customer support, no data caps, and free modem rental.",
  tiers: [
    {
      label: "Standard",
      price: "$19",
      priceSuffix: "/month",
      description: "A reliable plan for everyday browsing and streaming.",
      features: [
        "Speeds up to 100 Mbps",
        "No daily limits",
        "100% uptime guarantee",
        "24/7 Free support",
      ],
      buttonText: "Choose a Plan",
    },
    {
      label: "Extended",
      price: "$59",
      priceSuffix: "/month",
      description: "Best for power users who need faster speeds and more bandwidth.",
      features: [
        "Speeds up to 100 Mbps",
        "No daily limits",
        "100% uptime guarantee",
        "24/7 Free support",
      ],
      buttonText: "Choose a Plan",
      featured: true,
    },
    {
      label: "Premium",
      price: "$99",
      priceSuffix: "/month",
      description: "Ultimate performance for demanding households and businesses.",
      features: [
        "Speeds up to 100 Mbps",
        "No daily limits",
        "100% uptime guarantee",
        "24/7 Free support",
      ],
      buttonText: "Choose a Plan",
    },
  ],
}
