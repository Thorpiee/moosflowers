import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MyWorkSection } from "@/components/my-work-section"
import { BrandStorySection } from "@/components/brand-story-section"
import { ServicesSection } from "@/components/services-section"
import { BespokeSection } from "@/components/bespoke-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StudioSection } from "@/components/studio-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MyWorkSection />
      <BrandStorySection />
      <ServicesSection />
      <BespokeSection />
      <TestimonialsSection />
      <StudioSection />
      <Footer />
    </main>
  )
}
