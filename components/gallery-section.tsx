'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'

interface GallerySlide {
    id: string
    title: string
    category: string
    description: string
    alt: string
    image: string
    objectPosition?: string
}

const gallerySlides: GallerySlide[] = [
    {
        id: '1',
        title: 'Autumn Harvest',
        category: 'Seasonal',
        description: 'A vibrant blend of seasonal blooms and textured foliage.',
        alt: "Seasonal bouquet with textured foliage by Moo's Flowers, florist in Suffolk",
        image: '/images/flowers1.jpg',
        objectPosition: '50% 52%',
    },
    {
        id: '2',
        title: 'Bridal Elegance',
        category: 'Weddings',
        description: 'Timeless beauty for your most cherished moment.',
        alt: "Natural bridal bouquet by Moo's Flowers, wedding florist in Essex",
        image: '/images/flowers2.jpg',
        objectPosition: '50% 48%',
    },
    {
        id: '3',
        title: 'Garden Romance',
        category: 'Bouquets',
        description: 'Loose and romantic arrangement in soft pastels.',
        alt: "Romantic pastel bouquet arranged by Moo's Flowers near Ipswich",
        image: '/images/flowers3.jpg',
        objectPosition: '52% 52%',
    },
    {
        id: '5',
        title: 'Wedding Bliss',
        category: 'Weddings',
        description: 'Romantic garden-style design for special occasions.',
        alt: "Garden-style wedding flowers for an Essex celebration by Moo's Flowers",
        image: '/images/flowers5.jpg',
        objectPosition: '50% 46%',
    },
    {
        id: '6',
        title: 'Ethereal Beauty',
        category: 'Bouquets',
        description: 'Dreamy and delicate arrangement of choice blooms.',
        alt: "Delicate hand-tied bouquet by Moo's Flowers on the Suffolk-Essex border",
        image: '/images/flowers6.jpg',
        objectPosition: '50% 40%',
    },
    {
        id: '7',
        title: 'Spring Celebration',
        category: 'Seasonal',
        description: 'Fresh and bright arrangement capturing spring energy.',
        alt: "Spring floral arrangement created by Moo's Flowers for an Ipswich home",
        image: '/images/flowers7.jpg',
        objectPosition: '50% 50%',
    },
    {
        id: '8',
        title: 'Timeless Elegance',
        category: 'Events',
        description: 'Sophisticated design for elevated occasions.',
        alt: "Elegant event flowers by Moo's Flowers for a Colchester celebration",
        image: '/images/flowers8.jpg',
        objectPosition: '52% 48%',
    },
    {
        id: '9',
        title: 'Luxe Arrangement',
        category: 'Events',
        description: 'Premium selection of the finest seasonal blooms.',
        alt: "Premium seasonal floral arrangement by Moo's Flowers in Suffolk",
        image: '/images/flowers9.jpg',
        objectPosition: '50% 42%',
    },
]

