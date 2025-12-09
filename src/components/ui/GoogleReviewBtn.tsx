import React from 'react';

const GoogleReviewBtn = () => {
  // Your Manchester UK Branch Place ID
  const placeId = "ChIJHUS37Myxe0gRMCRC8FQPalI";
  const reviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

  return (
    <a 
      href={reviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        inline-flex items-center justify-center 
        px-5 py-2.5 
        text-sm font-bold tracking-wider uppercase font-sans
        border border-primary/60 rounded-sm
        text-primary 
        bg-transparent
        transition-all duration-300
        hover:bg-primary hover:text-black
        hover:border-primary hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]
      "
    >
      {/* Google "G" Icon - Wrapped in a small white circle to pop against dark backgrounds */}
      <div className="flex items-center justify-center w-5 h-5 mr-2 bg-white rounded-full p-0.5 shadow-sm group-hover:scale-110 transition-transform duration-300">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z" fill="#EA4335" />
        </svg>
      </div>
      
      <span>Review Us</span>
    </a>
  );
};

export default GoogleReviewBtn;