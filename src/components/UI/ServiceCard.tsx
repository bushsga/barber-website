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
  return (
    <div className={`relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
      popular ? 'ring-2 ring-amber-500 ring-opacity-50' : ''
    }`}>
      
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <span className="bg-amber-500 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-semibold shadow-md">
            POPULAR
          </span>
        </div>
      )}

      {/* Service Content */}
      <div className="text-center pt-1">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">{title}</h3>
        
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-3 md:my-4"></div>
        
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 min-h-[40px] md:min-h-[48px]">
          {description}
        </p>
        
        <div className="flex justify-between items-center mb-3 md:mb-4">
          <span className="text-lg md:text-xl font-bold text-amber-600">{price}</span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {duration}
          </span>
        </div>
        
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-1.5 md:py-2 px-3 md:px-4 rounded-md md:rounded-lg font-medium text-xs md:text-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}