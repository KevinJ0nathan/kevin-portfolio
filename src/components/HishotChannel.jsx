import React from 'react';
import Message from './Message';
import ChannelHero from './ChannelHero';
import DiscordEmbed from './DiscordEmbed';
import MessageInput from './MessageInput';
import DateDivider from './DateDivider';

import kevinAvatar from '../assets/kevin_pfp.jpg';
import hishotBanner from '../assets/hishot.png'; 

const HishotChannel = () => {
  return (
     <div className="flex flex-col h-full bg-d-background-primary">

      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-4 pt-4 custom-scrollbar">
      
      {/* 1. Hero - Cyber Security Theme */}
      <ChannelHero channelName="hishot-2024-landing" />

      <DateDivider date="August 14, 2024" />

      {/* 2. Intro Message: Clarified Scope */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="14/08/2024 11:00 AM"
      >
         <p className="font-bold text-lg text-white mb-2">Project Brief: HISHOT 2024 ✈️</p>
         <p className="text-d-text-normal mb-2">
           <strong>HISHOT</strong> (HIMTI Seminar Workshop and Study Tour) is a massive annual event featuring a Seminar, 2 Workshops, and both Domestic & International Study Tours (Malaysia).
         </p>
         <p className="text-d-text-normal">
           The event attracted over <strong>200+ registrants</strong> across all activities. My team was responsible for building the <strong>Official Landing Page</strong> that served as the central information hub and marketing portal for these events.
         </p>
      </Message>

      {/* 3. Stats Embed - Updated for Landing Page Context */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="14/08/2024 11:05 AM"
      >
         {/* Matrix Green Color for Cyber Theme */}
         <DiscordEmbed title="🌐 Deployment Status" color="#43B581">
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Role</p>
                  <p className="text-white">Web Dev Coordinator</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Team Size</p>
                  <p className="text-white">Led 7 Developers</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Tech Stack</p>
                  <p className="text-white">HTML5, CSS3, Bootstrap, JS</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Theme</p>
                  <p className="text-white">Cyber Security / Neon</p>
               </div>
            </div>
         </DiscordEmbed>
      </Message>

      {/* 4. The "Leadership & Operations" Story */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="14/08/2024 11:15 AM"
      >
         <p className="mb-2 text-d-text-normal">
           While the registration data was handled via external platforms (Google Docs & Organization Portal), my landing page was the critical "first impression" that converted visitors into registrants.
         </p>
         
         <div className="mt-3 pl-3 border-l-4 border-green-500 bg-d-background-secondary/30 p-2 rounded-r">
           <p className="font-bold text-green-400 text-xs uppercase tracking-wide mb-1">🚀 Operational Efficiency</p>
           <p className="text-d-text-normal text-sm">
             Beyond the frontend, I also helped streamline operations by <strong>automating promotional emails and e-certificate distribution</strong>. 
             This script reduced the committee's manual workload by roughly <strong>80%</strong>, ensuring all 200+ participants received their documents instantly.
           </p>
         </div>
      </Message>

      {/* 5. Visual Showcase */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="14/08/2024 11:20 AM"
      >
         <p className="mb-2 text-d-text-normal">
           Here is the landing page design. We used a "Dark Mode" aesthetic with neon green accents to align with the Cyber Security seminar theme.
         </p>
         {/* Screenshot of the Landing Page */}
         <img 
            src={hishotBanner} 
            alt="HISHOT 2024 Landing Page" 
            className="rounded-lg w-full max-w-2xl mt-2 border border-green-900/50 hover:border-green-500/50 transition-colors" 
         />
         <p className="mt-4 text-d-text-normal">
           Want to see it in action?
           <a 
             href="https://kevinj0nathan.github.io/hishot2024-archive/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-blue-400 hover:underline ml-1"
           >
             🔗 Visit Live Site
           </a>
         </p>
      </Message>

    </div>
      <MessageInput channelName={"hishot-2024-landing"}/>
    </div>
  );
};

export default HishotChannel;