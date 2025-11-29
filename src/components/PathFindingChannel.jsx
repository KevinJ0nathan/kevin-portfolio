import React from 'react';
import Message from './Message';
import ChannelHero from './ChannelHero';
import DiscordEmbed from './DiscordEmbed';
import FileAttachment from './FileAttachment';
import MessageInput from './MessageInput';
import DateDivider from './DateDivider';

import kevinAvatar from '../assets/kevin_pfp.jpg';
import gridVisual from '../assets/projects/pathfinding/gridVisual.png';
import graphVisual from '../assets/projects/pathfinding/graphVisual.png';
import pathFindingReport from '../assets/projects/pathfinding/ADA - Final Report.pdf'

const PathFindingChannel = () => {
  return (
    <div className="flex flex-col h-full bg-d-background-primary">

      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-4 pt-4 custom-scrollbar">
      
      
      {/* 1. Hero - Algorithm Theme */}
      <ChannelHero channelName="pathfinding-evac-routes" />

      <DateDivider date="8 January, 2025" />

      {/* 2. Intro: The Problem */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="01/08/2025 4:00 PM"
      >
         <p className="font-bold text-lg text-white mb-2">Project Brief: Natural Disaster Evacuation 🏃‍♂️</p>
         <p className="text-d-text-normal mb-2">
           In a natural disaster (like an earthquake), clear pathways can suddenly become blocked by debris. 
           I built a simulation to analyze how different <strong>Pathfinding Algorithms</strong> perform when guiding survivors to a muster point in a changing environment.
         </p>
      </Message>

      {/* 3. Tech & Algo Stats */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="01/08/2025 4:05 PM"
      >
         {/* Orange for "Algorithms/Python" */}
         <DiscordEmbed title="🧮 Algorithm Analysis" color="#E67E22">
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Algorithms Tested</p>
                  <p className="text-white">Dijkstra vs. A* (A-Star)</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Language</p>
                  <p className="text-white">Python 3 + Pygame</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Metric</p>
                  <p className="text-white">Survivors Rescued & Exec. Time</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Result</p>
                  <p className="text-white">Refactored A* was 5x Faster</p>
               </div>
            </div>
         </DiscordEmbed>
      </Message>

      {/* 4. The Visual Showcase (The Grid) */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="01/08/2025 4:10 PM"
      >
         <p className="mb-2 text-d-text-normal">
            I visualized the simulation using a 50x50 grid in <strong>Pygame</strong>. 
            The algorithm dynamically recalculates routes (Red/Green nodes) as debris (Black blocks) spawns randomly.
         </p>
         
         <img 
            src={gridVisual} 
            alt="A* Algorithm Visualized" 
            className="rounded-lg w-full max-w-md mt-2 border border-d-background-tertiary" 
         />
      </Message>

      {/* 5. The "Engineering Win" (Refactoring) */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="01/08/2025 4:15 PM"
      >
         <div className="bg-d-background-secondary p-4 rounded border-l-4 border-green-500 my-2">
             <p className="text-xs font-bold text-green-400 uppercase mb-1">⚡ Optimization</p>
             <p className="text-sm text-d-text-normal">
               Standard A* initializes all nodes to "Infinity" at the start, which is slow O(V). 
               I <strong>refactored the algorithm</strong> to treat unknown nodes as infinity dynamically. 
               <br/><br/>
               This reduced the upfront memory cost to O(1) and allowed the algorithm to rescue <strong>15 survivors</strong> compared to Dijkstra's 1 survivor in the same timeframe.
             </p>
         </div>
      </Message>

      {/* 6. Data Evidence (The Graph) */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="01/08/2025 4:20 PM"
      >
         <p className="mb-2 text-d-text-normal">
            The data speaks for itself. My Refactored A* (Yellow line) maintained a significantly lower execution time compared to Dijkstra (Blue line) as the simulation complexity increased.
         </p>
         <img 
            src={graphVisual} 
            alt="Execution Time Graph" 
            className="rounded-lg w-full max-w-lg mt-2 border border-d-background-tertiary" 
         />
      </Message>

      {/* 7. Source Code */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="01/08/2025 4:25 PM"
      >
         <p className="mb-2 text-d-text-normal">
            Full comparison report and source code available below:
         </p>

         {/* GitHub Link */}
         <div className="mb-3">
            <a 
               href="https://github.com/KevinJ0nathan/Pathfinding-Evacuation-Routes"
               target="_blank"
               rel="noopener noreferrer"
               className="text-d-text-link hover:underline flex items-center gap-2"
            >
               🔗 github.com/KevinJ0nathan/Pathfinding-Evacuation-Routes
            </a>
         </div>

         <FileAttachment 
            fileName="ADA_Final_Report.pdf"
            fileSize="1.8 MB"
            fileUrl={pathFindingReport}
            type="pdf"
         />
      </Message>

    </div>
        <MessageInput channelName={"pathfinding"}/>
    </div>
  );
};

export default PathFindingChannel;