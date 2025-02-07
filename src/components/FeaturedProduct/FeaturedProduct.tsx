import React, { useState, useEffect } from 'react';

const FeaturedProduct = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center">
      <div className="text-xl font-bold text-black">{value.toString().padStart(2, '0')}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );

  return (
    <div className="bg-black text-white mt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="text-green-400 font-semibold mb-4">Categories</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Enhance Your<br />Music Experience
            </h2>
            
            <div className="flex gap-4 mb-8">
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>

            <button className="bg-green-400 text-black px-8 py-3 rounded-md hover:bg-green-500 transition font-semibold">
              Buy Now!
            </button>
          </div>

          <div className="lg:w-1/2">
            <img
              src="/колонки/Frame 694.png"
              alt="JBL Speaker"
              className="w-full h-auto object-contain transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;