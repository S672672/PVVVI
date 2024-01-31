import React from 'react'
export default function Cards({picture,isAvailable}) {
  return (
    <div className='h-96 w-96 m-2 bg-white border-solid border-4 rounded-lg flex-col justify-center items-center cursor-pointer p-1 shadow-black shadow-md transform hover:scale-105 transition-transform duration-200'>
    <img src={picture} className='size-72 ml-8 m-1 transform hover:scale-105 transition-transform duration-300'></img>
    <div className='h-20 w-92 border-4 rounded-lg bg-green-400 text-3xl font-bold text-white flex justify-center items-center cursor-pointer transform hover:scale-105 transition-transform duration-300'>{isAvailable}</div>
    </div>
  )
}
