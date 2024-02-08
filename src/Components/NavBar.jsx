import React from 'react';

export default function Navbar(){
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 border-4 border-b">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">PetAdopt</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-black hover:border-black">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex flex-grow lg:flex lg:items-center lg:w-auto justify-between lg:ml-96">
        <div className="text-sm lg:flex-grow text-xl font-bold">
          <a href="#search" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black mr-4">
            Adopt
          </a>
          <a href="#adopt" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black mr-4">
            Give
          </a>
          <a href="#give" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black mr-4">
            Happening
          </a>
          <a href="#give" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black mr-4">
            Playground
          </a>
        </div>
        <div>
        <button className="block mt-4 lg:inline-block lg:mt-0 text-white bg-green-500 hover:bg-green-700 py-2 px-4 rounded-lg mr-4">
            Log In
          </button>
          <button className="block mt-4 lg:inline-block lg:mt-0 text-white bg-orange-500 hover:bg-orange-700 py-2 px-4 rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
