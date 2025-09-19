'use client';

import { PopupModal } from 'react-calendly';
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
    console.log("CalendlyPopup mounted"); // Debug log
  }, []);

  if (!isMounted) {
    console.log("CalendlyPopup not mounted yet"); // Debug log
    return null;
  }

  // Get the root element safely
  const rootElement = typeof document !== 'undefined' ? document.getElementById('__next') : null;

  if (!rootElement) {
    console.log("Root element not found"); // Debug log
    return null;
  }

  console.log("Rendering CalendlyPopup, isOpen:", isOpen); // Debug log

  return (
    <div>
      {isOpen && (
        <PopupModal
          url={calendlyUrl}
          onModalClose={onClose}
          open={isOpen}
          rootElement={rootElement}
        />
      )}
    </div>
  );
}