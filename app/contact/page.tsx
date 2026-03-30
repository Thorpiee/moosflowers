import Image from "next/image"
import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"
import type { Metadata } from "next"

import { ArrowUpRight, Facebook, Instagram, Mail } from "lucide-react"

const socialLinks = [
    {
        title: "Instagram",
        href: "https://www.instagram.com/moosflowers/",
        description: "Browse recent arrangements, seasonal stems, and behind-the-scenes floristry moments.",
        icon: Instagram,
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com/moosflowers/",
        description: "Follow along for updates, new work, and floral stories from the studio.",
        icon: Facebook,
    },
]

const socialPreviews = [
    {
        label: "Latest On Instagram",
        title: "A glimpse of recent bouquets and seasonal work",
        image: "/images/flowers5.jpg",
        href: "https://www.instagram.com/moosflowers/",
    },
    {
        label: "Latest On Facebook",
        title: "Studio updates, wreaths, and bespoke floral moments",
        image: "/images/flowers7.jpg",
        href: "https://www.facebook.com/moosflowers/",
    },
]

export const metadata: Metadata = {
    title: "Contact Moo's Flowers | Florist Suffolk & Essex",
    description: "Enquire with Moo's Flowers for wedding flowers, bouquet delivery, and bespoke floral design across Suffolk, Essex, Ipswich, Colchester, and nearby areas.",
    alternates: {
        canonical: '/contact',
    },
}

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="section-space bg-background layout-shell">
                <div className="layout-container">
                    <RevealOnScroll className="max-w-3xl">
                        <p className="text-xs uppercase tracking-[0.28em] text-primary/58">Contact</p>
                        <h1 className="mt-4 font-serif text-4xl tracking-wide text-primary sm:text-5xl md:text-6xl">
                            Contact Moo's Flowers
                        </h1>
                        <div className="mt-5 h-px w-24 bg-primary/25" />
                        <p className="mt-6 max-w-[42rem] text-[0.98rem] leading-relaxed text-primary/78 sm:text-base md:mt-7 md:text-lg">
                            Get in touch for wedding flowers, bouquet delivery, bespoke arrangements, and floral enquiries across Suffolk, Essex, Ipswich, Colchester, and the surrounding countryside.
                        </p>
                    </RevealOnScroll>

                    <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:mt-14">
                        <RevealOnScroll as="section" className="rounded-[1.6rem] border border-border bg-card px-6 py-7 shadow-[0_12px_34px_rgba(39,57,48,0.08)] md:px-8 md:py-9" delayMs={80}>
                            <p className="text-xs uppercase tracking-[0.24em] text-primary/56">Email</p>
                            <div className="mt-6 flex items-start gap-4">
                                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h2 className="font-serif text-2xl text-primary md:text-3xl">Direct enquiries</h2>
                                    <p className="mt-3 max-w-[34rem] text-sm leading-relaxed text-primary/72 md:text-base">
                                        For bespoke orders and enquiries, email me directly and I&apos;ll get back to you as soon as possible.
                                    </p>
                                    <a
                                        href="mailto:hello@moosflowers.com"
                                        className="mt-5 inline-flex items-center gap-2 text-base text-primary underline decoration-primary/25 underline-offset-4 transition-colors hover:text-primary/75"
                                    >
                                        hello@moosflowers.com
                                    </a>
                                    <div className="mt-7 grid gap-4 border-t border-primary/10 pt-6 sm:grid-cols-2">
                                        <div>
                                            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-primary/52">Response Time</p>
                                            <p className="mt-2 text-sm text-primary/78 md:text-base">Usually within 1–2 working days.</p>
                                        </div>
                                        <div>
                                            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-primary/52">Based</p>
                                            <p className="mt-2 text-sm text-primary/78 md:text-base">Suffolk–Essex border, United Kingdom.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll as="section" className="rounded-[1.6rem] border border-border bg-card px-6 py-7 shadow-[0_12px_34px_rgba(39,57,48,0.06)] md:px-8 md:py-9" delayMs={120}>
                            <p className="text-xs uppercase tracking-[0.24em] text-primary/56">Social</p>
                            <h2 className="mt-5 font-serif text-2xl text-primary md:text-3xl">Follow along</h2>
                            <p className="mt-3 max-w-[32rem] text-sm leading-relaxed text-primary/72 md:text-base">
                                Explore recent work, seasonal flowers, and studio updates on Instagram and Facebook, and feel free to get in touch there too.
                            </p>

                            <div className="mt-7 grid gap-4 sm:grid-cols-2">
                                {socialLinks.map((item) => {
                                    const Icon = item.icon

                                    return (
                                        <a
                                            key={item.title}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-premium group rounded-[1.25rem] border border-border bg-card px-5 py-5 hover:border-primary/20 hover:shadow-[0_12px_24px_rgba(39,57,48,0.08)]"
                                        >
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-primary">
                                                    <Icon className="h-4 w-4" />
                                                </div>
                                                <ArrowUpRight className="h-4 w-4 text-primary/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                            </div>
                                            <h3 className="mt-5 font-serif text-xl text-primary">{item.title}</h3>
                                            <p className="mt-2 text-sm leading-relaxed text-primary/70">{item.description}</p>
                                        </a>
                                    )
                                })}
                            </div>
                        </RevealOnScroll>
                    </div>

                    <RevealOnScroll as="section" className="mt-10 rounded-[1.8rem] border border-border bg-card px-5 py-6 sm:px-6 sm:py-7 md:mt-12 md:px-8 md:py-9 xl:px-10" delayMs={140}>
                        <div className="max-w-2xl">
                            <p className="text-xs uppercase tracking-[0.24em] text-primary/56">Follow Along</p>
                            <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">Latest on Instagram & Facebook</h2>
                            <p className="mt-4 text-sm leading-relaxed text-primary/72 md:text-base">
                                These preview cards act as graceful social placeholders and link directly out to my latest updates until full embeds are needed.
                            </p>
                        </div>

                        <div className="mt-8 grid gap-5 md:gap-6 lg:grid-cols-2">
                            {socialPreviews.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-premium group overflow-hidden rounded-[1.4rem] border border-border bg-card hover:shadow-[0_16px_32px_rgba(39,57,48,0.08)]"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                        />
                                    </div>
                                    <div className="px-5 py-5 md:px-6 md:py-6">
                                        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-primary/56">{item.label}</p>
                                        <div className="mt-4 flex items-start justify-between gap-4">
                                            <h3 className="max-w-[24rem] font-serif text-xl text-primary md:text-[1.7rem]">
                                                {item.title}
                                            </h3>
                                            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary/55 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll as="section" className="mt-10 border-t border-primary/12 pt-9 md:mt-12 md:pt-11 lg:mt-14 lg:pt-12" delayMs={160}>
                        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                            <div>
                                <p className="text-xs uppercase tracking-[0.24em] text-primary/56">Let&apos;s Create Something Beautiful</p>
                                <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">Ready to talk flowers?</h2>
                                <p className="mt-3 max-w-[40rem] text-sm leading-relaxed text-primary/72 md:text-base">
                                    Whether you&apos;re planning an event, ordering something bespoke, or simply want to start a conversation, I&apos;d love to hear from you.
                                </p>
                            </div>
                            <a
                                href="mailto:hello@moosflowers.com"
                                className="btn-premium btn-shadow-hover inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm tracking-wide text-primary-foreground hover:bg-primary/90"
                            >
                                Email Me
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            <Footer />
        </main>
    )
}
