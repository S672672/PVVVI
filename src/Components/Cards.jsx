import React from 'react'
export default function Cards({picture,isAvailable}) {
  return (
    <div className='h-96 w-96 m-2 bg-white border-solid border-4 rounded-lg'>
    <image src={picture} className='h-80 w-80'></image>
    <div className='h-20 w-80'>{isAvailable}</div>
    </div>
  )
}
