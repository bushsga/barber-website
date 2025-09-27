'use client';

interface BookingButtonProps {
  calendlyUrl: string;
  buttonText?: string;
  className?: string;
}

export default function BookingButton({ 
  calendlyUrl, 
  buttonText = "Schedule Consultation",
  className = "bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors duration-200 active:scale-95"
}: BookingButtonProps) {
  
  const handleClick = () => {
    // Enhanced logging for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log("🔗 Booking button clicked - Opening:", calendlyUrl);
    }
    
    // Enhanced window.open with better security and fallback
    try {
      const newWindow = window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
      
      // Fallback if popup is blocked
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Redirect current page as fallback
        window.location.href = calendlyUrl;
      }
    } catch (error) {
      // Final fallback - redirect current page
      window.location.href = calendlyUrl;
    }
  };

  // Add aria-label for accessibility
  const getAriaLabel = () => {
    return buttonText.includes('Consultation') 
      ? 'Schedule a therapy consultation' 
      : `Book ${buttonText.toLowerCase()}`;
  };

  return (
    <button 
      onClick={handleClick}
      className={className}
      aria-label={getAriaLabel()}
      // Add proper button attributes
      type="button"
      role="button"
    >
      {buttonText}
    </button>
  );
}