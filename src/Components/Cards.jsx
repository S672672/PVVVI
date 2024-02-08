import React from 'react';

export default function Cards({ picture, description }) {
  return (
    <div className='min-w-[300px] max-w-full h-auto m-2 bg-white border-solid border-4 rounded-lg z-10 flex-col justify-center items-center cursor-pointer p-1 shadow-black shadow-md transform hover:scale-105 transition-transform duration-200 mx-auto'>
      <img src={picture} alt="Pet" className='w-full h-48 object-cover rounded-t-lg' />
      <div className='flex items-center justify-center font-bold text-black p-2'>
        {description}
      </div>
    </div>
  );
}
