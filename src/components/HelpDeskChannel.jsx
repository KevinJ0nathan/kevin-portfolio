import React from 'react';
import Message from './Message';
import ChannelHero from './ChannelHero';
import DiscordEmbed from './DiscordEmbed';
import FileAttachment from './FileAttachment';
import MessageInput from './MessageInput';
import DateDivider from './DateDivider';

import kevinAvatar from '../assets/kevin_pfp.jpg'; 
import dashboardVisual from '../assets/projects/dentalign/dashboard_dentalign.png';
import loginVisual from '../assets/projects/dentalign/login_dentalign.png'
import dentalignReport from '../assets/projects/dentalign/dentalignReport.pdf'

const HelpDeskChannel = () => {
  return (
    <div className="flex flex-col h-full bg-d-background-primary">

      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-4 pt-4 custom-scrollbar">
      
      {/* 1. Hero - SaaS / Corporate Theme */}
      <ChannelHero channelName="dental-helpdesk" />

       <DateDivider date="June 4, 2025" />

      {/* 2. Intro: The Real-World Context */}
      <Message 
          avatar={kevinAvatar} 
          username="Kevin" 
          roleColor="#faa61a" 
          timestamp="04/06/2025 12:00 PM"
      >
          <p className="font-bold text-lg text-white mb-2">Project Brief: Dentalign Case Study (Unofficial) 🏥</p>
          
          <p className="text-d-text-normal mb-2">
            I engineered a <strong>functional prototype</strong> of a <strong>Helpdesk Ticketing System</strong> using <span className="text-white font-bold">Dentalign</span> (a real clinic in Jakarta) as a case study for the brand identity.
          </p>
          
          <p className="text-d-text-normal mb-2">
            <em>**Note: This is an independent concept project and is not officially affiliated with the clinic. I used their branding to demonstrate my ability to build complex full-stack solutions.**</em>
          </p>

          <p className="text-d-text-normal">
            The goal was to solve a common industry struggle: managing patient complaints via WhatsApp. I built this centralized web platform to streamline support requests for Customers, Staff, and Admins.
          </p>
      </Message>

      {/* 3. Tech Stack & Architecture Embed */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="04/06/2025 12:05 PM"
      >
         {/* Purple Color */}
         <DiscordEmbed title="🛠️ System Architecture" color="#6C5CE7">
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Stack</p>
                  <p className="text-white">MongoDB, Express, React, Node</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Architecture</p>
                  <p className="text-white">Three-Tier Monolithic</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Security</p>
                  <p className="text-white">RBAC & 2-Step Verification</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase text-blue-400">Deployment</p>
                  <p className="text-white font-bold">Docker (Self-Hosted)</p>
               </div>
            </div>
         </DiscordEmbed>
      </Message>

      {/* 4. The "Engineering Challenge" (RBAC) */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="04/06/2025 12:10 PM"
      >
         <p className="mb-2 text-d-text-normal">
            The main technical challenge was implementing a secure <strong>Role-Based Access Control (RBAC)</strong> system. The app serves three distinct user groups with different permissions:
         </p>
         
         <div className="bg-d-background-secondary p-4 rounded border-l-4 border-purple-500 my-2 grid gap-2">
             <div className="flex items-center gap-2">
                <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded">ADMIN</span>
                <span className="text-sm text-d-text-normal">Full CRUD access to manage ticket priority and resolution status.</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded">STAFF</span>
                <span className="text-sm text-d-text-normal">Can file internal reports (e.g., Equipment Maintenance, Supply Shortage).</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">CUSTOMER</span>
                <span className="text-sm text-d-text-normal">Can track appointment issues and account recovery.</span>
             </div>
         </div>
      </Message>

      {/* 5. UI Showcase (High Fidelity) */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="04/06/2025 12:15 PM"
      >
                  <p className="mb-2 text-d-text-normal">
            I designed the frontend using <strong>React.js</strong> to be fully responsive. Below is the Admin Dashboard allowing for real-time ticket filtering and status updates.
         </p>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
               src={dashboardVisual} 
               alt="Admin Dashboard Interface" 
               className="rounded-lg border border-d-background-tertiary hover:scale-105 transition-transform cursor-pointer" 
            />
            <img 
               src={loginVisual} 
               alt="Login Interface" 
               className="rounded-lg border border-d-background-tertiary hover:scale-105 transition-transform cursor-pointer md:h-68" 
            />
         </div>
      </Message>

      {/* 6. Documentation Download */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="04/06/2025 12:20 PM"
      >
         <p className="mb-2 text-d-text-normal">
            Here is my report if you want to see the details:
         </p>

         <FileAttachment 
            fileName="Dental_Helpdesk_Report.pdf"
            fileSize="4.7 MB"
            fileUrl={dentalignReport}
            type="pdf"
         />
      </Message>

    </div>
     <MessageInput channelName={"dental-helpdesk"}/>
    </div>
  );
};

export default HelpDeskChannel;