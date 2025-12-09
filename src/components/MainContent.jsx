import React from 'react';
import { FaBars, FaUserFriends } from "react-icons/fa"; 
import { useSwipeable } from "react-swipeable"

import WelcomeChannel from './WelcomeChannel';
import ShoplyChannel from './ShoplyChannel';
import ExperienceChannel from './ExperienceChannel';
import HelpDeskChannel from './HelpDeskChannel';
import HishotChannel from './HishotChannel';
import BotDetectionChannel from './BotDetectionChannel';
import PathFindingChannel from './PathFindingChannel';

const MainContent = ({ activeChannel, toggleMenu, toggleMembers, isLeftMenuOpen, isRightMenuOpen }) => {

  // Checking for swipes
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => toggleMembers(), // swipe left -> open members sidebar
    onSwipedRight: () => toggleMenu(), // swipe right -> open server and channel sidebar
    delta: 40, // amount of pixels the swipe need to do to activate
    trackTouch: true, // only track swipe in mobile
    trackMouse: false,
  });
  
  const channelDescriptions = {
    "welcome-and-about": "Learn more about Kevin and his journey",
    "experience": "My professional history",
    "shoply": "Full-stack E-commerce platform with 3NF Normalized Database",
    "helpdesk": "Clinic Management System | MERN Stack 🦷",
    "hishot":"Event Landing Page | Cyber Security Theme 🔐",
    "bot-detection":"Machine Learning Classification | Python 🐍",
    "pathfinding":"Disaster Evacuation Algorithms | Python & Pygame 🧠" 
  };

  const description = channelDescriptions[activeChannel] || channelDescriptions["default"];

  return (
    <div {...swipeHandlers} className="flex-1 bg-d-background-primary flex flex-col h-dvh min-w-0 relative transition-all duration-300">
        {/* --- HEADER --- */}
        <div className="h-12 border-b border-d-background-tertiary flex items-center px-4 shadow-sm flex-shrink-0 justify-between bg-d-background-primary z-10">
          
          {/* Left: Hamburger & Title */}
          <div className="flex items-center overflow-hidden">
            <button onClick={toggleMenu} className="mr-4 text-d-text-muted hover:text-d-text-normal md:hidden">
                <FaBars size={24} />
            </button>

            <div className="flex items-center min-w-0">
                <span className="text-d-text-muted text-2xl mr-2 font-light">#</span>
                <h3 className="font-bold text-base text-d-text-normal mr-4 whitespace-nowrap truncate">
                {activeChannel}
                </h3>
            </div>

            <div className="hidden lg:flex items-center min-w-0">
                <div className="w-[1px] h-6 bg-d-interactive-primary mx-4"></div>
                <span className="text-d-text-muted text-xs font-medium truncate">
                    {description}
                </span>
            </div>
          </div>

          {/* Right: Members Toggle */}
          <button onClick={toggleMembers} className="text-d-text-muted hover:text-d-text-normal md:hidden ml-2">
            <FaUserFriends size={24} />
          </button>
        </div>

        {/* --- CONTENT BODY --- */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden  text-d-text-normal custom-scrollbar relative">
           
           {/* RENDER CHANNEL CONTENT BASED ON STATE */}
           {activeChannel === 'welcome-and-about' && <WelcomeChannel />}
           {activeChannel === 'experience' && <ExperienceChannel/>}
           {activeChannel === 'shoply' && <ShoplyChannel />}
           {activeChannel === 'helpdesk' && <HelpDeskChannel/>}
           {activeChannel === 'hishot' && <HishotChannel/>}
           {activeChannel === "bot-detection" && <BotDetectionChannel/> }
           {activeChannel === "pathfinding" && <PathFindingChannel/> }

           {!['welcome-and-about', 'experience','shoply', 'helpdesk', 'hishot', 'bot-detection', 'pathfinding'].includes(activeChannel) && (
            <div className="flex flex-col items-center justify-center h-full text-d-text-muted opacity-75">
              <div className="text-4xl mb-2">🚧</div>
              <p>You are currently viewing #{activeChannel}</p>
              <p className="text-sm">This channel is under construction.</p>
            </div>
            )}
        </div>
    </div>
  );
};

export default MainContent;