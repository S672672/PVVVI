import React from 'react'
import InsideCategory from './InsideCategory'

export default function Category() {
  return (
    <div className='h-25 w-full flex items-center justify-evenly m-10 gap-5'>
    <InsideCategory image="./src/assets/dog1.jpg" type="dog" />
    <InsideCategory image="./src/assets/cat.jpeg" type="cat" />
    <InsideCategory image="./src/assets/rabbit.jpg" type="rabbit" />
    <InsideCategory image="./src/assets/rabbit.jpg" type="rabbit" />
    <InsideCategory image="./src/assets/rabbit.jpg" type="rabbit" />
    <InsideCategory image="./src/assets/rabbit.jpg" type="rabbit" />
    <InsideCategory image="" type="lion" />
    <InsideCategory image="" type="Tiger" />
    </div>
  )
}