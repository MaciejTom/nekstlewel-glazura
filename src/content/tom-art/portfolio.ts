import type { PortfolioContent } from '@/types'

export const tomArtPortfolio: PortfolioContent = {
  tagline: "/ PORTFOLIO",
  title: "OUR",
  titleAccent: "WORK",

  stats: [
    { value: "50+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction", highlight: true }
  ],

  projects: [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      specs: "React + Node.js",
      image: "/1.jpg",
      featured: true
    },
    {
      title: "Brand Identity",
      category: "Design",
      specs: "Logo + Guidelines",
      image: "/3.jpg"
    },
    {
      title: "Mobile App",
      category: "Development",
      specs: "React Native",
      image: "/2.jpg"
    },
    {
      title: "Marketing Campaign",
      category: "Digital Marketing",
      specs: "SEO + Social",
      image: "/4.jpg",
      wide: true
    }
  ],

  galleryButton: {
    text: "View All Projects",
    href: "#gallery"
  }
}
