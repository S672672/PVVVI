import React from 'react';

export default function Cards({ picture, isAvailable }) {
  return (
    <div className='max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto m-2 bg-white border-solid border-4 rounded-lg z-10 flex-col justify-center items-center cursor-pointer p-1 shadow-black shadow-md transform hover:scale-105 transition-transform duration-200'>
      <img src={picture} alt="Pet" className='w-full h-72 object-cover rounded-t-lg transform hover:scale-105 transition-transform duration-300' />
      <div className='h-20 max-w-full border-4 rounded-b-lg bg-green-400 text-3xl font-bold text-white flex justify-center items-center cursor-pointer transform hover:scale-105 transition-transform duration-300'>{isAvailable}</div>
    </div>
  );
}
