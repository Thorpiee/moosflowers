"use client"

import {
    type CSSProperties,
    type ComponentPropsWithoutRef,
    type ElementType,
    useEffect,
    useRef,
    useState,
} from "react"

import { cn } from "@/lib/utils"

type RevealOnScrollProps<T extends ElementType = "div"> = {
    as?: T
    className?: string
    children: React.ReactNode
    delayMs?: number
    threshold?: number
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">

export function RevealOnScroll<T extends ElementType = "div">({
    as,
    className,
    children,
    delayMs = 0,
    threshold = 0.2,
    style,
    ...props
}: RevealOnScrollProps<T>) {
    const Component = as ?? "div"
    const elementRef = useRef<Element | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const node = elementRef.current
        if (!node) return

        if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
            setIsVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (entry?.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(node)
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -8% 0px",
            }
        )

        observer.observe(node)

        return () => observer.disconnect()
    }, [threshold])

    return (
        <Component
            ref={elementRef as never}
            className={cn("reveal-on-scroll", isVisible && "is-visible", className)}
            style={{
                ...(style as CSSProperties),
                ["--reveal-delay" as string]: `${delayMs}ms`,
            }}
            {...props}
        >
            {children}
        </Component>
    )
}
