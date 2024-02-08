import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 sm:p-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Logo and Copyright */}
        <div className="text-center sm:text-left mb-8 sm:mb-0">
          {/* Replace 'LOGO' with your actual logo */}
          <p className="text-lg font-bold">LOGO</p>
          <p>&copy; 2024 All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-8">
          <a href="#" className="hover:text-gray-300 text-xl sm:text-2xl">Home</a>
          <a href="#" className="hover:text-gray-300 text-xl sm:text-2xl">About us</a>
          <a href='#' className="hover:text-gray-300 text-base sm:text-xl">Company</a>
          <a href='#' className="hover:text-gray-300 text-base sm:text-xl">Partnership</a>
          <a href='#' className="hover:text-gray-300 text-base sm:text-xl">Press</a>
          <a href='#' className="hover:text-gray-300 text-base sm:text-xl">Blog</a>
          <a href="#" className="hover:text-gray-300 text-xl sm:text-2xl">Contact us</a>
          <a href='#' className="hover:text-gray-300 text-base sm:text-xl">Facebook</a>
          <a href='#' className="hover:text-gray-300 text-base sm:text-xl">Instagram</a>
          <a href='#' className="hover:text-gray-300 text-base sm:text-xl">Twitter</a>
          <a href='#' className="hover:text-gray-300 text-base sm:text-xl">LinkedIn</a>
        </div>

        {/* Social Icons */}
        <div className="hidden sm:flex items-center justify-center">
          <a href='#' className="text-white hover:text-gray-300 mx-2"><i className="fab fa-facebook"></i></a>
          <a href='#' className="text-white hover:text-gray-300 mx-2"><i className="fab fa-instagram"></i></a>
          <a href='#' className="text-white hover:text-gray-300 mx-2"><i className="fab fa-twitter"></i></a>
          <a href='#' className="text-white hover:text-gray-300 mx-2"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      {/* Additional Content */}
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Services</h2>
            <ul className="list-disc list-inside">
              <li><a href="#">Pet Adoption</a></li>
              <li><a href="#">Pet Grooming</a></li>
              <li><a href="#">Training Programs</a></li>
            </ul>
          </div>
          {/* Resources */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Resources</h2>
            <ul className="list-disc list-inside">
              <li><a href="#">Pet Care Tips</a></li>
              <li><a href="#">Adoption Guidelines</a></li>
              <li><a href="#">Emergency Contacts</a></li>
            </ul>
          </div>
          {/* Testimonials */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Testimonials</h2>
            <p>Read what our happy adopters say about us.</p>
          </div>
          {/* Events */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Events</h2>
            <p>Join us at upcoming pet events in your area.</p>
          </div>
          {/* Newsletter */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Newsletter</h2>
            <p>Subscribe to our newsletter for the latest updates.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
