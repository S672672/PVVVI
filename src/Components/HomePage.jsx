import React from 'react'
import CardsSection from './CardsSection'
import NavBar from './NavBar'
import Footer from './Footer'
import ShowCase from './ShowCase'
import Category from './Category'
import Process from './Process'
import Signup from '../Signup'
import { Route } from 'react-router-dom'
export default function HomePage() {
  return (
    <Route>
    <div> 
        <NavBar />
        <div className='flex flex-col items-center justify-center'>
        <ShowCase />
         <CardsSection />
         <Process />
         </div>
          <Footer />
    </div>
    </Route>
    
  )
}