import type { FooterNewsletterContent } from "@/types/footer-newsletter"

export const wireframeFooterV3: FooterNewsletterContent = {
  brand: {
    name: "ALTERO",
    phone: "+1 (212) 555-0478",
    email: "hello@alteroconsulting.com",
  },
  columns: [
    {
      title: "SITE",
      links: [
        { text: "Home" },
        { text: "About" },
        { text: "Projects" },
        { text: "Service" },
        { text: "Contact" },
      ],
    },
  ],
  newsletter: {
    title: "NEWSLETTER",
    placeholder: "Enter your email address",
  },
  copyright: "Created by Lunis. All rights reserved.",
  bottomBadge: "ALTERO",
}
