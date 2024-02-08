import React from 'react'
import CardsSection from './CardsSection'
import NavBar from './NavBar'
import Footer from './Footer'
import ShowCase from './ShowCase'
import Category from './Category'
export default function HomePage() {
  return (
    <div>
        <NavBar /> 
        <div className='flex flex-col items-center justify-center'>
        <ShowCase />
         <CardsSection />
         </div>
          <Footer />
    </div>
  )
}