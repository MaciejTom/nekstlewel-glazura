import type { ContactContent } from "@/types/contact"

export const wireframeContact: ContactContent = {
  badge: "SECTION TAGLINE",
  title: "Section Title Goes Here",
  description: "Short description of this section, its purpose and what the client can expect when reaching out.",
  formTitle: "Get in touch with us today!",
  fields: [
    { label: "First Name", placeholder: "Enter your first name", type: "text", half: true },
    { label: "Last Name", placeholder: "Enter your last name", type: "text", half: true },
    { label: "Email", placeholder: "Enter your email", type: "email", half: true },
    { label: "Phone", placeholder: "Enter your phone", type: "tel", half: true },
    { label: "Message", placeholder: "Type your message here...", type: "textarea" },
  ],
  submitText: "Send a Message",
}
