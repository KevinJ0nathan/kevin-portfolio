import React from 'react';
import Message from './Message';
import ChannelHero from './ChannelHero';
import DiscordEmbed from './DiscordEmbed';
import FileAttachment from './FileAttachment';
import MessageInput from './MessageInput';
import DateDivider from './DateDivider';

import kevinAvatar from '../assets/kevin_pfp.jpg';
import shoplyDashboard from '../assets/projects/shoply/dashboard.png'
import shoplyERD from '../assets/projects/shoply/erd.png'
import report from '../assets/projects/shoply/DataBase_Report.pdf'

const ShoplyChannel = () => {
  return (
    <div className="flex flex-col h-full bg-d-background-primary">

      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-4 pt-4 custom-scrollbar">
      
      {/* 1. Specific Hero for this Project */}
      <ChannelHero channelName="shoply"/>

       <DateDivider date="December 19, 2024" />

      {/* 2. Intro Message: The Problem & Solution */}
      <Message 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="19/12/2024 10:00 AM"
         avatar={kevinAvatar}
      >
         <p className="font-bold text-lg text-white mb-2">Project Brief: Shoply 🛍️</p>
         <p className="text-d-text-normal mb-2">
           Traditional offline businesses often struggle with inventory mismanagement and limited customer reach. 
           <b> Shoply</b> is a solution designed to solve this by providing a streamlined online retail platform.
         </p>
         <p className="text-d-text-normal">
           This wasn't just a UI project, the main challenge was architecting a <b>MySQL database</b> that ensures data integrity.
         </p>
      </Message>

      {/* 3. The Tech Stack Embed */}
      <Message 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="19/12/2024 10:05 AM"
         avatar={kevinAvatar}
      >
         <DiscordEmbed title="🛠️ Technical Specifications" color="#00A8FC">
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Backend</p>
                  <p className="text-white">Node.js, Express</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Database</p>
                  <p className="text-white">MySQL (Normalized to 3NF)</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Frontend</p>
                  <p className="text-white">HTML/CSS, JS (Responsive)</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Key Feature</p>
                  <p className="text-white">Real-time Inventory Tracking</p>
               </div>
            </div>
         </DiscordEmbed>
      </Message>

      {/* 4. Deep Dive: Database Normalization (Showing off your expertise) */}
      <Message 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="19/12/2024 10:15 AM"
         avatar={kevinAvatar}
      >
         <p className="mb-2 text-d-text-normal">
            The hardest part of this project was the <strong>Database Normalization</strong>. We took the schema from <b>1NF</b> all the way to <b>3NF</b> to reduce redundancy.
         </p>
         
         <div className="bg-d-background-secondary p-4 rounded border-l-4 border-yellow-500 my-2">
             <p className="text-xs font-bold text-yellow-500 uppercase mb-1">⚠️ Engineering Challenge</p>
             <p className="text-sm text-d-text-normal italic">
               "We deliberately broke normalization rules for the <strong>Orders</strong> table."
             </p>
             <p className="text-sm text-d-text-normal mt-2">
               In the <code>Orders</code> table, we decided to store the <code>TotalPrice</code> directly. 
               Normally, you calculate this dynamically. However, if product prices change in the future, the historical order history would become inaccurate. 
               Storing the snapshot price prevents this data integrity issue.
             </p>
         </div>

         <div className="mt-4">
             <p className="text-xs font-bold text-d-text-muted mb-1">ENTITY RELATIONSHIP DIAGRAM (ERD)</p>
             <img alt="Database Schema" src={shoplyERD} className="rounded-lg max-w-full md:max-w-lg cursor-pointer hover:shadow-lg transition-shadow" />
         </div>
      </Message>

      {/* 5. Code Snippet (SQL) */}
      <Message 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="19/12/2024 10:20 AM"
         avatar={kevinAvatar}
      >
         <p className="mb-2 text-d-text-normal">
            Here is a snippet of the DDL (Data Definition Language) for the Customers table, implementing constraints for email validation and password security.
         </p>
         
      {/* Code Block Look */}
      <pre className="bg-[#2f3136] p-4 rounded text-sm font-mono overflow-x-auto text-gray-300 border border-black/20">
      <code>
      {`CREATE TABLE Customers(
         CustomerID INT AUTO_INCREMENT PRIMARY KEY,
         FirstName VARCHAR(50) NOT NULL,
         LastName VARCHAR(50) NOT NULL,
         Email VARCHAR(100) NOT NULL,
         PhoneNumber VARCHAR(20),
         Address VARCHAR(255),
         Password VARCHAR(255) NOT NULL, -- Added password field
         CONSTRAINT Check_CustomerEmail CHECK (Email REGEXP '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
         CONSTRAINT Check_CustomerPhoneNumber CHECK (PhoneNumber REGEXP '^[0-9]{10,15}$'),
         CONSTRAINT Check_PasswordStrength CHECK (CHAR_LENGTH(Password) >= 8) -- Ensure a minimum length of 8 characters
      );`}
      </code>
      </pre>

      </Message>

      {/* 6. UI Showcase */}
      <Message 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="19/12/2024 10:25 AM"
         avatar={kevinAvatar}
      >
         <p className="mb-2 text-d-text-normal">
            And finally, the User Interface. We built a responsive dashboard allowing users to filter categories and track their order status.
         </p>
         <img alt="Shoply Dashboard" src={shoplyDashboard} className="rounded-lg w-full max-w-2xl mt-2 border border-d-background-tertiary" />
      </Message>

      {/* 7. Download Report */}
      <Message 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="19/12/2024 10:30 AM"
         avatar={kevinAvatar}
      >
          <p className="mb-2 text-d-text-normal">
            You can read the full documentation (including the complete SQL code and testing scenarios) here:
          </p>
          <FileAttachment 
            fileName="Shoply_Final_Report.pdf"
            fileSize="1.7 MB"
            fileUrl={report}
            type="pdf"
          />
      </Message>

    </div>
    <MessageInput channelName={"shoply"}/>
    </div>
  );
};

export default ShoplyChannel;