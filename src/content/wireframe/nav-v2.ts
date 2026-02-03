import type { NavContent } from "@/types/nav"

export const wireframeNavV2: NavContent = {
  logo: { icon: "handyman", text: "FIXMAN" },
  links: [
    { text: "O mnie", href: "#about" },
    { text: "Usługi", href: "#services" },
    { text: "Galeria", href: "#gallery" },
    { text: "Opinie", href: "#reviews" },
    { text: "Kontakt", href: "#contact" },
  ],
  cta: { text: "Zadzwoń Teraz", href: "#contact" },
}
