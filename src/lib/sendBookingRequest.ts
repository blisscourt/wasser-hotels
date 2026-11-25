export interface BookingRequestPayload {
  roomName: string
  roomPrice: number
  checkIn: string
  checkOut: string
  nights: number
  total: number
  fullName: string
  email: string
  phone: string
}

/**
 * Stub for sending a booking request by email.
 *
 * Replace the body of this function with a real call to your email service,
 * e.g. a serverless function that sends via Resend/SendGrid/Postmark, a form
 * backend like Formspree/Getform, or EmailJS for a client-only integration:
 *
 *   const res = await fetch('/api/book', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(payload),
 *   })
 *   if (!res.ok) throw new Error('Booking request failed')
 */
export async function sendBookingRequest(payload: BookingRequestPayload): Promise<void> {
  console.log('Booking request (wire this up to your email service):', payload)
}
