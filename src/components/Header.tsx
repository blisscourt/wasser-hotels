import { useEffect, useState } from 'react'
import { CalendarCheck, Menu, Phone, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useBookingModal } from '../context/BookingModalContext'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Rooms', href: '/#rooms' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openBooking } = useBookingModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-ink/95 backdrop-blur border-b border-line'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
    >
      <div className="container-page flex h-24 items-center justify-between sm:h-28">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logo.jpeg"
            alt="Wasser Hotel"
            className="h-16 w-auto object-contain sm:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm font-medium uppercase tracking-wider text-neutral-300 transition-colors hover:text-gold-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+2347017482356"
            className="flex items-center gap-2 rounded-full border border-gold-600/60 px-5 py-2.5 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-ink"
          >
            <Phone size={16} />
            Reserve a Room
          </a>
          <button
            type="button"
            onClick={() => openBooking()}
            className="flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-400"
          >
            <CalendarCheck size={16} />
            Book Room
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="text-gold-400 lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-ink/98 backdrop-blur lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-wider text-neutral-300 hover:bg-panel hover:text-gold-400"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                openBooking()
              }}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-ink"
            >
              <CalendarCheck size={16} />
              Book Room
            </button>
            <a
              href="tel:+2347017482356"
              className="flex items-center justify-center gap-2 rounded-full border border-gold-600/60 px-5 py-3 text-sm font-semibold text-gold-400"
            >
              <Phone size={16} />
              Reserve a Room
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
