import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Logo and Copyright */}
        <div className="text-center sm:text-left mb-8 sm:mb-0">
          <img src="/path/to/your/logo.png" alt="Company Logo" className="w-16 h-16 mb-2" />
          <p className="text-lg font-bold">&copy; 2024 All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-8">
          <a href="#" className="hover:text-gray-300 text-lg sm:text-xl">Home</a>
          <a href="#" className="hover:text-gray-300 text-lg sm:text-xl">About Us</a>
          <a href='#' className="hover:text-gray-300 text-lg sm:text-xl">Services</a>
          <a href='#' className="hover:text-gray-300 text-lg sm:text-xl">Blog</a>
          <a href='#' className="hover:text-gray-300 text-lg sm:text-xl">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center">
          <a href='#' className="text-white hover:text-gray-300 mx-2 transition duration-300 transform hover:scale-110"><i className="fab fa-facebook"></i></a>
          <a href='#' className="text-white hover:text-gray-300 mx-2 transition duration-300 transform hover:scale-110"><i className="fab fa-instagram"></i></a>
          <a href='#' className="text-white hover:text-gray-300 mx-2 transition duration-300 transform hover:scale-110"><i className="fab fa-twitter"></i></a>
          <a href='#' className="text-white hover:text-gray-300 mx-2 transition duration-300 transform hover:scale-110"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Services</h2>
            <ul className="list-disc list-inside">
              <li><a href="#">Pet Adoption</a></li>
              <li><a href="#">Pet Grooming</a></li>
              <li><a href="#">Training Programs</a></li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Resources</h2>
            <ul className="list-disc list-inside">
              <li><a href="#">Pet Care Tips</a></li>
              <li><a href="#">Adoption Guidelines</a></li>
              <li><a href="#">Emergency Contacts</a></li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Testimonials</h2>
            <p>Read what our happy adopters say about us.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Events</h2>
            <p>Join us at upcoming pet events in your area.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Newsletter</h2>
            <p>Subscribe to our newsletter for the latest updates.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
