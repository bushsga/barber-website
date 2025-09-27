'use client';

import { useEffect, useState } from 'react';

interface CalendlyPopupProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl: string;
}

export default function CalendlyPopup({ isOpen, onClose, calendlyUrl }: CalendlyPopupProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Simple redirect approach - most reliable for older devices
  const handleExternalBooking = () => {
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Schedule Your Session
        </h3>
        <p className="text-gray-600 mb-6">
          You'll be redirected to our secure booking system to schedule your consultation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleExternalBooking}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex-1 text-center"
          >
            Continue to Booking
          </button>
          
          <button
            onClick={onClose}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex-1 text-center"
          >
            Cancel
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mt-4 text-center">
          Secure • Confidential • Professional
        </p>
      </div>
    </div>
  );
}