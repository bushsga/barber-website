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
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
      {/* Client Header */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
          
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-amber-600">{role}</p>
        </div>
      </div>
      
      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={rating} />
        <span className="text-sm text-gray-500 ml-2">{rating}.0</span>
      </div>
      
      {/* Comment */}
      <div className="relative">
        <div className="absolute top-0 left-0 text-6xl text-amber-100 font-serif leading-none">"</div>
        <p className="text-gray-700 text-sm leading-relaxed relative z-10 pl-6">
          {comment}
        </p>
      </div>
      
      {/* Decorative Element */}
      <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 my-4"></div>
      
      {/* Verification Badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-4 h-4 text-amber-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-gray-500">Verified Client</span>
        </div>
        <span className="text-xs text-gray-400">2 weeks ago</span>
      </div>
    </div>
  );
}