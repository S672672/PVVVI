import React from 'react'

export default function Process() {
  return (
    <div className='flex flex-col items-center justify-center m-10 gap-3'>
        <p className='text-black font-bold text-3xl'>Ready to adopt or give?</p>
        <button className="bg-green-400 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full text-lg">Find a pet</button>
        <button className="bg-gray-300 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full text-lg">Give a pet</button>
    </div>
  )
}