import React from 'react'

export default function Process() {
  return (
    <div className='flex flex-col items-center justify-center m-10 gap-5'>
        <p className='text-black font-bold text-5xl flex flex-col items-center justify-center'>Ready to adopt or <span> give? </span></p>
        <button className="bg-green-400 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full text-lg">Find a pet</button>
        <button className="bg-gray-300 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full text-lg">Give a pet</button>
    </div>
  )
}