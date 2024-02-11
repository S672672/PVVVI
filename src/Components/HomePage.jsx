import React from 'react'
import CardsSection from './CardsSection'
import NavBar from './NavBar'
import Footer from './Footer'
import ShowCase from './ShowCase'
import Category from './Category'
import Process from './Process'
import Signup from '../Signup'
import { Route, Router } from 'react-router-dom'
import Approuter from './Router'
export default function HomePage() {
  return (
    <div> 
        <NavBar />
        <div className='flex flex-col items-center justify-center'>
        <ShowCase />
         <CardsSection />
         <Process />
         </div>
          <Footer />
    </div>
   
    
  )
}