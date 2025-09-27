'use client';

import { useEffect, useState } from 'react';
import TestimonialCard from '@/components/UI/TestimonialCard';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Therapy Client",
    comment: "The compassionate care I received at SerenityTherapy transformed my life. My therapist helped me develop tools to manage anxiety that I use every day.",
    rating: 5
  },
  {
    name: "Michael R.",
    role: "Couples Counseling",
    comment: "We were on the verge of separation when we started couples therapy. The guidance we received helped us rebuild our communication and connection.",
    rating: 5
  },
  {
    name: "Jennifer K.",
    role: "Anxiety Treatment",
    comment: "After years of struggling with anxiety, I finally found relief through evidence-based techniques. The supportive environment made all the difference.",
    rating: 5
  },
  {
    name: "David T.",
    role: "Trauma Therapy",
    comment: "The trauma-focused approach helped me process experiences I'd carried for decades. I feel like I have my life back thanks to this practice.",
    rating: 5
  }
];

export default function Testimonials() {
  // Simplified animation states
  const [retention, setRetention] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);

  const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";

  useEffect(() => {
    // Simple timeout instead of complex observers
    const timer = setTimeout(() => {
      animateNumber(95, setRetention, 1500);
      animateNumber(4.9, setRating, 1500, 1);
      animateNumber(200, setReviews, 1500);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Simplified animation function
  const animateNumber = (target: number, setter: React.Dispatch<React.SetStateAction<number>>, duration: number, decimals: number = 0) => {
    let start = 0;
    const steps = duration / 50; // 50ms intervals for better performance
    const increment = target / steps;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        const value = decimals === 0 ? Math.floor(start) : parseFloat(start.toFixed(decimals));
        setter(value);
      }
    }, 50);
  };

  const handleBookConsultation = () => {
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-gradient-to-br from-teal-50 to-white relative overflow-hidden">
      {/* Simplified decorative elements */}
      <div className="absolute top-4 left-4 w-32 h-32 bg-teal-100 rounded-full opacity-20 sm:top-10 sm:left-10 sm:w-48 sm:h-48"></div>
      <div className="absolute bottom-4 right-4 w-32 h-32 bg-blue-100 rounded-full opacity-20 sm:bottom-10 sm:right-10 sm:w-48 sm:h-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-8 h-0.5 bg-teal-500 mr-2 sm:w-12 sm:mr-3"></div>
            <span className="text-teal-600 font-semibold text-xs uppercase tracking-wider">Client Stories</span>
            <div className="w-8 h-0.5 bg-teal-500 ml-2 sm:w-12 sm:ml-3"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:text-4xl">
            Stories of <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Healing & Growth</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:text-xl">
            Discover how our clients have transformed their lives through compassionate therapy
          </p>
        </div>

        {/* Testimonials Grid - Mobile First */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              comment={testimonial.comment}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-10 md:mt-12">
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 sm:rounded-2xl sm:p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 sm:text-xl md:text-2xl">
              Trusted Mental Health Care in New York
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 mb-1 sm:text-3xl">
                  {retention}%
                </div>
                <div className="text-xs text-gray-600 sm:text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 mb-1 sm:text-3xl">
                  {rating}★
                </div>
                <div className="text-xs text-gray-600 sm:text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 mb-1 sm:text-3xl">
                  {reviews}+
                </div>
                <div className="text-xs text-gray-600 sm:text-sm">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 mb-1 sm:text-3xl">24/7</div>
                <div className="text-xs text-gray-600 sm:text-sm">Crisis Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 md:mt-10">
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-4 text-white sm:rounded-2xl sm:p-6">
            <h3 className="text-lg font-bold mb-3 sm:text-xl md:text-2xl">
              Ready to Start Your Healing Journey?
            </h3>
            <p className="text-teal-100 mb-4 max-w-2xl mx-auto text-sm sm:text-base">
              Take the first step toward mental wellness with a confidential consultation
            </p>
            <button 
              onClick={handleBookConsultation}
              className="bg-white text-teal-700 px-6 py-2 rounded-full font-semibold text-sm hover:bg-teal-50 transition-all duration-200 active:scale-95 sm:px-8 sm:py-3 sm:text-base"
            >
              Schedule Consultation
            </button>
            <p className="text-teal-100 text-xs mt-2 sm:text-sm">
              Confidential • Professional • Compassionate Care
            </p>
          </div>
        </div>

        {/* Confidentiality Notice */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            *Client names changed to protect confidentiality. All testimonials used with permission.
          </p>
        </div>
      </div>
    </section>
  );
}