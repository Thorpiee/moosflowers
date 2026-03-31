import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"
import Image from "next/image"
import type { Metadata } from "next"
import { aboutSeoKeywords, baseSeoKeywords } from "@/lib/seo-keywords"

export const metadata: Metadata = {
    title: "About Moo's Flowers | Florist in Suffolk & Essex",
    description: "Meet Jaz of Moo's Flowers, a natural florist on the Suffolk-Essex border creating seasonal wedding flowers and bespoke arrangements for Ipswich and Colchester.",
    keywords: [...baseSeoKeywords, ...aboutSeoKeywords],
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
                        <h1 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-primary">About Me</h1>
                        <p className="mb-7 text-[0.98rem] leading-relaxed tracking-wide text-primary/78 sm:text-base md:mb-8">
                            I'm Jaz, a florist based on the Suffolk–Essex border, originally from the South Devon coast, creating natural, seasonal arrangements. My work celebrates the beauty of everyday moments; from dressing a table for supper to marking special occasions; with flowers that feel relaxed, joyful, and just a little bit wild.
                        </p>
                        <p className="mb-7 text-[0.98rem] leading-relaxed tracking-wide text-primary/78 sm:text-base md:mb-8">
                            I have a real interest in how flowers are grown, foraged, and cared for through the seasons. This curiosity shapes my approach, encouraging me to work with what's naturally available and to appreciate the character and uniqueness of each stem.
                        </p>
                        <p className="mb-7 text-[0.98rem] leading-relaxed tracking-wide text-primary/78 sm:text-base md:mb-8">
                            Each design begins with carefully chosen blooms, often influenced by my surroundings; largely the changing countryside seasons. Everything is thoughtfully arranged using natural materials and an eco-conscious approach wherever possible.
                        </p>
                        <p className="text-[0.98rem] leading-relaxed tracking-wide text-primary/78 sm:text-base">
                            Whether you're planning an event, celebrating something special, or simply want flowers in your home, my designs bring a soft, seasonal touch to any space.
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-border bg-card md:sticky md:top-28" delayMs={100}>
                        <Image
                            src="/jaz.webp"
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