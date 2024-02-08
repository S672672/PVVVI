import React from 'react';

export default function ShowCase() {
  const background = 'url("./src/assets/dog.jpeg")'
  return (
    <div className='w-1/2 bg-gray-400 rounded-md m-5' style={{height:'600px',backgroundImage:background}}>
    <div className='flex flex-col mt-80 gap-10 '>
    <h1 className='text-white font-bold text-3xl ml-10'>Hello Hello Mike testing</h1>
      <input className='w-96 h-12 ml-10 rounded-md flex items-center justify-center' type='text' placeholder='search'></input>
      </div>
    </div>
  );
}