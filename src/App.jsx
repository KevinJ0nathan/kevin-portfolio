import React, { useState } from 'react';
import ChannelList from './components/ChannelList'
import MainContent from './components/MainContent'
import MemberList from './components/MemberList'
import ServerList from './components/ServerList'

function App() {

  const [activeChannel, setActiveChannel] = useState("welcome-and-about");
  // For channel list and server list mobile
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false)
  // For member list mobile
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false)

  const toggleLeftMenu = () => setIsLeftMenuOpen(!isLeftMenuOpen);
  const toggleRightMenu = () => setIsRightMenuOpen(!isRightMenuOpen);

  const closeAllMenus = () => {
    setIsLeftMenuOpen(false);
    setIsRightMenuOpen(false);
  }

  // Function to close all menus when a user selects a channel in mobile
  const handleChannelSelect = (channel) => {
    setActiveChannel(channel);
    closeAllMenus();
  }
  return (
    <>
      <div className='flex h-screen overflow-hidden bg-d-background-primary font-sans text-white'>
       <div className='hidden md:flex flex-shrink-0 h-full'>
        <ServerList/>
       </div>
       <div className="hidden md:flex flex-shrink-0 w-70 flex-col h-full">
        <ChannelList activeChannel={activeChannel} onChannelSelect={setActiveChannel}/>
       </div>
       <MainContent activeChannel={activeChannel} toggleMenu={toggleLeftMenu} toggleMembers={toggleRightMenu}/>
      <div className="hidden lg:flex flex-shrink-0 w-[240px] h-full">
       <MemberList/>
       </div>

       {/* 1. BACKDROP: Darkens screen when a menu is open */}
      {(isLeftMenuOpen || isRightMenuOpen) && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeAllMenus}
        ></div>
      )}

      {/* 2. LEFT DRAWER (Server + Channel List) */}
      <div className={`fixed inset-y-0 left-0 z-50 flex w-[300px] transition-transform duration-300 md:hidden ${isLeftMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Mobile Server List */}
        <div className="h-full flex-shrink-0">
           <ServerList />
        </div>
        {/* Mobile Channel List */}
        <div className="flex-1 h-full overflow-hidden">
           <ChannelList 
              activeChannel={activeChannel} 
              onChannelSelect={handleChannelSelect}
           /> 
        </div>
      </div>

      {/* 3. RIGHT DRAWER (Member List) */}
      <div className={`fixed inset-y-0 right-0 z-50 w-[240px] bg-[#2f3136] transition-transform duration-300 lg:hidden ${isRightMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <MemberList />
      </div>
      </div>
    </>
  )
}

export default App
