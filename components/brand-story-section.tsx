import Image from "next/image"
import Link from "next/link"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"

export function BrandStorySection() {
    return (
        <section className="section-space bg-secondary layout-shell">
            <div className="layout-container grid items-center gap-10 md:grid-cols-[0.52fr_0.48fr] md:gap-12 lg:gap-20 xl:gap-24">
                {/* Image */}
                <RevealOnScroll className="relative aspect-[5/6] overflow-hidden md:aspect-[4/5]">
                    <Image
                        src="/whitebespoke.webp"
                        alt="Moo's Flowers studio"
                        fill
                        className="object-cover"
                    />
                    {/* Decorative border */}
                    <div className="absolute inset-4 border border-border/80 pointer-events-none" />
                </RevealOnScroll>

                {/* Text */}
                <RevealOnScroll className="flex flex-col justify-center" delayMs={80}>
                    <h2 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight text-primary">
                        My Story
                    </h2>
                    <div className="w-10 h-px bg-primary/40 mb-6" />
                    <p className="mb-4 text-[0.98rem] leading-relaxed text-muted-foreground sm:text-base xl:text-lg">
                        I’m Jaz, the florist behind Moo's Flowers, creating natural, seasonal arrangements from the Suffolk-Essex border for weddings, gatherings, gifts, and homes that call for something thoughtful and beautifully understated.
                    </p>
                    <p className="mb-4 text-[0.98rem] leading-relaxed text-muted-foreground sm:text-base xl:text-lg">
                        I have a real interest in how flowers are grown, foraged, and cared for through the seasons. This curiosity shapes my approach, encouraging me to work with what’s naturally available and to appreciate the character and uniqueness of each stem.
                    </p>
                    <p className="mb-4 text-[0.98rem] leading-relaxed text-muted-foreground sm:text-base xl:text-lg">
                        Each design begins with carefully chosen blooms, often influenced by my surroundings; largely the changing countryside seasons. Everything is thoughtfully arranged using natural materials and an eco-conscious approach wherever possible.
                    </p>
                    <p className="mb-7 text-[0.98rem] leading-relaxed text-muted-foreground sm:text-base xl:text-lg md:mb-8">
                        Whether you are looking for a florist in Suffolk, a florist in Essex, or bespoke flowers near Ipswich and Colchester, my work brings a soft, seasonal touch to each setting.
                    </p>
                    <Link
                        href="/about"
                        className="btn-premium self-start text-sm tracking-wide text-primary underline underline-offset-4 hover:opacity-70"
                    >
                        Learn More About Me
                    </Link>
                </RevealOnScroll>
            </div>
        </section>
    )
}
