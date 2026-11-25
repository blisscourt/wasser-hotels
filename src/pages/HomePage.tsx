import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from '../components/About'
import Amenities from '../components/Amenities'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Rooms from '../components/Rooms'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.querySelector(location.hash)
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [location])

  return (
    <>
      <Hero />
      <About />
      <Amenities />
      <Rooms />
      <Contact />
    </>
  )
}
