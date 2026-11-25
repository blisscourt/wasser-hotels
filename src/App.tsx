import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import BookingModal from './components/BookingModal'
import Footer from './components/Footer'
import Header from './components/Header'
import { BookingModalProvider } from './context/BookingModalContext'
import HomePage from './pages/HomePage'
import RoomDetailPage from './pages/RoomDetailPage'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0 })
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <BookingModalProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-ink">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/rooms/:id" element={<RoomDetailPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <BookingModal />
      </BookingModalProvider>
    </BrowserRouter>
  )
}
