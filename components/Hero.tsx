import React from 'react'
import { AuroraBackground } from './ui/aurora-background'
import { TextHoverEffect } from './ui/text-hover-effect'

const Hero = () => {
    return (
        <div className="flex flex-col h-screen w-full items-start justify-start">
            <div className='h-screen w-full absolute'>
                <AuroraBackground> </AuroraBackground>
            </div>
            <div className='pt-16'>
                <p className="text-lg mt-4">We’re Movement towards</p>
                <h1 className="text-5xl font-bold text-redx">FUTURE</h1>
                <p>We’re <span className='text-redx font-black'>TED</span> Community
                    Find Yourself Here</p>
            </div>
            <div className="flex w-full h-[8rem] md:h-[15rem] z-[500] items-center justify-center">
      <TextHoverEffect text="TEDxPCE" />
    </div>
            <div className='flex h-full items-center w-full justify-center bottom-10'>
                <button className="border hover:bg-redx duration-500 hover:backdrop-blur-lg z-50 text-nowrap relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-8 py-4 rounded-full">
                    Buy Ticket
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent h-px" />
                </button>
            </div>
        </div>
    )
}

export default Hero