import React from 'react';

const Message = ({ avatar, username, roleColor, timestamp, isBot, children }) => {
  return (
    <div className="flex hover:bg-[#424549] py-1 px-6 py-2 mt-2 group transition-colors duration-75">
      
      {/* Avatar Side */}
      <div className="flex-shrink-0 mr-4 mt-0.5 cursor-pointer hover:drop-shadow-md">
        <img 
          src={avatar} 
          alt={`${username} avatar`} 
          className="w-10 h-10 rounded-full bg-d-background-tertiary object-cover hover:opacity-90 transition-opacity" 
        />
      </div>

      {/* Content Side */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center mb-0.5">
          <span 
            className="hover:underline cursor-pointer font-medium mr-2 text-base" 
            style={{ color: roleColor }}
          >
            {username}
          </span>
          
          {isBot && (
            <span className="bg-d-brand-accent text-white text-[0.625rem] px-1.5 rounded-[3px] mr-2 flex items-center h-[15px] font-medium">
              BOT
            </span>
          )}
          
          <span className="text-d-text-muted text-xs ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {timestamp}
          </span>
        </div>
        
        <div className="text-d-text-normal text-[0.9375rem] whitespace-pre-wrap leading-[1.375rem]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Message;