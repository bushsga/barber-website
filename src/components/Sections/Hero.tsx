'use client';

import BookingButton from '@/components/UI/BookingButton';

export default function Hero() {
  const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";

  return (
    <section 
      id="home" 
      className="relative py-20 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/fer-almaraz-kIBQd2k89M4-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className='absolute inset-0 bg-black opacity-20'></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Premium Barber Experience in NEW YORK
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Where style meets precision. Experience the best grooming services with our expert barbers.
        </p>
        
        <BookingButton 
          calendlyUrl={calendlyUrl}
          buttonText="Book Your Appointment"
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/30 border-2 border-blue-400/30 hover:border-blue-400/50"
        />
      </div>
    </section>
  );
}