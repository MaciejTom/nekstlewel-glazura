import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { OriginalIframe } from "@/components/showcase/original-iframe"
import { ContactWireframe } from "@/components/wireframe/contact-wireframe"
import { ContactCardsWireframe } from "@/components/wireframe/contact-cards-wireframe"
import { ContactInfoCardsWireframe } from "@/components/wireframe/contact-info-cards-wireframe"
import { ContactMapWireframe } from "@/components/wireframe/contact-map-wireframe"
import { ContactCtaWireframe } from "@/components/wireframe/contact-cta-wireframe"
import { wireframeContact } from "@/content/wireframe/contact"
import { wireframeContactV2 } from "@/content/wireframe/contact-v2"
import { wireframeContactV3 } from "@/content/wireframe/contact-v3"
import { wireframeContactInfoCards } from "@/content/wireframe/contact-info-cards"
import { wireframeContactMap } from "@/content/wireframe/contact-map"
import { wireframeContactCta } from "@/content/wireframe/contact-cta"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Contact" description="Formularz kontaktowy + sekcje info (bez formularza). 6 wariantów." />

      <main>
        {/* ── Z FORMULARZEM ─────────────────────────────────── */}
        <SectionGroup title="V1 — BuildPro (2-col: info + form)">
          <ComponentLabel label="Oryginał — 2-col: info/image left + form right" variant="styled" />
          <OriginalIframe src="/originals/contact-v1.html" height={700} />
          <ComponentLabel label="Wireframe — 2-col: info/image left + form right" variant="wireframe" />
          <ContactWireframe content={wireframeContact} />
        </SectionGroup>

        <SectionGroup title="V2 — Contact Us (form + map + icon cards)">
          <ComponentLabel label="Oryginał — 2-col: form + headline LEFT, map + icon cards RIGHT" variant="styled" />
          <OriginalIframe src="/originals/contact-v2.html" height={700} />
          <ComponentLabel label="Wireframe — form left + image/map + info cards + social right" variant="wireframe" />
          <ContactCardsWireframe content={wireframeContactV2} />
        </SectionGroup>

        <SectionGroup title="V3 — Interior Design (bg image + contact items + form)">
          <ComponentLabel label="Oryginał — background image + contact items left + form card right" variant="styled" />
          <OriginalIframe src="/originals/contact-v3.html" height={600} />
          <ComponentLabel label="Wireframe — bg indicator + contact items left + form right" variant="wireframe" />
          <ContactWireframe content={wireframeContactV3} />
        </SectionGroup>

        {/* ── BEZ FORMULARZA ────────────────────────────────── */}
        <SectionGroup title="Info Cards (bez formularza)">
          <ComponentLabel label="Wireframe — 4-col grid: icon cards z kontaktem" variant="wireframe" />
          <ContactInfoCardsWireframe content={wireframeContactInfoCards} />
        </SectionGroup>

        <SectionGroup title="Map Split (bez formularza)">
          <ComponentLabel label="Wireframe — 2-col: mapa left + dane kontaktowe right" variant="wireframe" />
          <ContactMapWireframe content={wireframeContactMap} />
        </SectionGroup>

        <SectionGroup title="Contact CTA (bez formularza)">
          <ComponentLabel label="Wireframe — centered: badge + tytuł + inline details + CTA button" variant="wireframe" />
          <ContactCtaWireframe content={wireframeContactCta} />
        </SectionGroup>
      </main>
    </div>
  )
}
