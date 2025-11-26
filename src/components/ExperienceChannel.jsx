import React from 'react';
import Message from './Message';
import ChannelHero from './ChannelHero';
import DiscordEmbed from './DiscordEmbed';
import MessageInput from './MessageInput';
import DateDivider from './DateDivider';

import kevinPfpImage from '../assets/kevin_pfp.jpg';
import himtiGroupPhoto from '../assets/himtiGroup.jpg';
import kopiSoePhoto from '../assets/kopisoe.jpg'
import hishotPhoto from '../assets/hishot.png'

// --- DOCUMENTATION IMAGES ---
const himtiImage = himtiGroupPhoto;
const hishotImage = hishotPhoto;
const kopiSoeImage = kopiSoePhoto; 

const ExperienceChannel = () => {
  const kevinAvatar = kevinPfpImage;

  return (
    <div className="flex flex-col h-full bg-d-background-primary">
      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-4 pt-4 custom-scrollbar">
      
        {/* 1. Hero */}
        <ChannelHero 
          channelName="experience" 
          description="Work History & Organizational Leadership 💼" 
        />

        <DateDivider date="November 21, 2025" />

        {/* 2. Intro */}
        <Message 
          avatar={kevinAvatar} 
          username="Kevin" 
          roleColor="#faa61a" 
          timestamp="21/11/2025 5:00 PM"
        >
          <p className="text-d-text-normal">
            A timeline of my professional roles, leadership positions, and internships.
          </p>
        </Message>

        {/* 3. Role: HIMTI Manager */}
        <Message 
          avatar={kevinAvatar} 
          username="Kevin" 
          roleColor="#faa61a" 
          timestamp="21/11/2025 5:05 PM"
        >
          <DiscordEmbed 
            title="Manager of Web Development"
            subtitle="Himpunan Mahasiswa Teknik Informatika (HIMTI)"
            date="Mar 2025 - Present"
            image={himtiImage}
          >
            <p className="text-d-text-normal text-sm mb-2">
              Leading the Web Development division for the Greater Jakarta region.
            </p>
            <ul className="list-disc list-inside text-d-text-muted text-xs space-y-1">
              <li><strong>Leadership:</strong> Managing and mentoring 70+ active members in the division.</li>
              <li><strong>DevOps:</strong> Maintaining official websites using cPanel and managing MySQL databases.</li>
              <li><strong>Development:</strong> Overseeing full-stack updates (Laravel/React) for organizational platforms.</li>
            </ul>
          </DiscordEmbed>
        </Message>

        {/* 4. Role: HISHOT Coordinator */}
        <Message 
          avatar={kevinAvatar} 
          username="Kevin" 
          roleColor="#faa61a" 
          timestamp="21/11/2025 5:10 PM"
        >
          <DiscordEmbed 
            title="Web Development Coordinator" 
            subtitle="HISHOT 2024 Event"       
            date="Mar 2024 - Jan 2025"         
            color="#43B581"
            image={hishotImage}
          >
            <p className="text-d-text-normal text-sm mb-2">
              Coordinated the digital presence for an international study tour & seminar event.
            </p>
            <ul className="list-disc list-inside text-d-text-muted text-xs space-y-1">
              <li><strong>Team Lead:</strong> Led a 7-member developer team to build the event website.</li>
              <li><strong>Reliability:</strong> Ensured 100% uptime and responsiveness during live event operations.</li>
              <li><strong>Automation:</strong> Automated e-certificate distribution, cutting manual workload by 80%.</li>
            </ul>
            <div className="mt-2 text-xs">
              <span className="text-d-text-link cursor-pointer hover:underline">#hishot-2024-landing</span> 
              <span className="text-d-text-muted"> (See the project details)</span>
            </div>
          </DiscordEmbed>
        </Message>

        {/* 5. Role: Barista Intern (Kopi Soe) */}
        <Message 
          avatar={kevinAvatar} 
          username="Kevin" 
          roleColor="#faa61a" 
          timestamp="21/11/2025 5:15 PM"
        >
          <DiscordEmbed 
            title="Barista (Intern)" 
            subtitle="Kopi Soe"             
            date="Jakarta, Indonesia"      
            color="#B07D62"
            image={kopiSoeImage}
          >
            <p className="text-d-text-normal text-sm mb-2">
              Customer service and operations in a fast-paced environment.
            </p>
            <ul className="list-disc list-inside text-d-text-muted text-xs space-y-1">
              <li><strong>Soft Skills:</strong> Collaborated with a team to ensure efficient service during peak hours.</li>
              <li><strong>Adaptability:</strong> Learned operational workflows quickly in a high-pressure setting.</li>
            </ul>
          </DiscordEmbed>
        </Message>

      </div>
      <MessageInput channelName={"experience"}/>
    </div>
  );
};

export default ExperienceChannel;