"use client"

import Image from "next/image"

type WorkItem = {
    title: string
    label: string
    image: string
    alt: string
}

const workItems: WorkItem[] = [
    {
        title: "Spring Bridal Bouquet",
        label: "Weddings",
        image: "/flowers1.jpg",
        alt: "Spring bridal bouquet with seasonal florals",
    },
    {
        title: "Romantic Table Centrepiece",
        label: "Events",
        image: "/flowers2.jpg",
        alt: "Romantic floral centrepiece arrangement",
    },
    {
        title: "Pastel Celebration Arrangement",
        label: "Celebrations",
        image: "/flowers3.jpg",
        alt: "Pastel celebration floral arrangement",
    },
    {
        title: "Elegant White Roses",
        label: "Gifts",
        image: "/flowers4.jpg",
        alt: "Elegant white roses bouquet",
    },
]

export function MyWorkSection() {
    return (
        <section className="bg-background py-24 md:py-28 px-4 md:px-8 xl:px-10" aria-labelledby="my-work-heading">
            <div className="max-w-[88rem] mx-auto">
                <div className="mb-10">
                    <div className="max-w-3xl">
                        <h2 id="my-work-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary tracking-wide">
                            My Work
                        </h2>
                        <div className="mt-4 h-px w-28 bg-primary/30" />
                        <p className="mt-6 text-base md:text-lg xl:text-xl text-primary/80 leading-relaxed">
                            Explore a selection of bespoke floral arrangements created for weddings, events, gifts, and special occasions.
                        </p>
                    </div>
                </div>

                <div
                    className="flex md:grid md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-7 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2"
                    role="list"
                    aria-label="Floral portfolio showcase"
                >
                    {workItems.map((item) => (
                        <article
                            key={item.title}
                            role="listitem"
                            className="group min-w-[78%] sm:min-w-[48%] md:min-w-0 bg-[#f7f5ef] border border-primary/12 shadow-[0_8px_30px_rgba(48,66,57,0.08)] p-5 md:p-6 flex flex-col snap-start transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_36px_rgba(48,66,57,0.16)]"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden border border-primary/12">
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
                                    <h3 className="mt-2 font-serif text-[1.35rem] xl:text-2xl text-primary leading-snug">{item.title}</h3>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
