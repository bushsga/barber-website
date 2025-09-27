'use client';

import { useState, useEffect } from 'react';
import BookingButton from '@/components/UI/BookingButton';

export default function Header() {
  const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fix for iOS Safari viewport height issue
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Set proper viewport height for mobile Safari
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', setVH);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setVH);
    };
  }, []);

  return (
    <header className={`bg-gradient-to-r from-teal-600 to-teal-800 shadow-lg sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-xl' : 'shadow-md'
    }`}>
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo - Fixed for mobile */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent sm:text-2xl">
              SerenityTherapy
            </h1>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="ml-6 flex items-baseline space-x-6 lg:space-x-8">
              <a 
                href="#home" 
                className="text-white hover:text-teal-200 px-2 py-1 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-teal-200"
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-white hover:text-teal-200 px-2 py-1 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-teal-200"
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-teal-200 px-2 py-1 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-teal-200"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-teal-200 px-2 py-1 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-teal-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Desktop Book Button */}
          <div className="hidden md:block">
            <BookingButton 
              calendlyUrl={calendlyUrl}
              className="bg-white text-teal-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-50 transition-all duration-200 active:scale-95 shadow-lg hover:shadow-teal-500/20 border border-teal-500"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-100 hover:text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className={`h-5 w-5 transform transition-transform duration-200 ${isMenuOpen ? 'rotate-90 opacity-70' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fixed positioning for iOS */}
        <div 
          className={`md:hidden absolute left-0 right-0 bg-teal-700 border-t border-teal-600 transition-all duration-300 ease-out ${
            isMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          }`}
          style={{
            top: '100%',
            boxShadow: isMenuOpen ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
          }}
        >
          <div className="px-3 py-2 space-y-0">
            <a
              href="#home"
              className="block px-3 py-3 text-teal-100 hover:text-white hover:bg-teal-600 rounded-lg text-base font-medium transition-colors duration-200 active:bg-teal-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-3 text-teal-100 hover:text-white hover:bg-teal-600 rounded-lg text-base font-medium transition-colors duration-200 active:bg-teal-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block px-3 py-3 text-teal-100 hover:text-white hover:bg-teal-600 rounded-lg text-base font-medium transition-colors duration-200 active:bg-teal-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-3 text-teal-100 hover:text-white hover:bg-teal-600 rounded-lg text-base font-medium transition-colors duration-200 active:bg-teal-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            
            {/* Mobile Book Button */}
            <div className="px-3 py-3 border-t border-teal-600 mt-2">
              <BookingButton 
                calendlyUrl={calendlyUrl}
                className="w-full bg-white text-teal-700 px-4 py-3 rounded-lg text-base font-semibold hover:bg-teal-50 transition-all duration-200 active:scale-95 justify-center border border-teal-500 shadow-md"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}