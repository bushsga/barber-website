interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function StarRating({ 
  rating, 
  maxRating = 5,
  size = 'md'
}: StarRatingProps) {
  // CSS-only approach for maximum compatibility
  const sizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl'
  };

  return (
    <div 
      className={`flex items-center ${sizeClasses[size]}`}
      role="img"
      aria-label={`Rated ${rating} out of ${maxRating} stars`}
    >
      <span className="text-amber-500" aria-hidden="true">
        {'★'.repeat(rating)}
      </span>
      <span className="text-gray-200" aria-hidden="true">
        {'★'.repeat(maxRating - rating)}
      </span>
      
      <span className="sr-only">
        {rating} out of {maxRating} stars
      </span>
    </div>
  );
}