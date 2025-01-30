import React from 'react'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa6";


const PageEnd = () => (
    <div className="w-[76%] text-white text-center md:w-[65%] mt-8 md:mt-20 mx-auto">
        <div className="text-2xl md:text-4xl font-medium">
            Your next great hire is just a conversation away. Reach out to us and watch your business
            <span className="text-customOrange font-bold"> DRIFT TOWARDS EXCELLENCE!</span>
        </div>
        <Link href="/login">
            <Button
                className="md:w-2/5 rounded-full bg-orangeLight font-semibold text-white hover:bg-brandWhite hover:text-orangeDark text-xl md:text-2xl p-4 md:p-8 mt-5 md:mt-12">
                Contact Us
            </Button>
        </Link>
        <div
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-10 md:mt-20 mb-10 gap-4 md:gap-8">
            <Link href="mailto:careers@drftglobal.com" className="flex gap-1.5 items-center justify-center hover:text-orangeLight">
                <FaEnvelope size={25}/>
                careers@drftglobal.com
            </Link>
            <span className="flex gap-1.5">
                <a href="tel:+94888718712" className='flex items-center justify-center gap-1.5 hover:text-orangeLight'> <FaPhone size={20}/>  (+94) 88 871 8712</a>
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
)

export default PageEnd
