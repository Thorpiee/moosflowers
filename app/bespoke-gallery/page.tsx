import { Header } from "@/components/header"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export const metadata = {
    title: "Bespoke Gallery | Moo's Flowers",
    description: "Browse my bespoke floral arrangements and custom bouquets.",
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
