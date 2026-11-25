import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'

const SLIDES = [
  '/images/img1.jpeg',
  '/images/img3.jpeg',
  '/images/img2.jpeg',
  '/images/img4.jpeg',
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setIndex((i) => (i + 1) % SLIDES.length)

  return (
    <section id="home" className="relative flex h-[90vh] min-h-[560px] w-full items-center overflow-hidden">
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={src} alt="" className="h-full w-full object-cover brightness-[0.6]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/10" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-black/35 via-black/10 to-transparent sm:block" />
        </div>
      ))}

      <Reveal className="container-page relative z-10 text-center sm:text-left">
        {/* <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
          Welcome to Wasser Hotel
        </p> */}
        <h1 className="font-display text-4xl  leading-tight text-white sm:text-5xl md:text-6xl">
          Experience
          <br className="hidden sm:block" />
          <span className="text-gradient-gold"> WASSER HOTEL</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-neutral-300 sm:mx-0 sm:text-lg">
          Your comfort is our priority. Experience refined rooms, attentive
          service, and timeless elegance.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#rooms"
            className="rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink transition-transform hover:scale-[1.03] hover:bg-gold-400"
          >
            Book Your Stay
          </a>
          <a
            href="#about"
            className="rounded-full border border-neutral-500/50 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            Explore the Hotel
          </a>
        </div>
      </Reveal>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-2 text-white backdrop-blur transition-colors hover:border-gold-400 hover:text-gold-400 sm:block"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-2 text-white backdrop-blur transition-colors hover:border-gold-400 hover:text-gold-400 sm:block"
      >
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((src, i) => (
          <button
            key={src}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-gold-400' : 'w-4 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
