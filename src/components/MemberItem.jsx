import React from 'react';

const MemberItem = ({ icon: Icon, color, name, status = "online", onClick }) => {
  
  // Helper to get the correct status color
  const getStatusColor = (s) => {
    switch(s) {
      case 'online': return 'bg-[#3ba55d]'; // Green
      case 'idle': return 'bg-[#faa61a]';   // Yellow
      case 'dnd': return 'bg-[#ed4245]';    // Red
      default: return 'bg-[#747f8d]';       // Gray
    }
  };

  return (
    <div className="flex items-center p-1.5 mb-1 mx-2 rounded cursor-pointer hover:bg-[#36393f] group transition-colors opacity-90 hover:opacity-100" onClick={onClick}>
      <div className="relative w-8 h-8 mr-3 flex-shrink-0">

        <div className="w-full h-full rounded-full bg-[#202225] flex items-center justify-center overflow-hidden transition-all duration-200">
          <Icon style={{ color: color, fontSize: 18 }} /> 
        </div>

        <div className={`absolute bottom-[-2px] right-[-2px] w-3.5 h-3.5 rounded-full border-[3px] border-[#2f3136] ${getStatusColor(status)}`}></div>
      </div>

      <div className="flex flex-col overflow-hidden">
        <span className="font-medium text-[15px] text-[#96989d] group-hover:text-[#dcddde] truncate">
          {name}
        </span>
      </div>
    </div>
  )
}

export default MemberItem