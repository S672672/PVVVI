import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 sm:p-8 h-auto">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between">
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold">LOGO</p>
          <p>&copy; 2024 All rights reserved.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 mt-4 sm:mt-0">
          <div className="flex flex-col gap-2 items-center justify-center">
            <a href="#" className="hover:text-gray-300 text-xl sm:text-5xl">Home</a>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <a href="#" className="hover:text-gray-300 text-xl sm:text-5xl">About us</a>
            <a href='#' className="hover:text-gray-300 text-base sm:text-2xl">Company</a>
            <a href='#' className="hover:text-gray-300 text-base sm:text-2xl">Partnership</a>
            <a href='#' className="hover:text-gray-300 text-base sm:text-2xl">Press</a>
            <a href='#' className="hover:text-gray-300 text-base sm:text-2xl">Blog</a>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <a href="#" className="hover:text-gray-300 text-xl sm:text-5xl">Contact us</a>
            <a href='#' className="hover:text-gray-300 text-base sm:text-2xl">Facebook</a>
            <a href='#' className="hover:text-gray-300 text-base sm:text-2xl">Instagram</a>
            <a href='#' className="hover:text-gray-300 text-base sm:text-2xl">Twitter</a>
            <a href='#' className="hover:text-gray-300 text-base sm:text-2xl">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
