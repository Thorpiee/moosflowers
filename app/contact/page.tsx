"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const subject = encodeURIComponent(`Website enquiry from ${form.name}`)
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        )

        window.location.href = `mailto:hello@moosflowers.com?subject=${subject}&body=${body}`
        setForm({ name: "", email: "", message: "" })
    }

    return (
        <main className="min-h-screen">
            <Header />

            <section className="py-16 md:py-24 px-4 md:px-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-center mb-4">Contact Us</h1>
                    <p className="text-center text-muted-foreground text-sm tracking-wide mb-12">
                        We'd love to hear from you. Get in touch for enquiries, bespoke orders, or just to say hello.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs tracking-wide font-medium mb-2">Name</label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full px-4 py-3 bg-card border border-border text-sm focus:outline-none focus:border-primary"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs tracking-wide font-medium mb-2">Email</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full px-4 py-3 bg-card border border-border text-sm focus:outline-none focus:border-primary"
                                placeholder="Your email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs tracking-wide font-medium mb-2">Message</label>
                            <textarea
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                rows={6}
                                className="w-full px-4 py-3 bg-card border border-border text-sm focus:outline-none focus:border-primary resize-none"
                                placeholder="Your message"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-primary text-primary-foreground text-xs tracking-wide font-medium hover:opacity-90 transition-opacity"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-12 pt-12 border-t border-border text-center space-y-2">
                        <p className="text-xs tracking-wide font-medium">Get In Touch</p>
                        <a href="mailto:hello@moosflowers.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                            hello@moosflowers.com
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
