import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Moo's Flowers | Florist in Suffolk & Essex",
    description: "Meet Jaz of Moo's Flowers, a natural florist on the Suffolk-Essex border creating seasonal wedding flowers and bespoke arrangements for Ipswich and Colchester.",
    alternates: {
        canonical: '/about',
    },
}

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="section-space layout-shell">
                <div className="layout-container grid items-start gap-10 md:grid-cols-[0.55fr_0.45fr] lg:gap-14 xl:gap-16">
                    <RevealOnScroll>
                        <h1 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-primary">About Moo's Flowers, Florist in Suffolk & Essex</h1>
                        <p className="mb-7 text-[0.98rem] leading-relaxed tracking-wide text-primary/78 sm:text-base md:mb-8">
                            I’m Jaz, the florist behind Moo's Flowers, working from the Suffolk-Essex border and creating natural, seasonal flowers for weddings, events, gifts, and home arrangements across Suffolk, Essex, Ipswich, Colchester, and the surrounding countryside.
                        </p>
                        <p className="mb-7 text-[0.98rem] leading-relaxed tracking-wide text-primary/78 sm:text-base md:mb-8">
                            As a wedding florist in Suffolk and Essex, I am drawn to flowers with movement, texture, and seasonality. I love using naturally expressive stems and an eco-conscious approach to design arrangements that feel generous, elegant, and just a little bit wild.
                        </p>
                        <p className="mb-7 text-[0.98rem] leading-relaxed tracking-wide text-primary/78 sm:text-base md:mb-8">
                            Many clients discover Moo's Flowers when searching for a local florist in Ipswich, floral arrangements for the Suffolk countryside, or a bespoke florist for Colchester celebrations. Every design begins with carefully chosen blooms shaped by the season, the setting, and the feeling you want to create.
                        </p>
                        <p className="text-[0.98rem] leading-relaxed tracking-wide text-primary/78 sm:text-base">
                            Whether you are planning a wedding, marking a special occasion, or simply want flowers at home, I create arrangements that feel personal, natural, and beautifully at ease in both Suffolk and Essex homes and celebrations.
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-border bg-card md:sticky md:top-28" delayMs={100}>
                        <Image
                            src="/jaz.jpg"
                            alt="Jaz, florist behind Moo's Flowers on the Suffolk-Essex border"
                            fill
                            className="object-cover"
                            priority
                        />
                    </RevealOnScroll>
                </div>
            </section>

            <Footer />
        </main>
    )
}
