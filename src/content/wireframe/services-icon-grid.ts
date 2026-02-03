import type { ServiceIconGridContent, ServiceIconGridItem } from "@/types"

const item = (n: number): ServiceIconGridItem => ({
  icon: "icon",
  title: `Service Title ${["One", "Two", "Three", "Four", "Five", "Six"][n - 1] ?? n}`,
  description:
    "Short description of this service, its value and what the client gets.",
})

const base = {
  tagline: "SECTION TAGLINE",
  title: "Section Title Goes Here",
  subtitle:
    "Short description of this section and its value proposition.",
}

// 4 items → 4 in a row
export const wireframeServicesIconGrid: ServiceIconGridContent = {
  ...base,
  services: [item(1), item(2), item(3), item(4)],
}

// 3 items → 3 in a row
export const wireframeIconGrid3: ServiceIconGridContent = {
  ...base,
  services: [item(1), item(2), item(3)],
}

// 6 items → 3+3
export const wireframeIconGrid6: ServiceIconGridContent = {
  ...base,
  services: [item(1), item(2), item(3), item(4), item(5), item(6)],
}

// 3 items + CTA card → 4 in a row (total=4)
export const wireframeIconGrid3Cta: ServiceIconGridContent = {
  ...base,
  services: [item(1), item(2), item(3)],
  ctaCard: {
    title: "Need Something Custom?",
    description: "We can tailor our services to your specific needs.",
    buttonText: "Schedule a Demo",
  },
}

// 4 items + CTA card → 3+2 centered (total=5)
export const wireframeIconGrid4Cta: ServiceIconGridContent = {
  ...base,
  services: [item(1), item(2), item(3), item(4)],
  ctaCard: {
    title: "Need Something Custom?",
    description: "We can tailor our services to your specific needs.",
    buttonText: "Schedule a Demo",
  },
}
