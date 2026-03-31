import { Header } from "@/components/header"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { baseSeoKeywords, bespokeGallerySeoKeywords } from "@/lib/seo-keywords"

export const metadata: Metadata = {
    title: "Bespoke Wedding Flowers | Suffolk & Essex Florist",
    description: "Browse bespoke wedding flowers, bouquets, and event arrangements by Moo's Flowers, a natural florist serving Suffolk, Essex, Ipswich, and Colchester.",
    keywords: [...baseSeoKeywords, ...bespokeGallerySeoKeywords],
    alternates: {
        canonical: '/bespoke-gallery',
    },
}

export default function BespokeGalleryPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <GallerySection />
            <Footer />
        </main>
    )
}
