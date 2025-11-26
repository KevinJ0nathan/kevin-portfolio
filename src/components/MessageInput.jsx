import React from 'react';
import { FaPlusCircle } from "react-icons/fa";

const MessageInput = ({channelName}) => {
  return (
    <div className="bg-d-background-primary px-4 pb-4 pt-2 flex-shrink-0">
      
      <div className="bg-d-interactive-primary rounded-lg p-3 flex items-center gap-4 cursor-not-allowed opacity-90">
        
        {/* Disabled Plus Icon */}
        <div className="text-d-text-muted opacity-50">
           <FaPlusCircle className="text-xl" />
        </div>

        {/* Read-Only Text Message */}
        <div className="text-d-text-muted text-sm font-medium select-none opacity-50">
           You do not have permission to send messages in #{channelName}.
        </div>

      </div>
    </div>
  );
};

export default MessageInput;