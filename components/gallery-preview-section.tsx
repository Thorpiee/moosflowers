import Image from "next/image"
import Link from "next/link"

const galleryImages = [
    { src: "/images/category-bouquets.jpg", alt: "Bespoke bouquet" },
    { src: "/images/wedding-1.jpg", alt: "Wedding florals" },
    { src: "/images/shop-look-main.jpg", alt: "Styled arrangement" },
    { src: "/images/category-weddings.jpg", alt: "Wedding centrepiece" },
    { src: "/images/shop-look-1.jpg", alt: "Table arrangement" },
    { src: "/images/newsletter-bg.jpg", alt: "Seasonal blooms" },
]

export function GalleryPreviewSection() {
    return (
        <section className="py-24 md:py-32 px-4 md:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">Portfolio</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">My Work</h2>
                    <div className="w-12 h-px bg-primary/40 mx-auto" />
                </div>

                {/* Grid - 3 columns, 2 rows */}
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {galleryImages.map((img, i) => (
                        <div key={i} className="group relative overflow-hidden aspect-square">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/bespoke-gallery"
                        className="inline-block border border-primary text-primary px-10 py-4 text-sm tracking-wide rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                        View Full Gallery
                    </Link>
                </div>
            </div>
        </section>
    )
}
