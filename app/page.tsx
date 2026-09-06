import { Hero } from "@/components/hero"
import { FeaturesSection } from "@/components/features-section"
import { TechnologySection } from "@/components/technology-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
// CaseSection ready but not mounted until real metrics exist

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <TechnologySection />
      <CTASection />
    </main>
  )
}
