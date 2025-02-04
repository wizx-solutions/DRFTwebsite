'use client'
import React, { useState } from 'react'

const AboutUs = () => {
    const [visible, setVisible] = useState(false);

    const handleReadMore = () => {
        setVisible(!visible);
    }

  return (
    <div className='relative w-full px-6 lg:px-40 lg:mt-28 mt-28 mb-32 z-20'>
      <div className='lg:flex lg:px-10'>
        <div className='lg:w-1/2 w-full text-white lg:mr-16'>
            <h3 className='text-2xl'>About Us?</h3>
            <div className='text-orangeLight font-bold lg:text-5xl text-4xl lg:px-4 px-2 border-l-4 border-orangeLight mt-3'>Bridging Borders,<br /> Breaking Barriers</div>
            <p className='mt-8 text-justify'><span className='text-orangeLight'>At DRFT Global</span>, we believe that exceptional talent knows no borders. Founded in 2024, our mission is to bridge the gap between global talent and top-tier clients, creating seamless connections that fuel innovation and success.
            <br /><br />
            In today’s fast-paced world, businesses need access to the best professionals, no matter where they are. We make this possible by matching our clients with highly skilled resources from around the world, ensuring they receive the most suitable talent for their needs. Our commitment is to provide a hassle-free process while delivering significant cost savings, making it possible to hire top-tier talent at a fraction of the usual hiring fees in the UK</p>
            <p className={`text-orangeLight mt-4 lg:visible ${visible? 'hidden' : 'visible'} lg:hidden`} onClick={handleReadMore}>Read more...</p>
        </div>
        <div className='lg:w-1/2 lg:justify-center lg:items-center  flex flex-col text-white'>
            <img src="/Icon Light.svg" width={280} alt="" className='lg:block hidden'/>
            <p className={`mt-10 text-justify  ${visible? 'visible' : 'hidden'} lg:block `}>
            Our resources gain access to global opportunities, paid in international currencies, with countless remote work possibilities. We fuel our talent by empowering professionals worldwide, connecting them with high-profile clients, and ensuring they receive the true value of their skills and expertise
            <br /><br />
            Whether you're looking for innovative solutions, a diverse team, or Reliable talent to help drive your business forward ,  DRFT Global is here to make it happen—effortlessly and affordably.
            </p>
            <p className={`text-orangeLight mt-4 lg:hidden ${visible? 'visible' : 'hidden'}`} onClick={handleReadMore}>Read less...</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
