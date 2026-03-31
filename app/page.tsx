import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MyWorkSection } from "@/components/my-work-section"
import { BrandStorySection } from "@/components/brand-story-section"
import { BespokeSection } from "@/components/bespoke-section"
import { StudioSection } from "@/components/studio-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { baseSeoKeywords, homeSeoKeywords } from "@/lib/seo-keywords"

export const metadata: Metadata = {
  title: "Moo's Flowers | Florist in Suffolk & Essex",
  description: "Natural, seasonal florist on the Suffolk-Essex border creating wedding flowers, gifts, and bespoke arrangements for Ipswich, Colchester, and beyond.",
  keywords: [...baseSeoKeywords, ...homeSeoKeywords],
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="section-divider" aria-hidden="true" />
      <MyWorkSection />
      <div className="section-divider" aria-hidden="true" />
      <BrandStorySection />
      <div className="section-divider" aria-hidden="true" />
      <BespokeSection />
      <div className="section-divider" aria-hidden="true" />
      <StudioSection />
      <div className="section-divider" aria-hidden="true" />
      <Footer />
    </main>
  )
}
