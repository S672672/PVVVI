import React from 'react';

export default function ShowCase() {
  const background = 'url("./src/assets/dog.jpeg")';
  return (
    <div className='lg:w-1/2 md:w-3/4 sm:w-full bg-gray-400 rounded-md m-5' style={{ height: '600px', backgroundImage: background, backgroundSize: 'cover' }}>
      <div className='flex flex-col lg:mt-80 mt-20 gap-10'>
        <h1 className='text-white font-bold text-4xl lg:ml-10 ml-5'>Find your best friend <br />as a pet.</h1>
        <div className='flex flex-col lg:flex-row items-center gap-5 lg:mx-10 mx-5'>
          <input className='w-full lg:w-96 h-12 lg:ml-0 ml-5 rounded-md flex items-center justify-center pl-5' type='text' placeholder='Search' />
          <button className='bg-blue-300 hover:bg-orange-400 text-black font-bold py-3 px-6 rounded-full text-lg mt-5 lg:mt-0'>Search</button>
        </div>
      </div>
    </div>
  );
}
