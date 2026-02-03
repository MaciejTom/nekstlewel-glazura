import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { ServicesIconGridWireframe } from "@/components/wireframe/services-icon-grid-wireframe"
import {
  wireframeServicesIconGrid,
  wireframeIconGrid3,
  wireframeIconGrid6,
  wireframeIconGrid3Cta,
  wireframeIconGrid4Cta,
} from "@/content/wireframe/services-icon-grid"

export default function ServicesIconGridPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Services Icon Grid" description="Icon cards z centered header. Dynamiczny grid + opcjonalna CTA card. Brak obrazow." />

      <main>
        <SectionGroup title="Warianty">
          <ComponentLabel label="4 items → 4 in a row" variant="wireframe" />
          <ServicesIconGridWireframe content={wireframeServicesIconGrid} />

          <ComponentLabel label="3 items → 3 in a row" variant="wireframe" />
          <ServicesIconGridWireframe content={wireframeIconGrid3} />

          <ComponentLabel label="6 items → 3+3" variant="wireframe" />
          <ServicesIconGridWireframe content={wireframeIconGrid6} />

          <ComponentLabel label="3 items + CTA card → 4 in a row" variant="wireframe" />
          <ServicesIconGridWireframe content={wireframeIconGrid3Cta} />

          <ComponentLabel label="4 items + CTA card → 3+2 centered" variant="wireframe" />
          <ServicesIconGridWireframe content={wireframeIconGrid4Cta} />
        </SectionGroup>
      </main>
    </div>
  )
}
