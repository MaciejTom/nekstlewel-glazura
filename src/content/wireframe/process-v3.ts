import type { ProcessGridContent } from "@/types/process-grid"

export const wireframeProcessV3: ProcessGridContent = {
  title: "Our Streamlined 6-Step Process",
  subtitle: "From initial contact to final delivery, we ensure a seamless and transparent journey for every client.",
  steps: [
    {
      icon: "mail",
      badge: "01",
      title: "Initial Inquiry",
      description: "The first step is for you to reach out to us with your initial questions or project ideas.",
    },
    {
      icon: "search",
      badge: "02",
      title: "Discovery & Consultation",
      description: "We schedule a call to dive deeper into your needs, goals, and vision for the project.",
    },
    {
      icon: "document",
      badge: "03",
      title: "Customized Proposal",
      description: "Based on our consultation, we prepare a detailed proposal outlining the scope, timeline, and investment.",
    },
    {
      icon: "rocket",
      badge: "04",
      title: "Project Kick-off",
      description: "Once the proposal is approved, we officially start the project with a kick-off meeting to align on all details.",
    },
    {
      icon: "sync",
      badge: "05",
      title: "Execution & Review",
      description: "Our team gets to work, providing regular updates and incorporating your feedback at key milestones.",
    },
    {
      icon: "check",
      badge: "06",
      title: "Final Delivery & Support",
      description: "We deliver the final product and provide ongoing support to ensure your continued success.",
    },
  ],
  cta: { text: "Begin Your Project" },
}
