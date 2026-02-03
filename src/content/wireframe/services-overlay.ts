import type { ServiceOverlayContent, ServiceOverlayItem } from "@/types"

const item = (n: number): ServiceOverlayItem => ({
  icon: "icon",
  title: `Service Title ${["One", "Two", "Three", "Four", "Five"][n - 1] ?? n}`,
  description: "Short description of this service, its value and what the client gets.",
  features: ["Feature point one", "Feature point two", "Feature point three"],
  image: "",
  imageAlt: "Service image",
})

const base = {
  title: "Section Title Goes",
  titleBreak: "Here",
  subtitle:
    "Brief description of this section and what services or features are presented below.",
} as const

// 5 items → 3 + 2 centered
export const wireframeServicesOverlay: ServiceOverlayContent = {
  ...base,
  services: [item(1), item(2), item(3), item(4), item(5)],
  cta: {
    text: "Looking for something else?",
    buttonText: "Explore All Services",
    buttonIcon: "icon",
  },
}

// 4 items → 2 + 2
export const wireframeOverlay4: ServiceOverlayContent = {
  ...base,
  services: [item(1), item(2), item(3), item(4)],
}

// 3 items → 3 in a row
export const wireframeOverlay3: ServiceOverlayContent = {
  ...base,
  services: [item(1), item(2), item(3)],
}

// 3 items + CTA card → 3 + 1 centered
export const wireframeOverlay3Cta: ServiceOverlayContent = {
  ...base,
  services: [item(1), item(2), item(3)],
  ctaCard: {
    title: "Need Something Custom?",
    description: "We can tailor our services to your specific needs.",
    buttonText: "Contact Us",
  },
}

// 5 items + CTA card → 3 + 3 (last is CTA)
export const wireframeOverlay5Cta: ServiceOverlayContent = {
  ...base,
  services: [item(1), item(2), item(3), item(4), item(5)],
  ctaCard: {
    title: "Need Something Custom?",
    description: "We can tailor our services to your specific needs.",
    buttonText: "Contact Us",
  },
}
