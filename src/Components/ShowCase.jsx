
import React from 'react';

export default function ShowCase() {
  return (
    <>
    <div className='w-2/3 h-1/3 bg-green-400 rounded-md'>
        <div className=" bg-black opacity-50 rounded-md"></div>

        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white text-center">
          <p className="text-lg font-semibold">"Your Quote Goes Here"</p>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 bg-white p-2 rounded">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-2 border-gray-300 p-2 rounded"
          />
        </div>
      </div>
      </>
  );
};
