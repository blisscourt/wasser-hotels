import type { FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import Reveal from './Reveal'

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Plot 893, 64 Road, 6th Avenue, Festac Lagos Nigeria.',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 701 748 2356, +234 803 234 1690',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'reservations@wasserhotels.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-24">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <Reveal direction="left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
            Get in Touch
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            We'd Love to Host You
          </h2>
          <p className="mt-4 max-w-md text-neutral-400">
            Reach out to our reservations team for bookings, inquiries, or
            special requests.
          </p>

          <div className="mt-10 space-y-6">
            {CONTACT_DETAILS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-600/40 text-gold-400">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">{label}</p>
                  <p className="text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          direction="right"
          as="form"
          className="rounded-2xl border border-line bg-panel/60 p-8"
          onSubmit={(e: FormEvent) => e.preventDefault()}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-lg border border-line bg-ink px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-gold-500 focus:outline-none sm:col-span-1"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-lg border border-line bg-ink px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-gold-500 focus:outline-none sm:col-span-1"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-lg border border-line bg-ink px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-gold-500 focus:outline-none sm:col-span-2"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="rounded-lg border border-line bg-ink px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-gold-500 focus:outline-none sm:col-span-2"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-gold-500 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-gold-400"
          >
            Send Message
          </button>
        </Reveal>
      </div>
    </section>
  )
}
