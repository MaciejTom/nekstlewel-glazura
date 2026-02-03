import type { ContactCardsContent } from "@/types/contact-cards"

export const wireframeContactV2: ContactCardsContent = {
  title: "LET'S BUILD TOGETHER",
  description: "We're ready to bring your vision to life. Reach out to us to start the conversation.",
  formTitle: "Send us a message",
  fields: [
    { label: "Full Name", placeholder: "Enter your full name", type: "text", half: true },
    { label: "Email Address", placeholder: "Enter your email address", type: "email", half: true },
    { label: "Phone Number", placeholder: "Enter your phone number", type: "tel", half: true },
    { label: "Subject", placeholder: "e.g., Project Inquiry", type: "text", half: true },
    { label: "Message", placeholder: "Tell us about your project...", type: "textarea" },
  ],
  submitText: "SEND MESSAGE",
  infoCards: [
    { icon: "phone", title: "Phone", content: "+1 (555) 000-0000" },
    { icon: "mail", title: "Email", content: "hello@company.com" },
    { icon: "location", title: "Address", content: "123 Main Street, Suite 100" },
    { icon: "clock", title: "Hours", content: "Mon–Fri: 9AM – 6PM" },
  ],
  socialLinks: [
    { label: "Facebook" },
    { label: "Twitter" },
    { label: "LinkedIn" },
    { label: "Instagram" },
  ],
}
