import React from 'react';
import Message from './Message';
import DiscordEmbed from './DiscordEmbed';
import ChannelHero from './ChannelHero';
import DateDivider from './DateDivider';
import FileAttachment from './FileAttachment'; 
import { FaArrowRight } from "react-icons/fa"; 
import MessageInput from './MessageInput';

import kevinAvatar from '../assets/kevin_pfp.jpg';
import resumeFile from '../assets/Resume_KevinJonathan.pdf';

const WelcomeChannel = () => {
  // Asset URLs
  const botAvatar = "https://cdn-icons-png.flaticon.com/512/4712/4712109.png";

  // --- DYNAMIC TIME HELPERS ---

  // 1. Get Today's Date for the Divider (e.g. "November 26, 2025")
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', { 
    month: 'long', day: 'numeric', year: 'numeric' 
  });

  // 2. Helper to get relative time (Current Time - X minutes)
  const getDynamicTime = (minutesAgo) => {
    const date = new Date(today);
    date.setMinutes(date.getMinutes() - minutesAgo);
    
    // Returns: "Today at 4:00 PM"
    return `Today at ${date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
  };

  return (
    <div className="flex flex-col h-full bg-d-background-primary">

      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-4 pt-4 custom-scrollbar">
      
        <ChannelHero channelName="welcome-and-about" />

        {/* Dynamic Date Divider */}
        <DateDivider date={dateString} />
        
        {/* System Message: User Join */}
        <div className="flex items-center gap-3 text-d-text-muted text-sm mb-6 ml-6 hover:bg-d-background-secondary py-1 -mx-2 px-2 rounded group transition-colors">
          <span className="text-d-status-online text-lg"><FaArrowRight /></span> 
          <span>
              <span className="font-bold text-d-text-normal cursor-pointer hover:underline">
                You
              </span> have just slid into the server. Say hi! 👋
          </span>
        </div>

        {/* Bot Message: Sent 2 minutes ago */}
        <Message 
            avatar={botAvatar} 
            username="KevBot" 
            roleColor="#5865f2" 
            timestamp={getDynamicTime(2)} 
            isBot={true}
        >
            <DiscordEmbed title="👋 WELCOME TO THE SERVER!" image={kevinAvatar}>
              <p className="mb-4 text-d-text-normal">
                    Beep boop! I've loaded the portfolio of <span className="font-bold text-white">Kevin Jonathan</span>. Use the sidebar on the left to navigate.
              </p>
              
              {/* Main Section */}
              <div className="mb-4">
                  <p className="font-bold text-d-text-header text-xs uppercase tracking-wide mb-2">
                    📂 Main Info
                  </p>
                  <div className="grid gap-3"> 
                    
                    {/* Item 1 */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="self-start text-d-text-link bg-d-background-secondary px-1.5 py-0.5 rounded font-medium text-xs sm:text-sm">
                            #welcome-and-about
                          </span>
                          <span className="text-d-text-muted text-sm leading-snug">
                            - Bio, stats, & contact info (You are here).
                          </span>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="self-start text-d-text-link bg-d-background-secondary px-1.5 py-0.5 rounded font-medium text-xs sm:text-sm">
                            #experience
                          </span>
                          <span className="text-d-text-muted text-sm leading-snug">
                            - My professional timeline & resume.
                          </span>
                    </div>
                  </div>
              </div>

              {/* Projects Section */}
              <div>
                  <p className="font-bold text-d-text-header text-xs uppercase tracking-wide mb-2">
                    🚀 Projects Showcase
                  </p>
                  <p className="text-d-text-muted text-sm mb-2 leading-relaxed">
                    Check the <span className="font-bold text-white">PROJECTS</span> category in the sidebar. Each channel represents a specific app or case study:
                  </p>
                  
                  <div className="grid gap-2 ml-1 border-l-2 border-d-background-secondary pl-3">

                     {/* Helpdesk */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1 text-sm text-d-text-normal">
                        <span className="text-d-text-link hover:underline cursor-pointer font-medium whitespace-nowrap">
                            #dentalign-helpdesk
                        </span> 
                        <span className="text-d-text-muted text-xs sm:text-sm"> 
                            - Enterprise Ticketing (MERN) 🦷
                        </span>
                    </div>
                    
                    {/* Shoply */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1 text-sm text-d-text-normal">
                        <span className="text-d-text-link hover:underline cursor-pointer font-medium whitespace-nowrap">
                            #shoply
                        </span> 
                        <span className="text-d-text-muted text-xs sm:text-sm"> 
                            - Full-stack E-commerce & 3NF DB
                        </span>
                    </div>

                    {/* HiShot */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1 text-sm text-d-text-normal">
                        <span className="text-d-text-link hover:underline cursor-pointer font-medium whitespace-nowrap">
                            #hishot-2024-landing
                        </span> 
                        <span className="text-d-text-muted text-xs sm:text-sm"> 
                            - Cyber Sec Event Landing Page 🔐
                        </span>
                    </div>

                    {/* Bot Detection */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1 text-sm text-d-text-normal">
                        <span className="text-d-text-link hover:underline cursor-pointer font-medium whitespace-nowrap">
                            #bot-detection
                        </span> 
                        <span className="text-d-text-muted text-xs sm:text-sm"> 
                            - ML Classification in Python 🐍
                        </span>
                    </div>

                    {/* Pathfinding */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1 text-sm text-d-text-normal">
                        <span className="text-d-text-link hover:underline cursor-pointer font-medium whitespace-nowrap">
                            #pathfinding
                        </span> 
                        <span className="text-d-text-muted text-xs sm:text-sm"> 
                            - Evacuation Algo (Python/Pygame) 🧠
                        </span>
                    </div>
                </div>
              </div>
            </DiscordEmbed>
        </Message>

        {/* Kevin Message: Sent 1 minute ago */}
        <Message 
            avatar={kevinAvatar} 
            username="Kevin" 
            roleColor="#faa61a" 
            timestamp={getDynamicTime(1)} 
            isBot={false}
        >
            <p className="mb-2 text-lg font-medium text-white">
              Hello! Welcome to the server. 👋
            </p>
            
            {/* The "Why Discord" Explanation */}
            <div className="mb-4 text-d-text-normal leading-relaxed">
              <p className="mb-2">
                    You might be wondering, <em>"Why use a Discord interface for a portfolio?"</em>
              </p>
              <p>
                    Simply put, this is my digital headquarters. It’s where I coordinate university assignments with teammates, manage the <strong>HIMTI</strong> development team, and hop on calls to game with friends. 
              </p>
              <p className="mt-2">
                    I wanted my portfolio to reflect the space where I collaborate, learn, and stay connected with my community every day.
              </p>
            </div>

            {/* Brief Professional Bio */}
            <div className="pl-3 border-l-4 border-d-interactive-primary bg-d-background-secondary/20 py-2 rounded-r">
              <p className="text-d-text-normal">
                    I'm a <strong>Computer Science student</strong> (GPA 3.93) at <span className="text-white font-bold">Binus International</span>, specializing in <strong>Full-Stack Web Development</strong>.
              </p>
              <p className="text-d-text-muted text-sm mt-1">
                    Currently leading 70+ developers at HIMTI & preparing for my Double Degree at RMIT Melbourne.
              </p>
            </div>
        </Message>

        {/* Resume Attachment: Sent 0 minutes ago (Just now) */}
        <Message 
            avatar={kevinAvatar} 
            username="Kevin" 
            roleColor="#faa61a" 
            timestamp={getDynamicTime(0)} 
            isBot={false}
        >
            <p className="mb-2 text-d-text-normal">
              If you'd like to keep a copy for your records or share my profile with your team, I've attached my full resume below. 👇
            </p>
            
            <FileAttachment 
              fileName="Resume_KevinJonathan.pdf"
              fileSize="84.6 kb"
              fileUrl={resumeFile}
              type="pdf"
            />
        </Message>

      </div>
      
      {/* Input Area */}
      <MessageInput channelName={"welcome-and-about"}/>
    </div>
  );
};

export default WelcomeChannel;