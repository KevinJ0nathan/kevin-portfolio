import React from 'react'
import { FaFilePdf, FaFileAlt, FaDownload } from "react-icons/fa";

const FileAttachment = ({ fileName, fileSize, fileUrl, type = "pdf" }) => {

  const getIcon = () => {
    // Shared classes for responsive sizing: 8 on mobile, 10 on desktop
    const baseClasses = "w-8 h-8 md:w-10 md:h-10";
    
    switch (type) {
      case 'pdf': return <FaFilePdf className={`text-red-500 ${baseClasses}`} />;
      case 'code': return <FaFileAlt className={`text-blue-400 ${baseClasses}`} />;
      default: return <FaFileAlt className={`text-gray-400 ${baseClasses}`} />;
    }
  };

  return (
    <div className="
      flex items-center 
      bg-d-background-secondary 
      border border-d-background-tertiary hover:border-d-background-tertiary/80 
      transition-colors group cursor-pointer 
      
      /* --- Responsive Width Controls --- */
      w-full md:w-fit          /* Full width on mobile, fit content on desktop */
      max-w-full md:max-w-sm   /* Prevent overflow */
      min-w-0 md:min-w-[250px] /* Remove min-width constraint on mobile */
      
      /* --- Spacing --- */
      p-2 md:p-3               /* Smaller padding on mobile */
      rounded 
    ">

      {/* Icon Section */}
      <div className="mr-3 md:mr-4 flex-shrink-0">
        {getIcon()}
      </div>

      <div className="flex flex-col flex-grow min-w-0 mr-2 md:mr-4">
        <span className="text-d-text-link font-medium group-hover:underline truncate text-sm">
          {fileName}
        </span>
        <span className="text-xs text-d-text-muted">
          {fileSize}
        </span>
      </div>

      {/* Download Icon */}
      <a
        href={fileUrl}
        download={fileName}
        className="
          flex-shrink-0 p-2 
          hover:bg-d-background-tertiary 
          rounded-full 
          text-d-text-muted hover:text-d-text-normal 
          transition-colors
        "
        title="Download"
      >
        <FaDownload className="w-4 h-4 md:w-5 md:h-5" />
      </a>
    </div>
  )
}

export default FileAttachment