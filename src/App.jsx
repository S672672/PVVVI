import React from 'react'
import NavBar from './Components/NavBar'
import HomePage from './Components/HomePage'
import Cards from './Components/Cards'
import CardsSection from './Components/CardsSection'
import AboutUs from './Pages/AboutUs'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
    <div>
    <HomePage />
    </div>
    </BrowserRouter>
  )
}