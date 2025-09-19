'use client';

import { useEffect, useRef, useState } from 'react';
import TestimonialCard from '@/components/UI/TestimonialCard';

const testimonials = [
  {
    name: "John Doe",
    role: "Regular Client",
    comment: "Best barber in NEW YORK! The consistency in quality service keeps me coming back every two weeks. Their attention to detail is unmatched in the city.",
    rating: 5
  },
  {
    name: "Micheal Lee",
    role: "Business Executive",
    comment: "As someone who meets clients daily, my appearance is crucial. CraftedCuts gives me the confidence to walk into any meeting knowing I look my absolute best.",
    rating: 5
  },
  {
    name: "James Johnson",
    role: "College Student",
    comment: "Finally found a barber that offers premium quality at student-friendly prices. The value for money is incredible compared to other places I've tried.",
    rating: 4
  },
  {
    name: "David Thompson",
    role: "Bank Manager",
    comment: "The royal treatment package is worth every cent. The massage and premium products make it more than a haircut - it's a therapeutic experience.",
    rating: 5
  }
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Animation for numbers
  const [retention, setRetention] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);

  // Your Calendly URL
  const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate numbers when section is visible
          if (isVisible) {
            animateNumber(98, setRetention, 2000);
            animateNumber(4.9, setRating, 2000, 1); // 1 decimal place
            animateNumber(500, setReviews, 2000);
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

  const animateNumber = (target: number, setter: React.Dispatch<React.SetStateAction<number>>, duration: number, decimals: number = 0) => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        const value = decimals === 0 ? Math.floor(start) : parseFloat(start.toFixed(decimals));
        setter(value);
      }
    }, 16);
  };

  const handleBookAppointment = () => {
    window.open(calendlyUrl, '_blank');
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-amber-500 mr-3"></div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <div className="w-12 h-0.5 bg-amber-500 ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Voices of <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Satisfaction</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why our clients keep coming back to experience the CraftedCuts difference
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Trust Indicators with Animated Numbers */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Join Our Growing Community of Satisfied Clients
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  {retention}%
                </div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  {rating}★
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  {reviews}+
                </div>
                <div className="text-sm text-gray-600">5-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - NOW WITH FUNCTIONAL BUTTON */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their grooming experience with CraftedCuts
            </p>
            <button 
              onClick={handleBookAppointment}
              className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Book Your Appointment
            </button>
            <p className="text-amber-100 text-sm mt-3">
              Instant booking • Professional service • Premium experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}