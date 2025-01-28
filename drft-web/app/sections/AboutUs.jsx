import React from 'react'

const AboutUs = () => {
  return (
    <div className='relative w-full px-6 lg:px-40 lg:mt-28 -mt-36 mb-32 z-20'>
      <div className='flex lg:px-10'>
        <div className='lg:w-1/2 text-white mr-16'>
            <h3 className='text-2xl'>About Us?</h3>
            <div className='text-orangeLight font-bold text-5xl px-4 border-l-4 border-orangeLight mt-3'>Bridging Borders,<br /> Breaking Barriers</div>
            <p className='mt-8 text-justify'><span className='text-orangeLight'>At DRFT Global</span>, we believe that exceptional talent knows no borders. Founded in 2024, our mission is to bridge the gap between global talent and top-tier clients, creating seamless connections that fuel innovation and success.
            <br /><br />
            In today’s fast-paced world, businesses need access to the best professionals, no matter where they are. We make this possible by matching our clients with highly skilled resources from around the world, ensuring they receive the most suitable talent for their needs. Our commitment is to provide a hassle-free process while delivering significant cost savings, making it possible to hire top-tier talent at a fraction of the usual hiring fees in the UK</p>
        </div>
        <div className='lg:w-1/2 justify-center items-center  flex flex-col text-white'>
            <img src="/Icon Light.svg" width={250} alt="" />
            <p className='mt-10 text-justify'>
            <span className='text-orangeLight'>At DRFT Global</span>, we believe that exceptional talent knows no borders. Founded in 2024, our mission is to bridge the gap between global talent and top-tier clients, creating seamless connections that fuel innovation and success.
            <br /><br />
            In today’s fast-paced world, businesses need access to the best professionals, no matter where they are. We make this possible by matching our clients with highly skilled resources from around the world, ensuring they receive the most suitable talent for their needs. Our commitment is to provide a hassle-free process while delivering significant cost savings, making it possible to hire top-tier talent at a fraction of the usual hiring fees in the UK.
            </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
