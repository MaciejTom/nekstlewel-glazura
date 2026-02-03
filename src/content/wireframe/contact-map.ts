import type { ContactMapContent } from "@/types/contact-map"

export const wireframeContactMap: ContactMapContent = {
  title: "Visit Our Office",
  description: "We'd love to meet you in person. Stop by our headquarters or reach out through any of the channels below.",
  details: [
    {
      icon: "location",
      title: "Our Address",
      content: "123 Business Avenue, Suite 100, New York, NY 10001",
    },
    {
      icon: "phone",
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: "email",
      title: "Email",
      content: "hello@company.com",
    },
    {
      icon: "clock",
      title: "Working Hours",
      content: "Monday – Friday: 9:00 AM – 6:00 PM",
    },
  ],
  socialLinks: [
    { label: "LinkedIn" },
    { label: "Twitter" },
    { label: "Instagram" },
  ],
}
