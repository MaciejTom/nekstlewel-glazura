import type { ServiceOverlayContent } from "@/types"

export const tomArtServicesOverlay: ServiceOverlayContent = {
  title: "Od ścian po podłogi — pełen zakres prac",
  titleBreak: "remontowych",
  subtitle:
    "Zrobię to, co trzeba — od drobnych poprawek po remont całego domu. Każdą pracę wyceniam na miejscu, bez niespodzianek.",

  services: [
    {
      icon: "format_paint",
      title: "Tynki i gładzie",
      description:
        "Profesjonalne przygotowanie ścian pod malowanie. Gwarancja gładkich, równych powierzchni i estetycznego wykończenia.",
      features: [
        "Tynki tradycyjne i maszynowe",
        "Gładzie gipsowe i polimerowe",
        "Naprawa pęknięć i ubytków",
      ],
      image: "/nowe.png",
      imageAlt: "Tynki i gładzie",
    },
    {
      icon: "palette",
      title: "Malowanie wnętrz",
      description:
        "Precyzyjne malowanie mieszkań i domów z dbałością o czystość. Zabezpieczenie mebli i podłóg w standardzie.",
      features: [
        "Malowanie ścian i sufitów",
        "Malowanie dekoracyjne",
        "Gruntowanie powierzchni",
      ],
      image: "/nowe2.png",
      imageAlt: "Malowanie wnętrz",
    },
    {
      icon: "grid_view",
      title: "Zabudowy G-K",
      description:
        "Nowoczesne rozwiązania przestrzenne. Tworzymy nowe układy pomieszczeń oraz dekoracyjne elementy sufitowe.",
      features: [
        "Sufity podwieszane",
        "Ścianki działowe",
        "Zabudowy rur i instalacji",
      ],
      image: "/nowe3.png",
      imageAlt: "Zabudowy G-K",
    },
    {
      icon: "straighten",
      title: "Układanie płytek i paneli",
      description:
        "Kompleksowe prace podłogowe. Od precyzyjnego układania gresu po szybki montaż paneli podłogowych.",
      features: [
        "Glazura i terakota",
        "Panele winylowe i laminowane",
        "Listwy przypodłogowe",
      ],
      image: "/nowe.png",
      imageAlt: "Układanie płytek i paneli",
    },
    {
      icon: "handyman",
      title: 'Montaże i "Złota Rączka"',
      description:
        "Drobne naprawy i prace montażowe, które wymagają fachowej ręki. Pomoc w nagłych awariach.",
      features: [
        "Składanie mebli",
        "Biały montaż (umywalki)",
        "Wymiana gniazdek",
      ],
      image: "/nowe2.png",
      imageAlt: "Montaże i Złota Rączka",
    },
  ],

  cta: {
    text: "Nie widzisz usługi, której szukasz?",
    buttonText: "Zapytaj o wycenę",
    buttonIcon: "call",
  },
}
