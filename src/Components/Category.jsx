import React from 'react'
import InsideCategory from './InsideCategory'

export default function Category() {
  return (
    <div className='h-40 w-full flex items-center justify-center m-10 gap-5'>
    <InsideCategory image="" type="dog" />
    <InsideCategory image="" type="cat" />
    <InsideCategory image="" type="sheep" />
    <InsideCategory image="" type="lion" />
    <InsideCategory image="" type="Tiger" />
    </div>
  )
}