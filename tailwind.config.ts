import type { Config } from "tailwindcss"

export default {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./hooks/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    green: "#44584C",
                    cream: "#EAE6DF",
                    white: "#FFFFFF",
                    soft: "#E3DED6",
                    border: "#DDD7CF",
                },
            },
        },
    },
} satisfies Config
