const ChannelItem = ({ channelTitle, isActive, onClick }) => {
  return (
    <div 
      className={`channel w-65 py-[6px] px-[8px] my-[2px] mx-[0px] rounded-[4px] cursor-pointer flex items-center gap-[6px] text-base text-[#8e9297] transition-all duration-150 ${isActive ? 'bg-[#4f545c] text-[#fff]' : 'hover:bg-[#4f545c] hover:text-[#dcddde]'}`}
      onClick={onClick}
    >
       {channelTitle}
    </div>
  )
}

export default ChannelItem