"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">TechSolutions</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 font-medium transition-colors duration-300">
              HOME
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600 px-3 py-2 font-medium transition-colors duration-300">
              ABOUT US
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-blue-600 px-3 py-2 font-medium transition-colors duration-300">
              OUR SERVICES
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 px-3 py-2 font-medium transition-colors duration-300">
              CONTACT US
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium hover:bg-gray-50 rounded-md">
              HOME
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium hover:bg-gray-50 rounded-md">
              ABOUT US
            </Link>
            <Link href="/services" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium hover:bg-gray-50 rounded-md">
              OUR SERVICES
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium hover:bg-gray-50 rounded-md">
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 