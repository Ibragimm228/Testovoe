import React from 'react';

const HeroSlider = () => {
  return (
    <div className="relative h-[400px] bg-black rounded-lg overflow-hidden">
      <img
        src="/Frame 560.png"
        alt="iPhone 14 Series"
        className="w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 flex items-center justify-between px-16">
        <div className="text-white">
          <div className="flex items-center mb-8">
            <img
              src="/1200px-Apple_gray_logo 1.png" 
              alt="Apple Logo"
              className="w-10 h-10 mr-4"
            />
            <h2 className="text-xl font-bold">iPhone 14 Series</h2>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Up to 10%<br />off Voucher
          </h1>
          <button className="flex items-center text-xl font-semibold underline hover:text-gray-300 transition">
            Shop Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;