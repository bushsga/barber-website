'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // Animation for numbers - simpler approach
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";

  // Simplified counting function for better mobile compatibility
  const animateNumber = (target: number, setter: React.Dispatch<React.SetStateAction<number>>, duration: number) => {
    let start = 0;
    const increment = target / (duration / 50); // 50ms intervals
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(start));
      }
    }, 50);
  };

  useEffect(() => {
    // Simple intersection observer with fallback
    const checkVisibility = () => {
      if (!sectionRef.current || hasAnimated.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight * 0.8;
      
      if (isInView && !hasAnimated.current) {
        setIsVisible(true);
        hasAnimated.current = true;
        
        // Start animations with reduced duration for performance
        setTimeout(() => {
          animateNumber(8, setYears, 1500);
          animateNumber(500, setClients, 1500);
          animateNumber(98, setSatisfaction, 1500);
        }, 300);
      }
    };

    // Throttled scroll handler
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          checkVisibility();
          scrollTimeout = null as unknown as NodeJS.Timeout;
        }, 100);
      }
    };

    checkVisibility(); // Check on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  const handleBookNow = () => {
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="py-12 md:py-20 bg-gradient-to-br from-white to-teal-50 relative overflow-hidden"
    >
      {/* Simpler decorative elements - better mobile performance */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-teal-100 rounded-full opacity-20 sm:w-72 sm:h-72"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-100 rounded-full opacity-20 sm:w-72 sm:h-72"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-8 h-0.5 bg-teal-500 mr-2 sm:w-12 sm:mr-3"></div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <div className="w-8 h-0.5 bg-teal-500 ml-2 sm:w-12 sm:ml-3"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-gray-900 to-teal-600 bg-clip-text text-transparent">
              Your Journey to Mental Wellness
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto sm:text-xl">
            Where compassionate care meets evidence-based therapy
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-6 text-white text-center shadow-lg sm:p-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1 sm:text-4xl md:text-5xl">
                    {years}+
                  </div>
                  <div className="text-xs uppercase tracking-wider sm:text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1 sm:text-4xl md:text-5xl">
                    {clients}+
                  </div>
                  <div className="text-xs uppercase tracking-wider sm:text-sm">Clients Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1 sm:text-4xl md:text-5xl">
                    {satisfaction}%
                  </div>
                  <div className="text-xs uppercase tracking-wider sm:text-sm">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1 sm:text-4xl md:text-5xl">5★</div>
                  <div className="text-xs uppercase tracking-wider sm:text-sm">Client Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 md:space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-base leading-relaxed sm:text-lg">
                At <span className="font-semibold text-teal-600">SerenityTherapy</span>, we don't just provide therapy – 
                we <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent font-bold">facilitate healing</span>. 
                Our licensed therapists are trained in the latest evidence-based techniques, blending compassionate care 
                with professional expertise.
              </p>
              
              <p className="text-gray-700 text-base leading-relaxed sm:text-lg">
                Founded with a vision to make mental health care accessible and effective, we've helped hundreds of clients 
                across New York find peace and balance. Our commitment to <span className="font-semibold">confidentiality, 
                empathy, and proven results</span> has established us as a trusted partner in mental wellness.
              </p>

              <div className="bg-teal-50 rounded-xl p-4 mt-6 border-l-4 border-teal-500 sm:p-6">
                <p className="text-gray-700 italic text-base sm:text-lg">
                  "We believe that mental wellness is not a destination, but a journey of self-discovery 
                  and growth that empowers you to live your best life."
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 sm:w-8 sm:h-8">
                  <span className="text-teal-600 font-bold text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Licensed Therapists</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 sm:w-8 sm:h-8">
                  <span className="text-teal-600 font-bold text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Evidence-Based Methods</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 sm:w-8 sm:h-8">
                  <span className="text-teal-600 font-bold text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Confidential Sessions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 sm:w-8 sm:h-8">
                  <span className="text-teal-600 font-bold text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Personalized Care</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <button 
            onClick={handleBookNow}
            className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 rounded-full font-semibold text-base hover:from-teal-700 hover:to-teal-800 transition-all duration-200 active:scale-95 shadow-lg sm:px-8 sm:py-4 sm:text-lg"
          >
            Begin Your Healing Journey
          </button>
          <p className="text-gray-500 text-xs mt-2 sm:text-sm">
            Schedule your confidential consultation today
          </p>
        </div>
      </div>
    </section>
  );
}