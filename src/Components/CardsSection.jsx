import React from 'react'
import Cards from './Cards'

export default function CardsSection() {
  return (
    <div className='m-10 px-72 w-screen flex justify-center items-center gap-4 overflow-x-auto flex-wrap mx-72'> 
        <Cards picture="./src/assets/cat.jpeg" description="Hello world"/>
        <Cards picture="./src/assets/dog1.jpg" description="Hello world"/>
        <Cards picture="./src/assets/rabbit.jpg" description="Hello world"/>
        <Cards picture="./src/assets/parrot.jpeg" description="Hello world"/>
        <Cards picture="./src/assets/piegon.jpg" description="Hello world"/>
    </div>
  )
}