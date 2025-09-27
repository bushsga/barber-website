'use client';

export default function Contact() {
  const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";

  const handleBookNow = () => {
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-teal-50 to-white relative overflow-hidden">
      {/* Simpler decorative elements for better mobile performance */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full opacity-20 sm:w-64 sm:h-64"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 sm:w-64 sm:h-64"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-8 h-0.5 bg-teal-500 mr-2 sm:w-12 sm:mr-3"></div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <div className="w-8 h-0.5 bg-teal-500 ml-2 sm:w-12 sm:ml-3"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl md:text-5xl">
            Start Your <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Healing Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto sm:text-xl">
            Confidential and compassionate therapy services in the heart of New York
          </p>
        </div>

        {/* Contact Information Card */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 max-w-2xl mx-auto sm:p-8 sm:rounded-2xl">
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:w-20 sm:h-20">
              <svg className="w-8 h-8 text-white sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 sm:text-2xl">SerenityTherapy Practice</h3>
            <p className="text-gray-600 text-sm sm:text-base">Where healing begins with trust</p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Address */}
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">📍 Practice Location</h4>
              <p className="text-gray-700 text-sm sm:text-base">123 Wellness Avenue, Suite 201</p>
              <p className="text-gray-700 text-sm sm:text-base">New York, NY 10016</p>
              <p className="text-xs text-gray-500 mt-1 sm:text-sm">Private entrance • Discreet location • Wheelchair accessible</p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">🕒 Session Hours</h4>
              <div className="space-y-1 text-sm sm:text-base">
                <p className="text-gray-700"><span className="font-medium">Mon - Thu:</span> 9:00 AM - 7:00 PM</p>
                <p className="text-gray-700"><span className="font-medium">Friday:</span> 9:00 AM - 5:00 PM</p>
                <p className="text-gray-700"><span className="font-medium">Weekends:</span> <span className="text-teal-600">Emergency Sessions Only</span></p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">📞 Contact Information</h4>
              <p className="text-teal-600 font-semibold text-lg mb-1 sm:text-xl">+1 (555) 123-HELP</p>
              <p className="text-gray-600 text-sm sm:text-base">Call or text for urgent appointments</p>
              <p className="text-teal-500 text-sm mt-1 sm:text-base">info@serenitytherapy.com</p>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-4">
              <p className="text-red-700 text-xs font-medium text-center sm:text-sm">
                <strong>Emergency Support:</strong> If you're in crisis, call 988 for immediate help
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-6 pt-4 border-t border-gray-200 sm:mt-8 sm:pt-6">
            <button
              onClick={handleBookNow}
              className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 rounded-lg font-semibold text-base hover:from-teal-700 hover:to-teal-800 transition-all duration-200 active:scale-95 shadow-lg sm:px-8 sm:py-4 sm:text-lg"
            >
              Schedule Consultation
            </button>
            <p className="text-xs text-gray-500 mt-2 sm:text-sm">Secure and confidential online booking</p>
          </div>
        </div>

        {/* Additional Info for Therapy Practice */}
        <div className="mt-8 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600 max-w-2xl mx-auto">
            <div className="bg-white p-3 rounded-lg border border-gray-100">
              <div className="font-semibold text-teal-600 mb-1">Confidentiality</div>
              <div className="text-xs">All sessions are 100% private and secure</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-100">
              <div className="font-semibold text-teal-600 mb-1">Insurance</div>
              <div className="text-xs">Most major insurance plans accepted</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-100">
              <div className="font-semibold text-teal-600 mb-1">Virtual Sessions</div>
              <div className="text-xs">Telehealth appointments available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
