import type { FooterContent } from "@/types/footer"

export const wireframeFooter: FooterContent = {
  cta: {
    title: "Ready to start your next project?",
    buttonText: "Get a Quote",
  },
  brand: {
    icon: "logo",
    name: "BRANDNAME",
    description: "Short description of the company, its mission and what services it provides to clients.",
  },
  socialLinks: [
    { text: "Twitter", href: "#" },
    { text: "LinkedIn", href: "#" },
    { text: "Instagram", href: "#" },
  ],
  contactInfo: {
    address: "1234 Main Street, City, State 12345",
    email: "hello@example.com",
    phone: "(555) 000-0000",
    label: "Need help?",
  },
  columns: [
    {
      title: "Pages",
      links: [
        { text: "About Us", href: "#" },
        { text: "Projects", href: "#" },
        { text: "Services", href: "#" },
        { text: "Blog", href: "#" },
        { text: "FAQ", href: "#" },
        { text: "Contact", href: "#" },
      ],
    },
    {
      title: "Utility",
      links: [
        { text: "Privacy Policy", href: "#" },
        { text: "Terms & Conditions", href: "#" },
      ],
    },
  ],
  copyright: "© 2025 BrandName. All rights reserved.",
  bottomLinks: [
    { text: "Cookie Policy" },
    { text: "English" },
  ],
}