export function GallerySection() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoplay, setIsAutoplay] = useState(true)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    const slide = gallerySlides[currentSlide]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % gallerySlides.length)
        setIsAutoplay(false)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length)
        setIsAutoplay(false)
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
        setIsAutoplay(false)
    }

    const openLightbox = () => {
        setIsAutoplay(false)
        setIsLightboxOpen(true)
    }

    const closeLightbox = () => {
        setIsLightboxOpen(false)
    }

    // Autoplay
    useEffect(() => {
        if (!isAutoplay) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % gallerySlides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoplay])

    useEffect(() => {
        if (!isLightboxOpen) return

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsLightboxOpen(false)
            }
        }

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleEscape)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', handleEscape)
        }
    }, [isLightboxOpen])

    return (
        <section className="section-space bg-background layout-shell">
            <div className="layout-container">
                {/* Header */}
                <RevealOnScroll className="mb-8 text-center md:mb-10 lg:mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px bg-gradient-to-l from-primary/25 to-transparent max-w-20 w-20" />
                        <span className="text-xs tracking-[0.3em] uppercase font-medium text-primary/60">
                            Portfolio
                        </span>
                        <div className="h-px bg-gradient-to-r from-primary/25 to-transparent max-w-20 w-20" />
                    </div>
                    <h1 className="mb-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.9rem] tracking-wide text-primary">
                        Bespoke Wedding Flowers & Floral Gallery
                    </h1>
                    <p className="mx-auto max-w-2xl text-[0.96rem] leading-relaxed text-primary/70 sm:text-base md:text-[1.02rem]">
                        Explore bespoke wedding flowers, bouquets, and event floristry by Moo's Flowers, a natural florist serving Suffolk, Essex, Ipswich, Colchester, and the surrounding countryside.
                    </p>
                </RevealOnScroll>

                {/* Highlighted Collection */}
                <RevealOnScroll className="mx-auto max-w-4xl" delayMs={80}>
                    <div className="overflow-hidden rounded-[1.5rem] border border-border/85 bg-card shadow-[0_16px_34px_rgba(34,48,42,0.1)]">
                        <div
                            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden sm:aspect-[16/11] lg:aspect-[16/10]"
                            onClick={openLightbox}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault()
                                    openLightbox()
                                }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label={`Open ${slide.title} fullscreen`}
                        >
                            <Image
                                key={slide.id}
                                src={slide.image}
                                alt={slide.alt}
                                fill
                                className="animate-featured-image-swap object-cover"
                                style={{ objectPosition: slide.objectPosition ?? '50% 50%' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 84vw, 900px"
                                priority={currentSlide === 0}
                                loading={currentSlide === 0 ? 'eager' : 'lazy'}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-black/5 to-transparent" />

                            <div className="absolute left-4 top-4 z-20 rounded-full border border-white/40 bg-black/28 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-white/95 backdrop-blur-sm sm:left-5 sm:top-5">
                                {slide.category}
                            </div>

                            <div className="absolute bottom-4 right-4 z-20 rounded-full border border-white/30 bg-black/26 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm sm:bottom-5 sm:right-5">
                                {currentSlide + 1} / {gallerySlides.length}
                            </div>

                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation()
                                    prevSlide()
                                }}
                                className="btn-premium absolute left-3 top-1/2 z-20 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-card/82 text-primary shadow-[0_8px_20px_rgba(21,31,27,0.18)] hover:bg-card sm:left-4 sm:h-10 sm:w-10 md:left-5 md:h-11 md:w-11"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>

                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation()
                                    nextSlide()
                                }}
                                className="btn-premium absolute right-3 top-1/2 z-20 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-card/82 text-primary shadow-[0_8px_20px_rgba(21,31,27,0.18)] hover:bg-card sm:right-4 sm:h-10 sm:w-10 md:right-5 md:h-11 md:w-11"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="border-t border-border/75 px-5 py-4 sm:px-6 sm:py-5 md:px-7 md:py-6">
                            <h3 className="font-serif text-2xl text-primary sm:text-[2rem] md:text-[2.15rem]">{slide.title}</h3>
                            <p className="mt-3 max-w-3xl text-[0.96rem] leading-relaxed text-primary/70 sm:text-base md:text-[1.04rem]">
                                {slide.description}
                            </p>

                            <div className="mt-5 flex items-center gap-4">
                                <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-primary/14" aria-hidden="true">
                                    <div
                                        className="h-full rounded-full bg-primary/55 transition-[width] duration-500 ease-out"
                                        style={{ width: `${((currentSlide + 1) / gallerySlides.length) * 100}%` }}
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    {gallerySlides.map((item, index) => (
                                        <button
                                            key={item.id}
                                            onClick={() => goToSlide(index)}
                                            className={`rounded-full transition-all duration-300 ${index === currentSlide
                                                ? 'h-2 w-8 bg-primary/80'
                                                : 'h-2 w-2 bg-primary/28 hover:bg-primary/48'
                                                }`}
                                            aria-label={`Go to slide ${index + 1}: ${item.title}`}
                                            aria-current={index === currentSlide}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>

                {isLightboxOpen && (
                    <div
                        className="fixed inset-0 z-[80] bg-black/88 backdrop-blur-sm px-4 md:px-8 py-6 md:py-10"
                        onClick={closeLightbox}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${slide.title} fullscreen preview`}
                    >
                        <button
                            type="button"
                            className="absolute top-4 right-4 md:top-6 md:right-6 h-11 w-11 md:h-12 md:w-12 inline-flex items-center justify-center rounded-full border border-white/35 bg-black/45 text-white hover:bg-black/60 transition-colors"
                            onClick={closeLightbox}
                            aria-label="Close fullscreen preview"
                        >
                            <X className="h-5 w-5 md:h-6 md:w-6" />
                        </button>

                        <div
                            className="relative mx-auto h-full w-full max-w-6xl"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="relative h-full w-full">
                                <Image
                                    src={slide.image}
                                    alt={slide.alt}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Image Previews */}
                <RevealOnScroll className="mt-6 md:mt-8 lg:mt-10" delayMs={140}>
                    <div className="grid grid-cols-4 gap-2 sm:gap-2.5 md:grid-cols-8 md:gap-3">
                        {gallerySlides.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => goToSlide(index)}
                                className={`group relative aspect-square overflow-hidden rounded-lg border transition-all duration-300 ${index === currentSlide
                                    ? 'border-primary/70 ring-1 ring-primary/45'
                                    : 'border-primary/15 hover:border-primary/40'
                                    }`}
                                aria-label={`Preview slide ${index + 1}: ${item.title}`}
                                aria-current={index === currentSlide}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover"
                                    style={{ objectPosition: item.objectPosition ?? '50% 50%' }}
                                    sizes="(max-width: 768px) 22vw, 10vw"
                                />
                                <span
                                    className={`absolute inset-0 transition-colors duration-300 ${index === currentSlide ? 'bg-black/5' : 'bg-black/0 group-hover:bg-black/10'
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </RevealOnScroll>

                {/* Bottom CTA */}
                <RevealOnScroll className="mt-12 border-t border-primary/12 pt-10 md:mt-16 md:pt-14 lg:mt-20 lg:pt-16" delayMs={160}>
                    <div className="grid grid-cols-1 items-start gap-8 rounded-2xl border border-border bg-card px-5 py-7 md:grid-cols-[1fr_auto] md:items-end md:gap-10 md:px-8 md:py-10 lg:gap-12 lg:px-10 lg:py-12">
                        <div>
                            <h3 className="mb-4 font-serif text-2xl sm:text-3xl md:text-4xl text-primary">
                                Looking for something special?
                            </h3>
                            <p className="max-w-xl text-[0.98rem] leading-relaxed text-primary/70 sm:text-base md:text-lg">
                                Collaborate with me to create a bespoke floral arrangement tailored entirely to your vision and occasion.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="btn-premium btn-shadow-hover inline-flex self-start whitespace-nowrap rounded-lg bg-primary px-8 py-3.5 text-sm font-medium tracking-[0.08em] text-primary-foreground hover:bg-primary/90 md:self-center md:px-10 md:py-4 md:text-base"
                        >
                            Contact Me
                        </Link>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    )
}
