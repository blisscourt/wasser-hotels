import { ArrowRight, BedDouble, Coffee } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatNaira, type Room } from '../data/rooms'

interface RoomCardProps {
  room: Room
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Link
      to={`/rooms/${room.id}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-panel transition-colors hover:border-gold-600/60"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="absolute right-4 top-4 rounded-full bg-gold-500 px-4 py-1.5 text-sm font-bold text-ink">
          {formatNaira(room.price)}
          <span className="font-medium">/night</span>
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl text-white">{room.name}</h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-neutral-400">
          <BedDouble size={16} className="text-gold-400" />
          {room.bed}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          {room.description}
        </p>
        <p className="mt-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-gold-300">
          <Coffee size={14} />
          Complimentary breakfast included
        </p>

        <span className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gold-500 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition-colors group-hover:bg-gold-400">
          View Details
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  )
}
