import React from 'react';

const DiscordEmbed = ({ 
  title, 
  subtitle, 
  date,     
  children, 
  color = "#5865f2", 
  image = null 
}) => {
  return (
    <div 
      className="bg-d-background-secondary border-l-4 rounded p-3 mt-2 max-w-md shadow-sm w-full" 
      style={{ borderLeftColor: color }}
    >
      <div className="flex flex-col gap-2"> 
        
        {/* Header Section */}
        <div>
           {/* Main Title (Manager of Web Development) */}
            {title && (
              <h4 className="font-bold text-white text-sm mb-0.5">
                {title}
              </h4>
            )}

            {/* Subtitle & Date Row */}
            {(subtitle || date) && (
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                
                {/* Subtitle (Himpunan...) */}
                {subtitle && (
                  <span className="font-bold text-gray-200 text-sm">
                    {subtitle}
                  </span>
                )}
                
                {/* Date - Drops to new line on mobile, sits right on desktop */}
                {date && (
                  <span className="text-xs text-gray-400 whitespace-nowrap shrink-0">
                    {date}
                  </span>
                )}
              </div>
            )}

            {/* Main Content / Bullets */}
            <div className="text-d-text-normal text-sm leading-relaxed">
              {children}
            </div>
        </div>

        {/* Documentation Image */}
        {image && (
          <div className="mt-1 rounded-md overflow-hidden bg-d-background-tertiary">
            <img 
              src={image} 
              alt="Documentation" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" 
            />
          </div>
        )}
        
      </div>
    </div>
  );
};

export default DiscordEmbed;