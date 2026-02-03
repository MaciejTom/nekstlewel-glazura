import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { ServicesOverlayWireframe } from "@/components/wireframe/services-overlay-wireframe"
import { ServicesOverlaySection } from "@/components/sections/services-overlay-section"
import {
  wireframeServicesOverlay,
  wireframeOverlay4,
  wireframeOverlay3,
  wireframeOverlay3Cta,
  wireframeOverlay5Cta,
} from "@/content/wireframe/services-overlay"
import { tomArtServicesOverlay } from "@/content/tom-art/services-overlay"

export default function ServicesOverlayPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Services Overlay" description="Overlay cards z image bg, gradient, content na dole. Dynamiczny grid + opcjonalna CTA card." />

      <main>
        <SectionGroup title="Warianty">
          <ComponentLabel label="5 items → 3+2 centered" variant="wireframe" />
          <ServicesOverlayWireframe content={wireframeServicesOverlay} />

          <ComponentLabel label="4 items → 2+2" variant="wireframe" />
          <ServicesOverlayWireframe content={wireframeOverlay4} />

          <ComponentLabel label="3 items → 3 in a row" variant="wireframe" />
          <ServicesOverlayWireframe content={wireframeOverlay3} />

          <ComponentLabel label="3 items + CTA card → 2+2" variant="wireframe" />
          <ServicesOverlayWireframe content={wireframeOverlay3Cta} />

          <ComponentLabel label="5 items + CTA card → 3+3" variant="wireframe" />
          <ServicesOverlayWireframe content={wireframeOverlay5Cta} />
        </SectionGroup>

        <SectionGroup title="Styled">
          <ComponentLabel label="ServicesOverlaySection — gradient, hover scale, expanding line" variant="styled" />
          <ServicesOverlaySection content={tomArtServicesOverlay} />
        </SectionGroup>
      </main>
    </div>
  )
}
