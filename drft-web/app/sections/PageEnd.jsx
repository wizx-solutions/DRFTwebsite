'use client'
import React from 'react'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa6";


const PageEnd = () => (
    <div>
        <div className="w-[76%] text-white text-center md:w-[65%] mt-4 md:mt-20 mx-auto">
            <div className="text-2xl md:text-4xl font-medium">
                Your next great hire is just a conversation away. Reach out to us and watch your business
                <span className="text-customOrange font-bold"> DRIFT TOWARDS EXCELLENCE!</span>
            </div>
            <Link href="/login">
                <Button
                    className="md:w-2/5 w-3/5 rounded-full bg-orangeLight font-semibold text-white hover:bg-brandWhite hover:text-orangeDark text-xl md:text-2xl p-4 md:p-8 mt-5 md:mt-12">
                    Contact Us
                </Button>
            </Link>
            <div
                className="flex flex-col md:flex-row justify-center text-lg items-center space-y-4 md:space-y-0 md:space-x-4 mt-16 md:mt-20 mb-10 gap-0 md:gap-8">
                <Link href="mailto:careers@drftglobal.com" className="flex gap-1.5 items-center justify-center hover:text-orangeLight">
                    <FaEnvelope size={25}/>
                    careers@drftglobal.com
                </Link>
                <span className="flex gap-1.5">
                    <a href="tel:+94768071425" className='flex items-center justify-center gap-1.5 hover:text-orangeLight'> <FaPhone size={20}/>  (+94) 76 807 1425</a>
                </span>
                <span className="flex gap-6">
                    <Link href="https://www.instagram.com/" className="flex gap-1.5 hover:text-orangeLight">
                        <FaInstagram size={25}/>
                    </Link>
                    <Link href="https://www.linkedin.com/company/drft-global/" className="flex gap-1.5 hover:text-orangeLight">
                        <FaLinkedin size={25}/>
                    </Link>
                </span>
            </div>
        </div>
        <div className='lg:justify-between w-full flex lg:flex-row flex-col  text-white lg:px-10 pb-3 font-light justify-center items-center gap-1'>
            <p className="text-xs md:text-sm">
                © 2025 DRFT Global. All rights reserved.
            </p>
            <p className="text-xs md:text-sm">
                Designed & Developed by <span className='moving-gradient font-bold'>WizX Solutions</span>
            </p>
        </div>

        <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .moving-gradient {
          background: linear-gradient(to right, #22D1AE, #EAEAEA, #22D1AE);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
)

export default PageEnd
