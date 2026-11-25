import { Award, Clock, Users } from 'lucide-react'
import Reveal from './Reveal'

const STATS = [
  { icon: Award, label: 'Premium Rooms', value: '4 Categories' },
  { icon: Clock, label: 'Front Desk', value: '24/7 Service' },
  { icon: Users, label: 'Hospitality', value: 'Personalized Care' },
]

export default function About() {
  return (
    <section id="about" className="bg-ink py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal direction="left" className="relative">
          <img
            src="/images/img4.jpeg"
            alt="Wasser Hotel lobby"
            className="h-[420px] w-full rounded-2xl object-cover shadow-2xl shadow-black/60"
          />
          {/* <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-gold-600/40 bg-panel px-6 py-5 sm:block">
            <p className="font-display text-3xl text-gold-400">Est. Excellence</p>
            <p className="text-sm text-neutral-400">Setting the benchmark for luxury stays</p>
          </div> */}
        </Reveal>

        <Reveal direction="right">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
            About Wasser Hotel Festac
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Where Luxury Meets Excellence
          </h2>
          <p className="mt-5 text-neutral-400 leading-relaxed">
            Experience exceptional comfort, contemporary elegance, and authentic
            African hospitality at Wasser Hotel, strategically located on 6th
            Avenue, Festac Town, Lagos.
          </p>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Enjoy luxurious rooms, breathtaking views, an exclusive rooftop bar, a
            VIP indoor lounge, and exquisite international dining.
          </p>
          <p className="mt-4 text-gold-300 leading-relaxed">
            Wasser Hotel Festac: Your Destination for Luxury, Comfort and
            Unforgettable Experiences.
          </p>
          <p className="mt-4 text-sm italic text-neutral-500">
            Visit us today and experience hospitality at its finest.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map(({ icon: Icon, label, value }, i) => (
              <Reveal key={label} delay={i * 100} className="rounded-xl border border-line bg-panel/60 p-4">
                <Icon className="text-gold-400" size={22} />
                <p className="mt-3 text-sm font-semibold text-white">{value}</p>
                <p className="text-xs text-neutral-500">{label}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
