'use client'
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const AboutUs = () => {
  return (
    <div className=' relative w-full px-6 lg:px-40 lg:mt-28 -mt-36 mb-32 z-20'>
      <div className='flex lg:flex-row flex-col w-full lg:px-10 px-4 lg:mb-8 mb-6'>
        <div className='text-white lg:w-1/3 w-full justify-center text-center lg:text-left lg:justify-start bg-blueLight/20 px-8 py-10 rounded-xl border border-orangeLight/50 hover:bg-blueLight/30 transition-all hover:-translate-y-2 cursor-default backdrop-blur-sm'>
            <h1 className='text-orangeLight font-bold text-4xl mb-3'>VISION</h1>
            <p className='lg:text-lg text-md'>Fueling dreams by bridging global talent and clients with unmatched affordability.</p>
        </div>

        <div className='text-white lg:w-2/3 w-full bg-blueLight/20 px-8 justify-center text-center lg:text-left lg:justify-start py-10 rounded-xl border border-orangeLight/50 lg:ml-8 hover:bg-blueLight/30 lg:mt-0 mt-6  transition-all hover:-translate-y-2 cursor-default'>
            <h1 className='text-orangeLight font-bold text-4xl mb-3'>MISSION</h1>
            <p className='lg:text-lg text-md'>Our mission is to empower UK businesses by bridging the gap to global talent, providing cost-effective, efficient, and innovative recruitment solutions for the remote-first future</p>
        </div>
      </div>
        <div className='flex lg:flex-row flex-col w-full lg:px-10 px-4 h-[260px]'>
            <div className="lg:w-1/3 w-full h-full lg:bg-blueLight/20 rounded-xl">
                <DotLottieReact src="https://lottie.host/4394f5ab-9b46-4606-a534-7cf841b4c3b0/PfS217eI77.lottie" loop autoplay width={70} height={100}/>
            </div>
            <div className='lg:w-2/3 w-full  rounded-xl lg:ml-8 lg:px-8 px-4 lg:py-10  text-center lg:text-left'>
                <h1 className='text-white text-3xl font-medium'>WHY SHOULD YOU TRUST <span className='text-4xl lg:text-5xl text-orangeLight font-bold'>DRFT?</span></h1>
                <p className='text-brandWhite mt-4 font-normal tracking-normal lg:text-lg text-md'>By bridging the gap between top-tier clients and exceptional professionals, we fuel success and empower growth in today’s remote first world. Choose DRFT Global – where talent meets opportunity, and dreams take flight.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
