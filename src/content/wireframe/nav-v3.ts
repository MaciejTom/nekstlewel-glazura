import type { NavContent } from "@/types/nav"

export const wireframeNavV3: NavContent = {
  logo: { text: "ALTERO" },
  links: [
    { text: "Home", href: "#" },
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
    { text: "Service", href: "#service" },
    { text: "Contact", href: "#contact" },
  ],
  cta: { text: "Get in touch", href: "#contact" },
  contactInfo: { location: "Los Angeles, CA", phone: "+1 (212) 555-0478" },
}
