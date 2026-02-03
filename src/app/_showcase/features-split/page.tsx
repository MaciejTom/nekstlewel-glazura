import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { FeaturesSplitWireframe } from "@/components/wireframe/features-split-wireframe"
import { wireframeFeaturesSplit } from "@/content/wireframe/features-split"

export default function FeaturesSplitPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Features Split" description="2-col split: tagline + title + features checklist + CTA (lewa) + image (prawa). Dekoracje na obrazku w spec." />

      <main>
        <SectionGroup title="Wireframe">
          <ComponentLabel label="6 features, 2-col grid, CTA button" variant="wireframe" />
          <FeaturesSplitWireframe content={wireframeFeaturesSplit} />
        </SectionGroup>
      </main>
    </div>
  )
}
