'use client'
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const AboutUs = () => {
  return (
    <div className=' relative w-full px-6 lg:px-40 mt-32'>
      <div className='flex flex-row w-full px-10 mb-8'>
        <div className='text-white w-1/3 bg-blueLight/20 px-8 py-10 rounded-xl border border-orangeLight/50 hover:bg-blueLight/30 transition-all hover:-translate-y-2'>
            <h1 className='text-orangeLight font-bold text-4xl mb-3'>VISION</h1>
            <p className='text-lg'>Fueling dreams by bridging global talent and clients with unmatched affordability.</p>
        </div>

        <div className='text-white w-2/3 bg-blueLight/20 px-8 py-10 rounded-xl border border-orangeLight/50 ml-8 hover:bg-blueLight/30  transition-all hover:-translate-y-2'>
            <h1 className='text-orangeLight font-bold text-4xl mb-3'>MISSION</h1>
            <p className='text-lg'>Our mission is to empower UK businesses by bridging the gap to global talent, providing cost-effective, efficient, and innovative recruitment solutions for the remote-first future</p>
        </div>
      </div>
        <div className='flex flex-row w-full px-10 h-[260px]'>
            <div className="w-1/3 h-full bg-blueLight/20 rounded-xl">
                <DotLottieReact src="https://lottie.host/4394f5ab-9b46-4606-a534-7cf841b4c3b0/PfS217eI77.lottie" loop autoplay width={70} height={100}/>
            </div>
            <div className='w-2/3  rounded-xl ml-8 px-8 py-10 '>
                <h1 className='text-white text-3xl font-medium'>WHY SHOULD YOU TRUST <span className='text-5xl text-orangeLight font-bold'>DRFT?</span></h1>
                <p className='text-brandWhite mt-4 font-normal tracking-normal text-lg '>By bridging the gap between top-tier clients and exceptional professionals, we fuel success and empower growth in today’s remote first world. Choose DRFT Global – where talent meets opportunity, and dreams take flight.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
