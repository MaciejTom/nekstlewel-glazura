import type { ServiceCardsContent, ServiceCardItem } from "@/types"

const item = (n: number): ServiceCardItem => ({
  title: `Service Title ${["One", "Two", "Three", "Four", "Five"][n - 1] ?? n}`,
  description: "Short description of this service, its value and what the client gets.",
  features: ["Feature point one", "Feature point two", "Feature point three"],
})

const base = {
  title: "Section Title Goes Here",
  subtitle:
    "Brief description of this section and what services or features are presented below.",
} as const

// 5 items → 3 + 2 centered
export const wireframeServicesCards: ServiceCardsContent = {
  ...base,
  services: [item(1), item(2), item(3), item(4), item(5)],
}

// 4 items → 2 + 2
export const wireframeCards4: ServiceCardsContent = {
  ...base,
  services: [item(1), item(2), item(3), item(4)],
}

// 3 items → 3 in a row
export const wireframeCards3: ServiceCardsContent = {
  ...base,
  services: [item(1), item(2), item(3)],
}

// 3 items + CTA card → 2+2 (total=4)
export const wireframeCards3Cta: ServiceCardsContent = {
  ...base,
  services: [item(1), item(2), item(3)],
  ctaCard: {
    title: "Need Something Custom?",
    description: "We can tailor our services to your specific needs.",
    buttonText: "Book a Call",
  },
}

// 5 items + CTA card → 3+3 (total=6)
export const wireframeCards5Cta: ServiceCardsContent = {
  ...base,
  services: [item(1), item(2), item(3), item(4), item(5)],
  ctaCard: {
    title: "Need Something Custom?",
    description: "We can tailor our services to your specific needs.",
    buttonText: "Book a Call",
  },
}
