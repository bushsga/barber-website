'use client';

import BookingButton from '@/components/UI/BookingButton';

export default function Hero() {
  const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";

  return (
    <section 
      id="home" 
      className="relative py-16 text-white overflow-hidden min-h-[50vh] flex items-center sm:min-h-[60vh] md:min-h-[70vh]"
    >
      {/* Background Image with multiple fallbacks */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-teal-600 to-blue-800">
        {/* Optional: Add a subtle background pattern for texture */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "20px 20px"
          }}
        ></div>
      </div>
      
      {/* Enhanced overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold mb-4 leading-tight sm:text-4xl sm:mb-6 md:text-5xl">
          Professional Therapy Services<br className="hidden sm:block" />
          in <span className="bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">New York</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg mb-6 max-w-2xl mx-auto leading-relaxed sm:text-xl sm:mb-8">
          Compassionate mental health care tailored to your unique journey. 
          Start your path to wellness today.
        </p>
        
        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <BookingButton 
            calendlyUrl={calendlyUrl}
            buttonText="Schedule Consultation"
            className="bg-gradient-to-r from-white to-teal-50 text-teal-700 px-6 py-3 rounded-lg font-semibold text-base hover:from-teal-50 hover:to-white transition-all duration-200 active:scale-95 shadow-lg hover:shadow-teal-500/20 border border-teal-300 sm:px-8 sm:py-4 sm:text-lg"
          />
          
          {/* Secondary CTA for mobile */}
          <a 
            href="#contact" 
            className="bg-transparent text-white px-6 py-3 rounded-lg font-semibold text-base border-2 border-white/50 hover:bg-white/10 transition-all duration-200 active:scale-95 sm:px-8 sm:py-4 sm:text-lg"
          >
            Learn More
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto sm:grid-cols-3 sm:max-w-lg sm:mt-12">
          <div className="text-center">
            <div className="text-white font-bold text-sm sm:text-base">Licensed Therapists</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold text-sm sm:text-base">Confidential</div>
          </div>
          <div className="text-center col-span-2 sm:col-span-1">
            <div className="text-white font-bold text-sm sm:text-base">Insurance Accepted</div>
          </div>
        </div>

        {/* Emergency Notice for Therapy Site */}
        <div className="mt-6 max-w-md mx-auto sm:mt-8">
          <div className="bg-red-600/80 backdrop-blur-sm rounded-lg p-3 border border-red-400/50">
            <p className="text-white text-xs font-medium sm:text-sm">
              <strong>In crisis?</strong> Call 988 for immediate support
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 sm:bottom-6">
        <div className="animate-bounce">
          <svg className="w-5 h-5 text-white/80 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}