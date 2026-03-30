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

function getVideoPreloadStrategy(): "metadata" | "auto" {
    if (typeof window === "undefined") {
        return "auto"
    }

    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection
    const isSlowNetwork = connection?.saveData || ["slow-2g", "2g", "3g"].includes(connection?.effectiveType ?? "")

    return isSlowNetwork ? "metadata" : "auto"
}

export function HeroMedia() {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const [autoplayBlocked, setAutoplayBlocked] = useState(false)
    const [videoFailed, setVideoFailed] = useState(false)
    const [preloadStrategy, setPreloadStrategy] = useState<"metadata" | "auto">("auto")
    const [posterSrc, setPosterSrc] = useState(HERO_POSTER_SRC)

    function attemptPlayback() {
        const video = videoRef.current
        if (!video || videoFailed) return

        video.muted = true
        video.defaultMuted = true

        const playback = video.play()

        if (!playback || typeof playback.catch !== "function") {
            return
        }

        playback.catch((error: unknown) => {
            if (error instanceof DOMException && error.name === "AbortError") {
                return
            }

            setAutoplayBlocked(true)
        })
    }

    useEffect(() => {
        setPreloadStrategy(getVideoPreloadStrategy())
    }, [])

    useEffect(() => {
        const video = videoRef.current
        if (!video || videoFailed) return

        video.load()

        const frame = window.requestAnimationFrame(() => {
            attemptPlayback()
        })

        return () => window.cancelAnimationFrame(frame)
    }, [preloadStrategy, videoFailed])

    useEffect(() => {
        if (!autoplayBlocked) return

        const timer = window.setTimeout(() => {
            setAutoplayBlocked(false)
            attemptPlayback()
        }, 350)

        return () => window.clearTimeout(timer)
    }, [autoplayBlocked])

    return (
        <div className="relative h-full w-full">
            <Image
                src={posterSrc}
                alt="Seasonal floral arrangement by Moo's Flowers in Suffolk and Essex"
                fill
                priority
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 36rem"
                onError={() => setPosterSrc(HERO_POSTER_FALLBACK_SRC)}
                className={cn(
                    "object-cover object-[60%_center] transition-opacity duration-500",
                    isVideoPlaying && !videoFailed ? "opacity-0" : "opacity-100"
                )}
            />

            {!videoFailed ? (
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload={preloadStrategy}
                    poster={posterSrc}
                    onCanPlay={attemptPlayback}
                    onCanPlayThrough={attemptPlayback}
                    onLoadedData={attemptPlayback}
                    onLoadedMetadata={attemptPlayback}
                    onPlay={() => {
                        setAutoplayBlocked(false)
                        setIsVideoPlaying(true)
                    }}
                    onPlaying={() => {
                        setAutoplayBlocked(false)
                        setIsVideoPlaying(true)
                    }}
                    onPause={() => setIsVideoPlaying(false)}
                    onError={() => setVideoFailed(true)}
                    disablePictureInPicture
                    className={cn(
                        "h-full w-full object-cover object-[60%_center] transition-opacity duration-500",
                        isVideoPlaying ? "opacity-100" : "opacity-0"
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