'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface GallerySlide {
    id: string
    title: string
    category: string
    description: string
    image: string
    objectPosition?: string
}

const gallerySlides: GallerySlide[] = [
    {
        id: '1',
        title: 'Autumn Harvest',
        category: 'Seasonal',
        description: 'A vibrant blend of seasonal blooms and textured foliage.',
        image: '/images/flowers1.jpg',
        objectPosition: '50% 52%',
    },
    {
        id: '2',
        title: 'Bridal Elegance',
        category: 'Weddings',
        description: 'Timeless beauty for your most cherished moment.',
        image: '/images/flowers2.jpg',
        objectPosition: '50% 48%',
    },
    {
        id: '3',
        title: 'Garden Romance',
        category: 'Bouquets',
        description: 'Loose and romantic arrangement in soft pastels.',
        image: '/images/flowers3.jpg',
        objectPosition: '52% 52%',
    },
    {
        id: '5',
        title: 'Wedding Bliss',
        category: 'Weddings',
        description: 'Romantic garden-style design for special occasions.',
        image: '/images/flowers5.jpg',
        objectPosition: '50% 46%',
    },
    {
        id: '6',
        title: 'Ethereal Beauty',
        category: 'Bouquets',
        description: 'Dreamy and delicate arrangement of choice blooms.',
        image: '/images/flowers6.jpg',
        objectPosition: '50% 40%',
    },
    {
        id: '7',
        title: 'Spring Celebration',
        category: 'Seasonal',
        description: 'Fresh and bright arrangement capturing spring energy.',
        image: '/images/flowers7.jpg',
        objectPosition: '50% 50%',
    },
    {
        id: '8',
        title: 'Timeless Elegance',
        category: 'Events',
        description: 'Sophisticated design for elevated occasions.',
        image: '/images/flowers8.jpg',
        objectPosition: '52% 48%',
    },
    {
        id: '9',
        title: 'Luxe Arrangement',
        category: 'Events',
        description: 'Premium selection of the finest seasonal blooms.',
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
        <section className="pt-24 md:pt-32 pb-24 md:pb-32 px-4 md:px-8 xl:px-10 bg-background">
            <div className="max-w-[88rem] mx-auto">
                {/* Header */}
                <div className="mb-16 md:mb-20 lg:mb-24 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px bg-gradient-to-l from-primary/25 to-transparent max-w-20 w-20" />
                        <span className="text-xs tracking-[0.3em] uppercase font-medium text-primary/60">
                            Portfolio
                        </span>
                        <div className="h-px bg-gradient-to-r from-primary/25 to-transparent max-w-20 w-20" />
                    </div>
                    <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary mb-6 tracking-wide">
                        Bespoke Gallery
                    </h2>
                    <p className="text-base md:text-lg text-primary/70 max-w-2xl leading-relaxed mx-auto">
                        A rotating collection of thoughtfully designed arrangements created for weddings, celebrations, and life's most memorable occasions.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    {/* Main Image */}
                    <div
                        className="relative w-full max-w-4xl mx-auto aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card md:aspect-[4/5] cursor-zoom-in"
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
                            alt={slide.title}
                            fill
                            className="object-cover"
                            style={{ objectPosition: slide.objectPosition ?? '50% 50%' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
                            priority
                        />
                        {/* Subtle overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>

                    {/* Navigation Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 h-12 w-12 md:h-14 md:w-14 inline-flex items-center justify-center rounded-full border border-white/35 bg-black/30 hover:bg-black/45 hover:border-white/55 text-white transition-all duration-300 backdrop-blur-md z-10 shadow-[0_10px_24px_rgba(18,24,21,0.2)]"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 h-12 w-12 md:h-14 md:w-14 inline-flex items-center justify-center rounded-full border border-white/35 bg-black/30 hover:bg-black/45 hover:border-white/55 text-white transition-all duration-300 backdrop-blur-md z-10 shadow-[0_10px_24px_rgba(18,24,21,0.2)]"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="absolute bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
                        {gallerySlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentSlide
                                        ? 'w-9 h-2 bg-white'
                                        : 'w-2 h-2 bg-white/55 hover:bg-white/80'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

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
                                    alt={`${slide.title} fullscreen`}
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
                <div className="mt-10 md:mt-12 lg:mt-14">
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-2.5 md:gap-3">
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
                                    alt={item.title}
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
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 md:mt-20 lg:mt-24 border-t border-primary/12 pt-16 md:pt-24">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start md:items-end rounded-2xl border border-border bg-card px-6 py-8 md:px-10 md:py-12">
                        <div>
                            <h3 className="font-serif text-3xl md:text-4xl text-primary mb-4">
                                Looking for something special?
                            </h3>
                            <p className="text-primary/70 text-base md:text-lg max-w-xl leading-relaxed">
                                Collaborate with me to create a bespoke floral arrangement tailored entirely to your vision and occasion.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 md:px-10 py-4 bg-primary text-primary-foreground text-sm md:text-base tracking-[0.08em] font-medium rounded-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 whitespace-nowrap self-start md:self-center"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
