'use client';

import ServiceCard from '@/components/UI/ServiceCard';

const services = [
  {
    title: "Classic Haircut",
    description: "Professional haircut with precision styling and premium finishing",
    price: "$2,500",
    duration: "30 min",
    popular: false
  },
  {
    title: "Beard Grooming", 
    description: "Expert beard shaping with hot towel treatment and beard oil",
    price: "$1,800",
    duration: "25 min",
    popular: false
  },
  {
    title: "Executive Package",
    description: "Complete haircut & beard grooming with scalp massage",
    price: "$4,500",
    duration: "60 min",
    popular: true
  },
  {
    title: "Royal Treatment",
    description: "Full luxury experience with premium product treatment",
    price: "$6,500",
    duration: "75 min",
    popular: false
  }
];

export default function Services() {
  // Replace with your actual Instagram URL
  const instagramUrl = "https://instagram.com/yourbarbershop";

  return (
    <section id="services" className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8">
        {/* Sleek Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-6 md:w-8 h-0.5 bg-amber-500 mr-2"></div>
            <span className="text-amber-600 font-semibold text-xs uppercase tracking-wider">Our Services</span>
            <div className="w-6 md:w-8 h-0.5 bg-amber-500 ml-2"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Premium Grooming Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Experience precision grooming with our expert barbers and premium products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              duration={service.duration}
              popular={service.popular}
            />
          ))}
        </div>

        {/* Compact Call-to-Action */}
        <div className="text-center mt-10 md:mt-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-6 md:p-8 shadow-lg mx-2 md:mx-0">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
            Ready for Your Transformation?
          </h3>
          <p className="text-blue-100 text-xs md:text-sm mb-4 md:mb-6 max-w-xl mx-auto">
            Book your appointment today and experience the CraftedCuts difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => window.open('https://calendly.com/ibrahimjamiuakeem/30min', '_blank')}
              className="bg-amber-500 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-amber-600 transition duration-300"
            >
              Book Consultation
            </button>
            
            {/* FUNCTIONAL Gallery Button - Opens Instagram */}
            <button 
              onClick={() => window.open(instagramUrl, '_blank')}
              className="border border-white text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-white hover:text-blue-900 transition duration-300"
            >
              View Our Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}