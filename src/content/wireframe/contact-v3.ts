import type { ContactContent } from "@/types/contact"

export const wireframeContactV3: ContactContent = {
  badge: "GET FREE ESTIMATE",
  title: "REACH OUT TO US IMMEDIATELY TO ARRANGE A CUSTOMISED QUOTATION FROM ONE OF OUR ASSESSORS.",
  description: "Contact us today to schedule a free consultation with one of our expert assessors.",
  showImage: false,
  backgroundImage: true,
  contactItems: [
    { icon: "call", label: "+123 (456) 789 00" },
    { icon: "email", label: "INFO@INTERY-DESIGN.COM" },
    { icon: "location", label: "12/A, NEW BOOTON TOWER, NYC, US" },
  ],
  formTitle: "SCHEDULE A FREE CONSULTATION",
  fields: [
    { label: "Full Name", placeholder: "e.g. alonso", type: "text", half: true },
    { label: "Email Address", placeholder: "e.g. jane@framer.com", type: "email", half: true },
    { label: "Phone Number", placeholder: "jane@framer.com", type: "tel", half: true },
    { label: "Subject", placeholder: "Select...", type: "text", half: true },
    { label: "Message", placeholder: "e.g. anything write here", type: "textarea" },
  ],
  submitText: "GET A QUOTE",
}
