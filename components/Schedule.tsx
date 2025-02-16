import React from 'react'
import Image from 'next/image'
import { speakerData } from '@/data';

const Schedule = () => {
    return (
        <div className='my-8 h-full w-full flex items-start justify-center'>
            <div className='flex items-center max-w-7xl mx-auto shadow-lg flex-col bg-black dark:bg-white dark:text-black text-white md:p-8 p-4 broder border-gray-400 rounded-lg'>

                <div className='my-2'>
                    <p className='text-center'>TIME TABLE</p>
                    <h2 className='text-center'>YOU WILL GONE THROUGH THIS TIME</h2>
                </div>

                <div className='flex mt-2 items-center justify-between w-full border-b'>
                    <p>Speaker</p>
                    <p>Time</p>
                </div>
                <div className="w-full">
                    <div className="w-full">
                        {speakerData.map((speaker, index) => (
                            <div key={index} className="flex mt-4 items-center justify-between w-full border-b pb-3">
                                <div className='flex items-center gap-4'>
                                    <Image
                                        src={speaker.image}
                                        className='rounded-full'
                                        width={50}
                                        height={50}
                                        alt={speaker.name}
                                    />
                                    <div>
                                        <h3 className="font-bold">{speaker.name}</h3>
                                        <p className="text-sm font-semibold text-red-500 leading-4">{speaker.role}</p>
                                    </div>
                                </div>
                                <p className="font-bold text-nowrap">{speaker.time}</p>
                            </div>
                        ))}
                    </div>

                    <div className='flex items-center gap-4 my-10'>
                        <div className='border-b w-full h-1'></div>
                        <div className='font-bold uppercase text-redx'>Break</div>
                        <div className='border-b w-full h-1'></div>
                    </div>

                    <div className="w-full">
                        {speakerData.map((speaker, index) => (
                            <div key={index} className="flex mt-4 items-center justify-between w-full border-b pb-3">
                                <div className='flex items-center gap-4'>
                                    <Image
                                        src={speaker.image}
                                        className='rounded-full'
                                        width={50}
                                        height={50}
                                        alt={speaker.name}
                                    />
                                    <div>
                                        <h3 className="font-bold">{speaker.name}</h3>
                                        <p className="text-sm font-semibold text-red-500 leading-4">{speaker.role}</p>
                                    </div>
                                </div>
                                <p className="font-bold text-nowrap">{speaker.time}</p>
                            </div>
                        ))}
                    </div>

                    <div className='text-center my-4'>
                        <p className='text-center'>MARCH 2025</p>
                        <h3 className='text-center text-redx font-medium'>SATURDAY 22</h3>
                    </div>
                    <div className='flex flex-col items-center justify-between gap-0 w-full'>
                        <p className='pt-4'>ADDRESS</p>
                        <p className='text-redx font-medium leading-5 text-center'>SURESH BHAT SABHAGRUH, RESHIMBAG, NAGPUR</p>
                    </div>

                    <div className='flex mt-8 items-center w-full justify-center'>
                        <button className="border hover:bg-redx duration-500 hover:backdrop-blur-lg text-nowrap relative border-neutral-800 dark:border-black/[0.2] text-black dark:text-black px-8 py-4 rounded-full">
                            Buy Ticket
                            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent  h-px" />
                        </button>
                    </div>
                    <div />
                </div></div>
        </div>
    )
}

export default Schedule;