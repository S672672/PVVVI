import React from 'react'
import CardsSection from './CardsSection'
import NavBar from './NavBar'
import Footer from './Footer'
export default function HomePage() {
  return (
    <div>
        <NavBar />
        <CardsSection />
        <CardsSection />
        <Footer />
    </div>
  )
}