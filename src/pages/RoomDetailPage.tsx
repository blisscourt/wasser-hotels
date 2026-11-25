import { useEffect } from 'react'
import { ArrowLeft, BedDouble, CalendarCheck, Check, MessageCircle } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useBookingModal } from '../context/BookingModalContext'
import { formatNaira, rooms } from '../data/rooms'

export default function RoomDetailPage() {
  const { id } = useParams<{ id: string }>()
  const room = rooms.find((r) => r.id === id)
  const { openBooking } = useBookingModal()

  useEffect(() => {
    document.title = room ? `${room.name} | Wasser Hotel` : 'Room Not Found | Wasser Hotel'
    window.scrollTo({ top: 0 })
  }, [room])

  if (!room) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ink px-6 pt-24 text-center sm:pt-28">
        <h1 className="font-display text-3xl text-white">Room Not Found</h1>
        <p className="text-neutral-400">
          The room you're looking for doesn't exist or may have been removed.
        </p>
        <Link
          to="/#rooms"
          className="mt-4 flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-gold-400"
        >
          <ArrowLeft size={16} />
          Back to Rooms
        </Link>
      </section>
    )
  }

  const message = encodeURIComponent(
    `Hello Wasser Hotel, I'd like to book the ${room.name} (${formatNaira(room.price)}/night).`,
  )

  return (
    <section className="bg-ink pb-24 pt-24 sm:pt-28">
      <div className="container-page">
        <Link
          to="/#rooms"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-gold-400"
        >
          <ArrowLeft size={16} />
          Back to Rooms
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96 lg:h-full">
            <img src={room.image} alt={room.name} className="h-full w-full object-cover" />
            <span className="absolute left-5 top-5 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
              {room.category} Room
            </span>
          </div>

          <div>
            <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              {room.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-neutral-400">
              <span className="flex items-center gap-2 text-sm">
                <BedDouble size={16} className="text-gold-400" />
                {room.bed}
              </span>
              <span className="font-display text-2xl text-gold-400">
                {formatNaira(room.price)}
                <span className="text-sm font-sans text-neutral-500"> / night</span>
              </span>
            </div>

            <p className="mt-6 leading-relaxed text-neutral-300">{room.longDescription}</p>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-white">
                Room Amenities
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {room.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center gap-2 text-sm text-neutral-300">
                    <Check size={16} className="shrink-0 text-gold-400" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-sm font-medium uppercase tracking-wide text-gold-300">
              Complimentary breakfast included every morning
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openBooking(room.id)}
                className="flex items-center justify-center gap-2 rounded-full bg-gold-500 py-4 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-gold-400 sm:px-10"
              >
                <CalendarCheck size={18} />
                Book Room
              </button>
              <a
                href={`https://wa.me/2340000000000?text=${message}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-gold-600/60 py-4 text-sm font-semibold uppercase tracking-wider text-gold-400 transition-colors hover:bg-gold-500 hover:text-ink sm:px-10"
              >
                <MessageCircle size={18} />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
