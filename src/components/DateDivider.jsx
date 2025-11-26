import React from 'react';

const DateDivider = ({ date }) => {
  return (
    <div className="flex items-center justify-center mb-6 mt-2 group px-4 select-none">
      {/* Left Line */}
      <div className="h-[1px] bg-d-interactive-primary flex-1 opacity-20"></div>
      
      {/* Date Text */}
      <span className="text-d-text-muted text-xs font-bold px-2">
        {date}
      </span>
      
      {/* Right Line */}
      <div className="h-[1px] bg-d-interactive-primary flex-1 opacity-20"></div>
    </div>
  );
};

export default DateDivider;