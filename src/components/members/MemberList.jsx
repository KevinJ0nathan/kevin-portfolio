import {React, useState} from 'react';
import MemberItem from "./MemberItem"; 
import { 
  SiReact, SiTailwindcss, SiJavascript, 
  SiNodedotjs, SiPython, SiLaravel, 
  SiMysql, SiMongodb, SiDocker 
} from "react-icons/si";
import { FaChevronDown } from "react-icons/fa"; 
import MemberModal from './MemberModal';

const MemberList = () => {
  // State to control the visibility and content of the modal
  const [selectedSkill, setSelectedSkill] = useState(null);

  const groups = [
    {
      title: "FRONTEND",
      count: 3,
      items: [
        { 
          name: "React.js", icon: SiReact, color: "#61DAFB", status: "online",
          about: "Learned during my third semester and used for several projects. I built a Helpdesk Ticket system to practice state management and CRUD operations, and I developed this personal portfolio website to showcase my frontend skills."
        },
        { 
          name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E", status: "online",
          about: "The foundation of my web development work. I utilize modern ES6+ syntax for logic within my React applications, and also apply vanilla JavaScript to add dynamic interactivity to standard HTML & CSS projects."
        },
        { 
          name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", status: "online",
          about: "I use Tailwind CSS for rapid UI development with a utility-first approach. Experienced in creating responsive designs directly in markup, which I utilized to style this portfolio and my other React projects."
        },
      ]
    },
    {
      title: "BACKEND",
      count: 3,
      items: [
        { 
          name: "Node.js", icon: SiNodedotjs, color: "#339933", status: "online",
          about: "My primary tool for backend development. I used Express.js to build the RESTful APIs for my To-Do List and Helpdesk apps. I also developed the server-side logic for a prototype e-commerce platform as my Database Systems final project."
        },
        { 
          name: "Laravel", icon: SiLaravel, color: "#FF2D20", status: "idle",
          about: "I gained exposure to the Laravel ecosystem while maintaining my student organization's website. I am comfortable navigating the existing codebase, making updates, and working with Blade templates."
        },
        { 
          name: "Python", icon: SiPython, color: "#3776AB", status: "online",
          about: "Used primarily for academic research and algorithmic problem solving. My experience spans from game logic (Pacman clone) and pathfinding simulations to data science, including a published paper on Twitter bot detection."
        },
      ]
    },
    {
      title: "TOOLS & DATA",
      count: 3,
      items: [
        { 
          name: "MySQL", icon: SiMysql, color: "#4479A1", status: "online",
          about: "My standard choice for relational databases. I designed the schema for my e-commerce final project and have practical experience writing SQL queries to retrieve and manage data for my university's website database."
        },
        { 
          name: "MongoDB", icon: SiMongodb, color: "#47A248", status: "idle",
          about: "My preferred NoSQL database for JavaScript-heavy projects. I utilize Mongoose for data modeling and implemented this solution as the database for both my To-Do List and Helpdesk Ticketing applications."
        },
        { 
          name: "Docker", icon: SiDocker, color: "#2496ED", status: "idle",
          about: "Currently exploring containerization basics. While still learning, I successfully utilized Docker to containerize and deploy our Helpdesk Ticketing system during a collaborative team final project."
        }
      ]
    }
  ];

  // Function to open the modal with a specific skill
  const openSkillModal = (skill) => {
    setSelectedSkill(skill);
  };

  // Function to close the modal
  const closeSkillModal = () => {
    setSelectedSkill(null);
  };

  return (
    // Main Container - Discord Dark Grey Background
    <div className="w-full bg-[#2f3136] h-full flex flex-col pt-4 px-2 overflow-y-auto select-none scrollbar-hide">
      
      {groups.map((group, index) => (
        <div key={index} className="mb-6">
          
          {/* Category Header (e.g. FRONTEND - 3) */}
          <div className="flex items-center text-xs font-bold text-[#8e9297] hover:text-[#dcddde] cursor-pointer mb-2 pl-2 transition-colors group">
            <FaChevronDown className="mr-1 text-[10px] transition-transform group-hover:text-[#dcddde]" />
            <span className="uppercase tracking-wide">{group.title} — {group.count}</span>
          </div>

          {/* List of Skills */}
          <div className="flex flex-col">
            {group.items.map((tech) => (
              <MemberItem 
                key={tech.name} 
                icon={tech.icon} 
                color={tech.color} 
                name={tech.name}
                status={tech.status}
                onClick={() => openSkillModal(tech)}
              />
            ))}

            {/* --- Render the SkillModal if a skill is selected --- */}
            {selectedSkill && (
              <MemberModal member={selectedSkill} onClose={closeSkillModal} />
            )}
          </div>
        </div>
      ))}

    </div>
  );
}

export default MemberList;