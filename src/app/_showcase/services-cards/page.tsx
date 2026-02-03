import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { ServicesCardsWireframe } from "@/components/wireframe/services-cards-wireframe"
import { ServicesCardsSection } from "@/components/sections/services-cards-section"
import {
  wireframeServicesCards,
  wireframeCards4,
  wireframeCards3,
  wireframeCards3Cta,
  wireframeCards5Cta,
} from "@/content/wireframe/services-cards"
import { tomArtServices } from "@/content/tom-art/services"

export default function ServicesCardsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Services Cards" description="Image cards + features list. Dynamiczny grid + opcjonalna CTA card." />

      <main>
        <SectionGroup title="Warianty">
          <ComponentLabel label="5 items → 3+2 centered" variant="wireframe" />
          <ServicesCardsWireframe content={wireframeServicesCards} />

          <ComponentLabel label="4 items → 2+2" variant="wireframe" />
          <ServicesCardsWireframe content={wireframeCards4} />

          <ComponentLabel label="3 items → 3 in a row" variant="wireframe" />
          <ServicesCardsWireframe content={wireframeCards3} />

          <ComponentLabel label="3 items + CTA card → 2+2" variant="wireframe" />
          <ServicesCardsWireframe content={wireframeCards3Cta} />

          <ComponentLabel label="5 items + CTA card → 3+3" variant="wireframe" />
          <ServicesCardsWireframe content={wireframeCards5Cta} />
        </SectionGroup>

        <SectionGroup title="Styled">
          <ComponentLabel label="ServicesCardsSection — serif, shadow-md, h2-accent" variant="styled" />
          <ServicesCardsSection content={tomArtServices} />
        </SectionGroup>
      </main>
    </div>
  )
}
