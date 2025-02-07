import React from 'react';

const Timer = () => {
  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div>
        <div className="text-2xl font-bold">03</div>
        <div className="text-sm text-gray-500">Days</div>
      </div>
      <div>
        <div className="text-2xl font-bold">23</div>
        <div className="text-sm text-gray-500">Hours</div>
      </div>
      <div>
        <div className="text-2xl font-bold">19</div>
        <div className="text-sm text-gray-500">Minutes</div>
      </div>
      <div>
        <div className="text-2xl font-bold">56</div>
        <div className="text-sm text-gray-500">Seconds</div>
      </div>
    </div>
  );
};

export default Timer;