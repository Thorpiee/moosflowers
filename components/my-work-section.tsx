"use client"

import Image from "next/image"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"

type WorkItem = {
    title: string
    label: string
    image: string
    alt: string
}

const workItems: WorkItem[] = [
    {
        title: "Christmas Wreath",
        label: "Seasonal",
        image: "/flowers1.jpg",
        alt: "Seasonal Christmas wreath by Moo's Flowers on the Suffolk-Essex border",
    },
    {
        title: "Living Wreath",
        label: "Seasonal",
        image: "/flowers2.jpg",
        alt: "Living wreath crafted by Moo's Flowers, natural florist in Essex",
    },
    {
        title: "Structured Hand-tied",
        label: "everyday",
        image: "/flowers3.jpg",
        alt: "Structured hand-tied bouquet by Moo's Flowers near Ipswich",
    },
    {
        title: "Natural Living Wreath",
        label: "Seasonal",
        image: "/flowers4.jpg",
        alt: "Natural living wreath created by Moo's Flowers for a Colchester home",
    },
]

export function MyWorkSection() {
    return (
        <section className="section-space bg-background layout-shell" aria-labelledby="my-work-heading">
            <div className="layout-container">
                <RevealOnScroll className="mb-9 md:mb-10">
                    <div className="max-w-3xl">
                        <h2 id="my-work-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary tracking-wide">
                            Seasonal Flowers for Weddings, Gifts & Home
                        </h2>
                        <div className="mt-4 h-px w-28 bg-primary/30" />
                        <p className="mt-5 text-[0.98rem] sm:text-base md:text-lg xl:text-xl text-primary/80 leading-relaxed">
                            Explore floral arrangements for weddings, events, gifts, and home styling across Suffolk, Essex, Ipswich, and Colchester.
                        </p>
                    </div>
                </RevealOnScroll>

                <div
                    className="flex md:grid md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6 xl:gap-7 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2"
                    role="list"
                    aria-label="Floral portfolio showcase"
                >
                    {workItems.map((item, index) => (
                        <RevealOnScroll
                            key={item.title}
                            as="article"
                            delayMs={index * 70}
                            role="listitem"
                            className="group min-w-[84%] sm:min-w-[56%] md:min-w-0 bg-card border border-border shadow-[0_8px_30px_rgba(48,66,57,0.08)] p-4 sm:p-5 md:p-6 flex flex-col snap-start transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_36px_rgba(48,66,57,0.14)]"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden border border-border">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="mt-4 flex items-start justify-between gap-3">
                                <div>
                                    <p className="text-xs tracking-[0.16em] uppercase text-primary/65">{item.label}</p>
                                    <h3 className="mt-2 font-serif text-[1.22rem] sm:text-[1.3rem] xl:text-2xl text-primary leading-snug">{item.title}</h3>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    )
}
