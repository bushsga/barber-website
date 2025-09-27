'use client';

import ServiceCard from '@/components/UI/ServiceCard';

const services = [
  {
    title: "Individual Therapy",
    description: "One-on-one sessions tailored to your personal needs and goals",
    price: "$120",
    duration: "50 min",
    popular: true
  },
  {
    title: "Couples Counseling", 
    description: "Improve communication and strengthen your relationship",
    price: "$150",
    duration: "60 min",
    popular: false
  },
  {
    title: "Anxiety Treatment",
    description: "Evidence-based techniques to manage anxiety and stress",
    price: "$120",
    duration: "50 min",
    popular: true
  },
  {
    title: "Trauma Therapy",
    description: "Specialized care for healing from traumatic experiences",
    price: "$140",
    duration: "50 min",
    popular: false
  }
];

export default function Services() {
  const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";

  const handleBookConsultation = () => {
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  const handleViewResources = () => {
    // Could link to blog, resources page, or professional profile
    window.open('#resources', '_self');
  };

  return (
    <section id="services" className="py-10 md:py-14 bg-gradient-to-br from-teal-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-6 md:w-8 h-0.5 bg-teal-500 mr-2"></div>
            <span className="text-teal-600 font-semibold text-xs uppercase tracking-wider">Our Services</span>
            <div className="w-6 md:w-8 h-0.5 bg-teal-500 ml-2"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Professional Therapy Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Evidence-based mental health care tailored to your unique journey and needs.
          </p>
        </div>

        {/* Services Grid - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
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

        {/* Call-to-Action Section */}
        <div className="text-center mt-8 md:mt-10 bg-gradient-to-r from-teal-700 to-teal-800 rounded-lg p-4 md:p-6 shadow-lg mx-1 md:mx-0">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2">
            Ready to Begin Your Healing Journey?
          </h3>
          <p className="text-teal-100 text-xs md:text-sm mb-3 md:mb-4 max-w-xl mx-auto">
            Take the first step toward mental wellness with a confidential consultation.
          </p>
          
          {/* Emergency Notice for Mobile */}
          <div className="bg-red-600/90 rounded-lg p-2 mb-3 md:hidden">
            <p className="text-white text-xs font-medium">
              <strong>Emergency?</strong> Call 988 for immediate support
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
            <button 
              onClick={handleBookConsultation}
              className="bg-white text-teal-700 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-teal-50 transition-all duration-200 active:scale-95 flex-1 sm:flex-none"
            >
              Schedule Consultation
            </button>
            
            <button 
              onClick={handleViewResources}
              className="border border-white text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all duration-200 active:scale-95 flex-1 sm:flex-none"
            >
              View Resources
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-teal-200 max-w-md mx-auto md:mt-4">
            <div className="flex items-center justify-center">
              <span className="mr-1">✓</span> Licensed Therapists
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-1">✓</span> Insurance Accepted
            </div>
            <div className="flex items-center justify-center col-span-2">
              <span className="mr-1">✓</span> Virtual Sessions Available
            </div>
          </div>
        </div>

        {/* Insurance Information */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-xs md:text-sm">
            Most major insurance plans accepted • Sliding scale available • Free initial consultation
          </p>
        </div>
      </div>
    </section>
  );
}