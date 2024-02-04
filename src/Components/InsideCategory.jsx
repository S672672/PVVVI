import React from 'react'

export default function InsideCategory({image,type}) {
  return (
    <div className='h-15 flex flex-col justify-evenly items-center  object-cover rounded-t-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer'>
         <img src={image} className='h-10 rounded-3xl' alt='dog'></img>
    <div className='font-bold text-xl'>{type}</div>
    </div>
  )
}