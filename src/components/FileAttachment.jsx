import React from 'react'
import { FaFilePdf, FaFileAlt, FaDownload } from "react-icons/fa";

const FileAttachment = ({ fileName, fileSize, fileUrl, type = "pdf" }) => {

  const getIcon = () => {
    const baseClasses = "w-8 h-8 md:w-10 md:h-10";
    switch (type) {
      case 'pdf': return <FaFilePdf className={`text-red-500 ${baseClasses}`} />;
      case 'code': return <FaFileAlt className={`text-blue-400 ${baseClasses}`} />;
      default: return <FaFileAlt className={`text-gray-400 ${baseClasses}`} />;
    }
  };

  // New function to handle the download manually
  const handleDownload = async (e) => {
    e.preventDefault(); // Stop the default link behavior
    
    try {
      // 1. Fetch the data
      const response = await fetch(fileUrl);
      
      // 2. Get the Blob (file data)
      const blob = await response.blob();
      
      // 3. Create a temporary local URL for that blob
      const blobUrl = window.URL.createObjectURL(blob);
      
      // 4. Create a hidden link, click it, and remove it
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName; 
      document.body.appendChild(link);
      link.click();
      
      // 5. Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed", error);
      // Fallback: If fetch fails (e.g. strict CORS), open in new tab
      window.open(fileUrl, '_blank');
    }
  };

  return (
    <div className="
      flex items-center 
      bg-d-background-secondary 
      border border-d-background-tertiary hover:border-d-background-tertiary/80 
      transition-colors group cursor-pointer 
      w-full md:w-fit max-w-full md:max-w-sm min-w-0 md:min-w-[250px]
      p-2 md:p-3 rounded
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

      {/* Download Icon - Updated with onClick */}
      <a
        href={fileUrl}
        onClick={handleDownload} 
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