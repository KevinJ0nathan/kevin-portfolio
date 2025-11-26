import React from 'react'

const ChannelHero = ({channelName}) => {
  return (
    <div className='mt-4 mb-8 px-4'>
        {/* The big # icon */}
        <div className='h-16 w-16 bg-d-interactive-primary rounded-full flex items-center justify-center mb-4'>
            <span className='text-4xl font-light text-white'>#</span>
        </div>
        {/*The title of the channel*/}
        <h1 className='text-3xl font-bold text-white mb-2'>
            Welcome to #{channelName}
        </h1>
        {/*The subtitle*/}
        <p className='text-d-text-muted '>
            This is the start of the <span className='font-bold text-d-text-normal'>#{channelName}</span>
        </p>
    </div>
  )
}

export default ChannelHero