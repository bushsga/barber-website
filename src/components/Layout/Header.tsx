'use client';

import { useState } from 'react';
import BookingButton from '@/components/UI/BookingButton';

export default function Header() {
  const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">CraftedCuts</h1>
          </div>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition duration-300">
                Home
              </a>
              <a href="#services" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition duration-300">
                Services
              </a>
              <a href="#about" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition duration-300">
                About
              </a>
              <a href="#contact" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop Book Button - Hidden on mobile */}
          <div className="hidden md:block">
            <BookingButton 
              calendlyUrl={calendlyUrl}
              className="bg-amber-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-amber-600 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
            />
          </div>

          {/* Mobile menu button - Visible only on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400 transition duration-300"
            >
              {/* Hamburger icon */}
              <svg
                className={`h-6 w-6 transform transition duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  /* X icon when menu is open */
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  /* Hamburger icon when menu is closed */
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slides down smoothly */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700 border-t border-blue-600">
            <a
              href="#home"
              className="block px-3 py-4 text-blue-100 hover:text-white hover:bg-blue-700 rounded-md text-base font-medium transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-4 text-blue-100 hover:text-white hover:bg-blue-700 rounded-md text-base font-medium transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block px-3 py-4 text-blue-100 hover:text-white hover:bg-blue-700 rounded-md text-base font-medium transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-4 text-blue-100 hover:text-white hover:bg-blue-700 rounded-md text-base font-medium transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            
            {/* Mobile Book Button */}
            <div className="px-3 py-4">
              <BookingButton 
                calendlyUrl={calendlyUrl}
                className="w-full bg-amber-500 text-white px-4 py-3 rounded-md text-base font-medium hover:bg-amber-600 transition duration-300 transform hover:scale-105 justify-center"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}