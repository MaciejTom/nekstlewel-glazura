import type { ContactCtaContent } from "@/types/contact-cta"

export const wireframeContactCta: ContactCtaContent = {
  badge: "Contact Us",
  title: "Let's Start a Conversation",
  description: "Ready to take the next step? Reach out to our team and let's discuss how we can help you achieve your goals.",
  details: [
    { icon: "phone", label: "Phone", value: "+1 (555) 123-4567" },
    { icon: "email", label: "Email", value: "hello@company.com" },
    { icon: "location", label: "Location", value: "New York, NY" },
  ],
  cta: { text: "Schedule a Call" },
}
