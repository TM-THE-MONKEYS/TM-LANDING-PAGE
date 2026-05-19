import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { FeaturesSection } from "@/components/features-section"
import { TechnologySection } from "@/components/technology-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main>
      <Hero3D />
      <AboutSection />
      <FeaturesSection />
      <TechnologySection />
      <CTASection />
    </main>
  )
}
