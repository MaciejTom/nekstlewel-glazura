import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { HeroWireframe } from "@/components/wireframe/hero-wireframe"
import { HeroSplitWireframe } from "@/components/wireframe/hero-split-wireframe"
import { wireframeHero } from "@/content/wireframe/hero"
import { wireframeHeroSplit } from "@/content/wireframe/hero-split"

export default function HeroPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Hero" description="Full-screen (bg image) i Split (2-kolumny: content + image)." />

      <main>
        <SectionGroup title="Full-screen">
          <ComponentLabel label="Full-screen, badge + 3-line headline + CTA + stats + scroll" variant="wireframe" />
          <HeroWireframe content={wireframeHero} />
        </SectionGroup>

        <SectionGroup title="Split">
          <ComponentLabel label="2-col grid, content left + image right, stats inline, image badge" variant="wireframe" />
          <HeroSplitWireframe content={wireframeHeroSplit} />
        </SectionGroup>
      </main>
    </div>
  )
}
