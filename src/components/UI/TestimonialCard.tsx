import StarRating from './StarRating';

interface TestimonialCardProps {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  comment,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg transition-all duration-200 border border-gray-100 active:scale-95 sm:rounded-2xl sm:p-6">
      {/* Client Header */}
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 sm:w-12 sm:h-12 sm:mr-4">
          <span className="text-white font-semibold text-sm sm:text-base">
            {name.charAt(0)}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{name}</h4>
          <p className="text-xs text-teal-600 truncate sm:text-sm">{role}</p>
        </div>
      </div>
      
      {/* Rating */}
      <div className="mb-3 sm:mb-4">
        <StarRating rating={rating} />
        <span className="text-xs text-gray-500 ml-2 sm:text-sm">{rating}.0</span>
      </div>
      
      {/* Comment */}
      <div className="relative">
        <div className="absolute top-0 left-0 text-4xl text-teal-100 font-serif leading-none sm:text-5xl">"</div>
        <p className="text-gray-700 text-xs leading-relaxed relative z-10 pl-4 sm:text-sm sm:pl-5 sm:leading-relaxed line-clamp-4">
          {comment}
        </p>
      </div>
      
      {/* Divider */}
      <div className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 my-3 sm:my-4"></div>
      
      {/* Verification Badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-3 h-3 text-teal-500 mr-1 flex-shrink-0 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-gray-500 sm:text-sm">Verified Client</span>
        </div>
        <span className="text-xs text-gray-400 flex-shrink-0 sm:text-sm">Recently</span>
      </div>
    </div>
  );
}