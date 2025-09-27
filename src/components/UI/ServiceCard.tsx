interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  popular?: boolean;
}

export default function ServiceCard({ 
  title, 
  description, 
  price, 
  duration, 
  popular = false 
}: ServiceCardProps) {
  const handleBookService = () => {
    // This would typically open a booking modal or redirect to Calendly
    const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`relative bg-white rounded-xl p-4 shadow-lg transition-all duration-200 border border-gray-100 active:scale-95 ${
      popular ? 'ring-1 ring-teal-500' : ''
    } sm:p-5 md:rounded-2xl md:p-6`}>
      
      {/* Popular Badge - Simplified for mobile */}
      {popular && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <span className="bg-teal-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-sm sm:px-3 sm:py-1">
            POPULAR
          </span>
        </div>
      )}

      {/* Service Content */}
      <div className="text-center pt-0 sm:pt-1">
        <h3 className="text-sm font-semibold text-gray-900 mb-2 sm:text-base md:text-lg md:mb-3">{title}</h3>
        
        {/* Divider - Simplified */}
        <div className="h-px bg-gray-200 my-2 sm:my-3 md:my-4"></div>
        
        {/* Description with better mobile handling */}
        <p className="text-gray-600 text-xs leading-relaxed mb-3 min-h-[40px] sm:text-sm sm:min-h-[48px] md:mb-4">
          {description}
        </p>
        
        {/* Price and Duration - Stacked on mobile */}
        <div className="flex flex-col gap-1 mb-3 sm:flex-row sm:justify-between sm:items-center sm:mb-4">
          <span className="text-base font-bold text-teal-600 sm:text-lg md:text-xl">{price}</span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full sm:text-sm">
            {duration}
          </span>
        </div>
        
        {/* Book Button - Mobile optimized */}
        <button 
          onClick={handleBookService}
          className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-2 px-3 rounded-lg font-medium text-xs hover:from-teal-700 hover:to-teal-800 transition-all duration-200 active:bg-teal-800 sm:py-2.5 sm:px-4 sm:text-sm"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}