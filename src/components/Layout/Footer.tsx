'use client';

import { Facebook, Twitter, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Mobile-first padding - smaller on mobile, larger on desktop */}
      <div className="py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Logo/Brand - Responsive font sizes */}
            <h3 className="text-xl font-bold text-white mb-3 sm:text-2xl sm:mb-4">
              SerenityTherapy
            </h3>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              Professional mental wellness services supporting your journey to emotional balance in New York
            </p>

            {/* Social Media Icons - Stack on mobile, horizontal on larger screens */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 active:scale-95 transition-all duration-200 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-600 active:scale-95 transition-all duration-200 shadow-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-700 hover:to-purple-700 active:scale-95 transition-all duration-200 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center hover:from-red-600 hover:to-red-700 active:scale-95 transition-all duration-200 shadow-lg"
                aria-label="Wellness Blog"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
            </div>

            {/* Quick Links - Stack vertically on mobile */}
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 mb-6 sm:mb-8">
              <a href="#home" className="text-gray-300 hover:text-teal-300 transition duration-300 text-sm font-medium py-1">
                Home
              </a>
              <a href="#services" className="text-gray-300 hover:text-teal-300 transition duration-300 text-sm font-medium py-1">
                Services
              </a>
              <a href="#about" className="text-gray-300 hover:text-teal-300 transition duration-300 text-sm font-medium py-1">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-teal-300 transition duration-300 text-sm font-medium py-1">
                Contact
              </a>
              <a href="#blog" className="text-gray-300 hover:text-teal-300 transition duration-300 text-sm font-medium py-1">
                Resources
              </a>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 pt-6 sm:pt-8">
              <p className="text-gray-300 text-xs sm:text-sm">
                &copy; 2024 SerenityTherapy Practice. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Licensed mental health services in New York, USA
              </p>
            </div>

            {/* Business Info - Better spacing for mobile */}
            <div className="mt-4 text-gray-400 text-xs space-y-1">
              <p>123 Wellness Avenue, New York, NY 10016</p>
              <p>+1 (555) 123-HELP</p>
              <p className="text-teal-300 mt-2">info@serenitytherapy.com</p>
            </div>

            {/* Emergency notice for therapy site */}
            <div className="mt-4 p-3 bg-gray-800 rounded-lg max-w-md mx-auto">
              <p className="text-xs text-gray-300">
                <strong>If you're in crisis:</strong> Call 988 for the Suicide & Crisis Lifeline
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}