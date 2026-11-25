import { useMemo, useState } from 'react'
import { rooms, type RoomCategory } from '../data/rooms'
import Reveal from './Reveal'
import RoomCard from './RoomCard'

const TABS: Array<RoomCategory | 'All'> = ['All', 'Standard', 'Deluxe', 'Luxury', 'Suite']

export default function Rooms() {
  const [active, setActive] = useState<RoomCategory | 'All'>('All')

  const filtered = useMemo(
    () => (active === 'All' ? rooms : rooms.filter((r) => r.category === active)),
    [active],
  )

  return (
    <section id="rooms" className="bg-ink py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
            Our Rooms
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Rooms &amp; Rates
          </h2>
          <p className="mt-4 text-neutral-400">
            All rooms come with a complimentary breakfast.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === tab
                  ? 'bg-gold-500 text-ink'
                  : 'border border-line text-neutral-300 hover:border-gold-600/60 hover:text-gold-400'
              }`}
            >
              {tab === 'All' ? 'All Rooms' : `${tab} Room${tab === 'Suite' ? 's' : ''}`}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((room, i) => (
            <Reveal key={room.id} delay={i * 100}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
