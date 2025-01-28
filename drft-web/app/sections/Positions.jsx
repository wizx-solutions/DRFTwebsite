import CareerBlock from '@/components/CareerBlock'
import React from 'react'

const Positions = () => {
  return (
    <div className='relative w-full px-6 lg:px-40 lg:mt-28 mt-28 lg:py-10 mb-32 z-20 items-center justify-center text-center'>
      <div>
        <h1 className='text-white text-5xl font-semibold'>What We Excel At</h1>
        <h4 className=' text-gray-300 text-lg mt-3'>At DRFT Global, we specialize in connecting clients with <br /> top-tier talent in diverse fields:</h4>
      </div>
      <div className='mt-8 px-40'>
        <CareerBlock title={"IT"}/>
        <CareerBlock title={"Finance"}/>
        <CareerBlock title={"Operations"}/>
        <CareerBlock title={"Executive Assistance"}/>
        <CareerBlock title={"Marketing"}/>
        <CareerBlock title={"HR"}/>
      </div>
    </div>
  )
}

export default Positions
