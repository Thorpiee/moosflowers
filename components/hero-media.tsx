"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const HERO_POSTER_SRC = "/hero-poster-flowers.webp"
const HERO_POSTER_FALLBACK_SRC = "/images/hero-flowers.webp"
const HERO_VIDEO_SRC = "/flowervideo.mp4"

type NetworkInformation = {
    saveData?: boolean
    effectiveType?: string
}

function getVideoPreloadStrategy(): "none" | "metadata" {
    if (typeof window === "undefined") {
        return "metadata"
    }

    const isMobileViewport = window.matchMedia("(max-width: 768px)").matches
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection
    const isSlowNetwork = connection?.saveData || ["slow-2g", "2g", "3g"].includes(connection?.effectiveType ?? "")

    return isMobileViewport || isSlowNetwork ? "none" : "metadata"
}

export function HeroMedia() {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
    const [isVideoReady, setIsVideoReady] = useState(false)
    const [videoFailed, setVideoFailed] = useState(false)
    const [preloadStrategy, setPreloadStrategy] = useState<"none" | "metadata">("metadata")
    const [posterSrc, setPosterSrc] = useState(HERO_POSTER_SRC)

    useEffect(() => {
        setPreloadStrategy(getVideoPreloadStrategy())
    }, [])

    useEffect(() => {
        const node = wrapperRef.current
        if (!node) return

        if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
            setShouldLoadVideo(true)
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (entry?.isIntersecting) {
                    setShouldLoadVideo(true)
                    observer.disconnect()
                }
            },
            {
                rootMargin: "180px 0px",
                threshold: 0.15,
            }
        )

        observer.observe(node)

        return () => observer.disconnect()
    }, [])

    return (
        <div ref={wrapperRef} className="relative h-full w-full">
            <Image
                src={posterSrc}
                alt="Seasonal floral arrangement by Moo's Flowers in Suffolk and Essex"
                fill
                priority
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 36rem"
                onError={() => setPosterSrc(HERO_POSTER_FALLBACK_SRC)}
                className={cn(
                    "object-cover object-[60%_center] transition-opacity duration-500",
                    isVideoReady && !videoFailed ? "opacity-0" : "opacity-100"
                )}
            />

            {shouldLoadVideo && !videoFailed ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload={preloadStrategy}
                    poster={posterSrc}
                    onCanPlay={() => setIsVideoReady(true)}
                    onLoadedData={() => setIsVideoReady(true)}
                    onError={() => setVideoFailed(true)}
                    className={cn(
                        "h-full w-full object-cover object-[60%_center] transition-opacity duration-500",
                        isVideoReady ? "opacity-100" : "opacity-0"
                    )}
                >
                    <source src={HERO_VIDEO_SRC} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : null}

            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(28,44,38,0.07)]" />
        </div>
    )
}