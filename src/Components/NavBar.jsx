import React, { useState } from 'react'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    (
      <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
   
        <div className="text-white font-bold text-2xl">LOGO</div>

        
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute top-0 right-0 bg-gray-800 p-4">
              <ul className="flex flex-col space-y-3">
                <li><a href="#" className="text-white hover:text-gray-300 text-lg">Home</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 text-lg">About</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 text-lg">Services</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 text-lg">Contact</a></li>
                <li><a href="#" className="text-white hover:text-gray-300 text-lg">Blog</a></li>
              </ul>
            </div>
          )}
        </div>

      
        <ul className="hidden lg:flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-300 text-lg">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 text-lg">About</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 text-lg">Services</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 text-lg">Contact</a></li>
          <li><a href="#" className="text-white hover:text-gray-300 text-lg">view</a></li>
        </ul>

        <div className="lg:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-md focus:outline-none focus:shadow-outline text-gray-800"
            />
            <button className="absolute right-0 top-0 mt-3 mr-3">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6M3 9a9 9 0 11218 0 9 9 0 01-18 0z"
                ></path>
              </svg>
            </button>
          </div>
          <button className="bg-blue-500 text-white my-5 px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline text-lg">
           Login
          </button>
          <img src='./src/assets/profile.jpg' className='h-12 w-12 rounded-2xl cursor-pointer transition-all '></img>
        </div>
      </div>
    </nav>
  )
  )
} 