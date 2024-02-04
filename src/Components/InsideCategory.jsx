import React from 'react'

export default function InsideCategory({image,type}) {
  return (
    <div className='h-30 flex flex-col justify-center items-center'>
         <img src={image} alt='dog'></img>
    <div className=''>{type}</div>
    </div>
  )
}