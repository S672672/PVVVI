import React from 'react'
import CardsSection from './CardsSection'
import NavBar from './NavBar'
import Footer from './Footer'
import Category from './Category'
export default function HomePage() {
  return (
    <div>
        <NavBar />
        <Category />
        <CardsSection />
        <CardsSection />
        <Footer />
    </div>
  )
}