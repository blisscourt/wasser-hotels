import { Coffee, Dumbbell, UtensilsCrossed, Waves } from 'lucide-react'
import Reveal from './Reveal'

const AMENITIES = [
  {
    icon: UtensilsCrossed,
    title: 'Fine Dining',
    description: 'Savor curated menus crafted by our in-house culinary team.',
  },
  {
    icon: Waves,
    title: 'Elevator',
    description: 'A convenient elevator for easy access to every floor.',
  },
  {
    icon: Dumbbell,
    title: 'Modern Rooftop Bar',
    description: 'A modern rooftop bar where sophistication meets relaxation.',
  },
  {
    icon: Coffee,
    title: 'Complimentary Breakfast',
    description: 'Every room includes a complimentary breakfast each morning.',
  },
]

export default function Amenities() {
  return (
    <section id="amenities" className="bg-charcoal py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
            Hotel Amenities
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Everything You Need, Beautifully Delivered
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map(({ icon: Icon, title, description }, i) => (
            <Reveal
              key={title}
              delay={i * 100}
              className="group rounded-2xl border border-line bg-panel/60 p-7 text-center transition-colors hover:border-gold-600/60"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold-600/40 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-ink">
                <Icon size={26} />
              </div>
              <h3 className="mt-5 font-display text-lg text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
