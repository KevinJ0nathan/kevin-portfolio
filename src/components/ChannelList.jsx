import ChannelItem from "./ChannelItem"
import { useState } from "react"

const ChannelList = ({activeChannel, onChannelSelect}) => {

  return (
    <div className="w-[280px] bg-d-background-secondary h-screen flex flex-col text-d-text-normal">
      <div className="font-medium text-base p-4 shadow-sm border-b border-[#202225] h-12 flex items-center">
        Kevin's Portfolio Server
      </div>

      <div className="flex flex-col px-2 mt-2 space-y-1">
        <ChannelItem channelTitle="welcome-and-about" 
          isActive={activeChannel === "welcome-and-about"} 
          onClick={() => onChannelSelect("welcome-and-about")}/>
        <ChannelItem channelTitle="experience" 
          isActive={activeChannel === "experience"} 
          onClick={() => onChannelSelect("experience")}/>

        <div className="text-[#8e9297] text-xs font-bold mt-4 mb-1 px-2">
          --- PROJECTS ---
        </div>

        <ChannelItem channelTitle="dentalign-helpdesk" 
          isActive={activeChannel === "helpdesk"} 
          onClick={() => onChannelSelect("helpdesk")}/>
        <ChannelItem channelTitle="shoply" 
          isActive={activeChannel === "shoply"} 
          onClick={() => onChannelSelect("shoply")}/>
        <ChannelItem channelTitle="hishot-2024-landing" 
          isActive={activeChannel === "hishot"} 
          onClick={() => onChannelSelect("hishot")}/>
        <ChannelItem channelTitle="bot-detection" 
          isActive={activeChannel === "bot-detection"} 
          onClick={() => onChannelSelect("bot-detection")}/>
        <ChannelItem channelTitle="pathfinding-evac-routes" 
          isActive={activeChannel === "pathfinding"} 
          onClick={() => onChannelSelect("pathfinding")}/>
      </div>
    </div>
  )
}

export default ChannelList