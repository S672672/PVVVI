import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-gray-800 text-white p-4 h-96 w-full"> 
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold">LOGO</p>
          <p>&copy; 2024 All rights reserved.</p>
        </div>
        <div className="flex flex-col space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};
