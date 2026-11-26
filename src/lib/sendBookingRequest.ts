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

// TODO: replace with your own Formspree form endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeagndeb'

export async function sendBookingRequest(payload: BookingRequestPayload): Promise<void> {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Booking request failed')
  }
}
