import React from 'react'
import { Image } from 'next/image';
import { Button } from '@/components/ui/button';
import { FaArrowRightLong } from "react-icons/fa6";


const Landing = () => {
return (
    <div className="flex items-center justify-center h-screen absolute top-0 overflow-hidden">
        <div className="relative w-screen h-screen">
            <img src="/Hero.webp" alt="" className='absolute lg:top-12 -top-10 left-0 w-full h-full object-cover -z-50'/>
            <div className="absolute -top-[200px] left-60 w-[1200px] h-[1200px] bg-blueDark rounded-full blur-[1000px] transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
            <div className="absolute -bottom-[400px] -right-[600px] w-[800px] h-[800px] bg-blueLight rounded-full blur-[400px] -z-10"></div>
            <div className="absolute w-full h-20 top-0 left-0 right-0 mx-auto bg-brandBlack blur-2xl -z-20"></div>
            <div className="absolute w-full h-52 -bottom-28 left-0 right-0 mx-auto bg-brandBlack blur-2xl -z-20"></div>

            <div className='absolute top-1/2 transform -translate-y-1/2 lg:px-16 px-8'>
                <h1 className='text-white text-6xl uppercase leading-tight'>Fueling <span className='font-bold text-orangeLight'>Talent</span> <br /> with <span className='font-bold text-orangeLight'>limitless reach</span></h1>
                <div className="flex flex-row w-5/12 py-3 bg-orangeLight rounded-full text-white font-bold text-xl justify-center items-center align-middle mt-5 hover:bg-blueLight cursor-pointer transition-all">HIRE A TALENT <span className='ml-3'><FaArrowRightLong size={20}/></span></div>
                
            </div>
            
        </div>
    </div>
)
}

export default Landing
