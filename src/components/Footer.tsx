import { Link } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";

type IconProps = { size?: number }

const FacebookIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.5-1.46H16.5V4.34C16.09 4.29 14.95 4.2 13.63 4.2c-2.8 0-4.13 1.56-4.13 4.26V10.5H7v3h2.5V21h4Z" />
  </svg>
)

const InstagramIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const XIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
)

const SOCIALS = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: XIcon, href: '#', label: 'X (Twitter)' },
]

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Rooms', href: '/#rooms' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink pt-16">
      <div className="container-page grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/images/logo.jpeg" alt="Wasser Hotel" className="h-20 w-auto object-contain" />
          <p className="mt-3 text-sm text-neutral-500">
            Your comfort is our priority.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-neutral-400 transition-colors hover:border-gold-500 hover:text-gold-400"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2">
            {LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm text-neutral-500 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-500">
            <li>Plot 893, 64 Road, 6th Avenue, Festac Lagos Nigeria.</li>
            <li>+234 803 234 1690</li>
            <li>+234 701 748 2356</li>
            <li>reservations@wasserhotels.com</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Room Rates
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-500">
            <li>Standard Single: ₦60,000</li>
            <li>Deluxe Single: ₦70,000</li>
            <li>Luxury Single: ₦80,000</li>
            <li>Suite Double: ₦120,000</li>
          </ul>
        </div>
      </div>

              {/* whatsapp icon  */}
        <a
          href={`https://wa.me/2348032341690?text=${encodeURIComponent(
            "Hello Wasser Hotel, I'd like to make a reservation.\n\nRoom Type:\nCheck-in:\nCheck-out:\nAdults:\nChildren:\nPhone Number:",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition duration-200"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={26} />
        </a>

      <div className="border-t border-line py-6">
        <p className="container-page text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} Wasser Hotel. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
