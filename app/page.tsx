import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BespokeSection } from "@/components/bespoke-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StudioSection } from "@/components/studio-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BespokeSection />
      <TestimonialsSection />
      <StudioSection />
      <Footer />
    </main>
  )
}
