import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const MemberModal = ({ member, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  
  const ANIMATION_DURATION = 40;

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
      }, ANIMATION_DURATION);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  const getStatusColor = (s) => {
    switch(s) {
      case 'online': return 'bg-[#3ba55d]';
      case 'idle': return 'bg-[#faa61a]';
      case 'dnd': return 'bg-[#ed4245]';
      default: return 'bg-[#747f8d]';
    }
  };

  if (!member) return null;

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    setIsClosing(true);
  };

  return ReactDOM.createPortal(
    <div 
      className={`fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`} 
      onClick={handleClose}
    >
        <div 
          className={`bg-[#202225] rounded-lg w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col shadow-xl transform transition-all ${isClosing ? 'animate-pop-out' : 'animate-pop-in'}`} 
          onClick={(e) => e.stopPropagation()}
        >
            {/* Banner */}
            <div 
              className="h-28 rounded-t-lg transition-colors duration-300" 
              style={{ 
                background: `linear-gradient(135deg, ${member.color}, #202225)` 
              }} 
            ></div>

            <div className="relative p-4 pt-0 -mt-10">
              {/* Close Button */}
              <button 
                onClick={handleClose} 
                className="absolute top-4 right-4 pb-1 text-white text-2xl bg-[#36393f] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#4f545c] transition-colors cursor-pointer"
              >
                &times;
              </button>

              <div className="relative inline-block mb-4">
                {/* The Avatar Circle */}
                <div 
                    className="w-24 h-24 rounded-full bg-[#2f3136] border-[6px] border-[#202225] flex items-center justify-center text-4xl"
                >
                    <member.icon style={{ color: member.color, fontSize: 42 }} />
                </div>

                {/* The Status Dot (Absolute positioned relative to the avatar) */}
                <div 
                    className={`absolute bottom-1 right-1 w-6 h-6 rounded-full border-[4px] border-[#202225] ${getStatusColor(member.status)}`}
                ></div>
              </div>

              {/* Name and Details */}
              <h2 className="text-white text-2xl font-bold mb-1">{member.name}</h2>
              <div className="text-[#b9bbbe] text-sm font-medium mb-4 uppercase">
                {member.name} #{Math.floor(Math.random() * 9000) + 1000}
              </div>

              <div className="h-[1px] bg-[#2f3136] w-full mb-4"></div>

              <div className="bg-[#2f3136] rounded-lg p-4 mb-4">
                <h3 className="text-[#8e9297] text-xs font-bold uppercase mb-2">ABOUT ME</h3>
                <p className="text-[#dcddde] text-sm leading-relaxed">{member.about}</p>
              </div>
              
              {/* Example "Roles" section typical in Discord */}
              <div className="mt-3">
                <h3 className="text-[#8e9297] text-xs font-bold uppercase mb-2">ROLES</h3>
                <div className="flex flex-wrap gap-2">
                    <div className="flex items-center px-2 py-1 rounded bg-[#292b2f] border border-[#202225]">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: member.color }}></div>
                        <span className="text-[#b9bbbe] text-xs font-medium">Developer</span>
                    </div>
                </div>
              </div>

            </div>
        </div>
    </div>,
    document.body
  )
}

export default MemberModal