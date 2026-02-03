import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { ServicesEditorialWireframe } from "@/components/wireframe/services-editorial-wireframe"
import { ServicesEditorialSection } from "@/components/sections/services-editorial-section"
import { wireframeServicesEditorial } from "@/content/wireframe/services-editorial"
import { tomArtServicesEditorial } from "@/content/tom-art/services-editorial"

export default function ServicesEditorialPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Services Editorial" description="Alternating image+text rows z step badges." />

      <main>
        <SectionGroup title="Wireframe">
          <ComponentLabel label="Alternating image+text rows, step badges" variant="wireframe" />
          <ServicesEditorialWireframe content={wireframeServicesEditorial} />
        </SectionGroup>

        <SectionGroup title="Styled">
          <ComponentLabel label="ServicesEditorialSection — serif, Material Symbols, dekoracyjne ramki" variant="styled" />
          <ServicesEditorialSection content={tomArtServicesEditorial} />
        </SectionGroup>
      </main>
    </div>
  )
}
