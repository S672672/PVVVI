import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-gray-800 text-white p-4 h-96 fw-full flex justify-between"> 
      <div className="container m-5 flex justify-around">
        <div>
          <p className="text-lg font-bold">LOGO</p>
          <p>&copy; 2024 All rights reserved.</p>
        </div>
        <div className="flex justify-around">
        <div>
          <a href="#" className="hover:text-gray-300 text-5xl">Home</a>
          </div>
          <div className='flex flex-col gap-2 items-center justify-center'>
          <a href="#" className="hover:text-gray-300 text-5xl">About us</a>
          <a href='#' className="hover:text-gray-300 text-2xl">Company</a>
          <a href='#' className="hover:text-gray-300 text-2xl">Partnership</a>
          <a href='#' className="hover:text-gray-300 text-2xl">Press</a>
          <a href='#' className="hover:text-gray-300 text-2xl">Blog</a>
          </div>
          <div className='flex flex-col gap-2 items-center justify-center'>
          <a href="#" className="hover:text-gray-300 text-5xl">Contact us</a>
          <a href='#' className="hover:text-gray-300 text-2xl">Facebook</a>
          <a href='#' className="hover:text-gray-300 text-2xl">Instagram</a>
          <a href='#' className="hover:text-gray-300 text-2xl">Twitter</a>
          <a href='#' className="hover:text-gray-300 text-2xl">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
