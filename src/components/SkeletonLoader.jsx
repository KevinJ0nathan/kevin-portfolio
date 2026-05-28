import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col h-full bg-d-background-primary p-4 animate-fade-in justify-between overflow-hidden select-none">
      
      {/* 1. Hero Skeleton */}
      <div className="flex flex-col mb-6 pt-4 border-b border-d-interactive-primary/20 pb-4">
        <div className="w-16 h-16 rounded-full bg-d-interactive-primary animate-pulse mb-3" />
        <div className="w-48 h-6 bg-d-interactive-primary rounded animate-pulse mb-2" />
        <div className="w-72 h-4 bg-d-interactive-primary rounded animate-pulse" />
      </div>

      {/* 2. Message List Skeleton */}
      <div className="flex-1 space-y-6 overflow-hidden">
        {[1, 2, 3].map((index) => (
          <div key={index} className="flex items-start space-x-4">
            {/* Avatar Circle */}
            <div className="w-10 h-10 rounded-full bg-d-interactive-primary flex-shrink-0 animate-pulse" />
            
            {/* Message Details */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-2">
                {/* Username bar */}
                <div className="w-24 h-4 bg-d-interactive-primary rounded animate-pulse" />
                {/* Timestamp bar */}
                <div className="w-16 h-3.5 bg-d-interactive-primary rounded animate-pulse opacity-70" />
              </div>
              {/* Text content lines */}
              <div className="w-[85%] h-3.5 bg-d-interactive-primary rounded animate-pulse" />
              <div className="w-[60%] h-3.5 bg-d-interactive-primary rounded animate-pulse" />
              
              {/* Fake Embed Box in the middle message */}
              {index === 2 && (
                <div className="w-full max-w-md h-32 bg-d-interactive-primary/60 rounded-lg mt-3 border border-d-interactive-primary animate-pulse flex flex-col p-4 justify-between">
                  <div className="w-32 h-4 bg-d-interactive-primary rounded" />
                  <div className="w-full h-3 bg-d-interactive-primary rounded" />
                  <div className="w-2/3 h-3 bg-d-interactive-primary rounded" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Input Box Skeleton */}
      <div className="w-full h-11 bg-d-interactive-primary rounded-lg animate-pulse mt-4 flex items-center px-4">
        <div className="w-6 h-6 rounded-full bg-d-background-primary animate-pulse mr-3" />
        <div className="w-32 h-3.5 bg-d-background-primary rounded animate-pulse" />
      </div>

    </div>
  );
};

export default SkeletonLoader;
