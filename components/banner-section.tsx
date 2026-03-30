import Image from "next/image"

export function BannerSection() {
  return (
    <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
      <Image
        src="/images/banner-flowers.webp"
        alt="Beautiful flowers in nature"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
    </section>
  )
}
