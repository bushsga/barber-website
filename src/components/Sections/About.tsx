'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Animation for numbers
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  // Your Calendly URL
  const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate numbers when section is visible
          if (isVisible) {
            animateNumber(4, setYears, 2000);
            animateNumber(2000, setClients, 2000);
            animateNumber(100, setSatisfaction, 2000);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateNumber = (target: number, setter: React.Dispatch<React.SetStateAction<number>>, duration: number) => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(start));
      }
    }, 16);
  };

  const handleBookNow = () => {
    window.open(calendlyUrl, '_blank');
  };

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-amber-500 mr-3"></div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <div className="w-12 h-0.5 bg-amber-500 ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-amber-600 bg-clip-text text-transparent">
              Redefining Barber Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where tradition meets innovation in the art of grooming
          </p>
        </div>

        {/* Modern Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Animated Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 text-white text-center shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {years}+
                  </div>
                  <div className="text-sm uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {clients}+
                  </div>
                  <div className="text-sm uppercase tracking-wider">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {satisfaction}%
                  </div>
                  <div className="text-sm uppercase tracking-wider">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">5★</div>
                  <div className="text-sm uppercase tracking-wider">Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">
                At <span className="font-semibold text-amber-600">CraftedCuts</span>, we don't just cut hair – 
                we <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent font-bold">sculpt confidence</span>. 
                Our master barbers are artisans trained in the latest techniques, blending traditional craftsmanship 
                with modern innovation.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Founded in 2020, we've redefined the grooming experience for thousands of discerning clients across NEW YORK. 
                Our commitment to <span className="font-semibold">precision, excellence, and unparalleled service</span> has 
                established us as the premier destination for those who demand nothing but the best.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mt-8 border-l-4 border-amber-500">
                <p className="text-gray-700 italic text-lg">
                  "We believe that a great haircut is not just a service, but a transformative experience 
                  that boosts confidence and leaves a lasting impression."
                </p>
              </div>
            </div>

            {/* Premium Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Premium Products</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Expert Barbers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Modern Techniques</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Luxury Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - NOW WITH FUNCTIONAL BUTTON */}
        <div className="text-center mt-16">
          <button 
            onClick={handleBookNow}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
          >
            Experience the Difference
          </button>
          <p className="text-gray-500 text-sm mt-3">
            Click to book your premium grooming experience
          </p>
        </div>
      </div>
    </section>
  );
}