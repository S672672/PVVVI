import React from "react";
import Signup from "../Signup";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white p-6 border-4 border-b">
      <img className="h-16 ml-10 transform hover:scale-105 transition-transform duration-200 cursor-pointer" src="./src/assets/logo.png"></img>
      {/* <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">PetAdopt</span>
      </div> */}
      <div className='flex flex-col lg:flex-row items-center justify-center gap-0 lg:mx-10 mx-5 gap-2'>
      <input className="w-full lg:w-96 h-12 lg:ml-0 ml-5 rounded-lg flex items-center justify-center pl-5 bg-gray-300" type='text' placeholder='Search'></input>
      <button className='bg-green-400 h-12 hover:bg-orange-400 text-white font-bold py-3 px-6 rounded-lg text-lg mt-5 lg:mt-0'>Search</button>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-black hover:border-black">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full flex items-center justify-end lg:justify-start lg:w-auto gap-10">
        <div className="text-sm lg:flex-grow text-xl font-bold flex items-center justify-between">
          <a
            href="#search"
            className="block hover:underline mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black mr-2 lg:mr-4 transform hover:scale-105 transition-transform duration-200"
          >
            Adopt
          </a>
          <a
            href="#adopt"
            className="hover:underline block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black mr-2 lg:mr-4 transform hover:scale-105 transition-transform duration-200"
          >
            Give
          </a>
          <a
            href="#give"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black mr-2 lg:mr-4 hover:underline transform hover:scale-105 transition-transform duration-200"
          >
            Happening
          </a>
          <a
            href="#give"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black hover:underline transform hover:scale-105 transition-transform duration-200"
          >
            Playground
          </a>
        </div>
        <div>
          <button className="block mt-4 lg:inline-block lg:mt-0 text-white bg-green-500 hover:bg-blue-400 py-2 px-4 rounded-lg mr-4 font-bold">
            Log In
          </button>
          <NavLink to = "/signup">
          <button className="block mt-4 lg:inline-block lg:mt-0 text-white bg-orange-500 hover:bg-blue-400 py-2 px-4 rounded-lg font-bold">
            Sign Up
          </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
