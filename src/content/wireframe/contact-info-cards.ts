import type { ContactInfoCardsContent } from "@/types/contact-info-cards"

export const wireframeContactInfoCards: ContactInfoCardsContent = {
  title: "Get in Touch",
  subtitle: "Have questions? We're here to help. Reach out through any of these channels.",
  cards: [
    {
      icon: "location",
      title: "Visit Us",
      content: "123 Business Ave, Suite 100\nNew York, NY 10001",
      linkText: "Get Directions",
    },
    {
      icon: "phone",
      title: "Call Us",
      content: "+1 (555) 123-4567\nMon-Fri 9AM-6PM",
      linkText: "Call Now",
    },
    {
      icon: "email",
      title: "Email Us",
      content: "hello@company.com\nsupport@company.com",
      linkText: "Send Email",
    },
    {
      icon: "chat",
      title: "Live Chat",
      content: "Available 24/7\nAvg. response: 2 min",
      linkText: "Start Chat",
    },
  ],
}
