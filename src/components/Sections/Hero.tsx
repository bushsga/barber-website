'use client';

import BookingButton from '@/components/UI/BookingButton';

export default function Hero() {
  const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";

  return (
    <section 
      id="home" 
      className="relative py-20 text-white overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://img.freepik.com/premium-photo/barber-shop-with-vintage-aesthetic-showcasing-history-tradition-shop_117038-13246.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay for better text readability - slightly darker for this image */}
      <div className='absolute inset-0 bg-black opacity-40'></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Premium Barber Experience
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Where <span className="text-amber-300">traditional craftsmanship</span> meets modern excellence
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingButton 
            calendlyUrl={calendlyUrl}
            buttonText="Book Your Appointment"
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-amber-500/30 border-2 border-amber-400/30 hover:border-amber-400/50"
          />
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            View Services
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-90">
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-amber-400 mr-2">★</span>
            <span className="text-sm">4.9/5 Rating</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-amber-400 mr-2">✓</span>
            <span className="text-sm">2000+ Happy Clients</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-amber-400 mr-2">🎯</span>
            <span className="text-sm">Premium Experience</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}