import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { BedDouble, Calendar, CheckCircle2, X } from 'lucide-react'
import { useBookingModal } from '../context/BookingModalContext'
import { formatNaira, rooms } from '../data/rooms'
import { sendBookingRequest } from '../lib/sendBookingRequest'

type Status = 'idle' | 'sending' | 'sent' | 'error'

function nightsBetween(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0
  const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime()
  return diff > 0 ? Math.round(diff / (1000 * 60 * 60 * 24)) : 0
}

export default function BookingModal() {
  const { isOpen, roomId, closeBooking } = useBookingModal()

  const [selectedRoomId, setSelectedRoomId] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    if (!isOpen) return
    setSelectedRoomId(roomId ?? '')
    setCheckIn('')
    setCheckOut('')
    setFullName('')
    setEmail('')
    setPhone('')
    setStatus('idle')
  }, [isOpen, roomId])

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeBooking()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, closeBooking])

  const selectedRoom = useMemo(() => rooms.find((r) => r.id === selectedRoomId), [selectedRoomId])
  const nights = useMemo(() => nightsBetween(checkIn, checkOut), [checkIn, checkOut])
  const total = (selectedRoom?.price ?? 0) * nights

  if (!isOpen) return null

  const handleClose = () => closeBooking()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!selectedRoom) return

    setStatus('sending')
    try {
      await sendBookingRequest({
        roomName: selectedRoom.name,
        roomPrice: selectedRoom.price,
        checkIn,
        checkOut,
        nights,
        total,
        fullName,
        email,
        phone,
      })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative flex h-full w-full flex-col bg-panel sm:h-auto sm:max-h-[90vh] sm:max-w-xl sm:rounded-2xl sm:border sm:border-line">
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            <Calendar size={16} />
            Reservation Center
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close booking form"
            className="text-neutral-400 transition-colors hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        {status === 'sent' ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-16 text-center">
            <CheckCircle2 size={48} className="text-gold-400" />
            <h2 className="font-display text-2xl text-white">Request Sent</h2>
            <p className="max-w-sm text-sm text-neutral-400">
              Thank you, {fullName.split(' ')[0] || 'guest'}. Our team will email you at{' '}
              <span className="text-gold-300">{email}</span> to confirm your reservation for the{' '}
              {selectedRoom?.name}.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-4 rounded-full bg-gold-500 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-gold-400"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
              <div>
                <h2 id="booking-modal-title" className="font-display text-2xl text-white">
                  {selectedRoom ? `Booking: ${selectedRoom.name}` : 'Book a Room at Wasser Hotel'}
                </h2>
                <p className="mt-1 text-sm text-neutral-400">
                  Select your dates and room preferences to send a reservation request.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="text-sm">
                  <span className="mb-2 block font-medium text-white">
                    Check-in Date <span className="text-gold-400">*</span>
                  </span>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full rounded-lg border border-line bg-ink px-4 py-3 text-white focus:border-gold-500 focus:outline-none [color-scheme:dark]"
                  />
                </label>

                <label className="text-sm">
                  <span className="mb-2 block font-medium text-white">
                    Check-out Date <span className="text-gold-400">*</span>
                  </span>
                  <input
                    type="date"
                    required
                    min={checkIn || undefined}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full rounded-lg border border-line bg-ink px-4 py-3 text-white focus:border-gold-500 focus:outline-none [color-scheme:dark]"
                  />
                </label>
              </div>

              <label className="block text-sm">
                <span className="mb-2 block font-medium text-white">
                  Room Type <span className="text-gold-400">*</span>
                </span>
                <select
                  required
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="w-full rounded-lg border border-line bg-ink px-4 py-3 text-white focus:border-gold-500 focus:outline-none"
                >
                  <option value="" disabled>
                    Select room type
                  </option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} ({formatNaira(room.price)}/night)
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm">
                <span className="mb-2 block font-medium text-white">
                  Full Name <span className="text-gold-400">*</span>
                </span>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-lg border border-line bg-ink px-4 py-3 text-white placeholder:text-neutral-500 focus:border-gold-500 focus:outline-none"
                />
              </label>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="text-sm">
                  <span className="mb-2 block font-medium text-white">
                    Email Address <span className="text-gold-400">*</span>
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-line bg-ink px-4 py-3 text-white placeholder:text-neutral-500 focus:border-gold-500 focus:outline-none"
                  />
                </label>

                <label className="text-sm">
                  <span className="mb-2 block font-medium text-white">Phone Number</span>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-line bg-ink px-4 py-3 text-white placeholder:text-neutral-500 focus:border-gold-500 focus:outline-none"
                  />
                </label>
              </div>

              <div className="rounded-xl border border-gold-600/40 bg-ink/60 p-5">
                <div className="flex items-center justify-between text-sm text-neutral-300">
                  <span className="flex items-center gap-2">
                    <BedDouble size={16} className="text-gold-400" />
                    Room Rate (per night)
                  </span>
                  <span className="font-semibold text-white">
                    {selectedRoom ? formatNaira(selectedRoom.price) : 'Select room type'}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-neutral-300">
                  <span>Number of Nights</span>
                  <span className="font-semibold text-white">{nights > 0 ? nights : '-'}</span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-line pt-3 text-base">
                  <span className="font-semibold text-white">Estimated Total</span>
                  <span className="font-display text-xl text-gold-400">
                    {selectedRoom && nights > 0 ? formatNaira(total) : '-'}
                  </span>
                </div>
                {!(selectedRoom && nights > 0) && (
                  <p className="mt-2 text-xs italic text-neutral-500">
                    Select a room type and both dates to see pricing.
                  </p>
                )}
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Something went wrong sending your request. Please try again.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 border-t border-line px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-neutral-500">
                By clicking confirm, our team will reach out by email to confirm your
                reservation.
              </p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="shrink-0 whitespace-nowrap rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Confirm Booking'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
