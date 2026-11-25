import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

interface BookingModalContextValue {
  isOpen: boolean
  roomId?: string
  openBooking: (roomId?: string) => void
  closeBooking: () => void
}

const BookingModalContext = createContext<BookingModalContextValue | null>(null)

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [roomId, setRoomId] = useState<string | undefined>(undefined)

  const value = useMemo<BookingModalContextValue>(
    () => ({
      isOpen,
      roomId,
      openBooking: (id) => {
        setRoomId(id)
        setIsOpen(true)
      },
      closeBooking: () => setIsOpen(false),
    }),
    [isOpen, roomId],
  )

  return <BookingModalContext.Provider value={value}>{children}</BookingModalContext.Provider>
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext)
  if (!ctx) throw new Error('useBookingModal must be used within a BookingModalProvider')
  return ctx
}
