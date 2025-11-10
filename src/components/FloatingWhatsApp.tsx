// components/FloatingWhatsApp.tsx
import React from 'react';
import Image from 'next/image'; // 1. Import the Next.js Image component

const FloatingWhatsApp = () => {
  const phoneNumber = "8819099919";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      // 2. Adjusted padding for a better fit around the image
      className="fixed bottom-6 right-6 rounded-full z-50 transition-transform duration-300 ease-in-out transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      {/* 3. Replaced the SVG with the Next.js Image component */}
      <Image
        src="/whatsapp-icon.png" // Path to the image in the `public` folder
        alt="Chat on WhatsApp"
        width={80} // Set the desired width (in pixels)
        height={80} // Set the desired height (in pixels)
      />
    </a>
  );
};

export default FloatingWhatsApp;