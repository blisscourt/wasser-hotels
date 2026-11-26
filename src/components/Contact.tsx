import { useState, type FormEvent } from 'react'
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import Reveal from './Reveal'

const GOOGLE_PROFILE_URL = 'https://share.google/m8qnIxScpKVjssWtx'

const GoogleIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    />
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    />
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    />
  </svg>
)

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

// TODO: replace with your own Formspree form endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeagndeb'

export default function Contact() {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setSuccess(false)
    setError('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          phone,
          email,
          message,
        }),
      })

      if (response.ok) {
        setSuccess(true)
        setFullName('')
        setPhone('')
        setEmail('')
        setMessage('')
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error(err)
      setError('Unable to send your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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

          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex items-center justify-between gap-4 rounded-xl border border-gold-600/40 bg-panel/60 p-5 transition-colors hover:border-gold-500"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
                <GoogleIcon size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Find Us on Google</p>
                <p className="text-xs text-neutral-500">View our profile &amp; reviews</p>
              </div>
            </div>
            <ExternalLink size={18} className="shrink-0 text-gold-400" />
          </a>
        </Reveal>

        <Reveal
          direction="right"
          as="form"
          className="rounded-2xl border border-line bg-panel/60 p-8"
          onSubmit={sendEmail}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="rounded-lg border border-line bg-ink px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-gold-500 focus:outline-none sm:col-span-1"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-lg border border-line bg-ink px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-gold-500 focus:outline-none sm:col-span-1"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border border-line bg-ink px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-gold-500 focus:outline-none sm:col-span-2"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-lg border border-line bg-ink px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-gold-500 focus:outline-none sm:col-span-2"
            />
          </div>

          {success && (
            <p className="mt-4 text-sm text-gold-300">
              Thank you! Your message has been sent. We'll get back to you shortly.
            </p>
          )}
          {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-full bg-gold-500 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </Reveal>
      </div>
    </section>
  )
}
